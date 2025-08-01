import HeroSection from "@/components/HeroSection";
import NowSection from "@/components/NowSection";
import VortexSection from "@/components/VortexSection";
import MediaSection from "@/components/MediaSection";
import SocialSection from "@/components/SocialSection";
import LegacySection from "@/components/LegacySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NowSection />
      <VortexSection />
      <MediaSection />
      <SocialSection />
      <LegacySection />
      <Footer />
    </div>
  );
};

export default Index;
