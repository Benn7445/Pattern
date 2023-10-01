"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ClientIcon from "../ClientIcon";

export const ThemeSwitch = () => {


  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  return (
    <>
      <ClientIcon icon="ph:moon-fill" className={`text-white my-auto ml-3 mr-1.5 pt-0.5 duration-300 slowLoad ${theme === "dark" ? "opacity-100" : "opacity-60"}`} />
      <ClientIcon icon="ph:sun-fill" className={`text-white my-auto mr-3 ml-1.5 pt-0.5 duration-300 slowLoad ${theme === "dark" ? "opacity-60" : "opacity-100"}`} />
    </>
  )
}

export default ThemeSwitch;