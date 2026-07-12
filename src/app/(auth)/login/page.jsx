"use client";

import { useState } from 'react';
import Link from 'next/link';
import { authClient } from '../../../lib/auth-client';

export default function LoginPage() {
    const handleSubmit = async(e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn({
        email, // user email address
        password, // user password -> min 8 characters by default
        callbackURL: "" // A URL to redirect to after the user verifies their email (optional)
    });
  }
  // States for UI functionality
  const [showPassword, setShowPassword] = useState(false);
  
  // Set this to false to hide the error banner in your actual app
  const [hasError, setHasError] = useState(true); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7f9] p-4 font-sans">
      
      {/* Error Banner (Visible when hasError is true) */}
      {/* {hasError && (
        <div className="w-full max-w-[440px] bg-[#fef2f2] border border-[#fca5a5] rounded-xl p-4 mb-6 flex items-start gap-3 shadow-sm">
          <svg className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-sm font-bold text-[#991b1b]">Authentication Failed</h3>
            <p className="text-sm text-[#b91c1c] mt-1">
              The email or password you entered is incorrect. Please try again.
            </p>
          </div>
        </div>
      )} */}

      {/* Login Card Container */}
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-xl p-8 md:p-10">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500">
            Enter your details to access your library.
          </p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          
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
                placeholder="reader@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba5224] focus:border-transparent transition-all"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-bold text-gray-800">
                Password
              </label>
              <Link href="/forgot-password" className="text-xs font-semibold text-[#ba5224] hover:underline">
                Forgot password?
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* Lock Icon */}
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-[#f8fafc] border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 tracking-widest focus:outline-none focus:ring-2 focus:ring-[#ba5224] focus:border-transparent transition-all"
                required
              />
              
              {/* Toggle Password Visibility Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  // Eye Slash Icon (Hide)
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  // Eye Icon (Show)
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className="w-full mt-2 bg-[#ba5224] hover:bg-[#9d4320] text-white font-bold py-3 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            Login
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-7">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="flex-shrink-0 px-4 text-[11px] font-bold text-gray-400 tracking-wider uppercase">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Google Social Login */}
        <button className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-3 rounded-lg text-sm transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm">
          {/* Google G Logo SVG */}
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>

        {/* Footer Register Link */}
        <p className="text-center text-sm text-gray-500 mt-8 font-medium">
          Don't have an account?{' '}
          <Link href="/register" className="text-gray-900 hover:underline font-bold transition-all">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}