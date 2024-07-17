import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ToggleIconProps } from "./types";
import React from "react";
const ToggleIcon: React.FC<ToggleIconProps> = ({ className, icon, color }) => {
  const StyleToggleIcon = cva(["toggle-icon"], {
    variants: {
      color: {
        white: ["bg-black", "dark:bg-white"],
      },
    },
  });
  return (
    <div className={twMerge(StyleToggleIcon({ color }), className)}>{icon}</div>
  );
};

export default ToggleIcon;
