"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  destination?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, icon, destination, onClick }) => {
  const buttonClass =
    "relative flex items-center gap-2 py-2 text-sm group cursor-pointer";

  if (destination) {
    return (
      <Link
        href={destination}
        target="_blank"
        className={buttonClass}
      >
        {icon}
        {title}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 opacity-50 group-hover:opacity-100 before:absolute before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full" />
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {icon}
      {title}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 opacity-50 group-hover:opacity-100 before:absolute before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full" />
    </button>
  );
};

export default Button;
