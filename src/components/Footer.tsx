import kutifyLogo from "@/assets/kutify-logo.webp";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and name */}
          <div className="flex items-center gap-3">
            <img src={kutifyLogo} alt="Kutify" className="w-8 h-8 object-contain" />
            <span className="font-semibold kutify-text-gradient text-lg">kutify</span>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/50 text-center text-sm md:text-base italic">
              merch coming soon trust
            </p>
            <a href="mailto:feedback@kutify.ee" className="text-sm text-muted-foreground hover:text-white transition">
              Saada tagasisidet: feedback@kutify.ee
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-sm">© 2026 kutify · Oliver Niiske productions</p>
        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Fun disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/25">
            kui sa said sellelt lehelt mingi vale vastuse siis sry aga ma ütlesin ju et see on loll
          </p>
        </div>

        {/* Suggestions */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
          <p className="text-sm md:text-base text-foreground mb-3">kirjuta meile kui on soovitusi ✨</p>
          <a
            href="mailto:feedback@kutify.ee?subject=Kutify%20soovitus"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Kirjuta meile
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
