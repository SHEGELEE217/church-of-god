// app/admin/sermons/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, Play, PlusCircle, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminSermons() {
  const [user, setUser] = useState<any>(null);
  const [sermons, setSermons] = useState<any[]>([]);
  
  // Form state
  const [title, setTitle] = useState("");
  const [preacher, setPreacher] = useState("");
  const [seriesName, setSeriesName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  // 1. Fetch sermons & check auth
  const fetchSermons = async () => {
    const { data } = await supabase
      .from("sermons")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setSermons(data);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      } else {
        setUser(session.user);
        await fetchSermons();
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  // 2. Handle Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  // 3. Add Sermon
  const handleAddSermon = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("sermons").insert([
      {
        title,
        preacher,
        series_name: seriesName,
        video_url: videoUrl,
        thumbnail_url: thumbnailUrl || "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80" // fallback image
      }
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Sermon added successfully! ✅");
      setTitle(""); setPreacher(""); setSeriesName(""); setVideoUrl(""); setThumbnailUrl("");
      await fetchSermons(); // Refresh the list
    }
    setSaving(false);
  };

  // 4. Delete Sermon
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this sermon?")) return;
    
    const { error } = await supabase.from("sermons").delete().eq("id", id);
    if (!error) {
      await fetchSermons();
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream-100 text-forest-800 font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-cream-100 pb-20">
      {/* Navbar */}
      <nav className="bg-forest-900 text-cream-50 px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="hover:text-gold-400 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-display font-bold text-xl">Manage Sermons</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm bg-coral-500 hover:bg-coral-600 px-4 py-2 rounded-lg transition-colors font-semibold">
          <LogOut size={16} /> Logout
        </button>
      </nav>

      <div className="max-w-6xl mx-auto p-6 mt-8 grid lg:grid-cols-2 gap-8">
        
        {/* Form */}
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream-200 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center">
              <PlusCircle size={20} />
            </div>
            <h2 className="font-display text-2xl font-bold text-forest-900">Add New Sermon</h2>
          </div>

          {message && (
            <div className={`p-3 rounded-xl text-sm mb-4 ${message.includes('Error') ? 'bg-coral-50 text-coral-600 border border-coral-200' : 'bg-forest-50 text-forest-700 border border-forest-200'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleAddSermon} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-ink-700 mb-1">Sermon Title</label>
              <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="e.g., The Power of Faith" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink-700 mb-1">Preacher</label>
                <input required type="text" value={preacher} onChange={(e) => setPreacher(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="e.g., Pastor David" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink-700 mb-1">Series (Optional)</label>
                <input type="text" value={seriesName} onChange={(e) => setSeriesName(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="e.g., Anchored" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink-700 mb-1">YouTube Video Link</label>
              <input type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="https://youtube.com/watch?v=..." />
            </div>
            <div>
              <label className="block text-sm font-semibold text-ink-700 mb-1">Thumbnail Image URL (Optional)</label>
              <input type="url" value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="Paste an image link..." />
            </div>
            
            <button type="submit" disabled={saving} className="mt-4 w-full bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold py-3 rounded-xl transition-all">
              {saving ? "Saving..." : "Publish Sermon"}
            </button>
          </form>
        </div>

        {/* List of Sermons */}
        <div>
          <h2 className="font-display text-2xl font-bold text-forest-900 mb-6">Published Sermons ({sermons.length})</h2>
          <div className="flex flex-col gap-4">
            {sermons.map((sermon) => (
              <div key={sermon.id} className="bg-white p-4 rounded-2xl border border-cream-200 flex items-center gap-4 shadow-soft">
                <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-ink-200">
                  {sermon.thumbnail_url && <img src={sermon.thumbnail_url} alt={sermon.title} className="w-full h-full object-cover" />}
                </div>
                <div className="flex-grow">
                  <h4 className="font-bold text-ink-900 leading-tight">{sermon.title}</h4>
                  <p className="text-sm text-ink-500 mt-1">{sermon.preacher} {sermon.series_name && `· ${sermon.series_name}`}</p>
                </div>
                <button onClick={() => handleDelete(sermon.id)} className="p-2 text-coral-500 hover:bg-coral-50 rounded-lg transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            {sermons.length === 0 && <p className="text-ink-500">No sermons added yet.</p>}
          </div>
        </div>

      </div>
    </div>
  );
}