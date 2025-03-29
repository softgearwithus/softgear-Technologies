// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your project structure
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 100%": { borderColor: "yellow" }, 
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
      },
    },
  },
  plugins: [],
};
