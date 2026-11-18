// app/contact/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request_type: "General Inquiry",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contact_messages").insert([formData]);

    if (!error) {
      setSuccess(true);
      setFormData({ name: "", email: "", request_type: "General Inquiry", message: "" });
    } else {
      alert("Error sending message: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-cream-100 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-4">
            We'd love to <br/> <span className="text-coral-500 italic">hear from you.</span>
          </h1>
          <p className="text-ink-600 text-lg">
            Whether you have a question, need counseling, or just want someone to pray with you, our doors and inbox are always open.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Contact Info (Left Side) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-forest-900 rounded-3xl p-8 text-cream-50 shadow-lift relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl" />
              <h3 className="font-display text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-800 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-cream-100">Visit Us</p>
                    <p className="text-sm text-cream-200/70 mt-1">12 Grace Avenue, Harmony Estate,<br/> Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-800 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-cream-100">Call Us</p>
                    <p className="text-sm text-cream-200/70 mt-1">+234 800 000 0000<br/>+234 811 111 1111</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-800 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-cream-100">Email Us</p>
                    <p className="text-sm text-cream-200/70 mt-1">hello@churchofgod.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-forest-800 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-cream-100">Office Hours</p>
                    <p className="text-sm text-cream-200/70 mt-1">Mon - Fri: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right Side) */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-cream-200">
            {success ? (
              <div className="text-center py-16">
                <CheckCircle2 size={64} className="mx-auto text-forest-500 mb-6" />
                <h2 className="font-display text-3xl font-bold text-forest-900 mb-4">Message Received!</h2>
                <p className="text-ink-600 mb-8">Thank you for reaching out. Our team will get back to you as soon as possible. God bless you!</p>
                <button onClick={() => setSuccess(false)} className="bg-forest-700 text-cream-50 px-6 py-2.5 rounded-xl font-semibold hover:bg-forest-800 transition-colors">Send Another Message</button>
              </div>
            ) : (
              <>
                <h2 className="font-display text-2xl font-bold text-forest-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Your Name</label>
                      <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-forest-500 focus:outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Email Address</label>
                      <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-forest-500 focus:outline-none" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-700 mb-2">Type of Message</label>
                    <select value={formData.request_type} onChange={(e) => setFormData({...formData, request_type: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-forest-500 focus:outline-none">
                      <option>General Inquiry</option>
                      <option>Prayer Request</option>
                      <option>Pastoral Counseling</option>
                      <option>Partnership / Giving</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-ink-700 mb-2">How can we help you?</label>
                    <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:ring-2 focus:ring-forest-500 focus:outline-none resize-none" placeholder="Write your message or prayer request here..." />
                  </div>

                  <button type="submit" disabled={loading} className="mt-2 w-full bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold py-4 rounded-xl transition-all shadow-soft flex items-center justify-center gap-2">
                    <Send size={18} />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}