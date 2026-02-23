document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar: Logo & Icon Trigger
    const sidebar = document.getElementById('about-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const trigger = document.getElementById('sidebar-trigger');
    const closeBtn = document.getElementById('close-sidebar');

    const toggleSidebar = () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
    };

    if(trigger) trigger.addEventListener('click', toggleSidebar);
    if(closeBtn) closeBtn.addEventListener('click', toggleSidebar);
    if(overlay) overlay.addEventListener('click', toggleSidebar);

// 4. Ticker seamless: duplica una sola volta il contenuto
const ticker = document.querySelector('.ticker-content');
if (ticker && !ticker.dataset.cloned) {
  ticker.dataset.cloned = "true";
  ticker.innerHTML += ticker.innerHTML; // 2 copie identiche
}

    // 2. Typewriter Effect per la Hero
    const text = "MARKETING & DATA ANALYST";
    let i = 0;
    const typeElement = document.getElementById("typewriter-text");
    function typeEffect() {
        if (typeElement && i < text.length) {
            typeElement.innerHTML += text.charAt(i++);
            setTimeout(typeEffect, 90);
        }
    }
    typeEffect();

    // 3. Universale Card Expansion (Pillars, Projects, Education)
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Se l'utente clicca un link (GitHub/PDF) o un bottone, NON chiudere la card
            if(e.target.closest('a') || e.target.closest('button')) return;
            
            // Chiudi le altre card se ne apri una nuova (mantiene il sito ordinato)
            document.querySelectorAll('.card').forEach(otherCard => {
                if (otherCard !== card) otherCard.classList.remove('expanded');
            });

            card.classList.toggle('expanded');
        });
    });
