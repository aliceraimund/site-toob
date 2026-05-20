import { useState } from "react";
import { MessageCircle } from "lucide-react";

export const WHATS_NUMBER = "5511999999999";

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
}: {
  id?: string;
  title: string;
  fields: FieldDef[];
  buildMessage: (v: Record<string, string>) => string;
  initialValues?: Record<string, string>;
  dark?: boolean;
}) {
  const [values, setValues] = useState<Record<string, string>>(initialValues ?? {});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(buildMessage(values))}`, "_blank");
  };

  const bg    = dark ? "#161616" : "#fff";
  const text  = dark ? "#fff" : "#0D0D0D";
  const sub   = dark ? "rgba(255,255,255,0.45)" : "#5D5D5D";
  const border = dark ? "rgba(255,255,255,0.12)" : "#e5e5e5";
  const inputBg = dark ? "#1e1e1e" : "#fafafa";
  const focusBg = dark ? "#222" : "#fff";

  return (
    <section
      id={id}
      style={{ background: dark ? "#0D0D0D" : "#F5F5F5" }}
      className="py-24"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <div
            style={{
              background: bg,
              borderRadius: 20,
              padding: "clamp(32px, 5vw, 56px)",
              border: `1px solid ${border}`,
              boxShadow: dark ? "none" : "0 4px 32px rgba(0,0,0,0.08)",
            }}
          >
            <div className="eyebrow" style={{ color: "#C0392B" }}>
              Atendimento direto
            </div>
            <h2
              className="font-display mt-3"
              style={{ fontSize: "clamp(36px,5vw,52px)", color: text }}
            >
              {title}
            </h2>

            <form onSubmit={submit} className="mt-10 grid gap-5 md:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className="flex flex-col gap-1.5">
                  <span className="input-label" style={{ color: sub }}>
                    {f.label}
                  </span>
                  {f.type === "select" ? (
                    <select
                      required
                      value={values[f.name] ?? ""}
                      onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                      style={{
                        background: inputBg, color: text,
                        border: `2px solid ${border}`,
                        borderRadius: 10, padding: "14px 18px",
                        fontFamily: "Barlow, sans-serif", fontSize: 15,
                        outline: "none", width: "100%",
                        transition: "border-color .2s",
                        appearance: "auto",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "#C0392B"; e.target.style.background = focusBg; }}
                      onBlur={(e) => { e.target.style.borderColor = border; e.target.style.background = inputBg; }}
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
                      style={{
                        background: inputBg, color: text,
                        border: `2px solid ${border}`,
                        borderRadius: 10, padding: "14px 18px",
                        fontFamily: "Barlow, sans-serif", fontSize: 15,
                        outline: "none", width: "100%",
                        transition: "border-color .2s",
                      }}
                      onFocus={(e) => { e.target.style.borderColor = "#C0392B"; e.target.style.background = focusBg; }}
                      onBlur={(e) => { e.target.style.borderColor = border; e.target.style.background = inputBg; }}
                    />
                  )}
                </label>
              ))}

              <div className="md:col-span-2 mt-2">
                <button type="submit" className="btn-whatsapp w-full">
                  <MessageCircle size={20} />
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
