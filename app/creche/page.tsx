// app/creche/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Smile, BookOpen, Palette, CheckCircle2, User, Phone, Baby } from "lucide-react";

export default function CrechePage() {
  const [formData, setFormData] = useState({
    parent_name: "",
    phone: "",
    child_name: "",
    child_age: "",
    program: "Daycare",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("creche_applications").insert([
      { ...formData, child_age: parseInt(formData.child_age) }
    ]);

    if (!error) {
      setSuccess(true);
      setFormData({ parent_name: "", phone: "", child_name: "", child_age: "", program: "Daycare", notes: "" });
    } else {
      alert("Error submitting application: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gold-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-gold-100 border border-gold-200 rounded-full px-4 py-1.5 mb-6 text-gold-700">
              <Smile size={16} />
              <span className="text-xs font-semibold tracking-wide uppercase">Little Lambs Academy</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.1] text-forest-900 mb-6">
              Where little minds <br/> <span className="text-coral-500">grow and play.</span>
            </h1>
            <p className="text-lg text-ink-600 mb-8 max-w-lg leading-relaxed">
              A safe, nurturing, and vibrant learning environment for your child. We offer premium Daycare, Creche, and Kindergarten programs Monday through Friday.
            </p>
            <a href="#admissions" className="inline-block bg-forest-700 hover:bg-forest-800 text-cream-50 font-semibold px-8 py-3.5 rounded-full transition-all shadow-soft">
              Apply for Admission
            </a>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-lift">
            <Image src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80" alt="Happy children at creche" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-forest-900 mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-cream-50 rounded-3xl border border-cream-200">
              <div className="w-14 h-14 bg-coral-100 text-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Baby size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Creche (0 - 2 yrs)</h3>
              <p className="text-ink-500 text-sm">A warm, loving home-away-from-home for infants with dedicated caregivers.</p>
            </div>
            <div className="p-8 bg-cream-50 rounded-3xl border border-cream-200">
              <div className="w-14 h-14 bg-gold-100 text-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><Palette size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Daycare (2 - 4 yrs)</h3>
              <p className="text-ink-500 text-sm">Structured play, early learning, and social development in a safe environment.</p>
            </div>
            <div className="p-8 bg-cream-50 rounded-3xl border border-cream-200">
              <div className="w-14 h-14 bg-forest-100 text-forest-700 rounded-2xl flex items-center justify-center mx-auto mb-6"><BookOpen size={28} /></div>
              <h3 className="font-display text-xl font-bold mb-3">Kindergarten (4 - 5 yrs)</h3>
              <p className="text-ink-500 text-sm">A rigorous but fun curriculum preparing your child for primary school.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION FORM */}
      <section id="admissions" className="py-24 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-lift p-8 md:p-12 border border-cream-200">
            
            {success ? (
              <div className="text-center py-12">
                <CheckCircle2 size={64} className="mx-auto text-gold-500 mb-6" />
                <h2 className="font-display text-3xl font-bold text-forest-900 mb-4">Application Received!</h2>
                <p className="text-ink-600 mb-8">Thank you for choosing Little Lambs Academy. Our admissions team will contact you within 24 hours.</p>
                <button onClick={() => setSuccess(false)} className="bg-forest-700 text-cream-50 px-6 py-2.5 rounded-xl font-semibold">Apply Again</button>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="font-display text-3xl font-bold text-forest-900">Admission Application</h2>
                  <p className="text-ink-500 mt-2">Spaces are limited. Secure your child's spot today.</p>
                </div>

                <form onSubmit={handleApply} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Parent/Guardian Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
                        <input required type="text" value={formData.parent_name} onChange={(e) => setFormData({...formData, parent_name: e.target.value})} className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:outline-none" placeholder="John Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
                        <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:outline-none" placeholder="+234..." />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-5">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Child's Name</label>
                      <input required type="text" value={formData.child_name} onChange={(e) => setFormData({...formData, child_name: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:outline-none" placeholder="Child's name" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Child's Age</label>
                      <input required type="number" min="0" max="10" value={formData.child_age} onChange={(e) => setFormData({...formData, child_age: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:outline-none" placeholder="Age" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Program</label>
                      <select value={formData.program} onChange={(e) => setFormData({...formData, program: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:outline-none">
                        <option>Creche (0-2)</option>
                        <option>Daycare (2-4)</option>
                        <option>Kindergarten (4-5)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-700 mb-2">Medical Notes / Allergies (Optional)</label>
                    <textarea rows={3} value={formData.notes} onChange={(e) => setFormData({...formData, notes: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:outline-none resize-none" placeholder="Please list any allergies or special needs..." />
                  </div>

                  <button type="submit" disabled={loading} className="mt-4 bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold py-4 rounded-xl transition-all shadow-soft">
                    {loading ? "Submitting..." : "Submit Application"}
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