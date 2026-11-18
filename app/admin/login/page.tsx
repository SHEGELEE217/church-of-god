// app/admin/login/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // If successful, push them to the dashboard
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100 px-6 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-200/40 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-lift p-8 border border-cream-200">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-forest-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="text-gold-400" size={28} />
          </div>
          <h1 className="font-display text-3xl font-bold text-forest-900">Admin Portal</h1>
          <p className="text-ink-500 text-sm mt-2">Sign in to manage Church of God</p>
        </div>

        {error && (
          <div className="bg-coral-50 text-coral-600 text-sm p-3 rounded-xl mb-6 text-center border border-coral-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-ink-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all text-ink-900"
                placeholder="admin@churchofgod.org"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-ink-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-400" size={18} />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-cream-50 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 transition-all text-ink-900"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-forest-600 hover:text-forest-800 font-medium">
            &larr; Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}