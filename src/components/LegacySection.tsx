import { Archive } from "lucide-react";
const LegacySection = () => {
  return <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Archive</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          <p className="text-cosmic text-lg leading-relaxed">
            For those seeking context or deeper archives—
            where the past remains accessible but does not define the present.
          </p>
          
          <div className="relative group">
            <a href="#" // Jakob will provide legacy website URL
          target="_blank" rel="noopener noreferrer" className="block p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover presence-link">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Archive className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-xl text-cosmic">
                  Legacy Website
                </h3>
              </div>
              
              <p className="text-ethereal leading-relaxed">
                Previous expressions, archived contexts, and the journey that led here.
              </p>
              
              
            </a>
          </div>
          
          <p className="text-ethereal text-sm italic">jakobpossert.wordpress.com</p>
        </div>
      </div>
    </section>;
};
export default LegacySection;