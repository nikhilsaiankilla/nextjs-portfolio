"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  destination?: string;
}

/**
 * Reusable button component that handles client-side navigation using Next.js router.
 * Styled to look like a link, but uses <button> for accessibility and JS control.
 */
const NextPageBtn: React.FC<ButtonProps> = ({ title, icon, destination }) => {
  const router = useRouter();

  // Navigate to the given destination using Next.js client-side routing
  const handleClick = () => {
    if (destination) {
      router.push(destination);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      // Acts as a link for screen readers
      role="link"
      // Improves accessibility for screen readers
      aria-label={`Navigate to ${title}`}
      className="relative flex items-center gap-2 py-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out text-sm group"
    >
      {/* Button Text */}
      {title}

      {/* Optional icon (hidden from screen readers if purely decorative) */}
      {icon && <span aria-hidden="true">{icon}</span>}

      {/* Animated underline effect on hover (purely visual) */}
      <span
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 opacity-50 group-hover:opacity-100
        before:absolute before:bottom-0 before:left-0 before:h-full before:w-0
        before:bg-light-accent dark:before:bg-dark-accent
        before:transition-all before:duration-300 before:ease-in-out
        group-hover:before:w-full"
        aria-hidden="true"
      />
    </button>
  );
};

export default NextPageBtn;
