import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { WhatsAppForm } from "../components/WhatsAppForm";
import { HeroDark, PrazosSection } from "./caminhoes";

export const Route = createFileRoute("/equipamentos")({
  head: () => ({
    meta: [
      { title: "Locação de Equipamentos — Toob" },
      {
        name: "description",
        content:
          "Prensas, empilhadeiras, cavalos mecânicos, caçambas roll-on e mais. Locação de equipamentos com prazos flexíveis e atendimento direto.",
      },
    ],
  }),
  component: EquipamentosPage,
});

const equipamentos = [
  { name: "Prensa", path: "M12 4v16M4 12h16" },
  { name: "Empilhadeira", path: "M4 18h12V8h4v10H4z" },
  { name: "Cavalo Mecânico", path: "M3 17h6l3-7h6l3 4v3H3z" },
  { name: "Syder", path: "M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0z M8 12h8" },
  { name: "Caçamba Roll-On", path: "M3 8l4-4h10l4 4v10H3z" },
  { name: "Outros Equipamentos", path: "M5 5h14v14H5z M9 9h6v6H9z" },
];

function EquipamentosPage() {
  const [pre, setPre] = useState<string>("");

  const message = (v: Record<string, string>) =>
    `Olá, Toob! Me chamo ${v.nome}, da empresa ${v.empresa}, atuamos no ramo de ${v.ramo}. Tenho interesse na locação de ${v.equipamento}, pelo período ${v.prazo}, com início previsto para ${v.inicio}. Aguardo contato.`;

  return (
    <>
      <HeroDark
        eyebrow="Serviços · Locação de Equipamentos"
        title="Mais do que caminhões. Equipamentos completos para a sua operação."
        subtitle="A Toob disponibiliza uma linha de equipamentos para apoiar operações industriais, logísticas e de resíduos, com os mesmos prazos flexíveis que só a Toob oferece."
      />

      <section className="bg-[#F5F5F5] py-24">
        <div className="container-x">
          <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {equipamentos.map((e) => (
              <RevealItem key={e.name}>
                <TiltCard className="flex h-full flex-col bg-white p-7" style={{ borderLeft: "4px solid #C0392B" }}>
                  <div className="flex h-20 items-center justify-start">
                    <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="#0D0D0D" strokeWidth="1.5">
                      <path d={e.path} />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-[#0D0D0D]">{e.name}</h3>
                  <a
                    href="#form"
                    onClick={() => setPre(e.name === "Outros Equipamentos" ? "Outro" : e.name)}
                    className="btn-primary mt-6 self-start"
                  >
                    {e.name === "Outros Equipamentos" ? "Consultar disponibilidade" : "Tenho interesse"}
                  </a>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <PrazosSection />

      <WhatsAppForm
        id="form"
        title="Solicite sua proposta"
        initialValues={{ equipamento: pre }}
        fields={[
          { name: "nome", label: "Nome completo", type: "text" },
          { name: "empresa", label: "Empresa", type: "text" },
          { name: "ramo", label: "Ramo de atuação", type: "text" },
          {
            name: "equipamento",
            label: "Equipamento",
            type: "select",
            options: ["Prensa", "Empilhadeira", "Cavalo Mecânico", "Syder", "Caçamba Roll-On", "Outro"],
          },
          { name: "prazo", label: "Tempo de locação", type: "select", options: ["Diário", "Semanal", "Mensal", "A definir"] },
          { name: "inicio", label: "Previsão de início", type: "date" },
        ]}
        buildMessage={message}
      />
    </>
  );
}
