import kutifyLogo from "@/assets/kutify-logo.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      {/* Logo */}
      <div className="float mb-8">
        <img
          alt="Kutify logo"
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
          src={kutifyLogo}
        />
      </div>

      {/* Main heading */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-6 animate-fade-in">
        <span className="gradient-text">see on kutify</span>
      </h1>

      {/* Subtitle */}
      <p
        className="text-xl md:text-2xl lg:text-3xl text-muted-foreground text-center max-w-2xl mb-8 animate-slide-up"
        style={{ animationDelay: "0.2s" }}
      >
        Tehisintellekt mis pole vaga intelligentne
      </p>

{/* YouTube button */}
<div className="flex flex-col sm:flex-row items-center gap-4">
  {/* TikTok button */}
  <button
    onClick={() =>
      window.open("https://www.tiktok.com/@kutifyai", "_blank", "noopener")
    }
    className="relative group p-[2px] rounded-xl border border-white/20"
  >
    {/* Kutify glow */}
    <span className="absolute -inset-2 rounded-xl kutify-gradient blur-xl opacity-60 group-hover:opacity-90 transition duration-500"></span>
    {/* button */}
    <span className="relative flex items-center justify-center px-8 py-4 rounded-[10px] bg-black/40 text-white text-lg font-semibold hover:bg-black/60 transition">
      Vaata TikToki
    </span>
  </button>

  {/* School project badge */}

  {/* Kutify CTA */}
  <button
    onClick={() =>
      window.open(
        "https://chatgpt.com/g/g-6979e755446081918c7cd6da08bb791c-kutify",
        "_blank",
        "noopener"
      )
    }
  >
    <span className="flex items-center justify-center px-8 py-4 rounded-[10px] bg-black/45 backdrop-blur-xl text-white text-lg font-semibold hover:bg-black/60 transition">
      Alusta rääkimist
    </span>
  </button>
</div>


      {/* Scroll down indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-16 inset-x-0 flex flex-col items-center gap-2
                   text-muted-foreground animate-bounce pointer-events-none select-none"
      >
        <span className="text-sm tracking-wide opacity-80">Loe edasi</span>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M12 19l-6-6M12 19l6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
