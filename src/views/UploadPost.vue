<template>
    <Suspense>
        <HeaderComponent text-color="black"></HeaderComponent>
        <template #fallback>

        </template>
    </Suspense>
    <Suspense>
        <SidebarComponent text-color="black"></SidebarComponent>
    </Suspense>

    <div class="d-flex p-lg-5">
        <div class="btn-group btn-group-vertical justify-content-start d-flex flex-column sticky-top"
            style="width: 13vw; margin-right: 50px; height: 50vh;" role="group"
            aria-label="Basic radio toggle button group">
            <div class="w-100" style="margin-bottom: 20px;">
                <input @click="clearForm()" type="radio" class="btn-check" name="btnradio" id="clear" autocomplete="off"
                    :value="0" checked>
                <label class="btn btn-outline-danger w-100" for="clear">Mới</label>
            </div>
            <h5 class="text-center" v-if="posts.length > 0">Các bài viết đang được chỉnh sửa</h5>
            <div v-for="(post, index) in posts" :key="post.id" class="w-100">
                <input @click="changeForm(post.id); choosenCreatedPostIndex = index; choosenCreatedPostId = post.id"
                    type="radio" class="btn-check" name="btnradio" :id="'btnradio' + post.id" autocomplete="off"
                    :value="post.id">
                <label class="btn btn-outline-dark w-100" :for="'btnradio' + post.id">{{ post.title }}</label>
            </div>

            <h5 class="" style="margin-top: 20px;" v-if="postsReviewing.length > 0">Bài viết chờ
                duyệt </h5>
            <div v-for="(post, index) in postsReviewing" :key="post.id" class="w-100" style="margin-bottom: 5px">
                <input @click="changeForm(post.id); choosenCreatedPostIndex = index; choosenCreatedPostId = post.id"
                    type="radio" class="btn-check" name="btnradio" :id="'btnradio' + post.id" autocomplete="off"
                    :value="post.id">
                <label class="btn btn-outline-dark w-100" :for="'btnradio' + post.id">{{ post.title }}</label>
            </div>
        </div>

        <form style="width: 70vw;">

            <label for="selectCategory">Thể loại của bài viết</label>
            <select v-model="editPostForm.categoryId" id="selectCategory" class="form-select"
                aria-label="Default select example" required>
                \ <option v-for="cate in categories" :key="cate.id" :value="cate.id">
                    <span>{{ cate.name }}</span>
                </option>
            </select>

            <div>
                <div v-if="filterTagsByCategoryId().length > 0">Nhãn bài viết</div>
                <div class="btn-group" style="margin-bottom: 30px; flex-wrap: wrap;" role="group"
                    aria-label="Basic checkbox toggle button group">
                    <div v-for="(tag, index) in filterTagsByCategoryId()" :key="tag.id"
                        style="margin-right: 5px; margin-bottom: 5px;">
                        <input v-model="trackingTags[index]" type="checkbox" class="btn-check" :id="'btncheck' + tag.id"
                            autocomplete="off">
                        <label class="btn btn-outline-secondary" :for="'btncheck' + tag.id">{{ tag.name }}</label>
                    </div>
                </div>
            </div>
            <!-- <div class="d-flex">
                <div class="w-50">
                    <div>Nguồn bài viết</div>
                    <select v-model="editPostForm.contentSourceId"  class="form-select" aria-label="Default select example">
                        <option selected>Nguồn bài viết (Không bắt buộc )</option>
                        <option v-for="cs in contentSources" :key="cs.id" :value="cs.id" :style="{'background-image': 'url(' + cs.avatar + ')'}">
                            <span>{{ cs.name }}</span>
                        </option>
                    </select>
                </div>
                <div class='w-50'>
                    <label for="originalLink">Link bài viết gốc (Nếu có)</label>
                    <input style="margin-bottom: 20px;" v-model="editPostForm.originalLink" id="originalLink" type="text" class="form-control" >
                </div>
            </div> -->


            <label for="titlePost" style="font-size: 30px;">Tiêu đề bài viết</label>
            <input v-model="editPostForm.title" id="titlePost" type="text" class="form-control" required>

            <div class="mb-3 text-center d-flex flex-column justify-content-center" style="margin: 50px 0 50px 0">
                <img v-if="editPostForm.imageCover[0] == 'f'" style="margin-bottom: 50px;" class="img-thumbnail"
                    width="500px" :src="'http://localhost:8080' + editPostForm.imageCover.replace('files', '')" alt="">

                <label for="formFile" class="form-label">File ảnh bìa bài viết</label>
                <input @change="previewFile($event)" class="form-control" type="file" id="formFile">
            </div>

            <div style="height: 550px;">
                <div style="height: 450px">
                    Nội dung bài viết:
                    <QuillEditor v-model:content="content" contentType="html" toolbar="full"></QuillEditor>

                </div>
            </div>
            <div class="d-flex justify-content-end" v-if="isLogin">
                <button class="m-1 btn btn-danger" @click="updatePost($event, 'reviewing')" style="padding: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-upload" viewBox="0 0 16 16">
                        <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path
                            d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    Yêu cầu xuất bản
                </button>
                <button class="m-1 btn btn-primary" @click="updatePost($event, 'created')" style="padding: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-file-earmark-check-fill" viewBox="0 0 16 16">
                        <path
                            d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                    </svg>
                    Lưu
                </button>
                <button class="m-1 btn btn-secondary" @click="removePost()" style="padding: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-trash" viewBox="0 0 16 16">
                        <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                        <path
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                    </svg>
                    Hủy bỏ
                </button>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
