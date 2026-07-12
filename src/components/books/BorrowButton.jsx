"use client";

import React from "react";
import { toast } from "@heroui/react";

export default function BorrowButton({ book }) {
  const handleBorrow = () => {
    toast.success(`"${book.title}" has been added to your borrow list!`, {
      description: "You can manage your borrowed books in your profile.",
    });
  };

  return (
    <button
      onClick={handleBorrow}
      className="w-full sm:w-auto bg-[#c85a2f] hover:bg-[#b04a23] cursor-pointer text-white px-6 py-3 rounded-md font-bold transition-colors flex items-center justify-center"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Borrow This Book
    </button>
  );
}
