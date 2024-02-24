import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ["1rem", { lineHeight: "1.2rem", fontWeight: "400" }], //16px
      base: ["1rem", { lineHeight: "1.2rem", fontWeight: "400" }],
      xl: [
        "1.5rem",
        { lineHeight: "28.8px", letterSpacing: "-0.008em", fontWeight: "400" },
      ], // 24px
      "2xl": [
        "2.25rem",
        { lineHeight: "43.2px", letterSpacing: "-0.035em", fontWeight: "400" },
      ], // 36px
      "3xl": [
        "3rem",
        { lineHeight: "48px", letterSpacing: "-0.04em", fontWeight: "400" },
      ], // 48px
      "4xl": [
        "8rem",
        { lineHeight: "128px", letterSpacing: "-0.08em", fontWeight: "400" },
      ], // 128px
    },
    extend: {
      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "0.9rem", fontWeight: "400" }], //12px
        xs: ["0.875rem", { lineHeight: "1.05rem", fontWeight: "400" }], //14px
        md: ["1.125rem", { lineHeight: "21.6px", fontWeight: "400" }], //18px
        lg: [
          "1.25rem",
          { lineHeight: "24px", letterSpacing: "-0.003em", fontWeight: "400" },
        ], //20px
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "8px",
          medium: "12px",
          large: "18px",
        },
        disabledOpacity: 0.4,
      },
      themes: {
        light: {
          colors: {
            background: "#F5F0F6",
            foreground: "#39393A",
            primary: {
              DEFAULT: "#F5B841",
              foreground: "#39393A",
            },
            secondary: {
              DEFAULT: "#6AB547",
              foreground: "#F5F0F6",
            },
            success: {
              DEFAULT: "#297373",
              foreground: "#F5F0F6",
            },
            danger: {
              DEFAULT: "#E74D4D",
              foreground: "#F5F0F6",
            },
          },
        },
        dark: {
          colors: {
            background: "#141413",
            foreground: "#F5F0F6",
            primary: {
              DEFAULT: "#F5B841",
              foreground: "#141413",
            },
            secondary: {
              DEFAULT: "#6AB547",
              foreground: "#141413",
            },
            success: {
              DEFAULT: "#297373",
              foreground: "#141413",
            },
            danger: {
              DEFAULT: "#E74D4D",
              foreground: "#141413",
            },
          },
        },
      },
    }),
  ],
};
