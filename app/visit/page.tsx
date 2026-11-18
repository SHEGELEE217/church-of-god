// app/visit/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Coffee, Baby, ArrowRight, CheckCircle2, UserCheck } from "lucide-react";

export default function PlanVisitPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-4 py-1.5 mb-6 text-forest-700">
            <UserCheck size={16} />
            <span className="text-xs font-semibold tracking-wide uppercase">First Time Guest?</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-6">
            Your first visit, <br/> <span className="text-coral-500 italic">made simple.</span>
          </h1>
          <p className="text-lg text-ink-600 leading-relaxed">
            We know visiting a new church can be intimidating. Here is everything you need to know to make your first Sunday with us a breeze. We can't wait to meet you!
          </p>
        </div>

        {/* WHAT TO EXPECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-soft text-center">
            <div className="w-14 h-14 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center mx-auto mb-4"><Clock size={28} /></div>
            <h3 className="font-display text-xl font-bold mb-2">Service Length</h3>
            <p className="text-sm text-ink-500">Our Sunday services last about 90 minutes. We start on time and end on time.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-soft text-center">
            <div className="w-14 h-14 bg-coral-100 text-coral-600 rounded-full flex items-center justify-center mx-auto mb-4"><Coffee size={28} /></div>
            <h3 className="font-display text-xl font-bold mb-2">What to Wear</h3>
            <p className="text-sm text-ink-500">Come as you are! Some wear suits, others wear jeans. We care more about you than your outfit.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-soft text-center">
            <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4"><Baby size={28} /></div>
            <h3 className="font-display text-xl font-bold mb-2">For Your Kids</h3>
            <p className="text-sm text-ink-500">We have a secure, fun Creche and Children's Church for kids up to age 12 during the service.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-cream-200 shadow-soft text-center">
            <div className="w-14 h-14 bg-mint-100 text-mint-600 rounded-full flex items-center justify-center mx-auto mb-4"><MapPin size={28} /></div>
            <h3 className="font-display text-xl font-bold mb-2">Easy Parking</h3>
            <p className="text-sm text-ink-500">We have ample, secure parking on the church premises with attendants to guide you.</p>
          </div>
        </div>

        {/* LOCATION & TIMES */}
        <div className="bg-forest-900 rounded-[3rem] overflow-hidden shadow-lift flex flex-col lg:flex-row mb-20">
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px]">
            <Image 
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80" 
              alt="Church Building" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-forest-900/20" />
          </div>
          
          {/* Info Side */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />
            <h2 className="font-display text-4xl font-bold text-cream-50 mb-8 relative z-10">Join Us This Sunday</h2>
            
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-800 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cream-50 mb-1">Our Location</h4>
                  <p className="text-cream-200/80">12 Grace Avenue, Harmony Estate,<br/> Lagos, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest-800 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-cream-50 mb-1">Service Times</h4>
                  <p className="text-cream-200/80">1st Service: 8:00 AM - 9:30 AM<br/>2nd Service: 10:30 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-cream-50/10 relative z-10">
              <p className="text-sm text-cream-200 mb-4">Let us know you're coming so we can prepare a welcome gift for you!</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold px-6 py-3 rounded-full transition-all shadow-lift">
                Let Us Know You're Coming <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ / REASSURANCE */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-forest-900 mb-8">What to expect when you arrive</h2>
          <div className="flex flex-col gap-4 text-left">
            <div className="flex gap-4 bg-white p-6 rounded-2xl border border-cream-200 shadow-soft">
              <CheckCircle2 className="text-forest-500 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-ink-900">Warm Welcome</h4>
                <p className="text-sm text-ink-600 mt-1">Our greeting team will be at the door to welcome you, answer any questions, and help you find your way around.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-2xl border border-cream-200 shadow-soft">
              <CheckCircle2 className="text-forest-500 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-ink-900">Check-In for Kids</h4>
                <p className="text-sm text-ink-600 mt-1">We have a secure check-in system for all children. Your kids will be safe and have a blast while you enjoy the service.</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-6 rounded-2xl border border-cream-200 shadow-soft">
              <CheckCircle2 className="text-forest-500 flex-shrink-0 mt-0.5" size={24} />
              <div>
                <h4 className="font-bold text-ink-900">Spirit-Filled Worship</h4>
                <p className="text-sm text-ink-600 mt-1">We worship with modern songs and hymns, followed by a practical, Bible-based message that applies to your everyday life.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}