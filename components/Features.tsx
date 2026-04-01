const featureCards = [
  {
    title: "Grow flowers and crops",
    description:
      "Plan your beds with colorful flowers and practical crops, then shape your garden so beauty and harvest work together.",
  },
  {
    title: "Boost Harvests",
    description:
      "Plant Health and Fertilizers determine the yield at time of harvest. Plants prefer certain NPKs which various fertilizers provide.",
  },
  {
    title: "Bee Keeping",
    description:
      "Apiaries can be added when you have enough Garden Morale, and this is the only way to replenish Plant Health.",
  },
  {
    title: "Friendly Helpers",
    description:
      "4 helpers come out to your garden as you progress to help you Harvest and Water your plants. One even collects Honey for you!",
  },
];

export default function Features() {
  return (
    <section aria-labelledby="features" className="pb-10 sm:pb-14">
      <div className="garden-container">
        <div className="section-shell">
          <div className="home-copy-stack">
            <h2 id="features" className="text-2xl sm:text-3xl">
              Features
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[#60705f]">
              Garden Sim balances flowers and crops via <b>Garden Morale</b> which is 
              only grown by having flowers. Unlockables and upgrades are granted to the player 
              at each stage of <b>Garden Morale</b>. These range from gaining the ability to sprint, 
              to attaining fast-travel, and even one-click buttons like: <i>water all</i> and <i>harvest all</i>.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="garden-card rounded-3xl p-5"
              >
                <div className="home-card-copy">
                  <h3 className="text-xl">{feature.title}</h3>
                  <p className="text-sm leading-7 text-[#60705f] sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
