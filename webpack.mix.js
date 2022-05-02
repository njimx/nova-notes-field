let mix = require("laravel-mix");
let path = require("path");

mix
  .setPublicPath("dist")
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: "Vue",
    },
    output: {
      uniqueName: "njimx/nova-notes-field",
    },
  })
  .alias({
    "laravel-nova": path.join(__dirname, "vendor/laravel/nova/resources/js/mixins/packages.js"),
  });
