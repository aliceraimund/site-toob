import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { HeroReveal, Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "Contato — Toob" }] }),
  component: ContatoPage,
});

const links = [
  { label: "Locação de Caminhões", to: "/caminhoes" },
  { label: "Locação de Equipamentos", to: "/equipamentos" },
  { label: "Compra e Venda", to: "/compra-venda" },
];

function ContatoPage() {
  return (
    <>
      <section
        className="relative flex min-h-[50vh] items-end overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(192,57,43,0.2), transparent 70%)" }}
        />
        <div className="container-x relative z-10 w-full pb-20 pt-36">
          <HeroReveal>
            <div className="eyebrow" style={{ color: "#C0392B" }}>Contato</div>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1 className="font-display mt-4 text-white" style={{ fontSize: "clamp(52px,7vw,88px)" }}>
              Fale com a Toob.
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.22}>
            <p className="font-sans-body mt-5 max-w-xl" style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.65 }}>
              Sem formulário longo, sem fila de atendimento. Manda uma mensagem pelo WhatsApp e nossa equipe responde com agilidade.
            </p>
          </HeroReveal>
        </div>
      </section>

      <section className="py-28" style={{ background: "#F5F5F5" }}>
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            {/* WhatsApp CTA principal */}
            <Reveal>
              <div
                style={{
                  background: "#0D0D0D",
                  borderRadius: 20,
                  padding: "48px 40px",
                  textAlign: "center",
                  marginBottom: 48,
                }}
              >
                <div
                  style={{ width: 72, height: 72, borderRadius: 18, background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}
                >
                  <MessageCircle size={32} color="#25D366" />
                </div>
                <h2 className="font-display text-white" style={{ fontSize: "clamp(32px,4vw,48px)" }}>
                  A forma mais rápida de falar com a Toob.
                </h2>
                <p className="font-sans-body mt-4" style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  Nossa equipe responde em horas, não dias. Direto no WhatsApp, sem intermediários.
                </p>
                <a
                  href={`https://wa.me/${WHATS_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp mt-8 inline-flex"
                >
                  Abrir WhatsApp <ArrowRight size={18} />
                </a>
              </div>
            </Reveal>

            {/* Info cards */}
            <RevealStagger className="grid gap-5 sm:grid-cols-3 mb-14">
              {[
                { icon: <Mail size={22} color="#C0392B" />, label: "E-mail", value: "contato@toob.com.br" },
                { icon: <MapPin size={22} color="#C0392B" />, label: "Localização", value: "São Paulo, SP" },
                { icon: <Clock size={22} color="#C0392B" />, label: "Horário", value: "Seg–Sex, 8h às 18h" },
              ].map((item) => (
                <RevealItem key={item.label}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      padding: "28px 24px",
                      border: "1px solid #eee",
                      textAlign: "center",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>{item.icon}</div>
                    <div className="eyebrow" style={{ color: "#5D5D5D", marginBottom: 6 }}>{item.label}</div>
                    <div className="font-sans-body" style={{ fontSize: 15, fontWeight: 600, color: "#0D0D0D" }}>{item.value}</div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            {/* Links rápidos */}
            <Reveal>
              <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: 32 }}>
                <div className="eyebrow text-center" style={{ color: "#5D5D5D", marginBottom: 20 }}>Links rápidos</div>
                <div className="flex flex-wrap justify-center gap-4">
                  {links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to as any}
                      className="font-sans-body inline-flex items-center gap-2 transition"
                      style={{ fontSize: 14, fontWeight: 600, color: "#0D0D0D", textDecoration: "underline", textUnderlineOffset: 4 }}
                    >
                      {l.label} <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
