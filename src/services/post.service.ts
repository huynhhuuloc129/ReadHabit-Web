import createApiClient from "./api.service";
import handlingError from "./api.service";

class PostService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const posts = (await this.api.get("/posts?sortOrder=asc"));
            return posts.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const post = (await this.api.get("/posts/" + id)).data;
            return post;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new PostService();