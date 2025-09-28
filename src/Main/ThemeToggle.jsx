import React from 'react';
import UseTheme from './Hooks/UseTheme';

const ThemeToggle = () => {
    const [theme, toggleTheme] = UseTheme()
    return (
        <div>
             <label className="swap swap-rotate">
      {/* hidden checkbox */}
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />

      {/* sun icon (light mode) */}
      <svg
        className="swap-off fill-current w-8  text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
      >
         <path d="M5.64 17.66L4.22 19.07l1.41 1.41 1.42-1.41-1.41-1.41zM12 4V1h-1v3h1zm6.36 13.66l1.41 1.41 1.41-1.41-1.41-1.41-1.41 1.41zM19 12h3v-1h-3v1zM4 11H1v1h3v-1zm1.64-5.66L4.22 4.22 5.64 2.8l1.42 1.42-1.42 1.42zM12 20v3h-1v-3h1zM17.66 6.34l1.41-1.41-1.41-1.42-1.41 1.42 1.41 1.41zM12 6a6 6 0 100 12 6 6 0 000-12z" />
      </svg>

      {/* moon icon (dark mode) */}
      <svg
        className="swap-on fill-current w-8  text-yellow-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
       <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </label>
        </div>
    );
};

export default ThemeToggle;