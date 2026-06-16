# Piano: Ponte automatico Lovable → GitHub → Cloudflare

Obiettivo: configurare un workflow in cui ogni modifica fatta in chat su Lovable si pubblichi **automaticamente** sul sito live `cavalieridelcolle.it` ospitato gratis su Cloudflare, senza interventi tecnici manuali per ogni update.

## Come funzionerà a regime

```text
Tu chiedi modifica in chat Lovable
        ↓
Lovable salva il codice
        ↓ (sync automatico)
Repository GitHub aggiornato
        ↓ (webhook automatico)
Cloudflare Pages rileva il push
        ↓ (build automatica ~1 min)
Sito live aggiornato su cavalieridelcolle.it
```

Tempo totale da modifica a pubblicazione: **2-3 minuti, zero lavoro manuale tuo**.

## Setup iniziale (una volta sola, ~30 minuti)

### Step 1 — Collegare Lovable a GitHub
Operazione tua nel pannello Lovable:
1. Aprire il menu **+** in basso a sinistra nella chat
2. Cliccare **GitHub → Connect project**
3. Autorizzare la Lovable GitHub App sul tuo account GitHub (se non hai un account, registrarsi gratis su github.com)
4. Selezionare l'account/organizzazione dove creare il repo
5. Cliccare **Create Repository** → Lovable crea automaticamente il repository con tutto il codice attuale
6. Verifica: il repo `cavalieri-del-colle` (o nome scelto) appare nel tuo GitHub

Da questo momento, **ogni modifica fatta in chat Lovable si pusha automaticamente su GitHub** in tempo reale.

### Step 2 — Creare account Cloudflare
1. Registrarsi gratis su https://dash.cloudflare.com
2. Nessuna carta di credito richiesta
3. Verificare l'email

### Step 3 — Connettere Cloudflare Pages al repo GitHub
Nel pannello Cloudflare:
1. Andare su **Workers & Pages → Create application → Pages → Connect to Git**
2. Autorizzare Cloudflare ad accedere al repo GitHub
3. Selezionare il repository `cavalieri-del-colle`
4. Configurare il build:
   - **Framework preset:** None (custom)
   - **Build command:** `bun run build`
   - **Build output directory:** `dist/client`
   - **Root directory:** lasciare vuoto
5. Cliccare **Save and Deploy** → primo deploy parte in 1-2 minuti
6. Cloudflare assegna un URL tipo `cavalieri-del-colle.pages.dev` per test

**Nota tecnica:** il progetto è SSR (server-side rendering) con preset Cloudflare Workers. Cloudflare Pages supporta nativamente il deploy SSR via il file `wrangler.json` generato in `dist/server/`. Se Pages dovesse dare problemi con SSR, l'alternativa è **Cloudflare Workers** diretto via comando `wrangler deploy` — questa scelta la verifichiamo durante il setup vero.

### Step 4 — Collegare il dominio cavalieridelcolle.it
1. In Cloudflare Pages → progetto → **Custom domains → Set up a custom domain**
2. Inserire `cavalieridelcolle.it` e `www.cavalieridelcolle.it`
3. Cloudflare mostra i record DNS da configurare (in genere: cambiare nameserver del dominio)
4. Andare nel pannello del registrar dove Silvia ha il dominio (Aruba/Register.it/altro)
5. Cambiare i **nameserver** con quelli forniti da Cloudflare (es. `xyz.ns.cloudflare.com`)
6. Attendere propagazione DNS (1-24 ore)
7. Cloudflare emette SSL automatico → sito live su https://cavalieridelcolle.it

### Step 5 — Disdetta hosting WordPress
Solo **dopo** verifica che il nuovo sito è live:
1. Backup completo del vecchio WordPress (sicurezza)
2. Disdetta hosting mantenendo dominio attivo
3. Confermare con provider che dominio non venga cancellato
4. Se Silvia usa email `@cavalieridelcolle.it`, attivare prima un servizio email separato (Zoho Mail gratis fino a 5 caselle, o servizio mail-only del registrar ~10€/anno)

## Workflow modifiche future (dopo il setup)

