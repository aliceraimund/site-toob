import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealStagger, RevealItem, TextReveal } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { HeroDark } from "./caminhoes";
import { MagneticButton } from "../components/MagneticButton";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Toob — Locação ágil e sem burocracia" },
      {
        name: "description",
        content:
          "A Toob é especializada em locação de caminhões roll-on e equipamentos com prazos flexíveis, atendimento direto e compromisso ambiental real.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  const cards = [
    { title: "Flexibilidade real", body: "Diário, semanal, mensal. O prazo é seu. Sem mínimo imposto, sem multa por curto prazo. Sua operação manda." },
    { title: "Agilidade no processo", body: "Da solicitação à proposta em horas. Você fala com quem decide, sem intermediários, sem fila de atendimento." },
    { title: "Compromisso com o resultado", body: "Equipamento disponível, entrega no prazo combinado. Sem promessa vazia." },
  ];
  return (
    <>
      <HeroDark
        eyebrow="Sobre Nós"
        title="Toob: agilidade e flexibilidade que o mercado tradicional não entrega."
        subtitle="Nascemos para resolver o que o mercado ignorava. A necessidade de locação rápida, sem burocracia e sem contrato longo."
      />

      <section className="bg-white py-24">
        <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <Reveal><div className="eyebrow text-[#C0392B]">Quem somos</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 font-display text-[#0D0D0D]" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
                <TextReveal>Locação resolvida em horas.</TextReveal>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 font-sans-body text-[16px] leading-relaxed text-[#5D5D5D]">
                A Toob é uma empresa especializada em locação de caminhões roll-on, caçambas e equipamentos
                para operações industriais, logísticas e de gestão de resíduos. Atuamos com um modelo
                diferente do mercado tradicional: prazos flexíveis, processo simples e atendimento direto.
                Enquanto o mercado exige contratos longos e burocracia, a Toob resolve em horas. Nossos
                clientes são indústrias, construtoras, empresas de reciclagem, operadores logísticos e
                qualquer operação que precise de equipamento agora, sem abrir mão da qualidade e da
                confiabilidade.
              </p>
            </Reveal>
          </div>
          <div className="flex items-center justify-center" style={{ perspective: 1000 }}>
            <img
              src="/logos/Símbolo Toob.png"
              alt=""
              aria-hidden
              className="spin-y"
              style={{ width: "min(380px,80%)", height: "auto", filter: "drop-shadow(0 20px 60px rgba(192,57,43,0.35))" }}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] py-24 text-white">
        <div className="container-x">
          <Reveal><div className="eyebrow text-[#C0392B]">Como trabalhamos</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 max-w-3xl font-display" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
              <TextReveal>Um jeito direto de fazer locação.</TextReveal>
            </h2>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-6 md:grid-cols-3">
            {cards.map((c) => (
              <RevealItem key={c.title}>
                <TiltCard className="h-full bg-[#161616] p-7" style={{ borderTop: "2px solid #C0392B" }}>
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <p className="mt-4 font-sans-body text-sm leading-relaxed text-white/75">{c.body}</p>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal><div className="eyebrow text-[#C0392B]">Compromisso ambiental</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 max-w-3xl font-display text-[#0D0D0D]" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
              <TextReveal>Sua operação mais eficiente. E mais verde.</TextReveal>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-3xl font-sans-body text-[16px] leading-relaxed text-[#5D5D5D]">
              A Toob acredita que eficiência operacional e responsabilidade ambiental não são opostos.
              São a mesma decisão. Por isso, nossa frota inclui caminhões a gás com redução comprovada
              de 15% a 99,7% nas emissões de CO₂, com base na metodologia GHG Protocol. Cada veículo
              é 100% rastreado por telemetria e emite inventário de emissões mensalmente, dados que
              seus relatórios de sustentabilidade e exigências ESG podem usar diretamente.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Stat value={99.7} decimals={1} suffix="%" label="de redução em emissões de CO₂" prefix="até " />
            <Stat value={100} suffix="%" label="dos veículos rastreados com telemetria" />
            <Stat value={15} suffix="%" label="de redução mínima nas emissões" prefix="a partir de " />
          </div>
        </div>
      </section>

      <section className="bg-[#C0392B] py-24 text-white">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
              <TextReveal>Quer saber mais sobre como a Toob pode ajudar sua operação?</TextReveal>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href={`https://wa.me/${WHATS_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white px-8 py-5 font-display text-lg uppercase tracking-[0.1em] text-[#0D0D0D] hover:bg-white/90"
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

function Stat({
  value, decimals = 0, suffix, prefix, label,
}: { value: number; decimals?: number; suffix?: string; prefix?: string; label: string }) {
  return (
    <Reveal>
      <div className="border-t-2 border-[#C0392B] pt-6">
        <div className="font-display text-[#0D0D0D]" style={{ fontSize: "clamp(48px,6vw,80px)", lineHeight: 1 }}>
          <AnimatedCounter value={value} decimals={decimals} suffix={suffix} prefix={prefix} />
        </div>
        <p className="mt-4 font-sans-body text-sm text-[#5D5D5D]">{label}</p>
      </div>
    </Reveal>
  );
}
