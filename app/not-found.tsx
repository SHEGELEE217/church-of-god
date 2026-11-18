// app/not-found.tsx
import Link from "next/link";
import { ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-cream-50 px-6 text-center">
      <div className="w-24 h-24 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center mb-8 animate-float">
        <Ghost size={48} />
      </div>
      <h1 className="font-display text-6xl md:text-8xl font-black text-forest-900 mb-4">
        404
      </h1>
      <h2 className="font-display text-3xl font-bold text-ink-900 mb-4">
        Oops! You've wandered off.
      </h2>
      <p className="text-ink-600 mb-8 max-w-md mx-auto">
        The page you are looking for doesn't exist or has been moved. Let's get you back to the flock.
      </p>
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-cream-50 font-bold px-8 py-3.5 rounded-full transition-all shadow-soft hover:-translate-y-0.5"
      >
        <ArrowLeft size={18} /> Back to Homepage
      </Link>
    </div>
  );
}