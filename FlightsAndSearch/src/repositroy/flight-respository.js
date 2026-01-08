const { Flights } = require('../models/index');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log('Repository layer Error While creating a flight:', error);
            throw { error };
        }
    };

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

    // async getCity(cityId) {
    //     try {
    //         const city = await City.findByPk(cityId);
    //         return city;
    //     } catch (error) {
    //         console.log('Repository layer Error While getcity by ID:', error);
    //         throw { error };
    //     }
    // };

    // async getAllCities(filter) {
    //     try {
    //         if (filter.name) {
    //             const cities = await City.findAll({
    //                 where: {
    //                     name: {
    //                         [Op.startsWith]: filter.name,
    //                     },
    //                 },
    //             });
    //             return cities;
    //         };
    //         const cities = await City.findAll();
    //         return cities;
    //     } catch (error) {
    //         console.log('Repository layer Error While getcity by ID:', error);
    //         throw { error };
    //     }
    // };
};

module.exports = FlightRepository;