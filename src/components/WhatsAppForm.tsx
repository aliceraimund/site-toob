import { useState } from "react";
import { Send } from "lucide-react";

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
}: {
  id?: string;
  title: string;
  fields: FieldDef[];
  buildMessage: (values: Record<string, string>) => string;
  initialValues?: Record<string, string>;
}) {
  const [values, setValues] = useState<Record<string, string>>(initialValues ?? {});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildMessage(values);
    window.open(`https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id={id} className="bg-white py-20">
      <div className="container-x">
        <div className="mx-auto max-w-2xl">
          <div className="eyebrow text-[#C0392B]">Atendimento direto</div>
          <h2 className="mt-3 font-display text-5xl text-[#0D0D0D] md:text-6xl">{title}</h2>
          <form onSubmit={submit} className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {fields.map((f) => (
              <label key={f.name} className={`flex flex-col gap-2 ${f.type !== "select" || true ? "" : ""}`}>
                <span className="font-sans-body text-xs font-semibold uppercase tracking-[0.15em] text-[#5D5D5D]">
                  {f.label}
                </span>
                {f.type === "select" ? (
                  <select
                    required
                    value={values[f.name] ?? ""}
                    onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                    className="border border-[#0D0D0D]/15 bg-white px-4 py-3 font-sans-body text-[#0D0D0D] focus:border-[#C0392B] focus:outline-none"
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
                    value={values[f.name] ?? ""}
                    onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                    className="border border-[#0D0D0D]/15 bg-white px-4 py-3 font-sans-body text-[#0D0D0D] focus:border-[#C0392B] focus:outline-none"
                  />
                )}
              </label>
            ))}
            <div className="md:col-span-2">
              <button type="submit" className="btn-whatsapp w-full md:w-auto">
                <Send size={18} /> Enviar pelo WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
