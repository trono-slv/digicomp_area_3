// ====================================================================
// 1. ARRAY DELLE DOMANDE (Paniere Completo)
// 200 Domande totali - Sezioni 3.1, 3.2, 3.3, 3.4
// ====================================================================
let paniereCompleto = [
    // Sezione 3.1: Sviluppare contenuti digitali (domande 1-50)
    {
        "domanda": "Qual è un formato audio comune noto per la sua capacità di comprimere i file senza perdere molta qualità?",
        "opzioni": ["WAV", "MP3", "FLAC", "AAC"],
        "rispostaCorretta": "MP3",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale formato di immagine supporta la trasparenza e è senza perdita di dati?",
        "opzioni": ["JPEG", "GIF", "PNG", "TIFF"],
        "rispostaCorretta": "PNG",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un formato di testo universale che mantiene il layout indipendentemente dal dispositivo?",
        "opzioni": ["TXT", "DOCX", "EPUB", "PDF"],
        "rispostaCorretta": "PDF",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale formato video è noto per il suo equilibrio tra qualità e compressione?",
        "opzioni": ["AVI", "MKV", "MP4", "MOV"],
        "rispostaCorretta": "MP4",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un formato per applicazioni Android?",
        "opzioni": ["EXE", "DMG", "APP", "APK"],
        "rispostaCorretta": "APK",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è l'importanza principale dell'accessibilità digitale?",
        "opzioni": ["Ridurre i costi di sviluppo", "Garantire l'accesso a tutti, incluse persone con disabilità", "Migliorare solo l'estetica dei siti", "Aumentare la velocità di caricamento"],
        "rispostaCorretta": "Garantire l'accesso a tutti, incluse persone con disabilità",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale principio chiave dell'accessibilità digitale riguarda la presentazione di informazioni percepibili dagli utenti?",
        "opzioni": ["Operabilità", "Comprensibilità", "Robustezza", "Percezione"],
        "rispostaCorretta": "Percezione",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "In quale contesto viene spesso utilizzata la realtà aumentata (AR)?",
        "opzioni": ["Gaming immersivo", "Retail per provare prodotti virtualmente", "Addestramento militare", "Turismo virtuale"],
        "rispostaCorretta": "Retail per provare prodotti virtualmente",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un vantaggio comune di AR e VR?",
        "opzioni": ["Separazione completa dal mondo reale", "Esplorazione interattiva senza limitazioni fisiche", "Riduzione della qualità grafica", "Aumento dei rischi reali"],
        "rispostaCorretta": "Esplorazione interattiva senza limitazioni fisiche",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "I sistemi di IA generano contenuti basandosi su cosa?",
        "opzioni": ["Dati di addestramento", "Istruzioni casuali", "Solo input utente", "Hardware specifico"],
        "rispostaCorretta": "Dati di addestramento",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un rischio dei contenuti generati da IA?",
        "opzioni": ["Originalità assoluta", "Riflesso di bias nei dati", "Attribuzione automatica", "Uso irresponsabile evitato"],
        "rispostaCorretta": "Riflesso di bias nei dati",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un esempio di prompt per un articolo di blog?",
        "opzioni": ["Genera un'immagine lunare", "Scrivi un articolo sui benefici della meditazione", "Disegna un abito da sera", "Racconta una storia breve"],
        "rispostaCorretta": "Scrivi un articolo sui benefici della meditazione",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Dove si trovano le linee guida WCAG per l'accessibilità digitale?",
        "opzioni": ["Sito W3C", "Google Developers", "Apple Store", "Microsoft Docs"],
        "rispostaCorretta": "Sito W3C",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale strumento verifica l'accessibilità dei siti web?",
        "opzioni": ["WAVE", "Photoshop", "Excel", "Word"],
        "rispostaCorretta": "WAVE",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è il primo passo per creare un documento in Microsoft Word?",
        "opzioni": ["Salvare il file", "Aprire il programma", "Formattare il testo", "Incollare contenuto"],
        "rispostaCorretta": "Aprire il programma",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale scorciatoia copia testo su Windows?",
        "opzioni": ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
        "rispostaCorretta": "Ctrl + C",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è il formato predefinito per salvare in Excel?",
        "opzioni": [".docx", ".xlsx", ".pdf", ".txt"],
        "rispostaCorretta": ".xlsx",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Come si inseriscono dati in una cella di Excel?",
        "opzioni": ["Cliccando e digitando", "Usando solo formule", "Solo con copia/incolla", "Tramite menu File"],
        "rispostaCorretta": "Cliccando e digitando",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale funzione base formatta il testo in grassetto?",
        "opzioni": ["Allineamento", "Grassetto", "Elenco numerato", "Font"],
        "rispostaCorretta": "Grassetto",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è l'allineamento che distribuisce il testo uniformemente?",
        "opzioni": ["A sinistra", "Centrato", "Giustificato", "A destra"],
        "rispostaCorretta": "Giustificato",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Come si esporta un documento in PDF da Word?",
        "opzioni": ["Salva con nome > PDF", "Stampa > PDF", "Inserisci > PDF", "Modifica > PDF"],
        "rispostaCorretta": "Salva con nome > PDF",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è il primo passo per ordinare dati in Excel?",
        "opzioni": ["Seleziona i dati", "Crea un grafico", "Inserisci formula", "Salva il file"],
        "rispostaCorretta": "Seleziona i dati",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale formato è comune per esportare un foglio di calcolo?",
        "opzioni": [".exe", ".csv", ".gif", ".wav"],
        "rispostaCorretta": ".csv",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Come si inserisce un'immagine in Word?",
        "opzioni": ["Inserisci > Immagini", "File > Immagine", "Modifica > Immagine", "Vista > Immagine"],
        "rispostaCorretta": "Inserisci > Immagini",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è una funzione base in un foglio di calcolo?",
        "opzioni": ["=SOMMA()", "=FONT()", "=COLOR()", "=ALIGN()"],
        "rispostaCorretta": "=SOMMA()",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale grafico è ideale per mostrare proporzioni?",
        "opzioni": ["A colonne", "A torta", "A linee", "A barre"],
        "rispostaCorretta": "A torta",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è la funzione per la media in Excel?",
        "opzioni": ["=MASSIMO()", "=MINIMO()", "=MEDIA()", "=SOMMA()"],
        "rispostaCorretta": "=MEDIA()",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale dispositivo è essenziale per la realtà virtuale?",
        "opzioni": ["Smartphone", "Visore VR", "Tablet", "Mouse"],
        "rispostaCorretta": "Visore VR",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Come si formatta una tabella in Word?",
        "opzioni": ["Strumenti tabella > Progettazione", "Inserisci > Formato", "Vista > Tabella", "Modifica > Tabella"],
        "rispostaCorretta": "Strumenti tabella > Progettazione",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è l'operatore in =SE(A1>10; \"Sì\"; \"No\")?",
        "opzioni": ["=", ">", "<", "=SE"],
        "rispostaCorretta": ">",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un formato lossless per audio?",
        "opzioni": ["MP3", "AAC", "FLAC", "MP4"],
        "rispostaCorretta": "FLAC",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale principio dell'accessibilità riguarda l'uso di tastiera?",
        "opzioni": ["Percezione", "Operabilità", "Comprensibilità", "Robustezza"],
        "rispostaCorretta": "Operabilità",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un contesto di uso per la VR?",
        "opzioni": ["Prova prodotti in casa", "Simulazioni chirurgiche", "Sovrapposizione elementi digitali", "Istruzioni in tempo reale"],
        "rispostaCorretta": "Simulazioni chirurgiche",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un prompt per un'immagine artistica?",
        "opzioni": ["Scrivi un articolo", "Genera un ritratto rinascimentale", "Racconta una storia", "Crea un post Instagram"],
        "rispostaCorretta": "Genera un ritratto rinascimentale",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale strumento è open-source per verificare accessibilità?",
        "opzioni": ["WAVE", "Lighthouse", "axe DevTools", "AChecker"],
        "rispostaCorretta": "Lighthouse",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è il comando per incollare su Mac?",
        "opzioni": ["Cmd + C", "Cmd + X", "Cmd + V", "Cmd + Z"],
        "rispostaCorretta": "Cmd + V",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un formato per libri digitali?",
        "opzioni": ["TXT", "EPUB", "PDF", "DOCX"],
        "rispostaCorretta": "EPUB",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Come si crea un nuovo foglio in Google Sheets?",
        "opzioni": ["File > Nuovo", "+ Vuoto", "Salva come", "Inserisci cella"],
        "rispostaCorretta": "+ Vuoto",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è la scorciatoia per annullare su Windows?",
        "opzioni": ["Ctrl + Y", "Ctrl + Z", "Ctrl + V", "Ctrl + X"],
        "rispostaCorretta": "Ctrl + Z",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale funzione formatta elenchi puntati?",
        "opzioni": ["Grassetto", "Elenchi puntati", "Dimensione testo", "Allineamento"],
        "rispostaCorretta": "Elenchi puntati",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è l'allineamento predefinito in documenti?",
        "opzioni": ["Giustificato", "A sinistra", "Centrato", "A destra"],
        "rispostaCorretta": "A sinistra",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Come si ordina in ordine crescente in Excel?",
        "opzioni": ["Dati > Ordina > A-Z", "File > Ordina", "Inserisci > Ordina", "Vista > Ordina"],
        "rispostaCorretta": "Dati > Ordina > A-Z",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale formato è per software Windows?",
        "opzioni": ["APK", "EXE", "APP", "DMG"],
        "rispostaCorretta": "EXE",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un vantaggio dell'accessibilità commerciale?",
        "opzioni": ["Riduzione pubblico", "Ampliamento pubblico potenziale", "Aumento bias", "Minor innovazione"],
        "rispostaCorretta": "Ampliamento pubblico potenziale",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un uso della AR in industria?",
        "opzioni": ["Esperienze di gioco", "Istruzioni in tempo reale per manutenzione", "Esplorare luoghi lontani", "Simulazioni complesse"],
        "rispostaCorretta": "Istruzioni in tempo reale per manutenzione",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "I contenuti IA sono spesso?",
        "opzioni": ["Originali al 100%", "Derivativi", "Senza bias", "Sempre attribuiti"],
        "rispostaCorretta": "Derivativi",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è un prompt per un paesaggio?",
        "opzioni": ["Scrivi un articolo", "Crea un'immagine di paesaggio lunare", "Componi una poesia", "Descrizione prodotto"],
        "rispostaCorretta": "Crea un'immagine di paesaggio lunare",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Quale direttiva UE riguarda l'accessibilità web?",
        "opzioni": ["WCAG", "Direttiva UE sull'accessibilità web", "WAI", "EN 301 549"],
        "rispostaCorretta": "Direttiva UE sull'accessibilità web",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Come si salva in LibreOffice Writer?",
        "opzioni": [".docx", ".odt", ".xlsx", ".mp4"],
        "rispostaCorretta": ".odt",
        "area": "Sezione 3.1"
    },
    {
        "domanda": "Qual è la scorciatoia per tagliare su Mac?",
        "opzioni": ["Cmd + V", "Cmd + X", "Cmd + C", "Cmd + Z"],
        "rispostaCorretta": "Cmd + X",
        "area": "Sezione 3.1"
    },
    
    // Sezione 3.2: Integrare e rielaborare contenuti digitali (domande 51-100)
    {
        "domanda": "Qual è un scopo di modificare contenuti digitali esistenti?",
        "opzioni": ["Aggiornare informazioni", "Ridurre qualità", "Ignorare errori", "Limitare pubblico"],
        "rispostaCorretta": "Aggiornare informazioni",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Quale strumento è per creare infografiche?",
        "opzioni": ["Canva", "Excel", "Word", "Paint"],
        "rispostaCorretta": "Canva",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un robot programmabile citato?",
        "opzioni": ["Lego Mindstorms", "Smartphone", "Tablet", "Mouse"],
        "rispostaCorretta": "Lego Mindstorms",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Come si inserisce testo in un PDF con Adobe?",
        "opzioni": ["Compila e firma", "Stampa", "Inserisci immagine", "Esporta"],
        "rispostaCorretta": "Compila e firma",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Come si aggiunge musica a un video in iMovie?",
        "opzioni": ["Trascina audio nella timeline", "Stampa video", "Inserisci testo", "Salva come"],
        "rispostaCorretta": "Trascina audio nella timeline",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un uso etico di contenuti IA?",
        "opzioni": ["Ignorare attribuzione", "Integrarli con transparency", "Copiare senza modifica", "Aumentare bias"],
        "rispostaCorretta": "Integrarli con transparency",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Quale grafico è per trend temporali?",
        "opzioni": ["A torta", "A linee", "A colonne", "A barre"],
        "rispostaCorretta": "A linee",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è la funzione MASSIMO in un foglio?",
        "opzioni": ["Trova minimo", "Trova massimo", "Calcola media", "Somma valori"],
        "rispostaCorretta": "Trova massimo",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un dispositivo per VR?",
        "opzioni": ["Occhiali AR", "Controller movimento", "Tastiera", "Schermo PC"],
        "rispostaCorretta": "Controller movimento",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Come si modifica un grafico in Excel?",
        "opzioni": ["Strumenti grafico > Progettazione", "File > Modifica", "Inserisci > Modifica", "Vista > Modifica"],
        "rispostaCorretta": "Strumenti grafico > Progettazione",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è l'operatore in =SE(A1=5; \"Sì\"; \"No\")?",
        "opzioni": [">", "<", "=", "SE"],
        "rispostaCorretta": "=",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un programma per infografiche interattive?",
        "opzioni": ["Genially", "Excel", "Word", "Notepad"],
        "rispostaCorretta": "Genially",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un modo per migliorare accessibilità video?",
        "opzioni": ["Aggiungere sottotitoli", "Ridurre qualità", "Rimuovere audio", "Aumentare volume"],
        "rispostaCorretta": "Aggiungere sottotitoli",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per trascrizioni automatiche?",
        "opzioni": ["Otter.ai", "Paint", "Calculator", "Browser"],
        "rispostaCorretta": "Otter.ai",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un passo per progettare infografiche?",
        "opzioni": ["Definisci messaggio principale", "Ignora pubblico", "Usa colori casuali", "Evita dati"],
        "rispostaCorretta": "Definisci messaggio principale",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per descrizioni audio?",
        "opzioni": ["Adobe Premiere Pro", "Excel", "Word", "PowerPoint"],
        "rispostaCorretta": "Adobe Premiere Pro",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un uso di contenuti IA?",
        "opzioni": ["Integrarli nei propri lavori", "Copiarli senza credito", "Ignorare etica", "Ridurre trasparenza"],
        "rispostaCorretta": "Integrarli nei propri lavori",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un grafico per comparazioni?",
        "opzioni": ["A barre", "A torta", "A linee", "A punti"],
        "rispostaCorretta": "A barre",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è la funzione MINIMO?",
        "opzioni": ["Trova minimo", "Trova massimo", "Somma", "Media"],
        "rispostaCorretta": "Trova minimo",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un controller per VR?",
        "opzioni": ["Motion controller", "Tastiera", "Mouse", "Schermo"],
        "rispostaCorretta": "Motion controller",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Come si cambia titolo grafico in Google Sheets?",
        "opzioni": ["Modifica grafico > Personalizza", "File > Titolo", "Inserisci > Titolo", "Vista > Titolo"],
        "rispostaCorretta": "Modifica grafico > Personalizza",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un esempio di SE con < ?",
        "opzioni": ["=SE(A1<10; \"Sì\"; \"No\")", "=SE(A1=10; \"Sì\"; \"No\")", "=SE(A1>10; \"Sì\"; \"No\")", "=SE(A1; \"Sì\"; \"No\")"],
        "rispostaCorretta": "=SE(A1<10; \"Sì\"; \"No\")",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per collaborazione visiva?",
        "opzioni": ["Miro", "Notepad", "Calculator", "Browser"],
        "rispostaCorretta": "Miro",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un principio WCAG?",
        "opzioni": ["Percezione", "Velocità", "Costo", "Colore"],
        "rispostaCorretta": "Percezione",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un passo per personalizzare modelli infografiche?",
        "opzioni": ["Modifica colori e font", "Ignora layout", "Rimuovi dati", "Aumenta complessità"],
        "rispostaCorretta": "Modifica colori e font",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per editing video con audio?",
        "opzioni": ["iMovie", "Excel", "Word", "Paint"],
        "rispostaCorretta": "iMovie",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un rischio legale con contenuti IA?",
        "opzioni": ["Proprietà intellettuale", "Originalità assoluta", "Bias ridotti", "Uso gratuito sempre"],
        "rispostaCorretta": "Proprietà intellettuale",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un grafico per composizioni?",
        "opzioni": ["A torta", "A colonne", "A linee", "A barre"],
        "rispostaCorretta": "A torta",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è la funzione SOMMA?",
        "opzioni": ["Somma valori", "Trova minimo", "Trova massimo", "Media"],
        "rispostaCorretta": "Somma valori",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un sensore per VR?",
        "opzioni": ["Sensori movimento", "Tastiera", "Mouse", "Schermo"],
        "rispostaCorretta": "Sensori movimento",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Come si modifica legenda grafico in Excel?",
        "opzioni": ["Strumenti grafico > Layout", "File > Legenda", "Inserisci > Legenda", "Vista > Legenda"],
        "rispostaCorretta": "Strumenti grafico > Layout",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un esempio di SE con > ?",
        "opzioni": ["=SE(A1>5; \"Sì\"; \"No\")", "=SE(A1<5; \"Sì\"; \"No\")", "=SE(A1=5; \"Sì\"; \"No\")", "=SE(A1; \"Sì\"; \"No\")"],
        "rispostaCorretta": "=SE(A1>5; \"Sì\"; \"No\")",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per infografiche dati?",
        "opzioni": ["Infogram", "Notepad", "Calculator", "Browser"],
        "rispostaCorretta": "Infogram",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per sottotitoli?",
        "opzioni": ["Amara", "Paint", "Excel", "Word"],
        "rispostaCorretta": "Amara",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un passo per infografiche?",
        "opzioni": ["Raccogli dati affidabili", "Ignora organizzazione", "Usa palette casuali", "Evita visualizzazioni"],
        "rispostaCorretta": "Raccogli dati affidabili",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per sintesi vocale?",
        "opzioni": ["Natural Reader", "Excel", "Word", "Paint"],
        "rispostaCorretta": "Natural Reader",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un uso responsabile IA?",
        "opzioni": ["Esaminare e modificare output", "Copiare senza verifica", "Ignorare etica", "Ridurre qualità"],
        "rispostaCorretta": "Esaminare e modificare output",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un grafico per trend?",
        "opzioni": ["A linee", "A torta", "A colonne", "A punti"],
        "rispostaCorretta": "A linee",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è la funzione MEDIA?",
        "opzioni": ["Calcola media", "Trova minimo", "Trova massimo", "Somma"],
        "rispostaCorretta": "Calcola media",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tapis roulant per VR?",
        "opzioni": ["Omnidirectional treadmill", "Tastiera", "Mouse", "Schermo"],
        "rispostaCorretta": "Omnidirectional treadmill",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Come si aggiunge elementi grafico in Excel?",
        "opzioni": ["Progettazione > Aggiungi", "File > Aggiungi", "Inserisci > Aggiungi", "Vista > Aggiungi"],
        "rispostaCorretta": "Progettazione > Aggiungi",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un esempio di SE con = ?",
        "opzioni": ["=SE(A1=10; \"Sì\"; \"No\")", "=SE(A1>10; \"Sì\"; \"No\")", "=SE(A1<10; \"Sì\"; \"No\")", "=SE(A1; \"Sì\"; \"No\")"],
        "rispostaCorretta": "=SE(A1=10; \"Sì\"; \"No\")",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per infografiche interattive?",
        "opzioni": ["Venngage", "Notepad", "Calculator", "Browser"],
        "rispostaCorretta": "Venngage",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un test per accessibilità?",
        "opzioni": ["Test con persone disabili", "Ignora feedback", "Riduci qualità", "Aumenta complessità"],
        "rispostaCorretta": "Test con persone disabili",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un passo per poster digitali?",
        "opzioni": ["Scegli palette colori", "Ignora gerarchia", "Evita testi", "Usa immagini casuali"],
        "rispostaCorretta": "Scegli palette colori",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un tool per editing online?",
        "opzioni": ["Kapwing", "Excel", "Word", "Paint"],
        "rispostaCorretta": "Kapwing",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un principio per IA?",
        "opzioni": ["Etica e trasparenza", "Ignora limitazioni", "Riduci uso", "Aumenta bias"],
        "rispostaCorretta": "Etica e trasparenza",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un grafico per categorie?",
        "opzioni": ["A colonne", "A torta", "A linee", "A punti"],
        "rispostaCorretta": "A colonne",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è la funzione MASSIMO?",
        "opzioni": ["Trova massimo", "Trova minimo", "Somma", "Media"],
        "rispostaCorretta": "Trova massimo",
        "area": "Sezione 3.2"
    },
    {
        "domanda": "Qual è un guanto per VR?",
        "opzioni": ["Guanti aptici", "Tastiera", "Mouse", "Schermo"],
        "rispostaCorretta": "Guanti aptici",
        "area": "Sezione 3.2"
    },
    
    // Sezione 3.3: Copyright e licenze (domande 101-150)
    {
        "domanda": "Qual è un elemento base del diritto d'autore?",
        "opzioni": ["Protezione automatica", "Obbligo registrazione", "Durata illimitata", "Nessun diritto morale"],
        "rispostaCorretta": "Protezione automatica",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è la durata tipica del copyright?",
        "opzioni": ["Vita autore + 70 anni", "10 anni", "Illimitata", "Solo vita autore"],
        "rispostaCorretta": "Vita autore + 70 anni",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è una differenza tra software proprietario e open source?",
        "opzioni": ["Codice sorgente accessibile in open source", "Costo sempre alto in open source", "Controllo utente in proprietario", "Nessuna licenza in open source"],
        "rispostaCorretta": "Codice sorgente accessibile in open source",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un meccanismo per bloccare contenuti?",
        "opzioni": ["Password", "Accesso illimitato", "Nessuna protezione", "Condivisione libera"],
        "rispostaCorretta": "Password",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è una licenza Creative Commons?",
        "opzioni": ["CC BY", "GPL", "MIT", "Apache"],
        "rispostaCorretta": "CC BY",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'eccezione al copyright?",
        "opzioni": ["Uso a scopo illustrativo per insegnamento", "Copia commerciale illimitata", "Modifica senza attribuzione", "Distribuzione libera"],
        "rispostaCorretta": "Uso a scopo illustrativo per insegnamento",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'implicazione legale dell'uso improprio software?",
        "opzioni": ["Violazione copyright", "Nessuna conseguenza", "Aumento sicurezza", "Miglior supporto"],
        "rispostaCorretta": "Violazione copyright",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un blocco geografico?",
        "opzioni": ["Limitazione basata su posizione", "Accesso globale", "Password universale", "Nessuna restrizione"],
        "rispostaCorretta": "Limitazione basata su posizione",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY-SA?",
        "opzioni": ["Attribuzione - Condividi allo stesso modo", "Non commerciale", "No derivati", "Solo attribuzione"],
        "rispostaCorretta": "Attribuzione - Condividi allo stesso modo",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un modo per riconoscere immagini libere?",
        "opzioni": ["Verifica licenze in banche dati", "Ignora metadati", "Usa solo copyright", "Copia senza controllo"],
        "rispostaCorretta": "Verifica licenze in banche dati",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è una limitazione software?",
        "opzioni": ["Rispetto EULA", "Modifica libera", "Distribuzione illimitata", "Uso senza licenza"],
        "rispostaCorretta": "Rispetto EULA",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è una licenza a pagamento?",
        "opzioni": ["Licenza perpetua", "Open source", "Freeware", "Public domain"],
        "rispostaCorretta": "Licenza perpetua",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è TPM?",
        "opzioni": ["Misure protezione tecniche", "Licenza aperta", "Software libero", "Accesso illimitato"],
        "rispostaCorretta": "Misure protezione tecniche",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC0?",
        "opzioni": ["Rinuncia a tutti diritti", "Attribuzione obbligatoria", "Non commerciale", "Condividi allo stesso modo"],
        "rispostaCorretta": "Rinuncia a tutti diritti",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'eccezione per parodia?",
        "opzioni": ["Permesso per caricature", "Copia esatta", "Uso commerciale forzato", "Nessuna modifica"],
        "rispostaCorretta": "Permesso per caricature",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un rischio uso pirata?",
        "opzioni": ["Malware", "Supporto migliorato", "Costi ridotti legali", "Qualità alta"],
        "rispostaCorretta": "Malware",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un blocco per contenuti?",
        "opzioni": ["Blocchi geografici", "Accesso libero", "Nessuna password", "Condivisione globale"],
        "rispostaCorretta": "Blocchi geografici",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY-NC?",
        "opzioni": ["Attribuzione - Non commerciale", "Condividi allo stesso modo", "No derivati", "Solo attribuzione"],
        "rispostaCorretta": "Attribuzione - Non commerciale",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Come si verifica materiale libero?",
        "opzioni": ["Ricerca inversa immagini", "Ignora fonti", "Copia casuale", "Nessun controllo"],
        "rispostaCorretta": "Ricerca inversa immagini",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un motivo per rispettare limitazioni?",
        "opzioni": ["Legalità", "Violazione volontaria", "Riduzione sicurezza", "Aumento bug"],
        "rispostaCorretta": "Legalità",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è una licenza a sottoscrizione?",
        "opzioni": ["Pagamento ricorrente per periodo", "Gratuita illimitata", "Solo una tantum", "Nessun rinnovo"],
        "rispostaCorretta": "Pagamento ricorrente per periodo",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un esempio di TPM?",
        "opzioni": ["Crittografia", "Accesso aperto", "Nessuna protezione", "Condivisione libera"],
        "rispostaCorretta": "Crittografia",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY-ND?",
        "opzioni": ["Attribuzione - No opere derivate", "Non commerciale", "Condividi allo stesso modo", "Solo attribuzione"],
        "rispostaCorretta": "Attribuzione - No opere derivate",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'eccezione per citazione?",
        "opzioni": ["Citazione per scopi critici", "Copia integrale", "Senza fonte", "Alterazione significato"],
        "rispostaCorretta": "Citazione per scopi critici",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'implicazione privacy software?",
        "opzioni": ["Rispetto GDPR", "Ignora dati personali", "Aumento rischi", "Riduzione conformità"],
        "rispostaCorretta": "Rispetto GDPR",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un metodo per limitare accesso?",
        "opzioni": ["Password", "Accesso illimitato", "Nessuna licenza", "Condivisione libera"],
        "rispostaCorretta": "Password",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY-NC-SA?",
        "opzioni": ["Attribuzione - Non commerciale - Condividi allo stesso modo", "No derivati", "Solo attribuzione", "Commerciale libero"],
        "rispostaCorretta": "Attribuzione - Non commerciale - Condividi allo stesso modo",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Come si riconosce copyright in immagini?",
        "opzioni": ["Metadati", "Ignora info", "Copia senza verifica", "Nessun tool"],
        "rispostaCorretta": "Metadati",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un vantaggio rispetto limitazioni?",
        "opzioni": ["Supporto aggiornamenti", "Violazione legale", "Riduzione performance", "Aumento vulnerabilità"],
        "rispostaCorretta": "Supporto aggiornamenti",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è una licenza trial?",
        "opzioni": ["Uso limitato per valutazione", "Perpetua gratuita", "Open source", "Commerciale illimitata"],
        "rispostaCorretta": "Uso limitato per valutazione",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un esempio di blocco?",
        "opzioni": ["Blocchi geografici", "Accesso globale", "Nessuna restrizione", "Password libera"],
        "rispostaCorretta": "Blocchi geografici",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY-NC-ND?",
        "opzioni": ["Attribuzione - Non commerciale - No derivati", "Condividi allo stesso modo", "Solo attribuzione", "Commerciale libero"],
        "rispostaCorretta": "Attribuzione - Non commerciale - No derivati",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'eccezione per uso privato?",
        "opzioni": ["Copia per uso personale", "Distribuzione commerciale", "Modifica pubblica", "Condivisione globale"],
        "rispostaCorretta": "Copia per uso personale",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un rischio hacking software?",
        "opzioni": ["Accuse penali", "Miglior sicurezza", "Supporto gratuito", "Qualità alta"],
        "rispostaCorretta": "Accuse penali",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un modo per condividere legalmente?",
        "opzioni": ["Richiedi permesso", "Ignora diritti", "Copia senza attribuzione", "Viola licenza"],
        "rispostaCorretta": "Richiedi permesso",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY?",
        "opzioni": ["Attribuzione", "Non commerciale", "No derivati", "Condividi allo stesso modo"],
        "rispostaCorretta": "Attribuzione",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Come si verifica immagini libere?",
        "opzioni": ["Banche dati certificate", "Copia casuale", "Ignora licenze", "Nessuna ricerca"],
        "rispostaCorretta": "Banche dati certificate",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un motivo etico per limitazioni?",
        "opzioni": ["Rispetto sviluppatori", "Violazione volontaria", "Riduzione affidabilità", "Aumento rischi"],
        "rispostaCorretta": "Rispetto sviluppatori",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è una licenza volume?",
        "opzioni": ["Per organizzazioni multiple dispositivi", "Gratuita individuale", "Open source", "Trial breve"],
        "rispostaCorretta": "Per organizzazioni multiple dispositivi",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è DRM?",
        "opzioni": ["Gestione diritti digitali", "Accesso libero", "Nessuna protezione", "Condivisione globale"],
        "rispostaCorretta": "Gestione diritti digitali",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'eccezione per critica?",
        "opzioni": ["Uso per scopi critici", "Copia integrale", "Senza fonte", "Alterazione significato"],
        "rispostaCorretta": "Uso per scopi critici",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'implicazione civile uso improprio?",
        "opzioni": ["Responsabilità civili", "Nessuna conseguenza", "Miglior reputazione", "Riduzione costi"],
        "rispostaCorretta": "Responsabilità civili",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un metodo per protezione?",
        "opzioni": ["Crittografia", "Accesso aperto", "Nessuna password", "Condivisione libera"],
        "rispostaCorretta": "Crittografia",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY-ND?",
        "opzioni": ["Attribuzione - No derivati", "Non commerciale", "Condividi allo stesso modo", "Solo attribuzione"],
        "rispostaCorretta": "Attribuzione - No derivati",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un'eccezione per ricerca?",
        "opzioni": ["Uso per ricerca", "Distribuzione commerciale", "Modifica senza permesso", "Condivisione globale"],
        "rispostaCorretta": "Uso per ricerca",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un rischio pirateria?",
        "opzioni": ["Virus", "Supporto migliorato", "Costi ridotti legali", "Qualità alta"],
        "rispostaCorretta": "Virus",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un modo per usare legalmente?",
        "opzioni": ["Usa licenze aperte", "Ignora fonti", "Copia senza credito", "Viola termini"],
        "rispostaCorretta": "Usa licenze aperte",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è CC BY-SA?",
        "opzioni": ["Attribuzione - Condividi allo stesso modo", "No derivati", "Non commerciale", "Solo attribuzione"],
        "rispostaCorretta": "Attribuzione - Condividi allo stesso modo",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Come si attribuisce in CC?",
        "opzioni": ["Riconosci autore", "Ignora licenza", "Modifica senza credito", "Nessun link"],
        "rispostaCorretta": "Riconosci autore",
        "area": "Sezione 3.3"
    },
    {
        "domanda": "Qual è un vantaggio open source?",
        "opzioni": ["Codice accessibile", "Costo alto", "Controllo limitato", "Nessuna comunità"],
        "rispostaCorretta": "Codice accessibile",
        "area": "Sezione 3.3"
    },

    // Sezione 3.4: Programmazione (domande 151-200)
    {
        "domanda": "Qual è il software base per dispositivi?",
        "opzioni": ["Sistema operativo", "Applicazione", "Driver", "Middleware"],
        "rispostaCorretta": "Sistema operativo",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è la programmazione?",
        "opzioni": ["Scrivere istruzioni precise", "Hardware design", "Rete configurazione", "Dati analisi"],
        "rispostaCorretta": "Scrivere istruzioni precise",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un algoritmo?",
        "opzioni": ["Sequenza istruzioni per risolvere problema", "Hardware componente", "Rete connessione", "Dati raccolta"],
        "rispostaCorretta": "Sequenza istruzioni per risolvere problema",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Quali sono i linguaggi per costruire software?",
        "opzioni": ["Permettono istruzioni interpretate da dispositivi", "Solo per hardware", "Per reti solo", "Per dati solo"],
        "rispostaCorretta": "Permettono istruzioni interpretate da dispositivi",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è input in programmazione?",
        "opzioni": ["Dati forniti al programma", "Risultati prodotti", "Codice sorgente", "Hardware"],
        "rispostaCorretta": "Dati forniti al programma",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è output in programmazione?",
        "opzioni": ["Risultati prodotti", "Dati forniti", "Codice sorgente", "Hardware"],
        "rispostaCorretta": "Risultati prodotti",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è una fase sviluppo programma?",
        "opzioni": ["Analisi", "Stampa", "Copia", "Incolla"],
        "rispostaCorretta": "Analisi",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Quali regole hanno linguaggi programmazione?",
        "opzioni": ["Sintassi e semantica precise", "Nessuna regola", "Solo estetica", "Solo colore"],
        "rispostaCorretta": "Sintassi e semantica precise",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è una struttura controllo?",
        "opzioni": ["Condizionali (if)", "Hardware", "Rete", "Dati"],
        "rispostaCorretta": "Condizionali (if)",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è pseudocodice?",
        "opzioni": ["Rappresentazione testuale algoritmo", "Codice compilato", "Hardware diagramma", "Rete schema"],
        "rispostaCorretta": "Rappresentazione testuale algoritmo",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è scomposizione problema?",
        "opzioni": ["Dividere in parti piccole", "Ignorare dettagli", "Aumentare complessità", "Ridurre analisi"],
        "rispostaCorretta": "Dividere in parti piccole",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è uno schema di flusso?",
        "opzioni": ["Diagramma per algoritmo", "Testo solo", "Hardware", "Rete"],
        "rispostaCorretta": "Diagramma per algoritmo",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un sistema operativo?",
        "opzioni": ["iOS", "App", "Driver", "Middleware"],
        "rispostaCorretta": "iOS",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un algoritmo semplice?",
        "opzioni": ["Somma numeri", "Costruzione hardware", "Configurazione rete", "Analisi dati manuale"],
        "rispostaCorretta": "Somma numeri",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un linguaggio basso livello?",
        "opzioni": ["Assembly", "Python", "Java", "HTML"],
        "rispostaCorretta": "Assembly",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è input esempio?",
        "opzioni": ["Numeri da tastiera", "Risultato stampato", "Codice scritto", "Hardware connesso"],
        "rispostaCorretta": "Numeri da tastiera",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è output esempio?",
        "opzioni": ["Risultato stampato", "Numeri da tastiera", "Codice scritto", "Hardware connesso"],
        "rispostaCorretta": "Risultato stampato",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è fase progettazione?",
        "opzioni": ["Definire architettura", "Eseguire test", "Scrivere codice", "Analisi requisiti"],
        "rispostaCorretta": "Definire architettura",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è una regola sintassi?",
        "opzioni": ["Ordine istruzioni", "Nessuna struttura", "Colori casuali", "Ignora indentazione"],
        "rispostaCorretta": "Ordine istruzioni",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un ciclo?",
        "opzioni": ["For, while", "If", "Funzione", "Classe"],
        "rispostaCorretta": "For, while",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è uno schema flusso simbolo?",
        "opzioni": ["Rombo per decisione", "Cerchio per processo", "Rettangolo per fine", "Freccia per inizio"],
        "rispostaCorretta": "Rombo per decisione",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è scomposizione vantaggio?",
        "opzioni": ["Riduce complessità", "Aumenta problemi", "Ignora parti", "Riduce pianificazione"],
        "rispostaCorretta": "Riduce complessità",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è pseudocodice vantaggio?",
        "opzioni": ["Chiarisce logica", "Compila direttamente", "Hardware controlla", "Rete configura"],
        "rispostaCorretta": "Chiarisce logica",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un'app?",
        "opzioni": ["Programma per compiti specifici", "Sistema operativo", "Driver", "Middleware"],
        "rispostaCorretta": "Programma per compiti specifici",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è efficienza algoritmo?",
        "opzioni": ["Uso ottimale risorse", "Ignora tempo", "Aumenta memoria", "Riduce correttezza"],
        "rispostaCorretta": "Uso ottimale risorse",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un linguaggio alto livello?",
        "opzioni": ["Python", "Assembly", "Machine code", "Binary"],
        "rispostaCorretta": "Python",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è gestione input/output?",
        "opzioni": ["Funzioni specifiche", "Ignora dati", "Solo hardware", "Nessuna trasformazione"],
        "rispostaCorretta": "Funzioni specifiche",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è fase test?",
        "opzioni": ["Verifica funzionalità", "Scrittura codice", "Analisi", "Miglioramento"],
        "rispostaCorretta": "Verifica funzionalità",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è struttura funzioni?",
        "opzioni": ["Blocchi riutilizzabili", "Solo condizionali", "Cicli infiniti", "Classi sole"],
        "rispostaCorretta": "Blocchi riutilizzabili",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è simbolo inizio schema flusso?",
        "opzioni": ["Ovale", "Rombo", "Rettangolo", "Parallelogramma"],
        "rispostaCorretta": "Ovale",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è priorità in scomposizione?",
        "opzioni": ["Ordine sottoproblemi", "Ignora sequenza", "Aumenta complessità", "Riduce risorse"],
        "rispostaCorretta": "Ordine sottoproblemi",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è rappresentazione algoritmo?",
        "opzioni": ["Pseudocodice o flusso", "Solo codice compilato", "Hardware diagramma", "Rete schema"],
        "rispostaCorretta": "Pseudocodice o flusso",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è driver?",
        "opzioni": ["Software per hardware", "App utente", "Sistema operativo", "Middleware"],
        "rispostaCorretta": "Software per hardware",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è correttezza algoritmo?",
        "opzioni": ["Soluzione corretta", "Errore intenzionale", "Aumento bug", "Riduzione efficienza"],
        "rispostaCorretta": "Soluzione corretta",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è un linguaggio orientato oggetti?",
        "opzioni": ["Java", "Assembly", "Binary", "Machine"],
        "rispostaCorretta": "Java",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è trasformazione input output?",
        "opzioni": ["Secondo istruzioni", "Ignora codice", "Solo input", "Nessun output"],
        "rispostaCorretta": "Secondo istruzioni",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è fase miglioramento?",
        "opzioni": ["Ottimizza post-rilascio", "Analisi iniziale", "Scrittura codice", "Test"],
        "rispostaCorretta": "Ottimizza post-rilascio",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è classe in programmazione?",
        "opzioni": ["Organizza codice oggetti", "Solo cicli", "Condizionali", "Funzioni sole"],
        "rispostaCorretta": "Organizza codice oggetti",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è simbolo decisione flusso?",
        "opzioni": ["Rombo", "Ovale", "Rettangolo", "Freccia"],
        "rispostaCorretta": "Rombo",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è integrazione soluzioni?",
        "opzioni": ["Unica soluzione da parti", "Ignora sottoproblemi", "Aumenta complessità", "Riduce valutazione"],
        "rispostaCorretta": "Unica soluzione da parti",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è simbolo input/output flusso?",
        "opzioni": ["Parallelogramma", "Rombo", "Ovale", "Rettangolo"],
        "rispostaCorretta": "Parallelogramma",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è documentazione scomposizione?",
        "opzioni": ["Passaggi e soluzioni", "Ignora futuro", "Aumenta errori", "Riduce apprendimento"],
        "rispostaCorretta": "Passaggi e soluzioni",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è simbolo fine flusso?",
        "opzioni": ["Ovale", "Rombo", "Rettangolo", "Freccia"],
        "rispostaCorretta": "Ovale",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è middleware?",
        "opzioni": ["Intermediario tra OS e app", "Sistema operativo", "App utente", "Driver"],
        "rispostaCorretta": "Intermediario tra OS e app",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è algoritmo complesso esempio?",
        "opzioni": ["Crittografia dati", "Somma semplice", "Stampa testo", "Copia file"],
        "rispostaCorretta": "Crittografia dati",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è linguaggio per web?",
        "opzioni": ["JavaScript", "Assembly", "Binary", "Machine"],
        "rispostaCorretta": "JavaScript",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è flusso esecuzione?",
        "opzioni": ["Strutture controllo", "Ignora regole", "Solo sequenziale", "Nessuna organizzazione"],
        "rispostaCorretta": "Strutture controllo",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è simbolo processo flusso?",
        "opzioni": ["Rettangolo", "Ovale", "Rombo", "Parallelogramma"],
        "rispostaCorretta": "Rettangolo",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è valutazione algoritmo?",
        "opzioni": ["Correttezza e efficienza", "Ignora risorse", "Aumenta tempo", "Riduce memoria"],
        "rispostaCorretta": "Correttezza e efficienza",
        "area": "Sezione 3.4"
    },
    {
        "domanda": "Qual è iterazione fasi sviluppo?",
        "opzioni": ["Modelli Agile", "Solo waterfall", "Ignora cambiamenti", "Riduce test"],
        "rispostaCorretta": "Modelli Agile",
        "area": "Sezione 3.4"
    }
];

