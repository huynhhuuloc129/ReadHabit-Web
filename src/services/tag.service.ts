import createApiClient from "./api.service";
import handlingError from "./api.service";

class TagService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const tags = (await this.api.get("/tags?sortOrder=asc"));
            return tags.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const tag = (await this.api.get("/tags/" + id)).data;
            return tag;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new TagService();