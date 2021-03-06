const { fixBabelImports } = require("customize-cra");
const {
  rewireWorkboxInject,
  defaultInjectConfig,
} = require("react-app-rewire-workbox");
const path = require("path");

module.exports = function override(config, env) {
  if (env === "production") {
    // Extend the default injection config with required swSrc
    const workboxConfig = {
      ...defaultInjectConfig,
      swSrc: path.join(__dirname, "src", "custom-sw.js"),
    };
    config = rewireWorkboxInject(workboxConfig)(config, env);
  }
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  });

  return config;
};
