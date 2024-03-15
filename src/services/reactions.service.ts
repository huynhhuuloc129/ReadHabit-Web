import createApiClient from "./api.service";
import handlingError from "./api.service";

class ReactionsService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll(postId: number) {
        try {
            const reactions = (await this.api.get(`/reactions?sortOrder=asc&postId=${postId}`));
            return reactions.data;
        } catch (err) {
            handlingError(err);
        }
    }

}

export default new ReactionsService();