/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif;"],
        JosefinSans: ["Josefin Sans", "sans-serif;"],
        Mulish: ["Mulish", "sans-serif;"],
      },
      colors: {
        lightblue: "#86C1CF",
        sky: "#0097D8",
        darkblue: "#22374A",
        cream: "#F8F2EC",
        red: "#C2463B",
        yellow: "#FFC84A",
      },
    },
  },
  plugins: [],
};
