"use client";
import React, { ReactNode } from "react";

interface ButtonProps {
  title: string;
  icon?: ReactNode;
  destination?: string;
}

const NextPageBtn: React.FC<ButtonProps> = ({ title, icon, destination }) => {
  return (
    <button className="relative flex items-center gap-2 py-2 text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-all duration-150 ease-in-out text-sm group">
      {title}
      {icon}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 opacity-50 group-hover:opacity-100 before:absolute before:bottom-0 before:left-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-300 before:ease-in-out group-hover:before:w-full" />
    </button>
  );
};

export default NextPageBtn;
