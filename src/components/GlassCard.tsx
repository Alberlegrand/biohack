
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        hover && "hover:bg-white/20 hover:scale-105 cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
