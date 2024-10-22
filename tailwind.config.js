import daisyui from "daisyui";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: '#23BE0A',
        sec: '#59C6D2',
      },
    },
  },
  plugins: [
    daisyui,
    forms, // Use imported `forms` plugin here
    // Add more plugins here...
  ],
}

