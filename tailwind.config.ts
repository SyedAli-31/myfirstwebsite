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
        
        
        btn:"#F98585",
        recBackground:"#74C69D",
        viewal:"#F98585",
        background: "#74C69D",
        heroEllipse:"#dfd8d8",
        footerBackground:"#FAF5F5",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        crimson: ["'Crimson Text'", "serif"], // Add Crimson Text font
      },
    },
    
  },
  plugins: [],
} satisfies Config;
