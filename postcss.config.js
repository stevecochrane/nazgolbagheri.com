const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');

const plugins = [
  tailwindcss(),
  postcssPresetEnv()
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['./src/**/*.njk'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  );
}

module.exports = {
	plugins
};
