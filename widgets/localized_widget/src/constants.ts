import type { Translations, Locale } from "./types";

export const SUPPORTED_LOCALES: Locale[] = ["en", "es", "fr", "de", "pt"];

export const TRANSLATIONS: Translations = {
  en: {
    title: "Welcome to Our Community",
    body: "We\u2019re glad you\u2019re here! This community is your space to ask questions, share ideas, and connect with other members. Here\u2019s how to get started:",
    step1: "Complete your profile so others can get to know you.",
    step2: "Browse popular topics and join the conversations that interest you.",
    step3: "Post your first question or share an idea \u2014 the community is here to help.",
    cta: "Explore Topics \u2192",
    footer: "Content displayed in your detected language.",
  },
  es: {
    title: "Bienvenido a Nuestra Comunidad",
    body: "\u00a1Nos alegra que est\u00e9s aqu\u00ed! Esta comunidad es tu espacio para hacer preguntas, compartir ideas y conectar con otros miembros. As\u00ed es como puedes empezar:",
    step1: "Completa tu perfil para que otros te conozcan.",
    step2: "Explora los temas populares y \u00fanete a las conversaciones que te interesen.",
    step3: "Publica tu primera pregunta o comparte una idea \u2014 la comunidad est\u00e1 aqu\u00ed para ayudarte.",
    cta: "Explorar Temas \u2192",
    footer: "Contenido mostrado en tu idioma detectado.",
  },
  fr: {
    title: "Bienvenue dans Notre Communaut\u00e9",
    body: "Nous sommes ravis de vous accueillir ! Cette communaut\u00e9 est votre espace pour poser des questions, partager des id\u00e9es et \u00e9changer avec d\u2019autres membres. Voici comment commencer :",
    step1: "Compl\u00e9tez votre profil pour que les autres puissent faire votre connaissance.",
    step2: "Parcourez les sujets populaires et rejoignez les conversations qui vous int\u00e9ressent.",
    step3: "Publiez votre premi\u00e8re question ou partagez une id\u00e9e \u2014 la communaut\u00e9 est l\u00e0 pour vous aider.",
    cta: "Explorer les Sujets \u2192",
    footer: "Contenu affich\u00e9 dans votre langue d\u00e9tect\u00e9e.",
  },
  de: {
    title: "Willkommen in Unserer Community",
    body: "Sch\u00f6n, dass Sie hier sind! Diese Community ist Ihr Raum, um Fragen zu stellen, Ideen zu teilen und sich mit anderen Mitgliedern zu vernetzen. So starten Sie:",
    step1: "Vervollst\u00e4ndigen Sie Ihr Profil, damit andere Sie kennenlernen k\u00f6nnen.",
    step2: "Entdecken Sie beliebte Themen und beteiligen Sie sich an Gespr\u00e4chen, die Sie interessieren.",
    step3: "Stellen Sie Ihre erste Frage oder teilen Sie eine Idee \u2014 die Community ist da, um zu helfen.",
    cta: "Themen Entdecken \u2192",
    footer: "Inhalt wird in Ihrer erkannten Sprache angezeigt.",
  },
  pt: {
    title: "Bem-vindo \u00e0 Nossa Comunidade",
    body: "Estamos felizes por voc\u00ea estar aqui! Esta comunidade \u00e9 o seu espa\u00e7o para fazer perguntas, compartilhar ideias e se conectar com outros membros. Veja como come\u00e7ar:",
    step1: "Complete seu perfil para que outros possam conhec\u00ea-lo.",
    step2: "Explore os t\u00f3picos populares e participe das conversas que te interessam.",
    step3: "Publique sua primeira pergunta ou compartilhe uma ideia \u2014 a comunidade est\u00e1 aqui para ajudar.",
    cta: "Explorar T\u00f3picos \u2192",
    footer: "Conte\u00fado exibido no seu idioma detectado.",
  },
};
