/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
        // Backgrounds
        'blueish-bg': '#0e083e',
        'greenishbutton-bg': '#a2eb1c',
        'blueishbutton-bg': '#a3daf6',
        'whitish-bg': '#f2f5f6',

        // Text
        'greenish-text': '#69a51c',
        'whitish-header-text': '#d3d5dc',
        'blueish-text': '#5691cb',
      }

    },
  },
  plugins: [],
}

