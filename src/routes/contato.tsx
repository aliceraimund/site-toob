import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { WhatsAppForm, WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "Contato — Toob" }] }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#0D0D0D",
          padding: "120px 0 80px",
          color: "#fff",
        }}
      >
        <div className="container-x">
          <div className="eyebrow" style={{ color: "#C0392B" }}>Fale com a Toob</div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6.5vw, 76px)", marginTop: 16, color: "#fff", maxWidth: 800 }}
          >
            Proposta em horas. Atendimento direto.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 500,
              fontFamily: "Barlow, sans-serif",
            }}
          >
            Você fala diretamente com quem decide. Sem intermediários, sem formulário perdido,
            sem espera sem resposta.
          </p>
        </div>
      </section>

      {/* ── WHATSAPP CTA + INFO ── */}
      <section style={{ background: "#F5F5F5", padding: "80px 0" }}>
        <div className="container-x">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {/* WhatsApp card */}
            <div
              style={{
                background: "#0D0D0D",
                borderRadius: 12,
                padding: 36,
                gridColumn: "span 1",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "#25D366",
                  borderRadius: 12,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <MessageCircle size={24} color="#fff" />
              </div>
              <h3 className="font-display" style={{ fontSize: 30, color: "#fff" }}>
                WhatsApp
              </h3>
              <p
                style={{
                  marginTop: 10,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Barlow, sans-serif",
                }}
              >
                A forma mais rápida de falar com a gente. Atendemos em tempo real durante o horário comercial.
              </p>
              <a
                href={`https://wa.me/${WHATS_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 24,
                  background: "#25D366",
                  color: "#fff",
                  fontFamily: "Bebas Neue, sans-serif",
                  fontSize: 15,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "12px 24px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={16} /> Enviar mensagem
              </a>
            </div>

            {/* Info cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: <Mail size={18} color="#C0392B" />,
                  label: "E-mail",
                  value: "contato@toob.com.br",
                },
                {
                  icon: <MapPin size={18} color="#C0392B" />,
                  label: "Localização",
                  value: "São Paulo, SP — Brasil",
                },
                {
                  icon: <Clock size={18} color="#C0392B" />,
                  label: "Horário de atendimento",
                  value: "Segunda a sexta, das 8h às 18h",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  className="card"
                  style={{ padding: "20px 24px", display: "flex", alignItems: "flex-start", gap: 16 }}
                >
                  <div style={{ marginTop: 2 }}>{info.icon}</div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        color: "#5D5D5D",
                        fontFamily: "Barlow, sans-serif",
                        marginBottom: 4,
                      }}
                    >
                      {info.label}
                    </div>
                    <div style={{ fontSize: 15, color: "#0D0D0D", fontFamily: "Barlow, sans-serif" }}>
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <WhatsAppForm
        id="formulario"
        title="Solicite seu orçamento"
        dark={true}
        fields={[
          { name: "nome", label: "Seu nome", type: "text" },
          { name: "empresa", label: "Empresa", type: "text" },
          { name: "servico", label: "Serviço de interesse", type: "select", options: ["Locação de Caminhões", "Locação de Equipamentos", "Compra e Venda", "Outro"] },
          { name: "mensagem", label: "Descreva sua necessidade", type: "text" },
        ]}
        buildMessage={(v) =>
          `Olá! Gostaria de um orçamento.\n\nNome: ${v.nome}\nEmpresa: ${v.empresa}\nServiço: ${v.servico}\nMensagem: ${v.mensagem}`
        }
      />
    </>
  );
}