// ====================================================================
// 2. LOGICA DEL QUIZ (NON MODIFICARE SE NON NECESSARIO)
// ====================================================================

// Variabili di stato
// Puoi cambiare il numero di domande per la simulazione qui:
const NUMERO_DOMANDE_QUIZ = 30; 
let domandeSelezionate = [];
let domandaCorrenteIndice = 0;
let punteggio = 0;
let quizInCorso = false;
let tempoRimanente = 45 * 60; // 45 minuti in secondi
let timerInterval;

// Riferimenti DOM
const quizContainer = document.getElementById('quiz-container');
const risultatiContainer = document.getElementById('risultati-container');
const domandaElement = document.getElementById('domanda');
const risposteContainer = document.getElementById('risposte-container');
const statoDomandaElement = document.getElementById('stato-domanda');
const pulsanteInizia = document.getElementById('pulsante-inizia');
const timerElement = document.getElementById('timer');
const risultatoFinaleElement = document.getElementById('risultato-finale');
const scoreFinaleElement = document.getElementById('score-finale');
const pulsanteRestart = document.getElementById('pulsante-restart');

// --- Funzioni di utilità ---

/**
 * Implementa l'algoritmo Fisher-Yates per mescolare un array (per le opzioni).
 * @param {Array} array - L'array da mescolare.
 */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Scegli un elemento casuale da i a 0
    const j = Math.floor(Math.random() * (i + 1));
    // Scambia l'elemento corrente con quello casuale
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Seleziona casualmente N domande dal paniere completo e le mescola.
 * @param {Array} paniere - L'array completo delle domande.
 * @param {number} n - Il numero di domande da selezionare.
 * @returns {Array} L'array di N domande selezionate e mescolate.
 */
