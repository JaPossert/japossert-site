import { ExternalLink, Github } from "lucide-react";
import { shipped } from "@/data/works";

const OffersSection = () => {
  return (
    <section id="offers" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-16">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Available for Work</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-cosmic text-lg leading-relaxed max-w-xl mx-auto">
            Prototype coding &amp; architecture. <span className="text-primary font-medium">&euro;250 / hour.</span> No audits.
          </p>
          <p className="text-ethereal text-sm max-w-xl mx-auto mt-3">
            I build the first working version and the structure it stands on - fast, then
            handed off cleanly. Not code review, not compliance sign-off, not a security audit.
          </p>
          <a
            href="https://github.com/JaPossert"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 underline transition-colors text-sm"
          >
            <Github className="w-4 h-4" />
            github.com/JaPossert
          </a>
        </div>

        <div className="text-left">
          <h3 className="font-heading text-2xl md:text-3xl font-light text-center mb-8">
            <span className="aurora-text">Shipped</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shipped.map(item => (
              <div
                key={item.name}
                className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover"
              >
                <div className="flex items-center justify-between mb-3">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-primary"
                  >
                    <h4 className="font-heading text-lg">{item.name}</h4>
                    <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.name} on GitHub`}
                      className="text-ethereal hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-ethereal text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
