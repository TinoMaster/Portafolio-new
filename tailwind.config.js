/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#63f861ff",
        third: "#ea4f18",
        darkMode: "#262626",
        lightMode: "#F1F5F9",
      },
      fontFamily: {
        lora: ["Lora", "serif"],
        roboto: ["Roboto", "sans"],
        siliguri: ["Hind-Siliguri", "sans"],
        inter: ["Inter"],
      },
      maxHeight: {
        "1080p": "1080px",
      },
      maxWidth: {
        "1080p": "1920px",
        "720p": "1200px",
        "Web-view": "1800px",
      },
      fontSize: {
        s: "9px",
      },
      screens: {
        xs: "426px",
      },
    },
  },
  plugins: [],
};
