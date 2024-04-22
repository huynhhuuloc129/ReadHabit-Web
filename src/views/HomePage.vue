<template>
    <div>
        <!-- <img src="../assets/Cover.jpg"
            style="position: absolute; z-index: -1; width: 100vw; max-height: 100vh; right: 0;" /> -->
        <Suspense>
            <HeaderComponent text-color="white"></HeaderComponent>
            <template #fallback>

            </template>
        </Suspense>
        <Suspense>

            <SidebarComponent text-color="white"></SidebarComponent>
        </Suspense>

        <div class="first-section container-fluid">
            <div class="first-header">
                <br>
                <div class="d-flex justify-content-start flex-column">

                    <h1 id="h1-mainpage" class="text-white">Start reading today</h1>

                </div>
            </div>
        </div>
        <div class="" style="margin: 0px 10px 10px 20px;">

            <div>
                <div class="card widget-card border-light w-100">
                    <div class="card-body p-4  d-flex justify-content-center flex-column align-items-center">
                        <ul class="nav nav-tabs " id="profileTab" role="tablist">

                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="overview-tab" data-bs-toggle="tab"
                                    data-bs-target="#overview-tab-pane" type="button" role="tab"
                                    aria-controls="overview-tab-pane" aria-selected="true">
                                    Tổng quan
                                </button>
                            </li>

                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="post-tab" data-bs-toggle="tab"
                                    data-bs-target="#post-tab-pane" type="button" role="tab"
                                    aria-controls="post-tab-pane" aria-selected="false" @click="getFeedPost()">
                                    Bảng tin
                                </button>
                            </li>

                        </ul>

                        <div class="tab-content pt-4" id="profileTabContent">

                            <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel"
                                aria-labelledby="overview-tab" tabindex="0">

                                <div class="d-flex flex-row flex-wrap justify-content-center">


                                    <div id="card-post">
                                        <div v-for="(category, index) in categories" :key="category.id">
                                            <h1 :id="category.name"
                                                class="font-weight-bolder text-start w-100 float-start"
                                                style="font-weight: 500; margin: 30px 0 20px 20px;">{{
                                                    category.name }}</h1>
                                            <CardComponent :posts="VisiblePost(index)"></CardComponent>
                                            <h5 v-if="posts[index].length == 0" class="text-secondary"
                                                style="margin-left: 20px;">Không có bài viết nào thuộc thể loại này</h5>
                                            <button @click="postVisibles[index] += steps[index]"
                                                v-if="postVisibles[index] < posts[index].length" class="btn moreBtn"
                                                style=" border-radius: 50px; border: 2px solid #2B517A; margin-left: 10px;">
                                                Xem thêm >>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="sidebarCate sticky-top"
                                        style="margin: 50px 0 0px 20px; max-height: 100vh; width: 350px; overflow-y: scroll;">
                                        <br>
                                        <h3>Thể loại</h3>
                                        <a @click="changeCategory(category.id)" v-for="category in categories"
                                            :key="category.id" :href="'#' + category.name" class="category"
                                            style="text-decoration: none; display: block;">
                                            {{ category.name }}
                                        </a>
                                        <div class="w-100 d-flex justify-content-center">
                                            <button class="btn btn-light w-100" data-bs-toggle="modal"
                                                data-bs-target="#modalC">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                                    <path
                                                        d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                                                </svg>
                                            </button>

                                        </div>
                                        <hr>
                                        <h3>Nhãn</h3>
                                        <div id="tag-homepage" class="d-flex"
                                            style="flex-wrap: wrap; justify-content: start;">
                                            <div class="btn-group" style="margin-bottom: 30px; flex-wrap: wrap;"
                                                role="group" aria-label="Basic checkbox toggle button group">
                                                <div v-if="filterTagsByCategoryId().length == 0" class="text-secondary">
                                                    Không có
                                                    nhãn nào của thể loại này</div>
                                                <div v-for="tag in filterTagsByCategoryId()" :key="tag.id">
                                                    <a :href="'http://localhost:5173/tag/' + tag.id">
                                                        <button class="btn btn-outline-secondary">
                                                            {{ tag.name }}
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="post-tab-pane" role="tabpanel" aria-labelledby="post-tab"
                                tabindex="0">
                                <div class="d-flex" style="margin-bottom: 20px;">

                                    <VueDatePicker v-model="date" range :preset-dates="presetDates">
                                        <template #preset-date-range-button="{ label, value, presetDate }">
                                            <span role="button" :tabindex="0" @click="presetDate(value)"
                                                @keyup.enter.prevent="presetDate(value)"
                                                @keyup.space.prevent="presetDate(value)">
                                                {{ label }}
                                            </span>
                                        </template>
                                    </VueDatePicker>

                                    <button class="btn btn-primary" style="margin-left: 10px;">Lọc</button>
                                </div>

                                <CardTagComponent :posts="VisibleFeedPost()"></CardTagComponent>
                                <div class="align-items-center w-100 d-flex">
                                    <button class="btn moreBtn" @click="feedVisibles += stepsFeed"
                                        v-if="feedVisibles < VisibleFeedPost().length"
                                        style="width: 31%; border-radius: 50px; border: 2px solid #2B517A; margin-left: 10px;">
                                        Xem thêm >>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <!--  -->


        </div>

        <div id="modalC" class="modal fade" tabindex="-1" aria-labelledby="editBookmarkModelLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <div id="d-flex flex-column">
                            <h5>Danh sách tất cả thể loại</h5>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-check" v-for="category in allCategories" :key="category.id">
                            <input v-model="trackingCategories[category.id]" class="form-check-input" type="checkbox"
                                id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{ category.name }}
                            </label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="updateCategory()" class="btn btn-primary">Cập nhật</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
