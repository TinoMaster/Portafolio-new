/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#ca32ff',
            secondary: '#ff2e95',
            third: '#ea4f18',
            darkMode: '#191919',
            pri: {
               50: '#fcf3ff',
               100: '#f7e3ff',
               200: '#f1ccff',
               300: '#e7a4ff',
               400: '#d86aff',
               500: '#ca32ff',
               600: '#bc0bff',
               700: '#a800f3',
               800: '#9a04d8',
               900: '#73059e',
               950: '#500078',
            },
            sec: {
               50: '#fff0f8',
               100: '#ffe4f2',
               200: '#ffc8e8',
               300: '#ff9bd3',
               400: '#ff5eb4',
               500: '#ff2e95',
               600: '#f8207c',
               700: '#d80055',
               800: '#b20246',
               900: '#94073d',
               950: '#5b0020',
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
