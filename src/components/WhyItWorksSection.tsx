const WhyItWorksSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why this works when nothing else does:
          </h2>
          
          <div className="space-y-8">
            <div className="bg-primary/5 rounded-xl p-8 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-3 text-primary">Speed matters.</h3>
              <p className="text-lg text-foreground">
                Your competitors are talking. Your customers are researching. Every day you're 
                invisible online is revenue walking away.
              </p>
            </div>
            
            <div className="bg-accent/5 rounded-xl p-8 border-l-4 border-accent">
              <h3 className="text-xl font-bold mb-3 text-accent">Authority compounds.</h3>
              <p className="text-lg text-foreground">
                Google presence makes your content rank higher. Quality content makes your Google 
                presence stronger. Together, they create an authority loop that your competition can't touch.
              </p>
            </div>
            
            <div className="bg-secondary rounded-xl p-8 border-l-4 border-muted-foreground">
              <h3 className="text-xl font-bold mb-3 text-muted-foreground">Systems beat willpower.</h3>
              <p className="text-lg text-foreground">
                We handle the production, optimization, and distribution. You show up for one hour monthly. That's it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;