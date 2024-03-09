import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";

class PostService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll() {
        try {
            const posts = (await this.api.get("/posts?sortOrder=asc"));
            return posts.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: string) {
        try {
            const post = (await this.api.get("/posts/" + id));
            return post.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async create(data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/posts`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async createReview(id: string, data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/posts/${id}/review`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }
    async createComment(id: string, data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/posts/${id}/comments`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async createReact(id: string, data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/posts/${id}/react`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async share(id: string, data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/posts/${id}/share`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async bookmark(id: string, data: any, token: string) {
        return await axios.post(`http://localhost:3000/api/posts/${id}/bookmark`, data, {
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
        return await axios.patch(`http://localhost:3000/api/posts/${id}`, data, {
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
        return await axios.delete(`http://localhost:3000/api/posts/${id}`, {
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

export default new PostService();