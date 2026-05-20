import { createFileRoute } from "@tanstack/react-router";
import { Check, Calendar, CalendarDays, CalendarRange } from "lucide-react";
import { Reveal, RevealStagger, RevealItem, TextReveal } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { WhatsAppForm } from "../components/WhatsAppForm";

export const Route = createFileRoute("/caminhoes")({
  head: () => ({
    meta: [
      { title: "Locação de Caminhões Roll-On — Toob" },
      {
        name: "description",
        content:
          "Caminhões roll-on a combustão e a gás para locação com prazos diários, semanais ou mensais. Frota com telemetria 100% ativa e redução de até 99,7% nas emissões.",
      },
    ],
  }),
  component: CaminhoesPage,
});

function CaminhoesPage() {
  const message = (v: Record<string, string>) =>
    `Olá, Toob! Me chamo ${v.nome}, da empresa ${v.empresa}, atuamos no ramo de ${v.ramo}. Tenho interesse na locação de um caminhão roll-on ${v.tipo}, pelo período ${v.prazo}, com início previsto para ${v.inicio}. Aguardo contato.`;

  return (
    <>
      <HeroDark
        eyebrow="Serviços · Locação de Caminhões"
        title="Caminhões roll-on disponíveis quando você precisa. Pelo tempo que fizer sentido."
        subtitle="Frota a combustão e a gás para operações industriais, logísticas e de resíduos. Prazos diários, semanais ou mensais. Sem contratos longos, sem burocracia."
      />

      <section className="bg-[#F5F5F5] py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <TiltCard className="h-full bg-[#0D0D0D] p-8 text-white">
              <h3 className="font-display text-4xl">Caminhão Roll-On a Combustão</h3>
              <p className="mt-5 font-sans-body text-[15px] leading-relaxed text-white/75">
                Frota robusta e versátil para operações de qualquer escala. Ideal para movimentação
                de caçambas, resíduos industriais, cargas especiais e apoio logístico em rotas consolidadas.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Infraestrutura diesel", "Alta disponibilidade", "Curto prazo"].map((t) => (
                  <span key={t} className="border border-white/25 px-3 py-1 font-sans-body text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <a href="#form" className="btn-primary mt-8">Tenho interesse</a>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard
              className="relative h-full bg-[#0D0D0D] p-8 text-white"
              style={{ borderTop: "4px solid #C0392B" }}
            >
              <span className="absolute right-6 top-6 bg-[#C0392B] px-3 py-1 font-sans-body text-[11px] font-semibold uppercase tracking-[0.15em] text-white">
                Operação sustentável
              </span>
              <h3 className="font-display text-4xl">Caminhão Roll-On a Gás</h3>
              <p className="mt-5 font-sans-body text-[15px] leading-relaxed text-white/75">
                Mesma eficiência operacional do caminhão a combustão, com impacto ambiental
                comprovadamente menor. Apto para longas distâncias e com telemetria 100% ativa.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "↓ até 99,7% nas emissões de CO₂",
                  "100% rastreados com telemetria",
                  "Inventário mensal de emissões",
                  "Apto para longas distâncias",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 font-sans-body text-sm text-white/85">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#C0392B]" /> {t}
                  </li>
                ))}
              </ul>
              <a href="#form" className="btn-primary mt-8">Tenho interesse</a>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <PrazosSection />

      <WhatsAppForm
        id="form"
        title="Solicite sua proposta"
        fields={[
          { name: "nome", label: "Nome completo", type: "text" },
          { name: "empresa", label: "Empresa", type: "text" },
          { name: "ramo", label: "Ramo de atuação", type: "text" },
          { name: "tipo", label: "Tipo de caminhão", type: "select", options: ["À combustão", "À gás", "Ainda não sei"] },
          { name: "prazo", label: "Tempo de locação", type: "select", options: ["Diário", "Semanal", "Mensal", "A definir"] },
          { name: "inicio", label: "Previsão de início", type: "date" },
        ]}
        buildMessage={message}
      />
    </>
  );
}

export function HeroDark({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative flex min-h-[60vh] items-end bg-[#0D0D0D] text-white noise-bg">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 400px at 80% 30%, rgba(192,57,43,0.18), transparent 60%), linear-gradient(180deg,#161616,#0D0D0D)",
        }}
      />
      <div className="container-x relative z-10 py-24">
        <Reveal>
          <div className="eyebrow text-[#C0392B]">{eyebrow}</div>
        </Reveal>
        <h1 className="mt-5 max-w-4xl font-display text-white" style={{ fontSize: "clamp(40px,5.5vw,72px)" }}>
          <TextReveal>{title}</TextReveal>
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl font-sans-body text-[17px] text-[#9a9a9a]">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function PrazosSection() {
  const items = [
    { icon: Calendar, label: "Diário", body: "Para necessidades pontuais." },
    { icon: CalendarDays, label: "Semanal", body: "Para projetos de curta duração." },
    { icon: CalendarRange, label: "Mensal", body: "Para operações contínuas." },
  ];
  return (
    <section className="bg-[#0D0D0D] py-24 text-white">
      <div className="container-x">
        <Reveal><div className="eyebrow text-[#C0392B]">Prazos</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 max-w-2xl font-display text-white" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
            <TextReveal>Você escolhe o prazo. A gente entrega.</TextReveal>
          </h2>
        </Reveal>
        <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, label, body }) => (
            <RevealItem key={label}>
              <TiltCard className="h-full bg-[#161616] p-8" style={{ borderTop: "2px solid #C0392B" }}>
                <Icon size={32} className="text-[#C0392B]" />
                <div className="mt-6 font-display text-3xl">{label}</div>
                <p className="mt-3 font-sans-body text-sm text-white/70">{body}</p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
