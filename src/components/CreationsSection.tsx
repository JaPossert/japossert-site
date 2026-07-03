import { ExternalLink } from "lucide-react";

const creations = [{
  name: "unfold the news",
  url: "https://unfold-news.com",
  description: "News, unfolded — one story, many perspectives; events, threads & blindspot awareness across outlets."
}, {
  name: "Unlocking Housing",
  url: "https://idea2.site/unlocking-housing/",
  description: "Making Austria's vacant homes visible — an interactive map of dormant potential."
}, {
  name: "QuestHub",
  url: "https://questhub.eco",
  description: "A garden of small quests — Purpose Pilot, the Affirmation Engine, and more taking root."
}, {
  name: "idea2.life",
  url: "https://idea2.life",
  description: "Realizing visions — the portal where new ventures germinate."
}];

const writings = [{
  name: "Stages of Affluence & Impact",
  url: "https://evobiosys.org/publications/stages-of-affluence/",
  description: "Six stages of personal affluence — and what more money changes at each one, and for whom."
}, {
  name: "The Metabookshelf",
  url: "https://evobiosys.org/publications/metabookshelf/",
  description: "Publishing generator functions instead of fixed lists — the structure that grows the right bookshelf for each context."
}];

const pitches = [{
  name: "Kidur",
  url: "https://evobiosys.org/pitch/kidur/"
}, {
  name: "LogSilk",
  url: "https://evobiosys.org/pitch/logsilk/"
}, {
  name: "EvoPaideia",
  url: "https://evobiosys.org/pitch/evopaideia/"
}, {
  name: "SoFin",
  url: "https://evobiosys.org/pitch/sofin/"
}];

const CreationsSection = () => {
  return <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Creations</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-cosmic text-lg leading-relaxed max-w-xl mx-auto">
            What has recently taken form through this work — living pieces you can visit today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {creations.map(item => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover presence-link text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <h3 className="font-heading text-xl md:text-2xl text-primary">{item.name}</h3>
                <ExternalLink className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-ethereal text-sm leading-relaxed">{item.description}</p>
            </a>)}
        </div>

        <div className="space-y-6">
          <h3 className="font-heading text-2xl md:text-3xl font-light">
            <span className="aurora-text">Living Writings</span>
          </h3>
          <div className="w-8 h-px bg-primary mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {writings.map(item => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="group block p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 glow-hover presence-link text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <h3 className="font-heading text-lg md:text-xl text-primary">{item.name}</h3>
                  <ExternalLink className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-ethereal text-sm leading-relaxed">{item.description}</p>
              </a>)}
          </div>
        </div>

        <p className="text-ethereal text-sm">
          Venture pitches:{" "}
          {pitches.map((p, i) => <span key={p.name}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">{p.name}</a>
              {i < pitches.length - 1 && <span className="opacity-50"> · </span>}
            </span>)}
        </p>
      </div>
    </section>;
};
export default CreationsSection;
