/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
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
        "base" : "0px 1px 10px rgba(0 ,0 ,0 , 0.1) "
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
      },
      letterSpacing: {
        tightest: '-0.065em'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.625rem' 
        }
      },
      backgroundImage: {
        "home-mobile" : "url(./images/headerBgMobile.webp)",
        "home-desktop" : "url(./images/headerBgDesktop.webp)",
        "main" : "url(./images/body-bg.png)",
      }
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function ({addVariant}){
      addVariant('child' , '& > *');
      addVariant('child-hover' , '& > *:hover');
    }
  ],
}

