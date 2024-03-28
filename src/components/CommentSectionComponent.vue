<template>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <div class="container bootdey">
        <div class="col-md-12 bootstrap snippets">
            <div class="panel">
                <div class="panel-body">
                    <textarea class="form-control" rows="2" placeholder="Bạn nghĩ gì về bài viết này?"></textarea>
                    <div class="mar-top clearfix">
                        <button class="btn btn-sm btn-primary pull-right" type="submit"><i class="fa fa-pencil fa-fw"></i>
                            Bình luận</button>
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="panel-body">
                    <!-- Newsfeed Content -->
                    <!--===================================================-->
                    <div class="media-block" v-for="(cmt, index) in props.commentsLv1" :key="cmt.id">
                        <a class="media-left" :href="'http://localhost:5173/personal/' + cmt.createdById">
                            <img :src="'http://localhost:8080' + cmt.createdBy.avatar.replace('files', '')" width="50px" height="50px" class="rounded-circle" :alt="cmt.createdBy.fullName" style="margin-right: 18px;">
                            </a>
                        <div class="media-body">
                            <div class="mar-btm">
                                <a :href="'http://localhost:5173/personal/' + cmt.createdById" class="btn-link text-semibold media-heading box-inline">{{ cmt.createdBy.fullName }}</a>
                                <!-- <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i> - 11 min ago 
                                </p> -->
                            </div>
                            <p>{{cmt.message}}</p>
                            <div class="pad-ver">
                                <a class="btn btn-sm btn-default btn-hover-primary" @click="trackingComment = cmt.id">Phản hồi</a>
                                <div v-if="trackingComment == cmt.id" class="d-flex align-items-center">
                                    <img :src="'http://localhost:8080' + currentUser.avatar.replace('files', '')" alt="" width="50px" height="50px" class="rounded-circle" style="margin-right: 18px;">
                                    <input type="text" class="form-control" style="height: 35px; margin-right: 10px;">
                                </div>
                            </div>
                            <hr>

                            <!-- Comments -->
                            <div>
                                <div v-for="(cmt2, index2) in props.commentsLv2[index]" :key="cmt2.id" class="media-block">
                                    <a class="media-left" :href="'http://localhost:5173/personal/' + cmt2.createdById">                            
                                        <img :src="'http://localhost:8080' + cmt2.createdBy.avatar.replace('files', '')" width="50px" height="50px" class="rounded-circle" :alt="cmt2.createdBy.fullName" style="margin-right: 18px;">
                                    </a>
                                    <div class="media-body">
                                        <div class="mar-btm">
                                            <a :href="'http://localhost:5173/personal/' + cmt2.createdById" class="btn-link text-semibold media-heading box-inline">{{ cmt2.createdBy.fullName }}</a>
                                            <!-- <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i>- 7 min ago</p> -->
                                        </div>
                                        <p>{{ cmt2.message }}</p>
                                        <div class="pad-ver">
                                            <a class="btn btn-sm btn-default btn-hover-primary" @click="trackingComment = cmt2.id">Phản hồi</a>
                                            <div v-if="trackingComment == cmt2.id"  class="d-flex align-items-center">
                                                <img :src="'http://localhost:8080' + currentUser.avatar.replace('files', '')" alt="" width="50px" height="50px" class="rounded-circle" style="margin-right: 18px;">
                                                <input type="text" class="form-control" style="height: 35px; margin-right: 10px;">
                                            </div>
                                        </div>
                                        <hr>
                                        <div>
                                        <div v-for="cmt3 in props.commentsLv3[index2]" :key="cmt3.id" class="media-block">
                                            <a class="media-left" :href="'http://localhost:5173/personal/' + cmt3.createdById">                            
                                                <img :src="'http://localhost:8080' + cmt3.createdBy.avatar.replace('files', '')" width="50px" height="50px" class="rounded-circle" :alt="cmt3.createdBy.fullName" style="margin-right: 18px;">
                                            </a>
                                            <div class="media-body">
                                                <div class="mar-btm">
                                                    <a :href="'http://localhost:5173/personal/' + cmt3.createdById" class="btn-link text-semibold media-heading box-inline">{{ cmt3.createdBy.fullName }}</a>
                                                    <!-- <p class="text-muted text-sm"><i class="fa fa-mobile fa-lg"></i>- 7 min ago</p> -->
                                                </div>
                                                <p>{{ cmt3.message }}</p>
                                                <div class="pad-ver">
                                                    <a class="btn btn-sm btn-default btn-hover-primary" @click="trackingComment = cmt3.id;">Phản hồi</a>
                                                </div>
                                                <div v-if="trackingComment ==cmt3.id" class="d-flex align-items-center">
                                                    <img :src="'http://localhost:8080' + currentUser.avatar.replace('files', '')" alt="" width="50px" height="50px" class="rounded-circle" style="margin-right: 18px;">
                                                    <input type="text" class="form-control" style="height: 35px; margin-right: 10px;">
                                                </div>
                                                <hr>
                                            </div>
        
                                        </div>

                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import checkLogin from '@/utilities/utilities';
