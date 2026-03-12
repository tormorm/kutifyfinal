const WhatIsNot = () => {
  const sponsors = [
    {
      name: "Oliver Niiske",
      role: "ASUTAJA",
      description: "tan niiske",
      emoji: "🎬",
    },
    {
      name: "Alexsander Urbala",
      role: "TOETAJA",
      description: "tema soovitus",
      emoji: "🔥",
    },
    {
      name: "???",
      role: "???",
      description: "midagi tuleb siia",
      emoji: "❓",
    },
    {
      name: "Kutify pusa kandjad",
      role: "GOATED VANAD",
      description: "ülejäänud merch coming soon",
      emoji: "🧢",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">keda me sponsoreerime</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            respect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="gradient-border rounded-2xl p-6 md:p-8 bg-card glitch-hover transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{sponsor.emoji}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {sponsor.name}
              </h3>
              <p className="text-sm uppercase tracking-wide text-primary mb-3">
                {sponsor.role}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {sponsor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsNot;
