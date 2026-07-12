import Link from 'next/link';
import logo from "@/assests/bookvault_logo.png"; 
import Image from 'next/image';

export default function Footer() {
  // Optional: Use new Date().getFullYear() instead of hardcoding 2024
  const currentYear = 2026; 

  return (
    <footer className="w-full bg-[#0a0d14] py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        <div className="flex flex-col gap-2">
          <Link href="/">
            <span className="text-2xl font-bold font-serif text-white tracking-wide">
              <Image alt='logo' src={logo} width={100} height={100}></Image>
            </span>
          </Link>
          <p className="text-xs text-gray-500 font-medium">
            © {currentYear} BookVault. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#bba99a]">
          <Link 
            href="/contact" 
            className="hover:text-white transition-colors"
          >
            Contact Us
          </Link>
          <Link 
            href="/privacy" 
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms" 
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </nav>
        
      </div>
    </footer>
  );
}