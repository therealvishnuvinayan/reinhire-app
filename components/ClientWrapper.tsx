'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme) {
      document.body.classList.remove('purple-light', 'purple-dark');
      document.body.classList.add(
        theme === 'dark' ? 'purple-dark' : 'purple-light',
      );
    }
  }, [theme]);

  return <>{children}</>;
};

export default ClientWrapper;
