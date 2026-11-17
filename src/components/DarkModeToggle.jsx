import React from 'react'

const DarkModeToggle = () => {
  // TODO: Implement dark mode toggle logic
  const [darkMode, setDarkMode] = useState (false);

  const toggleDarkMode = () => {
    setDarkMode (!darkMode);
    
    document.body.classList.toggle('dark-mode');
  }
  return (
    <button onClick = {toggleDarkMode} >
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
};

export default DarkModeToggle