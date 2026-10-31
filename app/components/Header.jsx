// import React from 'react';

// const Header = () => {
//   return (
//     <div className="w-full bg-white shadow-sm">
//       <header className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center justify-center text-center">

//         <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
//           Task <span className="text-blue-600">Tracker</span>
//         </h1>

//         <p className="text-slate-500 text-sm md:text-base mt-2">
//           Stay Organized and Productive
//         </p>

//         <div className="w-16 h-1 bg-blue-600 rounded-full mt-4"></div>

//       </header>
//     </div>
//   );
// };

// export default Header;


// const Header = ({ isDark, toggleDarkMode }) => {

//   return (

//     <div className={`w-full shadow-sm transition-colors ${
//       isDark ? "bg-slate-900" : "bg-white"
//     }`}>

//       <header className="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center justify-center text-center relative">

//         <h1 className={`text-3xl md:text-4xl font-bold tracking-tight ${
//           isDark ? "text-white" : "text-slate-800"
//         }`}>

//           Task <span className="text-blue-600">Tracker</span>

//         </h1>

//         <p className={`text-sm md:text-base mt-2 ${
//           isDark ? "text-slate-400" : "text-slate-500"
//         }`}>

//           Stay Organized and Productive

//         </p>

//         <div className="w-16 h-1 bg-blue-600 rounded-full mt-4"></div>

//         <button
//           onClick={toggleDarkMode}
//           className={`mt-5 px-4 py-2 rounded-lg text-sm font-semibold transition ${
//             isDark
//               ? "bg-slate-700 text-yellow-300 hover:bg-slate-600"
//               : "bg-slate-100 text-slate-700 hover:bg-slate-200"
//           }`}
//         >
//           {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
//         </button>

//       </header>

//     </div>

//   );

// };

// export default Header;

"use client";

const Header = ({ isDark, toggleDarkMode }) => {
  return (
    <header className={`border-b transition-colors ${
      isDark
        ? "bg-slate-900 border-slate-800"
        : "bg-white border-slate-200"
    }`}>

      <div className="max-w-6xl mx-auto px-5 py-5 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/20">
            ✓
          </div>

          <div>
            <h1 className={`text-xl font-bold tracking-tight ${
              isDark ? "text-white" : "text-slate-800"
            }`}>
              Task<span className="text-blue-600">Tracker</span>
            </h1>

            <p className={`text-xs ${
              isDark ? "text-slate-400" : "text-slate-500"
            }`}>
              Stay focused. Get things done.
            </p>
          </div>

        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
            isDark
              ? "bg-slate-800 text-yellow-300 hover:bg-slate-700"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          <span>{isDark ? "☀️" : "🌙"}</span>
          <span className="hidden sm:inline">
            {isDark ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

      </div>

    </header>
  );
};

export default Header;


