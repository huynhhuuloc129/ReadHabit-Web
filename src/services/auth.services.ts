import createApiClient from "./api.service";
import handlingError from "./api.service";
import axios from 'axios';

class AuthService {
    api: any
    constructor(baseUrl = "http://localhost:3000/api") {
        this.api = createApiClient(baseUrl);
    }
    async login(data: any) {
        try {
            const tokens = (await this.api.post("/auth/login", data));
            return tokens.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async register(data: any) {
        try {
            const resp = (await this.api.post("/auth/register/"), data);
            return resp.data;
        } catch (err) {
            handlingError(err);
        }
    }

    async getMe(token: string) {
        return await axios.get("http://localhost:3000/api/auth/me", {
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

export default new AuthService();