<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">ReadHabit</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <button class="btn btn-outline-success" type="submit" data-bs-toggle="modal"
                    data-bs-target="#loginModal">Đăng nhập</button>

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

                <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#registerModal">Đăng
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
    </nav>
    <hr>
</template>