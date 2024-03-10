<template>
   <!--  style="background-color: var(--main-color);"  -->
    <div class="px-3 py-2" >
        <div class="container-fluid">
            <div style="margin-left: 50px;" class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none">
                    <img src="../assets/logo.png" alt="" style="border-radius: 50%; width: 45px; height: 45px; margin-right: 10px;">
                    <div :style="{'color': props['textColor']}">ReadHabit</div>
                </a>

                <div class="d-flex justify-content-center">
                    <div class="searchbar">
                        <input class="search_input" type="text" name="" placeholder="Tìm kiếm...">
                        <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
                    </div>
                </div>

                <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li class="text-center" >
                        <a href="#" class="nav-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" :style="{'color': props['textColor']}"
                                class="bi bi-house-fill header" viewBox="0 0 16 16">
                                <path
                                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                            </svg>
                        </a>
                    </li>
                    <li class="text-center">
                        <a href="#" class="nav-link text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-sliders header" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
                            </svg>
                        </a>
                    </li>
                    <li class="text-center">
                        <a href="#" class="nav-link text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-bell-fill header" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg>
                        </a>
                    </li>
                </ul>

                <div v-if="isLogin" class="nav-item dropdown">
                    <a class="nav-link bsb-dropdown-toggle-caret-disable"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="../assets/logo.png" width="40" height="40" class="img-fluid rounded-circle" :alt="currentUser.fullName">
                    </a>
                    <ul class="dropdown-menu dropdown-menu-md-end bsb-dropdown-animation bsb-fadeIn" style="width: 300px;">
                        <li>
                            <h6 class="dropdown-header fs-7 text-center">Xin chào, {{ currentUser.firstName }}</h6>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                            <!-- TODO add avatar-->
                        </li>
                        <li>
                            <a href="#" class="dropdown-item" aria-current="true">
                            <div class="row g-0 align-items-center">
                                <div class="col-3">
                                <img src="../assets/logo.png" width="55" height="55" class="img-fluid rounded-circle" alt="Luke Reeves">
                                </div>
                                <div class="col-9">
                                <div class="ps-3">
                                    <div class="text-secondary mt-1 fs-7">Tài khoản thành viên</div>
                                    <div class="text-secondary mt-1 fs-7">email@domain.com</div> 
                                    <!-- TODO: Add real email -->
                                </div>
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li class="align-items-center">
                            <a class="dropdown-item" href="#!">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                </svg>
                                <span class="fs-7 p-2">Xem trang cá nhân</span>
                            </span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a class="dropdown-item" href="#!">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                </svg>
                                <span class="fs-7 p-2">Cài đặt</span>
                            </span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#!">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"/>
                                </svg>
                                <span class="fs-7 p-2">Hỗ trợ</span>
                            </span>
                            </a>
                        </li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <span class="dropdown-item text-center" style="cursor: pointer;">
                                <span @click="onSignOut" class="fs-7">Đăng xuất</span>
                            </span>
                        </li>
                    </ul>
                </div>

                <button v-if="isLogin != true" class="btn btn-outline-primary fw-bold" type="submit" data-bs-toggle="modal"
                    data-bs-target="#loginModal" style="margin-right: 10px;" :style="{'color': props['textColor']}">Đăng
                    nhập</button>

                <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-body">
                                <form @submit="onLogin">
                                    <div class="text-center p-3">
                                        <img class="logo-form img-thumbnail" src="../assets/logo.png" alt="">
                                    </div>
                                    <h3 class="text-center">Read Habit</h3>
                                    <div class="mb-3">
                                        <label for="loginInputemail" class="form-label">Tài khoản</label>
                                        <input v-model="loginData.email" type="email" class="form-control" id="loginInputemail"
                                            aria-describedby="emailHelp" placeholder="Tài khoản" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="loginInputPassword" class="form-label">Mật khẩu</label>
                                        <input v-model="loginData.password" type="password" class="form-control" id="loginInputPassword"
                                            placeholder="Mật khẩu" required>
                                    </div>
                                    <!-- <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="loginCheck">
                                        <label class="form-check-label" for="loginCheck">Check me out</label>
                                    </div> -->
                                    <div v-if="showErrLogin" class="text-center text-danger">{{ errMessage }}</div>
                                    <div class="text-center">
                                        <button type="submit" id="loginButton" class="btn blue-background text-white">Đăng nhập</button>
                                    </div>
                                    <div id="other-option">
                                        <a href="#" class="blue-color">Quên mật khẩu?</a>
                                        hoặc
                                        <a href="#" class="blue-color">Đăng ký</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <button v-if="isLogin != true" type="button" class="btn btn-light fw-bold" data-bs-toggle="modal"
                    data-bs-target="#registerModal">Đăng
                    ký</button>

                <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-body">
                                <form submit="onLogin">
                                    <div class="text-center p-3">
                                        <img class="logo-form img-thumbnail" src="../assets/logo.png" alt="">
                                    </div>
                                    <h3 class="text-center">Read Habit</h3>
                                    <div class="mb-3">
                                        <label for="registerInputUsername" class="form-label">Tài khoản</label>
                                        <input v-model="registerData.username" class="form-control" id="registerInputUsername" aria-describedby="emailHelp"
                                            placeholder="Tài khoản" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="registerInputEmail" class="form-label">Email</label>
                                        <input v-model="registerData.email" type="email" class="form-control" id="registerInputEmail"
                                            aria-describedby="emailHelp" placeholder="Email" required>
                                        <div id="emailHelp" class="text-red form-text">We'll never share your email with anyone else.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="registerInputPassword" class="form-label">Mật khẩu</label>
                                        <input v-model="registerData.password" type="password" class="form-control" id="registerInputPassword"
                                            placeholder="Mật khẩu" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="registerInputRepeatPassword" class="form-label">Lặp lại mật khẩu</label>
                                        <input v-model="registerData.repeatPassword" type="password" class="form-control" id="registerInputRepeatPassword"
                                            placeholder="Lặp lại mật khẩu" required>
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="registerCheck">
                                        <label class="form-check-label" for="registerCheck">Check me out</label>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" id="registerButton"  class="btn blue-background text-white">Đăng ký</button>
                                    </div>
                                    <div id="other-option">
                                        Đã có tài khoản?
                                        <a href="#" class="blue-color">Đăng nhập ngay</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import authServices from '@/services/auth.services';
