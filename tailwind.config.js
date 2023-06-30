export default {
  content: ['./renderer/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      default: {
        "primary": "#566E58",
        "secondary": "#32c162",
        "accent": "#1b1f99",
        "neutral": "#2d2938",
        "base-100": "#ffffff",
        "info": "#8aa2e0",
        "success": "#49e99e",
        "warning": "#977f11",
        "error": "#f54d5d",
      }
    }],
  }
}
