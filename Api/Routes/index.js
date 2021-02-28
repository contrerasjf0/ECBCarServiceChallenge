const express = require('express');

const getServiceRoutes = require('./service');

function getRoutes() {

  const router = express.Router()

  router.use('/service', getServiceRoutes())

  return router

}

module.exports = { 
  getRoutes
};
