const NowSection = () => {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Now</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8 text-center">
          <p className="text-cosmic text-lg leading-relaxed">
            This space holds what is present—a living reflection of current focus, 
            evolving emphasis, and the quiet momentum of unfolding work.
          </p>
          
          <div className="grid gap-6 md:gap-8">
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 glow-hover">
              <h3 className="font-heading text-xl text-primary mb-3">Present Focus</h3>
              <p className="text-ethereal">
                Cultivating presence through digital spaces that invite genuine connection 
                and authentic expression.
              </p>
            </div>
            
            <div className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 glow-hover">
              <h3 className="font-heading text-xl text-primary mb-3">Current Rhythm</h3>
              <p className="text-ethereal">
                Moving between contemplation and creation, seeking coherence 
                in both inner landscape and outer expression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowSection;