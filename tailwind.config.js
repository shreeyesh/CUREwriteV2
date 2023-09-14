/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: 'jit',
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        blink: 'blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        gray: "rgba(255, 255, 255, 0.1)",
        darkslategray: "rgba(59, 59, 59, 0.5)",
        lightgray: "#ccc",
        text: "#fff",
        background: "#2b2b2b",
        "grey-01": "#f7f9fb",
        black: "#000",
        "caption-label-text": "#858584",
        "background-secondary": "#3b3b3b",
        green: "#00ac4f",
        "call-to-action": "#a259ff",
        "blue-accent": "#377df7",
        "grey-02": "#ebeff2",
        "flat-grey": "#f8f8f8",
        "grey-03": "#e2e6ea",
        "grey-05": "#242634",
        blue: "#4353ff",
        cw:"#011640",
      },
      width : {
        '1200': '1200px',
        '1500': '1500px',
      },
      fontFamily: {
        "h3-work-sans": "'Work Sans'",
        "base-body-space-mono": "'Space Mono'",
        "label-small": "'SF Pro Display'",
      },
      borderRadius: {
        xl: "20px",
        "101xl": "120px",
        "81xl": "100px",
        "3xs": "10px",
        "21xl": "40px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      "l": "18px",
      "2xl": "20px",
      "3xl": "22px",
      "19xl": "38px",
      "9xl": "28px",
      "48xl": "67px",
      "5xl": "24px",
      "32xl": "51px",
      sm: "14px",
    },
    screens: {
      sm: {
        max: "420px",
      },
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },    
  },
  corePlugins: {
    preflight: false,
  },
};
