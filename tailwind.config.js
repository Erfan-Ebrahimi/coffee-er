/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brown" : {
          100: '#ECE0D1',
          300: '#DBC1AC',
          600: '#967259',
          900: '#634832',
        }
      },
      boxShadow: {
        "shadow-base" : "0px 1px 10px rgba(0 ,0 ,0 , 0.1) "
      },
      borderRadius: {
        "4xl" : "2rem"
      },
      fontFamily: {
        "Dana" : "Dana",
        "DanaM" : "Dana Medium",
        "DanaB" : "Dana DemiBold",
        "Morabba" : "Morabba Light",
        "MorabbaM" : "Morabba Medium",
        "MorabbaB" : "Morabba Bold",
      }
    },
  },
  plugins: [],
}

