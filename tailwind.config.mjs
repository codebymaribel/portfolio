/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Critical: This tells Tailwind to use the .dark class
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        light: "#d9d9d9",
      },
    },
  },
  plugins: [],
};
