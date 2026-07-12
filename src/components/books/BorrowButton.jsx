"use client";

import { toast } from "@heroui/react";
import { addToast } from "@heroui/toast";

export default function BorrowButton({ availableQuantity }) {
  

  return (
     <div className="flex h-full max-w-xl flex-col items-center justify-center">
      <div className="flex w-full flex-wrap items-center justify-center gap-4">
        
        <Button size="sm" variant="secondary" onPress={() => toast.success("Successfully Added to Borrow")}>
          Borrow This Book
        </Button>
        
        
      </div>
    </div>
  );
}