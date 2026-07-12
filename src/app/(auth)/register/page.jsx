"use client";
import Link from 'next/link';
import { authClient } from '../../../lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function RegisterPage() {
const router = useRouter();
const [emailError, setEmailError] = useState("");
 const handleSubmit = async(e) => {
    e.preventDefault();
    setEmailError("");
    

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profilePhoto = e.target.profilePhotoUrl.value;

    const { data, error } = await authClient.signUp.email({
        email, // user email address
        password, // user password -> min 8 characters by default
        name, // user display name
        profilePhoto, // User image URL (optional)
        callbackURL:"/login"// A URL to redirect to after the user verifies their email (optional)
    });
    
    
    console.log(data, error);
    if (!error) {
      router.push('/login');
    }
    if (error) {
      if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
        setEmailError(error.message); // This will set it to "User already exists..."
      } else {
        // Handle other general errors
      }
    }
  }

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
    console.log(data, error);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7f9] p-4 font-sans">
      
      {/* Card Container */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-xl p-8 md:p-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Create Your Account
          </h1>
          <p className="text-sm text-gray-500">
            Join BookVault to curate your personal library.
          </p>
        </div>

        {/* Registration Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* User Icon */}
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Jane Austen"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4320] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Email Address Input */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Envelope Icon */}
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                placeholder="jane@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4320] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>
          {emailError && (
            <p className="mt-1.5 text-xs font-semibold text-red-500">
              {emailError}
            </p>
          )}

          {/* Profile Photo URL Input */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">
              Profile Photo URL (Optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Image Icon */}
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <input
                type="url"
                name="profilePhotoUrl"
                placeholder="https://example.com/photo.jpg"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9d4320] focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Lock Icon */}
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 tracking-widest focus:outline-none focus:ring-2 focus:ring-[#9d4320] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Register Button */}
          <button 
            type="submit" 
            className="w-full mt-2 bg-[#9d4320] hover:bg-[#833618] text-white font-bold py-3 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            Register
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 px-4 text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Google Social Login */}
        <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-3 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm" onClick={handleGoogleSignIn}>
          {/* Google G Logo SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </button>

        {/* Footer Login Link */}
        <p className="text-center text-sm text-gray-600 mt-8 font-medium">
          Already have an account?{' '}
          <Link href="/login" className="text-[#9d4320] hover:underline font-bold transition-all">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}