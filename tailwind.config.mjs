export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:      '#013B84',
        azure:     '#0384DA',
        sky:       '#5ABBFC',
        slate:     '#2D3748',
        'gray-100': '#F7F8FA',
        'gray-200': '#E8ECF0',
        'gray-400': '#9AA5B4',
        'gray-600': '#4A5568',
        danger:    '#C0432B',
      },
      fontFamily: {
        display:  ['Playfair Display', 'Georgia', 'serif'],
        body:     ['DM Sans', 'system-ui', 'sans-serif'],
        wordmark: ['Poppins', 'sans-serif'],
      },
    },
  },
};
