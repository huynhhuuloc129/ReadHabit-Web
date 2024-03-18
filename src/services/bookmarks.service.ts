import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";
class BookmarksService {
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
            const bookmark = (await this.api.get("/bookmarks/" + id));
            return bookmark.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getMy(token: string) {
        return await axios.get(`http://localhost:3000/api/bookmarks/me`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async create(data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/bookmarks`, data, {
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
        return await axios.patch(`http://localhost:3000/api/bookmarks/${id}`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async updatePosition(id: string, data: any, token: string) {
        return await axios.patch(`http://localhost:3000/api/bookmarks/${id}/bookmark-post-position`, data, {
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
        return await axios.delete(`http://localhost:3000/api/bookmarks/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async deleteRelation(id: string, bookmarkPostId: string,token: string) {
        return await axios.delete(`http://localhost:3000/api/bookmarks/${id}/bookmark-post/${bookmarkPostId}`, {
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

export default new BookmarksService();