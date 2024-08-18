"use client";

import { clsx } from "clsx"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function useIsMobile(maxWidth = 767) { 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);

    const handleResize = () => setIsMobile(mediaQuery.matches);

    // Set initial value
    handleResize();

    // Add listener for window resize
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [maxWidth]);

  return isMobile;
};