import { createFileRoute } from "@tanstack/react-router";
import care from "@/assets/activity-care.jpg";
import riding from "@/assets/activity-riding.jpg";
import trail from "@/assets/activity-trail.jpg";
import { CTAButton } from "@/components/site/Button";

export const Route = createFileRoute("/attivita")({
  head: () => ({
    meta: [
      { title: "Attività con i cavalli per bambini — I Cavalieri del Colle" },
      { name: "description", content: "Equitazione, avvicinamento al cavallo, maneggio didattico, passeggiate e laboratori per bambini a Calenzano (FI)." },
      { property: "og:title", content: "Attività con i cavalli per bambini e ragazzi a Calenzano" },
      { property: "og:description", content: "Equitazione bambini Firenze, maneggio didattico, passeggiate ed esperienze nella natura toscana." },
      { property: "og:url", content: "/attivita" },
      { property: "og:image", content: riding },
      { name: "twitter:image", content: riding },
    ],
    links: [{ rel: "canonical", href: "/attivita" }],
  }),
  component: AttivitaPage,
});

const items = [
  { img: care, title: "Avvicinamento al cavallo", text: "Conoscere il cavallo significa imparare ad ascoltare, osservare e creare un rapporto basato sulla fiducia. I bambini scoprono come prendersene cura, dalla pulizia alla preparazione." },
  { img: riding, title: "Equitazione", text: "Lezioni personalizzate per bambini e ragazzi che desiderano avvicinarsi al mondo dell'equitazione, dai primi passi alle tecniche di base." },
  { img: care, title: "Maneggio didattico", text: "Percorsi educativi dedicati alla conoscenza del cavallo e della vita in scuderia: anatomia, comportamento, alimentazione e gestione quotidiana." },
  { img: trail, title: "Passeggiate", text: "Esperienze a contatto con la natura lungo i sentieri delle colline toscane di Calenzano, accompagnati dai nostri istruttori." },
  { img: riding, title: "Attività ludiche", text: "Giochi, laboratori creativi e attività di gruppo per imparare divertendosi: dalle piccole gare al pony games, dalla pittura alla scoperta della natura." },
];

function AttivitaPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Le nostre attività</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
            Attività con i cavalli per <em className="not-italic text-accent">bambini e ragazzi</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Tante esperienze pensate per accompagnare ogni bambino — dal primo incontro con il cavallo
            alle prime lezioni di equitazione — in un ambiente sicuro e familiare a Calenzano, vicino a Firenze.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="space-y-20">
          {items.map((it, i) => (
            <article key={i} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-warm">
                <img src={it.img} alt={it.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition hover:scale-105" width={800} height={600} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">0{i + 1}</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">{it.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/75">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Quale attività è giusta per tuo figlio?</h2>
        <p className="mt-5 text-lg text-foreground/75">Contattaci e ti aiuteremo a scegliere il percorso più adatto.</p>
        <div className="mt-8 flex justify-center"><CTAButton variant="primary" to="/contatti">Richiedi Informazioni</CTAButton></div>
      </section>
    </>
  );
}
