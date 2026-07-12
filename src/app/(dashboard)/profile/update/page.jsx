"use client";

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UpdateInfoPage() {
  
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Grab values
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    
    await authClient.updateUser({ name, image: photoURL, });
    router.push("/profile");
    
    setTimeout(() => setIsLoading(false), 1000); // Simulated loading
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7f9] p-4 font-sans">
      
      <div className="w-full max-w-[440px] bg-white rounded-2xl shadow-xl border border-gray-50 p-8 md:p-10">
        
        <div className="mx-auto w-14 h-14 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center mb-6 shadow-sm">
          <svg className="w-7 h-7 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2 tracking-tight">
            Update Your Info
          </h1>
          <p className="text-sm text-gray-500">
            Keep your library credentials current.
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={handleUpdate}>
          
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Eleanor Vance"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba5224] focus:border-transparent transition-all shadow-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-1.5">
              Photo URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <input
                type="url"
                name="photoURL"
                placeholder="https://example.com/avatar.jpg"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba5224] focus:border-transparent transition-all shadow-sm"
              />
            </div>
            <p className="mt-2 text-xs font-semibold text-gray-500">
              Provide a direct link to your new avatar image.
            </p>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full mt-2 bg-[#b95734] hover:bg-[#9a4729] active:scale-95 text-white font-bold py-3 rounded-lg text-sm transition-all duration-200 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center h-11"
          >
            {isLoading ? (
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              "Update Information"
            )}
          </button>
          
        </form>
      </div>
    </div>
  );
}