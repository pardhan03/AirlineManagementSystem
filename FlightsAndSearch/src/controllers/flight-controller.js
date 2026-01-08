const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            totalSeats: req.body.totalSeats,
        };

        const flight = flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfull created a flight',
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'No able to create a flight',
            err: error,
        });
    }
};

const getAll = (req, res) => {
    try {
        const response = flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfull fetched the flights',
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'No able to fetch a flight',
            err: error,
        });
    }
}

module.exports = {
    create,
    getAll,
}