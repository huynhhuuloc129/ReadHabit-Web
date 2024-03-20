<template>
    <Suspense>
        <HeaderComponent text-color="black"></HeaderComponent>
        <template #fallback>

        </template>
    </Suspense>
    <Suspense>
        <SidebarComponent text-color="black"></SidebarComponent>
    </Suspense>
    <div class="container d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Bảng thống kê</h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>

                    <!-- Content Row -->
    <div class="container d-flex justify-content-between">

        <!-- Earnings (Monthly) Card Example -->
        <div class="mb-4" >
            <div class="card border-left-primary shadow h-100 py-2" style="border-left: 5px solid #8CCCFA;">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2" >
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                Tổng số người dùng</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{ users.length }}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="mb-4" >
            <div class="card border-left-success shadow h-100 py-2" style="border-left: 5px solid #CB444A;">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                Tổng số bài viết</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{ posts.length }}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Earnings (Monthly) Card Example -->
        <div class="mb-4">
            <div class="card border-left-info shadow h-100 py-2" style="border-left: 5px solid #6CC7EC;">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Số lượt tương tác
                            </div>
                            <div class="row no-gutters align-items-center">
                                <div class="col-auto">
                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{{ reactions.length }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="mb-4">
            <div class="card border-left-warning shadow h-100 py-2" style="border-left: 5px solid #F6C352;">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                Bài viết cần phê duyệt</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{ postsReviewing.length }}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

                    <!-- Content Row -->

    <div class="container d-flex justify-content-between">

    <!-- Area Chart -->
    <div class="flex-grow-1" style="margin-right: 30px;">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Thống kê người dùng</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <BarChart v-bind="barChartProps" /> 
            </div>
        </div>
    </div>

    <!-- Pie Chart -->
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-danger">Thống kê bài viết</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <PieChart v-bind="pieChartProps"></PieChart>
            </div>
        </div>
    </div>

    </div>
    <div>
        <div class="container mt-5 px-2">
            
            <h5 class="mb-2 d-flex justify-content-between align-items-center">       
                Thông tin tất cả bài viết đã xuất bản
            </h5>
            <div class="position-relative">
                <span class="position-absolute search"><i class="fa fa-search"></i></span>
                <input v-model="search" class="form-control w-100" placeholder="Tìm kiếm bằng tên bài viết">
            </div>
            <div class="table-responsive">
                <table class="table table-responsive table-borderless">
                        
                    <thead>
                        <tr class="bg-light">
                        <th scope="col" width="1%">ID</th>
                        <th scope="col" width="10%">Ngày tạo</th>
                        <th scope="col" width="15%">Loại</th>
                        <th scope="col" width="15%">Người tạo</th>
                        <th scope="col" width="30%">Tên bài viết</th>
                        <th scope="col" width="10%"  class="text-center">Lượt thích</th>
                        <th scope="col" width="10%"  class="text-center">Lượt chia sẻ</th>
                        <th scope="col" class="text-end" width="10%"><span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="post in VisiblePost()" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.createdAt.slice(0, 10) }}</td>
                    <td>{{ post.type }}</td>
                    <td><img src="https://i.imgur.com/VKOeFyS.png" width="25">{{ post.createdById }}</td>
                    <td>{{ post.title }}</td>
                    <td class="text-center">{{ post.totalLike }}</td>
                    <td class="text-center">{{ post.totalShare }}</td>

                    <td class="text-end"><a :href="'http://localhost:5173/post/'+ post.id" class="btn btn-primary">Chi tiết</a></td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <button @click="postVisibles += steps" v-if="postVisibles < posts.length && search == ''"
                        class="btn moreUser" style="border-radius: 50px; border: 2px solid black; margin-left: 10px;">
                        Xem thêm >> 
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <div>
        <div class="container mt-5 px-2">
            
            <h5 class="mb-2 d-flex justify-content-between align-items-center">       
                Thông tin tất cả bài viết đang chờ phê duyệt
            </h5>
            <div class="position-relative">
                <span class="position-absolute search"><i class="fa fa-search"></i></span>
                <input v-model="searchReview" class="form-control w-100" placeholder="Tìm kiếm bằng tên bài viết">
            </div>
            <div class="table-responsive">
                <table class="table table-responsive table-borderless">
                        
                    <thead>
                        <tr class="bg-light">
                        <th scope="col" width="1%">ID</th>
                        <th scope="col" width="10%">Ngày tạo</th>
                        <th scope="col" width="15%">Loại</th>
                        <th scope="col" width="15%">Người tạo</th>
                        <th scope="col" width="30%">Tên bài viết</th>
                        <th scope="col" class="text-end" width="10%"><span></span></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr v-for="post in VisiblePostReviewing()" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.createdAt.slice(0, 10) }}</td>
                    <td>{{ post.type }}</td>
                    <td><img src="https://i.imgur.com/VKOeFyS.png" width="25">{{ post.createdById }}</td>
                    <td>{{ post.title }}</td>

                    <td class="text-end"><a :href="'http://localhost:5173/post/'+ post.id" class="btn btn-primary">Chi tiết</a></td>
                    </tr>
                    </tbody>
                </table>
                <div class="text-center">
                    <button @click="postVisiblesReviewing += stepsReviewing" v-if="postVisiblesReviewing < postsReviewing.length && searchReview == ''"
                        class="btn moreUser" style="border-radius: 50px; border: 2px solid black; margin-left: 10px;">
                        Xem thêm >> 
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

 
<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
// @ts-ignore
import SidebarComponent from '@/components/SidebarComponent.vue';
import { Chart, registerables } from 'chart.js';
import { BarChart, useBarChart, PieChart, usePieChart } from 'vue-chart-3';
import { ref, computed, onMounted } from 'vue';
import usersService from '@/services/users.service';
import postsService from '@/services/posts.service';
import reactionsService from '@/services/reactions.service';
import categoriesService from '@/services/categories.service';

