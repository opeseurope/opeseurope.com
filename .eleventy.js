const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");


  // eleventyConfig.addPassthroughCopy("img");
  // eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
      dir: { input: 'src', output: '_site', data: '_data' },
      passthroughFileCopy: true
  };
};
