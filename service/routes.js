const express = require('express');
const handler = require('./handler');
const upload = require('../utils/cloudinary');



const routes = express.Router();

routes.post('/cars', upload.single("picture"), handler.createCarHandler);
routes.get('/cars', handler.getCarsListHandler);
routes.get('/cars/:id', handler.getCarByIdHandler);
routes.put('/cars/:id', handler.updateCarByIdHandler);
routes.delete('/cars/:id', handler.deleteCarByIdHandler);

module.exports = routes;