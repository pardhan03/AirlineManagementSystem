const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price ||
        !req.body.totalSeats
    ) {
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalide body request for create flight',
            err: 'Missing mandatory fields to create a flight',
        });
    };
};

module.exports ={
    validateCreateFlight,
}