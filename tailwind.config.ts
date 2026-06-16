import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        steel: "#07111d",
        blueprint: "#10233b",
        concrete: "#d2d5d2",
        rebar: "#202a33",
        safety: "#f5b301",
        ember: "#f97316",
        "steel-blue": "#356394",
        graphite: "#101820"
      },
      boxShadow: {
        elevation1: "0 10px 30px rgba(0,0,0,0.22)",
        elevation2: "0 18px 55px rgba(0,0,0,0.3)",
        premium: "0 28px 90px rgba(0,0,0,0.38)"
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "8px",
        xl: "10px"
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(245,179,1,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(245,179,1,0.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
