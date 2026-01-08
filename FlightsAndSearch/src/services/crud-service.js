class CrudService {
    constructor(repository) {
        this.repository = repository;
    };

    async create(data) {
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log('Something went wrong in crud service while create:', error);
            throw { error };
        };
    };

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in crud service while destroy:', error);
            throw { error };
        }
    };

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log('Something went wrong in crud service while fetch:', error);
            throw { error };
        }
    };

    async getAll() {
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log('Something went wrong in crud service while fetch all:', error);
            throw { error };
        }
    };

    async update(id, data) {
        try {
            const result = await this.repository.update(id, data);
            return result;
        } catch (error) {
            console.log('Something went wrong in crud service while update:', error);
            throw { error };
        }
    };
};

module.exports = CrudService;