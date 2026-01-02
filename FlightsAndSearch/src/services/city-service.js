const { CityRepository } = require('../repositroy/index');

class CityService {
    constructor () {
        this.cityRepository = new CityRepository();
    };

    async createCity(data) {
        try {
            const city = this.cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log('Error at Service layer while Creating a city:', error);
            throw { error };
        }
    };

    async deleteCity(cityId) {
        try {
            const res = await this.cityRepository.deleteCity(cityId);
            return res;
        } catch (error) {
            console.log('Error at Service layer while Creating a city:', error);
            throw { error };
        }
    };

    async updateCity(cityId, data) {
        try {
            const city = this.cityRepository.updateCity(cityId, data);
            return city;
        } catch (error) {
            console.log('Error at Service layer while Creating a city:', error);
            throw { error };
        }
    };

    async getCity(cityId) {
        try {
            const city = this.cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log('Error at Service layer while Creating a city:', error);
            throw { error };
        }
    };

    async getAllCities() {
        try {
            const cities = this.cityRepository.findAll();
            return cities;
        } catch (error) {
            console.log('Error at Service layer while Creating a city:', error);
            throw { error };
        }
    };
}

module.exports = CityService;