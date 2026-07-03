import HeroSection from "@/components/HeroSection";
import NowSection from "@/components/NowSection";
import VortexSection from "@/components/VortexSection";
import CreationsSection from "@/components/CreationsSection";
import MediaSection from "@/components/MediaSection";
import SocialSection from "@/components/SocialSection";
import LegacySection from "@/components/LegacySection";
import HiringSection from "@/components/HiringSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ArrowDivider from "@/components/ArrowDivider";

const Draft = () => {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 inset-x-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border/40 px-6 py-2 text-center">
        <p className="text-ethereal text-xs">
          Draft suggestion — proposes a new "Creations" section below "My Main Vortex".{" "}
          <a href="/" className="text-primary hover:text-primary/80 underline transition-colors">
            View the live page
          </a>
        </p>
      </div>
      <HeroSection />
      <ArrowDivider />
      <NowSection />
      <ArrowDivider />
      <VortexSection />
      <ArrowDivider />
      <CreationsSection />
      <ArrowDivider />
      <MediaSection />
      <ArrowDivider />
      <SocialSection />
      <ArrowDivider />
      <LegacySection />
      <ArrowDivider />
      <HiringSection />
      <ArrowDivider />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Draft;
