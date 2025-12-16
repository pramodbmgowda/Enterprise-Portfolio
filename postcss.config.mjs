/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // <--- MAKE SURE THIS SAYS 'tailwindcss'
    autoprefixer: {},
  },
};

export default config;