/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ── FONT FAMILIES ── */
      fontFamily: {
        sans: ["Jost", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },

      /* ── COLORI ── */
      colors: {
        cream: "#f5f0e8",   // sfondi sezioni alternate
        "warm-white": "#faf8f4", // sfondo base
        sage: "#8a9e8a",   // bordi chip credenziali
        "deep-sage": "#4a6048",  // colore primario (nav logo, CTA, titoli em)
        stone: "#c8b89a",   // bordi, accenti caldi, blocco visivo about
        dark: "#1e1e1a",   // testi scuri, footer, pulsante submit
        text: "#3a3630",   // testo corpo principale
        muted: "#7a7068",   // testo secondario / placeholder
        gold: "#b8966a",   // label sezione (eyebrow), subtitle servizi
      },

      /* ── ANIMAZIONI ── */
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          from: { transform: "translate(-50%, -50%) rotate(0deg)" },
          to: { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease both",
        "spin-slow": "spin-slow 25s linear infinite",
        "spin-slow-reverse": "spin-slow 18s linear infinite reverse",
      },
    },
  },
  plugins: [],
}

