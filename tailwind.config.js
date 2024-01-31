/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Blue:'#2F2FA2',
        darkBlue:'#242582',
        white:'#FFFFFF',
        
      }
    },
  },
  plugins: [],
}

