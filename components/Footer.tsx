"use client"
import { usePathname } from "next/navigation";
// components/Footer.tsx
import Link from "next/link";
import {
  Facebook, Instagram, Youtube, Twitter,
  MapPin, Mail, Phone,
} from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
if (pathname?.startsWith("/admin")) return null;
  return (
    <footer className="bg-forest-900 text-cream-100 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-gold-400 flex items-center justify-center">
                <span className="font-display font-black text-forest-900 text-lg">CG</span>
              </div>
              <div>
                <p className="font-display font-bold text-cream-50 text-lg leading-none">
                  Church of God
                </p>
                <p className="text-xs text-cream-200/70 tracking-wide">
                  Belong · Believe · Become
                </p>
              </div>
            </div>
            <p className="text-sm text-cream-200/80 leading-relaxed">
              A modern family of faith where every soul finds home, every gift finds purpose, and every life finds hope.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display font-semibold text-cream-50 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-cream-200/80">
              <li><Link href="/about"      className="hover:text-gold-300 transition">About Us</Link></li>
              <li><Link href="/sermons"    className="hover:text-gold-300 transition">Sermons</Link></li>
              <li><Link href="/ministries" className="hover:text-gold-300 transition">Ministries</Link></li>
              <li><Link href="/events"     className="hover:text-gold-300 transition">Events</Link></li>
              <li><Link href="/give"       className="hover:text-gold-300 transition">Give</Link></li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
                          <li><Link href="/ministries/house-fellowships" className="hover:text-gold-300 transition">House Fellowships</Link></li>
              <li><Link href="/ministries/digging-deep"      className="hover:text-gold-300 transition">Digging Deep</Link></li>
              <li><Link href="/ministries/evangelism"        className="hover:text-gold-300 transition">Evangelism</Link></li>
              <li><Link href="/ministries/faith-clinic"      className="hover:text-gold-300 transition">Faith Clinic</Link></li>
              <li><Link href="/maternity"                    className="hover:text-gold-300 transition">Maternity Center</Link></li>
              <li><Link href="/creche"                       className="hover:text-gold-300 transition">Creche</Link></li>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-cream-50 mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-cream-200/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold-400" />
                <span>12 Grace Avenue, Harmony Estate, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-gold-400" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-gold-400" />
                <span>hello@churchofgod.org</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-cream-50/10 hover:bg-gold-400 hover:text-forest-900 flex items-center justify-center transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-50/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream-200/60">
          <p>© {new Date().getFullYear()} Church of God. All rights reserved.</p>
          <p>Made with ❤️ for the Kingdom</p>
        </div>
      </div>
    </footer>
  );
}