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
            default: {
              100: "#F4F4F5",
              200: "#E9E9EB",
              300: "#C1C1C3",
              400: "#878788",
              500: "#39393A",
              600: "#292931",
              700: "#1C1C29",
              800: "#121221",
              900: "#0A0A1B",
            },
            primary: {
              DEFAULT: "#F5B841",
              100: "#FEF7D9",
              200: "#FEECB3",
              300: "#FCDE8C",
              400: "#F9CF6F",
              500: "#F5B841",
              600: "#D2952F",
              700: "#B07520",
              800: "#8E5814",
              900: "#75430C",
              foreground: "#39393A",
            },
            secondary: {
              DEFAULT: "#6AB547",
              100: "#EEFBDC",
              200: "#DAF7BB",
              300: "#BAE893",
              400: "#97D272",
              500: "#6AB547",
              600: "#4E9B33",
              700: "#358223",
              800: "#206816",
              900: "#11560D",
              foreground: "#F5F0F6",
            },
            success: {
              DEFAULT: "#297373",
              100: "#D8F8EC",
              200: "#B2F0E0",
              300: "#82D5C6",
              400: "#58ABA3",
              500: "#297373",
              600: "#1D5C62",
              700: "#144852",
              800: "#0D3442",
              900: "#072637",
              foreground: "#F5F0F6",
            },
            danger: {
              DEFAULT: "#E74D4D",
              100: "#FDE7DB",
              200: "#FCCAB9",
              300: "#F7A594",
              400: "#F08278",
              500: "#E74D4D",
              600: "#C63844",
              700: "#A6263C",
              800: "#851834",
              900: "#6E0E30",
              foreground: "#6E0E30",
            },
          },
        },
        dark: {
          colors: {
            background: "#141413",
            foreground: "#F5F0F6",
            default: {
              100: "#F4F4F5",
              200: "#E9E9EB",
              300: "#C1C1C3",
              400: "#878788",
              500: "#39393A",
              600: "#292931",
              700: "#1C1C29",
              800: "#121221",
              900: "#0A0A1B",
            },
            primary: {
              DEFAULT: "#F5B841",
              100: "#FEF7D9",
              200: "#FEECB3",
              300: "#FCDE8C",
              400: "#F9CF6F",
              500: "#F5B841",
              600: "#D2952F",
              700: "#B07520",
              800: "#8E5814",
              900: "#75430C",
              foreground: "#141413",
            },
            secondary: {
              DEFAULT: "#6AB547",
              100: "#EEFBDC",
              200: "#DAF7BB",
              300: "#BAE893",
              400: "#97D272",
              500: "#6AB547",
              600: "#4E9B33",
              700: "#358223",
              800: "#206816",
              900: "#11560D",
              foreground: "#141413",
            },
            success: {
              DEFAULT: "#297373",
              100: "#D8F8EC",
              200: "#B2F0E0",
              300: "#82D5C6",
              400: "#58ABA3",
              500: "#297373",
              600: "#1D5C62",
              700: "#144852",
              800: "#0D3442",
              900: "#072637",
              foreground: "#141413",
            },
            danger: {
              DEFAULT: "#E74D4D",
              100: "#FDE7DB",
              200: "#FCCAB9",
              300: "#F7A594",
              400: "#F08278",
              500: "#E74D4D",
              600: "#C63844",
              700: "#A6263C",
              800: "#851834",
              900: "#6E0E30",
              foreground: "#141413",
            },
          },
        },
      },
    }),
  ],
};
