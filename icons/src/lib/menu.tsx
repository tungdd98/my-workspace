import React, { type SVGProps, forwardRef } from 'react';

export const MenuIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
      className={className}
    >
      <path
        d="M1 7H19M1 1H19M1 13H19"
        stroke="#667085"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
MenuIcon.displayName = 'MenuIcon';
