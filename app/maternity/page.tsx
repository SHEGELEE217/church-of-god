// app/maternity/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { HeartPulse, Stethoscope, Baby, Calendar, CheckCircle2, User, Phone, Mail } from "lucide-react";

export default function MaternityPage() {
  const [formData, setFormData] = useState({
    patient_name: "",
    phone: "",
    email: "",
    preferred_date: "",
    service_type: "Antenatal",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("maternity_appointments").insert([formData]);

    if (!error) {
      setSuccess(true);
      setFormData({ patient_name: "", phone: "", email: "", preferred_date: "", service_type: "Antenatal", notes: "" });
    } else {
      alert("Error booking appointment: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-mint-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-mint-100 border border-mint-200 rounded-full px-4 py-1.5 mb-6 text-mint-800">
              <HeartPulse size={16} />
              <span className="text-xs font-semibold tracking-wide uppercase">Grace Maternity Center</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.1] text-forest-900 mb-6">
              Caring for mothers. <br/> <span className="text-mint-600">Delivering miracles.</span>
            </h1>
            <p className="text-lg text-ink-600 mb-8 max-w-lg leading-relaxed">
              A state-of-the-art maternity facility located within the church premises. We provide compassionate, world-class healthcare for mothers and babies.
            </p>
            <a href="#booking" className="inline-block bg-forest-700 hover:bg-forest-800 text-cream-50 font-semibold px-8 py-3.5 rounded-full transition-all shadow-soft">
              Book an Appointment
            </a>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lift">
            <Image src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" alt="Maternity Care" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-forest-900 mb-12">Our Medical Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream-50 rounded-3xl border border-cream-200">
              <div className="w-14 h-14 bg-mint-100 text-mint-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Stethoscope size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Antenatal Care</h3>
              <p className="text-ink-500 text-sm">Comprehensive check-ups, ultrasounds, and health education for expecting mothers.</p>
            </div>
            <div className="p-8 bg-cream-50 rounded-3xl border border-cream-200">
              <div className="w-14 h-14 bg-coral-100 text-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Baby size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Safe Delivery</h3>
              <p className="text-ink-500 text-sm">Modern delivery rooms with 24/7 on-call doctors and midwives for safe childbirth.</p>
            </div>
            <div className="p-8 bg-cream-50 rounded-3xl border border-cream-200">
              <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><HeartPulse size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Postnatal Support</h3>
              <p className="text-ink-500 text-sm">Dedicated care for both mother and child after delivery, including immunizations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-lift p-8 md:p-12 border border-cream-200">
            
            {success ? (
              <div className="text-center py-12">
                <CheckCircle2 size={64} className="mx-auto text-mint-500 mb-6" />
                <h2 className="font-display text-3xl font-bold text-forest-900 mb-4">Appointment Requested!</h2>
                <p className="text-ink-600 mb-8">Thank you. A member of our medical staff will call you shortly to confirm your appointment time.</p>
                <button onClick={() => setSuccess(false)} className="bg-forest-700 text-cream-50 px-6 py-2.5 rounded-xl font-semibold">Book Another</button>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="font-display text-3xl font-bold text-forest-900">Book a Doctor's Visit</h2>
                  <p className="text-ink-500 mt-2">Fill out the form below and we will get back to you.</p>
                </div>

                <form onSubmit={handleBook} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
                        <input required type="text" value={formData.patient_name} onChange={(e) => setFormData({...formData, patient_name: e.target.value})} className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:outline-none" placeholder="Jane Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:outline-none" placeholder="+234..." />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Preferred Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
                        <input required type="date" value={formData.preferred_date} onChange={(e) => setFormData({...formData, preferred_date: e.target.value})} className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Service Needed</label>
                      <select value={formData.service_type} onChange={(e) => setFormData({...formData, service_type: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:outline-none">
                        <option>Antenatal Consultation</option>
                        <option>Ultrasound Scan</option>
                        <option>Delivery Facility Tour</option>
                        <option>Postnatal Checkup</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-700 mb-2">Additional Notes (Optional)</label>
                    <textarea rows={3} value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:outline-none resize-none" placeholder="Any symptoms or special requests?" />
                  </div>

                  <button type="submit" disabled={loading} className="mt-4 bg-mint-600 hover:bg-mint-700 text-white font-bold py-4 rounded-xl transition-all shadow-soft">
                    {loading ? "Submitting..." : "Request Appointment"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}