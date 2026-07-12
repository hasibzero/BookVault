"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assests/bookvault_logo.png"; 
import { usePathname } from 'next/navigation';


export default function Navbar() {

  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Books', href: '/books' },
    { name: 'My Profile', href: '/profile' },
  ];
  
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#1b2028] text-white shadow-sm">
      
      {/* Left Section: Logo & Brand Name */}
      <div className="flex items-center gap-3">
        {/* Logo Placeholder - Replace src with your actual logo asset */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
          {/* Using a placeholder SVG/Text for the logo circle */}
          <span className="text-slate-800 text-[10px] font-extrabold leading-tight text-center">
            <Image alt='logo' src={logo} width={100} height={100}></Image>
            
          </span>
        </div>
        <Link href="/">
          <span className="text-2xl font-bold font-serif tracking-wide">
            BookVault
          </span>
        </Link>
      </div>

{/* Middle Section: Dynamic Navigation Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors ${
                isActive 
                  ? "text-white relative pb-1 font-bold" 
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
              
              {/* Only render the orange underline if the link is active */}
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#b95734]"></span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Section: User Profile & Actions */}
      <div className="flex items-center gap-5">
        <span className="text-gray-300 text-sm font-medium">
          Hi, Alex
        </span>
        <button className="bg-[#b95734] hover:bg-[#9a4729] text-white text-sm font-bold py-2 px-5 rounded-md transition-colors">
          Logout
        </button>
      </div>
      
    </nav>
  );
}