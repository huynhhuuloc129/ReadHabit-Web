import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";

class CategoriesService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const categories = (await this.api.get("/categories?sortOrder=asc"));
            return categories.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const category = (await this.api.get("/categories/" + id));
            return category.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async create(data: any, token: string) {
        const form = new FormData();
        form.set("name",data)

        return await axios.post(`http://localhost:3000/api/categories`, form, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async update(id: number, data: any, token: string) {
        const form = new FormData();
        form.set("name",data)

        return await axios.patch(`http://localhost:3000/api/categories/${id}`, form, {
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
        return await axios.delete(`http://localhost:3000/api/categories/${id}`, {
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

export default new CategoriesService();