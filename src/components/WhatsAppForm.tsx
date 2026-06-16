import { useState } from "react";
import { MessageCircle } from "lucide-react";

export const WHATS_NUMBER = "5511985502120";

export type FieldDef =
  | { name: string; label: string; type: "text" | "date" }
  | { name: string; label: string; type: "select"; options: string[] };

export function WhatsAppForm({
  id,
  title,
  fields,
  buildMessage,
  initialValues,
  dark = false,
  sectionBg: sectionBgOverride,
}: {
  id?: string;
  title: string;
  fields: FieldDef[];
  buildMessage: (v: Record<string, string>) => string;
  initialValues?: Record<string, string>;
  dark?: boolean;
  sectionBg?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(initialValues ?? {});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(buildMessage(values))}`,
      "_blank"
    );
  };

  const sectionBg  = sectionBgOverride ?? (dark ? "#0D0D0D" : "#F5F5F5");
  const cardBg     = dark ? "#161616" : "#FFFFFF";
  const cardBorder = dark ? "rgba(255,255,255,0.08)" : "#E5E5E5";
  const textMain   = dark ? "#FFFFFF" : "#0D0D0D";
  const textSub    = dark ? "rgba(255,255,255,0.45)" : "#5D5D5D";
  const inputBg    = dark ? "#1e1e1e" : "#fafafa";
  const inputBorder = dark ? "rgba(255,255,255,0.12)" : "#e5e5e5";

  return (
    <section id={id} style={{ background: sectionBg, padding: "96px 0" }}>
      <div className="container-x">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: 16,
              padding: "clamp(28px, 5vw, 52px)",
            }}
          >
            <div className="eyebrow">Atendimento direto</div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 5vw, 48px)", color: textMain, marginTop: 12 }}
            >
              {title}
            </h2>

            <form onSubmit={submit} style={{ marginTop: 32, display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
              {fields.map((f) => (
                <label key={f.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <span className="field-label" style={{ color: textSub }}>{f.label}</span>
                  {f.type === "select" ? (
                    <select
                      required
                      value={values[f.name] ?? ""}
                      onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                      className="field-input"
                      style={{ background: inputBg, color: textMain, borderColor: inputBorder }}
                    >
                      <option value="">Selecione…</option>
                      {f.options.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={f.type}
                      required
                      placeholder={f.type === "date" ? "" : f.label}
                      value={values[f.name] ?? ""}
                      onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                      className="field-input"
                      style={{ background: inputBg, color: textMain, borderColor: inputBorder }}
                    />
                  )}
                </label>
              ))}

              <div style={{ gridColumn: "1 / -1", marginTop: 8 }}>
                <button type="submit" className="btn-whatsapp">
                  <MessageCircle size={19} />
                  Enviar pelo WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
