<template>
    <Suspense>
        <HeaderComponent text-color="black"></HeaderComponent>
        <template #fallback>
            
        </template>
    </Suspense>
    <Suspense>

        <SidebarComponent text-color="black"></SidebarComponent>
    </Suspense>

    <div class="container">
        <h6>Các loại bài viết của hệ thống</h6>
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <div v-for="category in categories" :key="category.id">
                <input type="radio" class="btn-check" name="btnradio" :id="'btnradio'+category.id" autocomplete="off">
                <label class="btn btn-outline-primary" :for="'btnradio'+category.id">{{category.name}}</label>

            </div>
        </div>
        <hr>
        <h6>Các nhãn dán tương ứng</h6>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import SidebarComponent from '@/components/SidebarComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import categoriesService from '@/services/categories.service';
import tagsService from '@/services/tags.service';
import { onMounted, ref } from 'vue';

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


onMounted(async () => {
    try {
        let categoriesTemp = await categoriesService.getAll();
        categories.value = categoriesTemp.data;
        console.log(categories.value)
    } catch (error) {
        console.log(error)
    }
})
</script>