// 5) Language switch (EN / IT / NL)
// Cambia SOLO elementi marcati con data-i18n / data-i18n-html / data-i18n-placeholder
const translations = {
  en: {
    // NAV
    "nav.approach": "Approach",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // SIDEBAR (se li hai marcati)
    "sidebar.about_title": "About me",
    "sidebar.about_p1": "Every system has an internal logic, whether it's a linguistic structure or a SQL database. My transition to data is the evolution of a need to stop guessing and start measuring.",
    "sidebar.about_p2": "I value data because, unlike words, they show you the facts. I’m just here to see what the numbers actually show.",
    "sidebar.meet_me": "Meet me on",

    // HERO (typewriter NON incluso)
    "hero.tagline": "I analyze marketing performance to find the truth behind the numbers. Focused on full-funnel optimization and data-driven execution.",
    "hero.cta_cases": "View Case Studies",
    "hero.cta_cv": "Download CV",
    "hero.cta_inquiry": "Get in Touch",

   // APPROACH / METHODOLOGY
"approach.label": "METHODOLOGY",
"approach.title": "Three Pillars of Impact",

// Pillar 1: Il collegamento tra Lingue e Dati
"approach.p1.title": "Linguistic Logic",
"approach.p1.desc": "Applying the analytical rigor of linguistics to market behaviors. I leverage my background in structural logic to decode complex datasets and consumer patterns.",
"approach.p1.details": "Utilizing semantic analysis to drive global engagement and communication clarity.",

// Pillar 2: Il braccio operativo
"approach.p2.title": "Performance Engineering", // Invece di Growth Marketing, suona più tecnico
"approach.p2.desc": "Bridging the gap between strategy and execution. I manage the technical infrastructure to ensure that tracking and funnel logic translate into measurable revenue.",
"approach.p2.details": "Full-stack tracking implementation and data-backed marketing optimization.",

// Pillar 3: La verità finale
"approach.p3.title": "Data Architecture & BI",
"approach.p3.desc": "Transforming raw data into strategic business intelligence. Using SQL and Power BI to build robust models that empower stakeholders to make informed decisions.",
"approach.p3.details": "Relational modeling, DAX measures, and high-impact executive dashboards.",

    // PORTFOLIO
    "portfolio.label": "SELECTED CASE STUDIES",
    "portfolio.title": "Strategic Data Solutions",
    "portfolio.c1.desc": "Structured fragmented marketing exports into a unified relational model.",
    "portfolio.c1.details": "Created complex JOINs and CTEs to merge disparate data sources, eliminating duplicates and ensuring a clean baseline for performance analysis.",
    "portfolio.c1.link": "View Documentation",
    "portfolio.c2.desc": "Developed an end-to-end Power BI dashboard to monitor real-time business performance.",
    "portfolio.c2.details": "Implemented advanced DAX measures for dynamic ROAS/CAC tracking and designed a Star Schema for high-performance query execution.",
    "portfolio.c2.link": "View Dashboard Design",
    "portfolio.c3.desc": "Deployed a full-funnel GA4 tracking framework to eliminate data gaps and optimize attribution.l visibility.",
    "portfolio.c3.details": "Mapped the user journey from lead to conversion, fixing data leakage in the checkout flow and aligning multi-channel attribution with actual revenue.",
    "portfolio.c3.link": "View Technical Audit",

    // EDUCATION
"edu.label": "TECHNICAL FOUNDATIONS",
"edu.title": "Academic & Professional Journey",

// CARD 1: Il Master (Il tuo "Presente" tecnico)
"edu.c1.title": "Digital Marketing & AI Agents",
"edu.c1.subtitle": "Start2Impact University",
"edu.c1.s1.title": "Technical Tracking & Analytics",
"edu.c1.s1.desc": "Full-stack implementation of GA4 & GTM. Orchestrating full-funnel measurement to ensure data integrity and attribution logic.",
"edu.c1.s2.title": "AI Agentic Workflows",
"edu.c1.s2.desc": "Advanced deployment of custom AI Agents to automate marketing operations and data-driven tasks using Prompt Engineering.",

// CARD 2: La Magistrale (La tua "Strategia")
"edu.c2.title": "Intercultural & International Communication",
"edu.c2.subtitle": "University of Pisa | Master’s Degree",
"edu.c2.s1.title": "B2B Strategic Messaging",
"edu.c2.s1.desc": "Managed communication for a leader in <strong>Northern Italian precision industry</strong>, translating technical specs into market-ready value propositions.",
"edu.c2.s2.title": "Cross-Border Frameworks",
"edu.c2.s2.desc": "Studied communication architectures for multi-market enterprises to ensure brand consistency across global touchpoints.",

// CARD 3: La Triennale (Le tue "Radici Logiche")
"edu.c3.title": "Linguistic & Cultural Mediation",
"edu.c3.subtitle": "UniOr Naples | Bachelor’s Degree",
"edu.c3.s1.title": "Structural Analysis",
"edu.c3.s1.desc": "Deep-dive into <strong>linguistic logic and syntax patterns</strong>. Developing the mental framework to decode complex information structures.",
"edu.c3.s2.title": "Market Localization",
"edu.c3.s2.desc": "Analyzing international datasets through a cultural lens to identify consumer nuances that purely technical analysts often miss.",

// --- VERSIONE INGLESE (en) ---
"cert.label": "CREDENTIALS",
"cert.title": "Technical Certifications",
"cert.c1.title": "Google Data Analytics Professional Certificate",
"cert.c1.org": "Google / Coursera",
"cert.ga4.title": "Google Analytics Certification",
"cert.ga4.org": "Skillshop (Google)",
"cert.ga4.date": "Valid: Jan 2026 - Jan 2027",
"cert.view": "Verify Credential",
"cert.c3.title": "Microsoft PL-300: Power BI Data Analyst",
"cert.c3.org": "Microsoft",
"cert.view": "View Certificate",

    // CONTACT
    "contact.label": "Get in Touch",
    "contact.title": "Ready to scale?",
    "contact.full_name": "Full Name",
    "contact.business_email": "Business Email",
    "contact.brief": "Project Brief",
    "contact.ph_name": "e.g. Francesca Monte",
    "contact.ph_email": "name@company.com",
    "contact.ph_brief": "Describe the bottleneck you're facing...",
    "contact.send": "Send Request"
  },

  it: {
    "nav.approach": "Approccio",
    "nav.projects": "Progetti",
    "nav.education": "Formazione",
    "nav.contact": "Contatti",

    "sidebar.about_title": "Chi sono",
    "sidebar.about_p1": "Ogni sistema ha una logica interna, che sia una struttura linguistica o un database SQL. Il mio passaggio ai dati è l’evoluzione di un bisogno: smettere di intuire e iniziare a misurare.",
    "sidebar.about_p2": "Valorizzo i dati perché, a differenza delle parole, mostrano i fatti. Io sono qui per vedere cosa dicono davvero i numeri.",
    "sidebar.meet_me": "Mi trovi su",

    "hero.tagline": "Analizzo le performance attraverso l’integrità dei dati per ottimizzare ogni fase del funnel con un approccio puramente data-driven.",
    "hero.cta_cases": "Vedi Case Studies",
    "hero.cta_cv": "Scarica CV",
    "hero.cta_inquiry": "Invia una richiesta",

    // APPROACH / METHODOLOGY
    "approach.label": "METODOLOGIA",
    "approach.title": "I tre pilastri del mio impatto",
    "approach.p1.title": "Logica Linguistica",
    "approach.p1.desc": "Applico il rigore analitico della linguistica ai comportamenti di mercato. Sfrutto il mio background nella logica strutturale per decodificare dataset complessi e pattern di consumo.",
    "approach.p1.details": "Utilizzo dell'analisi semantica per guidare l'engagement globale e la chiarezza comunicativa.",
    "approach.p2.title": "Performance Engineering",
    "approach.p2.desc": "Colmo il divario tra strategia ed esecuzione. Gestisco l'infrastruttura tecnica per garantire che il tracking e la logica dei funnel si traducano in revenue misurabile.",
    "approach.p2.details": "Implementazione tracking full-stack e ottimizzazione del marketing data-driven.",
    "approach.p3.title": "Data Architecture & BI",
    "approach.p3.desc": "Trasformo dati grezzi in business intelligence strategica. Utilizzo SQL e Power BI per costruire modelli robusti che permettano agli stakeholder di prendere decisioni informate.",
    "approach.p3.details": "Modellazione relazionale, misure DAX e dashboard direzionali ad alto impatto.",

    // PORTFOLIO
    "portfolio.label": "CASE STUDIES SELEZIONATI",
    "portfolio.title": "Soluzioni Strategiche di Dati",
    "portfolio.c1.desc": "Ingegnerizzazione di un modello relazionale unificato a partire da dataset marketing frammentati.",
    "portfolio.c1.details": "Creazione di JOIN e CTE complesse per unire fonti diverse, eliminando duplicati e garantendo una base dati pulita per l'analisi delle performance.",
    "portfolio.c1.link": "Specifiche Tecniche & SQL",
    "portfolio.c2.desc": "Sviluppo di una dashboard Power BI end-to-end per il monitoraggio in tempo reale delle performance aziendali.",
    "portfolio.c2.details": "Implementazione di misure DAX avanzate per il tracking dinamico di ROAS/CAC e progettazione di uno Star Schema per l'esecuzione di query ad alte prestazioni.",
    "portfolio.c2.link": "Anteprima Business Intelligence",
    "portfolio.c3.desc": "Implementazione di un framework di tracking GA4 full-funnel per eliminare i gap nei dati e ottimizzare l'attribuzione.",
    "portfolio.c3.details": "Mappatura del customer journey (lead-to-conversion), risoluzione dei data leak nel checkout flow e allineamento dell'attribuzione multi-canale ai ricavi reali.",
    "portfolio.c3.link": "Documentazione Tecnica",

    // EDUCATION
    "edu.label": "BASI TECNICHE",
    "edu.title": "Percorso Accademico e Professionale",
    "edu.c1.title": "Digital Marketing & AI Agents",
    "edu.c1.subtitle": "Start2Impact University",
    "edu.c1.s1.title": "Technical Tracking & Analytics",
    "edu.c1.s1.desc": "Implementazione full-stack di GA4 & GTM. Orchestrazione dei sistemi di misurazione full-funnel per garantire l'integrità dei dati e la logica di attribuzione.",
    "edu.c1.s2.title": "Workflow AI Agenti",
    "edu.c1.s2.desc": "Sviluppo avanzato di Agenti AI personalizzati per automatizzare operazioni marketing e task data-driven tramite Prompt Engineering.",
    "edu.c2.title": "Comunicazione Interculturale e Internazionale",
    "edu.c2.subtitle": "Università di Pisa | Master I livello",
    "edu.c2.s1.title": "Messaging Strategico B2B",
    "edu.c2.s1.desc": "Gestione della comunicazione per un leader nell'industria di precisione del Nord Italia, traducendo specifiche tecniche in proposte di valore per il mercato.",
    "edu.c2.s2.title": "Framework Cross-Border",
    "edu.c2.s2.desc": "Analisi delle architetture comunicative per imprese multi-mercato, garantendo la coerenza del brand tra i vari touchpoint globali.",
    "edu.c3.title": "Mediazione Linguistica e Culturale",
    "edu.c3.subtitle": "UniOr Napoli | Laurea Triennale",
    "edu.c3.s1.title": "Analisi Strutturale",
    "edu.c3.s1.desc": "Studio approfondito della logica linguistica e dei pattern sintattici. Sviluppo del framework mentale per decodificare strutture informative complesse.",
    "edu.c3.s2.title": "Localizzazione di Mercato",
    "edu.c3.s2.desc": "Analisi di dataset internazionali attraverso una lente culturale per identificare sfumature di consumo che sfuggono ad analisi puramente tecniche.",

// --- VERSIONE ITALIANA (it) ---
"cert.label": "CREDENTIALS",
"cert.title": "Certificazioni Tecniche",
"cert.c1.title": "Google Data Analytics Professional Certificate",
"cert.c1.org": "Google / Coursera",
"cert.ga4.title": "Certificazione Google Analytics",
"cert.ga4.org": "Skillshop (Google)",
"cert.ga4.date": "Validità: Gen 2026 - Gen 2027",
"cert.view": "Verifica Certificato",
"cert.c3.title": "Microsoft PL-300: Power BI Data Analyst",
"cert.c3.org": "Microsoft",
"cert.view": "Vedi certificato",

    "contact.label": "CONTATTI",
    "contact.title": "Ready to scale?",
    "contact.full_name": "Nome e Cognome",
    "contact.business_email": "Email aziendale",
    "contact.brief": "Brief di progetto",
    "contact.ph_name": "es. Francesca Monte",
    "contact.ph_email": "nome@azienda.com",
    "contact.ph_brief": "Descrivi brevemente la sfida o il collo di bottiglia che vuoi superare...",
    "contact.send": "Invia Richiesta"
  },

  nl: {
    "nav.approach": "Aanpak",
    "nav.projects": "Projecten",
    "nav.education": "Opleiding",
    "nav.contact": "Contact",

    "sidebar.about_title": "Over mij",
    "sidebar.about_p1": "Elk systeem heeft een interne logica, of het nu een taalkundige structuur is of een SQL-database. Mijn overstap naar data is de evolutie van een behoefte: stoppen met gokken en beginnen met meten.",
    "sidebar.about_p2": "Ik waardeer data omdat ze, in tegenstelling tot woorden, de feiten laten zien. Ik ben hier om te ontdekken wat de cijfers echt vertellen.",
    "sidebar.meet_me": "Vind mij op",

    "hero.tagline": "Ik analyseer prestaties op basis van data-integriteit om elke fase van de funnel te optimaliseren met een puur data-gedreven aanpak.",
    "hero.cta_cases": "Bekijk Case Studies",
    "hero.cta_cv": "Download CV",
    "hero.cta_inquiry": "Projectaanvraag",

    // APPROACH / METHODOLOGY
    "approach.label": "METHODOLOGIE",
    "approach.title": "Drie Pijlers van Impact",

    "approach.p1.title": "Linguïstische Logica",
    "approach.p1.desc": "Ik pas de analytische precisie van de taalkunde toe op marktgedrag. Ik gebruik mijn achtergrond in structurele logica om complexe datasets en consumentenpatronen te decoderen.",
    "approach.p1.details": "Gebruik van semantische analyse voor wereldwijde engagement en heldere communicatie.",

    "approach.p2.title": "Performance Engineering",
    "approach.p2.desc": "Het overbruggen van de kloof tussen strategie en uitvoering. Ik beheer de technische infrastructuur om te garanderen dat tracking en funnel-logica leiden tot meetbare omzet.",
    "approach.p2.details": "Full-stack tracking implementatie en data-driven marketing optimalisatie.",

    "approach.p3.title": "Data Architectuur & BI",
    "approach.p3.desc": "Ruwe data transformeren naar strategische business intelligence. Met SQL en Power BI bouw ik robuuste modellen waarmee stakeholders onderbouwde beslissingen kunnen nemen.",
    "approach.p3.details": "Relationele modellering, DAX-metingen en high-impact dashboards.",

    // PORTFOLIO
    "portfolio.label": "GESELECTEERDE CASE STUDIES",
    "portfolio.title": "Strategische Data Oplossingen",
    "portfolio.c1.desc": "Engineering van een universeel relationeel model vanuit gefragmenteerde marketing datasets.",
    "portfolio.c1.details": "Ontwikkeling van complexe JOINs en CTE's om diverse bronnen samen te voegen, duplicaten te elimineren en een schone basis voor performance-analyse te leggen.",
    "portfolio.c1.link": "Technische Specs & SQL",
    "portfolio.c2.desc": "Ontwikkeling van een end-to-end Power BI-dashboard voor real-time monitoring van bedrijfsresultaten.",
    "portfolio.c2.details": "Implementatie van geavanceerde DAX-metingen voor dynamische ROAS/CAC tracking en ontwerp van een Star Schema voor snelle query-uitvoering.",
    "portfolio.c2.link": "Business Intelligence Preview",
    "portfolio.c3.desc": "Implementatie van een full-funnel GA4 tracking framework om data-gaten te dichten en attributie te optimaliseren.",
    "portfolio.c3.details": "Mapping van de customer journey (lead-to-conversion), oplossing van data-lekkage in de checkout flow en afstemming van multi-channel attributie op werkelijke omzet.",
    "portfolio.c3.link": "Technische Documentatie",

    // EDUCATION
    "edu.label": "TECHNISCHE BASIS",
    "edu.title": "Academisch & Professioneel Traject",

    "edu.c1.title": "Digital Marketing & AI Agents",
    "edu.c1.subtitle": "Start2Impact University",
    "edu.c1.s1.title": "Technical Tracking & Analytics",
    "edu.c1.s1.desc": "Full-stack implementatie van GA4 & GTM. Orkestratie van full-funnel meetoplossingen om data-integriteit en attributielogica te waarborgen.",
    "edu.c1.s2.title": "AI Agentic Workflows",
    "edu.c1.s2.desc": "Geavanceerde inzet van custom AI Agents om marketingoperaties en data-driven taken te automatiseren met Prompt Engineering.",

    "edu.c2.title": "Intercultural & International Communication",
    "edu.c2.subtitle": "University of Pisa | Master’s Degree",
    "edu.c2.s1.title": "B2B Strategische Messaging",
    "edu.c2.s1.desc": "Communicatiebeheer voor een marktleider in de **precisie-industrie in Noord-Italië**, waarbij technische specs werden vertaald naar strategische marktwaarde.",
    "edu.c2.s2.title": "Cross-Border Frameworks",
    "edu.c2.s2.desc": "Studie naar communicatie-architecturen voor internationale ondernemingen om consistentie over alle touchpoints te waarborgen.",

    "edu.c3.title": "Linguistic & Cultural Mediation",
    "edu.c3.subtitle": "UniOr Naples | Bachelor’s Degree",
    "edu.c3.s1.title": "Structurele Analyse",
    "edu.c3.s1.desc": "Diepgaande studie van **linguïstische logica en syntaxispatronen**. Ontwikkeling van een mentaal framework om complexe informatiestructuren te ontleden.",
    "edu.c3.s2.title": "Marktlokalisatie",
    "edu.c3.s2.desc": "Analyse van internationale datasets vanuit een cultureel perspectief om nuances te identificeren die puur technische analisten vaak missen.",

// --- VERSIONE OLANDESE (nl) ---
"cert.label": "CERTIFICERINGEN",
"cert.title": "Technische Certificeringen",
"cert.c1.title": "Google Data Analytics Professional Certificate",
"cert.c1.org": "Google / Coursera",
"cert.ga4.title": "Google Analytics Certificering",
"cert.ga4.org": "Skillshop (Google)",
"cert.ga4.date": "Geldig: jan 2026 - jan 2027",
"cert.view": "Certificaat Verificeren",
"cert.c3.title": "Microsoft PL-300: Power BI Data Analyst",
"cert.c3.org": "Microsoft",
"cert.view": "Bekijk Certificaat",

    // CONTACT
    "contact.label": "CONTACT",
    "contact.title": "Heb je een technisch probleem op te lossen?",
    "contact.full_name": "Volledige naam",
    "contact.business_email": "Zakelijk e-mailadres",
    "contact.brief": "Projectomschrijving",
    "contact.ph_name": "bijv. Francesca Monte",
    "contact.ph_email": "naam@bedrijf.com",
    "contact.ph_brief": "Beschrijf de bottleneck die je ervaart...",
    "contact.send": "Verstuur Aanvraag"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  // plain text
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // html (keeps <strong> etc.)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) el.innerHTML = dict[key];
  });

  // placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  // active state buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  localStorage.setItem("lang", lang);
}

// click handlers (prevent sidebar opening due to bubbling)
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // <-- impedisce al click di attivare #sidebar-trigger
    applyLanguage(btn.dataset.lang);
  });
});

// init with saved lang (default EN)
applyLanguage(localStorage.getItem("lang") || "en");

const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Successo: il bottone diventa verde e conferma
                submitBtn.textContent = "Sent!";
                submitBtn.style.background = "#10b981"; 
                contactForm.reset();
                
                // Opzionale: dopo 5 secondi resetta il bottone al testo originale
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = "";
                    submitBtn.disabled = false;
                }, 5000);
            } else {
                throw new Error();
            }
        } catch (error) {
            submitBtn.textContent = "Error!";
            submitBtn.style.background = "#ef4444";
            submitBtn.disabled = false;
        }
    });
}

});