import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";

class PostService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const ranks = (await this.api.get("/ranks?sortOrder=asc&limit=100"));
            return ranks.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getAllByOwnerId(id: number) {
        try {
            const ranks = (await this.api.get(`/rank?sortField=createdAt&sortOrder=desc&limit=100&ownerId=${id}`));
            return ranks.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getOne(id: string) {
        try {
            const rank = (await this.api.get("/rank/" + id)).data;
            return rank;
        } catch (err) {
            handlingError(err);
        }
    }
    async getCurrentRankOfUser(id: number) {
        try {
            const ranks = (await this.api.get(`/rank?ownerId=${id}&isLock=false`));
            return ranks.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getCurrentRank(token: string) {
        return await axios.get("http://localhost:3000/api/rank/me", {
          headers: {
            Authorization: 'Bearer ' + token
          }
        }).then((res) => {
          return res.data;
        }).catch((err) => {
            if (err.response.status == '404') throw new Error("Không tìm thấy!");
            throw new Error("Lỗi hệ thống")
        })
    }

}

export default new PostService();