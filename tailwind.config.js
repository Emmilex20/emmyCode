/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Define a custom font family
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Define a custom color palette
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        'card-bg': 'var(--color-card-bg)', // Added 'card-bg'
        'input-bg': 'var(--color-input-bg)',
        'dark-bg': 'var(--color-dark-bg)',
      },
      // You can add more customizations here (e.g., custom shadows, keyframes for animations)
    },
  },
  plugins: [],
}