import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"]
  },
  js.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module"
      },
      globals: {
        React: "readonly",
        console: "readonly",
        fetch: "readonly",
        Request: "readonly",
        URL: "readonly",
        window: "readonly",
        process: "readonly",
        HTMLButtonElement: "readonly",
        HTMLAnchorElement: "readonly"
      }
    },
    plugins: {
      "@next/next": nextPlugin
    },
    settings: {
      next: {
        rootDir: ["./"]
      }
    },
    rules: {
      "no-unused-vars": "off",
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules
    }
  }
];

export default eslintConfig;
