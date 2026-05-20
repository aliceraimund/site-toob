import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, ChevronDown, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Reveal, HeroReveal, RevealStagger, RevealItem } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { MagneticButton } from "../components/MagneticButton";
import { InfinityDivider } from "../components/InfinityDivider";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toob — Locação de Caminhões e Equipamentos Roll-On" },
      { name: "description", content: "Locação de caminhões roll-on e equipamentos com prazos diários, semanais ou mensais. Sem burocracia, sem contratos longos." },
    ],
  }),
  component: HomePage,
});

const whyCards = [
  {
    icon: "⏱",
    title: "Prazos que fazem sentido",
    body: "Diário, semanal, mensal. Você escolhe o tempo que precisa. Sem mínimo de 12 meses, sem multa por curto prazo.",
  },
  {
    icon: "⚡",
    title: "Processo simples",
    body: "Você solicita, recebe proposta, aprova e opera. Sem pilha de documentos, sem semanas de espera.",
  },
  {
    icon: "🤝",
    title: "Atendimento direto",
    body: "Fala com quem decide. Sem call center, sem ticket aberto sem resposta.",
  },
  {
    icon: "🌱",
    title: "Operação mais sustentável",
    body: "Nossa frota inclui caminhões a gás com redução comprovada de até 99,7% nas emissões de CO₂.",
  },
];

const services = [
  {
    title: "Locação de Caminhões",
    sub: "À combustão e à gás",
    body: "Frota roll-on para operações industriais, logísticas e de resíduos. Prazos flexíveis e atendimento ágil.",
    cta: "Saiba Mais",
    to: "/caminhoes" as const,
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=70&auto=format",
  },
  {
    title: "Locação de Equipamentos",
    sub: "Prensas, empilhadeiras, caçambas e mais",
    body: "Uma linha completa de equipamentos para apoiar cada etapa da sua operação.",
    cta: "Saiba Mais",
    to: "/equipamentos" as const,
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=70&auto=format",
  },
  {
    title: "Compra e Venda",
    sub: "Consulte disponibilidade",
    body: "Portfólio de equipamentos para aquisição. Ou venda o seu ativo direto com quem conhece o mercado.",
    cta: "Ver Portfólio",
    to: "/compra-venda" as const,
    img: "https://images.unsplash.com/photo-1565793979229-94041c8e0c03?w=800&q=70&auto=format",
  },
];

const steps = [
  { n: "01", title: "Escolha o serviço", body: "Acesse a página do serviço que precisa e preencha seus dados: nome, empresa, equipamento desejado e prazo." },
  { n: "02", title: "Envie pelo WhatsApp", body: "Com base nas suas informações, uma mensagem personalizada é montada automaticamente. Basta enviar para a nossa equipe." },
  { n: "03", title: "Receba a proposta", body: "Em horas, não dias. Proposta clara, direta, sem letra miúda. Você aprova e começa a operar." },
];

