export default function StoreSection() {
  return (
    <section aria-labelledby="store-section" className="pb-10 sm:pb-14">
      <div className="garden-container">
        <div className="section-shell relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 top-4 h-28 w-28 rounded-full bg-[#d6b34d]/20 blur-2xl" />
          <div className="pointer-events-none absolute -left-8 bottom-6 h-24 w-24 rounded-full bg-[#91ab89]/30 blur-2xl" />
          <div className="relative home-copy-stack">
            <h2 id="store-section" className="text-2xl sm:text-3xl">
              Store
            </h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <article className="garden-card rounded-3xl bg-[#fbf8f0]/90 p-5 sm:p-6">
                <p className="text-base leading-8 text-[#60705f] sm:text-lg">
                  The currency in the game is <b>SEED</b>. You collect{" "}
                  <b>SEED</b> from each fruit that you harvest, but different
                  plants cost different amounts of <b>SEED</b> in the store (it
                  costs more <b>SEED</b> to buy 1 Rare Hibiscus seed than it
                  does 1 Tomato seed).
                </p>
              </article>
              <article className="garden-card rounded-3xl bg-[#fbf8f0]/90 p-5 sm:p-6">
                <p className="text-base leading-8 text-[#60705f] sm:text-lg">
                  You can also sell Wood and Fruits to help you save up to buy
                  bigger items like the water system or an apiary (for Bee
                  Keeping).
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
