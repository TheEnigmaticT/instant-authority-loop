import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to become the recognized authority in your field?</h2>
          
          <Button size="lg" className="text-xl px-12 py-6 mb-8 bg-white text-primary hover:bg-white/90 shadow-button">
            Book Your 15-Minute Strategy Call
          </Button>
          
          <p className="text-sm text-white/80 mb-12">
            No pitch. No pressure. We'll analyze your current online presence and show you exactly how the Instant Authority Engine works for your situation.
          </p>
          
          <div className="bg-white/10 rounded-xl p-8">
            <p className="text-sm text-white/90 italic leading-relaxed">
              <strong>P.S.</strong> — I wasted three years trying to build authority the "organic" way. Posted daily, followed all the advice, got decent engagement. But prospects still saw me as "some consultant guy." The moment I had real Google credibility backing up quality content, everything changed. Inbound leads tripled. Speaking fees doubled. Partnerships started reaching out to me. This system works because it solves the real problem: Google decides who's credible, not LinkedIn likes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;