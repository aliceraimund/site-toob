import { createFileRoute } from "@tanstack/react-router";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/equipamentos")({
  component: EquipamentosPage,
});

const equipamentos = [
  {
    nome: "Caçamba Roll-On",
    desc: "Integrada ao caminhão roll-on para coleta e transporte eficiente. Disponível em diferentes volumes.",
    img: "/equipamento-rollon-cenario.png",
    whats: "Olá! Tenho interesse em locar uma Caçamba Roll-On da Toob. Pode me passar mais informações?",
  },
  {
    nome: "Caçamba Container",
    desc: "Para armazenamento e coleta de resíduos sólidos em obras, indústrias e grandes centros de geração.",
    img: "/equipamento-rollon-container-cenario.png",
    whats: "Olá! Tenho interesse em locar uma Caçamba Container da Toob. Pode me passar mais informações?",
  },
  {
    nome: "Empilhadeira",
    desc: "Movimentação interna de carga com segurança e agilidade. Ideal para armazéns, galpões e operações logísticas.",
    img: "/equipamento-empilhadeira-cenario.png",
    whats: "Olá! Tenho interesse em locar uma Empilhadeira da Toob. Pode me passar mais informações?",
  },
  {
    nome: "Prensa de Resíduos",
    desc: "Para compactação de materiais recicláveis e resíduos industriais. Aumenta a eficiência e reduz volume na sua operação.",
    img: "/equipamento-prensa-cenario.png",
    whats: "Olá! Tenho interesse em locar uma Prensa de Resíduos da Toob. Pode me passar mais informações?",
  },
];

const WHATS_BASE = `https://wa.me/${WHATS_NUMBER}?text=`;

function EquipamentosPage() {
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
            "url('/equipamento-rollon-cenario.png')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container-x" style={{ width: "100%", paddingBottom: 72, paddingTop: 140 }}>
          <div className="eyebrow" style={{ color: "#FF0000" }}>Locação de Equipamentos</div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6.5vw, 76px)", marginTop: 16, color: "#fff", maxWidth: 800 }}
          >
            O equipamento certo, no prazo que faz sentido.
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
            Prensas, empilhadeiras, caçambas e mais. Locação com contrato flexível
            e atendimento direto.
          </p>
        </div>
      </section>

      {/* ── EQUIPAMENTOS ── */}
      <section style={{ background: "#F5F5F5", padding: "80px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Portfólio de equipamentos</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            O que temos disponível.
          </h2>

          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 28,
            }}
          >
            {equipamentos.map((e) => (
              <div
                key={e.nome}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Imagem em destaque */}
                <div style={{ position: "relative", height: 260, overflow: "hidden" }}>
                  <img
                    src={e.img}
                    alt={e.nome}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(ev) => (ev.currentTarget.style.transform = "scale(1.04)")}
                    onMouseLeave={(ev) => (ev.currentTarget.style.transform = "scale(1)")}
                  />
                  {/* Tag de categoria */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      background: "#FF0000",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderRadius: 100,
                      fontFamily: "Nunito, sans-serif",
                    }}
                  >
                    Locação disponível
                  </div>
                </div>

                {/* Conteúdo */}
                <div style={{ padding: "28px 28px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <h3
                    className="font-display"
                    style={{ fontSize: 26, color: "#0D0D0D", marginBottom: 10 }}
                  >
                    {e.nome}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "#5D5D5D",
                      fontFamily: "Nunito, sans-serif",
                      flexGrow: 1,
                      marginBottom: 24,
                    }}
                  >
                    {e.desc}
                  </p>

                  {/* Botão WhatsApp */}
                  <a
                    href={`${WHATS_BASE}${encodeURIComponent(e.whats)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: "#25D366",
                      color: "#fff",
                      borderRadius: 9999,
                      padding: "13px 24px",
                      fontFamily: "Nunito, sans-serif",
                      fontSize: 14,
                      fontWeight: 800,
                      textDecoration: "none",
                      transition: "background 0.2s ease",
                    }}
                    onMouseEnter={(ev) => (ev.currentTarget.style.background = "#1ebe5d")}
                    onMouseLeave={(ev) => (ev.currentTarget.style.background = "#25D366")}
                  >
                    {/* WhatsApp icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.428a.75.75 0 0 0 .915.915l5.593-1.464A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.667-.493-5.207-1.355l-.371-.214-3.862 1.013 1.026-3.748-.233-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    Solicitar via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRAZOS ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Modalidades</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Locação no prazo que sua operação precisa.
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              lineHeight: 1.75,
              color: "#5D5D5D",
              maxWidth: 640,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Todos os equipamentos disponíveis em contratos diários, semanais ou mensais.<br />
            Sem mínimo obrigatório, sem multa por devolução antecipada.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {["Diário", "Semanal", "Mensal"].map((p) => (
              <div
                key={p}
                style={{
                  background: "#F5F5F5",
                  border: "1px solid #E5E5E5",
                  borderTop: "3px solid #FF0000",
                  borderRadius: 8,
                  padding: "24px 20px",
                }}
              >
                <h3 className="font-display" style={{ fontSize: 28, color: "#0D0D0D" }}>{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
