
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({ children, className, hover = false, onClick }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6 transition-all duration-300",
        hover && "hover:bg-white/20 hover:scale-105 cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
