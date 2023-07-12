import type { Config } from 'tailwindcss/types/config'

export default <Partial<Config>> {
  theme: {
    extend: {
      colors: {
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#030712'
        },
        green: {
          50: '#d6ffee',
          100: '#acffdd',
          200: '#83ffcc',
          300: '#30ffaa',
          400: '#00dc82',
          500: '#00bd6f',
          600: '#009d5d',
          700: '#007e4a',
          800: '#005e38',
          900: '#003f25'
        },
      },

      fontFamily: {
        sans: ['"RoobertPRO"', '"RoobertPRO override"', 'sans-serif']
      },
    }
  },
}
