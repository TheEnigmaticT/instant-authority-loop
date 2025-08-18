const QualificationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            This isn't for everyone:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-8 border border-red-200 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-red-500">
              <h3 className="text-2xl font-bold mb-6 text-red-600">❌ This isn't for you if:</h3>
              <ul className="space-y-4 text-gray-700">
                <li>• You're looking for quick followers or vanity metrics</li>
                <li>• You want to stay anonymous or avoid being visible</li>
                <li>• You expect results without any time investment</li>
                <li>• You're not ready to be seen as the leader in your space</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-6 text-primary">✅ This is perfect if:</h3>
              <ul className="space-y-4 text-gray-700">
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