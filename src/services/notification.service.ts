import createApiClient from "./api.service";
import handlingError from "./api.service";

class NotificationService {
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
            const notification = (await this.api.get("/notifications/" + id)).data;
            return notification;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new NotificationService();