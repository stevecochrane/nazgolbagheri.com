module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/admin');

  return {
    dir: {
      data: '_data',
      input: 'src',
      output: 'dist'
    }
  };
};
