import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
});

function SobrePage() {
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
            "url('/cenario.png')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container-x" style={{ width: "100%", paddingBottom: 72, paddingTop: 140 }}>
          <div className="eyebrow-dark">Sobre Nós</div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6.5vw, 76px)", marginTop: 16, color: "#fff", maxWidth: 800 }}
          >
            Agilidade e flexibilidade que o mercado tradicional não entrega.
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
            Nascemos para resolver o que o mercado ignorava: a necessidade de locação rápida,
            sem burocracia e sem contrato longo.
          </p>
        </div>
      </section>

      {/* ── QUEM SOMOS ── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container-x">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 64,
              alignItems: "center",
            }}
          >
            <div>
              <div className="eyebrow">Quem somos</div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
              >
                Um modelo diferente do mercado tradicional.
              </h2>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#5D5D5D",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                A Toob é uma empresa especializada em locação de caminhões roll-on, caçambas e
                equipamentos para operações industriais, logísticas e de gestão de resíduos.
              </p>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "#5D5D5D",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                Enquanto o mercado exige contratos longos e burocracia, a Toob resolve em horas.
                Nossos clientes são indústrias, construtoras, empresas de reciclagem, operadores
                logísticos, qualquer operação que precise de equipamento agora, sem abrir mão
                da qualidade e da confiabilidade.
              </p>
            </div>

            <div
              style={{
                background: "#F5F5F5",
                borderRadius: 16,
                padding: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                aspectRatio: "1",
                border: "1px solid #E5E5E5",
              }}
            >
              <img
                src="/logos/Logo Toob Padrão FT.png"
                alt="Símbolo Toob"
                style={{ width: "70%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section style={{ background: "#F5F5F5", padding: "96px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Como trabalhamos</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Três princípios que guiam tudo.
          </h2>

          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "Flexibilidade real",
                body: "Diário, semanal, mensal. O prazo é seu. Sem mínimo imposto, sem multa por curto prazo. Sua operação manda.",
              },
              {
                title: "Agilidade no processo",
                body: "Da solicitação à proposta em horas. Você fala com quem decide, sem intermediários, sem fila de atendimento.",
              },
              {
                title: "Compromisso com o resultado",
                body: "Equipamento disponível, entrega no prazo combinado. Sem promessa vazia.",
              },
            ].map((v) => (
              <div key={v.title} className="card" style={{ padding: 32, borderLeft: "4px solid #FF0000" }}>
                <h3 className="font-display" style={{ fontSize: 28, color: "#0D0D0D" }}>
                  {v.title}
                </h3>
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#5D5D5D",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTENTABILIDADE ── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Compromisso Ambiental</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D", maxWidth: 640 }}
          >
            Sua operação mais eficiente. E mais verde.
          </h2>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 48,
              alignItems: "start",
            }}
          >
            <div>
              <p style={{ fontSize: 16, lineHeight: 1.85, color: "#5D5D5D", fontFamily: "Nunito, sans-serif" }}>
                A Toob acredita que eficiência operacional e responsabilidade ambiental não são opostos: são a mesma decisão.
                Nossa frota inclui caminhões a gás com redução comprovada de 15% a 99,7% nas emissões de CO₂,
                com base na metodologia GHG Protocol.
              </p>
              <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.85, color: "#5D5D5D", fontFamily: "Nunito, sans-serif" }}>
                Cada veículo é 100% rastreado por telemetria e emite inventário de emissões mensalmente,
                dados que seus relatórios de sustentabilidade e exigências ESG podem usar diretamente.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { value: "99,7%", label: "redução em emissões de CO₂" },
                { value: "100%", label: "dos veículos rastreados" },
                { value: "Mensal", label: "inventário de emissões" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "#fff",
                    border: "1px solid #E5E5E5",
                    borderLeft: "4px solid #FF0000",
                    borderRadius: 8,
                    padding: "24px 28px",
                  }}
                >
                  <div className="font-display" style={{ fontSize: 44, color: "#FF0000", lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 13,
                      color: "#5D5D5D",
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#F5F5F5", padding: "96px 0" }}>
        <div className="container-x" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Fale com a gente</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 6vw, 60px)", color: "#0D0D0D", maxWidth: 700, margin: "0 auto" }}
          >
            Quer saber mais sobre como a Toob pode ajudar sua operação?
          </h2>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${WHATS_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
              style={{ width: "auto", paddingInline: 36 }}
            >
              <MessageCircle size={19} />
              Falar pelo WhatsApp
            </a>
            <Link to="/contato" className="btn-primary">
              Solicitar Orçamento <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
