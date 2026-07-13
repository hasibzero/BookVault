"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from "@/assests/bookvault_logo.png";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
    setMenuOpen(false);
  };

  const userData = authClient.useSession();
  const user = userData?.data?.user;
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/books" },
    { name: "My Profile", href: "/profile" },
  ];

  return (
    <div className="sticky top-0 z-50" ref={dropdownRef}>
      <nav className="w-full flex items-center justify-between px-4 sm:px-6 py-3 bg-[#1b2028] text-white shadow-md">

        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <Image alt="logo" src={logo} width={36} height={36} />
          </div>
          <span className="text-xl sm:text-2xl font-bold font-serif tracking-wide">
            BookVault
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative pb-1 transition-colors ${
                  isActive
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#b95734] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <Link
              href="/login"
              className="bg-[#b95734] hover:bg-[#9a4729] text-white text-sm font-bold py-2 px-5 rounded-md transition-colors"
            >
              Login / Register
            </Link>
          ) : (
            <>
              <span className="text-gray-300 text-sm font-medium">
                Hi,{" "}
                <strong className="text-white font-semibold tracking-wide">
                  {user?.name}
                </strong>
              </span>
              {user.image ? (
                <Image
                  src={user.image}
                  width={38}
                  height={38}
                  alt="Profile"
                  className="rounded-full object-cover flex-shrink-0"
                />
              ) : (
                <div className="w-[38px] h-[38px] rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
              <div className="h-7 w-px bg-gray-700 rounded-full" />
              <button
                onClick={handleLogout}
                className="bg-[#b95734] hover:bg-[#9a4729] active:scale-95 text-white text-sm font-bold py-2 px-5 rounded-lg transition-all duration-200 shadow-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-white/10 transition-colors focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-white rounded transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`md:hidden bg-[#1b2028] border-t border-gray-700 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {user && (
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-700/60">
            {user.image ? (
              <Image
                src={user.image}
                width={38}
                height={38}
                alt="Profile"
                className="rounded-full object-cover flex-shrink-0"
              />
            ) : (
              <div className="w-[38px] h-[38px] rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-white font-semibold text-sm truncate">{user?.name}</p>
              <p className="text-gray-400 text-xs truncate">{user?.email}</p>
            </div>
          </div>
        )}

        <nav className="flex flex-col px-3 py-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#b95734]/20 text-white font-bold border-l-2 border-[#b95734]"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 pb-4 pt-2 border-t border-gray-700/60">
          {!user ? (
            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#b95734] hover:bg-[#9a4729] text-white text-sm font-bold py-3 rounded-lg transition-colors"
            >
              Login / Register
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full bg-[#b95734] hover:bg-[#9a4729] active:scale-95 text-white text-sm font-bold py-3 rounded-lg transition-all duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}