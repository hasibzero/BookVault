// src/app/providers.jsx
"use client";

import { HeroUIProvider, ToastProvider } from "@heroui/react";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      {/* This ensures the toast floats top-right and vanishes */}
      <ToastProvider 
        placement="top-right"
        toastProps={{
          timeout: 3000,
          classNames: {
            // High z-index ensures it never gets stuck behind your white/gray backgrounds
            base: "z-[99999] shadow-lg", 
          }
        }} 
      />
      {children}
    </HeroUIProvider>
  );
}