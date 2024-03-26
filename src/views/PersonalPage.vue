<template>
  <Suspense>
    <HeaderComponent text-color="black"></HeaderComponent>
    <template #fallback> </template>
  </Suspense>
  <Suspense>
    <SidebarComponent text-color="black"></SidebarComponent>
  </Suspense>

  <div class="container">
    <section class="bg-light py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row gy-4 gy-lg-0">
          <div class="col-12 col-lg-4 col-xl-3">
            <div class="row gy-4">
              <div class="col-12">
                <div class="card widget-card border-light shadow-sm">
                  <div class="card-body">
                    <div class="text-center mb-3 w-100 d-flex">
                      <div class="avatar d-flex">
                        <img
                          :src="'http://localhost:8080' + user.avatar.replace('files', '')"
                          alt="Generic placeholder image"
                          style="height: 150px"
                        />
                      </div>
                    </div>
                    <h5 class="text-center mb-1">{{ user.fullName }}</h5>
                    <p class="text-center text-secondary mb-4">
                      <span v-if="user.role == 'admin'">Quản trị viên</span>
                      <span v-else>Thành viên</span>
                    </p>
                    <ul class="list-group list-group-flush mb-4">
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center w-100"
                      >
                        <h6 class="m-0">Người theo dõi</h6>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#followerModal"
                          @click="getFollow"
                          >{{ user.totalFollower }}</a
                        >

                        <!-- Modal -->
                        <div
                          v-if="isLogin && user.totalFollower > 0"
                          class="modal fade"
                          id="followerModal"
                          tabindex="-1"
                          aria-labelledby="followerModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div
                                  v-for="follower in followerOfUsers"
                                  :key="follower.id"
                                  class="d-flex justify-content-between"
                                  style="margin: 0px 20px 20px 0"
                                >
                                  <div>
                                    <img
                                      :src="
                                        'http://localhost:8080' +
                                        follower.follower.avatar.replace('files', '')
                                      "
                                      width="50px"
                                      height="50px"
                                      style="border-radius: 50%; margin-right: 20px"
                                      alt=""
                                    />
                                    <a
                                      :href="
                                        'http://localhost:5173/personal/' + follower.follower.id
                                      "
                                      >{{ follower.follower.fullName }}</a
                                    >
                                  </div>
                                  <div v-if="follower.follower.id != currentUser.id">
                                    <button
                                      v-if="trackingFollowArr.get(follower.follower.id) == true"
                                      class="btn btn-primary"
                                      @click="unFollow(follower.follower.id)"
                                    >
                                      Đã theo dõi
                                    </button>
                                    <button
                                      v-else
                                      class="btn btn-outline-primary"
                                      @click="follow(follower.follower.id)"
                                    >
                                      Theo dõi
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center w-100"
                      >
                        <h6 class="m-0">Người đang theo dõi</h6>
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#followingModal"
                          @click="getFollow"
                          >{{ user.totalFollowee }}</a
                        >

                        <!-- Modal -->
                        <div
                          v-if="isLogin && user.totalFollowee > 0"
                          class="modal fade"
                          id="followingModal"
                          tabindex="-1"
                          aria-labelledby="followingModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div
                                  v-for="following in followingOfUsers"
                                  :key="following.id"
                                  class="d-flex justify-content-between"
                                  style="margin: 0px 20px 20px 0"
                                >
                                  <div>
                                    <img
                                      :src="
                                        'http://localhost:8080' +
                                        following.followee.avatar.replace('files', '')
                                      "
                                      width="50px"
                                      height="50px"
                                      style="border-radius: 50%; margin-right: 20px"
                                      alt=""
                                    />
                                    <a
                                      :href="
                                        'http://localhost:5173/personal/' + following.followee.id
                                      "
                                      >{{ following.followee.fullName }}</a
                                    >
                                  </div>
                                  <div v-if="following.followee.id != currentUser.id">
                                    <button
                                      v-if="trackingFollowArr.get(following.followee.id) == true"
                                      class="btn btn-primary"
                                      @click="unFollow(following.followee.id)"
                                    >
                                      Đã theo dõi
                                    </button>
                                    <button
                                      v-else
                                      class="btn btn-outline-primary"
                                      @click="follow(following.followee.id)"
                                    >
                                      Theo dõi
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li
                        class="list-group-item d-flex justify-content-between align-items-center w-100"
                      >
                        <h6 class="m-0">Số bài viết</h6>
                        <span>{{ posts.length }}</span>
                      </li>
                    </ul>
                    <div class="d-grid m-0" v-if="currentUser.id != user.id && isLogin">
                      <button
                        v-if="
                          !trackingFollowArr.has(user.id) || trackingFollowArr.get(user.id) == false
                        "
                        class="btn btn-outline-primary"
                        type="button"
                        @click="(user.totalFollower += 1), follow(user.id)"
                      >
                        Theo dõi
                      </button>
                      <button
                        v-else
                        class="btn btn-primary"
                        type="button"
                        @click="(user.totalFollower -= 1), unFollow(user.id)"
                      >
                        Đang theo dõi
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card widget-card border-light shadow-sm">
                  <div class="card-header bg-main">Tài khoản mạng xã hội</div>
                  <div class="card-body">
                    <a
                      :href="user.youtubeLink"
                      class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-youtube"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                        />
                      </svg>
                    </a>
                    <a
                      :href="user.twitterLink"
                      class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                        />
                      </svg>
                    </a>
                    <a
                      :href="user.facebookLink"
                      class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                        />
                      </svg>
                    </a>
                    <a
                      :href="user.linkedinLink"
                      class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="card widget-card border-light shadow-sm">
                  <div class="card-header bg-main">Thể loại</div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush mb-0">
                      <div v-for="category in categories" :key="category.id">
                        <li v-if="trackingCategory[category.id]" class="list-group-item w-100">
                          <div>
                            {{ category.name }}
                          </div>
                        </li>
                      </div>
                    </ul>
                    <button
                      v-if="isLogin && currentUser.id == user.id"
                      class="btn btn-light w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#categoryModalEdit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                        />
                      </svg>
                    </button>

                    <!-- modal -->
                    <div
                      class="modal fade"
                      id="categoryModalEdit"
                      tabindex="-1"
                      aria-labelledby="categoryModalEditLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div class="d-flex flex-column" style="margin-top: 10px">
                              <div
                                class="form-check"
                                v-for="(category, index) in categories"
                                :key="category.id"
                              >
                                <input
                                  v-model="trackingCategory[categories[index].id]"
                                  class="form-check-input"
                                  type="checkbox"
                                  value=""
                                  :id="category.id + 'category'"
                                />
                                <label class="form-check-label" :for="category.id + 'category'">
                                  {{ category.name }}
                                </label>
                              </div>
                            </div>
                            <button
                              @click="updateCategory()"
                              class="btn btn-primary w-100"
                              style="margin-top: 10px"
                            >
                              Cập nhật
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="col-12">
                  <div class="card widget-card border-light shadow-sm">
                    <div class="card-header bg-main">Các nhãn đã chọn</div>
                    <div class="card-body">
                      <span class="badge text-bg-primary">HTML</span>
                      <span class="badge text-bg-primary">SCSS</span>
                      <span class="badge text-bg-primary">Javascript</span>
                      <span class="badge text-bg-primary">React</span>
                      <span class="badge text-bg-primary">Vue</span>
                      <span class="badge text-bg-primary">Angular</span>
                      <span class="badge text-bg-primary">UI</span>
                      <span class="badge text-bg-primary">UX</span>
                    </div>
                  </div>
                </div> -->
            </div>
          </div>
          <div class="col-12 col-lg-8 col-xl-9">
            <div class="card widget-card border-light shadow-sm">
              <div class="card-body p-4">
                <ul class="nav nav-tabs" id="profileTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="overview-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#overview-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="overview-tab-pane"
                      aria-selected="true"
                    >
                      Tổng quan
                    </button>
                  </li>
                  <li class="nav-item" role="presentation" v-if="currentUser.id == user.id">
                    <button
                      class="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      Thông tin
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="post-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#post-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="post-tab-pane"
                      aria-selected="false"
                    >
                      Bài viết
                    </button>
                  </li>
                  <li class="nav-item" role="presentation" v-if="currentUser.id == user.id">
                    <button
                      class="nav-link"
                      id="password-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#password-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="password-tab-pane"
                      aria-selected="false"
                    >
                      Mật khẩu
                    </button>
                  </li>
                  <li class="nav-item" role="presentation" v-if="currentUser.id == user.id">
                    <button
                      class="nav-link"
                      id="bookmark-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#bookmark-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="bookmark-tab-pane"
                      aria-selected="false"
                    >
                      Yêu thích
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="rank-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#rank-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="rank-tab-pane"
                      aria-selected="false"
                    >
                      Xếp hạng
                    </button>
                  </li>
                </ul>
                <div class="tab-content pt-4" id="profileTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="overview-tab-pane"
                    role="tabpanel"
                    aria-labelledby="overview-tab"
                    tabindex="0"
                  >
                    <h5 class="mb-3">Giới thiệu</h5>
                    <p class="lead mb-3">{{ user.about }}</p>
                    <h5 class="mb-3">Thông tin</h5>
                    <div class="row g-0">
                      <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div class="p-2">Tên</div>
                      </div>
                      <div
                        class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
                      >
                        <div class="p-2">{{ user.firstName }}</div>
                      </div>
                      <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div class="p-2">Họ</div>
                      </div>
                      <div
                        class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
                      >
                        <div class="p-2">{{ user.lastName }}</div>
                      </div>
                      <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div class="p-2">Số điện thoại</div>
                      </div>
                      <div
                        class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
                      >
                        <div class="p-2">{{ user.phoneNumber }}</div>
                      </div>
                      <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div class="p-2">Email</div>
                      </div>
                      <div
                        class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3"
                      >
                        <div class="p-2">{{ user.email }}</div>
                      </div>
                      <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                        <div class="p-2">Ngày sinh</div>
                      </div>
                      <div
                        class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                        <div class="p-2">{{ user.birthday.slice(0, 10) }}</div>
                      </div>
                    </div>

                    <div>
                      <h5>Hoạt động</h5>
                      <CalendarHeatmap 
                      :values="[{ date: '2024-9-22', count: 6 }]"
                        :options="options"
                        :end-date="2025-9-22"
                      />

                      <div>
                        <table class="table table-borderless">
                          <tbody>
                            <tr v-for="el in eventLogs" :key="el.id">
                              <td>{{ el.createdAt.slice(0, 10) }}</td>
                              <td v-if="el.action == 'create'">Tạo</td>
                              <td v-if="el.action == 'comment'">Bình luận</td>
                              <td v-if="el.action == 'share'">Chia sẻ</td>
                              <td>
                                <a :href="'http://localhost:5173/post/' + el.post.id">{{
                                  el.post.title
                                }}</a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    <form @submit="onUpdateUser" class="row gy-3 gy-xxl-4">
                      <div class="col-12">
                        <div class="row gy-2">
                          <label class="col-12 form-label m-0">Ảnh đại diện</label>
                          <div class="col-12">
                            <img
                              :src="'http://localhost:8080' + user.avatar.replace('files', '')"
                              class="img-fluid img-thumbnail"
                              width="150px"
                              alt="Luna John"
                            />
                          </div>
                          <div class="col-12">
                            <a
                              href="#!"
                              class="d-inline-block bg-primary link-light lh-1 p-2 rounded m-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-upload"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
                                />
                                <path
                                  d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"
                                />
                              </svg>
                            </a>
                            <a
                              href="#!"
                              class="d-inline-block bg-danger link-light lh-1 p-2 rounded m-1"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-trash"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                                />
                                <path
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="inputFirstName" class="form-label">Tên</label>
                        <input
                          v-model="updateUserForm.firstName"
                          type="text"
                          class="form-control"
                          id="inputFirstName"
                          required
                        />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="inputLastName" class="form-label">Họ</label>
                        <input
                          v-model="updateUserForm.lastName"
                          type="text"
                          class="form-control"
                          id="inputLastName"
                          required
                        />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="inputPhone" class="form-label">Số điện thoại</label>
                        <input
                          v-model="updateUserForm.phoneNumber"
                          type="tel"
                          class="form-control"
                          id="inputPhone"
                          required
                        />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="inputYouTube" class="form-label">YouTube</label>
                        <input
                          v-model="updateUserForm.youtubeLink"
                          type="text"
                          class="form-control"
                          id="inputYouTube"
                        />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="inputX" class="form-label">X</label>
                        <input
                          v-model="updateUserForm.twitterLink"
                          type="text"
                          class="form-control"
                          id="inputX"
                        />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="inputFacebook" class="form-label">Facebook</label>
                        <input
                          v-model="updateUserForm.facebookLink"
                          type="text"
                          class="form-control"
                          id="inputFacebook"
                        />
                      </div>
                      <div class="col-12 col-md-6">
                        <label for="inputLinkedIn" class="form-label">LinkedIn</label>
                        <input
                          v-model="updateUserForm.linkedinLink"
                          type="text"
                          class="form-control"
                          id="inputLinkedIn"
                        />
                      </div>
                      <div class="col-12">
                        <label for="inputAbout" class="form-label">Giới thiệu</label>
                        <textarea
                          v-model="updateUserForm.about"
                          class="form-control"
                          id="inputAbout"
                          required
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary bg-main">Cập nhật</button>
                      </div>
                    </form>
                    <div
                      v-if="showUpdateUserFail"
                      class="alert alert-danger"
                      role="alert"
                      style="margin-top: 10px"
                    >
                      Cập nhật thông tin người dùng không thành công
                    </div>
                    <div
                      v-if="showUpdateUserSuccess"
                      class="alert alert-success"
                      role="alert"
                      style="margin-top: 10px"
                    >
                      Cập nhật thông tin người dùng thành công
                    </div>
                    <!-- toast -->
                    <div class="toast-container position-fixed bottom-0 start-0 p-6">
                      <div
                        class="toast"
                        id="liveToast"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div class="toast-body">
                          <div class="d-flex gap-4">
                            <span><i class="fa-solid fa-circle-check fa-lg icon-success"></i></span>
                            <div class="d-flex flex-column flex-grow-1 gap-2">
                              <div class="d-flex align-items-center">
                                <span class="fw-semibold">#1 Your changes were saved</span>
                                <button
                                  type="button"
                                  class="btn-close btn-close-sm ms-auto"
                                  data-bs-dismiss="toast"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <span>I will auto dismiss after 8 seconds.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--  -->
                  </div>
                  <div
                    class="tab-pane fade"
                    id="password-tab-pane"
                    role="tabpanel"
                    aria-labelledby="password-tab"
                    tabindex="0"
                  >
                    <form @submit="onUpdatePassword">
                      <div class="row gy-3 gy-xxl-4">
                        <div class="col-12">
                          <label for="currentPassword" class="form-label">Mật khẩu hiện tại</label>
                          <input
                            v-model="currentPassword"
                            type="password"
                            class="form-control"
                            id="currentPassword"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <label for="newPassword" class="form-label">Mật khẩu mới</label>
                          <input
                            v-model="newPassword"
                            type="password"
                            class="form-control"
                            id="newPassword"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <label for="confirmPassword" class="form-label">Xác nhận mật khẩu</label>
                          <input
                            v-model="repeatNewPassword"
                            type="password"
                            class="form-control"
                            id="confirmPassword"
                            required
                          />
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary bg-main">
                            Thay đổi mật khẩu
                          </button>
                        </div>
                      </div>
                      <div
                        v-if="showUpdatePasswordFail"
                        class="alert alert-danger"
                        role="alert"
                        style="margin-top: 10px"
                      >
                        Cập nhật mật khẩu không thành công, vui lòng kiểm tra lại các trường!
                      </div>
                      <div
                        v-if="showUpdatePasswordSuccess"
                        class="alert alert-success"
                        role="alert"
                        style="margin-top: 10px"
                      >
                        Cập nhật mật khẩu thành công
                      </div>
                    </form>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="post-tab-pane"
                    role="tabpanel"
                    aria-labelledby="post-tab"
                    tabindex="0"
                  >
                    <h5 class="mb-3">Tóm tắt</h5>
                    <p class="lead mb-3">Tổng số bài viết đã viết: {{ posts.length }}</p>

                    <div id="chart">
                      <apexchart
                        type="bar"
                        height="350"
                        :options="chartOptions"
                        :series="series"
                      ></apexchart>
                    </div>

                    <div class="row gy-3 gy-xxl-4">
                      <CardComponent :posts="posts"></CardComponent>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="bookmark-tab-pane"
                    role="tabpanel"
                    aria-labelledby="bookmark-tab"
                    tabindex="0"
                  >
                    <!-- <button class="btn btn-light w-100">Thêm</button> -->
                    <div v-for="(bookmark, index) in bookmarks" :key="bookmark.id">
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                          <button
                            class="btn btn-light m-2"
                            data-bs-toggle="modal"
                            :data-bs-target="'#editBookmarkModel' + bookmark.id"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pen"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"
                              />
                            </svg>
                          </button>

                          <!-- Modal -->
                          <div
                            class="modal fade"
                            :id="'editBookmarkModel' + bookmark.id"
                            tabindex="-1"
                            aria-labelledby="editBookmarkModelLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <div id="d-flex flex-column">
                                    <h5>Danh sách: {{ bookmark.name }}</h5>
                                  </div>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <div v-if="index > 0" class="d-flex w-100">
                                    <input
                                      v-model="bookmark.name"
                                      type="text"
                                      class="form-control w-100"
                                    />
                                    <button
                                      class="btn btn-primary w-25"
                                      @click="
                                        updateNameBookmark(
                                          bookmark.id,
                                          bookmark.name,
                                          bookmark.position
                                        )
                                      "
                                    >
                                      Cập nhật
                                    </button>
                                  </div>
                                  <div
                                    v-for="(bookmarkPost, index1) in bookmark.bookmarkPosts"
                                    :key="bookmarkPost.id"
                                    class="d-flex justify-content-between align-items-center"
                                  >
                                    <div class="d-flex align-items-center">
                                      <img
                                        :src="bookmarkPost.imageURL"
                                        width="100px"
                                        alt=""
                                        class="m-2 img-thumbnail"
                                      />
                                      <div>
                                        <a
                                          :href="
                                            'http://localhost:5173/post/' + bookmarkPost.postId
                                          "
                                          >{{ bookmarkPost.title }}</a
                                        >
                                      </div>
                                    </div>
                                    <div class="">
                                      <button
                                        class="btn btn-danger"
                                        @click="
                                          deletePostFromBookmark(
                                            bookmark.id,
                                            bookmarkPost.id,
                                            index,
                                            index1
                                          )
                                        "
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          fill="currentColor"
                                          class="bi bi-trash"
                                          viewBox="0 0 16 16"
                                        >
                                          <path
                                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                                          />
                                          <path
                                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div style="font-size: larger">{{ bookmark.name }}</div>
                        </div>
                        <button
                          v-if="index > 0"
                          class="btn btn-danger"
                          data-bs-toggle="modal"
                          :data-bs-target="'#deleteBookmark' + bookmark.id"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-trash"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                            />
                            <path
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                            />
                          </svg>
                        </button>

                        <!-- Modal -->
                        <div
                          class="modal fade"
                          :id="'deleteBookmark' + bookmark.id"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                              <div class="modal-body">Bạn có chắc chắn muốn xóa danh sách này?</div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Hủy bỏ
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  @click="deleteBookmark(bookmark.id, index)"
                                >
                                  Xóa
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CardComponent
                        v-if="bookmark.bookmarkPosts != null && bookmark.bookmarkPosts.length > 0"
                        :posts="VisiblePost(index)"
                      ></CardComponent>
                      <div
                        v-if="bookmark.bookmarkPosts != null && bookmark.bookmarkPosts.length > 0"
                        class="d-flex justify-content-center"
                      >
                        <button
                          @click="postVisibles[index] += steps[index]"
                          v-if="postVisibles[index] < trackingBookmarkPost[index].length"
                          class="btn moreBtn"
                          style="
                            width: 31%;
                            border-radius: 50px;
                            border: 2px solid #2b517a;
                            margin-left: 10px;
                          "
                        >
                          Xem thêm >>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="currentRank != null"
                    class="tab-pane fade"
                    id="rank-tab-pane"
                    role="tabpanel"
                    aria-labelledby="rank-tab"
                    tabindex="0"
                  >
                    <div class="d-flex justify-content-start">
                      <img
                        width="100px"
                        height="100px"
                        v-if="currentRank.rankLevel != null"
                        :src="
                          'http://localhost:8080' +
                          currentRank.rankLevel.imageURL.replace('files', '')
                        "
                        alt=""
                      />
                      <div v-if="currentRank.rankLevel != null" style="margin-left: 50px">
                        <div>
                          <span
                            >Mức xếp hạng hiện tại:
                            <span style="font-weight: bold">{{ currentRank.rankLevel.name }}</span>
                          </span>
                        </div>
                        <div>
                          <span
                            >Ngày đạt được:
                            <span style="font-weight: bold">{{
                              currentRank.createdAt.slice(0, 10)
                            }}</span>
                          </span>
                        </div>
                        <div>
                          <span
                            >Tiến độ:
                            <span style="font-weight: bold">{{ currentRank.process }}%</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div style="margin-top: 30px">
                      <h5>Lịch sử xếp hạng</h5>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Ngày đạt được</th>
                            <th scope="col"></th>
                            <th scope="col">Tên</th>
                            <th scope="col">Tiến trình</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="rank in ranks" :key="rank.id">
                            <th scope="row" v-if="rank.createdAt != null">
                              {{ rank.createdAt.slice(0, 10) }}
                            </th>
                            <td v-if="rank.rankLevel != null">
                              <img
                                width="25px"
                                height="25px"
                                :src="
                                  'http://localhost:8080' +
                                  rank.rankLevel.imageURL.replace('files', '')
                                "
                                alt=""
                              />
                            </td>
                            <td v-if="rank.rankLevel != null">{{ rank.rankLevel.name }}</td>
                            <td>{{ rank.process }}%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// declare var bootstrap: any;
