import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 96 }}>{children}</main>
      <Footer />
    </>
  );
}
