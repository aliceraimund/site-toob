import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "../components/Reveal";
import { TiltCard } from "../components/TiltCard";
import { HeroDark } from "./caminhoes";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/compra-venda")({
  head: () => ({
    meta: [
      { title: "Compra e Venda de Equipamentos — Toob" },
      {
        name: "description",
        content:
          "Portfólio de caminhões roll-on, caçambas e empilhadeiras para compra. Ou venda seu ativo direto, sem intermediários.",
      },
    ],
  }),
  component: CompraVendaPage,
});

const products = [
  {
    name: "Caminhão Roll-On Mercedes-Benz Atego 2430",
    desc: "Caminhão roll-on trucado, motor 300cv, cabine simples, ano 2019. Excelente estado de conservação, pneus novos, documentação em dia.",
  },
  {
    name: "Caminhão Roll-On Volkswagen Constellation 17.280",
    desc: "Caminhão roll-on toco, motor 280cv, ano 2020, com sistema de gancho hidráulico revisado. Pronto para operação imediata.",
  },
  {
    name: "Caçamba Roll-On 5m³ em Aço Carbono",
    desc: "Caçamba roll-on capacidade 5m³, aço carbono de alta resistência. Ideal para resíduos industriais e entulho.",
  },
  {
    name: "Caçamba Roll-On 7m³ Reforçada",
    desc: "Capacidade 7m³, reforço estrutural nas laterais. Compatível com a maioria dos caminhões roll-on do mercado.",
  },
  {
    name: "Empilhadeira Elétrica Toyota 8FBE15",
    desc: "Capacidade 1.500kg, elevação 3m, bateria revisada, ano 2018.",
  },
  {
    name: "Empilhadeira a GLP Hyster H2.5FT",
    desc: "Capacidade 2.500kg, mástro triplex 4,5m, ano 2017.",
  },
];

type ModalState =
  | null
  | { kind: "buy"; product: string }
  | { kind: "sell" };

function CompraVendaPage() {
  const [modal, setModal] = useState<ModalState>(null);

  return (
    <>
      <HeroDark
        eyebrow="Compra e Venda"
        title="Compre ou venda equipamentos com quem conhece o mercado."
        subtitle="Portfólio de equipamentos disponíveis para aquisição. Ou fale com a gente se quiser vender o seu ativo. Negociação direta, sem intermediários."
      />

      <section className="bg-[#F5F5F5] py-24">
        <div className="container-x">
          <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <RevealItem key={p.name}>
                <TiltCard className="flex h-full flex-col bg-white" style={{ borderTop: "2px solid #C0392B" }}>
                  <div
                    className="flex aspect-[4/3] items-center justify-center bg-[#E5E5E5]"
                    aria-hidden
                  >
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5D5D5D" strokeWidth="1.2">
                      <path d="M3 8l4-4h10l4 4v10H3z" />
                      <path d="M3 14h18" />
                    </svg>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl text-[#0D0D0D]">{p.name}</h3>
                    <p className="mt-3 flex-1 font-sans-body text-[14px] text-[#5D5D5D]">{p.desc}</p>
                    <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                      <button
                        onClick={() => setModal({ kind: "buy", product: p.name })}
                        className="btn-primary flex-1 !px-4 !py-3 !text-[13px]"
                      >
                        Consultar para compra
                      </button>
                      <button
                        onClick={() => setModal({ kind: "sell" })}
                        className="flex-1 border-2 border-[#0D0D0D] bg-transparent px-4 py-3 font-display text-[13px] uppercase tracking-[0.1em] text-[#0D0D0D] transition hover:bg-[#0D0D0D] hover:text-white"
                      >
                        Tenho interesse em vender
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {modal && <MiniModal state={modal} onClose={() => setModal(null)} />}
    </>
  );
}

function MiniModal({ state, onClose }: { state: NonNullable<ModalState>; onClose: () => void }) {
  const [v, setV] = useState<Record<string, string>>({});
  const isBuy = state.kind === "buy";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = isBuy
      ? `Olá, Toob! Me chamo ${v.nome}, da empresa ${v.empresa}. Tenho interesse em comprar o equipamento ${state.product}. Aguardo mais informações sobre disponibilidade e condições.`
      : `Olá, Toob! Me chamo ${v.nome}, da empresa ${v.empresa}. Tenho um ativo que gostaria de vender. Equipamento: ${v.equipamento}. Aguardo contato.`;
    window.open(`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
        className="w-full max-w-md bg-white p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="eyebrow text-[#C0392B]">{isBuy ? "Comprar" : "Vender"}</div>
            <h3 className="mt-2 font-display text-3xl text-[#0D0D0D]">
              {isBuy ? state.product : "Venda seu equipamento"}
            </h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Fechar"><X /></button>
        </div>
        <div className="mt-6 space-y-4">
          <Field label="Nome completo" value={v.nome} onChange={(x) => setV({ ...v, nome: x })} />
          <Field label="Empresa" value={v.empresa} onChange={(x) => setV({ ...v, empresa: x })} />
          {!isBuy && (
            <Field label="Equipamento" value={v.equipamento ?? ""} onChange={(x) => setV({ ...v, equipamento: x })} />
          )}
        </div>
        <button type="submit" className="btn-whatsapp mt-8 w-full">Enviar pelo WhatsApp</button>
      </form>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value?: string; onChange: (v: string) => void }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-sans-body text-xs font-semibold uppercase tracking-[0.15em] text-[#5D5D5D]">{label}</span>
      <input
        required
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="border border-[#0D0D0D]/15 bg-white px-4 py-3 font-sans-body text-[#0D0D0D] focus:border-[#C0392B] focus:outline-none"
      />
    </label>
  );
}
