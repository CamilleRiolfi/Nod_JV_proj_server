const { Handler } = require('./handlers');

const routes = (router) => {
  router.get('/authentification/', (req, res) => {
    res.send('authentification routes Works !');
  });
  router.get('/authentification/test/', Handler.test);
};

module.exports.routes = routes;
