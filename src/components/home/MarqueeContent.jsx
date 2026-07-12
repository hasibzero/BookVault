import Marquee from "react-fast-marquee";

const announcements = [
  "New Arrivals: The Silent Forest",
  "Special Discount On Memberships",
  "Join Our Upcoming Author Q&A",
  "Curated Summer Reading Lists Available"
];

export default function MarqueeContent() {
  return (
    <Marquee 
      className="bg-[#050810] py-4 overflow-hidden" 
      autoFill={true}
      speed={40}
    >
      {announcements.map((text, index) => (
        <div key={index} className="flex items-center mr-12 md:mr-16">
          <div className="w-1.5 h-1.5 rounded-full bg-[#a84724] mr-4"></div>
          <span className="text-white text-xs md:text-sm tracking-[0.15em] uppercase font-medium">
            {text}
          </span>
        </div>
      ))}
    </Marquee>
  );
}