// @ts-ignore 
import SidebarComponent from "@/components/SidebarComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import CardTagComponent from "@/components/CardTagComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import categoriesService from "@/services/categories.service";
import usersService from "@/services/users.service";
import postsService from "@/services/posts.service";
import tagsService from "@/services/tags.service";
import checkLogin from "@/utilities/utilities";
import { useCookies } from "vue3-cookies";
import { toast } from "vue3-toastify";
import { onMounted, ref } from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';

const date = ref();

const presetDates = ref([
    { label: 'Hôm nay', value: [new Date(), new Date()] },

    { label: 'Tháng này', value: [startOfMonth(new Date()), endOfMonth(new Date())] },
    {
        label: 'Tháng trước',
        value: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
    },
    { label: 'Năm nay', value: [startOfYear(new Date()), endOfYear(new Date())] },
]);


const cookies = useCookies();
const tokenBearer = cookies.cookies.get('Token');

type categoryType = {
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    name: "",
    imageURL: null
}

const posts = ref([[{
    id: 1,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    title: "",
    content: "",
    sharePostId: null,
    originalPostURL: "",
    publishDate: "",
    imageURL: "",
    status: "",
    type: "",
    readTime: '',
    totalLike: '',
    totalDislike: '',
    totalShare: '',
    categoryId: '',
    createdById: '',
    contentSourceId: '',
    tags: [
        {
            id: '',
            createdAt: "",
            updatedAt: "",
            deletedAt: null,
            name: "",
            categoryId: '',
            createdById: ''
        }
    ],
    contentSource: {
        id: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        avatar: ""
    },
    category: {} as categoryType,
    createdBy: {
        id: '',
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        email: "",
        password: "",
        username: "",
        firstName: "",
        lastName: "",
        fullName: "",
        refreshToken: null,
        phoneNumber: "",
        birthday: "",
        avatar: "",
        role: ""
    },
    sharePost: null,
    sharedByPosts: [],
    comments: []
}]])

const currentUser = ref({
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    fullName: "",
    about: null,
    youtubeLink: null,
    facebookLink: null,
    linkedinLink: null,
    twitterLink: null,
    totalFollower: 0,
    totalFollowee: 0,
    refreshToken: null,
    phoneNumber: "",
    birthday: "",
    avatar: "",
    role: "",
    categories: [{} as categoryType]
})
const categories = ref([{} as categoryType])
const trackingCategories = ref({} as Record<number, boolean>)
const allCategories = ref([{} as categoryType])

