// app/announcements/page.tsx
import { supabase } from "@/lib/supabase";
import { Megaphone, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function AnnouncementsPage() {
  // Fetch all announcements from Supabase
  const { data: announcements } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-cream-50 pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-4 py-1.5 mb-6 text-forest-700">
            <Megaphone size={16} />
            <span className="text-xs font-semibold tracking-wide uppercase">Church News</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-4">
            Announcements
          </h1>
          <p className="text-ink-600 text-lg">
            Stay up to date with everything happening in the Church of God family.
          </p>
        </div>

        {/* Announcements List */}
        <div className="flex flex-col gap-6">
          {announcements && announcements.length > 0 ? (
            announcements.map((announcement) => (
              <div 
                key={announcement.id} 
                className={`bg-white p-8 rounded-3xl border shadow-soft hover:shadow-lift transition-all duration-300 ${
                  announcement.is_urgent ? 'border-coral-300 bg-coral-50/30' : 'border-cream-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {announcement.is_urgent && (
                    <span className="bg-coral-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> Urgent
                    </span>
                  )}
                  <span className="flex items-center gap-1.5 text-sm text-ink-400 font-medium">
                    <Calendar size={14} /> 
                    {new Date(announcement.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                
                <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">
                  {announcement.title}
                </h2>
                <p className="text-ink-600 leading-relaxed">
                  {announcement.content}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-cream-200">
              <Megaphone size={48} className="mx-auto text-cream-400 mb-4" />
              <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">No announcements right now</h3>
              <p className="text-ink-500">Check back soon for updates from the church office.</p>
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-900 transition-colors">
            <ArrowLeft size={18} /> Back to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}