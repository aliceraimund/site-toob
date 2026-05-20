import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Package } from "lucide-react";
import { HeroReveal, Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { WhatsAppForm } from "../components/WhatsAppForm";

export const Route = createFileRoute("/equipamentos")({
  head: () => ({ meta: [{ title: "Locação de Equipamentos — Toob" }] }),
  component: EquipamentosPage,
});

const equipamentos = [
  { name: "Prensa", icon: "⚙️", desc: "Para compactação de resíduos industriais e recicláveis." },
  { name: "Empilhadeira", icon: "🏭", desc: "Movimentação de cargas em ambientes internos e externos." },
  { name: "Cavalo Mecânico", icon: "🚛", desc: "Tração para operações logísticas de longa distância." },
  { name: "Syder", icon: "🔩", desc: "Equipamento de apoio para operações especializadas." },
  { name: "Caçamba Roll-On", icon: "📦", desc: "Coleta e transporte de resíduos industriais e entulho." },
  { name: "Outros Equipamentos", icon: "➕", desc: "Consulte disponibilidade para necessidades específicas." },
];

const prazos = [
  { label: "Diário", desc: "Para necessidades pontuais e urgentes." },
  { label: "Semanal", desc: "Projetos com prazo definido." },
  { label: "Mensal", desc: "Operações contínuas e recorrentes." },
];

function EquipamentosPage() {
  return (
    <>
      <section
        className="relative flex min-h-[65vh] items-end overflow-hidden text-white"
        style={{
          backgroundImage: [
            "linear-gradient(to bottom, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.5) 40%, rgba(13,13,13,0.95) 100%)",
            "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80&auto=format')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-x relative z-10 w-full pb-20 pt-36">
          <HeroReveal>
            <div className="eyebrow" style={{ color: "#C0392B" }}>Serviços · Locação de Equipamentos</div>
          </HeroReveal>
          <HeroReveal delay={0.1}>
            <h1 className="font-display mt-5 max-w-4xl text-white" style={{ fontSize: "clamp(48px,6.5vw,80px)", lineHeight: 1.05 }}>
              Mais do que caminhões. Equipamentos completos para a sua operação.
            </h1>
          </HeroReveal>
          <HeroReveal delay={0.22}>
            <p className="font-sans-body mt-6 max-w-2xl" style={{ fontSize: 17, color: "rgba(255,255,255,0.72)", lineHeight: 1.65 }}>
              A Toob disponibiliza uma linha de equipamentos para apoiar operações industriais, logísticas e de resíduos,
              com os mesmos prazos flexíveis que só a Toob oferece.
            </p>
          </HeroReveal>
        </div>
      </section>

      <section className="py-28" style={{ background: "#F5F5F5" }}>
        <div className="container-x">
          <Reveal><div className="eyebrow" style={{ color: "#C0392B" }}>Portfólio</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-3" style={{ fontSize: "clamp(40px,5.5vw,60px)", color: "#0D0D0D" }}>
              Equipamentos disponíveis para locação.
            </h2>
          </Reveal>

          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {equipamentos.map((eq) => (
              <RevealItem key={eq.name}>
                <TiltCard className="card-light flex h-full flex-col p-7">
                  <div style={{ fontSize: 36, marginBottom: 16 }}>{eq.icon}</div>
                  <h3 className="font-display" style={{ fontSize: 28, color: "#0D0D0D" }}>{eq.name}</h3>
                  <p className="font-sans-body mt-3 flex-1" style={{ fontSize: 14, lineHeight: 1.65, color: "#5D5D5D" }}>
                    {eq.desc}
                  </p>
                  <a
                    href="#formulario"
                    className="font-display mt-6 inline-flex items-center gap-2 uppercase tracking-widest"
                    style={{ fontSize: 13, color: "#C0392B" }}
                  >
                    {eq.name === "Outros Equipamentos" ? "Consultar Disponibilidade" : "Tenho Interesse"} <ArrowRight size={15} />
                  </a>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="py-20" style={{ background: "#0D0D0D" }}>
        <div className="container-x">
          <Reveal>
            <h2 className="font-display text-center text-white" style={{ fontSize: "clamp(36px,5vw,56px)" }}>
              Prazos que se adaptam a você.
            </h2>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {prazos.map((p) => (
              <RevealItem key={p.label}>
                <div style={{ background: "#161616", borderRadius: 16, padding: "32px 24px", border: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
                  <h3 className="font-display text-white" style={{ fontSize: 40 }}>{p.label}</h3>
                  <p className="font-sans-body mt-3" style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <WhatsAppForm
        id="formulario"
        title="Solicite sua proposta"
        fields={[
          { name: "nome", label: "Nome completo", type: "text" },
          { name: "empresa", label: "Empresa", type: "text" },
          { name: "ramo", label: "Ramo de atuação", type: "text" },
          { name: "equipamento", label: "Equipamento de interesse", type: "select", options: ["Prensa", "Empilhadeira", "Cavalo Mecânico", "Syder", "Caçamba Roll-On", "Outro"] },
          { name: "prazo", label: "Tempo de locação", type: "select", options: ["Diário", "Semanal", "Mensal", "A definir"] },
          { name: "inicio", label: "Previsão de início", type: "date" },
        ]}
        buildMessage={(v) =>
          `Olá, Toob! Me chamo ${v.nome}, da empresa ${v.empresa}, atuamos no ramo de ${v.ramo}. Tenho interesse na locação de ${v.equipamento}, pelo período ${v.prazo}, com início previsto para ${v.inicio}. Aguardo contato.`
        }
      />
    </>
  );
}
