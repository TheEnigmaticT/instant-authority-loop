import { Card } from "@/components/ui/card";

const TimelineSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-36 h-36 rounded-full border-[10px] border-cyan-500 bg-white flex items-center justify-center shadow-lg">
              <img 
                src="/lovable-uploads/f50ce551-bbdf-40a9-9687-a919480ce724.png" 
                alt="90 day timeline hot air balloon" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What you get in 90 days:
          </h2>
          
          <div className="space-y-8">
            <Card className="p-8 bg-white border-primary/20 shadow-card">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Month 1: Google presence foundation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Knowledge panel goes live</li>
                    <li>• First wave of news articles published</li>
                    <li>• Personal brand website launched</li>
                    <li>• Content strategy mapping completed</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-primary/20 shadow-card">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Month 2: Content engine activation</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 15+ pieces of authority content published</li>
                    <li>• Video shorts performing across platforms</li>
                    <li>• LinkedIn posts driving engagement and DMs</li>
                    <li>• Search rankings improving for your target keywords</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-primary/20 shadow-card">
              <div className="flex items-start">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Month 3: Authority amplification</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 40+ news articles ranking in search results</li>
                    <li>• Content reaching 10x more prospects monthly</li>
                    <li>• Inbound leads increasing 3-5x</li>
                    <li>• Speaking opportunities and partnership requests flowing in</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;