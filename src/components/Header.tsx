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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0D0D0D] text-white">
      <div className="container-x flex items-center justify-between" style={{ height: 72 }}>
        <Link to="/" className="flex items-center" aria-label="Toob — Início" onClick={() => setMobile(false)}>
          <img
            src="/logos/Logo Toob para Fundo Preto.png"
            alt="Toob"
            width={144}
            height={36}
            style={{ height: 36, width: "auto" }}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" label="Home" />
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="group inline-flex items-center gap-1 font-sans-body font-medium text-white">
              <span className="relative">
                Serviços
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C0392B] transition-all group-hover:w-full" />
              </span>
              <ChevronDown size={14} />
            </button>
            {open && (
              <div className="absolute left-0 top-full pt-3">
                <div className="min-w-[260px] border border-white/10 bg-[#0D0D0D] py-2 shadow-xl">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block px-5 py-3 font-sans-body text-sm text-white/85 transition hover:bg-white/5 hover:text-[#C0392B]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavLink to="/sobre" label="Sobre Nós" />
          <NavLink to="/contato" label="Contato" />
        </nav>

        <Link
          to="/contato"
          className="hidden items-center gap-2 bg-[#C0392B] px-5 py-3 font-display text-sm uppercase tracking-[0.1em] text-white transition hover:bg-[#a82e22] lg:inline-flex"
        >
          Solicitar Orçamento <ArrowRight size={16} />
        </Link>

        <button
          className="lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X /> : <Menu />}
        </button>
      </div>

      {mobile && (
        <div className="border-t border-white/10 bg-[#0D0D0D] lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            <MobileLink to="/" label="Home" onClick={() => setMobile(false)} />
            <div className="py-2">
              <div className="eyebrow text-white/60">Serviços</div>
              {services.map((s) => (
                <MobileLink key={s.to} to={s.to} label={s.label} onClick={() => setMobile(false)} />
              ))}
            </div>
            <MobileLink to="/sobre" label="Sobre Nós" onClick={() => setMobile(false)} />
            <MobileLink to="/contato" label="Contato" onClick={() => setMobile(false)} />
            <Link
              to="/contato"
              onClick={() => setMobile(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-[#C0392B] px-5 py-3 font-display uppercase tracking-[0.1em] text-white"
            >
              Solicitar Orçamento <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: any; label: string }) {
  return (
    <Link to={to} className="group relative font-sans-body font-medium text-white">
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#C0392B] transition-all group-hover:w-full" />
      </span>
    </Link>
  );
}

function MobileLink({ to, label, onClick }: { to: any; label: string; onClick: () => void }) {
  return (
    <Link to={to} onClick={onClick} className="block py-3 font-sans-body text-white">
      {label}
    </Link>
  );
}
