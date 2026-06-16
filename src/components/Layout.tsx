import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // pequeno delay para o DOM da nova página renderizar
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll<HTMLElement>("main > *:not(:first-child), main section:not(:first-child)");

      sections.forEach((el) => {
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
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      sections.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 60);

    return () => clearTimeout(timer);
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
