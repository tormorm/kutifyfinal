const WhatIsNot = () => {
  const notThings = [{
    text: "chatgpt konkurent",
    subtext: "lmao kindlasti mitte"
  }, {
    text: "päris õpetaja",
    subtext: "ei vastuta millegi eest"
  }, {
    text: "alati õige",
    subtext: "pigem harva ausalt öeldes"
  }, {
    text: "professionaalne ai",
    subtext: "hahahahahaha"
  }];
  return <section className="py-24 md:py-32 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            mis kutify <span className="text-destructive">EI</span> ole
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">et sa ei saaks valesti aru</p>
        </div>

        {/* List */}
        <div className="space-y-4">
          {notThings.map((item, index) => <div key={index} className="flex items-center gap-4 p-5 md:p-6 rounded-xl bg-card/50 border border-border hover:border-destructive/30 transition-colors duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                <span className="text-destructive text-xl">✕</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-medium text-foreground">
                  {item.text}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {item.subtext}
                </p>
              </div>
            </div>)}
        </div>
      </div>

    </section>;
   {/* Hakka rääkima CTA */}
    <div className="mt-24 w-full max-w-6xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
        {/* glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-[140px]" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text">hakka rääkima</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              proovi järgi.
            </p>
          </div>

          {/* Button */}
         <a
            href="https://chatgpt.com/g/g-6979e755446081918c7cd6da08bb791c-kutify"
            target="_blank"
            rel="noopener"
            className="shrink-0 inline-flex items-center justify-center px-8 py-4 rounded-xl
                   bg-gradient-to-r from-primary to-accent text-primary-foreground
                   text-lg font-semibold hover:opacity-90 transition"
        >
            Ava vestlus
        </a>
      </div>
    </div>
  </div>
};
export default WhatIsNot;