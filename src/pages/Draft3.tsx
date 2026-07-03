import HeroV2 from "@/components/HeroV2";
import NowSection from "@/components/NowSection";
import VortexSection from "@/components/VortexSection";
import CreationsSection from "@/components/CreationsSection";
import MediaSectionV2 from "@/components/MediaSectionV2";
import SocialSection from "@/components/SocialSection";
import LegacySection from "@/components/LegacySection";
import HiringSection from "@/components/HiringSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterV2 from "@/components/FooterV2";
import ArrowDivider from "@/components/ArrowDivider";
import DraftBanner from "@/components/DraftBanner";

const Draft3 = () => {
  return (
    <div className="min-h-screen serif-variant">
      <DraftBanner current="/draft3" note='Draft 3 — current structure + Creations, italic serif type.' />
      <HeroV2 name="Jakob" />
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
      <FooterV2 />
    </div>
  );
};

export default Draft3;
