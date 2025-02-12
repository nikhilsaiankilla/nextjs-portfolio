import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const reduceSize = (input: string, size: number): string => {
  if (input.length <= size) {
    return input;
  }

  return input.slice(0, Math.floor(input.length / 2)) + ".....";
}