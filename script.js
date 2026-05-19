document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // 1. SIDEBAR
  // =========================
  const sidebar = document.getElementById('about-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const trigger = document.getElementById('sidebar-trigger');
  const closeBtn = document.getElementById('close-sidebar');

  const toggleSidebar = () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
  };

  if (trigger)  trigger.addEventListener('click', toggleSidebar);
  if (closeBtn) closeBtn.addEventListener('click', toggleSidebar);
  if (overlay)  overlay.addEventListener('click', toggleSidebar);

  // =========================
  // 2. MARQUEE — no JS needed, CSS-only loop
  // =========================

  // =========================
  // 3. HERO ROLE TYPEWRITER
  // =========================
  const heroRoles = ["Marketing Data Analyst", "Analytics Engineer", "Full-Funnel Strategist"];
  let hri = 0, hci = 0, hDeleting = false;
  const heroRoleEl = document.getElementById('heroRoleText');
  function heroTypeEffect() {
    if (!heroRoleEl) return;
    const word = heroRoles[hri];
    if (!hDeleting) {
      heroRoleEl.textContent = word.slice(0, ++hci);
      if (hci === word.length) { hDeleting = true; setTimeout(heroTypeEffect, 1800); return; }
    } else {
      heroRoleEl.textContent = word.slice(0, --hci);
      if (hci === 0) { hDeleting = false; hri = (hri + 1) % heroRoles.length; }
    }
    setTimeout(heroTypeEffect, hDeleting ? 45 : 80);
  }
  heroTypeEffect();

  // =========================
  // 3b. SCROLL TO TOP
  // =========================
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================
  // 4. CARD EXPANSION
  // =========================
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      document.querySelectorAll('.card').forEach(otherCard => {
        if (otherCard !== card) otherCard.classList.remove('expanded');
      });
      card.classList.toggle('expanded');
    });
  });

  // =========================
  // 5. TRANSLATIONS (EN / IT / NL)
  // =========================
  const translations = {
    en: {
      // hero stats
      "hero.stat1.label": "ROAS Achieved",
      "hero.stat1.ctx":   "GA4 + Google Ads funnel",
      "hero.stat2.label": "CPA Reduction",
      "hero.stat2.ctx":   "Attribution realignment",
      "hero.stat3.label": "BI Dashboards",
      "hero.stat3.ctx":   "Power BI · Star Schema",
      // pillar pills
      "approach.p1.pill": "Pattern Recognition",
      "approach.p2.pill": "GA4 · GTM · Attribution",
      "approach.p3.pill": "DAX · Star Schema · SQL",
      "nav.approach": "↑",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.contact": "Contact",

      "sidebar.role": "Marketing & Data Analyst",
      "sidebar.about_title": "About me",
      "sidebar.availability": "Open to opportunities · Amsterdam/Europe & Remote",
      "sidebar.about_p1": "Every system has an internal logic, whether it's a linguistic structure or a SQL database. My transition to data is the evolution of a need to stop guessing and start measuring.",
      "sidebar.about_p2": "I value data because, unlike words, they show you the facts. I'm just here to see what the numbers actually show.",
      "sidebar.meet_me": "Meet me on",

      "hero.tagline": "I analyze marketing performance to find the truth behind the numbers. Focused on full-funnel optimization and data-driven execution.",
      "hero.cta_cases": "View Case Studies",
      "hero.cta_cv": "Download CV",
      "hero.cta_inquiry": "Get in Touch",
      "hero.terminal_hint": "ask about Francesca's career · background · personality",
      "hero.terminal_line1": "I analyze marketing performance to find the truth behind the numbers.",
      "hero.terminal_pre2": "Focused on",
      "hero.terminal_green1": "full-funnel optimization",
      "hero.terminal_and": "and",
      "hero.terminal_green2": "data-driven execution.",
      "hero.terminal_status": "open to opportunities",

      "approach.label": "METHODOLOGY",
      "approach.title": "Three Pillars of Impact",
      "approach.p1.title": "Linguistic Logic",
      "approach.p1.desc": "Applying the analytical rigor of linguistics to market behaviors. I leverage my background in structural logic to decode complex datasets and consumer patterns.",
      "approach.p1.details": "Utilizing semantic analysis to drive global engagement and communication clarity.",
      "approach.p2.title": "Performance Engineering",
      "approach.p2.desc": "Bridging the gap between strategy and execution. I manage the technical infrastructure to ensure that tracking and funnel logic translate into measurable revenue.",
      "approach.p2.details": "Full-stack tracking implementation and data-backed marketing optimization.",
      "approach.p3.title": "Data Architecture & BI",
      "approach.p3.desc": "Transforming raw data into strategic business intelligence. Using SQL and Power BI to build robust models that empower stakeholders to make informed decisions.",
      "approach.p3.details": "Relational modeling, DAX measures, and high-impact executive dashboards.",

      "portfolio.label": "SELECTED CASE STUDIES",
      "portfolio.title": "Strategic Data Solutions",
      "portfolio.c1.title": "SQL: HVC Segmentation",
      "portfolio.c1.desc": "Identified High-Value Customers via Hero Category purchases — building a high-ROI audience for retention and lookalike campaigns.",
      "portfolio.c1.m1l": "Tables Joined",
      "portfolio.c1.m2l": "Audience Identified",
      "portfolio.c1.link": "View on GitHub",
      "portfolio.c2.title": "BI: Churn Analysis",
      "portfolio.c2.desc": "3-page interactive dashboard analyzing telecom churn drivers for 7K customers — KPI overview, behavioral deep dive, financial impact.",
      "portfolio.c2.chart_label": "Churn by Tenure & Monthly Charges",
      "portfolio.c2.leg_active": "Active",
      "portfolio.c2.leg_churn": "Churned",
      "portfolio.c2.m1l": "Churn Rate",
      "portfolio.c2.m2l": "Revenue at Risk",
      "portfolio.c2.r1": "ROAS tracking — dynamic DAX measure",
      "portfolio.c2.r2": "CPA reduction via attribution fix",
      "portfolio.c2.r3": "Star Schema — query performance",
      "portfolio.c2.r4": "Fact + Dimension tables designed",
      "portfolio.c2.link": "View Dashboard",
      "portfolio.c3.title": "Analytics: Funnel Audit",
      "portfolio.c3.desc": "Full-funnel GA4 tracking framework to eliminate data gaps, fix attribution leakage and align revenue data.",
      "portfolio.c3.chart_label": "Funnel Stage Tracking Accuracy — Before vs After",
      "portfolio.c3.leg_before": "Before audit",
      "portfolio.c3.leg_after": "After fix",
      "portfolio.c3.m1l": "Data Leakage Fixed",
      "portfolio.c3.m2l": "Attribution Accuracy",
      "portfolio.c3.link": "View Audit",
      "portfolio.c3.link_italo": "Italo — GA4 Audit",
      "portfolio.c3.link_yoyo": "YoYo — Funnel",

      "portfolio.c4.title": "Python: Causal Inference",
      "portfolio.c4.desc": "Measured the true incremental lift of ad exposure using Inverse Probability Weighting — isolating causal effect from selection bias.",
      "portfolio.c4.r1": "Propensity score via Logistic Regression",
      "portfolio.c4.r2": "Selection bias removed — SMD < 0.1",
      "portfolio.c4.r3": "Raw lift vs causal lift delta",
      "portfolio.c4.r4": "True incremental ad lift",
      "portfolio.c4.link": "View on GitHub",
      "portfolio.c5.title": "SENTRY.mark",
      "portfolio.c5.desc": "Automated anomaly detection engine for marketing data — Z-Score statistical modeling on GA4 + BigQuery pipelines, with real-time Slack alerts and Kill-Switch logic.",
      "portfolio.c5.r1": "GA4 events analyzed via BigQuery",
      "portfolio.c5.r2": "Anomalies detected (5.8% rate)",
      "portfolio.c5.r3": "Rolling Z-Score window per channel",
      "portfolio.c5.r4": "Real-time Slack alert + Kill-Switch",
      "portfolio.c5.m1l": "Anomaly Types",
      "portfolio.c5.m2l": "Detection Rate",
      "portfolio.c5.link": "View on GitHub",
      "portfolio.c6.title": "Amsterdam Airbnb Pipeline",
      "portfolio.c6.desc": "End-to-end data pipeline on 10K listings — Python ETL, BigQuery cloud storage, Power BI dashboard. Uncovers Amsterdam's short-term rental market dynamics.",
      "portfolio.c6.r1": "Raw CSVs → BigQuery (3 tables)",
      "portfolio.c6.r2": "Top revenue neighbourhood",
      "portfolio.c6.r3": "Price vs review score above €500",
      "portfolio.c6.r4": "Review trend: Covid → full rebound",
      "portfolio.c6.link": "View on GitHub",

      "edu.label": "TECHNICAL FOUNDATIONS",
      "edu.title": "Academic & Professional Journey",

      "cert.label": "CREDENTIALS",
      "cert.title": "Technical Certifications",
      "cert.flip_hint": "flip for badge",
      "cert.c1.title": "Google Data Analytics Professional Certificate",
      "cert.c1.org": "Google / Coursera",
      "cert.c1.status": "Earned",
      "cert.c1.date": "2025",
      "cert.c1.back": "Google Data Analytics<br>Professional Certificate",
      "cert.ga4.title": "Google Analytics Certification",
      "cert.ga4.org": "Google · Skillshop",
      "cert.ga4.status": "Valid",
      "cert.ga4.date": "Jan 2026 – Jan 2027",
      "cert.ga4.back": "Google Analytics<br>Certification",
      "cert.c3.title": "PL-300: Power BI Data Analyst",
      "cert.c3.org": "Microsoft",
      "cert.c3.status": "In Progress",
      "cert.c3.date": "2026",
      "cert.c3.back": "Microsoft PL-300<br>Power BI Data Analyst",
      "cert.view": "View Certificate",
      "cert.verify": "Verify Credential",

      "contact.label": "Get in Touch",
      "contact.title": "Ready to scale?",
      "contact.full_name": "Full Name",
      "contact.business_email": "Business Email",
      "contact.brief": "Project Brief",
      "contact.ph_name": "e.g. Francesca Monte",
      "contact.ph_email": "name@company.com",
      "contact.ph_brief": "Describe the bottleneck you're facing...",
      "contact.send": "Send Request",

      // edu timeline legend + chart
      "edu.chart.title": "Career Trajectory Index",
      "edu.chart.hint": "● Click a node to explore each phase",
      "edu.leg1t": "Linguistics & Communication",
      "edu.leg1s": "Structural logic, cross-cultural analysis",
      "edu.leg2t": "Marketing & Strategy",
      "edu.leg2s": "B2B messaging, brand frameworks",
      "edu.leg3t": "Data & Analytics",
      "edu.leg3s": "SQL, Power BI, GA4, Python, AI",
      "edu.leg4t": "Now — Available",
      "edu.leg4s": "Full-stack marketing analyst",
      "edu.yExpert": "Expert",
      "edu.yAdvanced": "Advanced",
      "edu.yIntermediate": "Intermediate",
      "edu.yFoundation": "Foundation",
      "edu.yAxis": "Expertise Level"
    },

    it: {
      // hero stats
      "hero.stat1.label": "ROAS Raggiunto",
      "hero.stat1.ctx":   "Funnel GA4 + Google Ads",
      "hero.stat2.label": "Riduzione CPA",
      "hero.stat2.ctx":   "Riallineamento attribuzione",
      "hero.stat3.label": "Dashboard BI",
      "hero.stat3.ctx":   "Power BI · Star Schema",
      // pillar pills
      "approach.p1.pill": "Riconoscimento Pattern",
      "approach.p2.pill": "GA4 · GTM · Attribuzione",
      "approach.p3.pill": "DAX · Star Schema · SQL",
      "nav.approach": "↑",
      "nav.projects": "Progetti",
      "nav.education": "Formazione",
      "nav.contact": "Contatti",

      "sidebar.role": "Marketing & Data Analyst",
      "sidebar.about_title": "Chi sono",
      "sidebar.availability": "Aperta a opportunità · Amsterdam/Europa e Remote",
      "sidebar.about_p1": "Ogni sistema ha una logica interna, che sia una struttura linguistica o un database SQL. Il mio passaggio ai dati è l'evoluzione di un bisogno: smettere di intuire e iniziare a misurare.",
      "sidebar.about_p2": "Valorizzo i dati perché, a differenza delle parole, mostrano i fatti. Io sono qui per vedere cosa dicono davvero i numeri.",
      "sidebar.meet_me": "Mi trovi su",

      "hero.tagline": "Analizzo le performance attraverso l'integrità dei dati per ottimizzare ogni fase del funnel con un approccio puramente data-driven.",
      "hero.cta_cases": "Vedi Case Studies",
      "hero.cta_cv": "Scarica CV",
      "hero.cta_inquiry": "Invia una richiesta",
      "hero.terminal_hint": "chiedi della carriera di Francesca · formazione · personalità",
      "hero.terminal_line1": "Analizzo le performance di marketing per trovare la verità dietro i numeri.",
      "hero.terminal_pre2": "Focalizzata su",
      "hero.terminal_green1": "ottimizzazione full-funnel",
      "hero.terminal_and": "e",
      "hero.terminal_green2": "esecuzione data-driven.",
      "hero.terminal_status": "aperta a opportunità",

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

      "portfolio.label": "CASE STUDIES SELEZIONATI",
      "portfolio.title": "Soluzioni Strategiche di Dati",
      "portfolio.c1.title": "SQL: Segmentazione HVC",
      "portfolio.c1.desc": "Identificazione dei clienti ad alto valore tramite acquisti Hero Category — audience ad alto ROI per campagne di retention e lookalike.",
      "portfolio.c1.m1l": "Tabelle Unite",
      "portfolio.c1.m2l": "Audience Identificata",
      "portfolio.c1.link": "Vedi su GitHub",
      "portfolio.c2.title": "BI: Churn Analysis",
      "portfolio.c2.desc": "Dashboard interattiva a 3 pagine — analisi dei driver di churn per 7K clienti telco: KPI, analisi comportamentale, impatto finanziario.",
      "portfolio.c2.chart_label": "Churn per Tenure & Canone Mensile",
      "portfolio.c2.leg_active": "Attivi",
      "portfolio.c2.leg_churn": "Churned",
      "portfolio.c2.m1l": "Tasso di Churn",
      "portfolio.c2.m2l": "Revenue a Rischio",
      "portfolio.c2.r1": "ROAS tracking — misura DAX dinamica",
      "portfolio.c2.r2": "Riduzione CPA tramite fix attribuzione",
      "portfolio.c2.r3": "Star Schema — performance query",
      "portfolio.c2.r4": "Tabelle Fact + Dimension progettate",
      "portfolio.c2.link": "Vedi Dashboard",
      "portfolio.c3.title": "Analytics: Funnel Audit",
      "portfolio.c3.desc": "Framework di tracking GA4 full-funnel per eliminare gap nei dati, correggere data leakage e allineare i dati di revenue.",
      "portfolio.c3.chart_label": "Accuratezza Tracking per Stage — Prima e Dopo",
      "portfolio.c3.leg_before": "Prima dell'audit",
      "portfolio.c3.leg_after": "Dopo il fix",
      "portfolio.c3.m1l": "Data Leakage Corretti",
      "portfolio.c3.m2l": "Accuratezza Attribuzione",
      "portfolio.c3.link": "Vedi Audit",
      "portfolio.c3.link_italo": "Italo — GA4 Audit",
      "portfolio.c3.link_yoyo": "YoYo — Funnel",

      "portfolio.c4.title": "Python: Causal Inference",
      "portfolio.c4.desc": "Misurazione del vero lift incrementale dell'esposizione pubblicitaria tramite Inverse Probability Weighting — isolando l'effetto causale dal selection bias.",
      "portfolio.c4.r1": "Propensity score via Regressione Logistica",
      "portfolio.c4.r2": "Bias rimosso — SMD < 0.1",
      "portfolio.c4.r3": "Delta raw lift vs causal lift",
      "portfolio.c4.r4": "Vero lift incrementale dell'ads",
      "portfolio.c4.link": "Vedi su GitHub",
      "portfolio.c5.title": "SENTRY.mark",
      "portfolio.c5.desc": "Engine automatizzato per il rilevamento di anomalie nei dati di marketing — modello Z-Score statistico su pipeline GA4 + BigQuery, con alert Slack in tempo reale e logica Kill-Switch.",
      "portfolio.c5.r1": "Eventi GA4 analizzati via BigQuery",
      "portfolio.c5.r2": "Anomalie rilevate (tasso 5.8%)",
      "portfolio.c5.r3": "Finestra Z-Score rolling per canale",
      "portfolio.c5.r4": "Alert Slack in tempo reale + Kill-Switch",
      "portfolio.c5.m1l": "Tipi di Anomalia",
      "portfolio.c5.m2l": "Tasso di Rilevamento",
      "portfolio.c5.link": "Vedi su GitHub",
      "portfolio.c6.title": "Amsterdam Airbnb Pipeline",
      "portfolio.c6.desc": "Pipeline dati end-to-end su 10K annunci — ETL Python, BigQuery, dashboard Power BI. Analisi del mercato degli affitti brevi ad Amsterdam.",
      "portfolio.c6.r1": "CSV grezzi → BigQuery (3 tabelle)",
      "portfolio.c6.r2": "Quartiere con maggior revenue",
      "portfolio.c6.r3": "Prezzo vs recensioni sopra €500",
      "portfolio.c6.r4": "Trend recensioni: Covid → rimbalzo",
      "portfolio.c6.link": "Vedi su GitHub",

      "edu.label": "BASI TECNICHE",
      "edu.title": "Percorso Accademico e Professionale",

      "cert.label": "CREDENTIALS",
      "cert.title": "Certificazioni Tecniche",
      "cert.flip_hint": "gira per il badge",
      "cert.c1.title": "Google Data Analytics Professional Certificate",
      "cert.c1.org": "Google / Coursera",
      "cert.c1.status": "Conseguita",
      "cert.c1.date": "2025",
      "cert.c1.back": "Google Data Analytics<br>Professional Certificate",
      "cert.ga4.title": "Certificazione Google Analytics",
      "cert.ga4.org": "Google · Skillshop",
      "cert.ga4.status": "Valida",
      "cert.ga4.date": "Gen 2026 – Gen 2027",
      "cert.ga4.back": "Google Analytics<br>Certificazione",
      "cert.c3.title": "PL-300: Power BI Data Analyst",
      "cert.c3.org": "Microsoft",
      "cert.c3.status": "In corso",
      "cert.c3.date": "2026",
      "cert.c3.back": "Microsoft PL-300<br>Power BI Data Analyst",
      "cert.view": "Vedi Certificato",
      "cert.verify": "Verifica Credenziale",

      "contact.label": "CONTATTI",
      "contact.title": "Ready to scale?",
      "contact.full_name": "Nome e Cognome",
      "contact.business_email": "Email aziendale",
      "contact.brief": "Brief di progetto",
      "contact.ph_name": "es. Francesca Monte",
      "contact.ph_email": "nome@azienda.com",
      "contact.ph_brief": "Descrivi brevemente la sfida o il collo di bottiglia che vuoi superare...",
      "contact.send": "Invia Richiesta",

      "edu.chart.title": "Indice di Crescita — Carriera",
      "edu.chart.hint": "● Clicca un nodo per approfondire ogni fase",
      "edu.leg1t": "Linguistica & Comunicazione",
      "edu.leg1s": "Logica strutturale, analisi cross-culturale",
      "edu.leg2t": "Marketing & Strategia",
      "edu.leg2s": "Messaging B2B, framework di brand",
      "edu.leg3t": "Dati & Analytics",
      "edu.leg3s": "SQL, Power BI, GA4, Python, AI",
      "edu.leg4t": "Ora — Disponibile",
      "edu.leg4s": "Marketing analyst full-stack",
      "edu.yExpert": "Esperto",
      "edu.yAdvanced": "Avanzato",
      "edu.yIntermediate": "Intermedio",
      "edu.yFoundation": "Base",
      "edu.yAxis": "Livello di Expertise"
    },

    nl: {
      // hero stats
      "hero.stat1.label": "ROAS Behaald",
      "hero.stat1.ctx":   "GA4 + Google Ads funnel",
      "hero.stat2.label": "CPA Verlaging",
      "hero.stat2.ctx":   "Attributie realignment",
      "hero.stat3.label": "BI Dashboards",
      "hero.stat3.ctx":   "Power BI · Star Schema",
      // pillar pills
      "approach.p1.pill": "Patroonherkenning",
      "approach.p2.pill": "GA4 · GTM · Attributie",
      "approach.p3.pill": "DAX · Star Schema · SQL",
      "nav.approach": "↑",
      "nav.projects": "Projecten",
      "nav.education": "Opleiding",
      "nav.contact": "Contact",

      "sidebar.role": "Marketing & Data Analyst",
      "sidebar.about_title": "Over mij",
      "sidebar.availability": "Open voor kansen · Amsterdam/Europe & Remote",
      "sidebar.about_p1": "Elk systeem heeft een interne logica, of het nu een taalkundige structuur is of een SQL-database. Mijn overstap naar data is de evolutie van een behoefte: stoppen met gokken en beginnen met meten.",
      "sidebar.about_p2": "Ik waardeer data omdat ze, in tegenstelling tot woorden, de feiten laten zien. Ik ben hier om te ontdekken wat de cijfers echt vertellen.",
      "sidebar.meet_me": "Vind mij op",

      "hero.tagline": "Ik analyseer prestaties op basis van data-integriteit om elke fase van de funnel te optimaliseren met een puur data-gedreven aanpak.",
      "hero.cta_cases": "Bekijk Case Studies",
      "hero.cta_cv": "Download CV",
      "hero.cta_inquiry": "Projectaanvraag",
      "hero.terminal_hint": "vraag naar Francesca's carrière · achtergrond · persoonlijkheid",
      "hero.terminal_line1": "Ik analyseer marketingprestaties om de waarheid achter de cijfers te vinden.",
      "hero.terminal_pre2": "Gericht op",
      "hero.terminal_green1": "full-funnel optimalisatie",
      "hero.terminal_and": "en",
      "hero.terminal_green2": "data-gedreven uitvoering.",
      "hero.terminal_status": "open voor kansen",

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

      "portfolio.label": "GESELECTEERDE CASE STUDIES",
      "portfolio.title": "Strategische Data Oplossingen",
      "portfolio.c1.title": "SQL: HVC Segmentatie",
      "portfolio.c1.desc": "Identificatie van klanten met hoge waarde via Hero Category-aankopen — een high-ROI doelgroep voor retentie- en lookalike-campagnes.",
      "portfolio.c1.m1l": "Tabellen Samengevoegd",
      "portfolio.c1.m2l": "Doelgroep Geïdentificeerd",
      "portfolio.c1.link": "Bekijk op GitHub",
      "portfolio.c2.title": "BI: Churn Analyse",
      "portfolio.c2.desc": "Interactief 3-pagina dashboard — churn-drivers geanalyseerd voor 7K telecomklanten: KPI's, gedragsanalyse, financiële impact.",
      "portfolio.c2.chart_label": "Churn naar Tenure & Maandelijkse Kosten",
      "portfolio.c2.leg_active": "Actief",
      "portfolio.c2.leg_churn": "Churned",
      "portfolio.c2.m1l": "Churnpercentage",
      "portfolio.c2.m2l": "Omzet in Gevaar",
      "portfolio.c2.r1": "ROAS tracking — dynamische DAX-meting",
      "portfolio.c2.r2": "CPA-verlaging via attributiefixatie",
      "portfolio.c2.r3": "Star Schema — queryprestaties",
      "portfolio.c2.r4": "Fact + Dimensietabellen ontworpen",
      "portfolio.c2.link": "Bekijk Dashboard",
      "portfolio.c3.title": "Analytics: Funnel Audit",
      "portfolio.c3.desc": "Full-funnel GA4 tracking framework om datalekkage te elimineren, attributie te herstellen en omzetdata te aligneren.",
      "portfolio.c3.chart_label": "Tracking Nauwkeurigheid per Funnelfase — Voor vs Na",
      "portfolio.c3.leg_before": "Voor audit",
      "portfolio.c3.leg_after": "Na fix",
      "portfolio.c3.m1l": "Datalekkages Hersteld",
      "portfolio.c3.m2l": "Attributienauwkeurigheid",
      "portfolio.c3.link": "Bekijk Audit",
      "portfolio.c3.link_italo": "Italo — GA4 Audit",
      "portfolio.c3.link_yoyo": "YoYo — Funnel",

      "portfolio.c4.title": "Python: Causale Inferentie",
      "portfolio.c4.desc": "Meet de werkelijke incrementele lift van advertentieblootstelling met Inverse Probability Weighting — causaal effect geïsoleerd van selectiebias.",
      "portfolio.c4.r1": "Propensity score via Logistische Regressie",
      "portfolio.c4.r2": "Selectiebias verwijderd — SMD < 0.1",
      "portfolio.c4.r3": "Verschil raw lift vs causale lift",
      "portfolio.c4.r4": "Werkelijke incrementele advertentielift",
      "portfolio.c4.link": "Bekijk op GitHub",
      "portfolio.c5.title": "SENTRY.mark",
      "portfolio.c5.desc": "Geautomatiseerde anomaliedetectie-engine voor marketingdata — statistisch Z-Score model op GA4 + BigQuery pipelines, met realtime Slack-alerts en Kill-Switch logica.",
      "portfolio.c5.r1": "GA4-events geanalyseerd via BigQuery",
      "portfolio.c5.r2": "Anomalieën gedetecteerd (5.8% rate)",
      "portfolio.c5.r3": "Rollend Z-Score venster per kanaal",
      "portfolio.c5.r4": "Realtime Slack-alert + Kill-Switch",
      "portfolio.c5.m1l": "Anomalietypes",
      "portfolio.c5.m2l": "Detectiepercentage",
      "portfolio.c5.link": "Bekijk op GitHub",
      "portfolio.c6.title": "Amsterdam Airbnb Pipeline",
      "portfolio.c6.desc": "End-to-end datapipeline op 10K listings — Python ETL, BigQuery opslag, Power BI dashboard. Inzicht in de Amsterdamse kortetermijnverhuurmarkt.",
      "portfolio.c6.r1": "Ruwe CSV's → BigQuery (3 tabellen)",
      "portfolio.c6.r2": "Buurt met hoogste omzet",
      "portfolio.c6.r3": "Prijs vs recensiescore boven €500",
      "portfolio.c6.r4": "Recensietrend: Covid → volledig herstel",
      "portfolio.c6.link": "Bekijk op GitHub",

      "edu.label": "TECHNISCHE BASIS",
      "edu.title": "Academisch & Professioneel Traject",

      "cert.label": "CERTIFICERINGEN",
      "cert.title": "Technische Certificeringen",
      "cert.flip_hint": "draai voor badge",
      "cert.c1.title": "Google Data Analytics Professional Certificate",
      "cert.c1.org": "Google / Coursera",
      "cert.c1.status": "Behaald",
      "cert.c1.date": "2025",
      "cert.c1.back": "Google Data Analytics<br>Professional Certificate",
      "cert.ga4.title": "Google Analytics Certificering",
      "cert.ga4.org": "Google · Skillshop",
      "cert.ga4.status": "Geldig",
      "cert.ga4.date": "Jan 2026 – Jan 2027",
      "cert.ga4.back": "Google Analytics<br>Certificering",
      "cert.c3.title": "PL-300: Power BI Data Analyst",
      "cert.c3.org": "Microsoft",
      "cert.c3.status": "In uitvoering",
      "cert.c3.date": "2026",
      "cert.c3.back": "Microsoft PL-300<br>Power BI Data Analyst",
      "cert.view": "Bekijk Certificaat",
      "cert.verify": "Verifieer Certificaat",

      "contact.label": "CONTACT",
      "contact.title": "Heb je een technisch probleem op te lossen?",
      "contact.full_name": "Volledige naam",
      "contact.business_email": "Zakelijk e-mailadres",
      "contact.brief": "Projectomschrijving",
      "contact.ph_name": "bijv. Francesca Monte",
      "contact.ph_email": "naam@bedrijf.com",
      "contact.ph_brief": "Beschrijf de bottleneck die je ervaart...",
      "contact.send": "Verstuur Aanvraag",

      "edu.chart.title": "Carrière Groei Index",
      "edu.chart.hint": "● Klik op een punt om elke fase te verkennen",
      "edu.leg1t": "Taalkunde & Communicatie",
      "edu.leg1s": "Structurele logica, cross-culturele analyse",
      "edu.leg2t": "Marketing & Strategie",
      "edu.leg2s": "B2B messaging, merkframeworks",
      "edu.leg3t": "Data & Analytics",
      "edu.leg3s": "SQL, Power BI, GA4, Python, AI",
      "edu.leg4t": "Nu — Beschikbaar",
      "edu.leg4s": "Full-stack marketing analist",
      "edu.yExpert": "Expert",
      "edu.yAdvanced": "Gevorderd",
      "edu.yIntermediate": "Gemiddeld",
      "edu.yFoundation": "Basis",
      "edu.yAxis": "Niveau van Expertise"
    }
  };

  // Node panel data per lingua
  const eduNodeData = {
    en: {
      '1': { tag:'Bachelor · Linguistics', title:'Linguistic & Cultural Mediation', period:'2020 – 2023', inst:'UniOr Naples',
        body:`<div class="ep-spec"><h4>Structural Analysis</h4><p>Deep-dive into linguistic logic and syntax patterns. Mental framework to decode complex information structures — the same logic later applied to datasets.</p></div>
              <div class="ep-spec"><h4>Market Localization</h4><p>Analysis of international datasets through a cultural lens to identify consumer nuances that purely technical analysts often miss.</p></div>
              <div class="ep-tags"><span>Linguistics</span><span>Logic</span><span>Structural Analysis</span></div>` },
      '2': { tag:'Master · Communication', title:'Intercultural & International Communication', period:'2023 – 2024', inst:'University of Pisa',
        body:`<div class="ep-spec"><h4>B2B Strategic Messaging</h4><p>Managed communication for a leader in Northern Italian precision industry, translating technical specs into market-ready value propositions.</p></div>
              <div class="ep-spec"><h4>Cross-Border Frameworks</h4><p>Communication architectures for multi-market enterprises. Brand consistency across global touchpoints — skills directly applicable to international marketing.</p></div>
              <div class="ep-tags"><span>Crisis Mgt</span><span>B2B</span><span>Cross-Border</span></div>` },
      '3': { tag:'Certificate · Data', title:'Digital Marketing & Data Analytics', period:'2025', inst:'Certificate Program',
        body:`<div class="ep-spec"><h4>The Pivot</h4><p>The turning point. First structured contact with SQL, GA4, GTM and tracking. Linguistic logic — already developed — applied to data systems.</p></div>
              <div class="ep-spec"><h4>Full-Funnel Thinking</h4><p>End-to-end approach from data collection to campaign optimisation. First real experience of data-driven decision making.</p></div>
              <div class="ep-tags"><span>SQL</span><span>GA4</span><span>GTM</span><span>Data Analytics</span></div>` },
      '4': { tag:'University · AI & Marketing', title:'Digital Marketing & AI Agents', period:'2025', inst:'Start2Impact University',
        body:`<div class="ep-spec"><h4>Technical Tracking & Analytics</h4><p>Full-stack implementation of GA4 & GTM. Full-funnel measurement orchestration to ensure data integrity and attribution logic.</p></div>
              <div class="ep-spec"><h4>AI Agentic Workflows</h4><p>Advanced deployment of custom AI Agents to automate marketing operations and data-driven tasks via Prompt Engineering.</p></div>
              <div class="ep-tags"><span>AI Engineering</span><span>GA4 Stack</span><span>Prompt Engineering</span></div>` },
      '5': { tag:'Certifications · 2026', title:'Technical Certifications', period:'2026', inst:'Microsoft · Google',
        body:`<div class="ep-spec"><h4>Microsoft PL-300: Power BI Data Analyst</h4><p>Official Microsoft certification. Advanced DAX, Star Schema, relational modelling and high-impact executive dashboards.</p></div>
              <div class="ep-spec"><h4>Google Analytics · Google Data Analytics</h4><p>Google Analytics Certification valid Jan 2026 – Jan 2027. Google Data Analytics Professional Certificate (Coursera).</p></div>
              <div class="ep-tags"><span>Power BI</span><span>DAX</span><span>GA4</span><span>Microsoft</span></div>` },
      '6': { tag:'Present · Available', title:'Marketing & Data Analyst', period:'2026 — now', inst:'Open to opportunities',
        body:`<div class="ep-spec"><h4>Full Stack</h4><p>SQL · Power BI · Python · GA4 · GTM · AI Agents · Google Ads · SEO. Skills covering the entire pipeline: from data collection to strategic decision.</p></div>
              <div class="ep-spec"><h4>Available</h4><p>Open to Marketing Analyst, Data Analyst, Marketing Operations roles. Markets: IT, NL, EN.</p></div>
              <div class="ep-tags"><span>SQL</span><span>Power BI</span><span>Python</span><span>Available</span></div>` }
    },
    it: {
      '1': { tag:'Laurea · Linguistica', title:'Mediazione Linguistica e Culturale', period:'2020 – 2023', inst:'UniOr Napoli',
        body:`<div class="ep-spec"><h4>Analisi Strutturale</h4><p>Studio approfondito della logica linguistica e dei pattern sintattici. Framework mentale per decodificare strutture informative complesse — la stessa logica poi applicata ai dataset.</p></div>
              <div class="ep-spec"><h4>Localizzazione di Mercato</h4><p>Analisi di dataset internazionali attraverso una lente culturale per identificare sfumature di consumo che analisi puramente tecniche non colgono.</p></div>
              <div class="ep-tags"><span>Linguistica</span><span>Logica</span><span>Analisi Strutturale</span></div>` },
      '2': { tag:'Master · Comunicazione', title:'Comunicazione Interculturale e Internazionale', period:'2023 – 2024', inst:'Università di Pisa',
        body:`<div class="ep-spec"><h4>Messaging Strategico B2B</h4><p>Gestione della comunicazione per un leader nell'industria di precisione del Nord Italia, traducendo specifiche tecniche in proposte di valore per il mercato.</p></div>
              <div class="ep-spec"><h4>Framework Cross-Border</h4><p>Architetture comunicative per imprese multi-mercato. Brand consistency su touchpoint globali — competenze direttamente applicabili al marketing internazionale.</p></div>
              <div class="ep-tags"><span>Crisis Mgt</span><span>B2B</span><span>Cross-Border</span></div>` },
      '3': { tag:'Certificato · Dati', title:'Digital Marketing & Data Analytics', period:'2025', inst:'Certificate Program',
        body:`<div class="ep-spec"><h4>Il Pivot</h4><p>Il punto di svolta. Primo contatto strutturato con SQL, GA4, GTM e tracking. La logica linguistica — già sviluppata — applicata ai sistemi di dati.</p></div>
              <div class="ep-spec"><h4>Full-Funnel Thinking</h4><p>Approccio end-to-end dalla raccolta dati all'ottimizzazione delle campagne. Prima vera esperienza di decision making data-driven.</p></div>
              <div class="ep-tags"><span>SQL</span><span>GA4</span><span>GTM</span><span>Data Analytics</span></div>` },
      '4': { tag:'Università · AI & Marketing', title:'Digital Marketing & AI Agents', period:'2025', inst:'Start2Impact University',
        body:`<div class="ep-spec"><h4>Technical Tracking & Analytics</h4><p>Implementazione full-stack di GA4 & GTM. Orchestrazione dei sistemi di misurazione full-funnel per garantire data integrity e logica di attribuzione.</p></div>
              <div class="ep-spec"><h4>AI Agentic Workflows</h4><p>Sviluppo avanzato di AI Agents personalizzati per automatizzare operazioni marketing e task data-driven tramite Prompt Engineering.</p></div>
              <div class="ep-tags"><span>AI Engineering</span><span>GA4 Stack</span><span>Prompt Engineering</span></div>` },
      '5': { tag:'Certificazioni · 2026', title:'Certificazioni Tecniche', period:'2026', inst:'Microsoft · Google',
        body:`<div class="ep-spec"><h4>Microsoft PL-300: Power BI Data Analyst</h4><p>Certificazione ufficiale Microsoft. DAX avanzato, Star Schema, modellazione relazionale e dashboard direzionali ad alto impatto.</p></div>
              <div class="ep-spec"><h4>Google Analytics · Google Data Analytics</h4><p>Certificazione Google Analytics valida Gen 2026 – Gen 2027. Google Data Analytics Professional Certificate (Coursera).</p></div>
              <div class="ep-tags"><span>Power BI</span><span>DAX</span><span>GA4</span><span>Microsoft</span></div>` },
      '6': { tag:'Presente · Disponibile', title:'Marketing & Data Analyst', period:'2026 — oggi', inst:'Aperta a opportunità',
        body:`<div class="ep-spec"><h4>Full Stack</h4><p>SQL · Power BI · Python · GA4 · GTM · AI Agents · Google Ads · SEO. Competenze che coprono l'intera pipeline: dalla raccolta dati alla decisione strategica.</p></div>
              <div class="ep-spec"><h4>Disponibile</h4><p>Aperta a ruoli di Marketing Analyst, Data Analyst, Marketing Operations. Mercati: IT, NL, EN.</p></div>
              <div class="ep-tags"><span>SQL</span><span>Power BI</span><span>Python</span><span>Disponibile</span></div>` }
    },
    nl: {
      '1': { tag:'Bachelor · Taalkunde', title:'Linguïstische & Culturele Bemiddeling', period:'2020 – 2023', inst:'UniOr Napels',
        body:`<div class="ep-spec"><h4>Structurele Analyse</h4><p>Diepgaande studie van linguïstische logica en syntaxispatronen. Mentaal framework om complexe informatiestructuren te ontleden — dezelfde logica later toegepast op datasets.</p></div>
              <div class="ep-spec"><h4>Marktlokalisatie</h4><p>Analyse van internationale datasets vanuit een cultureel perspectief om consumentennuances te identificeren die puur technische analyses missen.</p></div>
              <div class="ep-tags"><span>Taalkunde</span><span>Logica</span><span>Structurele Analyse</span></div>` },
      '2': { tag:'Master · Communicatie', title:'Interculturele & Internationale Communicatie', period:'2023 – 2024', inst:'Universiteit van Pisa',
        body:`<div class="ep-spec"><h4>B2B Strategische Messaging</h4><p>Communicatiebeheer voor een marktleider in de precisie-industrie in Noord-Italië, waarbij technische specs werden vertaald naar strategische marktwaarde.</p></div>
              <div class="ep-spec"><h4>Cross-Border Frameworks</h4><p>Communicatie-architecturen voor internationale ondernemingen. Merkconsistentie over alle touchpoints — vaardigheden direct toepasbaar in internationale marketing.</p></div>
              <div class="ep-tags"><span>Crisis Mgt</span><span>B2B</span><span>Cross-Border</span></div>` },
      '3': { tag:'Certificaat · Data', title:'Digital Marketing & Data Analytics', period:'2025', inst:'Certificate Program',
        body:`<div class="ep-spec"><h4>Het Keerpunt</h4><p>Het omslagpunt. Eerste gestructureerd contact met SQL, GA4, GTM en tracking. De linguïstische logica — al ontwikkeld — toegepast op datasystemen.</p></div>
              <div class="ep-spec"><h4>Full-Funnel Denken</h4><p>End-to-end aanpak van dataverzameling tot campagneoptimalisatie. Eerste echte ervaring met data-gedreven besluitvorming.</p></div>
              <div class="ep-tags"><span>SQL</span><span>GA4</span><span>GTM</span><span>Data Analytics</span></div>` },
      '4': { tag:'Universiteit · AI & Marketing', title:'Digital Marketing & AI Agents', period:'2025', inst:'Start2Impact University',
        body:`<div class="ep-spec"><h4>Technical Tracking & Analytics</h4><p>Full-stack implementatie van GA4 & GTM. Orkestratie van full-funnel meetoplossingen om data-integriteit en attributielogica te waarborgen.</p></div>
              <div class="ep-spec"><h4>AI Agentic Workflows</h4><p>Geavanceerde inzet van custom AI Agents om marketingoperaties en data-driven taken te automatiseren met Prompt Engineering.</p></div>
              <div class="ep-tags"><span>AI Engineering</span><span>GA4 Stack</span><span>Prompt Engineering</span></div>` },
      '5': { tag:'Certificeringen · 2026', title:'Technische Certificeringen', period:'2026', inst:'Microsoft · Google',
        body:`<div class="ep-spec"><h4>Microsoft PL-300: Power BI Data Analyst</h4><p>Officiële Microsoft-certificering. Geavanceerde DAX, Star Schema, relationele modellering en high-impact dashboards.</p></div>
              <div class="ep-spec"><h4>Google Analytics · Google Data Analytics</h4><p>Google Analytics Certificering geldig jan 2026 – jan 2027. Google Data Analytics Professional Certificate (Coursera).</p></div>
              <div class="ep-tags"><span>Power BI</span><span>DAX</span><span>GA4</span><span>Microsoft</span></div>` },
      '6': { tag:'Heden · Beschikbaar', title:'Marketing & Data Analist', period:'2026 — nu', inst:'Open voor kansen',
        body:`<div class="ep-spec"><h4>Full Stack</h4><p>SQL · Power BI · Python · GA4 · GTM · AI Agents · Google Ads · SEO. Vaardigheden die de volledige pipeline dekken: van dataverzameling tot strategische beslissing.</p></div>
              <div class="ep-spec"><h4>Beschikbaar</h4><p>Open voor Marketing Analyst, Data Analyst, Marketing Operations. Markten: IT, NL, EN.</p></div>
              <div class="ep-tags"><span>SQL</span><span>Power BI</span><span>Python</span><span>Beschikbaar</span></div>` }
    }
  };

  let currentLang = 'en';

  function applyLanguage(lang) {
    currentLang = lang;
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

    // edu timeline elements (SVG text + legend + hint)
    const map = {
      chartTitle:      dict["edu.chart.title"],
      nodeHint:        dict["edu.chart.hint"],
      yExpert:         dict["edu.yExpert"],
      yAdvanced:       dict["edu.yAdvanced"],
      yIntermediate:   dict["edu.yIntermediate"],
      yFoundation:     dict["edu.yFoundation"],
      yAxisLabel:      dict["edu.yAxis"],
      leg1t:           dict["edu.leg1t"],
      leg1s:           dict["edu.leg1s"],
      leg2t:           dict["edu.leg2t"],
      leg2s:           dict["edu.leg2s"],
      leg3t:           dict["edu.leg3t"],
      leg3s:           dict["edu.leg3s"],
      leg4t:           dict["edu.leg4t"],
      leg4s:           dict["edu.leg4s"],
    };
    Object.entries(map).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el && val) el.textContent = val;
    });

    // active state buttons
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });

    localStorage.setItem("lang", lang);
  }

  // Lang button click — stopPropagation prevents sidebar opening
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      applyLanguage(btn.dataset.lang);
    });
  });

  // Init with saved lang
  applyLanguage(localStorage.getItem("lang") || "en");

  // =========================
  // 6. EDU SLIDE-IN PANEL
  // =========================
  const eduPanel        = document.getElementById('eduPanel');
  const eduPanelOverlay = document.getElementById('eduPanelOverlay');
  const eduPanelClose   = document.getElementById('eduPanelClose');

  function openEduPanel(nodeId) {
    const data = eduNodeData[currentLang] && eduNodeData[currentLang][nodeId];
    if (!data || !eduPanel) return;
    document.getElementById('eduPanelTag').textContent    = data.tag;
    document.getElementById('eduPanelTitle').textContent  = data.title;
    document.getElementById('eduPanelPeriod').textContent = data.period;
    document.getElementById('eduPanelInst').textContent   = data.inst;
    document.getElementById('eduPanelBody').innerHTML     = data.body;
    eduPanel.classList.add('active');
    eduPanelOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeEduPanel() {
    if (!eduPanel) return;
    eduPanel.classList.remove('active');
    eduPanelOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (eduPanelClose)   eduPanelClose.addEventListener('click', closeEduPanel);
  if (eduPanelOverlay) eduPanelOverlay.addEventListener('click', closeEduPanel);

  document.querySelectorAll('.edu-hit').forEach(el => {
    el.addEventListener('click', () => openEduPanel(el.dataset.node));
  });

  // =========================
  // 7. EDU TIMELINE ANIMATION
  // =========================
  const eduNodes = [
    { o:'eno1', i:'eni1', l:'enl1', s:'ens1', delay: 200  },
    { o:'eno2', i:'eni2', l:'enl2', s:'ens2', delay: 600  },
    { o:'eno3', i:'eni3', l:'enl3', s:'ens3', delay: 1000 },
    { o:'eno4', i:'eni4', l:'enl4', s:'ens4', delay: 1400 },
    { o:'eno5', i:'eni5', l:'enl5', s:'ens5', delay: 1800 },
    { o:'eno6', i:'eni6', l:'enl6', s:'ens6', delay: 2100 },
  ];

  function showEduNode(n) {
    ['o','i','l','s'].forEach(k => {
      const el = document.getElementById(n[k]);
      if (el) el.style.opacity = '1';
    });
  }

  function runEduTimeline() {
    const line      = document.getElementById('eduLine');
    const area      = document.getElementById('eduArea');
    const pivotLine = document.getElementById('eduPivotLine');
    const pivotT1   = document.getElementById('eduPivotT1');
    const pivotT2   = document.getElementById('eduPivotT2');
    if (!line) return;

    setTimeout(() => { line.style.strokeDashoffset = '0'; }, 100);
    setTimeout(() => {
      if (pivotLine) pivotLine.style.opacity = '1';
      if (pivotT1)   pivotT1.style.opacity   = '1';
      if (pivotT2)   pivotT2.style.opacity   = '1';
    }, 1200);
    setTimeout(() => { if (area) area.style.opacity = '1'; }, 1800);
    eduNodes.forEach(n => setTimeout(() => showEduNode(n), n.delay));
    ['tli1','tli2','tli3','tli4'].forEach((id, i) => {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.classList.add('show');
      }, 2300 + i * 150);
    });
  }

  const eduSection = document.getElementById('education');
  if (eduSection) {
    const eduObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { runEduTimeline(); eduObserver.disconnect(); }
      });
    }, { threshold: 0.25 });
    eduObserver.observe(eduSection);
  }

  // =========================
  // 8. HERO COUNTER ANIMATION
  // =========================
  function animateCounter(block) {
    const target   = parseFloat(block.dataset.target);
    const suffix   = block.dataset.suffix;
    const decimals = parseInt(block.dataset.decimals);
    const valueEl  = block.querySelector('.stat-value');
    const duration = 1800;
    const start    = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased    = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      valueEl.innerHTML = (eased * target).toFixed(decimals) + `<span class="stat-suffix">${suffix}</span>`;
      if (progress < 1) requestAnimationFrame(update);
      else block.classList.add('counted');
    }
    requestAnimationFrame(update);
  }

  const statBlocks = document.querySelectorAll('.stat-block');
  let countersRun  = false;
  const heroEl     = document.querySelector('.hero');
  if (heroEl && statBlocks.length) {
    const heroObs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersRun) {
        countersRun = true;
        statBlocks.forEach((b, idx) => setTimeout(() => animateCounter(b), idx * 220));
        heroObs.disconnect();
      }
    }, { threshold: 0.4 });
    heroObs.observe(heroEl);
  }

  // =========================
  // 9. PILLAR SCROLL ANIMATION
  // =========================
  const pillarCards = document.querySelectorAll('.pillar-card');
  if (pillarCards.length) {
    const pillarObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    pillarCards.forEach(p => pillarObs.observe(p));
  }

  // =========================
  // 10. CONTACT FORM
  // =========================
  const contactForm = document.getElementById("contact-form");
  const submitBtn   = document.getElementById("submit-btn");

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
          submitBtn.textContent = "Sent!";
          submitBtn.style.background = "#10b981";
          contactForm.reset();
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = "";
            submitBtn.disabled = false;
          }, 5000);
        } else {
          throw new Error();
        }
      } catch {
        submitBtn.textContent = "Error!";
        submitBtn.style.background = "#ef4444";
        submitBtn.disabled = false;
      }
    });
  }

  // =========================
  // 11. FUNNEL BAR CHART
  // =========================
  const funnelData = [
    { label: 'Landing', before: 45, after: 98 },
    { label: 'PDP',     before: 38, after: 95 },
    { label: 'Cart',    before: 22, after: 91 },
    { label: 'Check',   before: 18, after: 94 },
    { label: 'Confirm', before: 12, after: 96 },
  ];
  const funnelEl = document.getElementById('funnelBars');
  if (funnelEl) {
    funnelData.forEach(d => {
      const wrap = document.createElement('div');
      wrap.className = 'bar-wrap';
      wrap.innerHTML = `
        <div class="bar-group">
          <div class="bar-bg" style="height:${d.before}%"><div class="bar-fill before"></div></div>
          <div class="bar-bg" style="height:${d.after}%"><div class="bar-fill after"></div></div>
        </div>
        <span class="bar-xlbl">${d.label}</span>`;
      funnelEl.appendChild(wrap);
    });
    let barsAnimated = false;
    const barsObs = new IntersectionObserver(e => {
      if (e[0].isIntersecting && !barsAnimated) {
        barsAnimated = true;
        setTimeout(() => {
          document.querySelectorAll('#funnelBars .bar-fill').forEach(b => b.style.height = '100%');
        }, 300);
        barsObs.disconnect();
      }
    }, { threshold: 0.3 });
    barsObs.observe(funnelEl);
  }

  // =========================
  // 13. CAROUSEL
  // =========================
  const carousel    = document.getElementById('csCarousel');
  const prevBtn     = document.getElementById('carouselPrev');
  const nextBtn     = document.getElementById('carouselNext');
  const dotsEl      = document.getElementById('carouselDots');

  if (carousel && prevBtn && nextBtn) {
    const cards     = carousel.querySelectorAll('.cs-card');
    const total     = cards.length;
    let current     = 0;

    // Build dots
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Project ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    });

    function getCardWidth() {
      if (!cards[0]) return 0;
      const style = getComputedStyle(carousel);
      const gap = parseFloat(style.gap) || 24;
      return cards[0].getBoundingClientRect().width + gap;
    }

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, total - 1));
      const offset = getCardWidth() * current;
      carousel.style.transform = `translateX(-${offset}px)`;
      prevBtn.disabled = current === 0;
      nextBtn.disabled = current === total - 1;
      dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Touch/swipe support
    let touchStartX = 0;
    carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });

    // Keyboard
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowLeft')  goTo(current - 1);
    });

    goTo(0);
    window.addEventListener('resize', () => goTo(current));
  }

  // =========================
  // 12. SCATTER PLOT — Churn by Tenure & Monthly Charges
  // =========================
  const scatterCanvas = document.getElementById('scatterCanvas');
  if (scatterCanvas) {
    const ctx = scatterCanvas.getContext('2d');
    const W = scatterCanvas.offsetWidth || 260;
    const H = scatterCanvas.offsetHeight || 90;
    scatterCanvas.width  = W * window.devicePixelRatio;
    scatterCanvas.height = H * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Synthetic data representative of real churn pattern:
    // Active: spread across all tenure, lower-mid charges
    // Churned: concentrated low tenure (0-25mo), mid-high charges
    const seed = (n) => { let x = Math.sin(n) * 10000; return x - Math.floor(x); };
    const pts = [];
    for (let i = 0; i < 180; i++) {
      // Active customers — longer tenure, lower charges
      const tenure = seed(i * 3.7) * 72 + 2;
      const charge = seed(i * 1.3) * 80 + 18;
      pts.push({ x: tenure, y: charge, churn: false });
    }
    for (let i = 0; i < 80; i++) {
      // Churned — concentrated in first 25 months, mid-high charges
      const tenure = seed(i * 2.1) * 30 + 1;
      const charge = seed(i * 4.9) * 60 + 35;
      pts.push({ x: tenure, y: charge, churn: true });
    }
    // Also scatter some churned across longer tenure (outliers)
    for (let i = 0; i < 20; i++) {
      pts.push({ x: seed(i * 6.3) * 72, y: seed(i * 8.1) * 90 + 15, churn: true });
    }

    const pad = { l: 6, r: 6, t: 4, b: 4 };
    const mapX = x => pad.l + (x / 74) * (W - pad.l - pad.r);
    const mapY = y => H - pad.b - (y / 120) * (H - pad.t - pad.b);

    // Grid lines
    ctx.strokeStyle = 'rgba(30,41,59,0.8)';
    ctx.lineWidth = 0.5;
    [20, 40, 60, 80, 100].forEach(v => {
      const y = mapY(v);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W - pad.r, y); ctx.stroke();
    });
    [0, 20, 40, 60].forEach(v => {
      const x = mapX(v);
      ctx.beginPath(); ctx.moveTo(x, pad.t); ctx.lineTo(x, H - pad.b); ctx.stroke();
    });

    // Draw dots with staggered animation
    let drawn = 0;
    const total = pts.length;
    function drawNext() {
      if (drawn >= total) return;
      const p = pts[drawn];
      ctx.beginPath();
      ctx.arc(mapX(p.x), mapY(p.y), 1.8, 0, Math.PI * 2);
      ctx.fillStyle = p.churn ? 'rgba(244,63,94,0.75)' : 'rgba(96,165,250,0.45)';
      ctx.fill();
      drawn++;
      if (drawn < total) requestAnimationFrame(drawNext);
    }

    const scatterObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { drawNext(); scatterObs.disconnect(); }
    }, { threshold: 0.3 });
    scatterObs.observe(scatterCanvas);
  }

  // =========================
  // 14. INTERACTIVE TERMINAL
  // =========================
  const termBody = document.getElementById('heroTermBody');
  if (termBody) {
    const TCMD = {
      help: ()=>[
        {c:'t-od',v:'─── available commands ───────────────────────────────'},
        {c:'t-og',v:'  whoami / about / francesca   → who she is'},
        {c:'t-og',v:'  personality / character      → who she is beyond the data'},
        {c:'t-og',v:'  experience / work            → work history'},
        {c:'t-og',v:'  projects                     → portfolio projects'},
        {c:'t-og',v:'  skills / stack               → technical skills'},
        {c:'t-og',v:'  education / background       → academic path'},
        {c:'t-og',v:'  certifications / certs       → credentials'},
        {c:'t-og',v:'  languages                    → spoken languages'},
        {c:'t-og',v:'  contact                      → get in touch'},
        {c:'t-og',v:'  github                       → her GitHub'},
        {c:'t-og',v:'  cv / resume                  → download CV'},
        {c:'t-og',v:'  status                       → availability'},
        {c:'t-og',v:'  clear                        → clear terminal'},
        {c:'t-od',v:'─────────────────────────────────────────────────────'},
        {c:'t-od',v:'tip: natural questions work — try "her personality"'},
      ],
      about: ()=>[
        {c:'t-ow',v:'Francesca Monte — Marketing & Data Analyst'},
        {c:'t-od',v:''},
        {c:'',v:'Originally trained in linguistics and cross-cultural communication,'},
        {c:'',v:'Francesca made a deliberate pivot into data analytics in 2024–2025.'},
        {c:'t-od',v:''},
        {c:'',v:'Her linguistic background gives her something most analysts lack:'},
        {c:'',v:'the ability to interpret, narrate, and communicate findings'},
        {c:'',v:'with precision — not just build the models.'},
        {c:'t-od',v:''},
        {c:'t-og',v:'→ analyzes marketing performance to find the truth behind the numbers'},
        {c:'t-oc',v:'Based in Naples · relocating to Amsterdam · September 2026'},
        {c:'t-og',v:'EU citizen · available within 2–3 weeks · no sponsorship needed'},
      ],
      personality: ()=>[
        {c:'t-oa',v:'── PERSONALITY & APPROACH ────────────────────────────'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'The pattern hunter.'},
        {c:'t-od',v:''},
        {c:'',v:'Long before she worked with datasets, Francesca was obsessed'},
        {c:'',v:'with finding patterns — in languages. She studied how words'},
        {c:'',v:'from unrelated cultures share the same roots, why structures'},
        {c:'',v:'converge across different linguistic families.'},
        {c:'t-od',v:''},
        {c:'',v:'Today she does exactly the same thing — with data.'},
        {c:'',v:'The obsession is identical. Only the medium changed.'},
        {c:'t-od',v:''},
        {c:'t-og',v:'→ linguistics → data analytics: same root cause thinking.'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Beyond the technical.'},
        {c:'t-od',v:''},
        {c:'',v:'Genuinely charismatic — makes people feel heard. Listens'},
        {c:'',v:'carefully, gives precise advice, brings warmth to professional'},
        {c:'',v:'environments without losing analytical sharpness.'},
        {c:'t-od',v:''},
        {c:'t-oc',v:'Charisma + analytical rigor + communication precision'},
        {c:'t-og',v:'= a rare combination in the data world.'},
      ],
      experience: ()=>[
        {c:'t-oa',v:'── WORK EXPERIENCE ───────────────────────────────────'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Freelance Marketing & Analytics Consultant'},
        {c:'t-oc',v:'Independent · Jan 2026 – Present'},
        {c:'',v:'→ Meta ad audit, performance analysis & budget strategy'},
        {c:'',v:'→ SENTRY.mark and Causal Inference originated from this work'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Data Quality & AI Content Evaluator'},
        {c:'t-oc',v:'RWS · Remote · Sep 2025 – Jan 2026'},
        {c:'',v:'→ AI model outputs evaluation for Meta and Google ad systems'},
        {c:'',v:'→ GDPR and data classification compliance'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Content Strategist & Media Manager'},
        {c:'t-oc',v:'Polymed Surgery S.r.l · Naples · Feb–Nov 2025'},
        {c:'',v:'→ Grew Instagram from ~60K to ~70K (+15%) in 9 months'},
        {c:'',v:'→ Full ownership of content strategy and paid campaigns'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Marketing & Communications Intern'},
        {c:'t-oc',v:'Asco Pompe S.r.l · Milan · Oct 2024 – Jan 2025'},
        {c:'',v:'→ Brand strategy across multiple subsidiaries'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Marketing & Social Media Intern'},
        {c:'t-oc',v:'Royal Group S.r.l · Naples · Jan 2023 – Jan 2024'},
        {c:'',v:'→ Digital campaign execution and performance monitoring'},
      ],
      projects: ()=>[
        {c:'t-oa',v:'── PROJECTS ──────────────────────────────────────────'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'SENTRY.mark — Anomaly Detection Engine'},
        {c:'t-oc',v:'Python · BigQuery · Power BI · Slack · May 2025'},
        {c:'',v:'→ Z-Score rolling baselines (7-day, α=0.05, Z>1.96)'},
        {c:'t-og',v:'→ 5/5 synthetic anomalies caught via chaos engineering'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Causal Impact of Ad Exposure on Conversion Rate'},
        {c:'t-oc',v:'Python · IPW · Scikit-learn · Mar 2025'},
        {c:'t-og',v:'→ Raw lift 6.05% vs true causal lift 5.17% — 0.89pp bias'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Amsterdam Airbnb ETL Pipeline'},
        {c:'t-oc',v:'Python · BigQuery · Power BI · May 2025'},
        {c:'t-og',v:'→ 10K listings · 3.8M rows · Centrum-Oost ~€60K/listing/yr'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'BI: Telecom Churn · SQL: HVC Segmentation · GA4 Funnel Audit'},
        {c:'t-ol',v:'→ github.com/francescaetnom-wq',href:'https://github.com/francescaetnom-wq'},
      ],
      skills: ()=>[
        {c:'t-oa',v:'── TECHNICAL SKILLS ──────────────────────────────────'},
        {c:'t-od',v:''},
        {c:'t-oc',v:'[ Analytics & BI ]'},
        {c:'',v:'  BigQuery · SQL · Python (Pandas, SciPy) · Scikit-learn'},
        {c:'',v:'  Power BI (DAX · Star Schema) · GA4 · Looker Studio'},
        {c:'t-oc',v:'[ Methods ]'},
        {c:'',v:'  Causal Inference (IPW) · Anomaly Detection · ETL Pipeline'},
        {c:'',v:'  A/B Testing · Statistical Analysis · KPI Reporting'},
        {c:'t-oc',v:'[ Marketing & Automation ]'},
        {c:'',v:'  Meta Ads · SEO · GTM · GitHub Actions · Slack API · n8n · AI Agents'},
        {c:'t-od',v:''},
        {c:'t-og',v:'+ linguistics → exceptional data storytelling'},
      ],
      education: ()=>[
        {c:'t-oa',v:'── EDUCATION ─────────────────────────────────────────'},
        {c:'t-od',v:''},
        {c:'t-ow',v:"Master's — Strategic & Professional Communication"},
        {c:'t-oc',v:'University of Pisa · Dec 2024'},
        {c:'t-od',v:''},
        {c:'t-ow',v:"Bachelor's — Languages & Cultures (Europe & Americas)"},
        {c:'t-oc',v:'UniOr Naples · Oct 2023'},
        {c:'t-od',v:''},
        {c:'t-ow',v:'Digital Marketing & Agentic AI Master'},
        {c:'t-oc',v:'Start2Impact University · Expected Aug 2026'},
        {c:'t-od',v:''},
        {c:'t-og',v:'→ linguistics background = data analyst who can communicate'},
      ],
      certifications: ()=>[
        {c:'t-oa',v:'── CERTIFICATIONS ────────────────────────────────────'},
        {c:'t-od',v:''},
        {c:'t-og',v:'✓ Google Data Analytics Professional Certificate · Feb 2026'},
        {c:'t-og',v:'✓ Google Analytics Certification · Jan 2026'},
        {c:'t-og',v:'✓ Microsoft PL-300 Power BI Data Analyst · May 2026'},
      ],
      languages: ()=>[
        {c:'t-oa',v:'── LANGUAGES ─────────────────────────────────────────'},
        {c:'t-od',v:''},
        {c:'t-og',v:'Italian     Native'},
        {c:'t-og',v:'English     C2'},
        {c:'',v:'French      B2'},
        {c:'',v:'Portuguese  B2'},
        {c:'t-oc',v:'Dutch       A1 — actively learning 🇳🇱'},
        {c:'t-od',v:''},
        {c:'',v:'5 languages + data fluency = rare combination in analytics'},
      ],
      contact: ()=>[
        {c:'t-ow',v:'francescaetnom@gmail.com'},
        {c:'t-od',v:''},
        {c:'t-ol',v:'LinkedIn → linkedin.com/in/francesca-monte',href:'https://www.linkedin.com/in/francesca-monte'},
        {c:'t-ol',v:'GitHub   → github.com/francescaetnom-wq',href:'https://github.com/francescaetnom-wq'},
        {c:'t-og',v:'→ or scroll down and use the contact form'},
      ],
      github: ()=>[
        {c:'t-ow',v:'github.com/francescaetnom-wq'},
        {c:'t-ol',v:'→ open GitHub profile',href:'https://github.com/francescaetnom-wq'},
      ],
      cv: ()=>[
        {c:'t-od',v:'Initiating download...'},
        {c:'t-og',v:'✓ francesca_monte_cv.pdf'},
        {c:'t-ol',v:'→ click to download',href:'francesca_monte_cv.pdf',dl:'Francesca_Monte_CV.pdf'},
      ],
      status: ()=>[
        {c:'t-og',v:'● AVAILABLE'},
        {c:'t-od',v:''},
        {c:'',v:'Roles:      Marketing Analyst · Data Analyst · Marketing Ops'},
        {c:'',v:'Markets:    Netherlands · Italy · Remote'},
        {c:'t-oa',v:'Relocation: Amsterdam · September 2026'},
        {c:'t-og',v:'Notice:     2–3 weeks · EU citizen · no sponsorship needed'},
      ],
    };

    const TQA = [
      {keys:['who is','tell me about','about francesca','chi è','introduce','francesca monte','her story','who she'],cmd:'about'},
      {keys:['personality','character','vibes','charisma','who she really','soft skills','beyond the data','curiosity','pattern','pivot','why data','how did she','career switch','linguist','switched','transition'],cmd:'personality'},
      {keys:['experience','work','job','career','worked','roles','professional','polymed','rws','asco','royal','consulting','freelance'],cmd:'experience'},
      {keys:['project','portfolio','sentry','causal','airbnb','amsterdam','churn','sql','hvc','built','created'],cmd:'projects'},
      {keys:['skill','stack','tech','tools','python','sql','power bi','bigquery','ga4','gtm','capabilities'],cmd:'skills'},
      {keys:['education','study','degree','university','master','bachelor','pisa','unior','start2impact','academic','background','formation','studied'],cmd:'education'},
      {keys:['cert','certif','credential','google','pl-300','microsoft','coursera'],cmd:'certifications'},
      {keys:['language','speak','italian','english','french','portuguese','dutch','multilingual'],cmd:'languages'},
      {keys:['contact','email','reach','get in touch','talk to','message','linkedin'],cmd:'contact'},
      {keys:['github','repo','code','source'],cmd:'github'},
      {keys:['cv','resume','download','pdf'],cmd:'cv'},
      {keys:['status','available','availability','open to','relocat','moving'],cmd:'status'},
      {keys:['help','commands','what can','options','menu'],cmd:'help'},
    ];

    const TEASTER = {
      'hire francesca': [{c:'t-og',v:'✓ Excellent choice.'},{c:'t-od',v:''},{c:'t-oa',v:'[██████████] 100% — candidate loaded'},{c:'t-od',v:''},{c:'t-og',v:'→ francescaetnom@gmail.com'}],
      'coffee': [{c:'t-oa',v:'brewing... ☕'},{c:'t-od',v:'(I run on GA4 data and curiosity)'}],
      'hello': [{c:'t-og',v:'Hello! Type  help  to explore.'}],
      'hi': [{c:'t-og',v:'Hi! Type  help  to see what I can do.'}],
      'pwd': [{c:'',v:'/home/francesca/portfolio'}],
      'date': [{c:'',v:new Date().toDateString()}],
    };
    TEASTER['sudo hire francesca'] = TEASTER['hire francesca'];

    function tFuzzy(input) {
      const lower = input.toLowerCase();
      for (const {keys,cmd} of TQA) {
        if (keys.some(k=>lower.includes(k))) return cmd;
      }
      return null;
    }

    let tHist=[], tHidx=-1;
    const allTCmds=[...Object.keys(TCMD),...Object.keys(TEASTER)];

    function tPrint(lines) {
      lines.forEach(l=>{
        const el=document.createElement('div');
        el.className='term-line';
        if(l.c==='t-ol'){
          const a=document.createElement('a');
          a.className='t-ol'; a.textContent=l.v; a.href=l.href||'#';
          if(l.dl) a.download=l.dl; a.target='_blank';
          el.appendChild(a);
        } else {
          if(l.c) el.classList.add(l.c);
          el.textContent=l.v;
        }
        termBody.insertBefore(el,tInputRow);
      });
      termBody.scrollTop=termBody.scrollHeight;
    }

    function tPrintCmd(cmd) {
      const el=document.createElement('div');
      el.className='term-line term-line-input';
      el.innerHTML=`<span class="term-prompt-sym">~/portfolio $</span><span class="term-cmd-text">${cmd}</span>`;
      termBody.insertBefore(el,tInputRow);
    }

    function tExecute(raw) {
      const trimmed=raw.trim(); if(!trimmed) return;
      tHist.unshift(trimmed); tHidx=-1; tPrintCmd(trimmed);
      const lower=trimmed.toLowerCase();
      if(lower==='clear'){Array.from(termBody.children).forEach(c=>{if(c!==tInputRow)c.remove();}); return;}
      if(TCMD[lower]){tPrint(TCMD[lower]()); return;}
      if(TEASTER[lower]){tPrint(Array.isArray(TEASTER[lower])?TEASTER[lower]:TEASTER[TEASTER[lower]]); return;}
      const matched=tFuzzy(lower);
      if(matched&&TCMD[matched]){tPrint(TCMD[matched]()); return;}
      tPrint([{c:'t-or',v:`command not found: ${trimmed}`},{c:'t-od',v:'type  help  to see available commands'}]);
    }

    const tInputRow=document.createElement('div');
    tInputRow.className='hero-term-input-row';
    tInputRow.innerHTML=`<span class="hero-term-prompt">~/portfolio $</span>`;
    const tInp=document.createElement('input');
    tInp.id='heroTermInput'; tInp.autocomplete='off'; tInp.spellcheck=false;
    tInp.setAttribute('autocorrect','off'); tInputRow.appendChild(tInp);
    termBody.appendChild(tInputRow);

    tInp.addEventListener('keydown',e=>{
      if(e.key==='Enter'){tExecute(tInp.value);tInp.value='';}
      else if(e.key==='ArrowUp'){e.preventDefault();if(tHidx<tHist.length-1){tHidx++;tInp.value=tHist[tHidx];}}
      else if(e.key==='ArrowDown'){e.preventDefault();if(tHidx>0){tHidx--;tInp.value=tHist[tHidx];}else{tHidx=-1;tInp.value='';}}
      else if(e.key==='Tab'){
        e.preventDefault();
        const v=tInp.value.trim().toLowerCase();
        const m=allTCmds.find(k=>k.startsWith(v)&&k!==v);
        if(m) tInp.value=m;
      }
    });

    tPrint([
      {c:'t-od',v:'francesca@portfolio ~ interactive shell'},
      {c:'t-ow',v:'Welcome. This terminal knows Francesca.'},
      {c:'',v:'ask naturally or type  help  for commands'},
      {c:'t-og',v:'  "francesca personality"  /  "work experience"  /  "projects"'},
      {c:'t-od',v:'──────────────────────────────────────────────────────'},
    ]);
  }

});