function selezionaDomande(paniere, n) {
    if (paniere.length < n) return paniere; // Se ci sono meno domande di N, usa tutte

    // 1. Copia l'array e mescolalo
    let shuffledPaniere = [...paniere];
    shuffleArray(shuffledPaniere);

    // 2. Prendi le prime N domande
    return shuffledPaniere.slice(0, n);
}

// --- Funzioni di Logica del Quiz ---

function initQuiz() {
    if (paniereCompleto.length === 0) {
        alert("Attenzione: Il paniere di domande è vuoto o non caricato.");
        return;
    }

    // Nascondi il pulsante Inizia e i risultati
    pulsanteInizia.style.display = 'none';
    risultatiContainer.style.display = 'none';
    quizContainer.style.display = 'block';

    // Inizializza variabili di stato
    domandaCorrenteIndice = 0;
    punteggio = 0;
    quizInCorso = true;
    tempoRimanente = 45 * 60; // Reset timer

    // Seleziona e mescola le domande per il quiz
    domandeSelezionate = selezionaDomande(paniereCompleto, NUMERO_DOMANDE_QUIZ);

    // Avvia il timer
    clearInterval(timerInterval);
    timerInterval = setInterval(aggiornaTimer, 1000);

    // Carica la prima domanda
    caricaDomanda();
}

