import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        ping: {
            "75%": {
              transform: "scale(1)",
              opacity: 2
            },
            "100%": {
                transform: "scale(2)",
                opacity: 0
              }
          }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ping : "ping 5s cubic-bezier(0, 0, 0.2, 1) infinite"
      },
      fontFamily: {
            sans: ['"Inter var", sans-serif, "Pacifico", cursive', ...defaultTheme.fontFamily.sans],
            latruffe: ['latruffe'],
      },
    },
  },
  plugins: [
    forms,
    // require('flowbite/plugin'),
    require("tailwindcss-animate")
],
}

