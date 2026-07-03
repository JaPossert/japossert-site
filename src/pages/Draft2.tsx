import { ExternalLink, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { creations, writings, pitches } from "@/data/works";
import DraftBanner from "@/components/DraftBanner";
import SocialSection from "@/components/SocialSection";
import HiringSection from "@/components/HiringSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ArrowDivider from "@/components/ArrowDivider";

const domain = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Draft2 = () => {
  return (
    <div className="min-h-screen serif-variant">
      <DraftBanner current="/draft2" note='Draft 2 — portfolio variation, italic serif type.' />

      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="floating absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-xl"></div>
          <div className="floating absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-secondary/10 blur-xl" style={{ animationDelay: "2s" }}></div>
        </div>
        <div className="text-center space-y-8 z-10 px-6">
          <h1 className="font-heading text-6xl md:text-8xl font-medium tracking-wide">
            <span className="aurora-text">Jakob Possert-Bienzle</span>
          </h1>
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="font-heading text-cosmic text-3xl md:text-4xl font-light leading-snug">
              Let's form the future we all desire
            </p>
            <p className="text-ethereal text-sm font-body not-italic">
              Energetic Field Steward — guiding meaningful adVentures, resonance for what matters
            </p>
          </div>
        </div>
      </section>

      <ArrowDivider />

      {/* Selected Works */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-heading text-5xl md:text-6xl font-light mb-6">
              <span className="aurora-text">Selected Works</span>
            </h2>
            <div className="w-12 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {creations.map((item, i) => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover presence-link text-left space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-ethereal text-xs font-body not-italic uppercase tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")} · {item.field}
                  </span>
                  <ExternalLink className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading text-3xl md:text-4xl text-primary leading-tight">{item.name}</h3>
                <p className="text-ethereal text-sm font-body not-italic leading-relaxed">{item.description}</p>
                <p className="text-cosmic text-xs font-body not-italic opacity-70">{domain(item.url)}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ArrowDivider />

      {/* Writings & Pitches */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              <span className="aurora-text">Living Writings</span>
            </h2>
            <div className="w-12 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {writings.map(item => (
              <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover presence-link text-left space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-ethereal text-xs font-body not-italic uppercase tracking-[0.2em]">{item.field}</span>
                  <ExternalLink className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading text-2xl md:text-3xl text-primary leading-tight">{item.name}</h3>
                <p className="text-ethereal text-sm font-body not-italic leading-relaxed">{item.description}</p>
              </a>
            ))}
          </div>

          <p className="text-ethereal text-sm font-body not-italic text-center">
            Venture pitches:{" "}
            {pitches.map((p, i) => (
              <span key={p.name}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">{p.name}</a>
                {i < pitches.length - 1 && <span className="opacity-50"> · </span>}
              </span>
            ))}
          </p>
        </div>
      </section>

      <ArrowDivider />

      {/* Vortex + Now, condensed */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://evobiosys.org" target="_blank" rel="noopener noreferrer" className="group block p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover presence-link text-left space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-ethereal text-xs font-body not-italic uppercase tracking-[0.2em]">Main Vortex</span>
              <ExternalLink className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-heading text-3xl text-primary">EvoBioSys</h3>
            <p className="text-ethereal text-sm font-body not-italic leading-relaxed">An investment studio with animist philosophy — evo (learning), bio (living, embodied), sys (systems we can create together).</p>
          </a>
          <a href="https://tana.pub/Jr2l815neNNi/now-page-of-jakob-possert-bienzle" target="_blank" rel="noopener noreferrer" className="group block p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover presence-link text-left space-y-3">
            <div className="flex items-baseline justify-between">
              <span className="text-ethereal text-xs font-body not-italic uppercase tracking-[0.2em]">Present</span>
              <ExternalLink className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="font-heading text-3xl text-primary">My Now Page</h3>
            <p className="text-ethereal text-sm font-body not-italic leading-relaxed">A living reflection of focus, evolving emphasis & the quiet momentum of unfolding work.</p>
          </a>
        </div>
      </section>

      <ArrowDivider />

      {/* Being — portrait + film side by side */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
              <span className="aurora-text">Being</span>
            </h2>
            <div className="w-12 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover">
              <figure className="rounded-md overflow-hidden border border-border/20 bg-muted/10">
                <AspectRatio ratio={1 / 1}>
                  <img src="/lovable-uploads/a1a9ac97-cceb-4ef8-b3f0-cf42cadaf272.png" alt="Jakob Possert Bienzle — presence portrait" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </AspectRatio>
              </figure>
            </div>
            <a href="https://bit.ly/japossert_intro" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover presence-link text-center space-y-4">
              <Play className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              <p className="text-cosmic text-lg leading-relaxed">Meet me in motion — a short film that carries more than words can.</p>
              <p className="text-ethereal text-xs font-body not-italic">bit.ly/japossert_intro</p>
            </a>
          </div>
        </div>
      </section>

      <ArrowDivider />
      <SocialSection />
      <ArrowDivider />
      <HiringSection />
      <ArrowDivider />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Draft2;
