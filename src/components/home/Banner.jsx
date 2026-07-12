import Image from 'next/image';
import Link from 'next/link';
import containerImg from "@/assests/Container.png";

export default function Banner() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-[#fcf9f8] to-[#f4f7fa] px-6 py-16 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start gap-6 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-[#0f172a] leading-[1.1]">
            Find Your Next <br />
            <span className="text-[#a84724] italic">Great Read</span>
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
            Explore our curated collection of timeless classics and modern masterpieces. Your personal library awaits.
          </p>
          
          <Link 
            href="/books"
            className="inline-flex items-center justify-center gap-2 bg-[#a84724] hover:bg-[#8b3a1d] text-white font-bold py-3.5 px-8 rounded-full transition-colors duration-200 mt-2 shadow-sm"
          >
            Browse Now
            {/* SVG Right Arrow */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Right Column: Image Container (container.png) */}
        <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center">
          <Image
            src={containerImg}
            alt="Curated book collection"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
        
      </div>
    </section>
  );
}