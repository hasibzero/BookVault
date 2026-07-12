"use client";

import { Button, toast } from "@heroui/react";

export default function BorrowButton({ availableQuantity }) {
  
  const handleBorrow = () => {
    toast("Success", {
      description: "You have successfully borrowed this book.",
      color: "success",
      variant: "flat",
      actionProps: {
        children: "Dismiss",
        onPress: () => toast.clear(),
        variant: "light",
      },
    });
  };

  return (
    <div className="flex w-full sm:w-auto items-center justify-center">
      <Button 
        onPress={handleBorrow}
        className="w-full sm:w-auto bg-[#c85a2f] hover:bg-[#b04a23] text-white px-6 py-6 rounded-md font-bold shadow-sm"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Borrow This Book
      </Button>
    </div>
  );
}