import Link from 'next/link';
import Image from 'next/image';
import logo from "@/assests/bookvault_logo.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#060a11] py-14 px-6 md:px-12 font-sans border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-4">
        
        <div className="flex flex-col space-y-5 md:max-w-[250px]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm">
               <Image
               src={logo} width={150} height={150} alt='logo'></Image>
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-wide">
              BookVault
            </span>
          </div>
          <p className="text-[13px] text-gray-500 font-medium">
            © 2026 BookVault. All rights reserved.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-[#b95734] text-xs font-bold tracking-widest uppercase">
            Links
          </h4>
          <ul className="flex flex-col space-y-3.5 text-[13px] text-gray-400 font-semibold">
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-[#b95734] text-xs font-bold tracking-widest uppercase">
            Contact Us
          </h4>
          <ul className="flex flex-col space-y-3.5 text-[13px] text-gray-400 font-semibold">
            {/* Email */}
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:support@bookvault.com" className="hover:text-white transition-colors duration-200">
                support@bookvault.com
              </a>
            </li>
            {/* Phone */}
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+15551234567" className="hover:text-white transition-colors duration-200">
                +1 (555) 123-4567
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div className="flex flex-col space-y-5">
          <h4 className="text-[#b95734] text-xs font-bold tracking-widest uppercase">
            Follow Us
          </h4>
          <div className="flex items-center gap-3">
            
            {/* Face/Avatar Icon */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#b95734] hover:border-[#b95734] transition-all duration-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
            
            {/* Book Icon */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#b95734] hover:border-[#b95734] transition-all duration-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </a>

            {/* Share Network Icon */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#b95734] hover:border-[#b95734] transition-all duration-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </a>

            {/* Camera/Instagram Icon */}
            <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#b95734] hover:border-[#b95734] transition-all duration-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
}