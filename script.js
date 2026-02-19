const $ = (sel) => document.querySelector(sel);

const i18n = {
  pt: {
    // Top / Nav
    brandTag: "Site institucional • MVP",
    themeToggle: "Tema",
    navCta: "Dar feedback",
    menuAbout: "Sobre",
    menuSolution: "Solução",
    menuHow: "Como funciona",
    menuBenefits: "Benefícios",
    menuFaq: "FAQ",
    menuContact: "Contato",

    // Hero
    badge: "Educação Étnico-Racial o ano todo • Lei 10.639/03",
    heroTitle2:
      "Uma plataforma para transformar a implementação da Lei 10.639/03 em rotina pedagógica.",
    heroSubtitle2:
      "Microformações aplicáveis, kit de aula pronto/adaptável e painel de evidências para escolas e redes.",
    primaryCta2: "Conhecer a solução",
    secondaryCta2: "Falar com a equipe",

    trust1Title: "Foco em prática",
    trust1Desc: "menos teoria solta",
    trust2Title: "Acompanhamento",
    trust2Desc: "evidências mensais",
    trust3Title: "Território",
    trust3Desc: "conexão com comunidades",

    // Hero card
    cardTitle2: "Estamos validando o MVP",
    cardLead2:
      "Precisamos do teu olhar crítico pra ajustar o produto.",
    cardItem1: "O problema está claro e real?",
    cardItem2: "A solução parece aplicável no dia a dia?",
    cardItem3: "O que te faria recomendar ou comprar?",
    cardCta: "Responder o formulário",
    cardNote: "Leva 2–4 minutos. Prometo não doer.",

    // About
    aboutTitle: "Sobre o Horizonte Afro",
    aboutLead:
      "A educação étnico-racial não pode ser evento: precisa virar rotina. O Horizonte Afro nasce para apoiar docentes e gestores com formação prática, materiais aplicáveis e acompanhamento.",
    missionTitle: "Missão",
    missionDesc:
      "Ajudar escolas e redes a implementarem a Lei 10.639/03 de forma contínua, segura e mensurável.",
    visionTitle: "Visão",
    visionDesc:
      "Currículos vivos, conectados ao território e sustentados por práticas pedagógicas consistentes.",

    // Solution / Offers
    solutionTitle: "O que oferecemos",
    solutionLead2:
      "Um conjunto de módulos pensados para o cotidiano escolar — do professor à gestão.",
    offer1Title: "Microformações",
    offer1Desc: "Aulas curtas, objetivas e diretamente aplicáveis em sala.",
    offer2Title: "Kit pedagógico",
    offer2Desc: "Sequências didáticas, atividades e checklists para adaptar.",
    offer3Title: "Curadoria do território",
    offer3Desc: "Conteúdos conectados às comunidades e à realidade local.",
    offer4Title: "Painel de evidências",
    offer4Desc:
      "Acompanhamento mensal: trilhas, certificados, portfólios e relatórios por escola/rede.",

    // How it works
    howTitle: "Como funciona",
    how1Title: "Diagnóstico",
    how1Desc: "Entendemos o contexto e os objetivos da escola/rede.",
    how2Title: "Trilhas e aplicação",
    how2Desc: "Microformações + kit para aplicar e adaptar com segurança.",
    how3Title: "Evidências e evolução",
    how3Desc: "Relatórios mensais para acompanhar avanços e lacunas.",
    calloutTitle: "Quer ajudar a melhorar o MVP?",
    calloutDesc: "Teu feedback vai direto pro ajuste de proposta, copy e roadmap.",
    calloutCta: "Abrir formulário",

    // Benefits
    benefitsTitle: "Benefícios",
    benefitsLead:
      "Resultado esperado: prática contínua, menor retrabalho e maior segurança pedagógica.",
    ben1Title: "Para docentes",
    ben1Desc: "Roteiros aplicáveis, menos improviso, mais confiança.",
    ben2Title: "Para gestão",
    ben2Desc: "Evidências e indicadores para acompanhar implementação real.",
    ben3Title: "Para estudantes",
    ben3Desc: "Currículo mais representativo e conectado ao território.",

    // FAQ
    faqTitle: "Perguntas frequentes",
    faq1Q: "Isso substitui formação da rede?",
    faq1A:
      "Não. Complementa com prática aplicável e acompanhamento contínuo, com foco em sala de aula e evidências.",
    faq2Q: "Funciona para escolas pequenas?",
    faq2A:
      "Sim. O MVP é pensado para ser modular: dá pra começar pequeno e expandir conforme adesão.",
    faq3Q: "O que vocês precisam agora?",
    faq3A:
      "Feedback sobre clareza do problema, atratividade da solução e o que falta para virar “eu compraria”.",

    // Contact
    contactTitle: "Contato",
    contactLead:
      "Quer conversar, pilotar ou apoiar? Deixa teu contato e retorna a gente.",
    contactCardTitle: "Fale com a equipe",
    contactCardDesc:
      "(MVP) Coloque teu e-mail/WhatsApp no formulário de feedback ou manda mensagem para:",
    contactNote: "Troca esses contatos pelos teus reais quando for publicar.",
    contactCtaTitle: "Preferes ir direto ao ponto?",
    contactCtaDesc: "Responde o formulário e escreve o que tu acha que está fraco.",

    // Feedback
    feedbackTitle: "Formulário de feedback (Santander Xplorer)",
    feedbackLead:
      "Preenche o Google Forms abaixo. Se não carregar, usa o botão para abrir em nova aba.",
    openForm: "Abrir formulário em nova aba",
    privacyNote:
      "Observação: o formulário é do Google; os dados seguem as políticas do Google Forms.",

    // Footer
    footerDesc:
      "Site institucional (MVP) para validação.",
  },

  en: {
    brandTag: "Institutional site • MVP",
    themeToggle: "Theme",
    navCta: "Give feedback",
    menuAbout: "About",
    menuSolution: "Solution",
    menuHow: "How it works",
    menuBenefits: "Benefits",
    menuFaq: "FAQ",
    menuContact: "Contact",

    badge: "Ethnic-Racial Education year-round • Law 10.639/03",
    heroTitle2:
      "A platform to turn Law 10.639/03 implementation into a real teaching routine.",
    heroSubtitle2:
      "Practical micro-trainings, a ready/adaptable teaching kit, and an evidence dashboard for schools and networks.",
    primaryCta2: "Explore the solution",
    secondaryCta2: "Talk to the team",

    trust1Title: "Practice-first",
    trust1Desc: "less loose theory",
    trust2Title: "Follow-up",
    trust2Desc: "monthly evidence",
    trust3Title: "Territory",
    trust3Desc: "community connection",

    cardTitle2: "We’re validating the MVP",
    cardLead2:
      "Santander Xplorer peers: we need your critical feedback to sharpen the product.",
    cardItem1: "Is the problem clear and real?",
    cardItem2: "Does the solution feel doable day-to-day?",
    cardItem3: "What would make you recommend or pay for it?",
    cardCta: "Answer the form",
    cardNote: "Takes 2–4 minutes. No pain, I swear.",

    aboutTitle: "About Horizonte Afro",
    aboutLead:
      "Ethnic-racial education can’t be an event — it must become routine. Horizonte Afro supports teachers and managers with practical training, actionable materials, and follow-up.",
    missionTitle: "Mission",
    missionDesc:
      "Help schools and networks implement Law 10.639/03 continuously, safely, and measurably.",
    visionTitle: "Vision",
    visionDesc:
      "Living curricula connected to territory, sustained by consistent pedagogical practice.",

    solutionTitle: "What we offer",
    solutionLead2:
      "A set of modules designed for everyday school life — from teachers to leadership.",
    offer1Title: "Micro-trainings",
    offer1Desc: "Short, objective sessions directly applicable in class.",
    offer2Title: "Teaching kit",
    offer2Desc: "Sequences, activities, and checklists you can adapt.",
    offer3Title: "Territory-based curation",
    offer3Desc: "Content connected to communities and local reality.",
    offer4Title: "Evidence dashboard",
    offer4Desc:
      "Monthly follow-up: tracks, certificates, portfolios, and reports by school/network.",

    howTitle: "How it works",
    how1Title: "Diagnosis",
    how1Desc: "We understand context and goals of the school/network.",
    how2Title: "Tracks and implementation",
    how2Desc: "Micro-trainings + kit to apply and adapt with confidence.",
    how3Title: "Evidence and iteration",
    how3Desc: "Monthly reports to track progress and gaps.",
    calloutTitle: "Want to help improve the MVP?",
    calloutDesc: "Your feedback goes straight into copy, proposal, and roadmap.",
    calloutCta: "Open the form",

    benefitsTitle: "Benefits",
    benefitsLead:
      "Expected outcome: continuous practice, less rework, and greater pedagogical confidence.",
    ben1Title: "For teachers",
    ben1Desc: "Actionable scripts, less improvisation, more confidence.",
    ben2Title: "For management",
    ben2Desc: "Evidence and indicators to track real implementation.",
    ben3Title: "For students",
    ben3Desc: "More representative curriculum connected to territory.",

    faqTitle: "Frequently asked questions",
    faq1Q: "Does this replace district training?",
    faq1A:
      "No. It complements with actionable practice and continuous follow-up, focused on classroom reality and evidence.",
    faq2Q: "Does it work for small schools?",
    faq2A:
      "Yes. The MVP is modular: you can start small and expand as adoption grows.",
    faq3Q: "What do you need right now?",
    faq3A:
      "Feedback on problem clarity, solution attractiveness, and what’s missing for a “I would buy it”.",

    contactTitle: "Contact",
    contactLead:
      "Want to talk, pilot, or support? Leave your contact and we’ll get back to you.",
    contactCardTitle: "Talk to the team",
    contactCardDesc:
      "(MVP) Put your email/WhatsApp in the feedback form or message us at:",
    contactNote: "Replace these contacts with real ones when publishing.",
    contactCtaTitle: "Prefer the direct route?",
    contactCtaDesc: "Answer the form and tell us what feels weak.",

    feedbackTitle: "Feedback form (Santander Xplorer)",
    feedbackLead:
      "Fill the Google Form below. If it doesn’t load, use the button to open in a new tab.",
    openForm: "Open form in a new tab",
    privacyNote:
      "Note: this is a Google Form; data follows Google Forms policies.",

    footerDesc:
      "Institutional site (MVP) for validation with Santander Xplorer peers.",
  },

  fr: {
    brandTag: "Site institutionnel • MVP",
    themeToggle: "Thème",
    navCta: "Donner un avis",
    menuAbout: "À propos",
    menuSolution: "Solution",
    menuHow: "Fonctionnement",
    menuBenefits: "Bénéfices",
    menuFaq: "FAQ",
    menuContact: "Contact",

    badge: "Éducation ethno-raciale toute l’année • Loi 10.639/03",
    heroTitle2:
      "Une plateforme pour faire de l’application de la loi 10.639/03 une routine pédagogique.",
    heroSubtitle2:
      "Micro-formations pratiques, kit pédagogique prêt/adaptable et tableau de preuves pour écoles et réseaux.",
    primaryCta2: "Découvrir la solution",
    secondaryCta2: "Parler à l’équipe",

    trust1Title: "Pratique d’abord",
    trust1Desc: "moins de théorie flottante",
    trust2Title: "Suivi",
    trust2Desc: "preuves mensuelles",
    trust3Title: "Territoire",
    trust3Desc: "lien avec les communautés",

    cardTitle2: "Nous validons le MVP",
    cardLead2:
      "Pairs Santander Xplorer : on a besoin de ton regard critique pour affiner le produit.",
    cardItem1: "Le problème est clair et réel ?",
    cardItem2: "La solution semble applicable au quotidien ?",
    cardItem3: "Qu’est-ce qui te ferait recommander ou payer ?",
    cardCta: "Répondre au formulaire",
    cardNote: "2–4 minutes. Promis, sans douleur.",

    aboutTitle: "À propos de Horizonte Afro",
    aboutLead:
      "L’éducation ethno-raciale ne peut pas être un événement : elle doit devenir une routine. Horizonte Afro soutient enseignant·e·s et directions avec formation pratique, ressources actionnables et suivi.",
    missionTitle: "Mission",
    missionDesc:
      "Aider écoles et réseaux à mettre en œuvre la loi 10.639/03 de manière continue, sûre et mesurable.",
    visionTitle: "Vision",
    visionDesc:
      "Des curricula vivants, liés au territoire, portés par des pratiques pédagogiques cohérentes.",

    solutionTitle: "Ce que nous proposons",
    solutionLead2:
      "Un ensemble de modules pensés pour le quotidien scolaire — des enseignants à la direction.",
    offer1Title: "Micro-formations",
    offer1Desc: "Courtes, claires et directement applicables en classe.",
    offer2Title: "Kit pédagogique",
    offer2Desc: "Séquences, activités et checklists adaptables.",
    offer3Title: "Curation territoriale",
    offer3Desc: "Contenus reliés aux communautés et au contexte local.",
    offer4Title: "Tableau de preuves",
    offer4Desc:
      "Suivi mensuel : parcours, certificats, portfolios et rapports par école/réseau.",

    howTitle: "Comment ça marche",
    how1Title: "Diagnostic",
    how1Desc: "On comprend le contexte et les objectifs de l’école/réseau.",
    how2Title: "Parcours et mise en œuvre",
    how2Desc: "Micro-formations + kit pour appliquer et adapter en confiance.",
    how3Title: "Preuves et itération",
    how3Desc: "Rapports mensuels pour suivre progrès et lacunes.",
    calloutTitle: "Tu veux aider à améliorer le MVP ?",
    calloutDesc: "Ton retour alimente directement la proposition, le texte et la roadmap.",
    calloutCta: "Ouvrir le formulaire",

    benefitsTitle: "Bénéfices",
    benefitsLead:
      "Résultat attendu : pratique continue, moins de retours en arrière et plus de confiance pédagogique.",
    ben1Title: "Pour les enseignant·e·s",
    ben1Desc: "Scripts actionnables, moins d’impro, plus de confiance.",
    ben2Title: "Pour la direction",
    ben2Desc: "Preuves et indicateurs pour suivre l’implémentation réelle.",
    ben3Title: "Pour les élèves",
    ben3Desc: "Curriculum plus représentatif et connecté au territoire.",

    faqTitle: "Questions fréquentes",
    faq1Q: "Est-ce que ça remplace la formation du réseau ?",
    faq1A:
      "Non. Ça complète avec de la pratique actionnable et un suivi continu, axés sur la classe et les preuves.",
    faq2Q: "Ça marche pour les petites écoles ?",
    faq2A:
      "Oui. Le MVP est modulaire : on peut commencer petit et étendre ensuite.",
    faq3Q: "De quoi avez-vous besoin maintenant ?",
    faq3A:
      "Un retour sur la clarté du problème, l’attrait de la solution et ce qui manque pour un “j’achèterais”.",

    contactTitle: "Contact",
    contactLead:
      "Envie d’échanger, de piloter ou de soutenir ? Laisse ton contact et on revient vers toi.",
    contactCardTitle: "Parler à l’équipe",
    contactCardDesc:
      "(MVP) Mets ton email/WhatsApp dans le formulaire ou contacte-nous ici :",
    contactNote: "Remplace ces contacts par les vrais au moment de publier.",
    contactCtaTitle: "Tu préfères aller droit au but ?",
    contactCtaDesc: "Réponds au formulaire et dis ce qui te semble faible.",

    feedbackTitle: "Formulaire de feedback (Santander Xplorer)",
    feedbackLead:
      "Remplis le Google Form ci-dessous. Si ça ne charge pas, ouvre-le dans un nouvel onglet.",
    openForm: "Ouvrir dans un nouvel onglet",
    privacyNote:
      "Note : formulaire Google ; les données suivent les politiques Google Forms.",

    footerDesc:
      "Site institutionnel (MVP) pour validation avec les pairs Santander Xplorer.",
  },

  es: {
    brandTag: "Sitio institucional • MVP",
    themeToggle: "Tema",
    navCta: "Dar feedback",
    menuAbout: "Sobre",
    menuSolution: "Solución",
    menuHow: "Cómo funciona",
    menuBenefits: "Beneficios",
    menuFaq: "FAQ",
    menuContact: "Contacto",

    badge: "Educación Étnico-Racial todo el año • Ley 10.639/03",
    heroTitle2:
      "Una plataforma para convertir la implementación de la Ley 10.639/03 en rutina pedagógica.",
    heroSubtitle2:
      "Microformaciones prácticas, kit de aula listo/adaptable y panel de evidencias para escuelas y redes.",
    primaryCta2: "Conocer la solución",
    secondaryCta2: "Hablar con el equipo",

    trust1Title: "Práctica primero",
    trust1Desc: "menos teoría suelta",
    trust2Title: "Seguimiento",
    trust2Desc: "evidencias mensuales",
    trust3Title: "Territorio",
    trust3Desc: "conexión con comunidades",

    cardTitle2: "Estamos validando el MVP",
    cardLead2:
      "Colegas de Santander Xplorer: necesitamos tu mirada crítica para ajustar el producto.",
    cardItem1: "¿El problema está claro y es real?",
    cardItem2: "¿La solución parece aplicable en el día a día?",
    cardItem3: "¿Qué te haría recomendarlo o pagarlo?",
    cardCta: "Responder el formulario",
    cardNote: "Toma 2–4 minutos. Prometo que no duele.",

    aboutTitle: "Sobre Horizonte Afro",
    aboutLead:
      "La educación étnico-racial no puede ser un evento: debe volverse rutina. Horizonte Afro apoya a docentes y gestión con formación práctica, materiales aplicables y seguimiento.",
    missionTitle: "Misión",
    missionDesc:
      "Ayudar a escuelas y redes a implementar la Ley 10.639/03 de forma continua, segura y medible.",
    visionTitle: "Visión",
    visionDesc:
      "Currículos vivos, conectados al territorio y sostenidos por prácticas pedagógicas consistentes.",

    solutionTitle: "Qué ofrecemos",
    solutionLead2:
      "Un conjunto de módulos pensados para la vida escolar diaria — del docente a la gestión.",
    offer1Title: "Microformaciones",
    offer1Desc: "Clases cortas, objetivas y aplicables en el aula.",
    offer2Title: "Kit pedagógico",
    offer2Desc: "Secuencias, actividades y checklists para adaptar.",
    offer3Title: "Curaduría del territorio",
    offer3Desc: "Contenidos conectados con comunidades y realidad local.",
    offer4Title: "Panel de evidencias",
    offer4Desc:
      "Seguimiento mensual: rutas, certificados, portafolios e informes por escuela/red.",

    howTitle: "Cómo funciona",
    how1Title: "Diagnóstico",
    how1Desc: "Entendemos el contexto y los objetivos de la escuela/red.",
    how2Title: "Rutas y aplicación",
    how2Desc: "Microformaciones + kit para aplicar y adaptar con seguridad.",
    how3Title: "Evidencias y mejora",
    how3Desc: "Informes mensuales para seguir avances y brechas.",
    calloutTitle: "¿Quieres ayudar a mejorar el MVP?",
    calloutDesc: "Tu feedback va directo a propuesta, copy y roadmap.",
    calloutCta: "Abrir formulario",

    benefitsTitle: "Beneficios",
    benefitsLead:
      "Resultado esperado: práctica continua, menos retrabajo y mayor seguridad pedagógica.",
    ben1Title: "Para docentes",
    ben1Desc: "Guías aplicables, menos improvisación, más confianza.",
    ben2Title: "Para gestión",
    ben2Desc: "Evidencias e indicadores para seguir implementación real.",
    ben3Title: "Para estudiantes",
    ben3Desc: "Currículo más representativo y conectado al territorio.",

    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Esto reemplaza la formación de la red?",
    faq1A:
      "No. Complementa con práctica aplicable y seguimiento continuo, con foco en aula y evidencias.",
    faq2Q: "¿Funciona para escuelas pequeñas?",
    faq2A:
      "Sí. El MVP es modular: puedes empezar pequeño y expandir según adopción.",
    faq3Q: "¿Qué necesitan ahora?",
    faq3A:
      "Feedback sobre claridad del problema, atractivo de la solución y qué falta para un “yo lo compraría”.",

    contactTitle: "Contacto",
    contactLead:
      "¿Quieres conversar, pilotar o apoyar? Deja tu contacto y te respondemos.",
    contactCardTitle: "Habla con el equipo",
    contactCardDesc:
      "(MVP) Pon tu email/WhatsApp en el formulario o envíanos mensaje aquí:",
    contactNote: "Cambia estos contactos por los reales al publicar.",
    contactCtaTitle: "¿Prefieres ir directo al grano?",
    contactCtaDesc: "Responde el formulario y di qué te parece débil.",

    feedbackTitle: "Formulario de feedback (Santander Xplorer)",
    feedbackLead:
      "Completa el Google Form abajo. Si no carga, usa el botón para abrir en una pestaña nueva.",
    openForm: "Abrir formulario en una pestaña nueva",
    privacyNote:
      "Nota: es un formulario de Google; los datos siguen las políticas de Google Forms.",

    footerDesc:
      "Sitio institucional (MVP) para validación con colegas de Santander Xplorer.",
  },
};