import HeaderComponent from '@/components/HeaderComponent.vue'
// @ts-ignore
import SidebarComponent from '@/components/SidebarComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import bookmarksService from '@/services/bookmarks.service'
import categoriesService from '@/services/categories.service'
import eventLogsService from '@/services/eventLog.service'
import followsService from '@/services/follows.service'
import usersService from '@/services/users.service'
import postsService from '@/services/posts.service'
import { CalendarHeatmap } from 'vue3-calendar-heatmap'

import checkLogin from '@/utilities/utilities'

import { useCookies } from 'vue3-cookies'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
import { onMounted, ref } from 'vue'
import rankService from '@/services/rank.service'

var postVisibles = ref([] as number[])
const route = useRoute()

const date = new Date(2024, 12 , 31)
const id = Number(route.params.id)

const contributionData = [
  { date: new Date(2024, 1, 1), count: 2 } // February 1st, 2 contributions
  // ... add more objects for other days
]
var steps = ref([] as number[])

const options = {
  // weekdayStart: 1, // Start week on Monday
  color: (count: any) => {
    if (count === 0) return 'white'
    if (count > 5) return 'red'
    return `hsl(${count * 20}, 100%, 50%)` // Custom color based on count
  }
}

const notifyDeleteBookmarkPost = () => {
  toast.success('Đã xóa!', {
    autoClose: 1000
  }) // ToastOptions
}

