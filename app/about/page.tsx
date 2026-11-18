// app/about/page.tsx
import Image from "next/image";
import { Target, Eye, Heart, Shield, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-4 py-1.5 mb-6 text-forest-700">
            <span className="text-xs font-semibold tracking-wide uppercase">About Church of God</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-6">
            Our Story. <span className="text-coral-500 italic">His Glory.</span>
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed">
            We are a modern, multi-generational family of faith dedicated to loving God, loving people, and serving our community. 
          </p>
        </div>

        {/* Image & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-lift">
            <Image src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" alt="Church congregation" fill className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold text-forest-900 mb-6">Our Mission & Vision</h2>
            <div className="flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft flex gap-4">
                <div className="w-12 h-12 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center flex-shrink-0"><Target size={24} /></div>
                <div>
                  <h3 className="font-bold text-lg text-ink-900 mb-1">Our Mission</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">To lead people into a growing relationship with Jesus Christ, equipping them to impact their world.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-cream-200 shadow-soft flex gap-4">
                <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-xl flex items-center justify-center flex-shrink-0"><Eye size={24} /></div>
                <div>
                  <h3 className="font-bold text-lg text-ink-900 mb-1">Our Vision</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">To be a beacon of hope and a center of excellence, transforming lives and communities through the power of the Gospel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-forest-900">What We Believe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-cream-200 text-center shadow-soft">
              <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4"><Shield size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-2">The Bible</h3>
              <p className="text-ink-500 text-sm">We believe the Bible is the inspired, infallible Word of God and our ultimate authority for life.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-cream-200 text-center shadow-soft">
              <div className="w-14 h-14 bg-coral-100 text-coral-600 rounded-full flex items-center justify-center mx-auto mb-4"><Heart size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-2">Salvation</h3>
              <p className="text-ink-500 text-sm">We believe salvation is a free gift from God, received through faith in Jesus Christ.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-cream-200 text-center shadow-soft">
              <div className="w-14 h-14 bg-mint-100 text-mint-600 rounded-full flex items-center justify-center mx-auto mb-4"><Users size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-2">Community</h3>
              <p className="text-ink-500 text-sm">We believe we are better together, and that true spiritual growth happens in community.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-forest-900 rounded-[3rem] p-12 text-center shadow-lift relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />
          <h2 className="font-display text-4xl font-bold text-cream-50 mb-4 relative z-10">Ready to be part of the family?</h2>
          <p className="text-cream-200 mb-8 max-w-xl mx-auto relative z-10">Join us this Sunday and experience the warmth of our community.</p>
          <Link href="/visit" className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold px-8 py-4 rounded-full transition-all relative z-10 shadow-lift hover:-translate-y-1">
            Plan a Visit <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}