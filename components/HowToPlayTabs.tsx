"use client";

import {
  Fragment,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { helpTabs, type HelpItem } from "@/content/how-to-play";

function getTabId(tabId: string) {
  return `how-to-play-tab-${tabId}`;
}

function getPanelId(tabId: string) {
  return `how-to-play-panel-${tabId}`;
}

function getSectionId(tabId: string, sectionId: string) {
  return `how-to-play-${tabId}-${sectionId}`;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <path d="M4 4l12 12" />
          <path d="M16 4 4 16" />
        </>
      ) : (
        <>
          <path d="M3 5h14" />
          <path d="M3 10h14" />
          <path d="M3 15h14" />
        </>
      )}
    </svg>
  );
}

function HelpItemContent({ item }: { item: HelpItem }) {
  return item.map((segment, index) =>
    typeof segment === "string" ? (
      <Fragment key={index}>{segment}</Fragment>
    ) : (
      <kbd
        key={index}
        className="whitespace-nowrap rounded-[0.2rem] border border-[#bca877] bg-[#f5edd6] px-1.5 py-0.5 font-sans text-[0.875em] font-semibold text-[var(--deep-green)] shadow-sm"
      >
        {segment.label}
      </kbd>
    ),
  );
}

export default function HowToPlayTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const selectedTab = helpTabs[selectedIndex];

  function selectAndFocusTab(index: number) {
    const tab = tabRefs.current[index];

    setSelectedIndex(index);
    tab?.focus();
  }

  function selectMobileTopic(index: number) {
    setSelectedIndex(index);
    setMenuOpen(false);
    mobileMenuButtonRef.current?.focus();
  }

  function handleMobileMenuKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape" || !menuOpen) {
      return;
    }

    event.preventDefault();
    setMenuOpen(false);

    const menuButton = mobileMenuButtonRef.current;
    if (menuButton && menuButton.getClientRects().length > 0) {
      menuButton.focus();
    }
  }

  function handleTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    let nextIndex: number | undefined;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % helpTabs.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + helpTabs.length) % helpTabs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = helpTabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectAndFocusTab(nextIndex);
  }

  return (
    <div className="garden-media-shell mt-5 max-w-full overflow-hidden rounded-lg sm:mt-6 md:mt-8">
      <div
        className="bg-[var(--panel-bg-soft)] p-2 md:hidden"
        onKeyDown={handleMobileMenuKeyDown}
      >
        <div className="flex justify-end">
          <button
            ref={mobileMenuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="how-to-play-mobile-options"
            aria-label={`${menuOpen ? "Close" : "Open"} How to Play topics. Current topic: ${selectedTab.label}`}
            className="inline-flex min-h-11 min-w-0 max-w-full items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--panel-bg)] px-4 py-2 text-sm font-bold text-[var(--text-primary)] shadow-sm hover:bg-[#e8f1e5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel-bg-soft)]"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
            <span className="min-w-0 truncate">{selectedTab.label}</span>
          </button>
        </div>
        <ul
          id="how-to-play-mobile-options"
          className={menuOpen ? "mt-2 grid gap-2" : "hidden"}
        >
          {helpTabs.map((tab, index) => {
            const isSelected = selectedIndex === index;

            return (
              <li key={tab.id}>
                <button
                  type="button"
                  aria-current={isSelected ? "true" : undefined}
                  aria-controls={getPanelId(tab.id)}
                  className={`min-h-11 w-full min-w-0 rounded-2xl border border-[var(--border-soft)] px-4 py-3 text-left text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel-bg-soft)] ${
                    isSelected
                      ? "bg-[var(--deep-green)] text-[var(--panel-bg)] hover:bg-[#3f5a3d]"
                      : "bg-[var(--panel-bg)] text-[var(--text-primary)] hover:bg-[#e8f1e5]"
                  }`}
                  onClick={() => selectMobileTopic(index)}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        role="tablist"
        aria-label="How to Play topics"
        aria-orientation="horizontal"
        className="hidden w-full min-w-0 grid-cols-4 gap-2 bg-[var(--panel-bg-soft)] p-2 pb-0 md:grid"
      >
        {helpTabs.map((tab, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={getTabId(tab.id)}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={getPanelId(tab.id)}
              tabIndex={isSelected ? 0 : -1}
              className={`min-h-12 min-w-0 whitespace-nowrap rounded-t-sm border border-b-0 border-[var(--border-soft)] px-4 py-2.5 text-center text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--panel-bg-soft)] ${
                isSelected
                  ? "bg-[var(--deep-green)] text-[var(--panel-bg)] hover:bg-[#3f5a3d]"
                  : "bg-[var(--panel-bg)] text-[var(--text-primary)] hover:bg-[#e8f1e5]"
              }`}
              onClick={() => {
                setSelectedIndex(index);
                setMenuOpen(false);
              }}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {helpTabs.map((tab, index) => (
        <div
          key={tab.id}
          id={getPanelId(tab.id)}
          role="tabpanel"
          aria-labelledby={getTabId(tab.id)}
          tabIndex={0}
          hidden={selectedIndex !== index}
          className="border-t border-[var(--border-soft)] bg-[var(--panel-bg)] p-4 text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--deep-green)] sm:p-5 md:p-6"
        >
          <div className="space-y-6">
            {tab.sections.map((section) => {
              const sectionId = getSectionId(tab.id, section.id);

              return (
                <section key={section.id} aria-labelledby={sectionId}>
                  <h2
                    id={sectionId}
                    className="text-xl text-[var(--text-primary)] sm:text-2xl"
                  >
                    {section.heading}
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 break-words pl-5 text-base leading-7 text-[var(--text-muted)] sm:leading-8">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <HelpItemContent item={item} />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
