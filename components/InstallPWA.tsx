// components/InstallPWA.tsx
"use client";

import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";

export default function InstallPWA() {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
      // Show the banner after 3 seconds
      setTimeout(() => setIsVisible(true), 3000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    // Correct event listener cleanup
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = (evt: React.MouseEvent) => {
    evt.preventDefault();
    if (!promptInstall) return;
    promptInstall.prompt();
    setIsVisible(false);
  };

  if (!isVisible || !supportsPWA) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-white rounded-2xl shadow-lift border border-cream-200 p-4 z-50 animate-fade-up flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-forest-100 text-forest-700 rounded-xl flex items-center justify-center flex-shrink-0">
          <Download size={20} />
        </div>
        <div>
          <h4 className="font-bold text-ink-900 text-sm">Install Church of God</h4>
          <p className="text-xs text-ink-500">Add to your home screen for quick access</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onClick} className="bg-forest-700 hover:bg-forest-800 text-cream-50 text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
          Install
        </button>
        <button onClick={() => setIsVisible(false)} className="text-ink-400 hover:text-ink-700 p-1">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}