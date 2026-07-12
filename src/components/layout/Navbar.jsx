"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assests/bookvault_logo.png"; 
import { usePathname, useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export default function Navbar() {
  const router = useRouter();
  const handleLogout = async () => {
    const { data, error } =await authClient.signOut({
    fetchOptions: {
    onSuccess: () => {
      router.push("/login"); // redirect to login page
    },
  },
});
  }
   const userData = authClient.useSession();
   const user = userData?.data?.user;
   console.log(user);
  const pathname = usePathname();
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Books', href: '/books/' },
    { name: 'My Profile', href: '/profile' },
  ];
  
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-[#1b2028] text-white shadow-sm">
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden">
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
              
              {isActive && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#b95734]"></span>
              )}
            </Link>
          );
        })}
      </div>

      {!user && 
        <div>
        <button className="bg-[#b95734] hover:bg-[#9a4729] text-white text-sm font-bold py-2 px-5 rounded-md transition-colors">
          
          <a href="/login">Login/Register</a>
        </button>
      </div>}
      {user && 
    <div className="flex items-center gap-3">
    <span className="text-gray-300 text-sm font-medium">
      Hi, <strong className="text-white font-semibold tracking-wide">{user?.name}</strong>
    </span>
    
    
  {user.image ? (
  <Image
    src={user.image}
    width={42}
    height={42}
    alt="Profile"
    className="rounded-full object-cover"
  />
) : (
  <div className="w-[42px] h-[42px] rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm">
    {user?.name?.charAt(0)?.toUpperCase() || "U"}
  </div>
)}
    
  

  <div className="hidden sm:block h-8 w-px bg-gray-700 rounded-full"></div>

  <button 
    onClick={handleLogout} 
    className="bg-[#b95734] hover:bg-[#9a4729] active:scale-95 text-white text-sm font-bold py-2 px-5 rounded-lg transition-all duration-200 shadow-sm"
  >
    Logout
  </button>
  
</div>
}
      
    </nav>
  );
}