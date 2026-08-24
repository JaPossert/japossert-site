import HeroV2 from "@/components/HeroV2";
import SpineSection from "@/components/SpineSection";
import CreationsSection from "@/components/CreationsSection";
import OffersSection from "@/components/OffersSection";
import MediaSectionV2 from "@/components/MediaSectionV2";
import SocialSection from "@/components/SocialSection";
import LegacySection from "@/components/LegacySection";
// HiringSection hidden 2026-08-02 — component kept for easy restore
import NewsletterSection from "@/components/NewsletterSection";
import FooterV2 from "@/components/FooterV2";
import ArrowDivider from "@/components/ArrowDivider";
import OfferBanner from "@/components/OfferBanner";

const Index = () => {
  return (
    <div className="min-h-screen serif-variant">
      <OfferBanner />
      <HeroV2 name="Jakob" />
      <ArrowDivider />
      <SpineSection />
      <ArrowDivider />
      <CreationsSection />
      <ArrowDivider />
      <OffersSection />
      <ArrowDivider />
      <MediaSectionV2 />
      <ArrowDivider />
      <SocialSection />
      <ArrowDivider />
      <LegacySection />
      <ArrowDivider />
      {/* <HiringSection /> hidden 2026-08-02 */}
      <NewsletterSection />
      <FooterV2 />
    </div>
  );
};

export default Index;
