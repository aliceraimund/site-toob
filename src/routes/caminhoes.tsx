import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { WhatsAppForm } from "../components/WhatsAppForm";

export const Route = createFileRoute("/caminhoes")({
  component: CaminhoesPage,
});

function CaminhoesPage() {
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
            "url('/caminhao-scania-gas.png')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container-x" style={{ width: "100%", paddingBottom: 72, paddingTop: 140 }}>
          <div className="eyebrow" style={{ color: "#FF0000" }}>Locação de Caminhões</div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(44px, 6.5vw, 76px)", marginTop: 16, color: "#fff", maxWidth: 800 }}
          >
            Frota roll-on pronta para a sua operação.
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
            Caminhões roll-on à combustão e a gás, com prazos diários, semanais ou mensais.
            Disponibilidade ágil e atendimento direto.
          </p>
        </div>
      </section>

      {/* ── OPÇÕES DE FROTA ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Nossa frota</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Duas opções para a sua necessidade.
          </h2>

          <div
            style={{
              marginTop: 40,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {/* Combustão */}
            <div className="card" style={{ padding: 36 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#0D0D0D",
                  color: "#fff",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  padding: "4px 12px",
                  borderRadius: 100,
                  marginBottom: 20,
                }}
              >
                Combustão
              </div>
              <h3 className="font-display" style={{ fontSize: 32, color: "#0D0D0D" }}>
                Caminhão Roll-On Diesel
              </h3>
              <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.75, color: "#5D5D5D", fontFamily: "Nunito, sans-serif" }}>
                Frota versátil para operações industriais, logísticas e de gestão de resíduos.
                Ideal para quem precisa de volume e disponibilidade imediata.
              </p>
              <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0, fontFamily: "Nunito, sans-serif", fontSize: 15, color: "#5D5D5D" }}>
                {["Alta disponibilidade de frota", "Contratos diários, semanais ou mensais", "Rastreamento incluso"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#FF0000", fontWeight: 700 }}>—</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#solicitar" className="btn-dark" style={{ marginTop: 32, display: "inline-flex" }}>
                Solicitar <ArrowRight size={16} />
              </a>
            </div>

            {/* Gás */}
            <div className="card" style={{ padding: 36, borderColor: "#FF0000", borderWidth: 2 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#FF0000",
                  color: "#fff",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  padding: "4px 12px",
                  borderRadius: 100,
                  marginBottom: 20,
                }}
              >
                Gás Natural — Sustentável
              </div>
              <h3 className="font-display" style={{ fontSize: 32, color: "#0D0D0D" }}>
                Caminhão Roll-On a Gás
              </h3>
              <p style={{ marginTop: 12, fontSize: 15, lineHeight: 1.75, color: "#5D5D5D", fontFamily: "Nunito, sans-serif" }}>
                Redução comprovada de 15% a 99,7% nas emissões de CO₂ com base na metodologia
                GHG Protocol. A escolha certa para empresas com compromissos ESG.
              </p>
              <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10, listStyle: "none", padding: 0, fontFamily: "Nunito, sans-serif", fontSize: 15, color: "#5D5D5D" }}>
                {["Inventário de emissões mensal", "Dados prontos para relatórios ESG", "100% rastreado por telemetria"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#FF0000", fontWeight: 700 }}>—</span> {item}
                  </li>
                ))}
              </ul>
              <a href="#solicitar" className="btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>
                Solicitar <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRAZOS ── */}
      <section style={{ background: "#0D0D0D", padding: "80px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Modalidades de locação</div>
          <h2 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 52px)", marginTop: 12, color: "#fff" }}>
            Você escolhe o prazo.
          </h2>

          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {[
              { prazo: "Diário", desc: "Para demandas pontuais ou operações que variam dia a dia." },
              { prazo: "Semanal", desc: "Flexibilidade para projetos de curto prazo sem comprometimento longo." },
              { prazo: "Mensal", desc: "Estabilidade operacional com a liberdade de ajustar quando necessário." },
            ].map((p) => (
              <div key={p.prazo} className="card-dark" style={{ padding: 28, borderTop: "3px solid #FF0000" }}>
                <h3 className="font-display" style={{ fontSize: 32, color: "#fff" }}>{p.prazo}</h3>
                <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", fontFamily: "Nunito, sans-serif" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <WhatsAppForm
        id="solicitar"
        title="Solicite sua locação de caminhão"
        dark={false}
        fields={[
          { name: "nome", label: "Seu nome", type: "text" },
          { name: "empresa", label: "Empresa", type: "text" },
          { name: "tipo", label: "Tipo de caminhão", type: "select", options: ["Diesel (combustão)", "Gás natural"] },
          { name: "prazo", label: "Prazo desejado", type: "select", options: ["Diário", "Semanal", "Mensal"] },
          { name: "inicio", label: "Data de início", type: "date" },
        ]}
        buildMessage={(v) =>
          `Olá! Quero solicitar uma locação de caminhão.\n\nNome: ${v.nome}\nEmpresa: ${v.empresa}\nTipo: ${v.tipo}\nPrazo: ${v.prazo}\nInício: ${v.inicio}`
        }
      />
    </>
  );
}
