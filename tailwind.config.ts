import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0f1241",
        secondary: "#8662a7",
        softBg: "#edf0f7",
      },
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
} satisfies Config;
