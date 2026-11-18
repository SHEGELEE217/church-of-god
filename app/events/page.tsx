// app/events/page.tsx
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { CalendarDays, Clock, MapPin, ArrowRight } from "lucide-react";

export default async function EventsPage() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: true });

  return (
    <div className="min-h-screen bg-cream-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-50 border border-coral-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-coral-600 tracking-wide uppercase">Church Calendar</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-4">
            Upcoming Events.
          </h1>
          <p className="text-ink-600 text-lg">
            Find out what's happening at Church of God and mark your calendar. There's always something great happening.
          </p>
        </div>

        {/* Events Grid */}
        {events && events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => {
              // Format the date beautifully
              const dateObj = new Date(event.event_date);
              const month = dateObj.toLocaleString('default', { month: 'short' });
              const day = dateObj.getDate();

              return (
                <div key={event.id} className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-lift transition-all border border-cream-200 flex flex-col h-full group">
                  
                  <div className="flex items-start gap-6 mb-6">
                    {/* Date Badge */}
                    <div className="w-20 h-20 bg-forest-700 text-cream-50 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-forest-800 transition-colors">
                      <span className="text-xs font-medium uppercase tracking-wider text-gold-400">{month}</span>
                      <span className="font-display text-3xl font-black leading-none mt-1">{day}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-ink-900 leading-tight group-hover:text-forest-700 transition-colors mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-col gap-2 text-sm text-ink-500">
                        <span className="flex items-center gap-1.5"><Clock size={16} className="text-coral-500" /> {event.event_time}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={16} className="text-forest-600" /> {event.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-ink-600 text-sm leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>

                  <button className="w-full py-3 bg-cream-50 hover:bg-forest-50 text-forest-700 font-semibold rounded-xl border border-cream-200 transition-colors text-sm">
                    Register for this Event
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-cream-200 max-w-2xl mx-auto">
            <CalendarDays size={48} className="mx-auto text-cream-400 mb-4" />
            <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">No upcoming events</h3>
            <p className="text-ink-500">Check back soon for our next church program!</p>
          </div>
        )}

      </div>
    </div>
  );
}