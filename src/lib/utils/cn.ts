import { clsx, type ClassValue } from "clsx" // Permet de joindre conditionnellement plusieurs classes
import { twMerge } from "tailwind-merge" // Permet de joindre plusieurs classes tailwind et en resolvant les conflits des doublons.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}