/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'erco-',
  content: ['./packages/**/src/**/*.{js,jsx,ts,tsx}'], // Escanea los paquetes de Lerna
  theme: {
    extend: {}
  },
  plugins: []
}
