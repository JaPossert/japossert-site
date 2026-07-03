import { Play } from "lucide-react";
const MediaSectionV2 = () => {
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
            <div className="relative group">
              <a href="https://bit.ly/japossert_intro" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover presence-link">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Play className="w-6 h-6 text-primary" />
                  <span className="text-cosmic">Intro Video</span>
                </div>
                <p className="text-ethereal text-sm">bit.ly/japossert_intro</p>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default MediaSectionV2;
