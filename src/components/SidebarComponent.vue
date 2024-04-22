<template>
  <aside class="sidebar" v-if="isLogin == true">
    <div class="menu toggle" :style="{ 'color': props.textColor }">
      <svg style="background: none;" data-toggle="collapse" data-target="#main-navbar"
        xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
        class="bi bi-list burger js-menu-toggle header" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>
    </div>
    <div class="side-inner">

      <div class="profile">
        <img v-if="currentUser.avatar != null" :src="'http://localhost:8080' + currentUser.avatar.replace('files', '')" alt="Image" class="img-fluid">
        <i v-else class="fa-solid fa-user" style="width: 20px; height: 20px;"></i>

        <a :href="'http://localhost:5173/personal/' + currentUser.id" style="color: black;">
          <h3 class="name">{{ currentUser.fullName }}</h3>
        </a>
        <span v-if="currentUser.role == 'member'" class="country">Thành viên</span>
        <span v-if="currentUser.role == 'admin'" class="country">Admin</span>

      </div>

      <div class="counter d-flex justify-content-center">
        <div class="col">
          <strong class="number">{{ totalPost }}</strong>
          <span class="number-label">Bài viết</span>
        </div>
        <div class="col">
          <strong class="number">{{ currentUser.totalFollower }}</strong>
          <span class="number-label">Theo dõi</span>
        </div>
        <div class="col">
          <strong class="number">{{ currentUser.totalFollowee }}</strong>
          <span class="number-label">Đang theo dõi</span>
        </div>
      </div>

      <div class="nav-menu">
        <ul>
          <li><a href="http://localhost:5173"><span><i class="icon fas fa-home"></i></span>Bảng tin</a></li>
          <li><a :href="'http://localhost:5173/personal/' + currentUser.id"><span><i
                  class="icon fa-regular fa-compass"></i></span>Trang cá nhân</a></li>
          <li><a href="http://localhost:5173/upload-post"><span><i class="icon fa-solid fa-newspaper"></i></span>Bài
              viết</a></li>
          <li v-if="currentUser.role == 'admin'"><a href="http://localhost:5173/admin"><span><i
                  class="icon fa-solid fa-chart-simple"></i></span>Thống kê</a></li>

          <li data-bs-toggle="modal" data-bs-target="#feedbackModal"><a href="#"><span><i
                  class="icon fa-solid fa-comment"></i></span>Phản hồi</a>
          </li>

          <li @click="signOut"><a href="#"><span><i class="icon fa-solid fa-right-from-bracket"></i></span>Đăng xuất</a>
          </li>
        </ul>
      </div>
    </div>

  </aside>

  <div class="modal fade" id="feedbackModal" tabindex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="feedbackModalLabel">Ý kiến phản hồi</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit="sendFeedback($event)">
            <label for="feedback">Tiêu đề:</label>
            <input v-model="feedbackTitle" type="text" class="form-control" id="feedback" required>

            <label for="feedback" style="margin-top: 20px;">Phản hồi cho admin:</label>
            <textarea v-model="feedbackMessage" type="text" class="form-control" id="message" required></textarea>
            <div class="d-flex justify-content-end">
              <button type="submit" style="margin: 5px;" class="btn btn-primary">Gửi</button>
              <button type="button" style="margin: 5px;" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import $ from "jquery";
import { ref } from 'vue'
import checkLogin from '../utilities/utilities';
import postsService from "@/services/posts.service";
import feedbackService from "@/services/feedback.service";
import { useCookies } from "vue3-cookies";
import { toast } from "vue3-toastify";

const cookies = useCookies();
const tokenBearer = cookies.cookies.get('Token')

const feedbackMessage = ref('')
const feedbackTitle = ref('')
const totalPost = ref(0)
const props = defineProps(['textColor']);
const isLogin = ref(false);
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

try {
  currentUser.value = await checkLogin();
  if (currentUser.value !== null && currentUser.value['id'] !== null) {
    isLogin.value = true;
  }
  let pTemp = await postsService.getAllForUser(currentUser.value.id)
  totalPost.value = pTemp.total;
} catch (err) {
  console.log(err)
}

function signOut() {
  document.cookie = 'Token' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  window.location.reload();
}

async function sendFeedback(e: any) {
  e.preventDefault();
  try {
    await feedbackService.create(tokenBearer, {
      title: feedbackTitle.value,
      description: feedbackMessage.value
    })
    toast.success("Đã gửi nhận xét thành công!", {
      autoClose: 2000,
    })
  } catch (error) {
    console.log(error)
  }
}

