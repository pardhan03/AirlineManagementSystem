
class CrudRepository {
    constructor(model) {
        this.model = model;
    };

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log('Something went wrong in crud repo while create:', error);
            throw { error };
        };
    };

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            return true;
        } catch (error) {
            console.log('Something went wrong in crud repo while destroy:', error);
            throw { error };
        }
    };

    async get(modelId) {
        try {
            const result = await this.model.findByPk({
                where: {
                    id: modelId
                }
            });
            return result;
        } catch (error) {
            console.log('Something went wrong in crud repo while fetch:', error);
            throw { error };
        }
    };

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log('Something went wrong in crud repo while fetch all:', error);
            throw { error };
        }
    };

    async update(modelId, data) {
        try {
            const result = await this.model.update(data, {
                where: {
                    id: modelId,
                }
            });
            return result;
        } catch (error) {
            console.log('Something went wrong in crud repo while update:', error);
            throw { error };
        }
    };
};

module.exports = CrudRepository;