const user = ref({
  id: 0,
  createdAt: '',
  updatedAt: '',
  deletedAt: null,
  email: '',
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  fullName: '',
  about: '',
  youtubeLink: '',
  facebookLink: '',
  linkedinLink: '',
  twitterLink: '',
  totalFollower: 5,
  totalFollowee: 3,
  refreshToken: null,
  phoneNumber: '',
  birthday: '',
  avatar: '',
  role: '',
  categories: [
    {
      id: 0,
      createdAt: '',
      updatedAt: '',
      deletedAt: null,
      name: '',
      imageURL: null
    }
  ]
})

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
    readTime: '',
    totalLike: '',
    totalDislike: '',
    totalShare: '',
    categoryId: '',
    createdById: '',
    contentSourceId: '',
    tags: [
      {
        id: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: null,
        name: '',
        categoryId: '',
        createdById: ''
      }
    ],
    contentSource: {
      id: '',
      createdAt: '',
      updatedAt: '',
      deletedAt: null,
      name: '',
      avatar: ''
    },
    category: {
      id: 1,
      createdAt: '',
      updatedAt: '',
      deletedAt: null,
      name: '',
      imageURL: null
    },
    createdBy: {
      id: '',
      createdAt: '',
      updatedAt: '',
      deletedAt: null,
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
      fullName: '',
      refreshToken: null,
      phoneNumber: '',
      birthday: '',
      avatar: '',
      role: ''
    },
    sharePost: null,
    sharedByPosts: [],
    comments: []
  }
])

