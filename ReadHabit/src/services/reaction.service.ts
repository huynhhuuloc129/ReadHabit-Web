import createApiClient from "./api.service";
import handlingError from "./api.service";

class ReactionService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const reactions = (await this.api.get("/reactions?sortOrder=asc"));
            return reactions.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const reaction = (await this.api.get("/reactions/" + id)).data;
            return reaction;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new ReactionService();