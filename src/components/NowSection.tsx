import { ExternalLink } from "lucide-react";

const NowSection = () => {
  return <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Now</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8 text-center">
          <p className="text-cosmic text-lg leading-relaxed">This link holds what is present - a living reflection of current focus, evolving emphasis, and the quiet momentum of unfolding work.</p>
          
          <div className="relative group">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover presence-link"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <h3 className="font-heading text-2xl md:text-3xl text-primary">
                  Project Name
                </h3>
                <ExternalLink className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <p className="text-ethereal leading-relaxed">
                Description of the second project or vortex. 
                Another space where energy flows and ideas take shape.
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
export default NowSection;