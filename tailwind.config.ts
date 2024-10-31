import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          brand: {
            500: "#44D5CD",
            600: "#25A59E",
          },
          primary: "#25A59E",
          neutral: {
            500: "#8C8C8C",
            600: "#737373",
            700: "595959",
            900: "#262626",
          },
          white: {
            100: "#ffffff",
            300: "rgba(255, 255, 255, 0.8)",
          },
        },
      },
      fontSize: {
        "display-desktop-1": [
          "170px",
          {
            fontWeight: "400",
            lineHeight: "170px",
          },
        ],
        "display-mobile-1": [
          "52px",
          {
            fontWeight: "400",
          },
        ],
        "header-desktop-1": [
          "72px",
          {
            fontWeight: "400",
            lineHeight: "84px",
          },
        ],
        "header-desktop-2": [
          "72px",
          {
            fontWeight: "400",
            lineHeight: "84px",
          },
        ],
        "header-desktop-3": [
          "40px",
          {
            fontWeight: "700",
            lineHeight: "62px",
          },
        ],
        "header-mobile-1": [
          "40px",
          {
            fontWeight: "400",
            lineHeight: "52px",
          },
        ],
        "header-mobile-2": [
          "28px",
          {
            fontWeight: "400",
            lineHeight: "40px",
          },
        ],
        "header-mobile-3": [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "28px",
          },
        ],
        "body-desktop-18": [
          "18px",
          {
            lineHeight: "32px",
          },
        ],
        "body-tablet-16": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "body-mobile-13": [
          "13px",
          {
            lineHeight: "22px",
          },
        ],
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)"],
        gilda: ["var(--gilda-display)"],
      },
    },
  },
  plugins: [],
};
export default config;
