export default function CommunitySection() {
  return (
    <section className="w-full flex flex-col items-center">
      
      <div className="w-full bg-[#3b404d] py-24 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="font-serif text-5xl font-black text-[#a84724] tracking-tighter opacity-90">
            99
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white font-medium leading-snug tracking-wide">
            "A reader lives a thousand lives before he dies.<br className="hidden md:block" />
            The man who never reads lives only one."
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base italic font-medium mt-2">
            — George R.R. Martin
          </p>
        </div>
      </div>

      <div className="w-full bg-[#f6f8fb] py-20 px-6 flex justify-center">
        <div className="w-full max-w-3xl bg-gradient-to-br from-white via-white to-[#f0f3f6] border border-gray-100 rounded-2xl shadow-sm p-10 md:p-16 flex flex-col items-center text-center">
          
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join the Community
          </h3>
          
          <p className="text-gray-500 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
            Subscribe to our newsletter for curated reading lists, author interviews, and exclusive vault access.
          </p>
          
          <form 
            className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            // onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b404d] focus:border-transparent text-sm text-gray-800 placeholder-gray-400"
              required
            />
            <button 
              type="submit" 
              className="bg-[#0b0f17] hover:bg-[#1a202c] text-white px-8 py-3 rounded-md text-sm font-bold transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
          
        </div>
      </div>
      
    </section>
  );
}