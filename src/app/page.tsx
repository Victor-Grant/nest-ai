import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import FoundingCohort from "@/components/FoundingCohort";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Services />
        <Process />
        <FoundingCohort />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
