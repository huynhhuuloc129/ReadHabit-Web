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
        <div class="btn-group btn-group-vertical justify-content-start d-flex flex-column" style="width: 13vw; margin-right: 50px;" role="group" aria-label="Basic radio toggle button group">
            <h5>Các bài viết đang được chỉnh sửa</h5>
            <div v-for="(post, index) in posts" :key="post.id" class="w-100">
                <input @click="changeForm(post.id); choosenCreatedPostIndex = index" type="radio" class="btn-check" name="btnradio" :id="'btnradio'+post.id" autocomplete="off" :value="post.id">
                <label class="btn btn-outline-dark w-100" :for="'btnradio'+post.id">{{ post.title }}</label>
            </div>
            <div class="w-100" style="margin-top: 20px;">
                <input v-model="choosenCreatedPostId" @click="clearForm()" type="radio" class="btn-check" name="btnradio" id="clear" autocomplete="off" :value="0">
                <label class="btn btn-outline-danger w-100" for="clear">Mới</label>
            </div>
        </div>

        <form action="" style="width: 70vw;">

            <label for="selectCategory">Thể loại của bài viết</label>
            <select v-model="editPostForm.categoryId" id="selectCategory" class="form-select" aria-label="Default select example" required>
                <option selected>Thể loại bài viết</option>
                <option v-for="cate in categories" :key="cate.id" :value="cate.id">
                    <span>{{ cate.name }}</span>
                </option>
            </select>
            
            <div> 
                <div>Nhãn bài viết</div>
                <div class="btn-group" style="margin-bottom: 30px; flex-wrap: wrap;" role="group" aria-label="Basic checkbox toggle button group">
                    <div v-for="tag in filterTagsByCategoryId()" :key="tag.id">
                        <input v-model="trackingTags[tag.id]" type="checkbox" class="btn-check" :id="'btncheck' + tag.id" autocomplete="off">
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

            <div class="mb-3" style="margin: 50px 0 50px 0">
                <label for="formFile" class="form-label">File ảnh bìa bài viết</label>
                <input class="form-control" type="file" id="formFile">
            </div>

            <div style="height: 550px;">
                <div style="height: 450px">
                    Nội dung bài viết:
                    <QuillEditor toolbar="full"></QuillEditor>

                </div>
            </div>
            <div class="d-flex justify-content-end" v-if="isLogin">
                <button class="m-1 btn btn-danger" @click="updatePost('reviewing')" style="padding: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                    </svg>
                    Yêu cầu xuất bản
                </button>
                <button class="m-1 btn btn-primary" @click="updatePost('created')" style="padding: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-check-fill" viewBox="0 0 16 16">
                        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m1.354 4.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                    </svg>        
                    Lưu
                </button>
                <button class="m-1 btn btn-secondary" @click="removePost()" style="padding: 15px;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
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

const tags = ref([
    {
        id: 0,
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        categoryId: '',
        createdById: '',
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

const posts = ref([{
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
}])

const choosenCreatedPostId = ref(0)
const choosenCreatedPostIndex = ref(0)

const editPostForm = ref({
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

function displaySelectedImage(event: any, elementId: any) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;
    console.log(selectedImage);
    
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            //@ts-ignore
            selectedImage.src = e.target.result;
            //@ts-ignore
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function changeForm(id: number) {
    posts.value.forEach((post) => {
        if (post.id == id) {
            editPostForm.value.categoryId = post.categoryId
            editPostForm.value.title = post.title
            editPostForm.value.contentSourceId = post.contentSourceId
            editPostForm.value.imageCover = post.imageURL
            editPostForm.value.content = post.content
            editPostForm.value.originalLink = post.originalPostURL
        }
    })
}

function clearForm(){
    editPostForm.value.categoryId = 0
    editPostForm.value.title = ''
    editPostForm.value.contentSourceId = 0
    editPostForm.value.imageCover = 'https://mdbootstrap.com/img/Photos/Others/placeholder.jpg'
    editPostForm.value.content = ''
    editPostForm.value.originalLink = ''
}

function filterTagsByCategoryId(){
    console.log(trackingTags.value)
    const tagsTemp = tags.value.filter((tag) => tag.category.id == editPostForm.value.categoryId)
    return tagsTemp
}

async function updatePost(status: string){
    try {
        if (choosenCreatedPostId.value == 0){
            await postsService.create(editPostForm.value.categoryId, [], editPostForm.value.contentSourceId, editPostForm.value.title, editPostForm.value.content, editPostForm.value.originalLink, status, 'internal_post', editPostForm.value.imageCover, tokenBearer)
        } else {
            // await postsService.update()
        }
    } catch(err) {
        console.log(err);
    }
}

async function removePost(){
    try {
        await postsService.delete(choosenCreatedPostId.value, tokenBearer)
        posts.value.splice(choosenCreatedPostIndex.value, 1)
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    try {
        // Post
        let p = await postsService.getAllStatusForUser(currentUser.value.id, 'created');
        posts.value = p.data
        if (posts.value.length > 0){
            choosenCreatedPostId.value = posts.value[0].id;
            editPostForm.value.categoryId = posts.value[0].categoryId
            editPostForm.value.title = posts.value[0].title
            editPostForm.value.contentSourceId = posts.value[0].contentSourceId
            editPostForm.value.imageCover = posts.value[0].imageURL
            editPostForm.value.content = posts.value[0].content
            editPostForm.value.originalLink = posts.value[0].originalPostURL
        }

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
.form-select{
    margin-bottom: 40px;
}
</style>