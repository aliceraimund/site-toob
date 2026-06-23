import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Clock, MessageCircle, Check } from "lucide-react";
import { WhatsAppForm, WHATS_NUMBER } from "../components/WhatsAppForm";
import { Seo } from "../components/Seo";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <Seo
        title="Contato — Toob Soluções"
        description="Fale com a Toob Soluções. Proposta em horas, atendimento direto com quem decide, sem intermediários e sem formulário perdido."
        path="/contato"
      />
      {/* ── HERO TWO-COLUMN ── */}
      <section style={{ background: "#fff", padding: "clamp(100px, 14vw, 160px) 0 96px" }}>
        <div className="container-x">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 48,
              alignItems: "start",
            }}
          >
            {/* ── ESQUERDA ── */}
            <div>
              <div className="eyebrow">Fale com a Toob</div>
              <h1
                className="font-display"
                style={{ fontSize: "clamp(40px, 5.5vw, 68px)", marginTop: 16, color: "#0D0D0D", lineHeight: 1.05 }}
              >
                Proposta em horas. Atendimento direto.
              </h1>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 17,
                  lineHeight: 1.65,
                  color: "#5D5D5D",
                  fontFamily: "Nunito, sans-serif",
                  maxWidth: 440,
                }}
              >
                Você fala diretamente com quem decide. Sem intermediários, sem
                formulário perdido, sem espera sem resposta.
              </p>

              {/* Info list */}
              <div style={{ marginTop: 40, borderTop: "1px solid #E5E5E5" }}>
                {[
                  {
                    icon: <Mail size={17} color="#FF0000" />,
                    label: "E-mail",
                    value: "contato@toob.com.br",
                    href: "mailto:contato@toob.com.br",
                    badge: null,
                  },
                  {
                    icon: <MapPin size={17} color="#FF0000" />,
                    label: "Localização",
                    value: "São Paulo, SP, Brasil",
                    href: null,
                    badge: null,
                  },
                  {
                    icon: <Clock size={17} color="#FF0000" />,
                    label: "Horário de atendimento",
                    value: "Seg a sex, das 8h às 18h",
                    href: null,
                    badge: "Online agora",
                  },
                ].map((info) => (
                  <div
                    key={info.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "18px 0",
                      borderBottom: "1px solid #E5E5E5",
                    }}
                  >
                    {/* Ícone */}
                    <div
                      style={{
                        width: 38,
                        height: 38,
                        background: "#FEF2F2",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </div>

                    {/* Texto */}
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                          color: "#9CA3AF",
                          fontFamily: "Nunito, sans-serif",
                          marginBottom: 2,
                        }}
                      >
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          style={{
                            fontSize: 15,
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: 600,
                            color: "#0D0D0D",
                            textDecoration: "none",
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div
                          style={{
                            fontSize: 15,
                            fontFamily: "Nunito, sans-serif",
                            fontWeight: 600,
                            color: "#0D0D0D",
                          }}
                        >
                          {info.value}
                        </div>
                      )}
                    </div>

                    {/* Badge */}
                    {info.badge && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: 12,
                          fontFamily: "Nunito, sans-serif",
                          fontWeight: 700,
                          color: "#16A34A",
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            borderRadius: "50%",
                            background: "#22C55E",
                            display: "inline-block",
                          }}
                        />
                        {info.badge}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── DIREITA — card escuro WhatsApp ── */}
            <div
              style={{
                background: "linear-gradient(145deg, #0a1a0c 0%, #0D0D0D 60%)",
                borderRadius: 24,
                padding: "40px 40px 36px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Ícone WA */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "#25D366",
                  borderRadius: 14,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <MessageCircle size={28} color="#fff" />
              </div>

              <h2 className="font-display" style={{ fontSize: "clamp(26px, 3vw, 36px)", color: "#fff" }}>
                Chame no WhatsApp
              </h2>
              <p
                style={{
                  marginTop: 12,
                  fontSize: 15,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                A forma mais rápida de falar com a gente. Atendemos em tempo
                real durante o horário comercial e você já sai com um próximo
                passo.
              </p>

              {/* Checklist */}
              <ul
                style={{
                  marginTop: 24,
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {[
                  "Fala direto com quem decide",
                  "Proposta no mesmo dia",
                  "Sem formulário, sem fila",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      fontFamily: "Nunito, sans-serif",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    <Check size={15} color="#22C55E" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Botão */}
              <a
                href={`https://wa.me/${WHATS_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: "#25D366",
                  color: "#fff",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  letterSpacing: "0.04em",
                  padding: "16px 24px",
                  borderRadius: 12,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5d")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
              >
                <MessageCircle size={19} />
                Enviar mensagem agora
              </a>

              <p
                style={{
                  marginTop: 14,
                  textAlign: "center",
                  fontSize: 13,
                  fontFamily: "Nunito, sans-serif",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                Prefere e-mail?{" "}
                <a
                  href="mailto:contato@toob.com.br"
                  style={{ color: "rgba(255,255,255,0.55)", textDecoration: "underline" }}
                >
                  contato@toob.com.br
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <WhatsAppForm
        id="formulario"
        title="Solicite seu orçamento"
        dark={false}
        sectionBg="#F5F5F5"
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
