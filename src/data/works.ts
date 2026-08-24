export type Work = {
  name: string;
  url: string;
  field: string;
  description: string;
};

export const creations: Work[] = [{
  name: "Unfold News",
  url: "https://unfold-news.com",
  field: "Media",
  description: "Open-source news bias aggregator."
}, {
  name: "Unlocking Housing",
  url: "https://idea2.site/unlocking-housing/",
  field: "Civic Data",
  description: "An interactive map making Austria's vacant homes visible - dormant potential, surfaced."
}];

export const writings: Work[] = [{
  name: "Stages of Affluence & Impact",
  url: "https://evobiosys.org/publications/stages-of-affluence/",
  field: "Living Writing",
  description: "Six stages of personal affluence - and what more money changes at each one, and for whom."
}, {
  name: "The Meta-Function",
  url: "https://evobiosys.org/publications/metabookshelf/",
  field: "Living Writing",
  description: "Publishing the generator, not the list - the structure that grows the right bookshelf for each context."
}];

export type Shipped = {
  name: string;
  url: string;
  githubUrl?: string;
  description: string;
};

export const shipped: Shipped[] = [{
  name: "Semantic Web",
  url: "https://idea2.site/semantic-core/",
  githubUrl: "https://github.com/Evobiosys/semantic-web",
  description: "Conflict-preserving claim graph - 366 nodes, three D3 views, no reasoner picks a winner. 190 tests."
}, {
  name: "unfold-proposals",
  url: "https://idea2.site/draft-proposals/",
  githubUrl: "https://github.com/Evobiosys/unfold-proposals",
  description: "Browser-only funding-proposal dissector: pdfjs extraction, claims table, number-drift audit, zero API calls. 128 tests."
}, {
  name: "Europe of the Regions",
  url: "https://meta-democracy.org/regions/",
  description: "MapLibre GL map of 191 European regions dissolved from Eurostat NUTS by a Python pipeline. 69 tests."
}, {
  name: "QuestHub",
  url: "https://questhub.eco",
  githubUrl: "https://github.com/Evobiosys/questhub.eco",
  description: "Event-sourced Rust server behind Caddy on a self-run VPS. 96 public quests."
}, {
  name: "Political Model",
  url: "https://idea2.site/spectrum",
  description: "Single-file 187 KB offline tool: 1D-9D political stance stepper, SVG export, share links. No CDN, no build step."
}, {
  name: "Game Theory Lab",
  url: "https://idea2.site/gametheory-lab/",
  description: "Nash equilibrium and iterated-prisoner's-dilemma sandbox extended into a nested-holon power-pole model."
}, {
  name: "nanoX",
  url: "https://github.com/JaPossert/nanox",
  githubUrl: "https://github.com/JaPossert/nanox",
  description: "One terminal command, one scratch buffer, routed into a Logseq-style vault. Zsh + Python + Hammerspoon. MIT."
}, {
  name: "Ideal Groceries",
  url: "https://evobiosys.org/food/ideal-groceries/",
  description: "13-criterion weighted re-ranker over staples and offers with a basket break-even engine. 59 tests."
}];

export const pitches = [{
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
