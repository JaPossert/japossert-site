import { ExternalLink } from "lucide-react";
const NowSection = () => {
  return <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Present</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8 text-center">
          <p className="text-cosmic text-lg leading-relaxed whitespace-pre-line">This link holds what is moving through me these days - a living reflection of focus, evolving emphasis & the quiet momentum of unfolding work.</p>
          
          <div className="relative group">
            <a href="https://tana.pub/Jr2l815neNNi/now-page-of-jakob-possert-bienzle" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
              <span className="font-heading text-xl">My Now Page</span>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          <div className="relative group">
            
          </div>
        </div>
      </div>
    </section>;
};
export default NowSection;