import { ref } from 'vue';
import { useCookies } from 'vue3-cookies';

const props = defineProps(['postId', 'commentsLv1', 'commentsLv2', 'commentsLv3'])

const currentUser = ref({
  id: 0,
  createdAt: "",
  updatedAt: "",
  deletedAt: null,
  email: "",
  username: "",
  firstName: "",
  lastName: " ",
  fullName: "",
  about: "",
  youtubeLink: "",
  facebookLink: "",
  linkedinLink: "",
  twitterLink: "",
  totalFollower: 4,
  totalFollowee: 5,
  refreshToken: null,
  phoneNumber: "",
  birthday: "",
  avatar: "",
  role: "",
  categories: [
    {
      id: 0,
      createdAt: "",
      updatedAt: "",
      deletedAt: null,
      name: "",
      imageURL: null
    }
  ]
});
const cookies = useCookies();

const tokenBearer = cookies.cookies.get('Token')
const trackingComment = ref(0)

try {
    currentUser.value = await checkLogin();
    console.log(currentUser.value)
} catch (err) {
    console.log(err)
}

</script>
<style>

.img-sm {
    width: 46px;
    height: 46px;
}

.panel {
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.075);
    border-radius: 0;
    border: 0;
    margin-bottom: 15px;
}

.panel .panel-footer,
.panel>:last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.panel .panel-heading,
.panel>:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.panel-body {
    padding: 25px 20px;
}


.media-block .media-left {
    display: block;
    float: left
}

.media-block .media-right {
    float: right
}

.media-block .media-body {
    display: block;
    overflow: hidden;
    width: auto
}

.middle .media-left,
.middle .media-right,
.middle .media-body {
    vertical-align: middle
}

.thumbnail {
    border-radius: 0;
    border-color: #e9e9e9
}

.tag.tag-sm,
.btn-group-sm>.tag {
    padding: 5px 10px;
}

.tag:not(.label) {
    background-color: #fff;
    padding: 6px 12px;
    border-radius: 2px;
    border: 1px solid #cdd6e1;
    font-size: 12px;
    line-height: 1.42857;
    vertical-align: middle;
    -webkit-transition: all .15s;
    transition: all .15s;
}

.text-muted,
a.text-muted:hover,
a.text-muted:focus {
    color: #acacac;
}

.text-sm {
    font-size: 0.9em;
}

.text-5x,
.text-4x,
.text-5x,
.text-2x,
.text-lg,
.text-sm,
.text-xs {
    line-height: 1.25;
}

.btn-trans {
    background-color: transparent;
    border-color: transparent;
    color: #929292;
}

.btn-icon {
    padding-left: 9px;
    padding-right: 9px;
}

.btn-sm,
.btn-group-sm>.btn,
.btn-icon.btn-sm {
    padding: 5px 10px !important;
}

.mar-top {
    margin-top: 15px;
}</style>