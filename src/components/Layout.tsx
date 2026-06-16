import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section")
    ).slice(1); // pula o hero

    // 1) esconde todas as seções (exceto hero)
    sections.forEach((el) => {
      el.classList.remove("reveal-visible");
      el.classList.add("reveal");
    });

    let observer: IntersectionObserver | null = null;
    let raf2 = 0;

    // 2) dois frames de animação garantem que o browser pintou
    //    o estado oculto antes de começar a observar
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.06, rootMargin: "0px 0px -32px 0px" }
        );
        sections.forEach((el) => observer!.observe(el));
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      observer?.disconnect();
    };
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
