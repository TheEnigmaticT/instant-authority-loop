import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-abstract-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(135deg, hsl(191 100% 50% / 0.9), hsl(191 100% 40% / 0.9)), url(${heroBg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Instant</span>
              <span className="block text-white">
                Authority Engine
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-medium">
              Become a recognized industry expert in your field in just 90 days
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Button size="lg" className="text-lg px-10 py-4 bg-white text-primary hover:bg-white/90 shadow-button font-semibold">
                Book Your Strategy Call
              </Button>
              <p className="text-sm text-white/80 font-medium">
                15-minute call • No pitch • No pressure
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/ae3dca56-957b-4e64-81ca-2b7ab6cf6a0e.png" 
              alt="Happy business professional celebrating success" 
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;