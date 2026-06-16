# Piano: Migrazione sito Cavalieri del Colle su Cloudflare Pages

Obiettivo: portare il sito Lovable online su `cavalieridelcolle.it` spendendo il minimo possibile (~10-15€/anno solo per il rinnovo dominio), eliminando i 50€/anno dell'hosting WordPress.

## Risultato finale
- Sito live su **https://cavalieridelcolle.it** (e www)
- Hosting **gratuito a vita** su Cloudflare Pages (SSL automatico, CDN globale)
- Dominio rinnovato direttamente presso il registrar (~10-15€/anno)
- Vecchio hosting WordPress disdetto

## Passi operativi

### 1. Preparare il sito per l'export statico
- Verificare che il progetto TanStack Start sia configurato per il build di produzione (`bun run build`)
- Assicurarsi che tutte le rotte siano prerenderizzate come HTML statico (le 5 pagine: home, centri-estivi, attivita, ranch, contatti)
- Verificare che `sitemap.xml` e `robots.txt` siano inclusi nell'output
- Il form contatti dovrà puntare a un servizio esterno gratuito (vedi punto 6)

### 2. Recuperare le credenziali del dominio da Silvia
Servono per gestire i DNS. Chiedere a Silvia:
- Dove ha comprato originariamente `cavalieridelcolle.it` (Aruba, Register.it, GoDaddy, ecc.)
- Username e password del pannello registrar
- Se il dominio è "incluso" nel pacchetto hosting WordPress, va **scorporato** prima della disdetta (chiamare l'assistenza del provider)

### 3. Creare account Cloudflare (gratuito)
- Registrarsi su https://dash.cloudflare.com
- Nessuna carta di credito richiesta per il piano Free
- Creare un nuovo progetto su **Cloudflare Pages**

### 4. Pubblicare il sito su Cloudflare Pages
Due opzioni:
- **Opzione GitHub (consigliata):** export del progetto Lovable su GitHub → collegare il repo a Cloudflare Pages → ogni modifica futura si pubblica con un click
- **Opzione upload manuale:** scaricare la cartella `dist/` dal build locale e caricarla su Cloudflare Pages via drag-and-drop

### 5. Collegare il dominio cavalieridelcolle.it
Nel pannello registrar di Silvia, modificare i DNS:
- Cambiare i **nameserver** del dominio con quelli forniti da Cloudflare (es. `xxx.ns.cloudflare.com`)
- In alternativa, mantenere i nameserver attuali e aggiungere solo i record CNAME forniti da Cloudflare Pages
- Cloudflare emette automaticamente certificato SSL (HTTPS) entro pochi minuti
- Propagazione DNS: 1-24 ore

### 6. Gestione form contatti
Il form contatti attuale ha bisogno di un backend. Soluzioni gratuite:
- **Formspree** (50 invii/mese gratis) – basta cambiare l'action del form
- **Web3Forms** (250 invii/mese gratis)
- **Mailto link** (apre il client email del visitatore, zero costi e zero setup)
- In alternativa, sostituire il form con un grosso pulsante WhatsApp diretto al numero di Silvia

### 7. Email su @cavalieridelcolle.it (se usata)
Verificare con Silvia se usa caselle email tipo `info@cavalieridelcolle.it`:
- **Se sì:** prima di disdire l'hosting WordPress, attivare un servizio email separato (Zoho Mail gratuito fino a 5 caselle, oppure mail-only del registrar a ~10€/anno)
- **Se no:** continuare a usare `icavalieridelcolle@yahoo.com` già presente nel sito

### 8. Disdetta hosting WordPress
Solo dopo che il nuovo sito è online e funzionante:
- Esportare backup completo del vecchio WordPress (sicurezza)
- Disdire l'hosting mantenendo solo il dominio attivo
- Confermare con il provider che il dominio NON venga cancellato insieme all'hosting

## Costi finali annui per Silvia
| Voce | Costo |
|---|---|
| Dominio cavalieridelcolle.it (rinnovo) | ~10-15€ |
| Hosting Cloudflare Pages | 0€ |
| SSL/HTTPS | 0€ |
| Form contatti (Formspree free tier) | 0€ |
| Email (se serve, Zoho free) | 0€ |
| **Totale** | **~10-15€/anno** |

Risparmio rispetto ai 50€ attuali: **~35-40€/anno**.

## Modifiche future
Quando Silvia chiederà aggiornamenti (foto nuove, date centri estivi, prezzi):
1. Aprire il progetto Lovable, fare le modifiche in chat
2. Rifare il build ed esportare la cartella `dist/`
3. Caricarla su Cloudflare Pages (o push su GitHub se collegato)
4. Le modifiche sono live in 1-2 minuti

Tempo stimato per aggiornamento medio: 10-15 minuti.

## Cosa NON è incluso in questo piano
- Implementazione codice del backend form (verrà fatta in build mode dopo approvazione)
- Modifiche al design o ai contenuti del sito attuale
- Operazioni manuali nel pannello Cloudflare/registrar: queste le farai tu (o io ti guido passo-passo nei messaggi successivi), Lovable non ha accesso a quegli account

## Prossimo passo dopo l'approvazione
In build mode posso:
1. Aggiungere l'integrazione form contatti (Formspree o WhatsApp button) – dimmi quale preferisci
2. Verificare che il build produca output 100% statico compatibile con Cloudflare Pages
3. Generare istruzioni dettagliate screenshot-by-screenshot per i punti che richiedono il tuo intervento manuale (Cloudflare + DNS registrar)
