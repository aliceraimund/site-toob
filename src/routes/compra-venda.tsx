import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/compra-venda")({
  component: CompraVendaPage,
});

const portfolio = [
  {
    tipo: "Venda",
    nome: "Caminhão Roll-On Diesel",
    desc: "Veículos seminovos revisados e com documentação regularizada. Consulte disponibilidade e especificações.",
  },
  {
    tipo: "Venda",
    nome: "Prensa de Resíduos",
    desc: "Equipamentos usados em bom estado, com laudo técnico. Ótima relação custo-benefício.",
  },
  {
    tipo: "Venda",
    nome: "Caçamba Roll-On",
    desc: "Caçambas em diversos volumes. Verificadas e prontas para operação.",
  },
  {
    tipo: "Compra",
    nome: "Compramos sua frota",
    desc: "Avaliação técnica rápida da sua frota de caminhões roll-on. Proposta em até 48 horas.",
  },
  {
    tipo: "Compra",
    nome: "Compramos seus equipamentos",
    desc: "Prensas, empilhadeiras, caçambas e demais ativos. Avaliamos e fazemos proposta.",
  },
  {
    tipo: "Compra",
    nome: "Intermediação de ativos",
    desc: "Conectamos compradores e vendedores no mercado de equipamentos industriais.",
  },
];

function CompraVendaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: [
            "linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.9) 100%)",
            "url('/caminhao-daf.png')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container-x" style={{ width: "100%", paddingBottom: 72, paddingTop: 140 }}>
          <div className="eyebrow-dark">Compra e Venda</div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6.5vw, 76px)", marginTop: 16, color: "#fff", maxWidth: 800 }}
          >
            Compra e venda de caminhões e equipamentos industriais.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 520,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Portfólio de ativos disponíveis para compra. Ou avalie sua frota e equipamentos
            conosco — compramos com avaliação técnica em 48 horas.
          </p>
        </div>
      </section>

      {/* ── PORTFÓLIO ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Portfólio</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            O que compramos e vendemos.
          </h2>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {portfolio.map((item) => (
              <div
                key={item.nome}
                className="card"
                style={{ padding: 28 }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: item.tipo === "Venda" ? "#0D0D0D" : "#FF0000",
                    color: "#fff",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    padding: "3px 10px",
                    borderRadius: 100,
                    marginBottom: 16,
                  }}
                >
                  {item.tipo}
                </div>
                <h3 className="font-display" style={{ fontSize: 26, color: "#0D0D0D" }}>
                  {item.nome}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#5D5D5D",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  {item.desc}
                </p>
                <a
                  href={`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no item: ${item.nome}. Pode me passar mais detalhes?`)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 20,
                    fontSize: 13,
                    fontFamily: "Nunito, sans-serif",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#FF0000",
                    textDecoration: "none",
                  }}
                >
                  <MessageCircle size={14} /> Consultar disponibilidade
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA VENDER ── */}
      <section style={{ background: "#0D0D0D", padding: "80px 0" }}>
        <div className="container-x" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
          <div>
            <div className="eyebrow">Quer vender seus ativos?</div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#fff" }}
            >
              Avaliamos sua frota em 48 horas.
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "Nunito, sans-serif",
              }}
            >
              Mande os dados do que você quer vender — caminhões, equipamentos, caçambas.
              Nossa equipe faz a avaliação técnica e retorna com uma proposta clara em até 48 horas.
              Sem enrolação.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <a
              href={`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de uma avaliação para venda de equipamentos/frota.")}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                background: "#25D366",
                color: "#fff",
                fontFamily: "Nunito, sans-serif",
                fontSize: 17,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px 32px",
                borderRadius: 8,
                textDecoration: "none",
              }}
            >
              <MessageCircle size={19} />
              Enviar para avaliação
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
