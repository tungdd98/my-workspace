import React, { FC } from 'react';
import BottomAppBar from './_components/BottomAppBar';

export const metadata = {
  title: 'Test: Seoul Comix',
  description: 'Coding Test Assignment: Full Stack Developer Challenge',
};

const LandingLayout: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="mb-16">
      {children}
      <BottomAppBar />
    </div>
  );
};

export default LandingLayout;
