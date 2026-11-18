// app/sermons/page.tsx
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { Play, Calendar, User, ArrowRight } from "lucide-react";

export default async function SermonsPage() {
  // Fetch sermons from Supabase
  const { data: sermons } = await supabase
    .from("sermons")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-cream-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-forest-700 tracking-wide uppercase">Sermon Archive</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-4">
            Feed your spirit.
          </h1>
          <p className="text-ink-600 text-lg">
            Catch up on past messages, series, and teachings from Church of God.
          </p>
        </div>

        {/* Sermon Grid */}
        {sermons && sermons.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sermons.map((sermon) => (
              <a 
                key={sermon.id} 
                href={sermon.video_url || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 border border-cream-200 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={sermon.thumbnail_url || "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=800&q=80"} 
                    alt={sermon.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-ink-900/20 group-hover:bg-ink-900/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-coral-500/90 text-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-coral-500 transition-all shadow-lift">
                      <Play size={24} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  {sermon.series_name && (
                    <div className="absolute top-4 left-4 bg-gold-400 text-forest-900 text-xs font-bold px-3 py-1 rounded-full">
                      {sermon.series_name}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="font-display text-xl font-bold text-ink-900 leading-tight mb-2 group-hover:text-forest-700 transition-colors">
                    {sermon.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-ink-500 mt-auto pt-4">
                    <span className="flex items-center gap-1.5"><User size={16} className="text-coral-500" /> {sermon.preacher}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-cream-200 max-w-2xl mx-auto">
            <Play size={48} className="mx-auto text-cream-400 mb-4" />
            <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">No sermons yet</h3>
            <p className="text-ink-500">Check back soon or watch our live stream on Sundays!</p>
          </div>
        )}

      </div>
    </div>
  );
}