function aggiornaTimer() {
    if (tempoRimanente <= 0) {
        fineQuiz();
        return;
    }
    tempoRimanente--;

    const minuti = Math.floor(tempoRimanente / 60);
    const secondi = tempoRimanente % 60;
    timerElement.textContent = `${minuti.toString().padStart(2, '0')}:${secondi.toString().padStart(2, '0')}`;
}

function caricaDomanda() {
    if (domandaCorrenteIndice >= domandeSelezionate.length) {
        fineQuiz();
        return;
    }

    const domanda = domandeSelezionate[domandaCorrenteIndice];
    
    // Aggiorna lo stato della domanda (es. 1/30)
    statoDomandaElement.textContent = `Domanda: ${domandaCorrenteIndice + 1} / ${domandeSelezionate.length}`;

    // Mostra il testo della domanda
    domandaElement.textContent = domanda.domanda;

    // Svuota il contenitore delle risposte precedenti
    risposteContainer.innerHTML = '';

    // --- Mescolamento delle Opzioni ---
    const opzioniMescolate = [...domanda.opzioni]; // Clona l'array
    shuffleArray(opzioniMescolate); // Mescola il clone

    // Crea i pulsanti di risposta
    opzioniMescolate.forEach(opzione => {
        const pulsante = document.createElement('button');
        pulsante.textContent = opzione;
        pulsante.classList.add('btn', 'btn-risposta');
        pulsante.onclick = () => controllaRisposta(opzione);
        risposteContainer.appendChild(pulsante);
    });
}

