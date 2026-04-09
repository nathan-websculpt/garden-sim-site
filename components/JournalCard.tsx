"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import type { JournalEntry } from "@/lib/journal";

type JournalCardProps = {
  entry: JournalEntry;
  isLeadingImage?: boolean;
};

type JournalImageLightboxProps = {
  isOpen: boolean;
  src: string;
  alt: string;
  label: string;
  onClose: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
};

const previewLength = 210;

function JournalImageLightbox({
  isOpen,
  src,
  alt,
  label,
  onClose,
  triggerRef,
}: JournalImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const imageFrameRef = useRef<HTMLDivElement | null>(null);
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    const frameElement = imageFrameRef.current;
    if (!frameElement) {
      onClose();
      return;
    }

    const frameRect = frameElement.getBoundingClientRect();
    const clickX = event.clientX;
    const clickY = event.clientY;
    const isInsideFrame =
      clickX >= frameRect.left &&
      clickX <= frameRect.right &&
      clickY >= frameRect.top &&
      clickY <= frameRect.bottom;

    if (!isInsideFrame) {
      onClose();
      return;
    }

    const imageElement = frameElement.querySelector("img");
    if (
      !imageElement ||
      imageElement.naturalWidth === 0 ||
      imageElement.naturalHeight === 0
    ) {
      return;
    }

    const frameRatio = frameRect.width / frameRect.height;
    const imageRatio = imageElement.naturalWidth / imageElement.naturalHeight;
    let imageWidth = frameRect.width;
    let imageHeight = frameRect.height;

    if (imageRatio > frameRatio) {
      imageHeight = imageWidth / imageRatio;
    } else {
      imageWidth = imageHeight * imageRatio;
    }

    const imageLeft = frameRect.left + (frameRect.width - imageWidth) / 2;
    const imageTop = frameRect.top + (frameRect.height - imageHeight) / 2;
    const imageRight = imageLeft + imageWidth;
    const imageBottom = imageTop + imageHeight;
    const isInsideImage =
      clickX >= imageLeft &&
      clickX <= imageRight &&
      clickY >= imageTop &&
      clickY <= imageBottom;

    if (!isInsideImage) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      event.preventDefault();
      onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const { body } = document;
    const scrollY = window.scrollY;
    const previousOverflow = body.style.overflow;
    const previousPosition = body.style.position;
    const previousTop = body.style.top;
    const previousLeft = body.style.left;
    const previousRight = body.style.right;
    const previousWidth = body.style.width;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      body.style.overflow = previousOverflow;
      body.style.position = previousPosition;
      body.style.top = previousTop;
      body.style.left = previousLeft;
      body.style.right = previousRight;
      body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const triggerElement = triggerRef.current;

    return () => {
      triggerElement?.focus();
    };
  }, [isOpen, triggerRef]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Close image view"
        className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/55 text-3xl leading-none text-white transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:top-5"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      <div
        ref={imageFrameRef}
        className="relative h-[90vh] w-[96vw] max-h-[90vh] max-w-[96vw]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="96vw"
          className="object-contain"
        />
      </div>
    </div>,
    document.body,
  );
}

export default function JournalCard({
  entry,
  isLeadingImage = false,
}: JournalCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const imageTriggerRef = useRef<HTMLButtonElement | null>(null);
  const canExpand = entry.description.length > previewLength;
  const preview = `${entry.description.slice(0, previewLength).trimEnd()}...`;
  const visibleDescription =
    expanded || !canExpand ? entry.description : preview;
  const imageContextLabel = `${entry.title}: ${entry.alt}`;

  return (
    <article className="garden-card overflow-hidden rounded-[1.6rem]">
      <button
        ref={imageTriggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={imageContextLabel}
        className="block w-full border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--moss)] focus-visible:ring-inset"
        onClick={() => setIsLightboxOpen(true)}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-[#d7e3d8] bg-[#edf4ea]">
          <Image
            src={entry.image}
            alt={entry.alt}
            fill
            priority={isLeadingImage}
            sizes="(min-width: 1280px) 650px, (min-width: 768px) 80vw, 95vw"
            className="object-cover"
            style={{ objectPosition: entry.imagePosition ?? "50% 50%" }}
          />
        </div>
      </button>
      <JournalImageLightbox
        isOpen={isLightboxOpen}
        src={entry.image}
        alt={entry.alt}
        label={imageContextLabel}
        onClose={() => setIsLightboxOpen(false)}
        triggerRef={imageTriggerRef}
      />
      <div className="p-5 sm:p-6">
        <h2 className="text-2xl text-[var(--text-primary)]">{entry.title}</h2>
        <p className="mt-3 text-base leading-8 text-[var(--text-muted)]">
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
        <p className="mt-5 text-right text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
          {entry.timestamp}
        </p>
      </div>
    </article>
  );
}
