"use client";

import { useEffect } from "react";

export const RenderProvider = () => {

  useEffect(() => {
    setTimeout(() => {
      const els = document.getElementsByClassName("slowLoad");
      Array.from(els).map((el: any) => {
        if (el) el.classList.add("loading")
      })
    }, 100)
  }, [])

  return (<><p></p></>)
}

export default RenderProvider;