function applyTranslations(lang) {
  const dict = i18n[lang] || i18n.pt;

  // lang attribute
  const langMap = { pt: "pt-BR", en: "en", fr: "fr", es: "es" };
  document.documentElement.lang = langMap[lang] || "pt-BR";

  // translate nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Title (simple + consistent)
  const titles = {
    pt: "Horizonte Afro — Institucional",
    en: "Horizonte Afro — Institutional",
    fr: "Horizonte Afro — Institutionnel",
    es: "Horizonte Afro — Institucional",
  };
  document.title = titles[lang] || titles.pt;
}

function setTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }

  // Prefer OS
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(prefersDark ? "dark" : "light");
}

function initLanguage() {
  const langSelect = $("#langSelect");
  const savedLang = localStorage.getItem("lang") || "pt";

  if (langSelect) {
    langSelect.value = savedLang;

    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("lang", lang);
      applyTranslations(lang);
    });
  }

  applyTranslations(savedLang);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    });
  });
}

function initMobileMenu() {
  const btn = $("#hamburger");
  const menu = $("#mobileMenu");
  if (!btn || !menu) return;

  function closeMenu() {
    menu.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    menu.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  });

  // Close after clicking a link
  menu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeMenu();
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Close when resizing to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

function init() {
  initTheme();

  $("#themeToggle")?.addEventListener("click", toggleTheme);

  initLanguage();
  initSmoothScroll();
  initMobileMenu();
}

document.addEventListener("DOMContentLoaded", init);
