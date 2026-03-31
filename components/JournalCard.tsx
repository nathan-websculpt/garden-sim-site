"use client";

import Image from "next/image";
import { useState } from "react";
import type { JournalEntry } from "@/lib/journal";

type JournalCardProps = {
  entry: JournalEntry;
};

const previewLength = 210;

export default function JournalCard({ entry }: JournalCardProps) {
  const [expanded, setExpanded] = useState(false);
  const canExpand = entry.description.length > previewLength;
  const preview = `${entry.description.slice(0, previewLength).trimEnd()}...`;
  const visibleDescription =
    expanded || !canExpand ? entry.description : preview;

  return (
    <article className="garden-card overflow-hidden rounded-[1.6rem]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[#d7e3d8] bg-[#edf4ea]">
        <Image
          src={entry.image}
          alt={entry.alt}
          fill
          sizes="(min-width: 1280px) 650px, (min-width: 768px) 80vw, 95vw"
          className="object-cover"
          style={{ objectPosition: entry.imagePosition ?? "50% 50%" }}
        />
      </div>
      <div className="p-5 sm:p-6">
        <h2 className="text-2xl text-[#2d3328]">{entry.title}</h2>
        <p className="mt-3 text-base leading-8 text-[#60705f]">
          {visibleDescription}
        </p>
        {canExpand ? (
          <button
            type="button"
            className="garden-button-secondary mt-3 px-4 py-2"
            onClick={() => setExpanded((isExpanded) => !isExpanded)}
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        ) : null}
        <p className="mt-5 text-right text-xs font-semibold uppercase tracking-[0.08em] text-[#60705f]">
          {entry.timestamp}
        </p>
      </div>
    </article>
  );
}
