import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'grid',
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'sm:grid-cols-1',
    'md:grid-cols-2',
    'lg:grid-cols-3',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
