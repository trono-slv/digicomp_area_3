// ======================================================================
// 1. CONFIGURAZIONE E PANIERI DOMANDE (DA ESPANDERE A 200)
// ======================================================================

const TOTAL_QUESTIONS_TO_EXTRACT = 30;
const PASSING_PERCENTAGE = 70; // 70% per superare il test
const TOTAL_TIME = 45 * 60; // 45 minuti in secondi

// !!! IMPORTANTISSIMO: Estendi questo array fino a raggiungere le 200 domande !!!
// HO ADATTATO LA LOGICA PER SUPPORTARE LA TUA STRUTTURA: "domanda", "opzioni", "rispostaCorretta"
const ALL_QUESTIONS = [
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
    }
];
// FINE ARRAY (Assicurati che tutte le domande che inserisci finiscano con la virgola, tranne l'ultima prima della ];)


let selectedQuestions = []; 
let currentQuestionIndex = 0;
let userAnswers = []; 
let timerInterval;
let timeLeft = TOTAL_TIME;

// ======================================================================
// 2. Mappatura e Funzioni Utilità
// ======================================================================

const introScreen = document.getElementById('intro-screen');
const quizContainer = document.getElementById('quiz-container');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionNumber = document.getElementById('current-question-number');
const timeRemainingDisplay = document.getElementById('time-remaining');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const totalQuestionsDisplay = document.getElementById('total-questions');
const totalQuestionsIntroDisplay = document.getElementById('total-questions-intro');

/**
 * Funzione per mescolare un array (algoritmo Fisher-Yates).
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Prepara il test estraendo, RISTRUTTURANDO e riorganizzando le domande.
 */
function initializeQuiz() {
    // 1. Estrae 30 domande casuali dal paniere ALL_QUESTIONS
    shuffleArray(ALL_QUESTIONS);
    
    // 2. Ristruttura la domanda nel formato interno (necessario per la casualità e il controllo)
    selectedQuestions = ALL_QUESTIONS.slice(0, TOTAL_QUESTIONS_TO_EXTRACT).map(userQ => {
        // Converte l'array di stringhe "opzioni" nell'array di oggetti "answers"
        const processedAnswers = userQ.opzioni.map(optText => {
            return {
                text: optText,
                correct: optText === userQ.rispostaCorretta // Determina la correttezza in base alla chiave dell'utente
            };
        });
        
        // Riorganizza casualmente l'ordine delle opzioni di risposta
        shuffleArray(processedAnswers);
        
        return {
            question: userQ.domanda, // Mappa "domanda" su "question" (usato sotto)
            answers: processedAnswers, // Mappa il nuovo array strutturato su "answers" (usato sotto)
        };
    });

    // 3. Reset delle variabili di stato
    currentQuestionIndex = 0;
    userAnswers = new Array(TOTAL_QUESTIONS_TO_EXTRACT).fill(null);
    timeLeft = TOTAL_TIME;
    
    // 4. Aggiorna i contatori nel DOM
    totalQuestionsDisplay.textContent = TOTAL_QUESTIONS_TO_EXTRACT;
    totalQuestionsIntroDisplay.textContent = TOTAL_QUESTIONS_TO_EXTRACT;

    // Assicura che i contenitori dei risultati siano nascosti
    if (resultsScreen) resultsScreen.classList.add('d-none');
}

// ======================================================================
// 3. LOGICA DI AVVIO E TIMER (NON MODIFICATA)
// ======================================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeQuiz(); 
    
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.onclick = startSimulation;
    }
    
    if (nextBtn) nextBtn.onclick = nextQuestion;
    if (prevBtn) prevBtn.onclick = prevQuestion;
});

function startSimulation() {
    if (introScreen) introScreen.classList.add('d-none');
    if (quizContainer) quizContainer.classList.remove('d-none');

    showQuestion();
    startTimer();
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    const updateTimeDisplay = () => {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');
        if (timeRemainingDisplay) timeRemainingDisplay.textContent = `${minutes}:${seconds}`;
    };

    updateTimeDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimeDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults(); 
        }
    }, 1000);
}

// ======================================================================
// 4. LOGICA DI QUIZ E RISPOSTE (Utilizza le nuove chiavi interne: question, answers)
// ======================================================================

function showQuestion() {
    answersContainer.innerHTML = '';
    
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    
    currentQuestionNumber.textContent = currentQuestionIndex + 1;
    // Utilizza la chiave interna 'question' generata in initializeQuiz
    questionText.textContent = currentQuestion.question; 

    // Utilizza la chiave interna 'answers' generata in initializeQuiz
    currentQuestion.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer.text;
        answerButton.classList.add('list-group-item', 'list-group-item-action', 'text-start');
        
        answerButton.addEventListener('click', () => selectAnswer(index, answerButton));

        // Rievidenzia la risposta selezionata
        if (userAnswers[currentQuestionIndex] === index) {
            answerButton.classList.add('active');
        }
        
        answersContainer.appendChild(answerButton);
    });
    
    updateNavButtons();
}

function selectAnswer(answerIndex, selectedButton) {
    Array.from(answersContainer.children).forEach(button => {
        button.classList.remove('active');
    });

    selectedButton.classList.add('active');
    userAnswers[currentQuestionIndex] = answerIndex;
}

