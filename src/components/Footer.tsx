import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[#C0392B] bg-[#0D0D0D] text-white">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3 md:items-center">
        <div>
          <img
            src="/logos/Logo Toob para Fundo Preto.png"
            alt="Toob"
            width={128}
            height={32}
            loading="lazy"
            style={{ height: 32, width: "auto" }}
          />
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans-body text-sm text-white/80">
          <Link to="/" className="hover:text-[#C0392B]">Home</Link>
          <Link to="/caminhoes" className="hover:text-[#C0392B]">Serviços</Link>
          <Link to="/sobre" className="hover:text-[#C0392B]">Sobre Nós</Link>
          <Link to="/contato" className="hover:text-[#C0392B]">Contato</Link>
        </nav>
        <div className="text-right text-xs text-white/60 md:text-right">
          <div>CNPJ: a preencher</div>
          <div>© 2025 Toob · São Paulo, SP · Brasil</div>
        </div>
      </div>
    </footer>
  );
}