function HomePage() {
  return (
    <>
      <HeroSection />
      <InfinityDivider />
      <WhySection />
      <InfinityDivider />
      <ServicesSection />
      <HowItWorks />
      <CtaSection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden text-white"
      style={{
        backgroundImage: [
          "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.45) 40%, rgba(13,13,13,0.92) 100%)",
          "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80&auto=format')",
        ].join(", "),
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      {/* Red glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(192,57,43,0.22), transparent 70%)" }}
      />

      <div className="container-x relative z-10 w-full pb-20 pt-40">
        <HeroReveal delay={0}>
          <div className="eyebrow" style={{ color: "#C0392B" }}>
            Locação de Caminhões e Equipamentos Roll-On
          </div>
        </HeroReveal>

        <HeroReveal delay={0.1}>
          <h1
            className="font-display mt-5 max-w-5xl text-white"
            style={{ fontSize: "clamp(52px, 7.5vw, 92px)", lineHeight: 1.02 }}
          >
            Toob: locações de prazos flexíveis para a sua empresa.
          </h1>
        </HeroReveal>

        <HeroReveal delay={0.22}>
          <p
            className="font-sans-body mt-7 max-w-xl"
            style={{ fontSize: 18, color: "rgba(255,255,255,0.75)", lineHeight: 1.65 }}
          >
            Soluções completas e adaptáveis para a sua operação. Diárias, semanais ou mensais.
            Sem burocracia, sem contratos longos.
          </p>
        </HeroReveal>

        <HeroReveal delay={0.34}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton as={Link} to="/contato" className="btn-primary">
              Solicitar Orçamento <ArrowRight size={18} />
            </MagneticButton>
            <a href="#servicos" className="btn-outline">
              Conheça Nossos Serviços <ArrowDown size={18} />
            </a>
          </div>
        </HeroReveal>

        <HeroReveal delay={0.46}>
          <div className="mt-8 flex flex-wrap gap-5">
            {["Contratos diários, semanais ou mensais", "Disponibilidade ágil", "Atendimento direto"].map((t) => (
              <span
                key={t}
                className="font-sans-body flex items-center gap-2"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}
              >
                <Check size={14} color="#C0392B" strokeWidth={3} />
                {t}
              </span>
            ))}
          </div>
        </HeroReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="bounce-soft" size={28} color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="py-28" style={{ background: "#F5F5F5" }}>
      <div className="container-x">
        <Reveal><div className="eyebrow" style={{ color: "#C0392B" }}>É assim que trabalhamos.</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-3" style={{ fontSize: "clamp(44px,6vw,64px)", color: "#0D0D0D" }}>
            Por que a Toob?
          </h2>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2">
          {whyCards.map((c) => (
            <RevealItem key={c.title}>
              <TiltCard className="card-light h-full p-8" style={{ borderLeft: "4px solid #C0392B" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{c.icon}</div>
                <h3 className="font-display" style={{ fontSize: 28, color: "#0D0D0D" }}>{c.title}</h3>
                <p className="font-sans-body mt-4" style={{ fontSize: 15, lineHeight: 1.7, color: "#5D5D5D" }}>
                  {c.body}
                </p>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="py-28" style={{ background: "#0D0D0D" }}>
      <div className="container-x">
        <Reveal><div className="eyebrow" style={{ color: "#C0392B" }}>O que oferecemos</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-3 max-w-3xl text-white" style={{ fontSize: "clamp(44px,6vw,64px)" }}>
            Soluções para cada etapa da sua operação.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-sans-body mt-5 max-w-2xl" style={{ color: "#9a9a9a", fontSize: 17 }}>
            Da locação pontual ao equipamento certo para o longo prazo. A Toob tem o que sua empresa precisa.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-7 md:grid-cols-3">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <TiltCard className="card-dark group flex h-full flex-col overflow-hidden">
                <div
                  className="relative overflow-hidden"
                  style={{ height: 200 }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(22,22,22,0.95) 100%)" }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: "#C0392B" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-white" style={{ fontSize: 30 }}>{s.title}</h3>
                  <div className="font-sans-body mt-1 text-sm" style={{ color: "#C0392B", fontWeight: 600 }}>{s.sub}</div>
                  <p className="font-sans-body mt-5 flex-1" style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}>
                    {s.body}
                  </p>
                  <Link
                    to={s.to}
                    className="font-display mt-8 inline-flex items-center gap-2 uppercase tracking-widest transition-all group-hover:gap-4"
                    style={{ fontSize: 15, color: "#C0392B" }}
                  >
                    {s.cta} <ArrowRight size={17} />
                  </Link>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

function HowItWorks() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      setActive(Math.min(steps.length - 1, Math.floor(progress * steps.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section style={{ background: "#fff" }}>
      <div className="container-x pt-28">
        <Reveal><div className="eyebrow" style={{ color: "#C0392B" }}>Como funciona</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-3 max-w-3xl" style={{ fontSize: "clamp(44px,6vw,64px)", color: "#0D0D0D" }}>
            Em 3 passos, seu equipamento em operação.
          </h2>
        </Reveal>
      </div>

      <div ref={wrapRef} style={{ height: `${steps.length * 100}vh` }} className="relative">
        <div className="sticky flex items-center" style={{ top: 72, height: "calc(100vh - 72px)" }}>
          <div className="container-x grid w-full items-center gap-12 md:grid-cols-2">
            {/* Big number */}
            <div className="relative" style={{ height: "40vh" }}>
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="font-display absolute inset-0 flex items-center justify-start leading-none select-none"
                  style={{ fontSize: "22vw", color: "#EBEBEB", pointerEvents: "none" }}
                  animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 50 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {s.n}
                </motion.div>
              ))}
            </div>

            {/* Text content */}
            <div className="relative" style={{ minHeight: 220 }}>
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="absolute inset-0"
                  animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 30 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="eyebrow" style={{ color: "#C0392B" }}>Passo {s.n}</div>
                  <h3 className="font-display mt-4" style={{ fontSize: "clamp(36px,4.5vw,54px)", color: "#0D0D0D" }}>
                    {s.title}
                  </h3>
                  <p className="font-sans-body mt-6 max-w-lg" style={{ fontSize: 17, lineHeight: 1.7, color: "#5D5D5D" }}>
                    {s.body}
                  </p>
                  {/* Step dots */}
                  <div className="mt-10 flex gap-3">
                    {steps.map((_, j) => (
                      <div
                        key={j}
                        style={{
                          width: j === i ? 28 : 8,
                          height: 8,
                          borderRadius: 100,
                          background: j === i ? "#C0392B" : "#e0e0e0",
                          transition: "all .4s ease",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-32 text-white" style={{ background: "#C0392B" }}>
      <div className="container-x text-center">
        <Reveal>
          <h2 className="font-display mx-auto max-w-4xl" style={{ fontSize: "clamp(48px,7vw,72px)" }}>
            Pronto para destravar sua operação?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-sans-body mx-auto mt-6 max-w-2xl" style={{ fontSize: 18, opacity: 0.85 }}>
            Fale com a Toob agora. Sem enrolação, sem contrato longo obrigatório.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <MagneticButton
              as="a"
              href={`https://wa.me/${WHATS_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 font-display text-lg uppercase tracking-widest transition"
              style={{
                background: "#fff",
                color: "#0D0D0D",
                borderRadius: 12,
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              Falar pelo WhatsApp <ArrowRight size={20} />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
