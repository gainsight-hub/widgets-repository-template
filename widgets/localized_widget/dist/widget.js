import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { createRoot as c } from "react-dom/client";
const p = ["en", "es", "fr", "de", "pt"], a = {
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
function s(t) {
  if (!t) return null;
  const e = t.trim().toLowerCase().split(/[-_]/)[0];
  return p.includes(e) ? e : null;
}
function u() {
  return s(document.documentElement.lang) ?? s(new URLSearchParams(window.location.search).get("lang")) ?? "en";
}
function m() {
  const t = u(), e = a[t] ?? a.en;
  return { locale: t, strings: e };
}
const n = "#6366f1";
function f() {
  const { locale: t, strings: e } = m(), l = [e.step1, e.step2, e.step3];
  return /* @__PURE__ */ o("div", { style: { fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", padding: 24, color: "#1e293b" }, children: /* @__PURE__ */ i("div", { style: { background: "#fff", borderRadius: 12, boxShadow: "0 1px 3px rgba(0,0,0,.08), 0 4px 14px rgba(0,0,0,.04)", padding: 32, maxWidth: 640 }, children: [
    /* @__PURE__ */ i("div", { style: { display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }, children: [
      /* @__PURE__ */ o("div", { style: { width: 44, height: 44, borderRadius: 10, background: n, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }, children: "🌐" }),
      /* @__PURE__ */ o("h2", { style: { fontSize: 22, fontWeight: 700, margin: 0, lineHeight: 1.3 }, children: e.title }),
      /* @__PURE__ */ o("span", { style: { fontSize: 11, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", background: n, color: "#fff", padding: "3px 8px", borderRadius: 6, marginLeft: "auto", whiteSpace: "nowrap" }, children: t })
    ] }),
    /* @__PURE__ */ o("p", { style: { fontSize: 15, lineHeight: 1.65, marginBottom: 24, opacity: 0.85, marginTop: 0 }, children: e.body }),
    /* @__PURE__ */ o("ol", { style: { listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 12 }, children: l.map((d, r) => /* @__PURE__ */ i("li", { style: { display: "flex", alignItems: "flex-start", gap: 12 }, children: [
      /* @__PURE__ */ o("span", { style: { width: 28, height: 28, borderRadius: "50%", background: n, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 1 }, children: r + 1 }),
      /* @__PURE__ */ o("span", { style: { fontSize: 15, lineHeight: 1.55, paddingTop: 3 }, children: d })
    ] }, r)) }),
    /* @__PURE__ */ o(
      "a",
      {
        href: "#",
        style: { display: "inline-flex", alignItems: "center", gap: 6, background: n, color: "#fff", fontSize: 14, fontWeight: 600, padding: "10px 20px", borderRadius: 8, border: "none", cursor: "pointer", textDecoration: "none" },
        children: e.cta
      }
    ),
    /* @__PURE__ */ o("div", { style: { marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(0,0,0,.06)", fontSize: 12, opacity: 0.5 }, children: e.footer })
  ] }) });
}
async function y(t) {
  await t.whenReady();
  const e = c(t.shadowRoot);
  e.render(/* @__PURE__ */ o(f, {})), t.on("destroy", () => e.unmount());
}
export {
  y as init
};
