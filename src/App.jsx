import {useEffect, useState} from 'react'
import logoLight from '/src/assets/mavic7-full.png';
import logoDark from '/src/assets/mavic7-full-dark.png';

import { IoMenu } from "react-icons/io5";

import './App.css'

function App() {
  const [isDark, setIsDarkTheme] = useState(
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');

    const mqListener = (e) => {
      setIsDarkTheme(e.matches);
    };

    darkThemeMq.addEventListener('change', mqListener);

    return () => darkThemeMq.removeEventListener('change', mqListener);
  }, []);
  return (
    <>
      <main className="w-screen h-screen bg-white dark:bg-gradient-to-br dark:from-[#41404B] dark:to-[#343937] z-999 flex justify-center">
        <nav className="backdrop-blur-lg bg-gray-300 dark:bg-gradient-to-br dark:from-[#14131C] dark:to-[#111312] min-w-full max-h-20 opacity-90 flex justify-between align-middle fixed sm:min-w-[50%] border-[#151515] sm:border-2 sm:rounded-lg sm:mt-2 sm:max-h-14">
          <img alt="mavic7 Logo" src={isDark ? logoDark : logoLight} className="h-16 sm:h-12 p-2 m-1"/>
          <button><IoMenu className="sm:hidden aspect-square w-10 h-10 mx-4 my-auto" color={isDark ? "white" : "black"}/></button>
        </nav>
      </main>
    </>
  )
}

export default App
