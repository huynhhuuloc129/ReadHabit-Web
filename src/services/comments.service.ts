import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from "axios";
class CommentsService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async getAll(postId: number) {
        try {
            const comments = (await this.api.get(`/comments?includingChildren=false&postId=${postId}`));
            return comments.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getAllByPath(postId: number, path: string) {
        try {
            const comments = (await this.api.get(`/comments?includingChildren=false&postId=${postId}&path=${path}`));
            return comments.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async getOne(id: number) {
        try {
            const comment = (await this.api.get("/comments/" + id));
            return comment.data;
        } catch (err) {
            handlingError(err);
        }
    }
    async update(id: number, data: any, token: string) {
        return await axios.patch(`http://localhost:3000/api/comments/${id}`, data, {
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
        return await axios.delete(`http://localhost:3000/api/comments/${id}`, {
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

export default new CommentsService();