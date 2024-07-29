import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sinergia-logo":
          "https://somossinergia.com.ar/wp-content/uploads/2024/03/Logo-SINERGIA-SIN-Fondo-SOLO-LOGO-121x110.png",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
