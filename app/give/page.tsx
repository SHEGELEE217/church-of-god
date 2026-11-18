// app/give/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Landmark, CreditCard, Copy, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";

export default function GivePage() {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-full px-4 py-1.5 mb-6 text-gold-700">
            <Heart size={16} />
            <span className="text-xs font-semibold tracking-wide uppercase">Giving & Partnership</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-4">
            Partner with <br/> <span className="text-coral-500 italic">the vision.</span>
          </h1>
          <p className="text-ink-600 text-lg leading-relaxed">
            Your generosity helps us spread the Gospel, support the less privileged, and maintain our facilities. Thank you for giving cheerfully.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Bank Transfer */}
          <div className="bg-forest-900 rounded-[2rem] p-8 md:p-10 shadow-lift relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-coral-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-forest-800 rounded-2xl flex items-center justify-center text-gold-400">
                  <Landmark size={24} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-cream-50">Bank Transfer</h2>
                  <p className="text-sm text-cream-200/70">Direct transfer to our church accounts</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Account 1 */}
                <div className="bg-forest-800/50 border border-forest-700/50 p-5 rounded-2xl flex justify-between items-center group cursor-pointer" onClick={() => handleCopy("1234567890")}>
                  <div>
                    <p className="text-xs text-gold-400 font-bold uppercase tracking-wider mb-1">Tithe & Offering</p>
                    <p className="font-bold text-cream-50 text-lg">Church of God Intl.</p>
                    <p className="text-cream-200 text-sm mt-1">Zenith Bank · 1234567890</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center text-cream-50 group-hover:bg-gold-400 group-hover:text-forest-900 transition-colors">
                    {copiedText === "1234567890" ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Account 2 */}
                <div className="bg-forest-800/50 border border-forest-700/50 p-5 rounded-2xl flex justify-between items-center group cursor-pointer" onClick={() => handleCopy("0987654321")}>
                  <div>
                    <p className="text-xs text-coral-400 font-bold uppercase tracking-wider mb-1">Building & Missions</p>
                    <p className="font-bold text-cream-50 text-lg">COG Building Project</p>
                    <p className="text-cream-200 text-sm mt-1">GTBank · 0987654321</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center text-cream-50 group-hover:bg-gold-400 group-hover:text-forest-900 transition-colors">
                    {copiedText === "0987654321" ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-cream-200/60">
                <ShieldCheck size={16} className="text-mint-400" />
                <p>Your transactions are secure. Please use your name as the transfer description.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Online Giving */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-soft border border-cream-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-cream-100 rounded-2xl flex items-center justify-center text-forest-700">
                <CreditCard size={24} />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-forest-900">Give Online</h2>
                <p className="text-sm text-ink-500">Secure payment via Card, USSD, or Transfer</p>
              </div>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-cream-200 text-center mb-6">
              <HeartHandshake size={40} className="mx-auto text-gold-500 mb-4" />
              <h3 className="font-bold text-ink-900 mb-2">Instant Online Giving</h3>
              <p className="text-sm text-ink-500 mb-6">Click the button below to give securely through our payment partner.</p>
              
              {/* Note: This button would link to Paystack/Flutterwave in production */}
              <button 
                onClick={() => alert("To activate this feature, the church needs to connect a Paystack or Flutterwave account.")}
                className="w-full bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold py-4 rounded-xl transition-all shadow-soft flex items-center justify-center gap-2"
              >
                Give with Paystack
              </button>
              <p className="text-xs text-ink-400 mt-4">Powered by Paystack · Secured by 256-bit SSL</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-mint-100 text-mint-600 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle2 size={16} />
              </div>
              <p className="text-sm text-ink-600 leading-relaxed">
                <strong>Need a receipt?</strong> Send an email to <a href="mailto:finance@churchofgod.org" className="text-forest-600 underline">finance@churchofgod.org</a> with your transaction details, and our finance team will send one to you.
              </p>
            </div>
          </div>

        </div>

        {/* Why We Give Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-forest-900">Why We Give</h2>
            <p className="text-ink-500 mt-2">Giving is an act of worship and obedience to God.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-cream-200 text-center">
              <div className="w-12 h-12 bg-gold-100 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-4"><Heart size={24} /></div>
              <h4 className="font-bold text-ink-900 mb-2">Tithes & Offerings</h4>
              <p className="text-sm text-ink-500">Honoring God with the first fruits of our increase, supporting the day-to-day operations of the church.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-cream-200 text-center">
              <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-full flex items-center justify-center mx-auto mb-4"><HeartHandshake size={24} /></div>
              <h4 className="font-bold text-ink-900 mb-2">Missions & Outreach</h4>
              <p className="text-sm text-ink-500">Funding evangelism, community medical drives, and supporting our maternity center and creche.</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-cream-200 text-center">
              <div className="w-12 h-12 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center mx-auto mb-4"><Landmark size={24} /></div>
              <h4 className="font-bold text-ink-900 mb-2">Building & Expansion</h4>
              <p className="text-sm text-ink-500">Investing in our facilities so we can accommodate more people and serve our community better.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}