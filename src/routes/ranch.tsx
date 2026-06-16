import { createFileRoute } from "@tanstack/react-router";
import ranchImg from "@/assets/hero-ranch.jpg";
import care from "@/assets/activity-care.jpg";
import riding from "@/assets/activity-riding.jpg";
import trail from "@/assets/activity-trail.jpg";
import camp from "@/assets/hero-camp.jpg";
import home from "@/assets/hero-home.jpg";
import { CTAButton } from "@/components/site/Button";

export const Route = createFileRoute("/ranch")({
  head: () => ({
    meta: [
      { title: "Il Ranch — I Cavalieri del Colle, Calenzano (FI)" },
      { name: "description", content: "Scopri il nostro ranch nelle colline di Calenzano: una famiglia, una passione, un luogo speciale per crescere a contatto con cavalli e natura." },
      { property: "og:title", content: "Il Ranch — Una famiglia, una passione, un luogo speciale" },
      { property: "og:description", content: "Il maneggio I Cavalieri del Colle nelle colline toscane di Calenzano." },
      { property: "og:url", content: "/ranch" },
      { property: "og:image", content: ranchImg },
      { name: "twitter:image", content: ranchImg },
    ],
    links: [{ rel: "canonical", href: "/ranch" }],
  }),
  component: RanchPage,
});

const values = ["Rispetto", "Responsabilità", "Empatia", "Collaborazione", "Fiducia"];
const gallery = [home, camp, care, riding, trail, ranchImg];

function RanchPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={ranchImg} alt="Ranch I Cavalieri del Colle nelle colline di Calenzano" className="h-full w-full object-cover" width={1792} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/40 to-foreground/10" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-32 md:py-44">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Il nostro ranch</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-7xl">
            Una famiglia, una passione,<br /><em className="not-italic text-accent">un luogo speciale</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Chi siamo</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">La nostra storia</h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          I Cavalieri del Colle nasce dall'amore per i cavalli e dalla volontà di offrire ai bambini
          un luogo autentico dove crescere attraverso il contatto con gli animali e la natura.
          Nel tempo siamo diventati un punto di riferimento per le famiglie di Calenzano, Firenze e
          della Toscana che cercano attività nella natura per bambini.
        </p>
      </section>

      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-6xl px-5 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">La nostra filosofia</p>
            <h2 className="mt-3 font-display text-4xl">I valori che insegniamo</h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              Crediamo che il rapporto con il cavallo possa insegnare ai bambini valori importanti,
              che li accompagneranno per tutta la vita.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {values.map((v) => (
              <li key={v} className="rounded-2xl bg-card border border-border px-5 py-4 font-display text-xl text-primary shadow-soft">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Il nostro ambiente</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Le colline di Calenzano</h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          Immerso nelle colline di Calenzano, a pochi chilometri da Firenze, il ranch offre ampi spazi
          aperti, aree dedicate alle attività equestri e un contesto naturale ideale per vivere esperienze
          genuine. Un luogo dove il tempo rallenta e i bambini ritrovano il piacere di stare all'aria aperta.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Galleria</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Uno sguardo al ranch</h2>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {gallery.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl shadow-soft">
              <img src={src} alt={`Ranch I Cavalieri del Colle — foto ${i + 1}`} loading="lazy" className="aspect-square w-full object-cover transition hover:scale-105" width={600} height={600} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pb-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Vienici a trovare</h2>
        <p className="mt-5 text-lg text-foreground/75">Prenota una visita guidata al ranch.</p>
        <div className="mt-8 flex justify-center"><CTAButton variant="primary" to="/contatti">Contattaci</CTAButton></div>
      </section>
    </>
  );
}
