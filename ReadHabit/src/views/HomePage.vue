<template>
    <div class="container">

        <div>
            <form class="form-inline my-sm-0 d-flex justify-content-center">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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

</script>

<style>
body {
    background-color: rgb(245, 239, 239);
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
</style>