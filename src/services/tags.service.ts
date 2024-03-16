import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";

class TagsService {
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
    async getAllByCategoryId(id: number) {
        try {
            const tags = (await this.api.get(`/tags?sortOrder=asc&categoryId=${id}`));
            return tags.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getOne(id: string) {
        try {
            const tag = (await this.api.get("/tags/" + id));
            return tag.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async create(data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/tags`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async update(id: string, data: any, token: string) {
        return await axios.patch(`http://localhost:3000/api/tags/${id}`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async delete(id: string, token: string) {
        return await axios.delete(`http://localhost:3000/api/tags/${id}`, {
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

export default new TagsService();