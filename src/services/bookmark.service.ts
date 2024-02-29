import createApiClient from "./api.service";
import handlingError from "./api.service";

class BookmarkService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const bookmarks = (await this.api.get("/bookmarks?sortOrder=asc"));
            return bookmarks.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const bookmark = (await this.api.get("/bookmarks/" + id)).data;
            return bookmark;
        } catch (err) {
            handlingError(err);
        }
    }
}

export default new BookmarkService();