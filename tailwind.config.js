/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          DEFAULT: "#fff",
          dark: "#2B3844",
        },
        text: {
          DEFAULT: "#111517",
          dark: "#fff",
        },
        "input-text": {
          DEFAULT: "#848484",
          dark: "#fff",
        },
        background: {
          DEFAULT: "#FAFAFA",
          dark: "#202C36",
        },
      },
    },
  },
};