const chartOptions = ref({
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: [] as string[]
  },
  yaxis: {
    title: {
      text: 'Luot'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val: any) {
        return val + ' lượt '
      }
    }
  }
})

const series = ref([
  {
    name: 'Thích',
    data: [] as number[]
  },
  {
    name: 'Không thích',
    data: []
  },
  {
    name: 'Chia sẻ ',
    data: []
  }
])

const currentUser = ref({
  id: 0,
  createdAt: '',
  updatedAt: '',
  deletedAt: null,
  email: '',
  username: '',
  firstName: '',
  lastName: '',
  fullName: '',
  about: null,
  youtubeLink: null,
  facebookLink: null,
  linkedinLink: null,
  twitterLink: null,
  totalFollower: 0,
  totalFollowee: 0,
  refreshToken: null,
  phoneNumber: '',
  birthday: '',
  avatar: '',
  role: '',
  categories: [
    {
      id: 0,
      createdAt: '',
      updatedAt: '',
      deletedAt: null,
      name: '',
      imageURL: null
    }
  ]
})

const cookies = useCookies()
const tokenBearer = cookies.cookies.get('Token')
const newPassword = ref('')
const currentPassword = ref('')
const repeatNewPassword = ref('')
const updateUserForm = ref({
  phoneNumber: '',
  lastName: '',
  firstName: '',
  about: '',
  youtubeLink: '',
  facebookLink: '',
  linkedinLink: '',
  twitterLink: ''
})
type followType = {
  id: 0
  createdAt: ''
  updatedAt: ''
  deletedAt: null
  followerId: 0
  followeeId: 0
  followee: {
    id: 1
    createdAt: ''
    updatedAt: ''
    deletedAt: null
    email: 'd'
    username: ''
    firstName: ''
    lastName: ''
    fullName: ''
    about: null
    youtubeLink: null
    facebookLink: null
    linkedinLink: null
    twitterLink: null
    totalFollower: 0
    totalFollowee: 0
    refreshToken: null
    phoneNumber: ''
    birthday: ''
    avatar: ''
    role: ''
  }
  follower: {
    id: 2
    createdAt: ''
    updatedAt: ''
    deletedAt: null
    email: ''
    username: ''
    firstName: ''
    lastName: ''
    fullName: ''
    about: null
    youtubeLink: null
    facebookLink: null
    linkedinLink: null
    twitterLink: null
    totalFollower: 0
    totalFollowee: 0
    refreshToken: null
    phoneNumber: ''
    birthday: ''
    avatar: ''
    role: ''
  }
}

