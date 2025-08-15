import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-hero/80"></div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Instant</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Authority Engine
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Become a recognized industry expert in your field in just 90 days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg" className="text-lg px-8 py-4 shadow-glow">
              Book Your Strategy Call
            </Button>
            <p className="text-sm text-muted-foreground">
              15-minute call • No pitch • No pressure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;