$(function () {
  'use strict';
  // @ts-ignore
  $('.js-menu-toggle').click((e) => {

    var $this = $(this);

    if ($('body').hasClass('show-sidebar')) {
      $('body').removeClass('show-sidebar');
      $this.removeClass('active');
    } else {
      $('body').addClass('show-sidebar');
      $this.addClass('active');
    }

    e.preventDefault();
    $(document).mouseup(function (e) {
      var container = $(".sidebar");
      // @ts-ignore
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('show-sidebar')) {
          $('body').removeClass('show-sidebar');
          $('body').find('.js-menu-toggle').removeClass('active');
        }
      }
    });
  });

});
</script>

<style>
.sidebar {
  z-index: 9999999;
}

.header:hover {
  color: rgb(184, 182, 182);
}

.icon {
  margin-right: 10px;
}

a {
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}


body {
  position: relative;
}

body:before {
  position: absolute;
  content: "";
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  -webkit-transition: .3s all ease-in-out;
  -o-transition: .3s all ease-in-out;
  transition: .3s all ease-in-out;
}

body.show-sidebar:before {
  opacity: 1;
  visibility: visible;
}

.site-section {
  padding: 7rem 0;
}

aside {
  height: 100vh;
  min-height: 580px;
  top: 0;
  width: 300px;
  left: 0;
  z-index: 1001;
  position: fixed;
  -webkit-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  background-color: #fff;
  -webkit-transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1);
  transition: 1s transform cubic-bezier(0.23, 1, 0.32, 1), 1s -webkit-transform cubic-bezier(0.23, 1, 0.32, 1);
}

.show-sidebar aside {
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}

aside .toggle {
  padding-left: 25px;
  padding-top: 20px;
  position: absolute;
  right: 0;
  -webkit-transform: translateX(100%);
}

.show-sidebar aside .toggle .burger:before,
.show-sidebar aside .toggle .burger span,
.show-sidebar aside .toggle .burger:after {
  background: #fff;
}

.show-sidebar aside {
  -webkit-box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 10px 0 30px 0 rgba(0, 0, 0, 0.1);
}

aside .side-inner {
  padding: 30px 0;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

aside .side-inner .profile {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
}

aside .side-inner .profile img {
  width: 80px;
  margin: 0 auto 20px auto;
  border-radius: 50%;
}

aside .side-inner .profile .name {
  font-size: 18px;
  margin-bottom: 0;
}

aside .side-inner .profile .country {
  font-size: 14px;
  color: #cfcfcf;
}

aside .side-inner .counter {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #efefef;
  text-align: center;
}

aside .side-inner .counter div .number {
  display: block;
  font-size: 20px;
  color: #000;
}

aside .side-inner .counter div .number-label {
  color: #cfcfcf;
}

aside .side-inner .nav-menu ul,
aside .side-inner .nav-menu ul li {
  padding: 0;
  margin: 0px;
  list-style: none;
}

aside .side-inner .nav-menu ul li a {
  display: block;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #8b8b8b;
  position: relative;
  -webkit-transition: .3s padding-left ease;
  -o-transition: .3s padding-left ease;
  transition: .3s padding-left ease;
}

aside .side-inner .nav-menu ul li a:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0px;
  background-color: blue;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: .3s opacity ease, .3s visibility ease, .3s width ease;
  -o-transition: .3s opacity ease, .3s visibility ease, .3s width ease;
  transition: .3s opacity ease, .3s visibility ease, .3s width ease;
}

aside .side-inner .nav-menu ul li a:active,
aside .side-inner .nav-menu ul li a:focus,
aside .side-inner .nav-menu ul li a:hover {
  outline: none;
}

aside .side-inner .nav-menu ul li a:hover {
  background: #fcfcfc;
  color: #000;
}

aside .side-inner .nav-menu ul li a:hover:before {
  width: 4px;
  opacity: 1;
  visibility: visible;
}

aside .side-inner .nav-menu ul li.active a {
  background: #fcfcfc;
  color: #000;
}

aside .side-inner .nav-menu ul li.active a:before {
  opacity: 1;
  visibility: visible;
  width: 4px;
}

.burger {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;
  z-index: 99;
  float: left;
}

.burger:before,
.burger span,
.burger:after {
  width: 100%;
  height: 2px;
  display: block;
  background: #000;
  border-radius: 2px;
  position: absolute;
  opacity: 1;
}

.burger:before,
.burger:after {
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -o-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1);
  -webkit-transition: top 0.35s cubic-bezier(0.23, 1, 0.32, 1), -webkit-transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 1.15s cubic-bezier(0.86, 0, 0.07, 1);
  content: "";
}

.burger:before {
  top: 4px;
}

.burger span {
  top: 15px;
}

.burger:after {
  top: 26px;
}

/* Hover */
.burger:hover:before {
  top: 7px;
}

.burger:hover:after {
  top: 23px;
}

/* Click */
.burger.active span {
  opacity: 0;
}

.burger.active:before,
.burger.active:after {
  top: 40%;
}

.burger:focus {
  outline: none;
}

.menu {
  background: none;
}
</style>
