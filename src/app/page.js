import Banner from "@/components/home/Banner";
import CommunitySection from "@/components/home/CommunitySection";
import FeaturedBooks from "@/components/home/FeaturedBooks";
import MarqueeContent from "@/components/home/MarqueeContent";

export default function Home() {
  return (
    <div>
      <Banner/>
      <MarqueeContent/>
      <FeaturedBooks/>
      <CommunitySection/>
    </div>
  );
}
