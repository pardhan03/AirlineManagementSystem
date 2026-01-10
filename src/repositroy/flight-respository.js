const { Flights } = require('../models/index');
const { Op, where } = require('sequelize');

class FlightRepository {
    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = arrivalAirportId;
        };

        if(data.arrivalAirportId) {
            filter.departureAirportId = departureAirportId;
        };

        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, {
                [Op.and]: [
                    {price: {[Op.lte]: data.maxPrice}},
                    {price: {[Op.lte]: data.maxPrice}}
                ]
            });
        };

        if(data.minPrice) {
            Object.assign(filter, { price: {[Op.gte]: data.minPrice}});
        };

        if(data.maxPrice) {
            Object.assign(filter, { price: {[Op.lte]: data.maxPrice}});
        };

        return filter;
    };

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log('Repository layer Error While creating a flight:', error);
            throw { error };
        }
    };

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log('Repository layer Error While fetching flight by ID:', error);
            throw { error };
        }
    };

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where : filterObject
            });
            return flight;
        } catch (error) {
            console.log('Repository layer Error While filer a flight:', error);
            throw { error };
        }
    };

    async updateFlight(flightId, data) {
        try {
            const flight = await Flights.update(data, {
                where : flightId
            });
            return flight;
        } catch (error) {
            console.log('Service layer Error While fetching the flights:', error);
            throw { error };
        }
    }

    // async deleteCity(cityId) {
    //     try {
    //         await City.destroy({
    //             where: {
    //                 id: cityId
    //             }
    //         });
    //         return true;
    //     } catch (error) {
    //         console.log('Repository layer Error While delete a city:', error);
    //         throw { error };
    //     }
    // };

    // async updateCity(cityId, data) {
    //     try {
    //         // if we are using pg then returning true will be usefull else not
    //         // const city = await City.update(data, {
    //         //     where: {
    //         //         id:cityId
    //         //     }
    //         // });
    //         const city = await City.findByPk(cityId);
    //         city.name = data?.name || '';
    //         await city.save();
    //         return city;
    //     } catch (error) {
    //         console.log('Repository layer Error While Update City:', error);
    //         throw { error }
    //     }
    // };
};

module.exports = FlightRepository;