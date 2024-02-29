import createApiClient from "./api.service";
import handlingError from "./api.service";

class CategoryService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const categories = (await this.api.get("/categories?sortOrder=asc"));
            return categories.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const category = (await this.api.get("/categories/" + id)).data;
            return category;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new CategoryService();