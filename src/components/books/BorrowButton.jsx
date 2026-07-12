"use client";

import { Button, toast } from "@heroui/react";

export default function BorrowButton({ availableQuantity }) {
  
  const handleBorrow = () => {
    toast("Success", {
      description: "You have successfully borrowed this book.",
      color: "success",
      variant: "flat", // "flat", "solid", or "default"
      
      actionProps: {
        children: "Dismiss",
        onPress: () => toast.clear(),
        variant: "light", 
      },
      
      indicator: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    });
  };

  return (
    <div className="flex w-full sm:w-auto items-center justify-center">
      <Button 
        onPress={handleBorrow}
        className="w-full sm:w-auto bg-[#c85a2f] hover:bg-[#b04a23] text-white px-6 py-6 rounded-md font-bold transition-all flex items-center justify-center shadow-sm active:scale-95"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Borrow This Book
      </Button>
    </div>
  );
}