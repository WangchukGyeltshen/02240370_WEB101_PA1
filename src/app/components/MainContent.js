import HeroSection from "./HeroSection";
import FeatureCards from "./FeatureCards";

const MainContent = () => {
  return (
    <div className="flex-1 p-6">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Cards */}
      <FeatureCards />
    </div>
  );
};

export default MainContent;
