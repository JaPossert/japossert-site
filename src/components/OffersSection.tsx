import { Github } from "lucide-react";

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
            Prototype coding &amp; architecture.{" "}
            <span className="text-primary font-medium">&euro;250 / hour.</span>
          </p>
          <p className="text-ethereal text-sm max-w-xl mx-auto mt-3">
            I build the v1 and design the (privacy-aware) structure it stands on
            and show you how to maintain it using an AI harness. FYI: Doesn't
            include a security audit.
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
      </div>
    </section>
  );
};

export default OffersSection;
