// src/pages/Index.tsx
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

const WhatIsKutify = lazy(() => import("@/components/WhatIsKutify"));
const WhatIsNot = lazy(() => import("@/components/WhatIsNot"));
const DemoChat = lazy(() => import("@/components/DemoChat"));
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
        <DemoChat />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;