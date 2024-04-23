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
        <h1>Danh sách các bài viết có chứa '{{ query }}':</h1>

        <div class="d-flex align-items-center justify-content-center" style="margin-bottom: 20px;">
            <VueDatePicker class="w-25" v-model="date" range :preset-dates="presetDates">
                <template #preset-date-range-button="{ label, value, presetDate }">
                    <span role="button" :tabindex="0" @click="presetDate(value)"
                        @keyup.enter.prevent="presetDate(value)" @keyup.space.prevent="presetDate(value)">
                        {{ label }}
                    </span>
                </template>
            </VueDatePicker>
        </div>

        <div id="listpost-section" class="d-flex">
            <div v-if="posts[0].id != 0" style="width: 1000px;">
                <CardTagComponent :posts="VisiblePost()"></CardTagComponent>
            </div>
            <h4 class="text-secondary" v-if="posts[0].id == 0" style="width: 1000px; ">Không có bài viết nào thuộc nhãn
                này
            </h4>

            <!-- <div class="sticky-top sidebarTag">
                <h5>Các nhãn cùng thể loại</h5>
                <a :href="'http://localhost:5173/tag/' + tag1.id" v-for="tag1 in tags" :key="tag1.id">
                    <button v-if="tag1.id != tag.id" class="tag-btn btn btn-outline-secondary">
                        {{ tag1.name }}
                    </button>
                </a>
            </div> -->
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

const route = useRoute()
const query = route.params.content.toString().toLowerCase()

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

function VisiblePost() {
    if (date.value == null) return posts.value.filter((p) => {
        return p.title.toLowerCase().indexOf(query.toLowerCase()) != -1
    })
    else {
        let postsTemp = [] as typeof posts.value;
        let startDate = date.value[0].getTime()
        let endDate = date.value[1].getTime()

        let tempPost = posts.value.filter((p) => {
            return p.title.toLowerCase().indexOf(query.toLowerCase()) != -1
        })

        tempPost.forEach(pf => {
            let publishTime = new Date(pf.publishDate)
            if (publishTime.getTime() >= startDate && publishTime.getTime() <= endDate) {
                postsTemp.push(pf)
            }
        });

        return postsTemp
    }
}

onMounted(async () => {
    // get all Post
    let postTemp = await postsService.getAll(100, 0, "published")
    posts.value = postTemp.data
})

</script>

<style>
.sidebarTag {
    z-index: 1;
    position: sticky;
    max-height: 90vh;
    overflow: scroll;
    max-width: 300px;
}

@media only screen and (max-width: 1000px) {
    .sidebarTag {
        max-width: 200px;
    }

    .tag-btn {
        font-size: xx-small;
    }
}

@media only screen and (max-width: 770px) {
    #listpost-section {
        flex-direction: column;
        align-items: center;
    }

    .sidebarTag {
        max-width: 100vw;
    }
}
</style>