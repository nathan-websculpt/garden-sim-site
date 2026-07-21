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

function HelpItemContent({ item }: { item: HelpItem }) {
  return item.map((segment, index) =>
    typeof segment === "string" ? (
      <Fragment key={index}>{segment}</Fragment>
    ) : (
      <kbd
        key={index}
        className="whitespace-nowrap rounded-[0.2rem] border border-white/30 bg-[#25282a] px-1.5 py-0.5 font-sans text-[0.875em] font-semibold text-[#f7f8fa]"
      >
        {segment.label}
      </kbd>
    ),
  );
}

export default function HowToPlayTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectAndFocusTab(index: number) {
    const tab = tabRefs.current[index];

    setSelectedIndex(index);
    tab?.focus();
    tab?.scrollIntoView({
      behavior: "auto",
      block: "nearest",
      inline: "nearest",
    });
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
    <div className="mt-8 max-w-full overflow-hidden rounded-lg border border-[#cad6e2] bg-[#31445d] [--text-primary:#f7f8fa]">
      <div className="max-w-full overflow-x-auto overscroll-x-contain">
        <div
          role="tablist"
          aria-label="How to Play topics"
          aria-orientation="horizontal"
          className="flex min-w-max gap-2 p-2 pb-0 md:grid md:w-full md:min-w-0 md:grid-cols-4"
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
                className={`min-h-12 whitespace-nowrap rounded-t-sm border border-b-0 border-[#cad6e2]/50 px-4 py-2.5 text-left text-sm font-bold text-[#f7f8fa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#31445d] sm:text-base md:text-center ${
                  isSelected
                    ? "bg-[#0b67bd]"
                    : "bg-[#25282a] hover:bg-[#333638]"
                }`}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
      {helpTabs.map((tab, index) => (
        <div
          key={tab.id}
          id={getPanelId(tab.id)}
          role="tabpanel"
          aria-labelledby={getTabId(tab.id)}
          tabIndex={0}
          hidden={selectedIndex !== index}
          className="border-t border-[#cad6e2] bg-[#31445d] p-4 text-[#f7f8fa] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white sm:p-6"
        >
          <div className="space-y-6">
            {tab.sections.map((section) => {
              const sectionId = getSectionId(tab.id, section.id);

              return (
                <section key={section.id} aria-labelledby={sectionId}>
                  <h2
                    id={sectionId}
                    className="text-xl text-[#f7f8fa] sm:text-2xl"
                  >
                    {section.heading}
                  </h2>
                  <ul className="mt-3 list-disc space-y-2 break-words pl-5 text-base leading-7 text-[#f7f8fa] sm:leading-8">
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
