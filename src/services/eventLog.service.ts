import createApiClient from "./api.service";
import handlingError from "./api.service";

class EventLogService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const eventLogs = (await this.api.get("/event-logs?sortOrder=asc&limit=100"));
            return eventLogs.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getAllByActorId(id: number) {
        try {
            const eventLogs = (await this.api.get(`/event-logs?sortOrder=desc&sortField=createdAt&limit=100&actorId=${id}`));
            return eventLogs.data;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new EventLogService();