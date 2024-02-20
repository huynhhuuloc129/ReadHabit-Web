import createApiClient from "./api.service";
import handlingError from "./api.service";

class PostService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const ranks = (await this.api.get("/ranks?sortOrder=asc"));
            return ranks.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const rank = (await this.api.get("/ranks/" + id)).data;
            return rank;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new PostService();