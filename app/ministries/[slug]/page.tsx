// app/ministries/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const ministryData: Record<string, any> = {
  "house-fellowships": {
    title: "House Fellowships",
    tagline: "Doing life together.",
    description: "Our House Fellowships are small groups that meet in homes across the city. It's where we pray together, study the Word, eat together, and support one another through life's journey. It's the best way to find community in a large church.",
    time: "Wednesdays at 6:30 PM",
    location: "Various homes across the city",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    cta: "Find a Fellowship Near You"
  },
  "digging-deep": {
    title: "Digging Deep",
    tagline: "Uncovering the profound truths of the Word.",
    description: "Digging Deep is our midweek Bible study service. We take a deep dive into the scriptures, breaking down complex theological concepts into practical, everyday wisdom. Whether you are a new believer or have been in the faith for decades, you will leave spiritually fed.",
    time: "Wednesdays at 6:00 PM",
    location: "Main Sanctuary & Online",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    cta: "Join Us This Wednesday"
  },
  "faith-clinic": {
    title: "Faith Clinic",
    tagline: "A time of prayer and spiritual restoration.",
    description: "Every Friday, we gather to seek the face of God. Faith Clinic is a dedicated time for intercessory prayer, worship, and receiving healing—spiritually, emotionally, and physically. Come with your burdens, and leave with the peace of God.",
    time: "Fridays at 6:00 PM",
    location: "Prayer Tabernacle",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    cta: "Submit a Prayer Request"
  },
  "evangelism": {
    title: "Evangelism",
    tagline: "Taking the gospel beyond our walls.",
    description: "We believe the church is not a building, but the people. Our evangelism team hits the streets, markets, and communities to share the love of Jesus, distribute food, and pray for people. Join us as we take the light of the world into dark places.",
    time: "Saturdays at 8:00 AM",
    location: "Meeting at the Church Car Park",
    image: "https://images.unsplash.com/photo-1594950301477-7951f04258fa?auto=format&fit=crop&w=1200&q=80",
    cta: "Join the Mission Field"
  }
};

export default async function MinistryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = ministryData[slug];

  if (!data) {
    notFound(); // Shows the 404 page if the slug doesn't exist
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-4">{data.title}</h1>
          <p className="text-xl text-coral-500 font-display italic">{data.tagline}</p>
        </div>

        <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-lift mb-12">
          <Image src={data.image} alt={data.title} fill className="object-cover" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-bold text-forest-900 mb-4">About this Ministry</h2>
            <p className="text-lg text-ink-700 leading-relaxed mb-8">{data.description}</p>
            
            <Link href="/contact" className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold px-8 py-3.5 rounded-full transition-all">
              {data.cta} <ArrowRight size={18} />
            </Link>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft h-fit">
            <h3 className="font-bold text-ink-900 mb-4 text-lg">Meeting Details</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Clock className="text-coral-500 mt-1" size={20} />
                <div>
                  <p className="text-sm font-semibold text-ink-900">When</p>
                  <p className="text-sm text-ink-600">{data.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-forest-600 mt-1" size={20} />
                <div>
                  <p className="text-sm font-semibold text-ink-900">Where</p>
                  <p className="text-sm text-ink-600">{data.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}