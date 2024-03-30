<template>
    <form @submit="generatePost($event); isSubmitting = true">

        <h5>Tạo bài viết tự động theo đường dẫn</h5>
        <select v-model="choosenContentSourceId" class="form-select" aria-label="Default select example" style="margin-top: 20px" required>
            <option v-for="cs in contentSources" :key="cs.id" :value="cs.id">{{ cs.name }}</option>

        </select>
        <label style="margin-top: 50px" for="url">Đường dẫn cần tạo bài viết</label>
        <input v-model="url" id="url" type="text" class="form-control" required/>

        <div class="align-items-center w-100 text-center" style="margin-top: 50px">
            <button class="btn btn-success w-25" style="height: 50px;">Tạo</button>
        </div>
    </form>
    <div v-show="isSubmitting" v-if="postGenerated.isSuccess == false" class="w-100 text-center" style="margin-top: 20px">
        <span  class="spinner-border spinner-border-sm mr-1" style="width: 20px; height: 20px; "></span>
        Đang tải...
    </div>
    <form v-if="postGenerated.isSuccess == true" @submit="createPost($event)">
        <label for="selectCategory">Thể loại của bài viết</label>
        <select v-model="uploadPostForm.categoryId" id="selectCategory" class="form-select" aria-label="Default select example" required>
                <option v-for="cate in categories" :key="cate.id" :value="cate.id">
                <span>{{ cate.name }}</span>
            </option>
        </select>

        <div style="margin-top: 30px;"> 
            <div>Nhãn bài viết</div>
            <div class="btn-group" style="flex-wrap: wrap;" role="group" aria-label="Basic checkbox toggle button group">
                <div v-for="(tag) in filterTagsByCategoryId()" :key="tag" style="margin: 0 5px 5px 0;">
                    <input v-model="trackingTagChoosen" :value="tag" type="checkbox" class="btn-check" :id="'btncheck' + tag" autocomplete="off">
                    <label class="btn btn-outline-secondary" :for="'btncheck' + tag">{{ tag }}</label>
                </div>
            </div>
        </div>

        <label for="titlePost" style="font-size: 20px; margin-top: 20px">Tiêu đề bài viết</label>
        <input v-model="uploadPostForm.title" id="titlePost" type="text" class="form-control" required>

        <div class="mb-3 text-center d-flex flex-column justify-content-center" style="margin: 50px 0 50px 0">
            <label for="formFile" class="form-label">File ảnh bìa bài viết</label>
            <input @change="previewFile($event)" class="form-control" type="file" id="formFile" required>
        </div>

        <div style="height: 550px;">
            <div style="height: 450px">
                Nội dung bài viết:
                <QuillEditor v-model:content="uploadPostForm.content" contentType="html" toolbar="full"></QuillEditor>

            </div>
        </div>
        
        <button class="btn btn-danger" style="height: 50px">Thêm bài viết vào hệ thống</button>
    </form>


</template>

<script setup lang="ts">
import contentSourcesService from "@/services/contentSources.service";
import categoriesService from "@/services/categories.service";
import postsService from "@/services/posts.service";
import { QuillEditor } from '@vueup/vue-quill';

import { useCookies } from "vue3-cookies";
import { onMounted, ref } from "vue";
import tagsService from "@/services/tags.service";
import { toast } from "vue3-toastify";


const cookies = useCookies();
const tokenBearer = cookies.cookies.get('Token')

const contentSources = ref([
  {
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    name: "",
    avatar: "",
    posts: [
      {
      }
    ]
  }
])

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

const tagsGenerated = ref([] as string[])
const postGenerated = ref({
  originalPostURL: "",
  contentSourceId: 0,
  title: "",
  content: "",
  tags: "",
  isSuccess: false
}
)

const uploadPostForm = ref({
    categoryId: 0,
    tag: [] as string[],
    contentSourceId: 0,
    title: '',
    content: '',
    originalPostUrl: '',
    type: 'external_post'
})


const choosenContentSourceId = ref(0)
const url = ref('')
const isSubmitting = ref(false)
function splitString(str: string, splitStr: string) {
    return str.split(splitStr)
}

const fileImage = ref({})
function previewFile(e: any){
    fileImage.value = e.target.files[0]
}

const trackingTagChoosen = ref([] as string[])
const trackingTagCategory = ref({} as Record<string, number >)

function filterTagsByCategoryId(){
    return tagsGenerated.value.filter((tag) => (trackingTagCategory.value[tag] == uploadPostForm.value.categoryId) || (trackingTagCategory.value[tag] == 0))
}

async function generatePost(e: any) {
    e.preventDefault();
    try {
        postGenerated.value = await postsService.generatePost({
            contentSourceId: choosenContentSourceId.value,
            url: url.value
        }, tokenBearer)
        isSubmitting.value = false
        let tempTags = splitString(postGenerated.value.tags, ",").map( item => item.trim())
        tempTags.forEach(tag => {
            trackingTagCategory.value[tag] =  0
            tagsGenerated.value.push(tag)
        });
        uploadPostForm.value.originalPostUrl = postGenerated.value.originalPostURL
        uploadPostForm.value.contentSourceId = postGenerated.value.contentSourceId
        uploadPostForm.value.title = postGenerated.value.title
        uploadPostForm.value.content = postGenerated.value.content

    } catch (error) {
        console.log(error)
    }
}

async function createPost(e: any){
    try {
        e.preventDefault()
        let tagsToCreate = [] as string[]
        trackingTagChoosen.value.forEach(tagChoosen => {
            if ((trackingTagCategory.value[tagChoosen] == uploadPostForm.value.categoryId) || (trackingTagCategory.value[tagChoosen] == 0)) {
                tagsToCreate.push(tagChoosen)
            }
        });

        await postsService.create(uploadPostForm.value.categoryId, tagsToCreate, uploadPostForm.value.contentSourceId, uploadPostForm.value.title, uploadPostForm.value.content, uploadPostForm.value.originalPostUrl, "reviewing", "external_post", fileImage.value, tokenBearer)

        toast.success('Đã thêm vào thành công!', {
            autoClose: 1000
        })
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}

onMounted(async () => {
    try {
        let ts = await tagsService.getAll();
        tags.value = ts.data

        tags.value.forEach(tag => {
            trackingTagCategory.value[tag.name] =  tag.categoryId
            tagsGenerated.value.push(tag.name)
        });
        let cTemp = await contentSourcesService.getAll();
        contentSources.value = cTemp.data;

        let cats = await categoriesService.getAll();
        categories.value = cats.data

    } catch (error) {
        console.log(error);
    }
})

</script>

<style>
</style>