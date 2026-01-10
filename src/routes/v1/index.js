const express = require('express');
const { 
    CityController,
    FlightController,
    AirportController
} = require('../../controllers/index');

const { FlightMiddlewares } = require('../../middlewares/index');
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city', CityController.update);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flights', FlightController.getAll);
router.get('/flight/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

router.post('/airports', AirportController.create);

module.exports = router;