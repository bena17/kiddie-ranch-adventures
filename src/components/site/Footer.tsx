import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">I Cavalieri del Colle</h3>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
            Centro equestre per bambini nelle colline di Calenzano. Centri estivi, equitazione,
            laboratori e passeggiate nella natura toscana.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg">Contatti</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Via di Cupo snc, 50041 Le Croci di Calenzano (FI)</li>
            <li className="flex items-center gap-2"><Phone size={16} /> <a href="tel:+393347077707" className="hover:underline">334 7077707 — Silvia</a></li>
            <li className="flex items-center gap-2"><Mail size={16} /> <a href="mailto:icavalieridelcolle@yahoo.com" className="hover:underline">icavalieridelcolle@yahoo.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">Esplora</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/centri-estivi" className="text-primary-foreground/85 hover:underline">Centri Estivi</Link></li>
            <li><Link to="/attivita" className="text-primary-foreground/85 hover:underline">Attività</Link></li>
            <li><Link to="/ranch" className="text-primary-foreground/85 hover:underline">Il Ranch</Link></li>
            <li><Link to="/contatti" className="text-primary-foreground/85 hover:underline">Contatti</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} I Cavalieri del Colle — Calenzano (FI). Tutti i diritti riservati.
      </div>
    </footer>
  );
}