const bookmarks = ref([
  {
    id: 0,
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    name: '',
    ownerId: 0,
    position: 0,
    bookmarkPosts: [
      {
        id: 0,
        createdAt: '',
        updatedAt: '',
        deletedAt: null,
        bookmarkId: 0,
        postId: 0,
        position: 0,
        title: '',
        imageURL: '',
        createdById: null,
        isDeleted: false,
        createdBy: null
      }
    ]
  }
])

const categories = ref([
  {
    id: 0,
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    name: '',
    imageURL: null
  }
])

type rank = {
  id: 0
  createdAt: ''
  updatedAt: ''
  deletedAt: null
  rankLevelId: 0
  ownerId: 0
  process: 0
  isLock: false
  rankLevel: {
    id: 0
    createdAt: ''
    updatedAt: ''
    deletedAt: null
    name: ''
    imageURL: ''
  }
  owner: {}
}

const ranks = ref([{} as rank])
const currentRank = ref({} as rank)

const showUpdateUserFail = ref(false)
const showUpdateUserSuccess = ref(false)
const showUpdatePasswordFail = ref(false)
const showUpdatePasswordSuccess = ref(false)

const followers = ref([] as followType[])
const followings = ref([] as followType[])
const followerOfUsers = ref([] as followType[])
const followingOfUsers = ref([] as followType[])
const trackingFollowArr = ref(new Map<number, boolean>())
const trackingCategory = ref({} as Record<number, boolean>)
const trackingBookmarkPost = ref([
  [
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
      contentSource: {
        id: 0,
        createdAt: '',
        updatedAt: '',
        deletedAt: null,
        name: '',
        avatar: ''
      },
      category: {
        id: 0,
        createdAt: '',
        updatedAt: '',
        deletedAt: null,
        name: '',
        imageURL: null
      },
      createdBy: {
        id: 3,
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
      },
      sharePost: null,
      sharedByPosts: []
    }
  ]
])

