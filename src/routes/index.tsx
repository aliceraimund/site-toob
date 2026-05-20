import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TiltCard } from "../components/TiltCard";
import { MagneticButton } from "../components/MagneticButton";
import { InfinityDivider } from "../components/InfinityDivider";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toob — Locação de Caminhões e Equipamentos Roll-On" },
      {
        name: "description",
        content:
          "Locação de caminhões e equipamentos roll-on com prazos diários, semanais ou mensais. Sem burocracia, sem contratos longos. Atendimento direto pela Toob.",
      },
    ],
  }),
  component: HomePage,
});

const whyCards = [
  {
    title: "Prazos que fazem sentido",
    body: "Diário, semanal, mensal. Você escolhe o tempo que precisa. Sem mínimo de 12 meses, sem multa por curto prazo.",
  },
  {
    title: "Processo simples",
    body: "Você solicita, recebe proposta, aprova e opera. Sem pilha de documentos, sem semanas de espera.",
  },
  {
    title: "Atendimento direto",
    body: "Fala com quem decide. Sem call center, sem ticket aberto sem resposta.",
  },
  {
    title: "Operação mais sustentável",
    body: "Nossa frota inclui caminhões a gás com redução comprovada de até 99,7% nas emissões de CO₂. Sua operação mais limpa, sem abrir mão da eficiência.",
  },
];

const services = [
  {
    title: "Locação de Caminhões",
    sub: "À combustão e à gás",
    body: "Frota roll-on disponível para operações industriais, logísticas e de gestão de resíduos. Prazos flexíveis e atendimento ágil.",
    cta: "Saiba mais",
    to: "/caminhoes" as const,
  },
  {
    title: "Locação de Equipamentos",
    sub: "Prensas, empilhadeiras, caçambas e mais",
    body: "Mais do que caminhões: uma linha completa de equipamentos para apoiar cada etapa da sua operação.",
    cta: "Saiba mais",
    to: "/equipamentos" as const,
  },
  {
    title: "Compra e Venda",
    sub: "Consulte disponibilidade",
    body: "Portfólio de equipamentos para aquisição. Ou venda o seu ativo direto com quem conhece o mercado.",
    cta: "Ver portfólio",
    to: "/compra-venda" as const,
  },
];

