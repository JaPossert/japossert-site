import { ArrowDown } from "lucide-react";

const OfferBanner = () => {
  return (
    <a
      href="#offers"
      className="group sticky top-0 z-50 flex items-center justify-center gap-2 px-4 py-2.5 text-center text-xs md:text-sm font-body bg-card/80 backdrop-blur-md border-b border-primary/30 text-cosmic hover:bg-card/95 transition-colors"
    >
      <span>
        Open for freelance work: prototype coding &amp; architecture, <span className="text-primary font-medium">&euro;250 / hour</span>
      </span>
      <ArrowDown className="w-3.5 h-3.5 text-primary opacity-70 group-hover:translate-y-0.5 transition-transform" />
    </a>
  );
};

export default OfferBanner;
