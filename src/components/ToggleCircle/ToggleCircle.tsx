// import { cva } from "class-variance-authority";
// import React from "react";
// import { twMerge } from "tailwind-merge";
// import { ToggleCircleProps } from "./types";
// const ToggleCircle: React.FC<ToggleCircleProps> = ({
//   circle,
//   className,
//   size = "md",
//   color = true,
//   onChange,
//   checked = false,
// }) => {
//   const StyleCircle = cva(["toggle-circle"], {
//     variants: {
//       size: {
//         sm: ["size-5"],
//         md: ["size-6"],
//         lg: ["size-7"],
//       },
//       color: {
//         true: ["bg-white", "dark:bg-black"],
//         false: ["bg-black", "dark:bg-white"],
//       },
//     },
//     defaultVariants: {},
//   });
//   return (
//     <div
//       onChange={onChange ? () => onChange(!checked) : undefined}
//       className={twMerge(StyleCircle({ size, color }), className)}
//     >
//       {circle}
//     </div>
//   );
// };
// export default ToggleCircle;