const eventLogs = ref([
  {
    id: 0,
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    action: '',
    actorId: 0,
    postId: 0,
    note: null,
    actor: {},
    post: {
      id: 0,
      createdAt: '',
      updatedAt: '',
      deletedAt: null,
      title: '',
      content: '',
      sharePostId: null,
      originalPostURL: null,
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
      contentSourceId: null
    }
  }
])

// filter posts
function VisiblePost(position: number) {
  return trackingBookmarkPost.value[position].slice(0, postVisibles.value[position])
}

async function deletePostFromBookmark(
  bookmarkId: number,
  bookmarkPostId: number,
  position: number,
  position1: number
) {
  try {
    await bookmarksService.deleteRelation(bookmarkId, bookmarkPostId, tokenBearer)
    bookmarks.value[position].bookmarkPosts.splice(position1, 1)
    trackingBookmarkPost.value[position].splice(position1, 1)
    notifyDeleteBookmarkPost()
  } catch (error) {
    console.log(error)
  }
}

async function deleteBookmark(bookmarkId: number, position: number) {
  try {
    await bookmarksService.delete(bookmarkId, tokenBearer)
    bookmarks.value.splice(position, 1)

    notifyDeleteBookmarkPost()
  } catch (error) {
    console.log(error)
  }
}

