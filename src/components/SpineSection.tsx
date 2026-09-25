import { ExternalLink } from "lucide-react";

/**
 * SpineSection — one coherent illustration of how the ventures hold together.
 *
 * Spatial semantics (bottom → top, center → periphery):
 *   TrustWeb   = the garden at the base, grounding everything, growing
 *                right now
 *   QuestHub   = the point on the stem from which the reach fans out
 *                toward other people's gardens (dim, unlabeled shapes at
 *                the periphery) — where the spreading happens
 *   EvoBioSys  = the quiet root at the tip, no bloom, no glow — the
 *                organization everything traces back to
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
            One living structure holds the work: EvoBioSys roots it, QuestHub
            is where it fans out toward other gardens, and TrustWeb grows
            from that same soil right now.
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
              Diagram: EvoBioSys as the quiet root at the tip, QuestHub as the
              point on the stem where the reach fans out toward other
              gardens, and TrustWeb growing from the garden at the base.
            </title>

            <defs>
              <linearGradient id="spine-stem" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" />
              </linearGradient>
              <radialGradient id="spine-garden-glow">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.18)" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0)" />
              </radialGradient>
            </defs>

            {/* ---- QuestHub cone: widening from the spreading point out to the sides ---- */}
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

            {/* ---- TrustWeb garden: the grounded mound at the base ---- */}
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

            {/* ---- stem: rises from the TrustWeb garden, through QuestHub, up to EvoBioSys ---- */}
            <path
              d="M 200 416 C 196 380 200 356 200 336"
              stroke="url(#spine-stem)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 200 324 C 198 270 202 200 200 160"
              stroke="url(#spine-stem)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
            {/* small side leaves on the stem */}
            <g stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none">
              <path d="M 199 394 q -14 -4 -20 -14" />
              <path d="M 201 260 q 14 -4 19 -13" />
            </g>

            {/* ---- QuestHub: the point on the stem from which the reach fans out ---- */}
            <circle cx="200" cy="330" r="9" fill="hsl(var(--background))" stroke="hsl(var(--primary) / 0.75)" strokeWidth="1.5" />
            <circle cx="200" cy="330" r="3.5" fill="hsl(var(--primary))" />

            {/* ---- EvoBioSys: the quiet root at the tip, no bloom ---- */}
            <circle cx="200" cy="150" r="4" fill="hsl(var(--muted-foreground) / 0.7)" />
          </svg>

          {/* ---- Labels: real links, positioned in the same coordinate space ---- */}

          {/* EvoBioSys — the quiet root at the tip, no bloom */}
          <a
            href="https://evobiosys.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute flex items-center space-x-1.5 presence-link"
            style={{ left: "50%", top: "26%", transform: "translate(-50%, -100%)" }}
          >
            <span className="font-heading text-sm sm:text-base text-primary whitespace-nowrap">
              EvoBioSys
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>

          {/* QuestHub — the point the reach fans out from */}
          <a
            href="https://questhub.eco"
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute flex items-center space-x-1.5 presence-link"
            style={{ left: "50%", top: "70%", transform: "translate(-50%, 0)" }}
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

          {/* TrustWeb — the garden at the base, growing right now */}
          <a
            href="https://idea2.site/trustweb/"
            target="_blank"
            rel="noopener noreferrer"
            className="group absolute flex items-center space-x-1.5 presence-link"
            style={{ left: "50%", top: "94.5%", transform: "translate(-50%, -50%)" }}
          >
            <span className="font-heading text-lg sm:text-xl aurora-text whitespace-nowrap">
              TrustWeb
            </span>
            <ExternalLink className="w-4 h-4 text-secondary opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <p className="text-ethereal text-sm leading-relaxed max-w-md mx-auto">
          Read from the top down: EvoBioSys is the quiet root, QuestHub is
          where it opens the circle toward other gardens - and TrustWeb grows
          from that same soil as the living test case, right now.
        </p>

        <p className="text-ethereal text-sm leading-relaxed max-w-md mx-auto">
          Beneath it all: architecture prototypes that are{" "}
          <a
            href="https://github.com/evobiosys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline transition-colors"
          >
            local-first, end-to-end-encrypted, federated
          </a>.
        </p>
      </div>
    </section>
  );
};

export default SpineSection;
