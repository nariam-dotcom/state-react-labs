import React from 'react'


  // TODO: Implement dark mode toggle logic
  
const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  
  return (
    <button onClick = {toggleDarkMode} >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
};

export default DarkModeToggle