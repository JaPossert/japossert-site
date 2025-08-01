import { ExternalLink } from "lucide-react";
const VortexSection = () => {
  return <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            My Main <span className="aurora-text">Vortex</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          <p className="text-cosmic text-lg leading-relaxed">Where most of my energy flows right now 
a living project that 
draws attention, intention, and creative force.</p>
          
          <div className="relative group">
            <a href="https://idea2.life" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover presence-link">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <h3 className="font-heading text-2xl md:text-3xl text-primary">
                  idea2.life
                </h3>
                <ExternalLink className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-ethereal leading-relaxed">
                An ecosystem for ideas that want to become real. 
                Where possibility meets form, and vision finds expression.
              </p>
              
              <div className="mt-6 text-xs text-muted-foreground uppercase tracking-wide">
                Living Project
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default VortexSection;