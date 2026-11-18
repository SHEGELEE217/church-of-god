// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Play, MapPin, Clock, Calendar, CalendarDays, User, 
  Home as HomeIcon, BookOpen, HeartPulse, Megaphone, Baby, Smile, Bell, Quote, Star,
  Users, MessageCircle
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default async function Home() {
  // Fetch announcements from Supabase
  const { data: announcements } = await supabase
    .from("announcements")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(3);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-cream-100">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-forest-200/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-96 h-96 bg-coral-200/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
              <span className="text-xs font-semibold text-forest-700 tracking-wide">
                WELCOME HOME
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-ink-900">
              <span className="text-forest-700">Belong.</span>{" "}
              <span className="text-coral-500">Believe.</span>{" "}
              <span className="text-gold-500">Become.</span>
            </h1>

            <p className="mt-6 text-lg text-ink-600 max-w-xl leading-relaxed">
              A modern family of faith where every soul finds home, every gift finds purpose,
              and every life finds hope — no matter where you're starting from.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/visit"
                className="group inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-cream-50 font-semibold px-6 py-3.5 rounded-full transition-all shadow-soft hover:shadow-lift hover:-translate-y-0.5"
              >
                Plan Your Visit
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/sermons"
                className="group inline-flex items-center gap-2 bg-cream-50 hover:bg-cream-200 text-forest-800 font-semibold px-6 py-3.5 rounded-full border border-forest-200 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-forest-700 flex items-center justify-center">
                  <Play size={12} fill="currentColor" className="text-cream-50 ml-0.5" />
                </div>
                Watch Latest Sermon
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-2 text-sm text-ink-700">
                <Clock size={16} className="text-forest-600" />
                <span><strong>Sundays</strong> · 8AM & 10:30AM</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-700">
                <MapPin size={16} className="text-forest-600" />
                <span>12 Grace Avenue, Lagos</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-lift aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80"
                alt="Worship at Church of God"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-4 md:left-0 bg-cream-50 rounded-2xl shadow-lift p-5 max-w-[220px] animate-float">
              <p className="text-xs font-semibold text-coral-500 tracking-wide">NEXT SERVICE</p>
              <p className="font-display font-bold text-ink-900 text-xl mt-1">Sunday Worship</p>
              <p className="text-sm text-ink-500 mt-1">This Sunday · 8:00 AM</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-forest-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-forest-500 animate-pulse" />
                In-person & Online
              </div>
            </div>

            <div className="absolute -top-4 -right-2 md:-right-4 bg-gold-400 rounded-2xl shadow-lift p-4 text-forest-900">
              <p className="font-display font-black text-2xl leading-none">2,500+</p>
              <p className="text-xs font-medium mt-1">souls in our family</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ QUICK SERVICE STRIP ══════════ */}
      <section className="bg-forest-900 text-cream-50 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-wrap justify-between gap-6 text-sm">
          <div><span className="text-gold-400 font-semibold">SUNDAY:</span> Celebration Service · 8AM & 10:30AM</div>
          <div><span className="text-gold-400 font-semibold">WEDNESDAY:</span> Digging Deep · 6PM</div>
          <div><span className="text-gold-400 font-semibold">FRIDAY:</span> Faith Clinic · 6PM</div>
          <div><span className="text-gold-400 font-semibold">DAILY:</span> House Fellowships · Various Locations</div>
        </div>
      </section>

      {/* ══════════ LATEST SERMON & SERIES ══════════ */}
      <section className="py-24 bg-cream-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-coral-50 text-coral-600 px-3 py-1 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-coral-500"></span>
                <span className="text-xs font-bold tracking-wider uppercase">Latest Message</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900">
                Feed your spirit.
              </h2>
            </div>
            <Link href="/sermons" className="group flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-900 transition-colors">
              View all sermons <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-[2rem] overflow-hidden group cursor-pointer aspect-video shadow-lift">
              <Image src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1200&q=80" alt="Latest Sermon" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-coral-500/90 text-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 group-hover:bg-coral-500 transition-all shadow-lift">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-cream-50">
                <div className="flex items-center gap-4 text-sm mb-3 text-cream-200">
                  <span className="flex items-center gap-1.5"><Calendar size={16} /> Sunday, Oct 12</span>
                  <span className="flex items-center gap-1.5"><User size={16} /> Pastor David</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">The Power of Unshakeable Faith</h3>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-2xl p-4 flex gap-5 hover:shadow-soft transition-shadow cursor-pointer group border border-cream-200">
                <div className="relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=400&q=80" alt="Series" fill className="object-cover" />
                  <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-bold text-gold-600 tracking-wider uppercase mb-1">Current Series</p>
                  <h4 className="font-display font-bold text-lg text-ink-900 leading-tight">Anchored: Standing Firm in the Storm</h4>
                  <p className="text-sm text-ink-500 mt-1">4 Parts · 2 weeks ago</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 flex gap-5 hover:shadow-soft transition-shadow cursor-pointer group border border-cream-200">
                <div className="relative w-32 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src="https://images.unsplash.com/photo-1445635404364-15ba4e83e585?auto=format&fit=crop&w=400&q=80" alt="Series" fill className="object-cover" />
                  <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-bold text-gold-600 tracking-wider uppercase mb-1">Past Series</p>
                  <h4 className="font-display font-bold text-lg text-ink-900 leading-tight">Identity: Who You Are in Christ</h4>
                  <p className="text-sm text-ink-500 mt-1">6 Parts · 1 month ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ MINISTRIES GRID ══════════ */}
      <section className="py-24 bg-forest-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-4">
              Find your place. <br className="hidden md:block"/> 
              <span className="text-coral-500 italic">Grow your faith.</span>
            </h2>
            <p className="text-ink-600 text-lg">
              From house fellowships to our maternity center, there is a place for you to connect, heal, and serve at Church of God.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/ministries/house-fellowships" className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-lift border border-cream-200 overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div>
                <div className="w-14 h-14 bg-forest-100 text-forest-700 rounded-2xl flex items-center justify-center mb-6"><HomeIcon size={28} /></div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">House Fellowships</h3>
                <p className="text-ink-500 text-sm leading-relaxed">Doing life together, one home at a time. Find a fellowship group near you.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-forest-600 font-semibold text-sm">Find a group <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link href="/ministries/digging-deep" className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-lift border border-cream-200 overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div>
                <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-2xl flex items-center justify-center mb-6"><BookOpen size={28} /></div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Digging Deep</h3>
                <p className="text-ink-500 text-sm leading-relaxed">Uncovering the profound truths of the Word. Join us every Wednesday at 6PM.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-gold-600 font-semibold text-sm">Study with us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link href="/ministries/faith-clinic" className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-lift border border-cream-200 overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-coral-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div>
                <div className="w-14 h-14 bg-coral-100 text-coral-600 rounded-2xl flex items-center justify-center mb-6"><HeartPulse size={28} /></div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Faith Clinic</h3>
                <p className="text-ink-500 text-sm leading-relaxed">A time of prayer, healing, and spiritual restoration. Every Friday at 6PM.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-coral-600 font-semibold text-sm">Receive prayer <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link href="/ministries/evangelism" className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-lift border border-cream-200 overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div>
                <div className="w-14 h-14 bg-mint-100 text-mint-600 rounded-2xl flex items-center justify-center mb-6"><Megaphone size={28} /></div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Evangelism</h3>
                <p className="text-ink-500 text-sm leading-relaxed">Taking the gospel beyond our walls. Join our street outreaches and missions.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-mint-600 font-semibold text-sm">Join the mission <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link href="/maternity" className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-lift border border-cream-200 overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div>
                <div className="w-14 h-14 bg-forest-100 text-forest-700 rounded-2xl flex items-center justify-center mb-6"><Baby size={28} /></div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Maternity Center</h3>
                <p className="text-ink-500 text-sm leading-relaxed">Caring for mothers and miracles. Safe, compassionate maternal healthcare.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-forest-600 font-semibold text-sm">Book a visit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>

            <Link href="/creche" className="group relative bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-soft hover:shadow-lift border border-cream-200 overflow-hidden flex flex-col justify-between min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              <div>
                <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-2xl flex items-center justify-center mb-6"><Smile size={28} /></div>
                <h3 className="font-display text-2xl font-bold text-ink-900 mb-2">Creche</h3>
                <p className="text-ink-500 text-sm leading-relaxed">A safe, fun, and loving space for our little ones during Sunday services.</p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-gold-600 font-semibold text-sm">Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ EVENTS & ANNOUNCEMENTS ══════════ */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-forest-900">Upcoming Events</h2>
                <Link href="/events" className="text-sm font-semibold text-coral-500 hover:text-coral-600 flex items-center gap-1 group">View Calendar <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></Link>
              </div>

              <div className="flex flex-col gap-4">
                <div className="group flex flex-col sm:flex-row gap-6 p-4 rounded-3xl border border-cream-200 hover:border-forest-200 hover:shadow-soft transition-all cursor-pointer bg-cream-50/50">
                  <div className="w-full sm:w-28 h-28 bg-forest-700 text-cream-50 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-forest-800 transition-colors">
                    <span className="text-sm font-medium uppercase tracking-wider text-gold-400">Oct</span>
                    <span className="font-display text-4xl font-black leading-none mt-1">24</span>
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <h3 className="font-display text-xl font-bold text-ink-900 group-hover:text-forest-700 transition-colors">Annual Faith Convention 2026</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-ink-500 mt-2">
                      <span className="flex items-center gap-1.5"><Clock size={16} className="text-coral-500" /> 9:00 AM - 3:00 PM</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} className="text-coral-500" /> Main Sanctuary</span>
                    </div>
                    <p className="text-sm text-ink-600 mt-3 line-clamp-2">Join us for a powerful weekend of worship, word, and miracles as we gather to celebrate God's faithfulness.</p>
                  </div>
                </div>

                <div className="group flex flex-col sm:flex-row gap-6 p-4 rounded-3xl border border-cream-200 hover:border-forest-200 hover:shadow-soft transition-all cursor-pointer bg-cream-50/50">
                  <div className="w-full sm:w-28 h-28 bg-coral-500 text-white rounded-2xl flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-coral-600 transition-colors">
                    <span className="text-sm font-medium uppercase tracking-wider text-white/80">Nov</span>
                    <span className="font-display text-4xl font-black leading-none mt-1">07</span>
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <h3 className="font-display text-xl font-bold text-ink-900 group-hover:text-coral-600 transition-colors">Community Outreach & Medical Drive</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-ink-500 mt-2">
                      <span className="flex items-center gap-1.5"><Clock size={16} className="text-forest-500" /> 8:00 AM - 2:00 PM</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} className="text-forest-500" /> Harmony Estate Center</span>
                    </div>
                    <p className="text-sm text-ink-600 mt-3 line-clamp-2">Free health checks, food distribution, and prayers for the community. Volunteers needed!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Announcements Board */}
            <div className="lg:col-span-1">
              <div className="bg-forest-900 rounded-[2rem] p-8 h-full flex flex-col relative overflow-hidden shadow-lift">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center text-forest-900">
                    <Bell size={20} className="animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-cream-50">Announcements</h3>
                </div>

                <div className="flex flex-col gap-6 flex-grow">
                  {announcements && announcements.length > 0 ? (
                    announcements.map((announcement, index) => (
                      <div 
                        key={announcement.id} 
                        className={`border-l-2 pl-4 ${index === 0 ? 'border-gold-400' : 'border-cream-100/20'}`}
                      >
                        <p className={`text-xs font-semibold mb-1 uppercase tracking-wider ${index === 0 ? 'text-gold-300' : 'text-cream-200/60'}`}>
                          {announcement.is_urgent ? "Urgent" : "Update"}
                        </p>
                        <h4 className="text-cream-50 font-medium leading-snug hover:text-gold-300 cursor-pointer transition-colors">
                          {announcement.title}
                        </h4>
                      </div>
                    ))
                  ) : (
                    <p className="text-cream-200/60 text-sm">No new announcements right now.</p>
                  )}
                </div>

                <Link href="/announcements" className="mt-8 flex items-center justify-center w-full py-3 bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 rounded-xl text-sm font-semibold transition-colors">
                  Read All Announcements
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIES ══════════ */}
      <section className="py-24 bg-cream-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-mint-200/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-coral-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest-900 mb-4">Lives Transformed.</h2>
            <p className="text-ink-600 text-lg">Don't just take our word for it. Hear what God is doing in the lives of our church family.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 border border-cream-200 relative group">
              <Quote size={40} className="text-gold-300 absolute top-6 right-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <div className="flex items-center gap-1 text-gold-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              <p className="text-ink-700 text-lg leading-relaxed mb-8 relative z-10">"I walked into Church of God broken and searching. The love I found here, and the practical help from the Maternity Center during my pregnancy, completely changed my life."</p>
              <div className="flex items-center gap-4">
                <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80" alt="Sarah" width={48} height={48} className="rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-ink-900 text-sm">Sarah Johnson</h4>
                  <p className="text-xs text-forest-600 font-medium">Member since 2022</p>
                </div>
              </div>
            </div>

            <div className="bg-forest-900 rounded-3xl p-8 shadow-lift relative group transform md:-translate-y-4">
              <Quote size={40} className="text-gold-400/30 absolute top-6 right-6 group-hover:scale-110 transition-transform" />
              <div className="flex items-center gap-1 text-gold-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              <p className="text-cream-100 text-lg leading-relaxed mb-8 relative z-10">"The Digging Deep Bible study on Wednesdays completely shifted my perspective. I finally understand grace, and my marriage has been restored through the counseling here."</p>
              <div className="flex items-center gap-4">
                <Image src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80" alt="David" width={48} height={48} className="rounded-full object-cover border-2 border-forest-700" />
                <div>
                  <h4 className="font-bold text-cream-50 text-sm">David Okafor</h4>
                  <p className="text-xs text-gold-300 font-medium">Faith Clinic Attendee</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-lift transition-all duration-300 border border-cream-200 relative group">
              <Quote size={40} className="text-gold-300 absolute top-6 right-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              <div className="flex items-center gap-1 text-gold-400 mb-6">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
              <p className="text-ink-700 text-lg leading-relaxed mb-8 relative z-10">"Finding a house fellowship near my university campus was a lifesaver. It's where I found my closest friends and a community that truly prays for each other."</p>
              <div className="flex items-center gap-4">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Grace" width={48} height={48} className="rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-ink-900 text-sm">Grace Adeyemi</h4>
                  <p className="text-xs text-forest-600 font-medium">House Fellowship Leader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LEADERSHIP TEASER ══════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl font-bold text-forest-900 mb-2">Meet Our Pastors</h2>
              <p className="text-ink-600">Servants with a heart for the people.</p>
            </div>
            <Link href="/about" className="group flex items-center gap-2 text-forest-700 font-semibold hover:text-forest-900 transition-colors">Meet the full team <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Pastor David Cole", role: "Lead Pastor", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
              { name: "Pastor Sarah Cole", role: "Co-Lead Pastor", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
              { name: "Pastor James Smith", role: "Youth & Young Adults", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
              { name: "Dr. Mary Williams", role: "Maternity & Care", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" }
            ].map((pastor, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mb-4">
                  <Image src={pastor.img} alt={pastor.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-2">
                       <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><MessageCircle size={14} /></div>
                       <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white"><User size={14} /></div>
                    </div>
                  </div>
                </div>
                <h4 className="font-display font-bold text-xl text-ink-900">{pastor.name}</h4>
                <p className="text-coral-500 text-sm font-medium">{pastor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FINAL CTA BANNER ══════════ */}
      <section className="relative py-24 bg-forest-900 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cream-50 mb-6 leading-tight">Your first step <br/> starts here.</h2>
          <p className="text-lg text-cream-200 mb-10 max-w-2xl mx-auto">No matter who you are, where you've been, or what you're going through — there's a place for you here. Join us this Sunday.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/visit" className="w-full sm:w-auto bg-gold-400 hover:bg-gold-500 text-forest-900 font-bold px-8 py-4 rounded-full transition-all shadow-lift hover:-translate-y-1">Plan Your Visit</Link>
            <Link href="/sermons" className="w-full sm:w-auto bg-transparent border border-cream-50/30 hover:bg-cream-50/10 text-cream-50 font-semibold px-8 py-4 rounded-full transition-all">Watch Online</Link>
          </div>
        </div>
      </section>

      {/* ══════════ FLOATING WHATSAPP BUTTON ══════════ */}
      <a 
        href="https://wa.me/2348000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lift hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Join WhatsApp Community"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-ink-900 text-sm font-bold px-3 py-1.5 rounded-lg shadow-soft opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Join WhatsApp Community</span>
      </a>
    </>
  );
}