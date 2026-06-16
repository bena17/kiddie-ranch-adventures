import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Pagina non trovata</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Torna alla home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl text-foreground">Qualcosa è andato storto</h1>
        <p className="mt-2 text-sm text-muted-foreground">Riprova o torna alla home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Riprova
          </button>
          <a href="/" className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "I Cavalieri del Colle — Centro Equestre per Bambini a Calenzano" },
      { name: "description", content: "Centro estivo, equitazione e attività con i cavalli per bambini nelle colline di Calenzano (FI). Esperienze autentiche nella natura toscana." },
      { name: "author", content: "I Cavalieri del Colle" },
      { property: "og:site_name", content: "I Cavalieri del Colle" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#3a5a3a" },
      { property: "og:title", content: "I Cavalieri del Colle — Centro Equestre per Bambini a Calenzano" },
      { name: "twitter:title", content: "I Cavalieri del Colle — Centro Equestre per Bambini a Calenzano" },
      { property: "og:description", content: "Centro estivo, equitazione e attività con i cavalli per bambini nelle colline di Calenzano (FI). Esperienze autentiche nella natura toscana." },
      { name: "twitter:description", content: "Centro estivo, equitazione e attività con i cavalli per bambini nelle colline di Calenzano (FI). Esperienze autentiche nella natura toscana." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/zBmDzILq3Ze6TbHp4zt6m6UQ5y52/social-images/social-1781629819579-Duck-ai-image-2026-06-16-17-09.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/zBmDzILq3Ze6TbHp4zt6m6UQ5y52/social-images/social-1781629819579-Duck-ai-image-2026-06-16-17-09.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EquestrianFacility",
          name: "I Cavalieri del Colle",
          description: "Centro equestre per bambini con centri estivi, equitazione e attività nella natura.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Via di Cupo snc",
            addressLocality: "Le Croci di Calenzano",
            postalCode: "50041",
            addressRegion: "FI",
            addressCountry: "IT",
          },
          telephone: "+39 334 7077707",
          email: "icavalieridelcolle@yahoo.com",
          areaServed: ["Calenzano", "Firenze", "Toscana"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
