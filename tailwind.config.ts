import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        appBlue:"#4078cb",
      },
      spacing:{
        "6.25rem":"6.25rem",
        "1.25rem":"1.25rem",
      },
      fontFamily: {
        bricolageGrotesque: ["var(--bricolageGrotesque)", ...fontFamily.sans],
        inter: ["var(--inter)", ...fontFamily.sans],
        dmSans: ["var(--DM_Sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
