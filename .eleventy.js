const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");


  // eleventyConfig.addPassthroughCopy("img");
  // eleventyConfig.addPassthroughCopy("css");

  return {
      dir: { input: 'src', output: '_site', data: '_data' },
      passthroughFileCopy: true
  };
};
