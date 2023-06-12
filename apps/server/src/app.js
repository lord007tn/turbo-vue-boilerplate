const path = require("path");
const AutoLoad = require("fastify-autoload");

module.exports.options = {};

module.exports = async (fastify, opts) => {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify
    .register(AutoLoad, {
      dir: path.join(__dirname, "plugins"),
      options: Object.assign({ prefix: "/plugins" }, opts),
      dirNameRoutePrefix: false,
    })
    .ready((err) => {
      if (err) throw err;
      fastify.log.info("Plugins loaded");
    });

  fastify
    .register(AutoLoad, {
      dir: path.join(__dirname, "routes"),
      options: Object.assign({ prefix: "/api" }, opts),
      routeParams: true,
      autoHooks: true,
      cascadeHooks: true,
    })
    .ready((err) => {
      if (err) throw err;
      fastify.log.info("Routes loaded");
    });
};
