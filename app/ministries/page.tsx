// app/ministries/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home as HomeIcon, BookOpen, HeartPulse, Megaphone, Baby, Smile } from "lucide-react";

const ministries = [
  { slug: "house-fellowships", title: "House Fellowships", desc: "Doing life together, one home at a time.", icon: HomeIcon, color: "forest" },
  { slug: "digging-deep", title: "Digging Deep", desc: "Uncovering the profound truths of the Word.", icon: BookOpen, color: "gold" },
  { slug: "faith-clinic", title: "Faith Clinic", desc: "A time of prayer, healing, and restoration.", icon: HeartPulse, color: "coral" },
  { slug: "evangelism", title: "Evangelism", desc: "Taking the gospel beyond our walls.", icon: Megaphone, color: "mint" },
  { slug: "maternity", title: "Maternity Center", desc: "Caring for mothers and miracles.", icon: Baby, color: "forest" },
  { slug: "creche", title: "Creche & Academy", desc: "Where little minds grow and play.", icon: Smile, color: "gold" },
];

export default function MinistriesPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-4">Our Ministries</h1>
          <p className="text-ink-600 text-lg">There is a place for everyone to connect, grow, and serve.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((min) => {
            // Handle standalone pages for maternity and creche
            const link = min.slug === "maternity" || min.slug === "creche" 
              ? `/${min.slug}` 
              : `/ministries/${min.slug}`;

            return (
              <Link key={min.slug} href={link} className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-lift border border-cream-200 overflow-hidden flex flex-col justify-between min-h-[280px]">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${min.color}-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform`} />
                <div>
                  <div className={`w-14 h-14 bg-${min.color}-100 text-${min.color}-700 rounded-2xl flex items-center justify-center mb-6`}>
                    <min.icon size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">{min.title}</h3>
                  <p className="text-ink-500 text-sm leading-relaxed">{min.desc}</p>
                </div>
                <div className={`mt-6 flex items-center gap-2 text-${min.color}-600 font-semibold text-sm`}>
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}