import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroReveal, Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { MagneticButton } from "../components/MagneticButton";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/sobre")({
  head: () => ({ meta: [{ title: "Sobre Nós — Toob" }] }),
  component: SobrePage,
});

const valores = [
  { icon: "⚡", title: "Flexibilidade real", body: "Diário, semanal, mensal. O prazo é seu. Sem mínimo imposto, sem multa por curto prazo. Sua operação manda." },
  { icon: "🎯", title: "Agilidade no processo", body: "Da solicitação à proposta em horas. Você fala com quem decide, sem intermediários, sem fila de atendimento." },
  { icon: "✅", title: "Compromisso com o resultado", body: "Equipamento disponível, entrega no prazo combinado. Sem promessa vazia." },
];

const stats = [
  { value: "99,7%", label: "redução em emissões de CO₂" },
  { value: "100%", label: "dos veículos rastreados" },
  { value: "Mensal", label: "inventário de emissões" },
];

function SobrePage() {
  return (
    <>
      <section
        className="relative flex min-h-[65vh] items-end overflow-hidden text-white"
        style={{
          backgroundImage: [
            "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.45) 40%, rgba(13,13,13,0.95) 100%)",
            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80&auto=format')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-x relative z-10 w-full pb-20 pt-36">
          <HeroReveal>
            <div className="eyebrow" style={{ color: "#C0392B" }}>Sobre Nós</div>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1 className="font-display mt-5 max-w-4xl text-white" style={{ fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 1.05 }}>
              Toob: agilidade e flexibilidade que o mercado tradicional não entrega.
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.22}>
            <p className="font-sans-body mt-6 max-w-2xl" style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>
              Nascemos para resolver o que o mercado ignorava: a necessidade de locação rápida,
              sem burocracia e sem contrato longo.
            </p>
          </HeroReveal>
        </div>
      </section>

      {/* Quem somos */}
      <section className="py-28" style={{ background: "#fff" }}>
        <div className="container-x">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <Reveal>
                <div className="eyebrow" style={{ color: "#C0392B" }}>Quem somos</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-display mt-3" style={{ fontSize: "clamp(40px,5vw,58px)", color: "#0D0D0D" }}>
                  Um modelo diferente do mercado tradicional.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-sans-body mt-6" style={{ fontSize: 16, lineHeight: 1.8, color: "#5D5D5D" }}>
                  A Toob é uma empresa especializada em locação de caminhões roll-on, caçambas e equipamentos para
                  operações industriais, logísticas e de gestão de resíduos. Atuamos com um modelo diferente do
                  mercado tradicional: prazos flexíveis, processo simples e atendimento direto.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="font-sans-body mt-5" style={{ fontSize: 16, lineHeight: 1.8, color: "#5D5D5D" }}>
                  Enquanto o mercado exige contratos longos e burocracia, a Toob resolve em horas. Nossos clientes
                  são indústrias, construtoras, empresas de reciclagem, operadores logísticos — qualquer operação que
                  precise de equipamento agora, sem abrir mão da qualidade e da confiabilidade.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div
                style={{
                  background: "#0D0D0D",
                  borderRadius: 24,
                  padding: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: "1",
                }}
              >
                <img
                  src="/logos/Símbolo Toob.png"
                  alt="Símbolo Toob"
                  style={{ width: "60%", height: "auto", animation: "spin-y 10s ease-in-out infinite alternate" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="py-28" style={{ background: "#0D0D0D" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow" style={{ color: "#C0392B" }}>Como trabalhamos</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-3 text-white" style={{ fontSize: "clamp(40px,5.5vw,60px)" }}>
              Três princípios que guiam tudo.
            </h2>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-7 md:grid-cols-3">
            {valores.map((v) => (
              <RevealItem key={v.title}>
                <TiltCard className="card-dark h-full p-8 text-white">
                  <div style={{ fontSize: 40, marginBottom: 20 }}>{v.icon}</div>
                  <h3 className="font-display" style={{ fontSize: 30 }}>{v.title}</h3>
                  <p className="font-sans-body mt-4" style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.6)" }}>
                    {v.body}
                  </p>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Sustentabilidade */}
      <section className="py-28" style={{ background: "#F5F5F5" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow" style={{ color: "#C0392B" }}>Compromisso Ambiental</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-3" style={{ fontSize: "clamp(40px,5.5vw,60px)", color: "#0D0D0D", maxWidth: 700 }}>
              Sua operação mais eficiente. E mais verde.
            </h2>
          </Reveal>
          <div className="mt-10 grid items-start gap-16 md:grid-cols-2">
            <Reveal delay={0.1}>
              <p className="font-sans-body" style={{ fontSize: 16, lineHeight: 1.85, color: "#5D5D5D" }}>
                A Toob acredita que eficiência operacional e responsabilidade ambiental não são opostos. São a mesma
                decisão. Por isso, nossa frota inclui caminhões a gás com redução comprovada de 15% a 99,7% nas
                emissões de CO₂, com base na metodologia GHG Protocol.
              </p>
              <p className="font-sans-body mt-5" style={{ fontSize: 16, lineHeight: 1.85, color: "#5D5D5D" }}>
                Cada veículo é 100% rastreado por telemetria e emite inventário de emissões mensalmente — dados que
                seus relatórios de sustentabilidade e exigências ESG podem usar diretamente. Quando você escolhe a
                frota a gás da Toob, não está só locando um caminhão. Está tornando sua operação parte da solução.
              </p>
            </Reveal>
            <RevealStagger className="flex flex-col gap-5">
              {stats.map((s) => (
                <RevealItem key={s.label}>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 16,
                      padding: "28px 32px",
                      border: "1px solid #eee",
                      borderLeft: "4px solid #C0392B",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="font-display" style={{ fontSize: 48, color: "#C0392B", lineHeight: 1 }}>{s.value}</div>
                    <div className="font-sans-body mt-2" style={{ fontSize: 14, color: "#5D5D5D", fontWeight: 500 }}>{s.label}</div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" style={{ background: "#C0392B" }}>
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(40px,6vw,64px)" }}>
              Quer saber mais sobre como a Toob pode ajudar sua operação?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href={`https://wa.me/${WHATS_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3"
                style={{
                  background: "#fff",
                  color: "#0D0D0D",
                  borderRadius: 12,
                  padding: "18px 40px",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 18,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                }}
              >
                Falar pelo WhatsApp <ArrowRight size={20} />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
