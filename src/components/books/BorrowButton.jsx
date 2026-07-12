"use client";

import { addToast } from "@heroui/toast";

export default function BorrowButton() {
  const handleBorrow = () => {
    addToast({
      title: "Success",
      description: "You have successfully borrowed this book!",
      color: "success",
      variant: "flat",
    });
  };

  return (
    <button 
      onClick={handleBorrow} 
      className="cursor-pointer w-full sm:w-auto bg-[#c85a2f] hover:bg-[#b04a23] text-white px-6 py-3 rounded-md font-bold transition-all flex items-center justify-center active:scale-95 shadow-sm"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Borrow This Book
    </button>
  );
}