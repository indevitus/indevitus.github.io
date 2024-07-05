/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  singleQuote: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        singleQuote: false,
      },
    },
    {
      files: ['*.ts', '*.js', '*.css', '*.cjs', '*.json'],
      options: {
        singleQuote: true,
      },
    },
  ],
};
