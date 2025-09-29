

const HiringSection = () => {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-2xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Co-Evolutionary Apprentice</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          <p className="text-cosmic text-lg leading-relaxed">
            What I am most looking forward to right now is meeting someone who wants to act as my Co-Evolutionary Apprentice in an aligned manner.
          </p>
          
          <div className="relative group">
            <div className="p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover">
              <iframe 
                src="https://idea2.life/hiring" 
                className="w-full h-96 rounded-lg border border-border/40 bg-card/20"
                title="Hiring - Co-Evolutionary Apprentice"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSection;