const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/api", {
      // target: "https://share-back.herokuapp.com/",
      target: "http://localhost:4444",
      changeOrigin: true
    })
  );
};
