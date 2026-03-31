"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";

const kofiButtonImage = "https://storage.ko-fi.com/cdn/kofi3.png?v=3";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#cedccf] bg-[#eef5ef]/92 backdrop-blur md:static md:backdrop-blur-0">
      <div className="garden-container">
        <div className="flex items-center justify-between gap-4 py-3 md:py-6">
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              className="inline-flex items-center rounded-full border border-[#cedccf] bg-[#fbf8f0] px-3 py-2 text-sm font-semibold text-[#2d3328] shadow-sm transition hover:bg-[#eef5ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#91ab89] md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((open) => !open)}
            >
              Menu
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4c684a] md:hidden">
              Garden Sim
            </p>
            <nav aria-label="Primary" className="hidden md:block">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === link.href
                      : pathname.startsWith(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#91ab89] ${
                          isActive
                            ? "bg-[#dcead8] text-[#2d3328]"
                            : "text-[#2d3328] hover:bg-[#e8f1e5]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <a
              href={siteConfig.links.kofi}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-[#cedccf] bg-[#fbf8f0] p-1 shadow-sm transition hover:bg-[#eef5ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#91ab89] md:inline-flex"
              aria-label="Support Garden Sim on Ko-fi"
            >
              <Image
                src={kofiButtonImage}
                alt="Support Garden Sim on Ko-fi"
                className="h-8 w-auto"
                width={95}
                height={24}
                unoptimized
              />
            </a>
            <a
              href={siteConfig.links.kofi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-[#cedccf] bg-[#fbf8f0] p-1 shadow-sm transition hover:bg-[#eef5ea] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#91ab89] md:hidden"
              aria-label="Support Garden Sim on Ko-fi"
            >
              <Image
                src={kofiButtonImage}
                alt="Support Garden Sim on Ko-fi"
                className="h-6 w-auto"
                width={76}
                height={19}
                unoptimized
              />
            </a>
          </div>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`border-t border-[#cedccf] bg-[#edf5ed] md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="garden-container py-3">
          <ul className="grid gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-2xl px-4 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#91ab89] ${
                      isActive
                        ? "bg-[#dcead8] text-[#2d3328]"
                        : "bg-[#fbf8f0] text-[#2d3328] hover:bg-[#e8f1e5]"
                    }`}
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
