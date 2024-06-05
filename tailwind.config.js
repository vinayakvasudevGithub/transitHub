/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-airindia": "rgb(219, 0, 11)",
        "custom-indigo": "rgb(50, 3, 219)",
      },
    },
  },
  plugins: [],
};
