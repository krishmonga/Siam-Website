module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c1c1c', // Dark background color
        secondary: '#ff0000', // Example color
      },
      spacing: {
        128: '32rem', // Custom spacing
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
