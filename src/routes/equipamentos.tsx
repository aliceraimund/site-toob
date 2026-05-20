import { createFileRoute } from "@tanstack/react-router";
import { WhatsAppForm } from "../components/WhatsAppForm";

export const Route = createFileRoute("/equipamentos")({
  head: () => ({ meta: [{ title: "Locação de Equipamentos — Toob" }] }),
  component: EquipamentosPage,
});

const equipamentos = [
  {
    nome: "Prensa de Resíduos",
    desc: "Para compactação de materiais recicláveis e resíduos industriais. Aumenta a eficiência da sua operação de reciclagem.",
  },
  {
    nome: "Empilhadeira",
    desc: "Movimentação interna de carga com segurança e agilidade. Ideal para armazéns, galpões e operações logísticas.",
  },
  {
    nome: "Caçamba Estacionária",
    desc: "Para armazenamento e coleta de resíduos sólidos em obras, indústrias e grandes centros de geração.",
  },
  {
    nome: "Caçamba Roll-On",
    desc: "Integrada ao caminhão roll-on para coleta e transporte eficiente. Disponível em diferentes volumes.",
  },
  {
    nome: "Esteira Transportadora",
    desc: "Para triagem e movimentação de materiais em linhas de separação e plantas de reciclagem.",
  },
  {
    nome: "Balança de Piso",
    desc: "Controle de pesagem de entrada e saída de resíduos e materiais. Homologada e calibrada.",
  },
];

function EquipamentosPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: [
            "linear-gradient(to bottom, rgba(13,13,13,0.5) 0%, rgba(13,13,13,0.9) 100%)",
            "url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&q=80&auto=format')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container-x" style={{ width: "100%", paddingBottom: 72, paddingTop: 140 }}>
          <div className="eyebrow" style={{ color: "#FF0000" }}>Locação de Equipamentos</div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6.5vw, 76px)", marginTop: 16, color: "#fff", maxWidth: 800 }}
          >
            O equipamento certo, no prazo que faz sentido.
          </h1>
          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 520,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Prensas, empilhadeiras, caçambas e muito mais. Locação com contrato flexível
            e atendimento direto.
          </p>
        </div>
      </section>

      {/* ── EQUIPAMENTOS ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Linha de equipamentos</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            O que temos disponível.
          </h2>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {equipamentos.map((e) => (
              <div
                key={e.nome}
                className="card"
                style={{ padding: 28 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 4,
                    background: "#FF0000",
                    borderRadius: 2,
                    marginBottom: 20,
                  }}
                />
                <h3 className="font-display" style={{ fontSize: 26, color: "#0D0D0D" }}>
                  {e.nome}
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#5D5D5D",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRAZOS ── */}
      <section style={{ background: "#F5F5F5", padding: "80px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Modalidades</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Locação no prazo que sua operação precisa.
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              lineHeight: 1.75,
              color: "#5D5D5D",
              maxWidth: 640,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Todos os equipamentos disponíveis em contratos diários, semanais ou mensais.
            Sem mínimo obrigatório, sem multa por devolução antecipada. A operação manda.
          </p>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {["Diário", "Semanal", "Mensal"].map((p) => (
              <div
                key={p}
                style={{
                  background: "#fff",
                  border: "1px solid #E5E5E5",
                  borderTop: "3px solid #FF0000",
                  borderRadius: 8,
                  padding: "24px 20px",
                }}
              >
                <h3 className="font-display" style={{ fontSize: 28, color: "#0D0D0D" }}>{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <WhatsAppForm
        id="solicitar"
        title="Solicite sua locação de equipamento"
        dark={true}
        fields={[
          { name: "nome", label: "Seu nome", type: "text" },
          { name: "empresa", label: "Empresa", type: "text" },
          { name: "equipamento", label: "Equipamento", type: "select", options: ["Prensa de Resíduos", "Empilhadeira", "Caçamba Estacionária", "Caçamba Roll-On", "Esteira Transportadora", "Balança de Piso", "Outro"] },
          { name: "prazo", label: "Prazo desejado", type: "select", options: ["Diário", "Semanal", "Mensal"] },
          { name: "inicio", label: "Data de início", type: "date" },
        ]}
        buildMessage={(v) =>
          `Olá! Tenho interesse em locar um equipamento.\n\nNome: ${v.nome}\nEmpresa: ${v.empresa}\nEquipamento: ${v.equipamento}\nPrazo: ${v.prazo}\nInício: ${v.inicio}`
        }
      />
    </>
  );
}
