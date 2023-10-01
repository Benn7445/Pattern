'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react"

export function Providers({ children, ...props }: ThemeProviderProps) {

  useEffect(() => {
    setTimeout(() => {
      const els = document.getElementsByClassName("slowLoad");
      Array.from(els).map((el: any) => {
        if (el) el.classList.add("loading")
      })
    }, 100)
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}