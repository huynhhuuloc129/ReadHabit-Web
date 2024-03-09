import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";

class FollowsService {
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

    async create(data: any) {
        return await axios.post(`http://localhost:3000/api/follows`, data).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async delete(id: string, token: string) {
        return await axios.delete(`http://localhost:3000/api/follows/${id}`, {
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

export default new FollowsService();