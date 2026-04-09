import { siteConfig } from "@/lib/site";
import SectionFrame from "@/components/SectionFrame";

export default function VideoSection() {
  return (
    <SectionFrame id="demo-trailer" aria-labelledby="demo-trailer-heading" spacing="home">
      <div className="space-y-4 sm:space-y-[1.125rem]">
        <h2 id="demo-trailer-heading" className="text-2xl sm:text-3xl">
          Demo
        </h2>
        <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)]">
          Watch the gameplay first, then play the demo with pay-what-you-want
          pricing whenever you&apos;re ready. Thanks for helping this solo-dev
          garden simulator keep growing.
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
        <a href={siteConfig.links.itch} className="garden-button-primary">
          Play the demo &mdash; pay what you want
        </a>
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
          className="garden-button-accent"
        >
          Support development on Ko-fi
        </a>
      </div>
    </SectionFrame>
  );
}
