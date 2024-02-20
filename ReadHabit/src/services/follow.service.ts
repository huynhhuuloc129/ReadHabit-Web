import createApiClient from "./api.service";
import handlingError from "./api.service";

class FollowService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const follows = (await this.api.get("/follows?sortOrder=asc"));
            return follows.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const follow = (await this.api.get("/follows/" + id)).data;
            return follow;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new FollowService();