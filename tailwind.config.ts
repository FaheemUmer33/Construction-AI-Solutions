import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        steel: "#02331e",
        blueprint: "#023e25",
        concrete: "#dff3e9",
        rebar: "#0b4a2f",
        safety: "#dff3e9",
        ember: "#a5c7b7",
        "steel-blue": "#43735c",
        graphite: "#1b4b36",
        cas: {
          forest: "#02331e",
          deep: "#023e25",
          primary: "#215c40",
          secondary: "#0b4a2f",
          card: "#1b4b36",
          muted: "#43735c",
          sage: "#739b87",
          mint: "#a5c7b7",
          light: "#dff3e9",
          white: "#ffffff"
        }
      },
      boxShadow: {
        elevation1: "0 10px 30px rgba(2,51,30,0.24)",
        elevation2: "0 18px 55px rgba(2,51,30,0.34)",
        premium: "0 28px 90px rgba(2,51,30,0.48)"
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "8px",
        xl: "10px"
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(223,243,233,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(223,243,233,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
