import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'burger': "url('/assets/images/burger.png')",
      },
      animation: {
        'slide-in': 'slideIn 1s ease-out ',
      },
      keyframes: {
        slideIn: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0px)' },
        },
      }
    },
  },
  plugins: [],
};

export default config;