import checkLogin from "@/utilities/utilities";
import { useCookies } from "vue3-cookies";
import { ref } from 'vue'


const props = defineProps(['textColor'])
const cookies = useCookies();

const loginData = ref({
    email: '',
    password: ''
})
const registerData = ref({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
})
const showErrLogin = ref(false)
const errMessage = ref('')
const currentUser = ref({
    id: '',
    createdAt: '',
    username: "",
    firstName: "",
    lastName: "",
    fullName: "",
    phoneNumber: "",
    birthday: "",
    avatar: "",
    categories: []
});
const currentToken = ref({
    access_token: '',
    refresh_token: '',
})
const isLogin = ref(false);

var onLogin = async (e: any) => {
    e.preventDefault();
    try {
        currentToken.value = await authServices.login(loginData.value);        
        cookies.cookies.set("Token", currentToken.value.access_token);
        window.location.reload();
    } catch (err: any) {
        showErrLogin.value = true;
        errMessage.value = err.message;
        // console.log(err)
    }
}
var onSignOut = (e: any) => {
    document.cookie = 'Token' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
    // cookies.cookies.set("Token", '');
    window.location.reload();
}
try {
    currentUser.value = await checkLogin();
    if (currentUser.value !== null && currentUser.value['id'] !== null) {
        isLogin.value = true;
    }
} catch (err) {
    console.log(err)
}
// console.log(currentUser.value)
</script>

<style>
.blue-background:hover{
    background-color: rgb(0, 0, 120);
}
.blue-background{
    background-color: var(--main-color);
}
.blue-color{
    color: var(--main-color);
}
.searchbar {
    margin-bottom: auto;
    margin-top: auto;
    height: 50px;
    background-color: #4a6987;
    border-radius: 30px;
    padding: 5px;
}

.search_input {
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color: transparent;
    line-height: 40px;
    transition: width 0.4s linear;
}

.searchbar:hover>.search_input {
    padding: 0 10px;
    width: 450px;
    caret-color: var(--main-color);
    transition: width 0.4s linear;
}

.searchbar:hover>.search_icon {
    background: white;
    color: var(--main-color);
}

.search_icon {
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: white;
    text-decoration: none;
}
::placeholder{
    color: white;
}
.logo-form{
    border-radius: 50%;
    width: 150px;
}
.header:hover{
    color: rgb(184, 182, 182);
}



</style>