import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";

class NotificationsService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const notifications = (await this.api.get("/notifications?sortOrder=asc"));
            return notifications.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const notification = (await this.api.get("/notifications/" + id));
            return notification.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async create(data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/notifications`, data, {
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
        return await axios.patch(`http://localhost:3000/api/notifications/${id}`, data, {
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
        return await axios.delete(`http://localhost:3000/api/notifications/${id}`, {
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

export default new NotificationsService();