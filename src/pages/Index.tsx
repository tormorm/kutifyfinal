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
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Kirjuta meile
            </a>
          </div>
        </section>

        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
