<template>
   
    <div class="px-3 py-2 bg-dark text-white">
        <div class="container-fluid">
            <div style="margin-left: 50px;" class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        class="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                        <path
                            d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                        <path
                            d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                    </svg>
                </a>

                <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                    <li class="text-center">
                        <a href="#" class="nav-link text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-house-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                            </svg>
                        </a>
                    </li>
                    <li class="text-center">
                        <a href="#" class="nav-link text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-sliders" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
                            </svg>
                        </a>
                    </li>
                    <li class="text-center">
                        <a href="#" class="nav-link text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <button class="btn btn-outline-success fw-bold" type="submit" data-bs-toggle="modal"
                    data-bs-target="#loginModal">Đăng
                    nhập</button>

                <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-body">
                                <form>
                                    <h3 class="text-center">Read Habit</h3>
                                    <div class="mb-3">
                                        <label for="loginInputUsername" class="form-label">Tài khoản</label>
                                        <input type="email" class="form-control" id="loginInputUsername"
                                            aria-describedby="emailHelp" placeholder="Tài khoản">
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="loginInputPassword" class="form-label">Mật khẩu</label>
                                        <input type="password" class="form-control" id="loginInputPassword"
                                            placeholder="Mật khẩu">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="loginCheck">
                                        <label class="form-check-label" for="loginCheck">Check me out</label>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" id="loginButton" class="btn btn-primary">Đăng nhập</button>
                                    </div>
                                    <div id="other-option">
                                        <a href="#">Quên mật khẩu?</a>
                                        hoặc
                                        <a href="#">Đăng ký</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <button type="button" class="btn btn-dark fw-bold" data-bs-toggle="modal"
                    data-bs-target="#registerModal">Đăng
                    ký</button>

                <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">

                            <div class="modal-body">
                                <form>
                                    <h3 class="text-center">Read Habit</h3>
                                    <div class="mb-3">
                                        <label for="registerInputUsername" class="form-label">Tài khoản</label>
                                        <input class="form-control" id="registerInputUsername" aria-describedby="emailHelp"
                                            placeholder="Tài khoản">
                                    </div>
                                    <div class="mb-3">
                                        <label for="registerInputEmail" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="registerInputEmail"
                                            aria-describedby="emailHelp" placeholder="Email">
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="registerInputPassword" class="form-label">Mật khẩu</label>
                                        <input type="password" class="form-control" id="registerInputPassword"
                                            placeholder="Mật khẩu">
                                    </div>
                                    <div class="mb-3">
                                        <label for="registerInputRepeatPassword" class="form-label">Lặp lại mật khẩu</label>
                                        <input type="password" class="form-control" id="registerInputRepeatPassword"
                                            placeholder="Lặp lại mật khẩu">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="registerCheck">
                                        <label class="form-check-label" for="registerCheck">Check me out</label>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" id="registerButton" class="btn btn-primary">Đăng ký</button>
                                    </div>
                                    <div id="other-option">
                                        Đã có tài khoản?
                                        <a href="#">Đăng nhập ngay</a>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <hr>
</template>

<style>
svg:hover {
    color: rgb(160, 160, 160);
}
</style>