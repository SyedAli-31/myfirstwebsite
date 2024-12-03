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
        black:"#21243D",
        blok:"#000000",
        btn:"#F98585",
        recBackground:"#F4E2E2",
        viewal:"#F98585",
        background: "#F6F0F0",
        heroEllipse:"#dfd8d8",
        footerBackground:"#FAF5F5",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
