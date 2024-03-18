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
    async getAllByFollowerId(followerId: number) {
        try {
            const follows = (await this.api.get(`/follows?sortOrder=asc&followerId=${followerId}`));
            return follows.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getAllByFolloweeId(followeeId: number) {
        try {
            const follows = (await this.api.get(`/follows?sortOrder=asc&followeeId=${followeeId}`));
            return follows.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async create(token: string, data: any) {
        return await axios.post(`http://localhost:3000/api/follows`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async delete(id: number, token: string) {
        return await axios.delete(`http://localhost:3000/api/follows/followeeId/${id}`,{
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