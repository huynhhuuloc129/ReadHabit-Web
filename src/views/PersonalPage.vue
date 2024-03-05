<template>
    <div class="container">
        <div class="row justify-content-center" style="margin-top: 30px;">
            <div>
                <div class="list-group d-flex flex-row" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-username-list" data-bs-toggle="list"
                        href="#list-username" role="tab" aria-controls="list-username"
                        style="border-radius: 10px 0 0 10px;">Thông tin cá nhân</a>
                    <a class="list-group-item list-group-item-action" id="list-post-list" data-bs-toggle="list"
                        href="#list-post" role="tab" aria-controls="list-post">Bài
                        viết</a>
                    <a class="list-group-item list-group-item-action" id="list-bookmark-list" data-bs-toggle="list"
                        href="#list-bookmark" role="tab" aria-controls="list-bookmark"
                        style="border-radius: 0 10px 10px 0px;">Đánh dấu</a>
                </div>
            </div>
            <div class="col-8">
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-username" role="tabpanel"
                        aria-labelledby="list-username-list">
                        <!-- Username category -->
                        <div>
                            <div class="row">
                                <div class="col avatar-div">
                                    <img class="avatar"
                                        src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                        alt="">
                                    <div>username</div>
                                </div>
                                <div class="col">
                                    <div>20 post</div>
                                    <div>10000 following</div>
                                    <button type="button" class="btn btn-primary">Theo dõi</button>
                                    <br>
                                    <button type="button" class="btn btn-primary">Chỉnh sửa hồ sơ</button>
                                </div>
                                <div class="col">
                                    <div class="card border-dark mb-3" style="max-width: 18rem;">
                                        <div class="card-header">Header</div>
                                        <div class="card-body text-dark">
                                            <h5 class="card-title">Dark card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make
                                                up the bulk of
                                                the
                                                card's content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1>Thể loại</h1>
                            </div>

                            <div>
                                <div class="w-100">
                                    <h1>Các nhãn đã chọn</h1>
                                    <h1>Xếp hạng</h1>
                                </div>
                            </div>
                            <div id="calendar">
                                <h1>Hoạt động</h1>
                                <calendar-heatmap :values="contributionData" :options="options" :end-date=date />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-post" role="tabpanel" aria-labelledby="list-post-list">
                        <!-- Post category -->
                        <h6>Tổng kết</h6>
                        <div class="card border-dark mb-3" style="max-width: 18rem;">
                            <div class="card-header">Header</div>
                            <div class="card-body text-dark">
                                <h5 class="card-title">Dark card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make
                                    up the bulk of
                                    the
                                    card's content.</p>
                            </div>
                        </div>
                        <div class="container h-100">
                            <div class="d-flex justify-content-center h-100">
                                <div class="searchbar">
                                    <input class="search_input" type="text" name="" placeholder="Search...">
                                    <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row w-100">
                            <CardComponent></CardComponent>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="list-bookmark" role="tabpanel" aria-labelledby="list-bookmark-list">
                        <!-- Bookmarks category -->
                        <CardComponent></CardComponent>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardComponent from '@/components/CardComponent.vue';
const date = new Date(2018, 6, 1);
const contributionData = [
    { date: new Date(2017, 6, 1), count: 2 }, // February 1st, 2 contributions
    // ... add more objects for other days
];
const options = {
    weekLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdayStart: 1, // Start week on Monday
    color: (count: any) => {
        if (count === 0) return 'white';
        if (count > 5) return 'red';
        return `hsl(${count * 20}, 100%, 50%)`; // Custom color based on count
    },
};

</script>
<style>
#calendar {
    margin: auto;
    width: 800px;
}

.list-group-item {
    text-align: center;
    font-weight: bold;
    width: 200px;
}

.avatar {
    width: 200px;
    height: 200px;
}

.avatar-div {
    width: 300px;
}


.searchbar {
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
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
    caret-color: red;
    transition: width 0.4s linear;
}

.searchbar:hover>.search_icon {
    background: white;
    color: #e74c3c;
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
</style>