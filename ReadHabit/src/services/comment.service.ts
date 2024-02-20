import createApiClient from "./api.service";
import handlingError from "./api.service";

class CommentService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const comments = (await this.api.get("/comments?sortOrder=asc"));
            return comments.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const comment = (await this.api.get("/comments/" + id)).data;
            return comment;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new CommentService();