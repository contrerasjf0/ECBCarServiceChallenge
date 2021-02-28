const express = require('express');
const { services, setStatus, saveUserData } = require('../Controllers/Service');

function getServiceRoutes() {

  const router = express.Router();

  router.get('/', services);
  router.put('/:id/setStatus', setStatus);
  router.put('/:id/saveUserData', saveUserData);

  return router;
}

module.exports = getServiceRoutes;
