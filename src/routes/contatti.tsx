import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — I Cavalieri del Colle, Calenzano (FI)" },
      { name: "description", content: "Contatta I Cavalieri del Colle a Calenzano (Firenze). Telefono Silvia 334 7077707, email, mappa e modulo per richiedere informazioni." },
      { property: "og:title", content: "Contattaci — I Cavalieri del Colle" },
      { property: "og:description", content: "Saremo felici di rispondere a tutte le tue domande sul centro estivo e le attività con i cavalli." },
      { property: "og:url", content: "/contatti" },
    ],
    links: [{ rel: "canonical", href: "/contatti" }],
  }),
  component: ContattiPage,
});

function ContattiPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Parliamone</p>
          <h1 className="mt-3 font-display text-5xl md:text-7xl">Contattaci</h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/85">
            Saremo felici di rispondere a tutte le tue domande sui centri estivi, sulle attività con
            i cavalli o per organizzare una visita al ranch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr]">
          {/* INFO */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><MapPin size={20} /></div>
                <div>
                  <h3 className="font-display text-lg">Dove siamo</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Via di Cupo snc<br />50041 Le Croci di Calenzano (FI)
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/15 text-secondary"><Phone size={20} /></div>
                <div>
                  <h3 className="font-display text-lg">Telefono</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Silvia</p>
                  <a href="tel:+393347077707" className="mt-1 inline-block font-display text-2xl text-primary hover:underline">334 7077707</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/30 text-foreground"><Mail size={20} /></div>
                <div>
                  <h3 className="font-display text-lg">Email</h3>
                  <a href="mailto:icavalieridelcolle@yahoo.com" className="mt-1 block text-sm text-primary hover:underline break-all">icavalieridelcolle@yahoo.com</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-muted text-foreground"><Clock size={20} /></div>
                <div>
                  <h3 className="font-display text-lg">Quando chiamarci</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Tutti i giorni dalle 9:00 alle 19:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <h2 className="font-display text-3xl">Richiedi informazioni</h2>
            <p className="mt-2 text-sm text-muted-foreground">Compila il modulo, ti risponderemo entro 24 ore.</p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-primary/10 p-6 text-center">
                <div className="text-4xl">🐴</div>
                <p className="mt-3 font-display text-xl text-primary">Grazie! Ti contatteremo presto.</p>
              </div>
            ) : (
              <div className="mt-8 grid gap-4">
                <Field label="Nome" name="nome" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Telefono" name="telefono" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Età del bambino" name="eta" type="number" min={3} max={18} />
                <Field label="Messaggio" name="msg" textarea />
                <button type="submit" className="mt-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:opacity-95">
                  Invia richiesta
                </button>
                <p className="text-xs text-muted-foreground">Oppure scrivici su WhatsApp al <a href="https://wa.me/393347077707" className="text-primary underline">334 7077707</a></p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* MAPPA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <h2 className="font-display text-3xl md:text-4xl">Come raggiungerci</h2>
        <p className="mt-2 text-muted-foreground">Le Croci di Calenzano — colline a nord di Firenze.</p>
        <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Mappa I Cavalieri del Colle"
            src="https://www.google.com/maps?q=Via+di+Cupo,+Le+Croci+di+Calenzano,+FI&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", textarea = false, ...rest }: { label: string; name: string; type?: string; textarea?: boolean } & Record<string, unknown>) {
  const cls = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} {...(rest as Record<string, never>)} />
      ) : (
        <input name={name} type={type} className={cls} {...(rest as Record<string, never>)} />
      )}
    </label>
  );
}
