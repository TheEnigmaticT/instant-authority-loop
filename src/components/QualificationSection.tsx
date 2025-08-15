const QualificationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            This isn't for everyone:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-destructive/10 rounded-xl p-8 border-destructive/20">
              <h3 className="text-2xl font-bold mb-6 text-destructive">❌ This isn't for you if:</h3>
              <ul className="space-y-4 text-foreground">
                <li>• You're looking for quick followers or vanity metrics</li>
                <li>• You want to stay anonymous or avoid being visible</li>
                <li>• You expect results without any time investment</li>
                <li>• You're not ready to be seen as the leader in your space</li>
              </ul>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-8 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-primary">✅ This is perfect if:</h3>
              <ul className="space-y-4 text-foreground">
                <li>• You're building a serious business (not a side hustle)</li>
                <li>• You want customers to find you instead of chasing them</li>
                <li>• You can commit 1 hour monthly for content creation</li>
                <li>• You're ready to be recognized as an industry authority</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;