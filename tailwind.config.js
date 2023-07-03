export default {
  content: ['./renderer/**/*.{vue,js,ts,jsx,tsx}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      default: {
        "primary": "#e74645",
        "secondary": "#fb7756",
        "accent": "#facd60",
        "neutral": "#fdfa66",
        "base-100": "#ffffff",
        "info": "#1ac0c6",
        "success": "#49e99e",
        "warning": "#977f11",
        "error": "#f54d5d",
      }
    }],
  }
}
