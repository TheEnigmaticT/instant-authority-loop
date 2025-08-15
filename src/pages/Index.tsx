import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import WhyItWorksSection from "@/components/WhyItWorksSection";
import TimelineSection from "@/components/TimelineSection";
import InvestmentSection from "@/components/InvestmentSection";
import QualificationSection from "@/components/QualificationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhyItWorksSection />
      <TimelineSection />
      <InvestmentSection />
      <QualificationSection />
      <Footer />
    </div>
  );
};

export default Index;
