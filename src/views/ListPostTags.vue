<template>
    <Suspense>
        <HeaderComponent text-color="white"></HeaderComponent>
        <template #fallback>

        </template>
    </Suspense>
    <Suspense>

        <SidebarComponent text-color="white"></SidebarComponent>
    </Suspense>
    <div class="container" style="margin-top: 20px;">
        <h1>Danh sách các bài viết có nhãn #{{ tag.name }}</h1>

        <div id="listpost-section" class="d-flex">
            <div v-if="posts[0].id != 0" style="width: 1000px;">
                <CardTagComponent :posts="posts"></CardTagComponent>
            </div>
            <h4 class="text-secondary" v-if="posts[0].id == 0" style="width: 1000px; ">Không có bài viết nào thuộc nhãn này</h4>

            <div class="sticky-top sidebarTag" >
                <h5>Các nhãn cùng thể loại</h5>
                <a :href="'http://localhost:5173/tag/' + tag1.id" v-for="tag1 in tags" :key="tag1.id">
                    <button v-if="tag1.id != tag.id" class="tag-btn btn btn-outline-secondary">
                        {{ tag1.name }}
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import SidebarComponent from "@/components/SidebarComponent.vue";
import CardTagComponent from "@/components/CardTagComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import postsService from "@/services/posts.service";
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import tagsService from "@/services/tags.service";

const route = useRoute()
const id = Number(route.params.id)

type tagType = {
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    name: "",
    categoryId: 0,
    createdById: 0,
    isLock: false,
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
        }
    ]
}

const tag = ref({} as tagType)
const tags = ref([] as tagType[])

const posts = ref([
    {
        id: 0,
        createdAt: '',
        updatedAt: '',
        deletedAt: null,
        title: '',
        content: '',
        sharePostId: null,
        originalPostURL: '',
        publishDate: '',
        imageURL: '',
        status: '',
        type: '',
        readTime: 0,
        totalLike: 0,
        totalDislike: 0,
        totalShare: 0,
        categoryId: 0,
        createdById: 0,
        contentSourceId: 0,
        createdBy: {
            id: 0,
            createdAt: '',
            updatedAt: '',
            deletedAt: null,
            email: '',
            username: '',
            firstName: '',
            lastName: '',
            fullName: '',
            about: '',
            youtubeLink: '',
            facebookLink: '',
            linkedinLink: '',
            twitterLink: '',
            totalFollower: 0,
            totalFollowee: 0,
            refreshToken: null,
            phoneNumber: '',
            birthday: '',
            avatar: '',
            role: ''
        }
    }
])

onMounted(async () => {
    // get tag
    tag.value = await tagsService.getOne(id);

    let tTemp = await tagsService.getAllByCategoryId(tag.value.categoryId)
    tags.value = tTemp.data

    // get all Post
    let postTemp = await postsService.getAllByTagId(id)
    posts.value = postTemp.data
})
</script>

<style>
.sidebarTag {
    z-index: 1;
    position: sticky;
    max-height: 90vh; overflow: scroll; max-width: 300px;
}
@media only screen and (max-width: 1000px) {
    .sidebarTag {
        max-width: 200px;
    }
    .tag-btn{
        font-size: xx-small;
    }
}
@media only screen and (max-width: 770px) {
    #listpost-section{
        flex-direction: column;
        align-items: center;
    }
    .sidebarTag {
        max-width: 100vw;
    }
}
</style>