function nextQuestion() {
    if (currentQuestionIndex < TOTAL_QUESTIONS_TO_EXTRACT - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else if (currentQuestionIndex === TOTAL_QUESTIONS_TO_EXTRACT - 1) {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function updateNavButtons() {
    if(prevBtn) prevBtn.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === TOTAL_QUESTIONS_TO_EXTRACT - 1) {
        if(nextBtn) nextBtn.textContent = 'Termina Simulazione';
        if(nextBtn) nextBtn.onclick = showResults; 
    } else {
        if(nextBtn) nextBtn.textContent = 'Successivo';
        if(nextBtn) nextBtn.onclick = nextQuestion; 
    }
}

// ======================================================================
// 5. LOGICA DEI RISULTATI DETTAGLIATI 
// ======================================================================

function showResults() {
    clearInterval(timerInterval); 
    
    let score = 0;
    userAnswers.forEach((selectedAnswerIndex, qIndex) => {
        if (selectedAnswerIndex !== null && selectedQuestions[qIndex].answers[selectedAnswerIndex].correct) {
            score++;
        }
    });

    quizContainer.classList.add('d-none');
    resultsScreen.classList.remove('d-none');

    const finalScoreElement = document.getElementById('final-score');
    const resultMessageElement = document.getElementById('result-message');
    
    const scorePercentage = (score / TOTAL_QUESTIONS_TO_EXTRACT) * 100;
    const isPassed = scorePercentage >= PASSING_PERCENTAGE;

    if (finalScoreElement) finalScoreElement.textContent = `Punteggio Finale: ${score} / ${TOTAL_QUESTIONS_TO_EXTRACT} (${scorePercentage.toFixed(1)}%)`;
    
    if (isPassed) {
        if (resultMessageElement) resultMessageElement.innerHTML = `**ESITO: SUPERATO!**`;
        if (resultMessageElement) resultMessageElement.className = 'fs-5 text-success fw-bold';
    } else {
        if (resultMessageElement) resultMessageElement.innerHTML = `**ESITO: NON SUPERATO!** (Necessarie almeno ${PASSING_PERCENTAGE}% risposte corrette)`;
        if (resultMessageElement) resultMessageElement.className = 'fs-5 text-danger fw-bold';
    }

    const resultsCardBody = resultsScreen.querySelector('.card-body');
    if (resultsCardBody) {
        resultsCardBody.innerHTML = `
            <h3>Risultati della Simulazione</h3>
            <p id="final-score" class="fs-4">${finalScoreElement.textContent}</p>
            <p id="result-message" class="${resultMessageElement.className}">${resultMessageElement.innerHTML}</p>
            
            <div class="mt-4">
                <button class="btn btn-warning me-2" onclick="repeatCurrentTest()">Ripeti Test (Stesse Domande)</button>
                <button class="btn btn-success" onclick="startNewRandomTest()">Nuovo Test (Nuove Domande Casuali)</button>
            </div>
            
            <hr class="mt-4">
            <h4>Riepilogo Risposte Date</h4>
            <div id="summary-container" class="text-start"></div>
        `;
    }

    const summaryContainer = document.getElementById('summary-container');
    if (summaryContainer) generateSummary(summaryContainer);
}

/**
 * Genera il riepilogo con risposte date e correzioni.
 */
function generateSummary(container) {
    selectedQuestions.forEach((q, qIndex) => {
        const summaryItem = document.createElement('div');
        summaryItem.classList.add('mb-3', 'p-3', 'border', 'rounded');
        
        const selectedAnswerIndex = userAnswers[qIndex];
        
        const qText = document.createElement('p');
        qText.innerHTML = `<strong>${qIndex + 1}. ${q.question}</strong>`;
        summaryItem.appendChild(qText);
        
        q.answers.forEach((ans, ansIndex) => {
            const answerLine = document.createElement('div');
            let icon = '';
            let className = 'text-secondary';
            
            if (ans.correct) {
                className = 'text-success fw-bold';
                icon = '✅';
            }
            
            if (ansIndex === selectedAnswerIndex) {
                if (ans.correct) {
                    className = 'text-success fw-bold'; 
                    icon = '✔️✅ Risposta data (Corretta)';
                } else {
                    className = 'text-danger fw-bold'; 
                    icon = '❌ Risposta data (Errata)';
                }
            } else if (ans.correct) {
                icon = '✅ Risposta Corretta';
                className = 'text-success';
            } else {
                icon = '◻️';
            }

            answerLine.className = className;
            answerLine.innerHTML = `${icon} ${ans.text}`;
            summaryItem.appendChild(answerLine);
        });

        container.appendChild(summaryItem);
    });
}

// ======================================================================
// 6. FUNZIONI DI RIPETIZIONE/NUOVO TEST (MODIFICATE PER RISTRUTTURAZIONE)
// ======================================================================

/**
 * Ripete il test corrente (stesse 30 domande)
 */
function repeatCurrentTest() {
    resultsScreen.classList.add('d-none');
    quizContainer.classList.remove('d-none');
    
    // Reset solo variabili di stato
    currentQuestionIndex = 0;
    userAnswers = new Array(TOTAL_QUESTIONS_TO_EXTRACT).fill(null);
    timeLeft = TOTAL_TIME;
    
    // Riorganizza SOLO le opzioni di risposta per la ripetizione (come richiesto)
    selectedQuestions.forEach(q => {
        shuffleArray(q.answers);
    });

    showQuestion();
    startTimer();
}

/**
 * Avvia un nuovo test casuale (nuove 30 domande)
 */
function startNewRandomTest() {
    // Reset completo e nuova estrazione
    initializeQuiz(); 
    
    resultsScreen.classList.add('d-none');
    introScreen.classList.remove('d-none');

    // Resetta l'interfaccia a quella iniziale (prima dell'avvio)
    timeRemainingDisplay.textContent = '45:00';
}
