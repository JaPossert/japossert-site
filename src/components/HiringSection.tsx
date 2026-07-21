import { ExternalLink } from "lucide-react";

const HiringSection = () => {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-2xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Vision Team</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          <p className="text-cosmic text-lg leading-relaxed">
            What I am most looking forward to right now is connecting with the vision team for EvoBioSys.
          </p>

          <div className="relative group">
            <a href="https://evobiosys.org" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover presence-link">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <h3 className="font-heading text-2xl md:text-3xl text-primary">
                  EvoBioSys
                </h3>
                <ExternalLink className="w-5 h-5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-ethereal leading-relaxed">An investment studio with animist philosophy - evo (learning), bio (living, embodied), sys (systems we can create together).</p>
            </a>
          </div>

          <p className="text-ethereal text-sm leading-relaxed">
            Further down the line, I'm looking to meet a Co-Evolutionary Apprentice - someone who wants to walk this work closely, in an aligned way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;