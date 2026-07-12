"use client"
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

const ProfilePage = () => {
  const userData = authClient.useSession();
     const user = userData?.data?.user;
     if (!user) {
      redirect('/login')
     }
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 font-sans">
      
      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-10 max-w-2xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12 transition-all">
        
        {/* Avatar Section */}
        <div className="relative shrink-0">
          
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border border-gray-100 shadow-sm">
            <Image src={user?.image} width={160} height={160} alt='user?.name'></Image>
          </div>
          
          <div className="absolute bottom-1 right-2 bg-[#ea580c] text-white rounded-full p-1 border-[3px] border-white shadow-sm flex items-center justify-center">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* User Details Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          
          {/* Name */}
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3 tracking-tight">
            {user?.name}
          </h1>
          
          {/* Email Pill */}
          <div className="inline-flex items-center gap-2 bg-[#f1f5f9] text-gray-600 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {user?.email}
          </div>

          

          {/* Action Button */}
          <button className="inline-flex items-center gap-2.5 bg-[#0f172a] hover:bg-[#1e293b] active:scale-95 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <Link href={'/profile/update'}>
            Update Information</Link>
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProfilePage