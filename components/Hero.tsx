import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-6 sm:pb-14 md:pt-10">
      <div className="garden-container">
        <div className="grid items-center gap-8 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
          <div className="order-2 md:order-1">
            <div className="rounded-[1.7rem] border border-[var(--border-soft)] bg-[var(--panel-bg)]/95 p-6 shadow-[0_22px_44px_-34px_rgba(76,104,74,0.38)] sm:p-8">
              <h1 className="sr-only">Garden Sim</h1>
              <div className="max-w-xl space-y-4 sm:space-y-[1.125rem]">
                <p className="font-display text-3xl leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
                  A cozy gardening game that was made by a gardener
                </p>
                <p className="text-base leading-8 text-[var(--text-muted)] sm:text-lg">
                  Demo is now live &mdash; an early look at one map and the overall direction of the game. Your support will go towards development 
                  and hiring an artist to re-make all of this AI art.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--deep-green)] sm:text-base">
                  Demo features
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--deep-green)] sm:text-base">
                  <li>4 starter plants and 4 secret plants to find</li>
                  <li>fast-travel</li>
                  <li>beekeeping</li>
                  <li>NPC helpers</li>
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={siteConfig.links.itch} className="garden-button-primary">
                  Play Now
                </a>
                <a href="#demo-trailer" className="garden-button-secondary">
                  Watch the Demo Trailer
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--panel-bg)] p-4 shadow-[0_24px_50px_-34px_rgba(76,104,74,0.45)] sm:p-5">
              <div className="pointer-events-none absolute -left-5 -top-5 h-14 w-14 rounded-full bg-[#cfe3ef]/75 blur-lg" />
              <div className="pointer-events-none absolute -bottom-6 right-1 h-16 w-16 rounded-full bg-[#91ab89]/60 blur-lg" />
              <div className="pointer-events-none absolute right-10 top-3 h-4 w-4 rounded-full bg-[#d06a59]/65" />
              <div className="relative overflow-hidden rounded-[1.2rem] border border-[#d7e3d8] bg-[#f4f8f2]">
                <div className="garden-chip absolute bottom-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
                  live now
                </div>
                <div className="relative aspect-[16/11]">
                  <Image
                    src={siteConfig.heroImage}
                    alt="Garden Sim hero artwork with a cozy pixel-art garden scene"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, (min-width: 768px) 48vw, 95vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="mt-3 px-5 text-sm text-[var(--text-muted)]">
              All art is AI-generated, but your support will help to hire artists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
