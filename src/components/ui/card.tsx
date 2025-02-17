import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string; // ✅ Allows className
}

export function Card({ children, className }: CardProps) {
  return <div className={`p-6 bg-gray-800 rounded-lg shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className }: CardProps) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
