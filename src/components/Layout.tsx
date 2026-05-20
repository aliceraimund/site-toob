import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SmoothScroll } from "./SmoothScroll";
import { CustomCursor } from "./CustomCursor";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Header />
      <main style={{ paddingTop: 72 }}>{children}</main>
      <Footer />
    </>
  );
}
