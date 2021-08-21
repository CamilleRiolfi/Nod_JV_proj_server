const express = require('express');

const Authentification = require('../apps/authentification/routes');
/* Apps Routers import */
/* End Routers Import */

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Coucou !');
});

Authentification.routes(router);
module.exports = router;
