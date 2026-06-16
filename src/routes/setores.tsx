import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Factory, HardHat, Recycle, Truck, Wheat, Zap,
  FlaskConical, Building2, Warehouse, ArrowRight, MessageCircle,
} from "lucide-react";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/setores")({
  component: SetoresPage,
});

const setores = [
  {
    icon: Factory,
    nome: "Indústria",
    desc: "Operações contínuas e temporárias em plantas industriais de todos os segmentos.",
  },
  {
    icon: HardHat,
    nome: "Construção Civil",
    desc: "Obras de grande, médio e pequeno porte com necessidade de remoção de entulho e materiais.",
  },
  {
    icon: Recycle,
    nome: "Reciclagem e Resíduos",
    desc: "Coleta, armazenagem e movimentação de resíduos recicláveis e industriais.",
  },
  {
    icon: Truck,
    nome: "Logística e Transporte",
    desc: "Apoio a operadores logísticos com capacidade extra em picos de demanda.",
  },
  {
    icon: Wheat,
    nome: "Agronegócio",
    desc: "Suporte em safras, armazenagem de grãos e movimentação de insumos agrícolas.",
  },
  {
    icon: Zap,
    nome: "Operações de Emergência",
    desc: "Resposta rápida para operações emergenciais com disponibilidade imediata.",
  },
  {
    icon: FlaskConical,
    nome: "Química e Petroquímica",
    desc: "Movimentação segura de resíduos especiais e materiais industriais.",
  },
  {
    icon: Building2,
    nome: "Facilities e Serviços",
    desc: "Gestão de resíduos em grandes condomínios, shoppings e empreendimentos.",
  },
  {
    icon: Warehouse,
    nome: "Armazenagem e Distribuição",
    desc: "Suporte a centros de distribuição com aumento sazonal de volume.",
  },
];

function SetoresPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "55vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: [
            "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.92) 100%)",
            "url('/cenario.png')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container-x" style={{ width: "100%", paddingBottom: 72, paddingTop: 160 }}>
          <div className="eyebrow-dark">Setores Atendidos</div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6.5vw, 72px)", marginTop: 16, color: "#fff", maxWidth: 800 }}
          >
            De indústrias a construtoras. Onde há necessidade de movimentação, a Toob está.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 520,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Atendemos operações em qualquer setor que precise de caminhões, caçambas
            ou equipamentos, com agilidade e sem burocracia.
          </p>
        </div>
      </section>

      {/* ── GRID DE SETORES ── */}
      <section id="setores" style={{ background: "#F5F5F5", padding: "96px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Onde atuamos</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Setores que atendemos.
          </h2>
          <p
            style={{
              marginTop: 12,
              fontSize: 16,
              color: "#5D5D5D",
              maxWidth: 560,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            De indústrias a construtoras. Onde há necessidade de movimentação, a Toob está.
          </p>

          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {setores.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.nome} className="card-sector">
                  <Icon
                    size={32}
                    className="sector-icon"
                    style={{ color: "#0D0D0D", transition: "color 0.25s ease", marginBottom: 16 }}
                  />
                  <h3
                    className="font-display"
                    style={{ fontSize: 22, color: "#0D0D0D", marginBottom: 10 }}
                  >
                    {s.nome}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#5D5D5D",
                      fontFamily: "Nunito, sans-serif",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PARALLAX CTA ── */}
      <section
        className="parallax-bg"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(13,13,13,0.72), rgba(13,13,13,0.72))",
            "url('/caminhao-scania.png')",
          ].join(", "),
          padding: "120px 0",
          color: "#fff",
        }}
      >
        <div className="container-x" style={{ textAlign: "center" }}>
          <div className="eyebrow-dark">Não encontrou seu setor?</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5.5vw, 56px)", marginTop: 12, color: "#fff", maxWidth: 700, margin: "12px auto 0" }}
          >
            Se sua operação precisa de movimentação, a Toob atende.
          </h2>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber se a Toob atende meu setor de operação.")}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#25D366", color: "#fff",
                fontFamily: "Nunito, sans-serif", fontSize: 14, fontWeight: 800,
                letterSpacing: "0.06em", textTransform: "uppercase",
                padding: "14px 30px", borderRadius: 100, textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              <MessageCircle size={18} /> Falar pelo WhatsApp
            </a>
            <Link to="/contato" className="btn-ghost">
              Solicitar Orçamento <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