async function getFollow() {
  let fs = await followsService.getAllByFollowerId(currentUser.value.id)
  followings.value = fs.data
  for (let i = 0; i < followings.value.length; i++) {
    trackingFollowArr.value.set(followings.value[i].followeeId, true)
  }
  let fs1 = await followsService.getAllByFolloweeId(currentUser.value.id)
  followers.value = fs1.data

  let fs2 = await followsService.getAllByFollowerId(user.value.id)
  followingOfUsers.value = fs2.data

  let fs3 = await followsService.getAllByFolloweeId(user.value.id)
  followerOfUsers.value = fs3.data
}

async function follow(followeeId: number) {
  try {
    if (user.value.id == currentUser.value.id) user.value.totalFollowee += 1
    trackingFollowArr.value.set(followeeId, true)
    await followsService.create(tokenBearer, { followeeId })
  } catch (err) {
    console.log(err)
  }
}

async function unFollow(followeeId: number) {
  try {
    if (user.value.id == currentUser.value.id) user.value.totalFollowee -= 1
    trackingFollowArr.value.set(followeeId, false)
    await followsService.delete(followeeId, tokenBearer)
  } catch (err) {
    console.log(err)
  }
}

async function updateCategory() {
  try {
    let cs = [] as number[]
    categories.value.forEach((category) => {
      if (trackingCategory.value[category.id]) {
        cs.push(category.id)
      }
    })
    await usersService.setCategories(user.value.id, cs, tokenBearer)
  } catch (err) {
    console.log(err)
  }
}

