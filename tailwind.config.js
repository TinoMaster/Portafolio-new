/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#7E00FC',
            secondary: '#21D6EF',
            third: '#ea4f18',
            darkMode: '#191E1D',
            pri: {
               50: '#f5f0ff',
               100: '#ede4ff',
               200: '#ddcdff',
               300: '#c5a6ff',
               400: '#aa73ff',
               500: '#943bff',
               600: '#8c14ff',
               700: '#7e00fc',
               800: '#6b01d6',
               900: '#5903af',
               950: '#360077',
            },
            sec: {
               50: '#ecfeff',
               100: '#cffbfe',
               200: '#a5f4fc',
               300: '#66ebfa',
               400: '#21d6ef',
               500: '#05b9d5',
               600: '#0794b3',
               700: '#0d7591',
               800: '#155f75',
               900: '#164f63',
               950: '#083444',
            },
         },
         brightness: {
            25: '.20',
            10: '.1',
         },
         fontFamily: {
            lora: ['Lora', 'serif'],
            roboto: ['Roboto', 'sans'],
            siliguri: ['Hind-Siliguri', 'sans'],
            inter: ['Inter'],
         },
         maxHeight: {
            '1080p': '1080px',
         },
         maxWidth: {
            '1080p': '1920px',
            '720p': '1200px',
            'Web-view': '1800px',
         },
         fontSize: {
            s: '9px',
         },
         screens: {
            xs: '426px',
         },
      },
   },
   plugins: [],
}
