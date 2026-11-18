// app/admin/maternity/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, ArrowLeft, Calendar, Phone, Trash2 } from "lucide-react";
import Link from "next/link";

export default function AdminMaternity() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchAppointments = async () => {
    const { data } = await supabase.from("maternity_appointments").select("*").order("created_at", { ascending: false });
    if (data) setAppointments(data);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) router.push("/admin/login");
      else {
        await fetchAppointments();
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this appointment record?")) return;
    await supabase.from("maternity_appointments").delete().eq("id", id);
    await fetchAppointments();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream-100 font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-cream-100 pb-20">
      <nav className="bg-mint-900 text-cream-50 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="hover:text-mint-300"><ArrowLeft size={20} /></Link>
          <span className="font-display font-bold text-xl">Maternity Appointments</span>
        </div>
        <button onClick={() => supabase.auth.signOut().then(() => router.push("/admin/login"))} className="text-sm bg-coral-500 hover:bg-coral-600 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
          <LogOut size={16} /> Logout
        </button>
      </nav>

      <div className="max-w-6xl mx-auto p-6 mt-8">
        <h2 className="font-display text-2xl font-bold text-mint-900 mb-6">Patient Bookings ({appointments.length})</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appointments.map((apt) => (
            <div key={apt.id} className="bg-white p-5 rounded-2xl border border-cream-200 shadow-soft relative">
              <button onClick={() => handleDelete(apt.id)} className="absolute top-4 right-4 text-coral-500 hover:bg-coral-50 p-2 rounded-lg"><Trash2 size={16} /></button>
              <h4 className="font-bold text-ink-900 text-lg mb-1">{apt.patient_name}</h4>
              <p className="text-sm text-mint-600 font-semibold mb-3">{apt.service_type}</p>
              
              <div className="flex flex-col gap-2 text-sm text-ink-600">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-mint-500"/> {apt.preferred_date}</span>
                <span className="flex items-center gap-2"><Phone size={14} className="text-mint-500"/> {apt.phone}</span>
              </div>

              {apt.notes && (
                <div className="mt-4 p-3 bg-cream-50 rounded-xl text-sm text-ink-500 border border-cream-200">
                  <span className="font-semibold block mb-1">Notes:</span>
                  {apt.notes}
                </div>
              )}
            </div>
          ))}
          {appointments.length === 0 && <p className="text-ink-500">No appointments booked yet.</p>}
        </div>
      </div>
    </div>
  );
}