var onUpdateUser = async (e: any) => {
  e.preventDefault()
  try {
    await usersService.update(user.value.id, updateUserForm.value, tokenBearer)
    user.value.phoneNumber = updateUserForm.value.phoneNumber
    user.value.lastName = updateUserForm.value.lastName
    user.value.firstName = updateUserForm.value.firstName
    user.value.fullName = updateUserForm.value.lastName + ' ' + updateUserForm.value.firstName
    user.value.about = updateUserForm.value.about
    user.value.youtubeLink = updateUserForm.value.youtubeLink
    user.value.facebookLink = updateUserForm.value.facebookLink
    user.value.linkedinLink = updateUserForm.value.linkedinLink
    user.value.twitterLink = updateUserForm.value.twitterLink
    showUpdateUserSuccess.value = true
    showUpdateUserFail.value = false
  } catch (err: any) {
    console.log(err)
  }
}

async function updateNameBookmark(id: number, name: string, position: number) {
  try {
    await bookmarksService.update(
      id,
      {
        name: name,
        position: position
      },
      tokenBearer
    )
    toast.success('Đã sửa thành công!', {
      autoClose: 1000
    })
  } catch (error) {
    console.log(error)
  }
}

var onUpdatePassword = async (e: any) => {
  e.preventDefault()
  try {
    if (currentPassword.value != '123123123' || newPassword.value != repeatNewPassword.value) {
      showUpdatePasswordFail.value = true
      showUpdatePasswordSuccess.value = false
      return
    }
    await usersService.update(
      user.value.id,
      {
        password: newPassword.value
      },
      tokenBearer
    )

    showUpdatePasswordSuccess.value = true
    showUpdatePasswordFail.value = false
  } catch (err: any) {
    console.log(err)
  }
}
const isLogin = ref(false)
try {
  currentUser.value = await checkLogin()
  if (currentUser.value !== null && currentUser.value['id'] !== null) {
    isLogin.value = true
  }
} catch (err) {
  console.log(err)
}

onMounted(async () => {
  try {
    // get one user
    user.value = await usersService.getOne(id)
    updateUserForm.value.phoneNumber = user.value.phoneNumber
    updateUserForm.value.lastName = user.value.lastName
    updateUserForm.value.firstName = user.value.firstName
    updateUserForm.value.about = user.value.about
    updateUserForm.value.youtubeLink = user.value.youtubeLink
    updateUserForm.value.facebookLink = user.value.facebookLink
    updateUserForm.value.linkedinLink = user.value.linkedinLink
    updateUserForm.value.twitterLink = user.value.twitterLink

    let rankTemp = await rankService.getAllByOwnerId(user.value.id)
    ranks.value = rankTemp.data

    let currentRankTemp = await rankService.getCurrentRankOfUser(user.value.id)
    currentRank.value = currentRankTemp.data[0]

    // categories
    let csTemp = await categoriesService.getAll()
    categories.value = csTemp.data
    categories.value.forEach((category) => {
      trackingCategory.value[category.id] = false
    })
    user.value.categories.forEach((category) => {
      trackingCategory.value[category.id] = true
    })

    //get all post for user
    let resp = await postsService.getAllForUser(user.value.id)

    let ps: typeof resp.data = []
    for (const p of resp.data) {
      let post = await postsService.getOne(p.id)
      series.value[0].data.push(p.totalLike)
      series.value[1].data.push(p.totalDislike)
      series.value[2].data.push(p.totalShare)
      chartOptions.value.xaxis.categories.push(p.title)
      ps.push(post)
    }
    posts.value = ps

    // bookmark
    let myBs = await bookmarksService.getMy(tokenBearer)
    bookmarks.value = myBs.data
    let arrTemp = []
    for (let i = 0; i < bookmarks.value.length; i++) {
      let ps = []
      for (let j = 0; j < bookmarks.value[i].bookmarkPosts.length; j++) {
        let p = await postsService.getOne(bookmarks.value[i].bookmarkPosts[j].postId)
        ps.push(p)
      }
      arrTemp[i] = ps
      postVisibles.value[i] = 3
      steps.value[i] = 3
    }
    trackingBookmarkPost.value = arrTemp

    // event log
    let els = await eventLogsService.getAllByActorId(user.value.id)
    eventLogs.value = els.data
  } catch (err) {
    console.log(err)
  }
})
</script>
<style>
.offcanvas {
  top: 0;
  margin: 0;
}
.bg-main {
  background-color: var(--main-color);
  color: white;
}

.list-group-item {
  text-align: center;
  font-weight: bold;
  width: 200px;
}

.nav-link {
  color: var(--main-color);
}
.avatar {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  overflow: hidden;
} 
</style>
