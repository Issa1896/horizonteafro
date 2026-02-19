const $ = (sel) => document.querySelector(sel);

const i18n = {
  pt: {
    brandTag: "MVP • Feedback Santander Xplorer",
    themeToggle: "Tema",
    navCta: "Dar feedback",
    badge: "Educação Étnico-Racial o ano todo • Lei 10.639/03",
    heroTitle: "Implementação contínua da Lei 10.639/03 com microformações, kit pedagógico e evidências.",
    heroSubtitle: "Menos insegurança docente, menos “ação só em novembro”, mais rotina curricular com apoio e prestação de contas.",
    primaryCta: "Quero dar feedback",
    secondaryCta: "Ver como funciona",
    stat1Title: "Microformações",
    stat1Desc: "curtas e aplicáveis",
    stat2Title: "Kit pedagógico",
    stat2Desc: "aulas prontas/adaptáveis",
    stat3Title: "Painel de evidências",
    stat3Desc: "relatórios mensais por escola/rede",
    cardTitle: "O que estamos validando agora",
    cardItem1: "Se a proposta reduz insegurança e falta de tempo do(a) docente.",
    cardItem2: "Se o kit facilita aplicação prática em sala, sem “genérico”.",
    cardItem3: "Se as evidências ajudam a gestão (escola/rede) a acompanhar.",
    cardCta: "Responder o formulário",
    cardNote: "Leva 2–4 minutos. Vale ouro.",
    problemTitle: "O problema (sem romantizar)",
    problemLead: "Muitas escolas querem cumprir a Lei 10.639/03, mas falta rotina, material aplicável e acompanhamento real.",
    pain1Title: "Insegurança docente",
    pain1Desc: "Formação pouco prática → medo de errar → não vira prática contínua.",
    pain2Title: "“Só em novembro”",
    pain2Desc: "Ações pontuais sem sequência, sem avaliação, sem continuidade.",
    pain3Title: "Sem evidências",
    pain3Desc: "Gestão não consegue acompanhar execução, lacunas e próximos passos.",
    solutionTitle: "A solução (MVP)",
    solutionLead: "Uma plataforma que combina microformações + kit pedagógico + painel de evidências.",
    sol1Title: "Microformações curtas",
    sol1Desc: "Conteúdos rápidos e aplicáveis, pensados pra realidade de sala de aula.",
    sol2Title: "Kit de aulas prontas/adaptáveis",
    sol2Desc: "Planejamentos, atividades e checklists de aplicação (pra sair do “teórico bonito”).",
    sol3Title: "Curadoria do território",
    sol3Desc: "Conteúdos e referências conectadas às comunidades e à realidade local.",
    sol4Title: "Evidências mensais",
    sol4Desc: "Trilhas concluídas, certificados, portfólio e relatórios por escola/rede (execução + lacunas).",
    howTitle: "Como funciona",
    how1Title: "Diagnóstico rápido",
    how1Desc: "Entender o contexto da escola/rede e o ponto de partida.",
    how2Title: "Trilhas curtas + kit",
    how2Desc: "Formação prática e material pronto para aplicar e adaptar.",
    how3Title: "Aplicação e evidências",
    how3Desc: "Checklist + portfólio + relatório mensal para gestão e prestação de contas.",
    calloutTitle: "Agora a parte mais importante: teu feedback.",
    calloutDesc: "O MVP fica bom quando a realidade bate nele. Responde aí e sem dó.",
    calloutCta: "Abrir formulário",
    feedbackTitle: "Formulário de feedback (Santander Xplorer)",
    feedbackLead: "Preenche o Google Forms abaixo. Se não carregar no teu navegador, usa o botão para abrir em nova aba.",
    openForm: "Abrir formulário em nova aba",
    privacyNote: "Observação: o formulário é do Google; os dados seguem as políticas do Google Forms.",
    footerDesc: "MVP para validação com colegas do Santander Xplorer.",
    footerLink1: "Problema",
    footerLink2: "Solução",
    footerLink3: "Como funciona",
    footerLink4: "Feedback",
  },

  en: {
    brandTag: "MVP • Santander Xplorer Feedback",
    themeToggle: "Theme",
    navCta: "Give feedback",
    badge: "Ethnic-Racial Education year-round • Law 10.639/03",
    heroTitle: "Continuous implementation of Law 10.639/03 with micro-trainings, a teaching kit, and evidence.",
    heroSubtitle: "Less teacher insecurity, less “only in November”, more curriculum routine with support and accountability.",
    primaryCta: "I want to give feedback",
    secondaryCta: "See how it works",
    stat1Title: "Micro-trainings",
    stat1Desc: "short and practical",
    stat2Title: "Teaching kit",
    stat2Desc: "ready/adaptable lessons",
    stat3Title: "Evidence dashboard",
    stat3Desc: "monthly reports by school/network",
    cardTitle: "What we’re validating now",
    cardItem1: "Whether it reduces teacher insecurity and lack of time.",
    cardItem2: "Whether the kit supports real classroom application (not generic).",
    cardItem3: "Whether evidence helps school/network management track progress.",
    cardCta: "Answer the form",
    cardNote: "Takes 2–4 minutes. Super valuable.",
    problemTitle: "The problem (no sugarcoating)",
    problemLead: "Many schools want to comply with Law 10.639/03, but lack routine, actionable materials, and real follow-up.",
    pain1Title: "Teacher insecurity",
    pain1Desc: "Low-practice training → fear of mistakes → no continuous practice.",
    pain2Title: "“Only in November”",
    pain2Desc: "One-off actions without sequence, assessment, or continuity.",
    pain3Title: "No evidence",
    pain3Desc: "Management can’t track execution, gaps, and next steps.",
    solutionTitle: "The solution (MVP)",
    solutionLead: "A platform that combines micro-trainings + teaching kit + evidence dashboard.",
    sol1Title: "Short micro-trainings",
    sol1Desc: "Fast, actionable content designed for classroom reality.",
    sol2Title: "Ready/adaptable lesson kit",
    sol2Desc: "Plans, activities, and checklists to move from theory to practice.",
    sol3Title: "Territory-based curation",
    sol3Desc: "Content and references connected to communities and local reality.",
    sol4Title: "Monthly evidence",
    sol4Desc: "Completed tracks, certificates, portfolio, and monthly reports by school/network.",
    howTitle: "How it works",
    how1Title: "Quick diagnosis",
    how1Desc: "Understand the school/network context and starting point.",
    how2Title: "Short tracks + kit",
    how2Desc: "Practical training with ready material to apply and adapt.",
    how3Title: "Application and evidence",
    how3Desc: "Checklist + portfolio + monthly report for management and accountability.",
    calloutTitle: "Now the most important part: your feedback.",
    calloutDesc: "MVPs improve when reality hits them. Be honest.",
    calloutCta: "Open form",
    feedbackTitle: "Feedback form (Santander Xplorer)",
    feedbackLead: "Fill in the Google Form below. If it doesn’t load, use the button to open in a new tab.",
    openForm: "Open form in a new tab",
    privacyNote: "Note: this is a Google Form; data follows Google Forms policies.",
    footerDesc: "MVP validation with Santander Xplorer peers.",
    footerLink1: "Problem",
    footerLink2: "Solution",
    footerLink3: "How it works",
    footerLink4: "Feedback",
  },

  fr: {
    brandTag: "MVP • Feedback Santander Xplorer",
    themeToggle: "Thème",
    navCta: "Donner un avis",
    badge: "Éducation ethno-raciale toute l’année • Loi 10.639/03",
    heroTitle: "Mise en œuvre continue de la loi 10.639/03 avec micro-formations, kit pédagogique et preuves.",
    heroSubtitle: "Moins d’insécurité enseignante, moins de “seulement en novembre”, plus de routine curriculaire avec soutien et redevabilité.",
    primaryCta: "Je veux donner un avis",
    secondaryCta: "Voir comment ça marche",
    stat1Title: "Micro-formations",
    stat1Desc: "courtes et pratiques",
    stat2Title: "Kit pédagogique",
    stat2Desc: "cours prêts/adaptables",
    stat3Title: "Tableau de preuves",
    stat3Desc: "rapports mensuels par école/réseau",
    cardTitle: "Ce que nous validons maintenant",
    cardItem1: "Si cela réduit l’insécurité et le manque de temps des enseignant·e·s.",
    cardItem2: "Si le kit facilite une application réelle en classe (pas générique).",
    cardItem3: "Si les preuves aident la gestion à suivre l’exécution.",
    cardCta: "Répondre au formulaire",
    cardNote: "2–4 minutes. Très précieux.",
    problemTitle: "Le problème (sans filtre)",
    problemLead: "Beaucoup d’écoles veulent appliquer la loi 10.639/03, mais manquent de routine, de matériel actionnable et de suivi.",
    pain1Title: "Insécurité enseignante",
    pain1Desc: "Formation peu pratique → peur de se tromper → pas de continuité.",
    pain2Title: "“Seulement en novembre”",
    pain2Desc: "Actions ponctuelles sans séquence, ni évaluation, ni continuité.",
    pain3Title: "Manque de preuves",
    pain3Desc: "La gestion ne suit pas l’exécution, les lacunes et les prochaines étapes.",
    solutionTitle: "La solution (MVP)",
    solutionLead: "Une plateforme combinant micro-formations + kit + tableau de preuves.",
    sol1Title: "Micro-formations courtes",
    sol1Desc: "Contenus rapides et applicables, pensés pour la réalité de la classe.",
    sol2Title: "Kit de cours prêts/adaptables",
    sol2Desc: "Plans, activités et checklists pour passer à l’action.",
    sol3Title: "Curation territoriale",
    sol3Desc: "Contenus reliés aux communautés et au contexte local.",
    sol4Title: "Preuves mensuelles",
    sol4Desc: "Parcours terminés, certificats, portfolio et rapports mensuels.",
    howTitle: "Comment ça marche",
    how1Title: "Diagnostic rapide",
    how1Desc: "Comprendre le contexte et le point de départ.",
    how2Title: "Parcours + kit",
    how2Desc: "Formation pratique + matériel prêt à appliquer/adapter.",
    how3Title: "Application et preuves",
    how3Desc: "Checklist + portfolio + rapport mensuel.",
    calloutTitle: "Maintenant, le plus important : votre avis.",
    calloutDesc: "Un MVP progresse quand la réalité le teste. Soyez franc.",
    calloutCta: "Ouvrir le formulaire",
    feedbackTitle: "Formulaire de feedback (Santander Xplorer)",
    feedbackLead: "Remplissez le Google Form ci-dessous. Si ça ne charge pas, ouvrez-le dans un nouvel onglet.",
    openForm: "Ouvrir dans un nouvel onglet",
    privacyNote: "Note : formulaire Google ; les données suivent les politiques Google Forms.",
    footerDesc: "Validation MVP avec les pairs Santander Xplorer.",
    footerLink1: "Problème",
    footerLink2: "Solution",
    footerLink3: "Fonctionnement",
    footerLink4: "Feedback",
  },

  es: {
    brandTag: "MVP • Feedback Santander Xplorer",
    themeToggle: "Tema",
    navCta: "Dar feedback",
    badge: "Educación Étnico-Racial todo el año • Ley 10.639/03",
    heroTitle: "Implementación continua de la Ley 10.639/03 con microformaciones, kit pedagógico y evidencias.",
    heroSubtitle: "Menos inseguridad docente, menos “solo en noviembre”, más rutina curricular con apoyo y rendición de cuentas.",
    primaryCta: "Quiero dar feedback",
    secondaryCta: "Ver cómo funciona",
    stat1Title: "Microformaciones",
    stat1Desc: "cortas y aplicables",
    stat2Title: "Kit pedagógico",
    stat2Desc: "clases listas/adaptables",
    stat3Title: "Panel de evidencias",
    stat3Desc: "informes mensuales por escuela/red",
    cardTitle: "Lo que estamos validando ahora",
    cardItem1: "Si reduce la inseguridad docente y la falta de tiempo.",
    cardItem2: "Si el kit facilita la aplicación real en el aula (no genérico).",
    cardItem3: "Si las evidencias ayudan a la gestión a hacer seguimiento.",
    cardCta: "Responder el formulario",
    cardNote: "2–4 minutos. Vale muchísimo.",
    problemTitle: "El problema (sin adornos)",
    problemLead: "Muchas escuelas quieren cumplir la Ley 10.639/03, pero falta rutina, material aplicable y seguimiento real.",
    pain1Title: "Inseguridad docente",
    pain1Desc: "Formación poco práctica → miedo a equivocarse → no hay continuidad.",
    pain2Title: "“Solo en noviembre”",
    pain2Desc: "Acciones puntuales sin secuencia, evaluación ni continuidad.",
    pain3Title: "Sin evidencias",
    pain3Desc: "La gestión no logra seguir ejecución, brechas y próximos pasos.",
    solutionTitle: "La solución (MVP)",
    solutionLead: "Una plataforma que combina microformaciones + kit pedagógico + panel de evidencias.",
    sol1Title: "Microformaciones cortas",
    sol1Desc: "Contenido rápido y aplicable, pensado para el aula.",
    sol2Title: "Kit de clases listas/adaptables",
    sol2Desc: "Planificaciones, actividades y checklists para pasar a la práctica.",
    sol3Title: "Curaduría del territorio",
    sol3Desc: "Contenido conectado con comunidades y realidad local.",
    sol4Title: "Evidencias mensuales",
    sol4Desc: "Trilhas, certificados, portafolio e informes mensuales por escuela/red.",
    howTitle: "Cómo funciona",
    how1Title: "Diagnóstico rápido",
    how1Desc: "Entender el contexto y el punto de partida.",
    how2Title: "Trilhas + kit",
    how2Desc: "Formación práctica + material listo para aplicar y adaptar.",
    how3Title: "Aplicación y evidencias",
    how3Desc: "Checklist + portafolio + informe mensual.",
    calloutTitle: "Ahora lo más importante: tu feedback.",
    calloutDesc: "El MVP mejora cuando la realidad lo prueba. Sé honesto.",
    calloutCta: "Abrir formulario",
    feedbackTitle: "Formulario de feedback (Santander Xplorer)",
    feedbackLead: "Completa el Google Form abajo. Si no carga, usa el botón para abrir en una pestaña nueva.",
    openForm: "Abrir en una pestaña nueva",
    privacyNote: "Nota: formulario de Google; los datos siguen las políticas de Google Forms.",
    footerDesc: "Validación del MVP con colegas de Santander Xplorer.",
    footerLink1: "Problema",
    footerLink2: "Solución",
    footerLink3: "Cómo funciona",
    footerLink4: "Feedback",
  }
};

function applyTranslations(lang) {
  const dict = i18n[lang] || i18n.pt;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Keep <title> coherent
  const titleMap = {
    pt: "Horizonte Afro — MVP",
    en: "Horizonte Afro — MVP",
    fr: "Horizonte Afro — MVP",
    es: "Horizonte Afro — MVP",
  };
  document.title = titleMap[lang] || titleMap.pt;
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

function init() {
  // Theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) setTheme(savedTheme);
  else {
    // Prefer OS
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }

  $("#themeToggle")?.addEventListener("click", toggleTheme);

  // Language
  const savedLang = localStorage.getItem("lang") || "pt";
  const langSelect = $("#langSelect");
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("lang", lang);
      applyTranslations(lang);
    });
  }
  applyTranslations(savedLang);

  // Smooth scroll (nice-to-have)
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

document.addEventListener("DOMContentLoaded", init);
