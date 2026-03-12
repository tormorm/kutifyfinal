const WhatIsKutify = () => {
  const features = [
    {
      emoji: "🏫",
      title: "LARG",
      description: "trust me koik laheme Lasnamäe riigigümnaasiumisse"
    },
    {
      emoji: "🌯",
      title: "Keron road kebab",
      description: "best kebab on this road"
    },
    {
      emoji: "🎭",
      title: "Oliver Niiske productions",
      description: "kutify meedia"
    },
    {
      emoji: "❓",
      title: "Coming soon",
      description: "yes"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Kutify partnerid</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            big money
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="gradient-border rounded-2xl p-6 md:p-8 bg-card glitch-hover transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsKutify;
