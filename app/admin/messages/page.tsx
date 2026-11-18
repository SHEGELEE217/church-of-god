// app/admin/messages/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, ArrowLeft, Mail, Phone, Trash2, Heart } from "lucide-react";
import Link from "next/link";

export default function AdminMessages() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchMessages = async () => {
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    if (data) setMessages(data);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push("/admin/login");
      else {
        await fetchMessages();
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await supabase.from("contact_messages").delete().eq("id", id);
    await fetchMessages();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream-100 font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-cream-100 pb-20">
      <nav className="bg-forest-900 text-cream-50 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="hover:text-gold-400"><ArrowLeft size={20} /></Link>
          <span className="font-display font-bold text-xl">Inbox & Prayer Wall</span>
        </div>
        <button onClick={() => supabase.auth.signOut().then(() => router.push("/admin/login"))} className="text-sm bg-coral-500 hover:bg-coral-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
          <LogOut size={16} /> Logout
        </button>
      </nav>

      <div className="max-w-5xl mx-auto p-6 mt-8">
        <h2 className="font-display text-2xl font-bold text-forest-900 mb-6">Recent Messages ({messages.length})</h2>
        <div className="grid gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft relative flex flex-col md:flex-row gap-6">
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                    msg.request_type === 'Prayer Request' ? 'bg-coral-50 text-coral-600' : 
                    msg.request_type === 'Pastoral Counseling' ? 'bg-gold-50 text-gold-600' : 'bg-forest-50 text-forest-700'
                  }`}>
                    {msg.request_type}
                  </span>
                  <span className="text-xs text-ink-400">{new Date(msg.created_at).toLocaleDateString()}</span>
                </div>
                
                <h4 className="font-bold text-ink-900 text-lg mb-1">{msg.name}</h4>
                <p className="text-sm text-ink-600 mb-4">{msg.message}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-ink-500">
                  <a href={`mailto:${msg.email}`} className="flex items-center gap-1 hover:text-forest-600"><Mail size={14} /> {msg.email}</a>
                </div>
              </div>

              <div className="flex items-start">
                <button onClick={() => handleDelete(msg.id)} className="p-2 text-coral-500 hover:bg-coral-50 rounded-lg transition-colors">
                  <Trash2 size={20} />
                </button>
              </div>

            </div>
          ))}
          {messages.length === 0 && <p className="text-ink-500 text-center py-10">No messages yet.</p>}
        </div>
      </div>
    </div>
  );
}