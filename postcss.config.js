const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');

const plugins = [
  tailwindcss(),
  postcssPresetEnv(),
  cssnano({ preset: 'default' })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    purgecss({
      content: ['./dist/**/*.html'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  );
}

module.exports = {
	plugins
};
