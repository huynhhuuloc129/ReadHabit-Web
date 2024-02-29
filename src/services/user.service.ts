import createApiClient from "./api.service";
import handlingError from "./api.service";

class UserService {
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
}

export default new UserService();