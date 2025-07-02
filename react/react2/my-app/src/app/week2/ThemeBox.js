import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeBox() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '1rem',
    margin: '1rem 0',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeBox;
