import createApiClient from "./api.service";
import handlingError from "./api.service";

class EventLogService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const eventLogs = (await this.api.get("/eventLogs?sortOrder=asc"));
            return eventLogs.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const eventLog = (await this.api.get("/eventLogs/" + id)).data;
            return eventLog;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new EventLogService();