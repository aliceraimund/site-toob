import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-[#FF0000] bg-[#0D0D0D] text-white">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3 md:items-center">
        <div>
          <img
            src="/logos/Logo Toob para Fundo Preto.png"
            alt="Toob"
            loading="lazy"
            style={{ height: 72, width: "auto" }}
          />
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-sans-body text-sm text-white/80">
          <Link to="/" className="hover:text-[#FF0000]">Home</Link>
          <Link to="/caminhoes" className="hover:text-[#FF0000]">Serviços</Link>
          <Link to="/sobre" className="hover:text-[#FF0000]">Sobre Nós</Link>
          <Link to="/contato" className="hover:text-[#FF0000]">Contato</Link>
        </nav>
        <div className="text-right text-xs text-white/60 md:text-right">
          <div>CNPJ: 62.121.063/0001-53</div>
          <div>© 2025 Toob · São Paulo, SP · Brasil</div>
        </div>
      </div>
    </footer>
  );
}
