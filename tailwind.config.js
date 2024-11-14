/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: '24px',
    },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
  
    extend: {
      fontFamily: {
        display: "Space Mono,  monospace",
      },	fontSize: {
  			header1: '26px',
  			header2: '22px',
  			header3: '16px',
  			header4: '13px',
  			header4: '13px',
        body:'15px'
  		},

    },
  },
  plugins: [],
}