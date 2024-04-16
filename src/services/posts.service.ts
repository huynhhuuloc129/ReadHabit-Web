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
            const posts = (await this.api.get(`/posts?sortOrder=desc&sortField=createdAt&limit=${limit}&offset=${offset}&status=${status}`));
            return posts.data;
        } catch (err) {
            handlingError(err);
        }
    }
          
    async getAllForUser(id: number) {
        try {
            const posts = (await this.api.get(`/posts?sortOrder=desc&sortField=createdAt&createdById=${id}&limit=100&offset=0`));
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

    async getAllByTagId(id: number) {
        try {
            const posts = (await this.api.get(`/posts?sortOrder=asc&tagId=${id}&status=published`));
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

    async getFeedForCurrentUser(token: string){
        return await axios.get(`http://localhost:3000/api/posts/feed?limit=100&offset=0`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async create(categoryId: number, tags: string[], contentSourceId: number, title: string, content: string, originalPostUrl: string, status: string, type: string, postImage: any, token: string) {
        const form = new FormData();
        form.set("categoryId", JSON.stringify(categoryId))
        if(tags.length> 0) {
            let newTags = ''
            for (let i =0; i< tags.length; i++) {
                if (i >0) newTags+=", "
                newTags+=tags[i]
            }
            form.set("tags", newTags)
        }
        if(contentSourceId != 0) form.set("contentSourceId", JSON.stringify(contentSourceId))
        form.set("title", title)
        form.set("content", content)
        if(originalPostUrl != '') form.set("originalPostURL", originalPostUrl)
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

    async share(id: number, name: string, token: string) {
        return await axios.post(`http://localhost:3000/api/posts/${id}/share`, {
            title: name
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
        return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async bookmark(id: number, data: any, token: string) {
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

    async update(id: number, categoryId: number, tags: string[], contentSourceId: number, title: string, content: string, originalPostUrl: string, status: string, type: string, postImage: any, token: string) {
        const form = new FormData();
        form.set("categoryId", JSON.stringify(categoryId))
        if(tags.length> 0) {
            let tagName = ''
            for(let i=0; i< tags.length; i++) {
                if (i != 0) tagName += ','
                tagName += tags[i]
            }
            form.set("tags", tagName)
        }
        
        if(contentSourceId != 0) form.set("contentSourceId", JSON.stringify(contentSourceId))
        form.set("title", title)
        form.set("content", content)
        if(originalPostUrl != '') form.set("originalPostUrl", originalPostUrl)
        form.set("status", status)
        form.set("type", type)
        form.set("postImage", postImage)
        return await axios.patch(`http://localhost:3000/api/posts/${id}`, form, {
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

    async generatePost(data: any, token: string){
        return await axios.post(`http://localhost:3000/api/scraping/quick-generate`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }

    async getRelatedPost(id: number) {
        return await axios.get(`http://localhost:5000/api/?id=${id}`).then((res) => {
            return res.data;
        }).catch((err) => {
            handlingError(err);
        })
    }
}

export default new PostService();