function controllaRisposta(rispostaSelezionata) {
    if (!quizInCorso) return;

    const domanda = domandeSelezionate[domandaCorrenteIndice];
    const corretta = rispostaSelezionata === domanda.rispostaCorretta;

    // Aggiorna il punteggio
    if (corretta) {
        punteggio++;
    }

    // Disabilita tutti i pulsanti per impedire più click
    Array.from(risposteContainer.children).forEach(btn => {
        btn.disabled = true;
        // Evidenzia la risposta corretta (e la scelta dell'utente)
        if (btn.textContent === domanda.rispostaCorretta) {
            btn.classList.add('corretta');
        } else if (btn.textContent === rispostaSelezionata && !corretta) {
            btn.classList.add('errata');
        }
    });

    // Passa alla prossima domanda dopo un breve ritardo
    setTimeout(() => {
        domandaCorrenteIndice++;
        caricaDomanda();
    }, 500); // 0.5 secondi di ritardo per vedere l'evidenziazione
}

function fineQuiz() {
    clearInterval(timerInterval);
    quizInCorso = false;

    // Calcola il risultato (es. idoneo se > 75%)
    const percentuale = (punteggio / domandeSelezionate.length) * 100;
    const esito = percentuale >= 75 ? 'IDONEO' : 'NON IDONEO';
    const coloreEsito = percentuale >= 75 ? 'text-success' : 'text-danger';

    // Nascondi il quiz e mostra i risultati
    quizContainer.style.display = 'none';
    risultatiContainer.style.display = 'block';

    // Aggiorna il testo dei risultati
    risultatoFinaleElement.className = coloreEsito;
    risultatoFinaleElement.textContent = `Risultato: ${esito}`;
    scoreFinaleElement.textContent = `Punteggio: ${punteggio} / ${domandeSelezionate.length} (${percentuale.toFixed(1)}%)`;
}

// --- Event Listeners ---

pulsanteInizia.addEventListener('click', initQuiz);
pulsanteRestart.addEventListener('click', initQuiz);

// Imposta lo stato iniziale
window.onload = function() {
    quizContainer.style.display = 'none';
    risultatiContainer.style.display = 'none';
    pulsanteInizia.style.display = 'block';
    timerElement.textContent = '45:00'; // Tempo iniziale
};
