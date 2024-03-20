<template>
    <img src="../assets/Cover.jpg" style="position: absolute; z-index: -1; width: 100vw; max-height: 100vh; right: 0;"/>
    <Suspense>
        <HeaderComponent text-color="white"></HeaderComponent>
        <template #fallback>
            
        </template>
    </Suspense>
    <Suspense>

        <SidebarComponent text-color="white"></SidebarComponent>
    </Suspense>

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
    <div class="" style="margin: 30px 10px 10px 20px; ">

        <div>
            <form class="form-inline my-sm-0 d-flex justify-content-center">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        
        <div class="d-flex flex-row flex-wrap justify-content-center">
            <div>
                <div v-for="(category, index) in categories" :key="category.id">
                    <div :id="category.name" class="display-4 font-weight-bolder m-5 text-start w-100 float-start">{{ category.name }}</div>
                    <CardComponent :posts="VisiblePost(index)"></CardComponent>
                    <button @click="postVisibles[index] += steps[index]" v-if="postVisibles[index] < posts[index].length"
                     class="btn moreBtn" style="width: 31%; border-radius: 50px; border: 2px solid #2B517A; margin-left: 10px;">
                        Xem thêm >> 
                    </button>
                </div>
            </div>
            <div class="sidebarCate sticky-top" style="margin: 50px 0 0px 20px; max-height: 100vh; width: 350px; overflow-y: scroll;">
                <br>
                <h3>Thể loại</h3>
                <a @click="changeCategory(category.id)" :href="'#'+category.name" class="category" v-for="category in categories" :key="category.id" style="text-decoration: none; display: block;">
                        {{ category.name }}
                </a>
                <div class="w-100 d-flex justify-content-center">
                    <button class="btn btn-light w-100">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
                        </svg>
                    </button>
                </div>
                <hr>
                <h3>Nhãn</h3>
                <div class="d-flex" style="flex-wrap: wrap; justify-content: start;">
                    <div class="btn-group" style="margin-bottom: 30px; flex-wrap: wrap;" role="group" aria-label="Basic checkbox toggle button group">
                        <div v-for="tag in filterTagsByCategoryId()" :key="tag.id">
                            <input type="checkbox" class="btn-check" :id="'btncheck' + tag.id" autocomplete="off">
                            <label class="btn btn-outline-secondary" :for="'btncheck' + tag.id">{{ tag.name }}</label>
                        </div>
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
import CardComponent from "../components/CardComponent.vue";
import categoriesService from "@/services/categories.service";
import postsService from "@/services/posts.service";
import tagsService from "@/services/tags.service";
import checkLogin from "@/utilities/utilities";
import { onMounted, ref } from "vue";

const categories = ref([
    {
        id: 0,
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        imageURL: null
    }
])

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
    category: {
        id: 1,
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        imageURL: null
    },
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
    categories: [{
        id: 0,
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        imageURL: null
    }]
})

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
    category: {
        id: 0,
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        imageURL: null
    }
}])
var postVisibles = ref([] as number[])
var steps = ref([] as number[])
const categoryId = ref(0)
const isLogin = ref(false)

try {
    currentUser.value = await checkLogin();
    if (currentUser.value !== null && currentUser.value['id'] !== null) {
        isLogin.value = true;
    }
} catch (err) {
    console.log(err)
}
// filter posts
function VisiblePost(position: number){
    return posts.value[position].slice(0, postVisibles.value[position])
}

// filter tags
function filterTagsByCategoryId(): typeof tags.value{
    return tags.value.filter((tag) =>tag.category.id == categoryId.value)
}

function changeCategory(cId: number){
    categoryId.value = cId
}

onMounted(async () => {
    try {
        //tag
        let respTags = await tagsService.getAll()
        tags.value = respTags.data

        //category
        if (isLogin.value){
            categories.value = currentUser.value.categories;
        } else {
            let respTemp = await categoriesService.getAll()
            categories.value = respTemp.data;
        }
        categoryId.value = categories.value[0].id
        //post
        let resp = await postsService.getAll(0, 0, 'published');
        
        for(let i =0; i< categories.value.length; i++ ){
            let arr: typeof resp.data =  []
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
  background-color: #ffffff; 
  border-radius: 5px; 
} 
.category:hover{
    background-color: rgb(205, 205, 205);
    cursor: pointer;
    text-decoration: underline;
    border-left: 10px solid rgb(234, 234, 237);
}
.category{
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
.moreBtn:hover{
    color: white;
    background-color: #2B517A;
}
</style>