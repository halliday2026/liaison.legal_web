export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:         '#0D1B2A',
        'navy-mid':   '#1A2E42',
        steel:        '#2C4A6E',
        sky:          '#4A90C4',
        'sky-light':  '#D6EAF8',
        sage:         '#4A7C6F',
        'sage-light': '#D5EAE6',
        'warm-white': '#F8F6F2',
        cream:        '#F2EEE8',
        gold:         '#C9A84C',
        'gold-light': '#FEF7E7',
        check:        '#2E7D5A',
        danger:       '#C0432B',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
};
