// app/admin/events/page.tsx
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { LogOut, CalendarDays, PlusCircle, Trash2, ArrowLeft, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function AdminEvents() {
  const [user, setUser] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [location, setLocation] = useState("");
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const fetchEvents = async () => {
    const { data } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true }); // Show upcoming first
    if (data) setEvents(data);
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      } else {
        setUser(session.user);
        await fetchEvents();
        setLoading(false);
      }
    };
    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("events").insert([
      {
        title,
        description,
        event_date: eventDate,
        event_time: eventTime,
        location
      }
    ]);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Event added successfully! ✅");
      setTitle(""); setDescription(""); setEventDate(""); setEventTime(""); setLocation("");
      await fetchEvents(); 
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    const { error } = await supabase.from("events").delete().eq("id", id);
    if (!error) await fetchEvents();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-cream-100 text-forest-800 font-bold">Loading...</div>;

  return (
    <div className="min-h-screen bg-cream-100 pb-20">
      <nav className="bg-forest-900 text-cream-50 px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="hover:text-gold-400 transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <span className="font-display font-bold text-xl">Manage Events</span>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm bg-coral-500 hover:bg-coral-600 px-4 py-2 rounded-lg transition-colors font-semibold">
          <LogOut size={16} /> Logout
        </button>
      </nav>

      <div className="max-w-6xl mx-auto p-6 mt-8 grid lg:grid-cols-2 gap-8">
        
        {/* Form */}
        <div className="bg-white p-8 rounded-3xl shadow-soft border border-cream-200 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gold-100 text-gold-600 rounded-xl flex items-center justify-center">
              <PlusCircle size={20} />
            </div>
            <h2 className="font-display text-2xl font-bold text-forest-900">Add New Event</h2>
          </div>

          {message && (
            <div className={`p-3 rounded-xl text-sm mb-4 ${message.includes('Error') ? 'bg-coral-50 text-coral-600 border border-coral-200' : 'bg-forest-50 text-forest-700 border border-forest-200'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleAddEvent} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-ink-700 mb-1">Event Title</label>
              <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="e.g., Annual Faith Convention" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-ink-700 mb-1">Date</label>
                <input required type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ink-700 mb-1">Time</label>
                <input required type="text" value={eventTime} onChange={(e) => setEventTime(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="e.g., 9:00 AM - 3:00 PM" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink-700 mb-1">Location</label>
              <input required type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500" placeholder="e.g., Main Sanctuary" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-ink-700 mb-1">Description</label>
              <textarea required rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2.5 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 resize-none" placeholder="Brief details about the event..." />
            </div>
            
            <button type="submit" disabled={saving} className="mt-4 w-full bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold py-3 rounded-xl transition-all">
              {saving ? "Saving..." : "Publish Event"}
            </button>
          </form>
        </div>

        {/* List of Events */}
        <div>
          <h2 className="font-display text-2xl font-bold text-forest-900 mb-6">Upcoming Events ({events.length})</h2>
          <div className="flex flex-col gap-4">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-5 rounded-2xl border border-cream-200 flex justify-between items-start shadow-soft">
                <div>
                  <h4 className="font-bold text-ink-900 text-lg leading-tight mb-1">{event.title}</h4>
                  <div className="flex items-center gap-3 text-sm text-ink-500 mb-2">
                     <span className="flex items-center gap-1"><CalendarDays size={14} className="text-forest-600"/> {event.event_date}</span>
                     <span className="flex items-center gap-1"><Clock size={14} className="text-coral-500"/> {event.event_time}</span>
                  </div>
                  <p className="text-sm text-ink-500 flex items-center gap-1"><MapPin size={14} className="text-forest-600"/> {event.location}</p>
                </div>
                <button onClick={() => handleDelete(event.id)} className="p-2 text-coral-500 hover:bg-coral-50 rounded-lg transition-colors flex-shrink-0">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            {events.length === 0 && <p className="text-ink-500">No events scheduled yet.</p>}
          </div>
        </div>

      </div>
    </div>
  );
}