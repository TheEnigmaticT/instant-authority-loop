import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const InvestmentSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The math is simple:</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Most founders spend $10,000+ per month on ads that stop working the moment you stop paying.
            </p>
            <p className="text-xl text-primary font-semibold mb-4">
              You'll invest $10,000 once and own digital real estate that works for years.
            </p>
            <p className="text-lg text-foreground">
              One new client, speaking gig, or partnership deal pays for the entire program.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold mb-8 text-primary">Investment: $10,000 over 90 days</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-background/50 border-primary/20">
                <h4 className="text-lg font-semibold mb-2">Pay in Full</h4>
                <div className="text-2xl font-bold text-primary mb-2">$8,500</div>
                <p className="text-sm text-muted-foreground">(15% discount)</p>
              </Card>
              
              <Card className="p-6 bg-background/50 border-accent/20">
                <h4 className="text-lg font-semibold mb-2">3 Monthly Payments</h4>
                <div className="text-2xl font-bold text-accent mb-2">$3,500</div>
                <p className="text-sm text-muted-foreground">each</p>
              </Card>
              
              <Card className="p-6 bg-background/50 border-border">
                <h4 className="text-lg font-semibold mb-2">6 Monthly Payments</h4>
                <div className="text-2xl font-bold text-muted-foreground mb-2">$1,750</div>
                <p className="text-sm text-muted-foreground">each</p>
              </Card>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-4">Guarantee:</h3>
            <p className="text-lg text-foreground">
              After 90 days, if you don't have a Google Knowledge Panel and 40+ high-ranking articles about you, 
              plus 45+ pieces of published authority content driving measurable engagement—we'll work for free until you do.
            </p>
          </div>

          <Button variant="primary" size="lg" className="text-xl px-12 py-6">
            Book Your Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;