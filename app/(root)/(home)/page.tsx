"use client";

import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Loader from "@/components/shared/Loader";
import MainSection from "@/components/shared/MainSection";
import Navbar from "@/components/shared/Navbar";
import { useState } from "react";

export default function Home() {
  const [loadingAnimationComplete, setLoadingAnimation] = useState(true);

  const loadingAnimationHandler = (value: boolean) => {
    setLoadingAnimation(value);
  };

  return (
    <main className="flex flex-col gap-10">
      {!loadingAnimationComplete ? (
        <section>
          <Loader setLoadingAnimation={loadingAnimationHandler} />
        </section>
      ) : (
        <>
          <Navbar />

          <section className="flex-1">
            <MainSection />
          </section>

          <Footer />
        </>
      )}
    </main>
  );
}
