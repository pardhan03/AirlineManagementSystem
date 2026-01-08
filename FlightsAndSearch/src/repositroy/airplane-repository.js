const { Airplane } = require('../models/index');

class AirplaneRepository {
    async getAirplane(id) {
        try {
            const airplane = await Airplane.fingByPk(id);
            return airplane;
        } catch (error) {
            console.log('Something went wrong at repository layer while fetch airplane data:',error);
            throw { error };
        }
    };

};

module.exports = AirplaneRepository;