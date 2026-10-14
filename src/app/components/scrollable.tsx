"use client";

import { useRef, useState, useCallback } from "react";

interface ScrollableTextProps {
  children: React.ReactNode;
  maxHeight?: string; // e.g. "400px" or "60vh"
  className?: string;
}

export default function ScrollableText({
  children,
  maxHeight = "400px",
  className = "",
}: ScrollableTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
  }, []);

  return (
    <div className="relative">
      {/* Optional progress bar */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gray-200 z-10 rounded-t-lg">
        <div
          className="h-full bg-(--maroon) transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        ref={ref}
        onScroll={handleScroll}
        tabIndex={0}
        role="region"
        aria-label="Scrollable text content"
        style={{ maxHeight }}
        className={`overflow-y-auto rounded-lg border border-gray-300 p-6 pt-4 leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        {children}
      </div>
    </div>
  );
}