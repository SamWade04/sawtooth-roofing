import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GHLFormContainer from "@/components/GHLFormContainer";
import LocalImpactGrid from "@/components/LocalImpactGrid";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export default function ClaimCheckPage() {
  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Header />
      <Hero />
      <GHLFormContainer />
      <LocalImpactGrid />
      <Footer />
      <StickyCallBar />
    </main>
  );
}
