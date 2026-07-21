"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

export default function HomepageUpdateBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Project update"
      className="border-b border-[#cfc3df] bg-[#eee8f5] shadow-[0_8px_18px_-18px_rgba(76,64,92,0.55)]"
    >
      <div className="garden-container flex min-w-0 items-center gap-2 py-2 sm:gap-3">
        <a
          href={siteConfig.links.prototype3d}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-0 flex-1 rounded-lg py-1 text-sm font-bold leading-6 text-[var(--text-primary)] underline decoration-[#8c75a4] decoration-2 underline-offset-4 transition hover:text-[#5a466c] hover:decoration-[#5a466c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee8f5] sm:text-[0.9375rem]"
        >
          Update: The new Garden Sim 3D prototype is available to play in the
          browser
        </a>
        <button
          type="button"
          aria-label="Dismiss update"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl leading-none text-[#5a466c] transition hover:bg-[#dfd4ec] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eee8f5]"
          onClick={() => setDismissed(true)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </aside>
  );
}
