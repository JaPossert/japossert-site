import { ExternalLink, Play } from "lucide-react";
import { creations, writings, pitches } from "@/data/works";
import DraftBanner from "@/components/DraftBanner";
import HeroV2 from "@/components/HeroV2";
import SocialSection from "@/components/SocialSection";
import HiringSection from "@/components/HiringSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterV2 from "@/components/FooterV2";
import ArrowDivider from "@/components/ArrowDivider";

const domain = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Draft2 = () => {
  return (
    <div className="min-h-screen serif-variant">
      <DraftBanner current="/draft2" note='Draft 2 — portfolio variation, italic serif type.' />

      <HeroV2 />

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

          <div className="max-w-md mx-auto">
            <a href="https://bit.ly/japossert_intro" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center justify-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover presence-link text-center space-y-4">
              <Play className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
              <p className="text-cosmic text-lg leading-relaxed">Intro Video</p>
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
      <FooterV2 />
    </div>
  );
};

export default Draft2;
