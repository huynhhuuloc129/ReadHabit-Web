<template>
    <img src="../assets/Cover.jpg" style="position: absolute; z-index: -1; width: 100vw; max-height: 100vh; right: 0;"/>
    <HeaderComponent text-color="white"></HeaderComponent>
    <SidebarComponent text-color="white"></SidebarComponent>

    <div class="first-section container-fluid">
        <!-- <div class="row"> -->
            <div class="first-header">
                <br>
                <div class="d-flex justify-content-start flex-column">
                    <!-- <a class="btn btn-lg cover-btn" href="#" >
                        <h2 class="fw-bold text-white" style="padding: 10px 5px 5px 5px;">Bắt đầu</h2>
                    </a> -->
                    <h1 class="text-white" style="margin-left: 40px; font-size: 70px;">Start reading today</h1>

                </div>
            </div>

            <!-- <div class="col-md-9"> -->
                <!-- <img id="image-cover" src="../assets/Cover.jpg" class="float-end" alt=""> -->
            <!-- </div>
        </div> -->
    </div>
    <div class="container" style="margin-top: 30px;">

        <div>
            <form class="form-inline my-sm-0 d-flex justify-content-center">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

        <div>
            <div class="row">
                <div>
                    <div class="list-group d-flex flex-row" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list"
                            href="#list-home" role="tab" aria-controls="list-home" style="border-radius: 10px 0 0 10px;">Bài
                            viết</a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list"
                            href="#list-profile" role="tab" aria-controls="list-profile"
                            style="border-radius: 0 10px 10px 0px;">Blog cá nhân</a>
                    </div>
                </div>
                <div class="display-4 font-weight-bolder">Phổ biến nhất</div>
            </div>
        </div>

        <div class="d-flex flex-row flex-wrap justify-content-center">
            <CardComponent></CardComponent>
        </div>

    </div>
</template>

<script setup lang="ts">
import CardComponent from "../components/CardComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SidebarComponent from "@/components/SidebarComponent.vue";
</script>

<style>
body {
    /* background-color: rgb(245, 239, 239); */
}

h1 {
    color: black;
}

hr {
    margin: 0px 0px 15px 0px;
}

#loginButton,
#registerButton {
    width: 100%;
    margin-bottom: 20px;
}

.d-flex {
    justify-content: center;
}

#list-home-list,
#list-profile-list {
    margin-top: 20px;
    font-weight: bold;
    width: 150px;
}

#list-home-list {
    text-align: right;
}

#other-option {
    text-align: center;
}
#image-cover{
    width: 78vw;
}


.cover-btn{
    margin-right: 20px;
    color: #fff;
    background: transparent;
    font-size: 22px;
    font-weight: 400;
    font-style: italic;
    padding: 3px 15px;
    border-radius: 0;
    border: 2px solid rgba(255,255,255,0.2);
    box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.3), 8px 8px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
}
.cover-btn:hover{
    color: #fff;
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.4);
    border-color: #fff;
    transform:scale(1.1);
}
.cover-btn span{ display: block; }
.cover-btn:before,
.cover-btn:after,
.cover-btn span:before,
.cover-btn span:after{
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
.cover-btn:after{
    top: auto;
    bottom: -2px;
}
.cover-btn span:before,
.cover-btn span:after{
    height: 50%;
    width: 2px;
    top: 25%;
    left: -2px;
}
.cover-btn span:after{
    left: auto;
    right: -2px;
}
.cover-btn:hover:before,
.cover-btn:hover:after,
.cover-btn:hover span:before,
.cover-btn:hover span:after{
    opacity: 1;
    visibility: visible;
}
.cover-btn:hover:before{ left: 0; }
.cover-btn:hover:after{ left: 50%; }
.cover-btn:hover span:before{ top: 50%; }
.cover-btn:hover span:after{ top: 0; }
@media only screen and (max-width: 767px){
    .cover-btn{ margin-bottom: 20px; }
}
.first-header{
    height: 100vh;
}
.first-section{
    background-image: url("./../assets/Cover.jpg");
    background-size: 100vw 110vh;
    background-repeat: no-repeat;
    background-position: right;
}
</style>