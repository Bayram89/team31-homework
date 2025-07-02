"use client"

import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeBox from './ThemeBox';

function Page() {
  return (
    <ThemeProvider>
      <ThemeBox />
    </ThemeProvider>
  );
}

export default Page;
