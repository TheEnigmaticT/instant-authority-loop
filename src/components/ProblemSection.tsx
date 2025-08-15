const ProblemSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-muted-foreground">Most "thought leadership" advice is</span>{" "}
            <span className="text-destructive">garbage.</span>
          </h2>
          
          <div className="prose prose-lg prose-invert mx-auto text-center mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              You get told to "just be consistent" and "provide value." Cool. That's like telling 
              someone to "just score more points" to win at basketball.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">Here's what actually works:</h3>
            <p className="text-lg text-foreground mb-6">
              You need two things most founders don't have—<strong>Google credibility</strong> and{" "}
              <strong>content that doesn't suck</strong>.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Google decides who's an expert. Your audience discovers experts through Google searches 
              and Google-fed platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted/20 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-destructive mb-4">The Problem:</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Building real Google presence takes 12-18 months</li>
                <li>• Creating authentic authority content takes even longer</li>
                <li>• Most founders give up after 30 days</li>
              </ul>
            </div>
            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">Our Solution:</h4>
              <p className="text-foreground text-lg font-medium">
                We solved both problems with the Instant Authority Engine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;