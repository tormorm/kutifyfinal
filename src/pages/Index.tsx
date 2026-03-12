// src/pages/Index.tsx
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const WhatIsKutify = lazy(() => import("@/components/WhatIsKutify"));
const WhatIsNot = lazy(() => import("@/components/WhatIsNot"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Above the fold */}
      <Hero />

      {/* Below the fold */}
      <Suspense fallback={null}>
        <WhatIsKutify />
        <WhatIsNot />
        <section className="px-6 pb-6">
          <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <p className="text-sm md:text-base text-foreground mb-3">kui on häid või absurdseid ideid videote vms jaoks siis kirjuta</p>
            <a
              href="mailto:feedback@kutify.ee?subject=Kutify%20soovitus"
              className="relative inline-flex group p-[2px] rounded-xl border border-white/20"
            >
              <span className="absolute -inset-2 rounded-xl kutify-gradient blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />
              <span className="relative flex items-center justify-center px-8 py-4 rounded-[10px] bg-black/40 text-white text-lg font-semibold hover:bg-black/60 transition">
                Kirjuta meile
              </span>
            </a>
          </div>
        </section>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
