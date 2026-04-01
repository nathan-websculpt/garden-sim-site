export default function VisionSection() {
  return (
    <section aria-labelledby="full-game-vision" className="pb-10 sm:pb-14">
      <div className="garden-container">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#c4d6c6] bg-[radial-gradient(circle_at_top_left,_rgba(207,227,239,0.65)_0%,_rgba(245,249,239,0.94)_35%,_rgba(255,243,230,0.96)_100%)] p-6 shadow-[0_26px_52px_-38px_rgba(76,104,74,0.48)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-[#cfe3ef]/80 blur-xl" />
          <div className="pointer-events-none absolute -bottom-8 right-8 h-24 w-24 rounded-full bg-[#d6b34d]/25 blur-xl" />
          <div className="pointer-events-none absolute right-12 top-10 h-3 w-3 rounded-full bg-[#d06a59]/70" />
          <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="home-chip-stack">
              <p className="inline-flex rounded-full border border-[#b9ccb9] bg-[#fbf8f0]/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#4c684a]">
                Looking Ahead
              </p>
              <div className="home-copy-stack">
                <h2 id="full-game-vision" className="text-2xl sm:text-3xl">
                  The Vision for the Full Game
                </h2>
                <div className="home-paragraph-stack max-w-3xl text-base leading-8 text-[#60705f] sm:text-lg">
                  <p>
                    The full game will have multiple maps and a story (thus, a reason you are digging 
                    up jars of seeds). As you gain access to more plots of land, automation options 
                    will present themselves to help you maintain it all. Of course, you could always 
                    just play the game with smaller gardens, it is your choice.
                  </p>
                  <p>
                    Soil health will be an element to the full game as well as soil acidity levels &mdash; 
                    these will be affected by which plants are on/next-to a tile as well as fertilizers/ammendments. 
                    Soil health will only be improved via new trees that will be introduced later on.
                  </p>
                  <p>
                    Some maps will be monocrops, while other maps will have people that need your help. 
                  </p>
                </div>
              </div>
            </div>
            <aside className="rounded-[1.6rem] border border-[#cedccf] bg-[#fbf8f0]/90 p-5 shadow-[0_20px_40px_-32px_rgba(76,104,74,0.45)] sm:p-6">
              <div className="home-paragraph-stack">
                <p className="font-display text-xl leading-tight text-[#2d3328] sm:text-2xl">
                  &quot;The demo is the first patch of land. The full game is
                  the wider garden it points toward.&quot;
                </p>
                <p className="text-sm leading-7 text-[#60705f] sm:text-base">
                  This direction keeps me focused on building something cozy,
                  personal, and complete over the long run.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
