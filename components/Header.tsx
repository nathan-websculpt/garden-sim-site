"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

const kofiButtonImage = "https://storage.ko-fi.com/cdn/kofi3.png?v=3";
const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--moss)]";
const panelButtonClass =
  `inline-flex items-center rounded-full border border-[var(--border-soft)] bg-[var(--panel-bg)] shadow-sm transition hover:bg-[#eef5ea] ${focusRingClass}`;

function isActiveLink(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

function getDesktopLinkClassName(active: boolean) {
  return [
    "rounded-full px-4 py-2 text-sm font-bold transition",
    focusRingClass,
    active
      ? "bg-[#dcead8] text-[var(--text-primary)]"
      : "text-[var(--text-primary)] hover:bg-[#e8f1e5]",
  ].join(" ");
}

function getMobileLinkClassName(active: boolean) {
  return [
    "block rounded-2xl px-4 py-3 text-sm font-bold transition",
    focusRingClass,
    active
      ? "bg-[#dcead8] text-[var(--text-primary)]"
      : "bg-[var(--panel-bg)] text-[var(--text-primary)] hover:bg-[#e8f1e5]",
  ].join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-soft)] bg-[var(--page-bg)]/92 backdrop-blur md:static md:backdrop-blur-0">
      <div className="garden-container">
        <div className="flex items-center justify-between gap-4 py-3 md:py-6">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              className={`${panelButtonClass} px-3 py-2 text-sm font-semibold text-[var(--text-primary)] md:hidden`}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--deep-green)] md:hidden">
              Garden Sim
            </p>
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => {
                  const active = isActiveLink(pathname, link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={getDesktopLinkClassName(active)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <a
            href={siteConfig.links.kofi}
            target="_blank"
            rel="noopener noreferrer"
            className={`${panelButtonClass} p-1`}
            aria-label="Support Garden Sim on Ko-fi"
          >
            <Image
              src={kofiButtonImage}
              alt="Support Garden Sim on Ko-fi"
              className="h-6 w-auto md:h-8"
              width={95}
              height={24}
              loading="eager"
              unoptimized
            />
          </a>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`border-t border-[var(--border-soft)] bg-[var(--page-bg)] md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="garden-container py-3">
          <ul className="grid gap-2">
            {navLinks.map((link) => {
              const active = isActiveLink(pathname, link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={getMobileLinkClassName(active)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
