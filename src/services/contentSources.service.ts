import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";
class ContentSourcesService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const contentSources = (await this.api.get("/content-sources?sortOrder=asc&sortField=id&limit=100"));
            return contentSources.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const contentSource = (await this.api.get("/content-sources/" + id));
            return contentSource.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async create(name: string, file: any, token: string) {
        const form = new FormData();
        form.set("name", name)
        form.set('contentSourceImage',file)
        return await axios.post(`http://localhost:3000/api/content-sources`, form, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async update(id: number,  name: string, file: any, token: string) {
        const form = new FormData();
        form.set("name", name)
        if (file != null) form.set('contentSourceImage',file)
        return await axios.patch(`http://localhost:3000/api/content-sources/${id}`, form, {
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
        return await axios.delete(`http://localhost:3000/api/content-sources/${id}`, {
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

export default new ContentSourcesService();