Chart.register(...registerables);

const data = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0]);

const chartData = computed(() => ({
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5' , 'Tháng 6' , 'Tháng 7' , 'Tháng 8' , 'Tháng 9' , 'Tháng 10' , 'Tháng 11' , 'Tháng 12'],
    datasets: [{
        data: data.value,
        backgroundColor: ['#77CEFF'],
    }],
}));

const chartData1 = ref({
    chartData: {
        labels: [] as string[],
        datasets: [
        {
            data: [] as number[],
            backgroundColor: [] as string[],
        },
        ]
    }
})

const { barChartProps, barChartRef } = useBarChart({chartData});

const { pieChartProps, pieChartRef } = usePieChart(chartData1.value);


const users = ref([
  {
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    fullName: "",
    about: "",
    youtubeLink: "",
    facebookLink: "",
    linkedinLink: "",
    twitterLink: "",
    totalFollower: 0,
    totalFollowee: 0,
    refreshToken: null,
    phoneNumber: "",
    birthday: "",
    avatar: "",
    role: ""
  }
])

const posts = ref([
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
)


const postsReviewing = ref([
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
])
var postVisibles = ref(3)
var steps = ref(3)

var postVisiblesReviewing = ref(3)
var stepsReviewing = ref(3)

function VisiblePost(){
    if (search.value != '') {
        return posts.value.filter(p => {
            return p.title.toLowerCase().indexOf(search.value.toLowerCase()) != -1;
        });
    } else {
        return posts.value.slice(0, postVisibles.value)
    }
}

function VisiblePostReviewing(){
    if (searchReview.value != '') {
        return postsReviewing.value.filter(p => {
            return p.title.toLowerCase().indexOf(searchReview.value.toLowerCase()) != -1;
        });
    } else {
        return postsReviewing.value.slice(0, postVisiblesReviewing.value)
    }
}

const search =ref('');
const searchReview =ref('');

const reactions = ref([
  {
    type: "",
    postId: 0,
    userId: 0,
    createdAt: "",
    post: {
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
    user: {
      id: 0,
      createdAt: "",
      updatedAt: "",
      deletedAt: null,
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      fullName: "",
      about: "",
      youtubeLink: "",
      facebookLink: "",
      linkedinLink: "",
      twitterLink: "",
      totalFollower: 0,
      totalFollowee: 0,
      refreshToken: null,
      phoneNumber: "",
      birthday: "",
      avatar: "",
      role: ""
    }
  }
])

const categories = ref( [
    {
      id: 0,
      createdAt: "",
      updatedAt: "",
      deletedAt: null,
      name: "",
      imageURL: ""
    }
])

function randomColor () {
    let r = Math.ceil(Math.random()*255)
    let g = Math.ceil(Math.random()*255)
    let b = Math.ceil(Math.random()*255)

    return 'rgb(' + r+ ',' + g +',' + b+ ')'
}

onMounted(async () => {
    try {
        let usersTemp = await usersService.getAll();
        users.value = usersTemp.data;

        users.value.forEach((user) => {
            let month = Number(user.createdAt.slice(5, 7))
            data.value[month-1] += 1;
        })

        let postsTemp = await postsService.getAll(100, 0, "published");
        posts.value = postsTemp.data;
        
        let postsReviewTemp = await postsService.getAll(100, 0, "reviewing");
        postsReviewing.value = postsReviewTemp.data;

        let categoriesTemp = await categoriesService.getAll();
        categories.value = categoriesTemp.data
        for (let i =0; i< categories.value.length; i++){
            chartData1.value.chartData.labels.push(categories.value[i].name)
            let postCategory = await postsService.getAllByCategoryId(categories.value[i].id)
            chartData1.value.chartData.datasets[0].data.push(postCategory.data.length)
            chartData1.value.chartData.datasets[0].backgroundColor.push(randomColor())
        }

        let reactionsTemp = await reactionsService.getAllReal();
        reactions.value = reactionsTemp.data;
    } catch (err) {
        console.log(err)
    }
})
</script>

<style>
.text-gray-300{
    color: #E0E0E0;
}
.moreUser:hover{
    color: white;
    background-color: black;
}
.search{
  
  top:6px;
  left:10px;
}

.form-control{
    
    border:none;
    padding-left:32px;
}

.form-control:focus{
    
    border:none;
    box-shadow:none;
}

.green{
    
    color:green;
}
</style>