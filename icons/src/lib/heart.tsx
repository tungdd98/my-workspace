import React, { type SVGProps, forwardRef } from 'react';

export const HeartIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
      className={className}
    >
      <path
        d="M13.4258 1.5C16.3609 1.5 18.3332 4.29375 18.3332 6.9C18.3332 12.1781 10.148 16.5 9.99984 16.5C9.85169 16.5 1.6665 12.1781 1.6665 6.9C1.6665 4.29375 3.63873 1.5 6.57391 1.5C8.2591 1.5 9.36095 2.35312 9.99984 3.10312C10.6387 2.35312 11.7406 1.5 13.4258 1.5Z"
        stroke="white"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
);
HeartIcon.displayName = 'HeartIcon';
