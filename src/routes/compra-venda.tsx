import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, ArrowRight, MessageCircle } from "lucide-react";
import { HeroReveal, Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/compra-venda")({
  head: () => ({ meta: [{ title: "Compra e Venda de Equipamentos — Toob" }] }),
  component: CompraVendaPage,
});

const products = [
  { id: 1, name: "Caminhão Roll-On Mercedes-Benz Atego 2430", desc: "Trucado, motor 300cv, cabine simples, ano 2019. Excelente estado de conservação, pneus novos, documentação em dia.", category: "Caminhão" },
  { id: 2, name: "Caminhão Roll-On Volkswagen Constellation 17.280", desc: "Toco, motor 280cv, ano 2020, sistema de gancho hidráulico revisado. Pronto para operação imediata.", category: "Caminhão" },
  { id: 3, name: "Caçamba Roll-On 5m³ em Aço Carbono", desc: "Capacidade de 5m³, aço carbono de alta resistência. Ideal para resíduos industriais e entulho.", category: "Caçamba" },
  { id: 4, name: "Caçamba Roll-On 7m³ Reforçada", desc: "Capacidade de 7m³, reforço estrutural nas laterais. Compatível com a maioria dos caminhões roll-on.", category: "Caçamba" },
  { id: 5, name: "Empilhadeira Elétrica Toyota 8FBE15", desc: "Capacidade 1.500kg, elevação 3m, bateria revisada, ano 2018.", category: "Empilhadeira" },
  { id: 6, name: "Empilhadeira a GLP Hyster H2.5FT", desc: "Capacidade 2.500kg, mástro triplex 4,5m, ano 2017.", category: "Empilhadeira" },
];

type ModalState = { type: "buy" | "sell"; product: string } | null;

function CompraVendaPage() {
  const [modal, setModal] = useState<ModalState>(null);
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [ativo, setAtivo] = useState("");

  const openWhatsApp = () => {
    if (!modal) return;
    const msg = modal.type === "buy"
      ? `Olá, Toob! Me chamo ${nome}, da empresa ${empresa}. Tenho interesse em comprar o equipamento ${modal.product}. Aguardo mais informações sobre disponibilidade e condições.`
      : `Olá, Toob! Me chamo ${nome}, da empresa ${empresa}. Tenho um ativo que gostaria de vender. Equipamento: ${ativo}. Aguardo contato.`;
    window.open(`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setModal(null);
    setNome(""); setEmpresa(""); setAtivo("");
  };

  const inputStyle = {
    width: "100%", border: "2px solid #e5e5e5", borderRadius: 10,
    padding: "14px 18px", fontFamily: "Barlow, sans-serif", fontSize: 15,
    outline: "none", background: "#fafafa", color: "#0D0D0D",
  };

  return (
    <>
      <section
        className="relative flex min-h-[65vh] items-end overflow-hidden text-white"
        style={{
          backgroundImage: [
            "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.5) 40%, rgba(13,13,13,0.95) 100%)",
            "url('https://images.unsplash.com/photo-1565793979229-94041c8e0c03?w=1920&q=80&auto=format')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-x relative z-10 w-full pb-20 pt-36">
          <HeroReveal>
            <div className="eyebrow" style={{ color: "#C0392B" }}>Compra e Venda</div>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1 className="font-display mt-5 max-w-4xl text-white" style={{ fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 1.05 }}>
              Compre ou venda equipamentos com quem conhece o mercado.
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.22}>
            <p className="font-sans-body mt-6 max-w-2xl" style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>
              Portfólio de equipamentos disponíveis para aquisição. Ou fale com a gente se quiser vender o seu ativo.
              Negociação direta, sem intermediários.
            </p>
          </HeroReveal>
        </div>
      </section>

      <section className="py-28" style={{ background: "#F5F5F5" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow" style={{ color: "#C0392B" }}>Portfólio disponível</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-3" style={{ fontSize: "clamp(40px,5.5vw,60px)", color: "#0D0D0D" }}>
              Equipamentos para compra.
            </h2>
          </Reveal>

          <RevealStagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <RevealItem key={p.id}>
                <TiltCard className="card-light flex h-full flex-col overflow-hidden">
                  <div
                    style={{
                      height: 180,
                      background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="font-display" style={{ fontSize: 48, color: "rgba(255,255,255,0.1)" }}>
                      {p.category === "Caminhão" ? "🚛" : p.category === "Empilhadeira" ? "🏭" : "📦"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="badge-red" style={{ alignSelf: "flex-start", marginBottom: 10 }}>{p.category}</span>
                    <h3 className="font-display" style={{ fontSize: 20, color: "#0D0D0D", lineHeight: 1.2 }}>{p.name}</h3>
                    <p className="font-sans-body mt-3 flex-1" style={{ fontSize: 13, lineHeight: 1.65, color: "#5D5D5D" }}>{p.desc}</p>
                    <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                      <button
                        onClick={() => setModal({ type: "buy", product: p.name })}
                        className="btn-primary flex-1"
                        style={{ padding: "12px 16px", fontSize: 13, justifyContent: "center" }}
                      >
                        Consultar para Compra
                      </button>
                      <button
                        onClick={() => setModal({ type: "sell", product: p.name })}
                        className="btn-outline-dark flex-1"
                        style={{ padding: "12px 16px", fontSize: 13, justifyContent: "center" }}
                      >
                        Tenho para Vender
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setModal(null); }}
        >
          <div style={{ background: "#fff", borderRadius: 20, padding: 40, width: "100%", maxWidth: 480, position: "relative" }}>
            <button
              onClick={() => setModal(null)}
              style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", cursor: "pointer" }}
            >
              <X size={22} color="#5D5D5D" />
            </button>
            <div className="eyebrow" style={{ color: "#C0392B" }}>
              {modal.type === "buy" ? "Consultar para Compra" : "Vender meu equipamento"}
            </div>
            <h3 className="font-display mt-2" style={{ fontSize: 28, color: "#0D0D0D", lineHeight: 1.2 }}>
              {modal.type === "buy" ? modal.product : "Descreva seu ativo"}
            </h3>
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <label className="input-label">Nome completo</label>
                <input value={nome} onChange={(e) => setNome(e.target.value)} style={inputStyle} placeholder="Seu nome" />
              </div>
              <div>
                <label className="input-label">Empresa</label>
                <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} style={inputStyle} placeholder="Nome da empresa" />
              </div>
              {modal.type === "sell" && (
                <div>
                  <label className="input-label">Equipamento que deseja vender</label>
                  <input value={ativo} onChange={(e) => setAtivo(e.target.value)} style={inputStyle} placeholder="Descreva o equipamento" />
                </div>
              )}
              <button
                onClick={openWhatsApp}
                className="btn-whatsapp w-full mt-2"
              >
                <MessageCircle size={18} />
                Enviar pelo WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
