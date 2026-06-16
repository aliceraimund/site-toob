import type { ReactNode } from "react";
import { useLayoutEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

function useScrollReveal() {
  const location = useLocation();

  useLayoutEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    );

    // primeira seção (hero) aparece imediatamente
    sections.forEach((el, i) => {
      if (i === 0) return;
      el.classList.remove("reveal-visible");
      el.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
    );

    sections.forEach((el, i) => {
      if (i === 0) return;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
}

export function Layout({ children }: { children: ReactNode }) {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
