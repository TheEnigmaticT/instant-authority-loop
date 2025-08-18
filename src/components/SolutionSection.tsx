import { Card } from "@/components/ui/card";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-primary bg-white flex items-center justify-center shadow-lg">
              <img 
                src="/lovable-uploads/d62ddac7-e8b8-4d1d-b482-19c9c04c715d.png" 
                alt="Authority engine" 
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            The Instant Authority Engine combines
          </h2>
          <p className="text-2xl text-center mb-16 text-primary">two proven systems:</p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 bg-primary/5 border-primary/20 shadow-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Joey's Instant Google Presence</h3>
                <p className="text-primary font-semibold">($5,000 value)</p>
              </div>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Google Knowledge Panel creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>40 high-ranking news articles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Wiki pages on multiple platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Personal brand website optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Negative content removal</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-primary/5 border-primary/20 shadow-card">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Trevor's Content Engine</h3>
                <p className="text-primary font-semibold">($1,500/month value)</p>
              </div>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Complete content strategy and production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>15+ pieces of thought leadership content monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Video shorts, LinkedIn posts, and long-form articles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>All created from just 1 hour of your time per month</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;