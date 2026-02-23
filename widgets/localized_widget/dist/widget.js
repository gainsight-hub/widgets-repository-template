import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { createRoot as i } from "react-dom/client";
const a = {
  en: {
    title: "Welcome to Our Community",
    body: "We’re glad you’re here! This community is your space to ask questions, share ideas, and connect with other members. Here’s how to get started:",
    step1: "Complete your profile so others can get to know you.",
    step2: "Browse popular topics and join the conversations that interest you.",
    step3: "Post your first question or share an idea — the community is here to help.",
    cta: "Explore Topics →",
    footer: "Content displayed in your detected language."
  },
  es: {
    title: "Bienvenido a Nuestra Comunidad",
    body: "¡Nos alegra que estés aquí! Esta comunidad es tu espacio para hacer preguntas, compartir ideas y conectar con otros miembros. Así es como puedes empezar:",
    step1: "Completa tu perfil para que otros te conozcan.",
    step2: "Explora los temas populares y únete a las conversaciones que te interesen.",
    step3: "Publica tu primera pregunta o comparte una idea — la comunidad está aquí para ayudarte.",
    cta: "Explorar Temas →",
    footer: "Contenido mostrado en tu idioma detectado."
  },
  fr: {
    title: "Bienvenue dans Notre Communauté",
    body: "Nous sommes ravis de vous accueillir ! Cette communauté est votre espace pour poser des questions, partager des idées et échanger avec d’autres membres. Voici comment commencer :",
    step1: "Complétez votre profil pour que les autres puissent faire votre connaissance.",
    step2: "Parcourez les sujets populaires et rejoignez les conversations qui vous intéressent.",
    step3: "Publiez votre première question ou partagez une idée — la communauté est là pour vous aider.",
    cta: "Explorer les Sujets →",
    footer: "Contenu affiché dans votre langue détectée."
  },
  de: {
    title: "Willkommen in Unserer Community",
    body: "Schön, dass Sie hier sind! Diese Community ist Ihr Raum, um Fragen zu stellen, Ideen zu teilen und sich mit anderen Mitgliedern zu vernetzen. So starten Sie:",
    step1: "Vervollständigen Sie Ihr Profil, damit andere Sie kennenlernen können.",
    step2: "Entdecken Sie beliebte Themen und beteiligen Sie sich an Gesprächen, die Sie interessieren.",
    step3: "Stellen Sie Ihre erste Frage oder teilen Sie eine Idee — die Community ist da, um zu helfen.",
    cta: "Themen Entdecken →",
    footer: "Inhalt wird in Ihrer erkannten Sprache angezeigt."
  },
  pt: {
    title: "Bem-vindo à Nossa Comunidade",
    body: "Estamos felizes por você estar aqui! Esta comunidade é o seu espaço para fazer perguntas, compartilhar ideias e se conectar com outros membros. Veja como começar:",
    step1: "Complete seu perfil para que outros possam conhecê-lo.",
    step2: "Explore os tópicos populares e participe das conversas que te interessam.",
    step3: "Publique sua primeira pergunta ou compartilhe uma ideia — a comunidade está aqui para ajudar.",
    cta: "Explorar Tópicos →",
    footer: "Conteúdo exibido no seu idioma detectado."
  }
};
function c(t) {
  return a[t] ?? a.en;
}
function l() {
  const t = document.documentElement.lang || new URLSearchParams(window.location.search).get("lang"), e = t == null ? void 0 : t.trim().toLowerCase().split(/[-_]/)[0];
  return e && e in a ? e : "en";
}
function u() {
  const t = l(), e = c(t);
  return /* @__PURE__ */ o("div", { className: "lw-root", children: /* @__PURE__ */ s("div", { className: "lw-card", children: [
    /* @__PURE__ */ s("div", { className: "lw-header", children: [
      /* @__PURE__ */ o("div", { className: "lw-icon", children: "🌐" }),
      /* @__PURE__ */ o("h2", { className: "lw-title", children: e.title }),
      /* @__PURE__ */ o("span", { className: "lw-badge", children: t })
    ] }),
    /* @__PURE__ */ o("p", { className: "lw-body", children: e.body }),
    /* @__PURE__ */ o("ol", { className: "lw-steps", children: [e.step1, e.step2, e.step3].map((r, n) => /* @__PURE__ */ s("li", { className: "lw-step", children: [
      /* @__PURE__ */ o("span", { className: "lw-step-num", children: n + 1 }),
      /* @__PURE__ */ o("span", { className: "lw-step-text", children: r })
    ] }, n)) }),
    /* @__PURE__ */ o("a", { href: "#", className: "lw-cta", children: e.cta }),
    /* @__PURE__ */ o("div", { className: "lw-footer", children: e.footer })
  ] }) });
}
async function p(t) {
  await t.whenReady();
  const e = i(t.shadowRoot);
  e.render(/* @__PURE__ */ o(u, {})), t.on("destroy", () => e.unmount());
}
export {
  p as init
};
