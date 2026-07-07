"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function reveal(selector: string, activeClass: string) {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    element.classList.add(activeClass);
  });
}

function hideLoaders() {
  document.querySelectorAll<HTMLElement>(".loader").forEach((loader) => {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    loader.style.transition = "opacity 300ms ease";
    window.setTimeout(() => {
      loader.style.display = "none";
    }, 350);
  });
}

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      reveal(".hidden", "show");
      reveal(".hidden2", "show2");
      reveal(".hidden3", "show3");
      reveal(".hidden4", "show4");
      hideLoaders();
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
