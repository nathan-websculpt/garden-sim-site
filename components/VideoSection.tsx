import { siteConfig } from "@/lib/site";

export default function VideoSection() {
  return (
    <section id="demo-trailer" aria-labelledby="demo-trailer-heading" className="pb-14 sm:pb-16">
      <div className="garden-container">
        <div className="section-shell">
          <div className="home-copy-stack">
            <h2 id="demo-trailer-heading" className="text-2xl sm:text-3xl">
              Demo
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[#60705f]">
              Here is a video of the game play.
              Thanks for watching and supporting a solo-dev garden simulator in
              active development.
            </p>
          </div>
          <div className="garden-media-shell mt-8 overflow-hidden rounded-[1.4rem] shadow-[0_20px_40px_-32px_rgba(76,104,74,0.45)]">
            <div className="aspect-video">
              <iframe
                src={siteConfig.links.youtubeEmbed}
                title="Garden Sim demo trailer"
                className="h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.links.youtubeTrailer}
              target="_blank"
              rel="noopener noreferrer"
              className="garden-button-secondary"
            >
              Open Trailer on YouTube
            </a>
            <a
              href={siteConfig.links.kofi}
              target="_blank"
              rel="noopener noreferrer"
              className="garden-button-primary"
            >
              Support on Ko-fi
            </a>
          </div>
          <p className="mt-4 text-sm text-[#60705f]">
            Update trailer links in{" "}
            <code className="garden-inline-code rounded px-1 py-0.5 text-xs">
              lib/site.ts
            </code>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
