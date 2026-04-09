import SectionFrame from "@/components/SectionFrame";

export default function StoreSection() {
  return (
    <SectionFrame
      aria-labelledby="store-section"
      spacing="home"
      shellClassName="relative overflow-hidden [--panel-bg:var(--panel-bg-soft)]"
    >
      <div className="pointer-events-none absolute -right-10 top-4 h-28 w-28 rounded-full bg-[#d6b34d]/20 blur-2xl" />
      <div className="pointer-events-none absolute -left-8 bottom-6 h-24 w-24 rounded-full bg-[#91ab89]/30 blur-2xl" />
      <div className="relative space-y-4 sm:space-y-[1.125rem]">
        <h2 id="store-section" className="text-2xl sm:text-3xl">
          Store
        </h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="garden-card rounded-3xl bg-[color-mix(in_oklab,var(--panel-bg-soft)_94%,white)] p-5 sm:p-6">
            <p className="text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              The currency in the game is <b>SEED</b>. You collect{" "}
              <b>SEED</b> from each fruit that you harvest, but different
              plants cost different amounts of <b>SEED</b> in the store (it
              costs more <b>SEED</b> to buy 1 Rare Hibiscus seed than it
              does 1 Tomato seed).
            </p>
          </article>
          <article className="garden-card rounded-3xl bg-[color-mix(in_oklab,var(--panel-bg-soft)_94%,white)] p-5 sm:p-6">
            <p className="text-base leading-8 text-[var(--text-muted)] sm:text-lg">
              You can also sell Wood and Fruits to help you save up to buy
              bigger items like the water system or an apiary (for Bee
              Keeping).
            </p>
          </article>
        </div>
      </div>
    </SectionFrame>
  );
}
