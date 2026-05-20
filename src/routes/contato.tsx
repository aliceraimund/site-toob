import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { Reveal, TextReveal } from "../components/Reveal";
import { MagneticButton } from "../components/MagneticButton";
import { HeroDark } from "./caminhoes";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Toob" },
      {
        name: "description",
        content:
          "Fale direto com a Toob pelo WhatsApp. Sem formulário longo, sem fila. Atendimento ágil para sua operação.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <HeroDark
        eyebrow="Contato"
        title="Fale com a Toob."
        subtitle="Sem formulário longo, sem fila de atendimento. Manda uma mensagem pelo WhatsApp e nossa equipe responde com agilidade."
      />

      <section className="bg-white py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <MagneticButton
                as="a"
                href={`https://wa.me/${WHATS_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp w-full justify-center md:w-auto"
              >
                Abrir WhatsApp <ArrowRight size={20} />
              </MagneticButton>
            </Reveal>
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl gap-8 border-t border-[#0D0D0D]/10 pt-14 text-center md:grid-cols-3">
            <Info icon={Mail} label="E-mail" value="contato@toob.com.br" />
            <Info icon={MapPin} label="Localização" value="São Paulo, SP" />
            <Info icon={Clock} label="Horário" value="Segunda a Sexta, 8h às 18h" />
          </div>

          <div className="mx-auto mt-20 max-w-4xl border-t border-[#0D0D0D]/10 pt-10 text-center">
            <div className="eyebrow text-[#C0392B]">Links rápidos</div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 font-sans-body text-[#0D0D0D]">
              <Link to="/caminhoes" className="hover:text-[#C0392B]">Locação de Caminhões</Link>
              <span className="text-[#5D5D5D]">·</span>
              <Link to="/equipamentos" className="hover:text-[#C0392B]">Locação de Equipamentos</Link>
              <span className="text-[#5D5D5D]">·</span>
              <Link to="/compra-venda" className="hover:text-[#C0392B]">Compra e Venda</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <Icon size={24} className="text-[#C0392B]" />
      <div className="eyebrow text-[#5D5D5D]">{label}</div>
      <div className="font-sans-body text-[#0D0D0D]">{value}</div>
    </div>
  );
}
