import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

const services = [
  { label: "Locação de Caminhões", to: "/caminhoes" as const },
  { label: "Locação de Equipamentos", to: "/equipamentos" as const },
  { label: "Compra e Venda", to: "/compra-venda" as const },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex flex-col items-center px-5 pt-4">
      {/* Pill navbar */}
      <div
        style={{
          background: "rgba(13,13,13,0.82)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 9999,
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.45)",
          width: "100%",
          maxWidth: 1100,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div className="flex items-center justify-between px-6" style={{ height: 64 }}>
          <Link to="/" className="flex items-center" aria-label="Toob — Início" onClick={() => setMobile(false)}>
            <img
              src="/logos/Logo Toob para Fundo Preto.png"
              alt="Toob"
              style={{ height: 36, width: "auto" }}
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <NavLink to="/" label="Home" />
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              onClick={() => setOpen((v) => !v)}
            >
              <button className="group inline-flex items-center gap-1 font-sans-body font-medium text-white">
                <span className="relative">
                  Serviços
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FF0000] transition-all group-hover:w-full" />
                </span>
                <ChevronDown size={14} />
              </button>
              {open && (
                <div className="absolute left-1/2 top-full pt-4" style={{ transform: "translateX(-50%)" }}>
                  <div
                    style={{
                      background: "rgba(13,13,13,0.95)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      borderRadius: 16,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                      minWidth: 260,
                      overflow: "hidden",
                    }}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className="block px-5 py-3 font-sans-body text-sm text-white/85 transition hover:bg-white/5 hover:text-[#FF0000]"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/setores" label="Setores" />
            <NavLink to="/sobre" label="Sobre Nós" />
            <NavLink to="/contato" label="Contato" />
          </nav>

          <Link
            to="/contato"
            className="hidden items-center gap-2 bg-[#FF0000] px-5 py-2.5 font-display text-sm uppercase tracking-[0.06em] text-white transition hover:bg-[#CC0000] rounded-full lg:inline-flex"
          >
            Solicitar Orçamento <ArrowRight size={15} />
          </Link>

          <button
            className="text-white lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setMobile((v) => !v)}
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — pill below */}
      {mobile && (
        <div
          className="mt-2 w-full lg:hidden"
          style={{
            maxWidth: 1100,
            background: "rgba(13,13,13,0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 24,
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            <MobileLink to="/" label="Home" onClick={() => setMobile(false)} />
            <div className="py-1">
              <div className="eyebrow mb-1 text-white/40">Serviços</div>
              {services.map((s) => (
                <MobileLink key={s.to} to={s.to} label={s.label} onClick={() => setMobile(false)} />
              ))}
            </div>
            <MobileLink to="/setores" label="Setores" onClick={() => setMobile(false)} />
            <MobileLink to="/sobre" label="Sobre Nós" onClick={() => setMobile(false)} />
            <MobileLink to="/contato" label="Contato" onClick={() => setMobile(false)} />
            <Link
              to="/contato"
              onClick={() => setMobile(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#FF0000] px-5 py-3 font-display text-sm uppercase tracking-[0.1em] text-white transition hover:bg-[#CC0000]"
            >
              Solicitar Orçamento <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function NavLink({ to, label }: { to: any; label: string }) {
  return (
    <Link to={to} className="group relative font-sans-body font-medium text-white">
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FF0000] transition-all group-hover:w-full" />
      </span>
    </Link>
  );
}

function MobileLink({ to, label, onClick }: { to: any; label: string; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="block py-3 font-sans-body text-white/85 transition hover:text-white">
      {label}
    </Link>
  );
}
