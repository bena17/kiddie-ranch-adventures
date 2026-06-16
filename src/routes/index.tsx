import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import { CTAButton } from "@/components/site/Button";
import { Trees, Shield, Sparkles, Heart } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I Cavalieri del Colle — Centro Equestre per Bambini a Calenzano (FI)" },
      { name: "description", content: "Centro estivo con cavalli e attività di equitazione per bambini nelle colline di Calenzano, vicino a Firenze. Natura, animali e amicizia." },
      { property: "og:title", content: "I Cavalieri del Colle — Dove i bambini diventano piccoli cavalieri" },
      { property: "og:description", content: "Centro equestre per bambini a Calenzano: centri estivi, equitazione, laboratori e passeggiate nella natura toscana." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const reasons = [
  { icon: Heart, title: "Relazione autentica con il cavallo", text: "Imparare a conoscere, accudire e rispettare il cavallo prima ancora di montarlo." },
  { icon: Trees, title: "Natura e vita all'aria aperta", text: "Lontano dagli schermi, vicino agli animali e ai ritmi della natura." },
  { icon: Shield, title: "Ambiente sicuro e familiare", text: "Attività seguite da personale esperto, appassionato e attento ai più piccoli." },
  { icon: Sparkles, title: "Esperienze educative", text: "Laboratori, giochi, attività creative e momenti di condivisione." },
];

const activities = [
  { emoji: "🐴", title: "Avvicinamento al cavallo", text: "Scoprire il mondo dei cavalli attraverso il contatto diretto e la cura quotidiana." },
  { emoji: "🏇", title: "Equitazione", text: "Lezioni adatte a principianti e bambini che desiderano migliorare le proprie capacità." },
  { emoji: "🎓", title: "Maneggio didattico", text: "Attività educative per comprendere comportamento e gestione del cavallo." },
  { emoji: "🌿", title: "Passeggiate", text: "Esperienze a contatto con la natura accompagnati dai nostri cavalli." },
  { emoji: "🎨", title: "Laboratori", text: "Giochi, attività creative e percorsi educativi pensati per i bambini." },
  { emoji: "☀️", title: "Centri estivi", text: "Settimane ricche di avventura, amicizia e divertimento nel ranch." },
];

const testimonials = [
  { text: "Un ambiente meraviglioso dove mia figlia si sente a casa.", author: "Giulia, mamma di Sofia" },
  { text: "Professionalità, passione e attenzione verso i bambini.", author: "Marco, papà di Leo" },
  { text: "Esperienza bellissima che ogni estate aspettiamo con entusiasmo.", author: "Francesca, mamma di Anna" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Bambino con cavallo al tramonto nelle colline di Calenzano" className="h-full w-full object-cover" width={1792} height={1024} />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/45 to-foreground/20" />
        </div>
        <div className="mx-auto max-w-6xl px-5 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-cream/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest">
              Calenzano · Firenze
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-cream md:text-7xl">
              Dove i bambini diventano <em className="not-italic text-accent">piccoli cavalieri</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/90">
              Nel cuore delle colline di Calenzano, un luogo speciale dove natura, cavalli e amicizia
              aiutano i bambini a crescere, divertirsi e vivere esperienze autentiche all'aria aperta.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton variant="primary" to="/contatti">Richiedi Informazioni</CTAButton>
              <CTAButton variant="secondary" to="/centri-estivi">Scopri i Centri Estivi</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* EMOZIONALE */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">La nostra essenza</p>
        <h2 className="mt-3 font-display text-4xl md:text-5xl">Molto più di un maneggio</h2>
        <div className="mx-auto mt-8 space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>I Cavalieri del Colle non è soltanto un centro equestre.</p>
          <p>
            È un luogo dove i bambini imparano il rispetto per gli animali, scoprono il valore della
            natura e sviluppano fiducia in sé stessi attraverso il rapporto con il cavallo.
          </p>
          <p>
            Ogni attività è pensata per favorire crescita, autonomia e divertimento in un ambiente
            sicuro, familiare e immerso nel verde.
          </p>
        </div>
      </section>

      {/* PERCHE' SCEGLIERE NOI */}
      <section className="bg-muted/50 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Perché sceglierci</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Un'esperienza che resta nel cuore</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <div key={i} className="group rounded-2xl bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-warm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <r.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTIVITA */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Le attività</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Esperienze per piccoli cavalieri</h2>
          </div>
          <Link to="/attivita" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">Vedi tutte →</Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a, i) => (
            <article key={i} className="rounded-2xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-soft">
              <div className="text-3xl">{a.emoji}</div>
              <h3 className="mt-4 font-display text-xl">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TESTIMONIANZE */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Testimonianze</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Le parole dei genitori</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl bg-primary-foreground/5 p-7 backdrop-blur ring-1 ring-primary-foreground/10">
                <div className="text-4xl font-display leading-none text-accent">"</div>
                <blockquote className="mt-3 text-lg leading-relaxed">{t.text}</blockquote>
                <figcaption className="mt-5 text-sm text-primary-foreground/70">— {t.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Vieni a conoscere il nostro ranch</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/75">
          Prenota una visita e scopri da vicino il mondo de I Cavalieri del Colle. Sarà un piacere
          accogliere te e tuo figlio nelle nostre colline.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton variant="primary" to="/contatti">Richiedi Informazioni</CTAButton>
        </div>
      </section>
    </>
  );
}