const tags = ref([{
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    name: "",
    categoryId: 0,
    createdById: 0,
    posts: [
        {
            id: 0,
            createdAt: "",
            updatedAt: "",
            deletedAt: null,
            title: "",
            content: "",
            sharePostId: null,
            originalPostURL: "",
            publishDate: "",
            imageURL: "",
            status: "",
            type: "",
            readTime: 0,
            totalLike: 0,
            totalDislike: 0,
            totalShare: 0,
            categoryId: 0,
            createdById: 0,
            contentSourceId: 0
        },
    ],
    category: {} as categoryType
}])

var postVisibles = ref([] as number[])
var steps = ref([] as number[])

var feedVisibles = ref(6)
var stepsFeed = ref(5)

const categoryId = ref(0)
const isLogin = ref(false)
const postFeed = ref([{
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    title: "",
    content: "",
    sharePostId: null,
    originalPostURL: "",
    publishDate: "",
    imageURL: "",
    status: "",
    type: "",
    readTime: '',
    totalLike: '',
    totalDislike: '',
    totalShare: '',
    categoryId: '',
    createdById: '',
    contentSourceId: '',
    tags: [
        {
            id: '',
            createdAt: "",
            updatedAt: "",
            deletedAt: null,
            name: "",
            categoryId: '',
            createdById: ''
        }
    ],
    contentSource: {
        id: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        avatar: ""
    },
    category: {} as categoryType,
    createdBy: {
        id: '',
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        email: "",
        password: "",
        username: "",
        firstName: "",
        lastName: "",
        fullName: "",
        refreshToken: null,
        phoneNumber: "",
        birthday: "",
        avatar: "",
        role: ""
    },
    sharePost: null,
    sharedByPosts: [],
    comments: []
}]
)

try {
    currentUser.value = await checkLogin();
    if (currentUser.value !== null && currentUser.value['id'] !== null) {
        isLogin.value = true;
    }
} catch (err) {
    console.log(err)
}

const notifyUpdateCategory = () => {
    toast.success("Đã cập nhật!", {
        autoClose: 1000,
    }); // ToastOptions
}

// filter posts
function VisiblePost(position: number) {
    return posts.value[position].slice(0, postVisibles.value[position])
}

function VisibleFeedPost() {
    if (date.value == null) return postFeed.value.slice(0, feedVisibles.value)
    else {
        let postFeedTemp = [] as typeof postFeed.value;
        let startDate = date.value[0].getTime()
        let endDate = date.value[1].getTime()

        postFeed.value.forEach(pf => {
            let publishTime = new Date(pf.publishDate)
            if (publishTime.getTime() >= startDate && publishTime.getTime() <= endDate) {
                postFeedTemp.push(pf)
            }
        });

        return postFeedTemp.slice(0, feedVisibles.value)
    }
}

// filter tags
function filterTagsByCategoryId(): typeof tags.value {
    return tags.value.filter((tag) => tag.category.id == categoryId.value)
}

function changeCategory(cId: number) {
    categoryId.value = cId
}

