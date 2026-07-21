const HeroV2 = ({ name = "Jakob Possert-Bienzle" }: { name?: string }) => {
  return <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="floating absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
        <div className="floating absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-secondary/10 blur-xl" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="text-center space-y-8 z-10 px-6 py-20">
        <div className="mx-auto w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-border/40 shadow-[var(--shadow-glow)]">
          <img src="/lovable-uploads/a1a9ac97-cceb-4ef8-b3f0-cf42cadaf272.png" alt="Jakob Possert-Bienzle - portrait" className="w-full h-full object-cover" />
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-light tracking-wide">
          <span className="aurora-text">{name}</span>
        </h1>

        <div className="max-w-2xl mx-auto space-y-3">
          <p className="font-heading text-cosmic text-2xl md:text-3xl font-light leading-snug">Consultant, Founder, Manager</p>
          <p className="text-ethereal text-sm font-body not-italic">Technology &amp; Governance | Organizational Development</p>
          <p className="text-ethereal text-sm font-body not-italic leading-relaxed">
            Initiator, advisor and steward across tech (CTO: architecture design &amp; agentic
            engineering), finance (state financial-adviser exam), and organizational development
            (certified coach &amp; facilitator; editing publications since 2018). Delivers complex
            projects from first step to handover while adding management capacity without
            consuming it. Drawn to cohering aligned but not yet coordinated projects: Doing what
            is important but neglected by others.
          </p>
          <p className="text-ethereal text-sm font-body not-italic">Lives with his wife and first child in Vienna.</p>
          <p className="text-sm font-body not-italic">
            <a href="/cv" className="text-primary hover:text-primary/80 underline transition-colors">CV</a>
          </p>
        </div>
      </div>
    </section>;
};
export default HeroV2;