Quando Silvia chiederà un aggiornamento:
1. Apri Lovable, scrivi in chat: "cambia le date dei centri estivi 2027"
2. Io modifico il codice → push automatico su GitHub
3. Cloudflare rileva il push → build automatica (~1 minuto)
4. Sito live aggiornato su `cavalieridelcolle.it`
5. **Zero comandi da terminale, zero upload manuali**

## Costi realistici annui

| Voce | Costo minimo | Costo se modifiche frequenti |
|---|---|---|
| Rinnovo dominio `cavalieridelcolle.it` | ~10-15€/anno | ~10-15€/anno |
| Hosting (Cloudflare Pages) | 0€ | 0€ |
| SSL/HTTPS | 0€ | 0€ |
| Email `@cavalieridelcolle.it` (se serve) | 0€ (Zoho gratis 5 caselle) | ~10-50€/anno |
| Lovable — crediti gratis | 0€ | — |
| Lovable — piano Pro (solo mesi con modifiche) | 0€ | ~20$/mese (~220€/anno) |
| **TOTALE STIMATO** | **~15€/anno** | **~250-280€/anno** |

**Onestà sui costi:**
- Se Silvia ti chiede 2-3 modifiche all'anno, usi i crediti gratis di Lovable e paghi solo il dominio: **sì, circa 15€/anno.**
- Se ti chiede modifiche ogni mese (date centri estivi, foto, testi), ti serve il piano Pro Lovable a ~20$/mese. In quei mesi paghi, negli altri no (puoi attivare/disattivare).
- Se ha email aziendali sul dominio, aggiungi il costo del servizio mail (che oggi è incluso nell'hosting WordPress, su Cloudflare no).

## Difficoltà del setup: onesto

**Se non hai mai fatto queste cose, il setup NON è banale.** Non ti mento.

- Collegare Lovable → GitHub: **facile** (sono 3 click).
- Configurare Cloudflare Pages con il repo: **medio** (devi capire build command, output directory, framework preset).
- Cambiare i nameserver del dominio nel pannello di Aruba/Register.it: **medio-difficile** se non sai cosa sono i DNS. Se sbagli, il sito o le email vanno offline.
- Se il deploy SSR su Cloudflare Pages non funziona al primo colpo: **difficile** per un non-tecnico. Richiede debugging da terminale.

**Cosa puoi fare davvero:**
1. **Provi tu con le mie istruzioni passo-passo** — rischioso se il DNS si rompe.
2. **Chiedi a un tecnico/amico di fare il setup iniziale** — 30 min di lavoro per chi sa farlo. Poi tu gestisci solo le modifiche future in chat con me.
3. **Alternativa più semplice (consigliata se non sei sicuro):** uso Netlify invece di Cloudflare Pages. Netlify permette il drag-and-drop del cartella `dist` senza GitHub, senza build automatica, senza nameserver. Più manuale ma molto più semplice da capire.
4. **Alternativa più sicura:** restare sull'hosting di Lovable (a pagamento su piano Pro, ~20$/mese) dove il dominio si collega automaticamente e non devi toccare DNS né GitHub.

## Cosa NON è incluso in questo piano
- Operazioni nei pannelli esterni (GitHub, Cloudflare, registrar): le farai tu seguendo le mie istruzioni passo-passo
- Lovable non ha accesso a quegli account, posso solo guidarti via chat
- Debugging di problemi di deploy Cloudflare (SSR, build fallite, DNS non propagato) — se non sei pratico, diventa frustrante
- **Fallback:** se Cloudflare Pages non funziona con questo progetto SSR, si passa a Cloudflare Workers (richiede terminale) o a Netlify

## Prossimi passi pratici dopo l'approvazione
Ti guido nell'ordine corretto:
1. Prima: connessione Lovable ↔ GitHub (puoi farlo subito, basta cliccare il pulsante +)
2. Poi: setup Cloudflare Pages con il repo
3. Infine: collegamento dominio + disdetta hosting WordPress

Vuoi che ti scriva le **istruzioni screenshot-by-screenshot** per il primo step (connessione GitHub) appena approvi questo piano?
