const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
        <div className="floating absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-secondary/10 blur-xl" style={{
        animationDelay: '2s'
      }}></div>
      </div>
      
      <div className="text-center space-y-8 z-10">
        <div className="space-y-4">
          <h1 className="font-heading text-6xl md:text-8xl font-light tracking-wide">
            <span className="aurora-text">Jakob</span>
          </h1>
          
          <div className="max-w-md mx-auto space-y-3">
            <p className="text-cosmic text-lg font-light">
              A doorway for the curious
            </p>
            <p className="text-ethereal text-sm">Resonating?</p>
          </div>
        </div>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent opacity-60"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;