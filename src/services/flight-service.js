const { FlightRepository, AirplaneRepository } = require('../repositroy/index');
const { compareTime } = require('../utils/helper');
class FlightService {
    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    };

    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw { error: 'Arrival can not be less than departure time' };
            };

            const airplane = this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
            return flight;
        } catch (error) {
            console.log('Service layer Error While creating a flight:', error);
            throw { error };
        }
    };

    async getAllFlightData(data) {
        try {
            const flights = this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log('Service layer Error While fetching the flights:', error);
            throw { error };
        }
    };

    async getFlight(flightId) {
        try {
            const flights = this.flightRepository.getFlight(flightId);
            return flights;
        } catch (error) {
            console.log('Service layer Error While fetching the flights:', error);
            throw { error };
        }
    };

    async updateFlight(flightId, data) {
        try {
            const res = this.flightRepository.updateFlight(flightId, data);
            return res;
        } catch (error) {
            console.log('Service layer Error While fetching the flights:', error);
            throw { error };
        }
    }
};
module.exports = FlightService;