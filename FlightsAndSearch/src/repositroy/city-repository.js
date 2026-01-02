const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log('Repository layer Error While creating a city:', error);
            throw { error };
        }
    };

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log('Repository layer Error While delete a city:', error);
            throw { error };
        }
    };

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id:cityId
                }
            });
            return city;
        } catch (error) {
            console.log('Repository layer Error While Update City:', error);
            throw { error }
        }
    };

    async getCity(cityId) {
        try {
            const city =  await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log('Repository layer Error While getcity by ID:', error);
            throw { error };
        }
    }
};

module.exports = CityRepository;