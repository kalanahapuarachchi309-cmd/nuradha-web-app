"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

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

function observeReveal(selector: string, activeClass: string) {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

  if (!elements.length) {
    return null;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add(activeClass));
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(activeClass, entry.isIntersecting);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  elements.forEach((element) => observer.observe(element));
  return observer;
}

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      hideLoaders();
    }, 50);

    const observers = [
      observeReveal(".hidden", "show"),
      observeReveal(".hidden2", "show2"),
      observeReveal(".hidden3", "show3"),
      observeReveal(".hidden4", "show4"),
    ].filter((observer): observer is IntersectionObserver => Boolean(observer));

    return () => {
      window.clearTimeout(timer);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [pathname]);

  return null;
}
