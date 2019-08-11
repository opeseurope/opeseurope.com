const fs = require("fs");

module.exports = function(eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");


  eleventyConfig.addPassthroughCopy("src/img");
  // eleventyConfig.addPassthroughCopy("css");


  eleventyConfig.addPassthroughCopy("src/cninfo.json");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/js");

  return {
      dir: { input: 'src', output: '_site', data: '_data' },
      passthroughFileCopy: true
  };
};
