import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 bg-card border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to become the recognized authority in your field?</h2>
          <p className="text-lg text-muted-foreground mb-12">
            This launches January 15th, 2025. We're taking 20 founders maximum for the pilot program.
          </p>
          
          <Button variant="primary" size="lg" className="text-xl px-12 py-6 mb-8">
            Book Your 15-Minute Strategy Call
          </Button>
          
          <p className="text-sm text-muted-foreground mb-12">
            No pitch. No pressure. We'll analyze your current online presence and show you exactly how the Instant Authority Engine works for your situation.
          </p>
          
          <div className="bg-secondary/50 rounded-xl p-8">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              <strong>P.S.</strong> — I wasted three years trying to build authority the "organic" way. Posted daily, followed all the advice, got decent engagement. But prospects still saw me as "some consultant guy." The moment I had real Google credibility backing up quality content, everything changed. Inbound leads tripled. Speaking fees doubled. Partnerships started reaching out to me. This system works because it solves the real problem: Google decides who's credible, not LinkedIn likes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;