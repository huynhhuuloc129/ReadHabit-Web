import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from 'axios';

class UsersService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const users = (await this.api.get("/users?sortOrder=asc"));
            return users.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const user = (await this.api.get("/users/" + id)).data;
            return user;
        } catch (err) {
            handlingError(err);
        }
    }

    async update(id: string, data: any, token: string) {
        return await axios.patch(`http://localhost:3000/api/users/${id}`, data, {
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
        return await axios.delete(`http://localhost:3000/api/users/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async uploadAvatar(avatar: any, token: string) {
        return await axios.post(`http://localhost:3000/api/users/upload-avatar`, avatar, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async setCategories(id: string, category: any, token: string) {
        return await axios.post(`http://localhost:3000/api/users/${id}/categories`, category, {
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

export default new UsersService();