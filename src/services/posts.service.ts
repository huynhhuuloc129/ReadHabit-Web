import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";

class PostService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll(limit: number, offset: number, status: string) {
        try {
            const posts = (await this.api.get(`/posts?sortOrder=asc&limit=${limit}&offset=${offset}&status=${status}`));
            return posts.data;
        } catch (err) {
            handlingError(err);
        }
    }
          
    async getAllForUser(id: number) {
        try {
            const posts = (await this.api.get(`/posts?sortOrder=asc&createdById=${id}`));
            return posts.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getAllStatusForUser(id: number, status: string) {
        try {
            const posts = (await this.api.get(`/posts?sortOrder=asc&createdById=${id}&status=${status}`));
            return posts.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getAllByCategoryId(id: number) {
        try {
            const posts = (await this.api.get(`/posts?sortOrder=asc&categoryId=${id}&status=published`));
            return posts.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getOne(id: number) {
        try {
            const post = (await this.api.get("/posts/" + id));
            return post.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async create(categoryId: number, tags: string[], contentSourceId: number, title: string, content: string, originalPostUrl: string, status: string, type: string, postImage: string, token: string) {
        const form = new FormData();
        form.set("categoryId", JSON.stringify(categoryId))
        if(tags.length> 0) form.set("tags", JSON.stringify(tags))
        if(contentSourceId != 0) form.set("contentSourceId", JSON.stringify(contentSourceId))
        form.set("title", title)
        form.set("content", content)
        if(originalPostUrl != '') form.set("originalPostUrl", originalPostUrl)
        form.set("status", status)
        form.set("type", type)
        form.set("postImage", postImage)
        return await axios.post(`http://localhost:3000/api/posts`, form, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async createReview(id: number, data: any, token: string) {
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
    async createComment(id: number, data: any, token: string) {
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

    async createReact(id: number, data: any, token: string) {
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

    async share(id: number, data: any, token: string) {
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

    async delete(id: number, token: string) {
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