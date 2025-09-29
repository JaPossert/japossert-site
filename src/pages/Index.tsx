import HeroSection from "@/components/HeroSection";
import NowSection from "@/components/NowSection";
import VortexSection from "@/components/VortexSection";
import MediaSection from "@/components/MediaSection";
import SocialSection from "@/components/SocialSection";
import LegacySection from "@/components/LegacySection";
import HiringSection from "@/components/HiringSection";
import Footer from "@/components/Footer";
import ArrowDivider from "@/components/ArrowDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ArrowDivider />
      <NowSection />
      <ArrowDivider />
      <VortexSection />
      <ArrowDivider />
      <MediaSection />
      <ArrowDivider />
      <SocialSection />
      <ArrowDivider />
      <LegacySection />
      <ArrowDivider />
      <HiringSection />
      <Footer />
    </div>
  );
};

export default Index;
