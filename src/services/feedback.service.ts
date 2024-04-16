import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";
class FeedbackService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const feedbacks = (await this.api.get("/feedback?sortOrder=desc&sortField=createdAt&limit=100&offset=0"));
            return feedbacks.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const feedback = (await this.api.get("/feedback/" + id)).data;
            return feedback;
        } catch (err) {
            handlingError(err);
        }
    }
    async create(token: string, data: any) {
        return await axios.post(`http://localhost:3000/api/feedback`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }
}

export default new FeedbackService();