const steps = [
  {
    n: "01",
    title: "Escolha o serviço",
    body: "Acesse a página do serviço que precisa e preencha seus dados: nome, empresa, equipamento desejado e prazo.",
  },
  {
    n: "02",
    title: "Envie pelo WhatsApp",
    body: "Com base nas suas informações, uma mensagem personalizada é montada automaticamente. Basta enviar para a nossa equipe.",
  },
  {
    n: "03",
    title: "Receba a proposta",
    body: "Em horas, não dias. Proposta clara, direta, sem letra miúda. Você aprova e começa a operar.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#0D0D0D] text-white noise-bg">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 70% 30%, rgba(192,57,43,0.18), transparent 60%), linear-gradient(180deg, #161616 0%, #0D0D0D 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }} />
        <div className="container-x relative z-10 pb-24 pt-40">
          <Reveal>
            <div className="eyebrow text-[#C0392B]">Locação de Caminhões e Equipamentos Roll-On</div>
          </Reveal>
          <h1
            className="mt-6 max-w-5xl font-display text-white"
            style={{ fontSize: "clamp(56px, 8vw, 96px)", lineHeight: 1 }}
          >
            <div><TextReveal>Toob: locações de prazos</TextReveal></div>
            <div><TextReveal>flexíveis para a sua empresa.</TextReveal></div>
          </h1>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl font-sans-body text-[18px] text-[#9a9a9a]">
              Soluções completas e adaptáveis para a sua operação. Diárias, semanais ou mensais.
              Sem burocracia, sem contratos longos.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton as={Link} to="/contato" className="btn-primary">
                Solicitar Orçamento <ArrowRight size={18} />
              </MagneticButton>
              <a href="#servicos" className="btn-outline">
                Conheça nossos serviços <ArrowDown size={18} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mt-10 font-sans-body text-[13px] font-medium text-white/85">
              ✓ Contratos diários, semanais ou mensais · ✓ Disponibilidade ágil · ✓ Atendimento direto
            </p>
          </Reveal>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
          <ChevronDown className="bounce-soft" size={28} />
        </div>
      </section>

      <InfinityDivider />

      {/* WHY */}
      <section className="bg-[#F5F5F5] py-24">
        <div className="container-x">
          <Reveal><div className="eyebrow text-[#C0392B]">É assim que trabalhamos.</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 font-display text-[#0D0D0D]" style={{ fontSize: "clamp(44px,6vw,64px)" }}>
              <TextReveal>Por que a Toob?</TextReveal>
            </h2>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2">
            {whyCards.map((c) => (
              <RevealItem key={c.title}>
                <TiltCard className="h-full bg-white p-6 shadow-sm" style={{ borderLeft: "4px solid #C0392B" }}>
                  <h3 className="font-display text-3xl text-[#0D0D0D]">{c.title}</h3>
                  <p className="mt-4 font-sans-body text-[15px] leading-relaxed text-[#5D5D5D]">{c.body}</p>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <InfinityDivider />

      {/* SERVICES */}
      <section id="servicos" className="bg-[#0D0D0D] py-24 text-white">
        <div className="container-x">
          <Reveal><div className="eyebrow text-[#C0392B]">O que oferecemos</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 max-w-3xl font-display text-white" style={{ fontSize: "clamp(44px,6vw,64px)" }}>
              <TextReveal>Soluções para cada etapa da sua operação.</TextReveal>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl font-sans-body text-[#9a9a9a]">
              Da locação pontual ao equipamento certo para o longo prazo. A Toob tem o que sua empresa precisa.
            </p>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <RevealItem key={s.title}>
                <TiltCard
                  className="group flex h-full flex-col bg-[#161616] p-7 transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(192,57,43,0.6)]"
                  style={{ borderTop: "2px solid #C0392B" }}
                >
                  <h3 className="font-display text-3xl text-white">{s.title}</h3>
                  <div className="mt-1 font-sans-body text-sm text-[#C0392B]">{s.sub}</div>
                  <p className="mt-5 flex-1 font-sans-body text-[15px] leading-relaxed text-white/75">{s.body}</p>
                  <Link
                    to={s.to}
                    className="mt-8 inline-flex items-center gap-2 font-display text-lg uppercase tracking-[0.1em] text-[#C0392B] transition group-hover:gap-3"
                  >
                    {s.cta} <ArrowRight size={18} />
                  </Link>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* HOW IT WORKS — pinned scroll */}
      <PinnedSteps />

      {/* CTA FINAL */}
      <section className="bg-[#C0392B] py-28 text-white">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="mx-auto max-w-4xl font-display" style={{ fontSize: "clamp(48px,7vw,72px)" }}>
              <TextReveal>Pronto para destravar sua operação?</TextReveal>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl font-sans-body text-white/80">
              Fale com a Toob agora. Sem enrolação, sem contrato longo obrigatório.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                as="a"
                href={`https://wa.me/${WHATS_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white px-8 py-5 font-display text-lg uppercase tracking-[0.1em] text-[#0D0D0D] transition hover:bg-white/90"
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

function PinnedSteps() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      const idx = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-[#F5F5F5]">
      <div className="container-x pt-24">
        <Reveal><div className="eyebrow text-[#C0392B]">Como funciona</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 max-w-3xl font-display text-[#0D0D0D]" style={{ fontSize: "clamp(44px,6vw,64px)" }}>
            <TextReveal>Em 3 passos, seu equipamento em operação.</TextReveal>
          </h2>
        </Reveal>
      </div>
      <div ref={wrapRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
        <div className="sticky top-[72px] flex h-[calc(100vh-72px)] items-center">
          <div className="container-x grid w-full items-center gap-8 md:grid-cols-2">
            <div className="relative h-[40vh] md:h-[60vh]">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="absolute inset-0 flex items-center justify-start font-display leading-none text-[#EEEEEE]"
                  style={{ fontSize: "20vw" }}
                  animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 40 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  {s.n}
                </motion.div>
              ))}
            </div>
            <div className="relative">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="absolute inset-0"
                  animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 30 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="eyebrow text-[#C0392B]">Passo {s.n}</div>
                  <h3 className="mt-3 font-display text-[#0D0D0D]" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
                    {s.title}
                  </h3>
                  <p className="mt-6 max-w-lg font-sans-body text-[17px] leading-relaxed text-[#5D5D5D]">
                    {s.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
