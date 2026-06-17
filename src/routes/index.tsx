import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, Check, MessageCircle } from "lucide-react";
import { WHATS_NUMBER } from "../components/WhatsAppForm";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: [
            "linear-gradient(to right, rgba(5,5,5,0.82) 0%, rgba(5,5,5,0.70) 25%, rgba(5,5,5,0.38) 55%, rgba(5,5,5,0.0) 80%)",
            "url('/hero-truck-v3.png')",
          ].join(", "),
          backgroundSize: "cover",
          backgroundPosition: "center center",
          color: "#fff",
          position: "relative",
        }}
      >
        <div className="container-x" style={{ width: "100%", paddingBottom: 80, paddingTop: 180 }}>
          {/* Logo recortada via clip para eliminar espaço em branco ao redor */}
          <div style={{ marginBottom: 20, marginLeft: -8 }}>
            <img
              src="/logos/Logo Toob para Fundo Preto.png"
              alt="Toob"
              style={{ height: "clamp(56px, 9vw, 110px)", width: "auto", display: "block" }}
            />
          </div>

          {/* item 2: destaque uppercase estilo eyebrow grande */}
          <p
            style={{
              fontSize: "clamp(11px, 1.1vw, 14px)",
              fontWeight: 800,
              color: "rgba(255,255,255,0.75)",
              fontFamily: "Nunito, sans-serif",
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              marginBottom: 16,
            }}
          >
            Locação de Caminhões e Equipamentos
          </p>

          <h1
            className="font-display"
            style={{ fontSize: "clamp(48px, 7vw, 88px)", marginTop: 20, maxWidth: 900, color: "#fff" }}
          >
            Prazos flexíveis para a sua operação.
          </h1>

          <p
            style={{
              marginTop: 24,
              fontSize: 18,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 540,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Diário, semanal, mensal ou anual. Você escolhe o prazo que faz sentido
            para o seu negócio. Sem burocracia, sem prazo mínimo obrigatório.
          </p>

          <div style={{ marginTop: 36, display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link to="/contato" className="btn-primary">
              Solicitar Orçamento <ArrowRight size={17} />
            </Link>
            <a href="#servicos" className="btn-ghost">
              Ver Serviços <ArrowDown size={17} />
            </a>
          </div>

          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", gap: 20 }}>
            {[
              "Contratos do diário ao anual",
              "Proposta em horas",
              "Atendimento direto",
            ].map((t) => (
              <span
                key={t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "Nunito, sans-serif",
                }}
              >
                <Check size={13} color="#FF0000" strokeWidth={3} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUE A TOOB ── */}
      <section style={{ background: "#F5F5F5", padding: "96px 0" }}>
        <div className="container-x">
          <div className="eyebrow">É assim que trabalhamos</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(40px, 5.5vw, 60px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Por que escolher a Toob?
          </h2>

          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "Prazos que fazem sentido",
                body: "Do diário ao anual: você define o tempo que precisa. Contratos curtos ou longos, sem multa por antecipação.",
              },
              {
                title: "Processo simples",
                body: "Você solicita, recebe proposta em horas, aprova e opera. Sem pilha de documentos, sem semanas de espera.",
              },
              {
                title: "Atendimento direto",
                body: "Fala com quem decide. Sem call center, sem ticket aberto sem resposta.",
              },
              {
                title: "Frota sustentável",
                body: "Caminhões a gás com redução comprovada de até 99,7% nas emissões de CO₂, monitorados por telemetria.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="card"
                style={{ padding: 32, borderLeft: "4px solid #FF0000" }}
              >
                <h3
                  className="font-display"
                  style={{ fontSize: 26, color: "#0D0D0D" }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#5D5D5D",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARALLAX ── */}
      <section
        style={{
          backgroundImage: [
            "linear-gradient(rgba(13,13,13,0.68), rgba(13,13,13,0.68))",
            "url('/cenario.png')",
          ].join(", "),
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 0",
          color: "#fff",
        }}
      >
        <div className="container-x">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 1,
              background: "rgba(255,255,255,0.06)",
            }}
          >
            {[
              { value: "Diário", label: "Prazo mínimo disponível" },
              { value: "48h", label: "Proposta entregue em até" },
              { value: "99,7%", label: "Redução de CO₂ na frota a gás" },
              { value: "100%", label: "Dos veículos rastreados" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "48px 32px",
                  background: "rgba(13,13,13,0.55)",
                  backdropFilter: "blur(12px)",
                  borderTop: "2px solid #FF0000",
                  textAlign: "center",
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "#fff", lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "Nunito, sans-serif",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container-x">
          <div className="eyebrow">O que oferecemos</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(40px, 5.5vw, 60px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Soluções para cada etapa da sua operação.
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 17,
              color: "#5D5D5D",
              maxWidth: 560,
              fontFamily: "Nunito, sans-serif",
            }}
          >
            Da locação pontual ao equipamento certo para o longo prazo.
          </p>

          <div
            style={{
              marginTop: 48,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "Locação de Caminhões",
                sub: "Roll-on · combustão e gás",
                body: "Frota para operações industriais, logísticas e de resíduos. Prazos flexíveis e atendimento ágil.",
                to: "/caminhoes",
                img: "/caminhao-scania-gas.png",
              },
              {
                title: "Locação de Equipamentos",
                sub: "Prensas, empilhadeiras, caçambas e mais",
                body: "Linha completa de equipamentos para apoiar cada etapa da sua operação.",
                to: "/equipamentos",
                img: "/equipamento-rollon-container-cenario.png",
              },
              {
                title: "Compra e Venda",
                sub: "Ativos e equipamentos",
                body: "Portfólio de equipamentos para aquisição, ou venda seu ativo com quem conhece o mercado.",
                to: "/compra-venda",
                img: "/galpao-industrial.png",
              },
            ].map((s) => (
              <Link
                key={s.title}
                to={s.to as any}
                className="card"
                style={{ display: "block", textDecoration: "none", cursor: "pointer" }}
              >
                <div style={{ height: 200, overflow: "hidden" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  />
                </div>
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "#FF0000",
                      fontFamily: "Nunito, sans-serif",
                      marginBottom: 8,
                    }}
                  >
                    {s.sub}
                  </div>
                  <h3 className="font-display" style={{ fontSize: 28, color: "#0D0D0D" }}>
                    {s.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "#5D5D5D",
                      fontFamily: "Nunito, sans-serif",
                    }}
                  >
                    {s.body}
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      marginTop: 24,
                      fontSize: 14,
                      fontFamily: "Nunito, sans-serif",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#FF0000",
                    }}
                  >
                    Saiba mais <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section style={{ background: "#F5F5F5", padding: "96px 0" }}>
        <div className="container-x">
          <div className="eyebrow">Como funciona</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(40px, 5.5vw, 60px)", marginTop: 12, color: "#0D0D0D" }}
          >
            Em 3 passos, seu equipamento em operação.
          </h2>

          <div
            style={{
              marginTop: 56,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 40,
            }}
          >
            {[
              {
                n: "01",
                title: "Escolha o serviço",
                body: "Acesse a página do serviço que precisa e preencha seus dados: nome, empresa, equipamento desejado e prazo.",
              },
              {
                n: "02",
                title: "Envie pelo WhatsApp",
                body: "Uma mensagem personalizada é montada automaticamente com as suas informações. Basta confirmar o envio.",
              },
              {
                n: "03",
                title: "Receba a proposta",
                body: "Em horas, não em dias. Proposta clara e direta. Você aprova e começa a operar.",
              },
            ].map((s) => (
              <div key={s.n}>
                <div
                  className="font-display"
                  style={{ fontSize: 80, color: "#FF0000", lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: 30, color: "#0D0D0D", marginTop: 8 }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#5D5D5D",
                    fontFamily: "Nunito, sans-serif",
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container-x" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>Vamos começar?</div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(40px, 6vw, 64px)", color: "#0D0D0D", maxWidth: 800, margin: "0 auto" }}
          >
            Pronto para destravar sua operação?
          </h2>
          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              color: "#5D5D5D",
              fontFamily: "Nunito, sans-serif",
              maxWidth: 480,
              margin: "20px auto 0",
            }}
          >
            Fale com a Toob agora. Contratos curtos ou longos, sem enrolação.
          </p>
          <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${WHATS_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
              style={{ width: "auto", paddingInline: 36 }}
            >
              <MessageCircle size={19} />
              Falar pelo WhatsApp
            </a>
            <Link to="/contato" className="btn-primary">
              Solicitar Orçamento <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
