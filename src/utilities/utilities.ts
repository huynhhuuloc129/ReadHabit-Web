import { useCookies } from "vue3-cookies";
import authServices from '@/services/auth.services';

const cookies = useCookies();

export default async function checkLogin() {
    const tokenBearer = cookies.cookies.get('Token');
    return authServices.getMe(tokenBearer);
}