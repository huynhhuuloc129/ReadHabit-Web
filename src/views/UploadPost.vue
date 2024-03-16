<template>
    <Suspense>
        <HeaderComponent text-color="black"></HeaderComponent>
        <template #fallback>

        </template>
    </Suspense>
    <Suspense>
        <SidebarComponent text-color="black"></SidebarComponent>
    </Suspense>

    <div class="container p-lg-5">
        <form action="">

            <select class="form-select" aria-label="Default select example">
                <option selected>Thể loại bài viết</option>
                <option v-for="cate in categories" :key="cate.id" :value="cate.id">
                    <span>{{ cate.name }}</span>
                </option>
            </select>
            
            <select class="form-select" aria-label="Default select example">
                <option selected>Nguồn bài viết (Không bắt buộc )</option>
                <option v-for="cs in contentSources" :key="cs.id" :value="cs.id" :style="{'background-image': 'url(' + cs.avatar + ')'}">
                    <span>{{ cs.name }}</span>
                </option>
            </select>
            
            <input type="text" class="form-control">

            <div style="margin-top: 50px;">
                <div class="mb-4 d-flex justify-content-center">
                    <img id="selectedImage" src="https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
                    alt="example placeholder" style="width: 300px;" />
                </div>
                <div class="d-flex justify-content-center">
                    <div class="btn btn-primary btn-rounded">
                        <label class="form-label text-white m-1" for="customFile1">Choose file</label>
                        <input type="file" class="form-control d-none" id="customFile1" onchange="displaySelectedImage(event, 'selectedImage')" />
                    </div>
                </div>
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
import tagsService from '@/services/tags.service';
import { onMounted, ref } from 'vue';

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
        id: '',
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
        id: '',
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

function displaySelectedImage(event: any, elementId: any) {
    const selectedImage = document.getElementById(elementId);
    const fileInput = event.target;

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            //@ts-ignore
            selectedImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}

onMounted(async () => {
    try {
        let cats = await categoriesService.getAll();
        let ts = await tagsService.getAll();
        let cs = await contentSourcesService.getAll();

        categories.value = cats.data
        tags.value = ts.data
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