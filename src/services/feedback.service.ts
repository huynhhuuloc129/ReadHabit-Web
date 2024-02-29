import createApiClient from "./api.service";
import handlingError from "./api.service";

class FeedbackService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const feedbacks = (await this.api.get("/feedbacks?sortOrder=asc"));
            return feedbacks.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const feedback = (await this.api.get("/feedbacks/" + id)).data;
            return feedback;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new FeedbackService();