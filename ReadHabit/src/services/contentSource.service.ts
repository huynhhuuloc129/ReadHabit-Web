import createApiClient from "./api.service";
import handlingError from "./api.service";

class ContentSourceService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const contentSources = (await this.api.get("/contentSources?sortOrder=asc"));
            return contentSources.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const contentSource = (await this.api.get("/contentSources/" + id)).data;
            return contentSource;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new ContentSourceService();