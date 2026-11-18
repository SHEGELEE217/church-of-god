// app/admin/creche/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, ArrowLeft, Phone, User, Baby, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminCreche() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchApplications = async () => {
    const { data } = await supabase.from("creche_applications").select("*").order("created_at", { ascending: false });
    if (data) setApplications(data);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push("/admin/login");
      else {
        await fetchApplications();
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this application record?")) return;
    await supabase.from("creche_applications").delete().eq("id", id);
    await fetchApplications();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream-100 font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-cream-100 pb-20">
      <nav className="bg-gold-500 text-forest-900 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="hover:text-white"><ArrowLeft size={20} /></Link>
          <span className="font-display font-bold text-xl">Creche Admissions</span>
        </div>
        <button onClick={() => supabase.auth.signOut().then(() => router.push("/admin/login"))} className="text-sm bg-forest-900 text-cream-50 hover:bg-forest-800 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
          <LogOut size={16} /> Logout
        </button>
      </nav>

      <div className="max-w-6xl mx-auto p-6 mt-8">
        <h2 className="font-display text-2xl font-bold text-forest-900 mb-6">Admission Applications ({applications.length})</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {applications.map((app) => (
            <div key={app.id} className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft relative">
              <button onClick={() => handleDelete(app.id)} className="absolute top-4 right-4 text-coral-500 hover:bg-coral-50 p-2 rounded-lg"><Trash2 size={16} /></button>
              
              <div className="mb-4 pb-4 border-b border-cream-100">
                <p className="text-xs text-gold-600 font-bold uppercase tracking-wider mb-1">{app.program}</p>
                <h4 className="font-bold text-ink-900 text-lg flex items-center gap-2"><Baby size={18} className="text-gold-500"/> {app.child_name} <span className="text-sm font-normal text-ink-500">({app.child_age} yrs)</span></h4>
              </div>
              
              <div className="flex flex-col gap-2 text-sm text-ink-600">
                <span className="flex items-center gap-2"><User size={14} className="text-forest-500"/> {app.parent_name}</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-forest-500"/> {app.phone}</span>
              </div>

              {app.notes && (
                <div className="mt-4 p-3 bg-cream-50 rounded-xl text-sm text-ink-500 border border-cream-200">
                  <span className="font-semibold block mb-1 text-coral-500">Medical/Allergies:</span>
                  {app.notes}
                </div>
              )}
            </div>
          ))}
          {applications.length === 0 && <p className="text-ink-500">No applications received yet.</p>}
        </div>
      </div>
    </div>
  );
}