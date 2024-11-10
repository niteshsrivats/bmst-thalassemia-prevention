import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(var(--primary), <alpha-value>)',
        secondary: 'hsla(var(--secondary), <alpha-value>)',
        tertiary: 'hsla(var(--tertiary), <alpha-value>)',
        'on-primary': 'hsla(var(--on-primary), <alpha-value>)',
        'on-secondary': 'hsla(var(--on-secondary), <alpha-value>)',
        'on-tertiary': 'hsla(var(--on-tertiary), <alpha-value>)',
        'surface-1': 'hsla(var(--surface-1), <alpha-value>)',
        'surface-2': 'hsla(var(--surface-2), <alpha-value>)',
        'surface-3': 'hsla(var(--surface-3), <alpha-value>)',
        'surface-4': 'hsla(var(--surface-4), <alpha-value>)',
        'surface-5': 'hsla(var(--surface-5), <alpha-value>)',
        'on-surface': 'hsla(var(--on-surface), <alpha-value>)',
        'on-surface-variant': 'hsla(var(--on-surface-variant), <alpha-value>)',
        outline: 'hsla(var(--outline), <alpha-value>)',
        'outline-variant': 'hsla(var(--outline-variant), <alpha-value>)',
        error: 'hsla(var(--error), <alpha-value>)',
        'on-error': 'hsla(var(--on-error), <alpha-value>)',
        'error-container': 'hsla(var(--error-container), <alpha-value>)',
        'on-error-container': 'hsla(var(--on-error-container), <alpha-value>)',
      },
    },
  },
  plugins: [],
};
export default config;
