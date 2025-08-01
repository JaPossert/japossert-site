import { Play, Image } from "lucide-react";
const MediaSection = () => {
  return <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="space-y-16">
        
        {/* Intro Video */}
        <div className="text-center space-y-8">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              <span className="aurora-text">Being</span>
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-cosmic text-lg leading-relaxed">A feel for how I move - in front of a camera.</p>
            
            <div className="relative group">
              <div className="p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Play className="w-6 h-6 text-primary" />
                  <span className="text-cosmic">Intro Video</span>
                </div>
                <p className="text-ethereal text-sm">bit.ly/japossert_intro</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className="text-center space-y-8">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light mb-6">
              <span className="aurora-text">Presence</span>
            </h3>
            <div className="w-8 h-px bg-primary mx-auto mb-8"></div>
          </div>
          
          <div className="relative group">
            <div className="p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Image className="w-6 h-6 text-primary" />
                <span className="text-cosmic">Image</span>
              </div>
              <p className="text-ethereal text-sm">
                A single photo—not posed, not branded.<br />
                Image link to be added by Jakob
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>;
};
export default MediaSection;