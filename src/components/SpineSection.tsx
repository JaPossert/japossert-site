import { ExternalLink } from "lucide-react";

/**
 * SpineSection — one coherent illustration of how the ventures hold together.
 *
 * Spatial semantics (bottom → top, center → periphery):
 *   EvoBioSys        = the garden at the base, grounding everything
 *   idea2.life       = the generative engine, a stem rising out of the garden
 *   QuestHub         = a fan/cone widening outward toward other people's
 *                      gardens (dim, unlabeled shapes at the periphery)
 *   unfold-news.com  = the current bloom at the tip — glowing, pulsing focus
 *
 * Pure inline SVG (viewBox-based) with HTML labels absolutely positioned in
 * percentages of the same coordinate space, so everything scales together
 * from ~360px mobile width upward. No new dependencies.
 */
const SpineSection = () => {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center space-y-12">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            The <span className="aurora-text">Spine</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-cosmic text-lg leading-relaxed max-w-xl mx-auto">
            One living structure holds the work: a garden that grounds, an
            engine that raises new ventures from its soil, a widening reach
            toward other gardens — and one bloom opening right now.
          </p>
        </div>

        {/* Illustration: SVG shapes + overlaid HTML labels share the same
            400x500 coordinate space (percent positions = svg coords / 4, / 5). */}
        <div className="relative mx-auto w-full max-w-md sm:max-w-lg">
          <svg
            viewBox="0 0 400 500"
            className="block w-full h-auto"
            role="img"
            aria-labelledby="spine-title"
          >
            <title id="spine-title">
              Diagram: the EvoBioSys garden at the base, the idea2.life engine
              rising from it, the QuestHub fan reaching outward toward other
              gardens, and unfold-news.com blooming at the tip.
            </title>

            <defs>
              <linearGradient id="spine-stem" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
              <radialGradient id="spine-bloom-glow">
                <stop offset="0%" stopColor="hsl(var(--secondary) / 0.5)" />
                <stop offset="55%" stopColor="hsl(var(--secondary) / 0.14)" />
                <stop offset="100%" stopColor="hsl(var(--secondary) / 0)" />
              </radialGradient>
              <radialGradient id="spine-garden-glow">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.18)" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
              </radialGradient>
            </defs>

            {/* ---- QuestHub cone: widening from the engine out to the sides ---- */}
            <path
              d="M 200 330 L 28 178 Q 200 118 372 178 Z"
              fill="hsl(var(--primary) / 0.04)"
            />
            <path
              d="M 200 330 L 28 178"
              stroke="hsl(var(--primary) / 0.35)"
              strokeWidth="1"
              strokeDasharray="3 5"
              fill="none"
            />
            <path
              d="M 200 330 L 372 178"
              stroke="hsl(var(--primary) / 0.35)"
              strokeWidth="1"
              strokeDasharray="3 5"
              fill="none"
            />
            <path
              d="M 28 178 Q 200 118 372 178"
              stroke="hsl(var(--primary) / 0.22)"
              strokeWidth="1"
              strokeDasharray="2 6"
              fill="none"
            />

            {/* ---- Other people's gardens: dim hinted shapes at the periphery ---- */}
            <g opacity="0.6">
              {/* left neighbors */}
              <ellipse cx="38" cy="174" rx="24" ry="9" fill="hsl(var(--primary) / 0.10)" />
              <circle cx="30" cy="159" r="7" fill="hsl(var(--muted-foreground) / 0.14)" />
              <ellipse cx="22" cy="214" rx="14" ry="6" fill="hsl(var(--primary) / 0.07)" />
              {/* right neighbors */}
              <ellipse cx="362" cy="172" rx="26" ry="10" fill="hsl(var(--primary) / 0.10)" />
              <circle cx="371" cy="155" r="8" fill="hsl(var(--muted-foreground) / 0.14)" />
              <ellipse cx="380" cy="212" rx="15" ry="6" fill="hsl(var(--primary) / 0.07)" />
            </g>

            {/* ---- EvoBioSys garden: the grounded mound at the base ---- */}
            <ellipse cx="200" cy="438" rx="150" ry="42" fill="url(#spine-garden-glow)" />
            <line
              x1="30" y1="450" x2="370" y2="450"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M 55 450 Q 200 388 345 450"
              fill="hsl(var(--primary) / 0.08)"
              stroke="hsl(var(--primary) / 0.45)"
              strokeWidth="1.5"
            />
            {/* sprouts and seeds in the garden */}
            <g stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none">
              <path d="M 140 431 q -4 -14 -13 -18" />
              <path d="M 262 429 q 5 -13 14 -16" />
              <path d="M 168 419 q -2 -10 2 -17" />
              <path d="M 236 417 q 3 -10 -1 -17" />
            </g>
            <g fill="hsl(var(--primary) / 0.55)">
              <circle cx="120" cy="441" r="1.5" />
              <circle cx="196" cy="428" r="1.5" />
              <circle cx="288" cy="442" r="1.5" />
            </g>

            {/* ---- idea2.life engine: the stem rising out of the garden ---- */}
            <path
              d="M 200 416 C 196 366 204 306 200 254 C 198 228 200 208 200 194"
              stroke="url(#spine-stem)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            {/* engine rings — the mechanism that generates new ventures */}
            <circle cx="200" cy="342" r="8" fill="hsl(var(--background))" stroke="hsl(var(--primary) / 0.7)" strokeWidth="1.5" />
            <circle cx="200" cy="342" r="3" fill="hsl(var(--primary))" />
            <circle cx="200" cy="290" r="6" fill="hsl(var(--background))" stroke="hsl(var(--secondary) / 0.6)" strokeWidth="1.5" />
            <circle cx="200" cy="290" r="2" fill="hsl(var(--secondary))" />
            {/* small side leaves on the stem */}
            <g stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none">
              <path d="M 199 380 q -14 -4 -20 -14" />
              <path d="M 201 318 q 14 -4 19 -13" />
            </g>

            {/* ---- unfold-news.com: the current bloom — glowing and pulsing ---- */}
            <circle cx="200" cy="185" r="34" fill="url(#spine-bloom-glow)">
              <animate attributeName="r" values="30;42;30" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;1;0.7" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle
              cx="200" cy="185" r="17"
              fill="none"
              stroke="hsl(var(--secondary) / 0.35)"
              strokeWidth="1"
              strokeDasharray="2 4"
            >
              <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <g key={angle} transform={`rotate(${angle} 200 185)`}>
                <ellipse cx="200" cy="173" rx="4.5" ry="10" fill="hsl(var(--secondary) / 0.75)" />
              </g>
            ))}
            <circle cx="200" cy="185" r="5" fill="hsl(var(--secondary))" />
            <circle cx="198" cy="183" r="1.5" fill="hsl(var(--background) / 0.6)" />
          </svg>

          {/* ---- Labels: real links, positioned in the same coordinate space ---- */}

          {/* unfold-news.com — the current bloom, most prominent */}
          <a
            href="https://unfold-news.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute flex flex-col items-center presence-link"
            style={{ left: "50%", top: "19%", transform: "translate(-50%, -100%)" }}
          >
            <span className="flex items-center space-x-1.5">
              <span className="font-heading text-base sm:text-lg aurora-text whitespace-nowrap">
                unfold-news.com
              </span>
              <ExternalLink className="w-4 h-4 text-secondary opacity-60 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="text-ethereal text-[10px] sm:text-xs tracking-wide">
              current bloom
            </span>
          </a>

          {/* QuestHub — the fan reaching outward */}
          <a
            href="https://questhub.eco"
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute flex items-center space-x-1.5 presence-link"
            style={{ left: "26%", top: "46%", transform: "translate(-50%, -50%)" }}
          >
            <span className="font-heading text-sm sm:text-base text-primary whitespace-nowrap">
              QuestHub
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* whisper of the neighbors at the periphery */}
          <span
            className="absolute text-ethereal italic text-[9px] sm:text-[10px] whitespace-nowrap opacity-70"
            style={{ right: "1%", top: "43%" }}
          >
            other gardens
          </span>

          {/* idea2.life — the engine on the stem */}
          <a
            href="https://idea2.life"
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute flex items-center space-x-1.5 presence-link"
            style={{ left: "56%", top: "68.5%", transform: "translate(0, -50%)" }}
          >
            <span className="font-heading text-sm sm:text-base text-primary whitespace-nowrap">
              idea2.life
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* EvoBioSys — the garden at the base */}
          <a
            href="https://evobiosys.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute flex items-center space-x-1.5 presence-link"
            style={{ left: "50%", top: "94.5%", transform: "translate(-50%, -50%)" }}
          >
            <span className="font-heading text-sm sm:text-base text-primary whitespace-nowrap">
              EvoBioSys
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <p className="text-ethereal text-sm leading-relaxed max-w-md mx-auto">
          Read from the ground up: EvoBioSys roots the work, idea2.life grows
          new ventures from it, QuestHub opens the circle toward other gardens
          — and unfold-news.com blooms as the living test case.
        </p>
      </div>
    </section>
  );
};

export default SpineSection;