async function updateCategory() {
    try {
        let cs = [] as number[];
        allCategories.value.forEach((category) => {
            if (trackingCategories.value[category.id]) {
                cs.push(category.id)
                let check = false
                categories.value.forEach((c) => {
                    if (c.id == category.id) check = true
                })

                if (check == false) {
                    categories.value.push(category)
                }
            }
        })
        await usersService.setCategories(currentUser.value.id, cs, tokenBearer)
        notifyUpdateCategory()
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
}

async function getFeedPost() {
    try {
        let tempFeedPost = await postsService.getFeedForCurrentUser(tokenBearer)
        postFeed.value = tempFeedPost.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    try {
        //tag
        let respTags = await tagsService.getAll()
        tags.value = respTags.data

        //category
        let tempAllCate = await categoriesService.getAll();
        allCategories.value = tempAllCate.data;
        allCategories.value.forEach(c => {
            trackingCategories.value[c.id] = false;
        });
        currentUser.value.categories.forEach(c => {
            trackingCategories.value[c.id] = true;
        });

        if (isLogin.value) {
            categories.value = currentUser.value.categories;
        } else {
            let respTemp = await categoriesService.getAll()
            categories.value = respTemp.data;
        }
        categoryId.value = categories.value[0].id
        //post
        let resp = await postsService.getAll(0, 0, 'published');

        for (let i = 0; i < categories.value.length; i++) {
            let arr: typeof resp.data = []
            arr = await postsService.getAllByCategoryId(categories.value[i].id)

            postVisibles.value[i] = 3;
            steps.value[i] = 3;

            let ps: typeof resp.data = [];
            for (const p of arr.data) {
                let post = await postsService.getOne(p.id)
                ps.push(post)
            };
            posts.value[i] = ps
        }
    } catch (err) {
        console.log(err);
    }
})

</script>

<style>
.sidebarCate {
    position: sticky;
    top: 0;
    right: 0;
    width: 250px;
    border-radius: 5px;
}

.category:hover {
    background-color: rgb(205, 205, 205);
    cursor: pointer;
    text-decoration: underline;
    border-left: 10px solid rgb(234, 234, 237);
}

.category {
    padding: 10px;
}

h1 {
    color: black;
}

hr {
    margin: 0px 0px 15px 0px;
}

.d-flex {
    justify-content: center;
}

#list-home-list,
#list-profile-list {
    font-weight: bold;
    width: 150px;
}

#list-home-list {
    text-align: right;
}

#other-option {
    text-align: center;
}

#image-cover {
    width: 78vw;
}

.cover-btn {
    margin-right: 20px;
    color: #fff;
    background: transparent;
    font-size: 22px;
    font-weight: 400;
    font-style: italic;
    padding: 3px 15px;
    border-radius: 0;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.3), 8px 8px 0 rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease 0.1s;
}

.cover-btn:hover {
    color: #fff;
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.4);
    border-color: #fff;
    transform: scale(1.1);
}

.cover-btn span {
    display: block;
}

.cover-btn:before,
.cover-btn:after,
.cover-btn span:before,
.cover-btn span:after {
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

.cover-btn:after {
    top: auto;
    bottom: -2px;
}

.cover-btn span:before,
.cover-btn span:after {
    height: 50%;
    width: 2px;
    top: 25%;
    left: -2px;
}

.cover-btn span:after {
    left: auto;
    right: -2px;
}

.cover-btn:hover:before,
.cover-btn:hover:after,
.cover-btn:hover span:before,
.cover-btn:hover span:after {
    opacity: 1;
    visibility: visible;
}

.cover-btn:hover:before {
    left: 0;
}

.cover-btn:hover:after {
    left: 50%;
}

.cover-btn:hover span:before {
    top: 50%;
}

.cover-btn:hover span:after {
    top: 0;
}

.moreBtn {
    width: 31%;
}

@media only screen and (max-width: 767px) {
    .cover-btn {
        margin-bottom: 20px;
    }
}

#h1-mainpage {
    margin-left: 40px;
    font-size: 70px;
}

.first-header {
    height: 100vh;
}

.first-section {
    background-image: url("./../assets/Cover.jpg");
    background-size: 100vw 110vh;
    background-repeat: no-repeat;
    background-position: right;
}

.moreBtn:hover {
    color: white;
    background-color: #2B517A;
}

@media only screen and (max-width: 1120px) {
    .first-section {
        background-size: auto 100vh;
    }

    .sidebarCate {
        margin-top: 0px;
        position: static;
        order: 1;
        height: 320px;
        width: 100vw;
    }

    #card-post {
        order: 2;
    }
}

@media only screen and (max-width: 600px) {
    .moreBtn {
        width: 50%;
    }

    #h1-mainpage {
        margin-left: 10px;
        font-size: 50px;
    }
}
</style>