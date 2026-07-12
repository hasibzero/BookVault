"use client";

import { useState } from "react";

export default function BorrowButton() {
  const [showToast, setShowToast] = useState(false);

  const handleBorrow = () => {
    setShowToast(true);
    
    // Automatically hide it after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <button 
        onClick={handleBorrow}
        className="cursor-pointer w-full sm:w-auto bg-[#c85a2f] hover:bg-[#b04a23] text-white px-6 py-3 rounded-md font-bold transition-all flex items-center justify-center shadow-sm active:scale-95"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Borrow This Book
      </button>

      {/* The DaisyUI Toast - It simply floats in the top right automatically */}
      {showToast && (
        <div className="toast toast-top toast-end z-[99999] mt-4 mr-4">
          <div className="alert alert-success text-white shadow-lg flex items-center gap-2 px-6 py-4 rounded-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-bold">Book borrowed successfully.</span>
          </div>
        </div>
      )}
    </>
  );
}