import React, { FC } from 'react';

export const metadata = {
  title: 'Test: Seoul Comix',
  description: 'Coding Test Assignment: Full Stack Developer Challenge',
};

const LandingLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div>{children}</div>;
};

export default LandingLayout;
