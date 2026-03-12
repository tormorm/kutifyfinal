import kutifyLogo from "@/assets/kutify-logo.webp";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo and name */}
          <div className="flex items-center gap-3">
            <img
              src={kutifyLogo}
              alt="Kutify"
              className="w-8 h-8 object-contain"
            />
            <span className="font-semibold kutify-text-gradient text-lg">kutify</span>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/50 text-center text-sm md:text-base italic">
              merch coming soon trust
            </p>
            
          <footer className="mt-24 py-8 border-t border-white/10 text-center text-sm text-muted-foreground">
  <a
    href="mailto:feedback@kutify.ee"
    className="hover:text-white transition"
  >
    Saada tagasisidet: feedback@kutify.ee
  </a>
</footer>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © 2026 kutify · Oliver Niiske productions
          </p>

        </div>

        {/* Divider */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Fun disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-white/25">
            kui sa said sellelt lehelt mingi vale vastuse siis sry aga ma ütlesin ju et see on loll
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;