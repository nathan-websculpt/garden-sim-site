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
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={siteConfig.links.itch}
          target="_blank"
          rel="noopener noreferrer"
          className="garden-button-primary min-h-11 w-full justify-center sm:w-auto"
        >
          Play the demo &mdash; pay what you want
        </a>
        <a
          href={siteConfig.links.youtubeTrailer}
          target="_blank"
          rel="noopener noreferrer"
          className="garden-button-secondary min-h-11 w-full justify-center border-[#d8e3d7] bg-[var(--panel-bg-soft)] text-[var(--text-muted)] font-semibold sm:w-auto"
        >
          Open Trailer on YouTube
        </a>
      </div>
    </SectionFrame>
  );
}
