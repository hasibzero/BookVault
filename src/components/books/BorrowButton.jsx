"use client";

import {Button, toast} from "@heroui/react";

export function BorrowButton() {
  return (
    <div className="flex h-full max-w-xl flex-col items-center justify-center">
      <Button
        size="sm"
        variant="secondary"
        onPress={() => {
          toast("Successfully added to borrow", {
            actionProps: {
              children: "Dismiss",
              onPress: () => toast.clear(),
              variant: "tertiary",
            },
            description: "Bob sent you an invitation to join HeroUI team",
            
            variant: "default",
          });
        }}
      >
        Show toast
      </Button>
    </div>
  );
}