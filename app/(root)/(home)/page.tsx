import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import MainSection from "@/components/shared/MainSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Header />

      <MainSection />

      <Footer />
    </main>
  );
}
