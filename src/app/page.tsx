import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import ForWhoSection from "@/components/ForWhoSection";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ForWhoSection />
      <BenefitsSection />
      <FAQSection />
    </div>
  );
}