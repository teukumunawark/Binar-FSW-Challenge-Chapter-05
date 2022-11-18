const express = require('express');
const middleware = require('./middleware');
const handler = require('./handler')

const routes = express.Router();

routes.post('/cars', handler.createCarHandler);
routes.get('/cars', handler.getCarsListHandler);
routes.get('/cars/:id', handler.getCarByIdHandler);
routes.put('/cars/:id', handler.updateCarByIdHandler);
routes.delete('/cars/:id', handler.deleteCarByIdHandler);

module.exports = routes;