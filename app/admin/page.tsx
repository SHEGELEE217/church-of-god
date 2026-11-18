// app/admin/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, Megaphone, PlusCircle, LayoutDashboard } from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      } else {
        setUser(session.user);
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("announcements").insert([
      { title, content, is_urgent: isUrgent }
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Announcement posted successfully! ✅");
      setTitle("");
      setContent("");
      setIsUrgent(false);
    }
    setSaving(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream-100 text-forest-800 font-bold">Loading Dashboard...</div>;

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Top Navbar */}
      <nav className="bg-forest-900 text-cream-50 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <LayoutDashboard size={24} className="text-gold-400" />
          <span className="font-display font-bold text-xl">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-cream-200 hidden sm:block">{user?.email}</span>
          <button onClick={handleLogout} className="flex items-center gap-2 text-sm bg-coral-500 hover:bg-coral-600 px-4 py-2 rounded-lg transition-colors font-semibold">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 mt-8">
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Create Announcement Form */}
          <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center">
                <Megaphone size={20} />
              </div>
              <h2 className="font-display text-2xl font-bold text-forest-900">New Announcement</h2>
            </div>

            {message && (
              <div className={`p-3 rounded-xl text-sm mb-4 ${message.includes('Error') ? 'bg-coral-50 text-coral-600 border border-coral-200' : 'bg-forest-50 text-forest-700 border border-forest-200'}`}>
                {message}
              </div>
            )}

            <form onSubmit={handleCreateAnnouncement} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900"
                  placeholder="e.g., Mid-week service moved"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink-700 mb-1">Content</label>
                <textarea
                  required
                  rows={3}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-ink-900 resize-none"
                  placeholder="Write the details here..."
                />
              </div>
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  id="urgent" 
                  checked={isUrgent} 
                  onChange={(e) => setIsUrgent(e.target.checked)} 
                  className="w-5 h-5 accent-coral-500"
                />
                <label htmlFor="urgent" className="text-sm font-medium text-ink-700 cursor-pointer">
                  Mark as Urgent (Highlights in Gold)
                </label>
              </div>
              <button
                type="submit"
                disabled={saving}
                className="mt-2 w-full bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                <PlusCircle size={18} />
                {saving ? "Posting..." : "Post Announcement"}
              </button>
            </form>
          </div>

               {/* Quick Links / Info */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-cream-200 flex items-center justify-between hover:shadow-lift transition cursor-pointer">
              <div>
                <h3 className="font-bold text-ink-900">Manage Sermons</h3>
                <p className="text-sm text-ink-500">Upload new audio/video</p>
              </div>
              <Link href="/admin/sermons" className="w-10 h-10 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center hover:bg-forest-100">&rarr;</Link>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-soft border border-cream-200 flex items-center justify-between hover:shadow-lift transition cursor-pointer">
              <div>
                <h3 className="font-bold text-ink-900">Manage Events</h3>
                <p className="text-sm text-ink-500">Add upcoming calendar dates</p>
              </div>
              <Link href="/admin/events" className="w-10 h-10 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center hover:bg-forest-100">&rarr;</Link>
            </div>

            <div className="bg-mint-50 p-6 rounded-3xl shadow-soft border border-mint-200 flex items-center justify-between hover:shadow-lift transition cursor-pointer">
              <div>
                <h3 className="font-bold text-mint-900">Maternity Bookings</h3>
                <p className="text-sm text-mint-600">View patient appointments</p>
              </div>
              <Link href="/admin/maternity" className="w-10 h-10 bg-mint-200 text-mint-800 rounded-full flex items-center justify-center hover:bg-mint-300">&rarr;</Link>
            </div>

            <div className="bg-gold-50 p-6 rounded-3xl shadow-soft border border-gold-200 flex items-center justify-between hover:shadow-lift transition cursor-pointer">
              <div>
                <h3 className="font-bold text-gold-900">Creche Admissions</h3>
                <p className="text-sm text-gold-700">View student applications</p>
              </div>
              <Link href="/admin/creche" className="w-10 h-10 bg-gold-200 text-gold-800 rounded-full flex items-center justify-center hover:bg-gold-300">&rarr;</Link>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-soft border border-cream-200 flex items-center justify-between hover:shadow-lift transition cursor-pointer">
              <div>
                <h3 className="font-bold text-ink-900">Messages & Prayers</h3>
                <p className="text-sm text-ink-500">Read contact form submissions</p>
              </div>
              <Link href="/admin/messages" className="w-10 h-10 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center hover:bg-forest-100">&rarr;</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}