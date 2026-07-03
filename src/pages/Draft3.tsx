import HeroSection from "@/components/HeroSection";
import NowSection from "@/components/NowSection";
import VortexSection from "@/components/VortexSection";
import CreationsSection from "@/components/CreationsSection";
import MediaSectionV2 from "@/components/MediaSectionV2";
import SocialSection from "@/components/SocialSection";
import LegacySection from "@/components/LegacySection";
import HiringSection from "@/components/HiringSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import ArrowDivider from "@/components/ArrowDivider";
import DraftBanner from "@/components/DraftBanner";

const Draft3 = () => {
  return (
    <div className="min-h-screen serif-variant">
      <DraftBanner current="/draft3" note='Draft 3 — current structure + Creations, italic serif type.' />
      <HeroSection />
      <ArrowDivider />
      <NowSection />
      <ArrowDivider />
      <VortexSection />
      <ArrowDivider />
      <CreationsSection />
      <ArrowDivider />
      <MediaSectionV2 />
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

export default Draft3;
