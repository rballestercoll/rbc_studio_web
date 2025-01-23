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
      },
      fontFamily: {
        adrich: ['Adrich', 'sans-serif'], // Fuente personalizada para encabezados
        inter: ['Inter', 'sans-serif'],  // Fuente personalizada para párrafos
      },
    },
  },
  plugins: [],
} satisfies Config;
