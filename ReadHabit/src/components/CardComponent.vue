<template>
    <div class="card-component">
        <div class="card-columns">
            <div class="card">
                <div class="first-card-section d-flex flex-row justify-content-between">
                    <div class="d-flex flex-row">
                        <i class="far fa-user"></i>
                        <span>admin</span>
                    </div>
                    <button class="visit-btn btn btn-outline-success" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Đọc
                        ngay</button>
                </div>
                <h5 class="card-title">Lorem ipsum dolor sit amet.</h5>
                <img src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
                    alt="Card image cap">
                <div class="card-body">
                    <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad alias, aliquid amet
                        aspernatur atque culpa cum debitis dicta doloremque, dolorum ea eos et excepturi explicabo
                        facilis harum illo impedit incidunt laborum laudantium...
                    </p>
                    <p class="card-text">
                        <small class="text-muted">
                            <div class="flex">
                                <div class="d-flex flex-row">
                                    <i class="fas fa-eye"></i>
                                    <span>1000</span>
                                </div>
                                <div class="d-flex flex-row">
                                    <i class="fas fa-calendar-alt"></i>
                                    <span>Jan 20, 2018</span>
                                </div>
                            </div>
                        </small>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
h1 {
    color: #fff;
    padding: 10px 0;
}

.card-component {
    margin-top: 50px;
}

.visit-btn {
    border-radius: 0px;
}

@keyframes slideInFromRight {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes slideOutToRight {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
}

.modal {
    position: absolute;
    animation: slideInFromRight 0.3s ease-out;
    animation-duration: 0.3s;

    /* right: 0; */
}

.modal-dialog {
    left: calc(100vw - 500px);
    margin: 0;
}

.modal-content {
    height: 100vh;
}

.card {
    background-color: rgb(251, 235, 235);
    margin: 0px 20px 0px 20px;
    width: 284px;
    padding: 10px 10px 0 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border: none;
    border-radius: 0px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    }

    a {
        color: initial;

        &:hover {
            text-decoration: initial;
        }
    }


}

span {
    margin: 10px;
}

.flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.visit-btn {
    margin-bottom: 10px;
    font-weight: bold;
    text-transform: capitalize;
    font-style: italic;
    padding: 2px 15px 3px 15px;
    border-radius: 0;
    border: 2px solid rgba(255, 255, 255, 1);
    box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.5), 8px 8px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
}

.visit-btn:hover {
    color: #fff;
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.4);
    border-color: #fff;
    transform: scale(1.1);
}

.visit-btn span {
    display: block;
}

.visit-btn:before,
.visit-btn:after,
.visit-btn span:before,
.visit-btn span:after {
    content: '';
    background-color: #fff;
    width: 50%;
    height: 2px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 25%;
    top: -2px;
    transition: all 0.3s ease 0s;
}

.visit-btn:after {
    top: auto;
    bottom: -2px;
}

.visit-btn span:before,
.visit-btn span:after {
    height: 50%;
    width: 2px;
    top: 25%;
    left: -2px;
}

.visit-btn span:after {
    left: auto;
    right: -2px;
}

.visit-btn:hover:before,
.visit-btn:hover:after,
.visit-btn:hover span:before,
.visit-btn:hover span:after {
    opacity: 1;
    visibility: visible;
}

.visit-btn:hover:before {
    left: 0;
}

.visit-btn:hover:after {
    left: 50%;
}

.visit-btn:hover span:before {
    top: 50%;
}

.visit-btn:hover span:after {
    top: 0;
}

@media only screen and (max-width: 767px) {
    .visit-btn {
        margin-bottom: 20px;
    }
}
</style>