//@ts-ignore
import SidebarComponent from '@/components/SidebarComponent.vue';
import contentSourcesService from '@/services/contentSources.service';
import categoriesService from '@/services/categories.service';
import postsService from '@/services/posts.service';
import tagsService from '@/services/tags.service';
import { onMounted, ref } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import checkLogin from '@/utilities/utilities';
import { useCookies } from 'vue3-cookies';
import { toast } from 'vue3-toastify';
const categories = ref([
    {
        id: '',
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: '',
        imageURL: null
    }
])

const fileImage = ref({})
const content = ref('')
const tags = ref([
    {
        id: 0,
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        categoryId: 0,
        createdById: 0,
        posts: [
            {
                id: '',
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
                contentSourceId: ''
            }
        ],
        category: {
            id: 0,
            createdAt: "",
            updatedAt: "",
            deletedAt: null,
            name: "",
            imageURL: null
        }
    }
])

const contentSources = ref([
    {
        id: '',
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        avatar: "",
        posts: [
            {
                id: '',
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
                contentSourceId: ''
            }
        ]
    }
])

type postType = {
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
    tags: [
        {
            id: 0,
            createdAt: "",
            updatedAt: "",
            deletedAt: null,
            name: "",
            categoryId: 0,
            createdById: 0,
            isLock: false
        }
    ]
}

const posts = ref([{} as postType])
const postsReviewing = ref([{} as postType])
const postAllUser = ref([{} as postType])

const choosenCreatedPostId = ref(0)
const choosenCreatedPostIndex = ref(0)

const editPostForm = ref({
    postId: 0,
    categoryId: 0,
    tag: [] as string[],
    contentSourceId: 0,
    title: '',
    imageCover: '',
    content: '',
    originalLink: '',
})

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
const isLogin = ref(false)
const cookies = useCookies();
const tokenBearer = cookies.cookies.get('Token');
const trackingTags = ref({} as Record<number, boolean>)

try {
    currentUser.value = await checkLogin();
    if (currentUser.value !== null && currentUser.value['id'] !== null) {
        isLogin.value = true;
    }
} catch (err) {
    console.log(err)
}

async function changeForm(id: number) {
    postAllUser.value.forEach((post) => {
        if (post.id == id) {
            console.log(post.imageURL)
            editPostForm.value.postId = post.id
            editPostForm.value.categoryId = post.categoryId
            editPostForm.value.title = post.title
            editPostForm.value.contentSourceId = post.contentSourceId
            fileImage.value = post.imageURL
            editPostForm.value.imageCover = post.imageURL
            editPostForm.value.content = post.content
            editPostForm.value.originalLink = post.originalPostURL
            content.value = post.content
            for (let i = 0; i < filterTagsByCategoryId().length; i++) {
                trackingTags.value[i] = false
            }

            post.tags.forEach(tag => {
                for (let j = 0; j < filterTagsByCategoryId().length; j++) {
                    if (filterTagsByCategoryId()[j].id == tag.id) {
                        trackingTags.value[j] = true
                    }
                }
            });
        }
    })
}

function previewFile(e: any) {
    fileImage.value = e.target.files[0]
    console.log(fileImage.value)
}

function clearForm() {
    for (let index in trackingTags.value) {
        trackingTags.value[index] = false
    }
    content.value = ''
    choosenCreatedPostId.value = 0
    editPostForm.value.categoryId = 0
    editPostForm.value.title = ''
    editPostForm.value.contentSourceId = 0
    editPostForm.value.imageCover = 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
    editPostForm.value.content = ''
    editPostForm.value.originalLink = ''
}

function filterTagsByCategoryId() {
    const tagsTemp = tags.value.filter((tag) => tag.category.id == editPostForm.value.categoryId)
    return tagsTemp
}

async function updatePost(e: any, status: string) {
    e.preventDefault();
    try {
        if (content.value == '') {
            toast.warning("Vui lòng nhập nội dung", {
                autoClose: 2000,
            })
            throw new Error('saf')
        }
        let tagsName = [] as string[]
        for (let index in trackingTags.value) {
            if (trackingTags.value[index]) {
                tagsName.push(filterTagsByCategoryId()[index].name)
            }
        }

        console.log(tagsName)

        if (choosenCreatedPostId.value == 0) {
            await postsService.create(editPostForm.value.categoryId, tagsName, 0, editPostForm.value.title, content.value, '', status, 'internal_post', fileImage.value, tokenBearer)
            toast.success("Đã tạo bài viết thành công", {
                autoClose: 2000,
            })
        }
        else {
            await postsService.update(editPostForm.value.postId, editPostForm.value.categoryId, tagsName, 0, editPostForm.value.title, content.value, '', status, 'internal_post', fileImage.value, tokenBearer)
            toast.success("Đã cập nhật bài viết thành công", {
                autoClose: 2000,
            })
        }


        window.location.reload();
    } catch (err) {
        console.log(err);
    }
}

async function removePost() {
    try {
        await postsService.delete(choosenCreatedPostId.value, tokenBearer)
        posts.value.splice(choosenCreatedPostIndex.value, 1)
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    try {
        // Post all user
        let pAll = await postsService.getAllForUser(currentUser.value.id);
        postAllUser.value = pAll.data

        // Post
        let p = await postsService.getAllStatusForUser(currentUser.value.id, 'created');
        posts.value = p.data

        clearForm()

        // Post reviewing
        let pR = await postsService.getAllStatusForUser(currentUser.value.id, 'reviewing');
        postsReviewing.value = pR.data

        // categories
        let ts = await tagsService.getAll();
        let cats = await categoriesService.getAll();
        let cs = await contentSourcesService.getAll();

        tags.value = ts.data
        categories.value = cats.data
        contentSources.value = cs.data
    } catch (err) {
        console.log(err);
    }
})

</script>
<style>
.form-select {
    margin-bottom: 40px;
}
</style>