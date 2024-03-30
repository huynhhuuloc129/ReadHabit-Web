<template>
  <Suspense>
    <HeaderComponent text-color="black"></HeaderComponent>
    <template #fallback> </template>
  </Suspense>
  <Suspense>
    <SidebarComponent text-color="black"></SidebarComponent>
  </Suspense>
  <div class="d-flex" style="margin: 0">
    <nav id="sidebarMenu" style="z-index: 0" class="bg-white sticky-top">
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a href="#" class="list-group-item list-group-item-action py-2 ripple active" aria-current="true"
            data-bs-toggle="tab" data-bs-target="#dashboard">
            <i class="fas fa-chart-line fa-fw me-3"></i>
            <span>Bảng thống kê</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="false"
            data-bs-toggle="tab" data-bs-target="#post" aria-controls="post">
            <i class="fa-solid fa-newspaper fa-fw me-3"></i>
            <span>Bài viết</span>
          </a>

          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="false"
            data-bs-toggle="tab" data-bs-target="#users" aria-controls="users">
            <i class="fa-solid fa-users fa-fw me-3"></i>
            <span>Người dùng</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="false"
            data-bs-toggle="tab" data-bs-target="#categories" aria-controls="categories">
            <i class="fa-solid fa-list fa-fw me-3"></i>
            <span>Thể loại và nhãn</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="false"
            data-bs-toggle="tab" data-bs-target="#contentSource" aria-controls="contentSource">
            <i class="fa-solid fa-people-group fa-fw me-3"></i>
            <span>Nguồn</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="false"
            data-bs-toggle="tab" data-bs-target="#eventLog" aria-controls="eventLog">
            <i class="fa-solid fa-calendar-days fa-fw me-3"></i>
            <span>Hoạt động</span>
          </a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple" aria-current="false"
            data-bs-toggle="tab" data-bs-target="#generatePost" aria-controls="generatePost">
            <i class="fa-solid fa-gears fa-fw me-3"></i>
            <span>Tạo bài viết nhanh</span>
          </a>
        </div>
      </div>
    </nav>

    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active mt-4" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab"
        style="width: 80vw">
        <div class="container d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Bảng thống kê</h1>
          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
              class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div class="container d-flex justify-content-between">
          <div class="mb-4">
            <div class="card border-left-primary shadow h-100 py-2" style="border-left: 5px solid #8cccfa">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Tổng số người dùng
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ users.length }}</div>
                  </div>
                  <div class="col-auto">
                    <i class="fas fa-users fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <div class="card border-left-success shadow h-100 py-2" style="border-left: 5px solid #cb444a">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">
                      Tổng số bài viết
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">{{ posts.length }}</div>
                  </div>
                  <div class="col-auto">
                    <i class="fa-solid fa-newspaper fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <div class="card border-left-info shadow h-100 py-2" style="border-left: 5px solid #6cc7ec">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Số lượt tương tác
                    </div>
                    <div class="row no-gutters align-items-center">
                      <div class="col-auto">
                        <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          {{ reactions.total }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fa-regular fa-thumbs-up fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-4">
            <div class="card border-left-warning shadow h-100 py-2" style="border-left: 5px solid #f6c352">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Bài viết cần phê duyệt
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      {{ postsReviewing.length }}
                    </div>
                  </div>
                  <div class="col-auto">
                    <i class="fa-solid fa-hourglass-start fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-flex justify-content-between">
          <div class="flex-grow-1" style="margin-right: 30px">
            <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Thống kê người dùng</h6>
              </div>
              <div class="card-body">
                <BarChart v-bind="barChartProps" />
              </div>
            </div>
          </div>

          <div class="">
            <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-danger">Thống kê bài viết</h6>
              </div>
              <div class="card-body">
                <PieChart v-bind="pieChartProps"></PieChart>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="post" role="tabpanel" aria-labelledby="post-tab" style="width: 80vw">
        <div>
          <div class="container mt-4 px-2">
            <h5 class="mb-2 d-flex justify-content-between align-items-center">
              Thông tin tất cả bài viết đã xuất bản
            </h5>
            <hr />
            <div class="position-relative">
              <span class="position-absolute search"><i class="fa fa-search"></i></span>
              <input v-model="search" class="form-control form-control-special w-100"
                placeholder="Tìm kiếm bằng tên bài viết" />
            </div>
            <div class="table-responsive">
              <table class="table table-responsive">
                <thead>
                  <tr class="bg-light">
                    <th scope="col" width="1%">ID</th>
                    <th scope="col" width="10%">Ngày tạo</th>
                    <th scope="col" width="15%">Loại</th>
                    <th scope="col" width="25%">Tên bài viết</th>
                    <th scope="col" width="17%">Người tạo</th>
                    <th scope="col" width="9%" class="text-center">Lượt thích</th>
                    <th scope="col" width="11%" class="text-center">Lượt chia sẻ</th>
                    <th scope="col" class="text-end" width="10%"><span></span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="post in VisiblePost()" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.createdAt.slice(0, 10) }}</td>
                    <td>{{ post.type }}</td>
                    <td>{{ post.title }}</td>
                    <td>
                      <img style="border-radius: 50%; margin-right: 5px"
                        :src="'http://localhost:8080' + post.createdBy.avatar.replace('files', '')" width="25"
                        height="25" />{{ post.createdBy.fullName }}
                    </td>
                    <td class="text-center">{{ post.totalLike }}</td>
                    <td class="text-center">{{ post.totalShare }}</td>

                    <td class="text-end">
                      <a :href="'http://localhost:5173/post/' + post.id" class="btn btn-primary">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-center">
                <button @click="postVisibles += steps" v-if="postVisibles < posts.length && search == ''"
                  class="btn moreUser" style="border-radius: 50px; border: 2px solid black; margin-left: 10px">
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
            <hr />
            <div class="position-relative">
              <span class="position-absolute search"><i class="fa fa-search"></i></span>
              <input v-model="searchReview" class="form-control form-control-special w-100"
                placeholder="Tìm kiếm bằng tên bài viết" />
            </div>
            <div class="table-responsive">
              <table class="table table-responsive">
                <thead>
                  <tr class="bg-light">
                    <th scope="col" width="1%">ID</th>
                    <th scope="col" width="10%">Ngày tạo</th>
                    <th scope="col" width="15%">Loại</th>
                    <th scope="col" width="40%">Tên bài viết</th>
                    <th scope="col" width="20%">Người tạo</th>
                    <th scope="col" class="text-end" width="20%"><span></span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="post in VisiblePostReviewing()" :key="post.id">
                    <td>{{ post.id }}</td>
                    <td>{{ post.createdAt.slice(0, 10) }}</td>
                    <td>{{ post.type }}</td>
                    <td>{{ post.title }}</td>
                    <td class="align-items-center">
                      <img style="border-radius: 50%; margin-right: 5px"
                        :src="'http://localhost:8080' + post.createdBy.avatar.replace('files', '')" width="25"
                        height="25" />{{ post.createdBy.fullName }}
                    </td>

                    <td class="text-end d-flex">
                      <button class="btn btn-success" style="margin-right: 5px">Duyệt</button>
                      <button class="btn btn-danger" style="margin-right: 5px">Từ chối</button>

                      <a :href="'http://localhost:5173/post/' + post.id" class="btn btn-primary">Chi tiết</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-center">
                <button @click="postVisiblesReviewing += stepsReviewing"
                  v-if="postVisiblesReviewing < postsReviewing.length && searchReview == ''" class="btn moreUser"
                  style="border-radius: 50px; border: 2px solid black">
                  Xem thêm >>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab" style="width: 80vw">
        <div>
          <div class="container mt-5 px-2">
            <h5 class="mb-2 d-flex justify-content-between align-items-center">
              Thông tin tất cả người dùng của hệ thống
            </h5>
            <hr />
            <div class="position-relative">
              <span class="position-absolute search"><i class="fa fa-search"></i></span>
              <input v-model="searchUser" class="form-control form-control-special w-100"
                placeholder="Tìm kiếm bằng tên người dùng" />
            </div>
            <div class="table-responsive">
              <table class="table table-responsive">
                <thead>
                  <tr class="bg-light">
                    <th scope="col" width="1%">ID</th>
                    <th scope="col" width="10%">Ngày tạo</th>
                    <th scope="col" width="15%">Tài khoản</th>
                    <th scope="col" width="35%">Tên đầy đủ</th>
                    <th scope="col" width="15%">Email</th>
                    <th scope="col" width="13%">Loại tài khoản</th>
                    <th scope="col" class="text-end" width="20%"><span></span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in VisibleUser()" :key="user.id">
                    <td scope="row">{{ user.id }}</td>
                    <td scope="row">{{ user.createdAt.slice(0, 10) }}</td>
                    <td scope="row">
                      {{ user.username }}
                    </td>
                    <td class="align-items-center">
                      <img style="border-radius: 50%; margin-right: 5px"
                        :src="'http://localhost:8080' + user.avatar.replace('files', '')" width="25" height="25" />
                      <a class="userNameLink" :href="'http://localhost:5173/personal/' + user.id" target="_blank"
                        style="color: black">
                        {{ user.fullName }}
                      </a>

                    </td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td class="text-end d-flex">
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalUpdateUser"
                        @click="(chooseUserIndex = index), (chooseRole = user.role)">
                        Cập nhật
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center">
                <button @click="userVisibles += stepsUser" v-if="userVisibles < users.length && searchUser == ''"
                  class="btn moreUser" style="border-radius: 50px; border: 2px solid black">
                  Xem thêm >>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="categories" role="tabpanel" aria-labelledby="categories-tab" style="width: 80vw">
        <h5 class="mb-2 d-flex justify-content-between align-items-center">
          Thông tin tất cả thể loại và nhãn của hệ thống
        </h5>

        <div class="d-flex align-items-start w-100 justify-content-between">
          <div class="nav flex-column nav-pills me-3 w-25" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="btn btn-outline-primary d-flex justify-content-between"
              v-for="(category, index) in categories" :key="category.id" style="margin-bottom: 5px; width: 300px;"
              :id="'v-pills-' + category.id + '-tab'" data-bs-toggle="pill" :data-bs-target="'#v-pills-' + category.id"
              type="button" role="tab" :aria-controls="'v-pills-' + category.id" aria-selected="false"
              @click="getAllTagsForCategory(category.id, index);">
              {{ category.name }}
              <div>
                <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#updateCategoryModal"
                  style="margin-right: 5px">
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmDeleteCategoryModal">
                  <i class="fa-solid fa-trash"></i>
                </button>

              </div>
            </button>
            <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#addCategory">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade" v-for="category in categories" :key="category.id" :id="'v-pills-' + category.id"
              role="tabpanel" :aria-labelledby="'v-pills-' + category.id + '-tab'">
              <span v-for="(tag, index) in tags" :key="tag.id" class="btn btn-secondary"
                style="margin: 5px 5px 0 0; color: white; cursor: default">
                {{ tag.name }}
                <button class="btn btn-secondary" @click="deleteTag(tag.id, index)">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </span>
              <button class="btn btn-light" style="margin: 5px 5px 0 0" data-bs-toggle="modal" data-bs-target="#addTag">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="contentSource" role="tabpanel" aria-labelledby="contentSource-tab"
        style="width: 80vw">
        <div>
          <div class="container mt-5 px-2">
            <h5 class="mb-2 d-flex justify-content-between align-items-center">
              Thông tin tất cả nguồn của hệ thống
            </h5>
            <hr />
            <div class="position-relative">
              <span class="position-absolute search"><i class="fa fa-search"></i></span>
              <input v-model="searchContentSource" class="form-control form-control-special w-100"
                placeholder="Tìm kiếm bằng tên nguồn" />
            </div>
            <div class="table-responsive">
              <button class="btn btn-light w-100" data-bs-toggle="modal"
                data-bs-target="#addContentSourceModal">Thêm</button>
              <table class="table table-responsive">
                <thead>
                  <tr class="bg-light">
                    <th scope="col" width="1%">ID</th>
                    <th scope="col" width="10%">Ngày tạo</th>
                    <th scope="col" width="69%">Tên</th>
                    <th scope="col" class="text-end" width="30%"><span></span></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(cs, index) in VisibleContentSource()" :key="cs.id">
                    <td>{{ cs.id }}</td>
                    <td>{{ cs.createdAt.slice(0, 10) }}</td>
                    <td class="align-items-center">
                      <img style="border-radius: 50%; margin-right: 10px;"
                        :src="'http://localhost:8080' + cs.avatar.replace('files', '')" width="25px" height="25px" />{{
                      cs.name }}
                    </td>
                    <td class="text-end d-flex">
                      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateContentSourceModal"
                        style="margin-right: 5px"
                        @click="choosenContentSourceId = cs.id; choosenContentSourceIndex = index; newContentSourceName = cs.name">
                        Cập nhật
                      </button>

                      <button class="btn btn-danger" data-bs-toggle="modal"
                        data-bs-target="#confirmDeleteContentSourceModal"
                        @click="choosenContentSourceId = cs.id; choosenContentSourceIndex = index">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="text-center">
                <button @click="contentSourceVisibles += stepsContentSource"
                  v-if="contentSourceVisibles < contentSources.length && searchContentSource == ''" class="btn moreUser"
                  style="border-radius: 50px; border: 2px solid black">
                  Xem thêm >>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="eventLog" role="tabpanel" aria-labelledby="eventLog-tab" style="width: 80vw">
        <div v-if="eventLogs[0].id != 0">
          <div>
            <h5>Danh sách hoạt động của toàn hệ thống</h5>
            <table class="table table-borderless">
              <thead>
                <tr class="bg-light">
                  <th scope="col">Ngày</th>
                  <th scope="col">Người thực hiện</th>
                  <th scope="col">Hành động</th>
                  <th scope="col">Tên bài viết</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="el in eventLogs" :key="el.id">
                  <td>{{ el.createdAt.slice(0, 10) }}</td>
                  <td>
                    <img style="border-radius: 50%; margin-right: 10px;"
                      :src="'http://localhost:8080' + el.actor.avatar.replace('files', '')" width="30px" height="30px"
                      alt="">
                    {{ el.actor.fullName }}
                  </td>
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

      <div class="tab-pane fade" id="generatePost" role="tabpanel" aria-labelledby="generatePost-tab"
        style="width: 80vw">
        <GenerateFormComponent></GenerateFormComponent>
      </div>

      <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
        ...
      </div>
    </div>

    <div id="modalUpdateUser" class="modal fade" tabindex="-8" aria-labelledby="editUserModelLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div id="d-flex flex-column">
              <h5>Cập nhật vai trò của tài khoản {{ users[chooseUserIndex].username }}</h5>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-check">
              <input value="admin" v-model="chooseRole" class="form-check-input" type="radio" name="flexRadioDefault"
                id="flexRadioAdmin" />
              <label class="form-check-label" for="flexRadioAdmin"> Quản trị viên </label>
            </div>
            <div class="form-check">
              <input value="member" v-model="chooseRole" class="form-check-input" type="radio" name="flexRadioDefault"
                id="flexRadioMember" checked />
              <label class="form-check-label" for="flexRadioMember"> Thành viên </label>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="updateUser()">Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="confirmDeleteCategoryModal" tabindex="-1"
    aria-labelledby="confirmDeleteCategoryModelLabal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteCategoryModelLabal">Bạn có chắc chắn muốn xóa thể loại này (tất cả
            bài
            viết thuộc thể loại sẽ bị xóa)</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteCategory()">Xóa</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="updateCategoryModal" tabindex="-1" aria-labelledby="udpateCategoryModelLabal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="">Chỉnh sửa thể loại</h5>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" v-model="newCategoryName" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateCategory">Cập
            nhật</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal add tag -->
  <div class="modal fade" id="addTag" tabindex="-1" aria-labelledby="addTagLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="">Thêm nhãn dán</h5>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" v-model="newTagName" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addTag">Thêm</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal add category -->
  <div class="modal fade" id="addCategory" tabindex="-1" aria-labelledby="addCategoryLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="">Thêm thể loại</h5>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" v-model="addCategoryName" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="addCategory">Thêm</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Confirm delete category -->
  <div class="modal fade" id="confirmDeleteContentSourceModal" tabindex="-1"
    aria-labelledby="confirmDeleteContentSourceModelLabal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmDeleteContentSourceModelLabal">Bạn có chắc chắn muốn xóa nguồn này (tất cả
            bài viết thuộc người dùng này sẽ bị xóa)</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
            @click="deleteContentSource();">Xóa</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>

  <!-- update content source modal -->
  <div class="modal fade" id="updateContentSourceModal" tabindex="-1" aria-labelledby="udpateContentSourceModelLabal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="">Chỉnh sửa nguồn</h5>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" v-model="newContentSourceName" required>
          <input type="file" @change="previewFile($event)" class="form-control">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="updateContentSource">Cập
            nhật</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>

  <!-- add content source modal -->
  <div class="modal fade" id="addContentSourceModal" tabindex="-1" aria-labelledby="addContentSourceModelLabal"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="">Thêm nguồn</h5>
        </div>
        <div class="modal-body">
          <input type="text" class="form-control" v-model="addContentSourceName" required>
          <input type="file" @change="previewFileAdd($event)" class="form-control" required>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="addContentSource">Thêm</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GenerateFormComponent from '@/components/GenerateFormComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
// @ts-ignore
import SidebarComponent from '@/components/SidebarComponent.vue'
import { Chart, registerables } from 'chart.js'
import { BarChart, useBarChart, PieChart, usePieChart } from 'vue-chart-3'
import { ref, computed, onMounted } from 'vue'
import usersService from '@/services/users.service'
import postsService from '@/services/posts.service'
import reactionsService from '@/services/reactions.service'
import categoriesService from '@/services/categories.service'
import { useCookies } from 'vue3-cookies'
import { toast } from 'vue3-toastify'
import tagsService from '@/services/tags.service'
import contentSourcesService from '@/services/contentSources.service'
import eventLogService from '@/services/eventLog.service'
const cookies = useCookies()
const tokenBearer = cookies.cookies.get('Token')
Chart.register(...registerables)

const data = ref([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

const chartData = computed(() => ({
  labels: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12'
  ],
  datasets: [
    {
      data: data.value,
      backgroundColor: ['#77CEFF']
    }
  ]
}))

const chartData1 = ref({
  chartData: {
    labels: [] as string[],
    datasets: [
      {
        data: [] as number[],
        backgroundColor: [] as string[]
      }
    ]
  }
})

const { barChartProps } = useBarChart({ chartData })

const { pieChartProps } = usePieChart(chartData1.value)

const chooseUserIndex = ref(0)
const chooseRole = ref('')

const users = ref([
  {
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
])

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

const postsReviewing = ref([
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
var postVisibles = ref(3)
var steps = ref(3)

var postVisiblesReviewing = ref(3)
var stepsReviewing = ref(3)

var userVisibles = ref(10)
var stepsUser = ref(10)

var contentSourceVisibles = ref(10)
var stepsContentSource = ref(10)


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

function VisiblePost() {
  if (search.value != '') {
    return posts.value.filter((p) => {
      return p.title.toLowerCase().indexOf(search.value.toLowerCase()) != -1
    })
  } else {
    return posts.value.slice(0, postVisibles.value)
  }
}

function VisiblePostReviewing() {
  if (searchReview.value != '') {
    return postsReviewing.value.filter((p) => {
      return p.title.toLowerCase().indexOf(searchReview.value.toLowerCase()) != -1
    })
  } else {
    return postsReviewing.value.slice(0, postVisiblesReviewing.value)
  }
}

function VisibleUser() {
  if (searchUser.value != '') {
    return users.value.filter((u) => {
      return u.fullName.toLowerCase().indexOf(searchUser.value.toLowerCase()) != -1
    })
  } else {
    return users.value.slice(0, userVisibles.value)
  }
}

function VisibleContentSource() {
  if (searchContentSource.value != '') {
    return contentSources.value.filter((cs) => {
      return cs.name.toLowerCase().indexOf(searchContentSource.value.toLowerCase()) != -1
    })
  } else {
    return contentSources.value.slice(0, contentSourceVisibles.value)
  }
}

const search = ref('')
const searchReview = ref('')
const searchUser = ref('')
const searchContentSource = ref('')


const reactions = ref({
  filter: {
    limit: 0,
    offset: 0,
    sortField: '',
    sortOrder: ''
  },
  total: 0,
  data: {}
})

const tags = ref([
  {
    id: 0,
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    name: '',
    categoryId: 0,
    createdById: 0,
    posts: []
  }
])

const categories = ref([
  {
    id: 0,
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    name: '',
    imageURL: ''
  }
])

const eventLogs = ref([
  {
    id: 0,
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    action: "",
    actorId: 0,
    postId: 0,
    note: null,
    actor: {
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
    },
    post: {
      id: 0,
      createdAt: "",
      updatedAt: "",
      deletedAt: null,
      title: "",
      content: "",
      sharePostId: null,
      originalPostURL: null,
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
      contentSourceId: null
    }
  }
])

function randomColor() {
  let r = Math.ceil(Math.random() * 255)
  let g = Math.ceil(Math.random() * 255)
  let b = Math.ceil(Math.random() * 255)

  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

async function getAllTagsForCategory(categoryId: number, index: number) {
  try {
    choosenCategoryId.value = categoryId; choosenCategoryIndex.value = index;
    newCategoryName.value = categories.value[index].name;
    let tempTags = await tagsService.getAllByCategoryId(categoryId)
    tags.value = tempTags.data
  } catch (error) {
    console.log(error)
  }
}
async function deleteTag(tagId: number, index: number) {
  try {
    await tagsService.delete(tagId, tokenBearer)
    toast.success('Đã xóa!', {
      autoClose: 1000
    })
    tags.value.splice(index, 1)
  } catch (error) {
    console.log(error)
  }
}

const choosenContentSourceId = ref(0)
const choosenContentSourceIndex = ref(0)

async function deleteContentSource() {
  try {
    await contentSourcesService.delete(choosenContentSourceId.value, tokenBearer)
    toast.success('Đã xóa!', {
      autoClose: 1000
    })
    contentSources.value.splice(choosenContentSourceIndex.value, 1)
  } catch (error) {
    console.log(error)
  }
}

const newTagName = ref('')

async function addTag() {
  try {
    let resp = await tagsService.create({
      tags: [
        newTagName.value
      ],
      categoryId: choosenCategoryId.value
    }, tokenBearer);
    toast.success('Đã thêm thành công!', {
      autoClose: 1000
    })
    tags.value.push(resp[0])
  } catch (error) {
    console.log(error)
  }
}

const addCategoryName = ref('')

async function addCategory() {
  try {
    let resp = await categoriesService.create(addCategoryName.value, tokenBearer);
    toast.success('Đã thêm thành công!', {
      autoClose: 1000
    })
    categories.value.push(resp)
  } catch (error) {
    console.log(error)
  }
}


async function updateUser() {
  try {
    await usersService.update(
      users.value[chooseUserIndex.value].id,
      {
        role: chooseRole.value
      },
      tokenBearer
    )
    toast.success('Đã cập nhật!', {
      autoClose: 1000
    }) //
    users.value[chooseUserIndex.value].role = chooseRole.value
  } catch (error) {
    console.log(error)
  }
}

const choosenCategoryId = ref(0)
const choosenCategoryIndex = ref(0)

async function deleteCategory() {
  try {
    await categoriesService.delete(choosenCategoryId.value, tokenBearer)
    toast.success('Đã xóa!', {
      autoClose: 1000
    })
    categories.value.splice(choosenCategoryIndex.value, 1)
  } catch (error) {
    console.log(error)
  }
}

const newCategoryName = ref('')

async function updateCategory() {
  try {
    await categoriesService.update(choosenCategoryId.value, newCategoryName.value, tokenBearer)
    toast.success('Đã cập nhật!', {
      autoClose: 1000
    })
    categories.value[choosenCategoryIndex.value].name = newCategoryName.value
  } catch (error) {
    console.log(error)
  }
}

function previewFile(e: any) {
  fileImage.value = e.target.files[0]
}
const fileImage = ref({})

const newContentSourceName = ref('')

async function updateContentSource() {
  try {
    let resp = await contentSourcesService.update(choosenContentSourceId.value, newContentSourceName.value, fileImage.value, tokenBearer)
    toast.success('Đã cập nhật!', {
      autoClose: 1000
    })
    contentSources.value[choosenContentSourceIndex.value].name = newContentSourceName.value
    if (fileImage.value != null) {
      contentSources.value[choosenContentSourceIndex.value].avatar = resp.avatar
    }
  } catch (error) {
    console.log(error)
  }
}

function previewFileAdd(e: any) {
  fileImageAdd.value = e.target.files[0]
}
const fileImageAdd = ref({})

const addContentSourceName = ref('')

async function addContentSource() {
  try {
    let resp = await contentSourcesService.create(addContentSourceName.value, fileImageAdd.value, tokenBearer)
    toast.success('Đã thêm!', {
      autoClose: 1000
    })
    contentSources.value.push(resp)
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  try {
    // eventlog
    let eTemp = await eventLogService.getAll()
    eventLogs.value = eTemp.data

    let usersTemp = await usersService.getAll()
    users.value = usersTemp.data

    users.value.forEach((user) => {
      let month = Number(user.createdAt.slice(5, 7))
      data.value[month - 1] += 1
    })

    let postsTemp = await postsService.getAll(100, 0, 'published')
    posts.value = postsTemp.data

    let postsReviewTemp = await postsService.getAll(100, 0, 'reviewing')
    postsReviewing.value = postsReviewTemp.data

    let categoriesTemp = await categoriesService.getAll()
    categories.value = categoriesTemp.data
    for (let i = 0; i < categories.value.length; i++) {
      chartData1.value.chartData.labels.push(categories.value[i].name)
      let postCategory = await postsService.getAllByCategoryId(categories.value[i].id)
      chartData1.value.chartData.datasets[0].data.push(postCategory.data.length)
      chartData1.value.chartData.datasets[0].backgroundColor.push(randomColor())
    }

    let reactionsTemp = await reactionsService.getAllReal()
    reactions.value = reactionsTemp

    // contentSource
    let csTemp = await contentSourcesService.getAll();
    contentSources.value = csTemp.data;
  } catch (err) {
    console.log(err)
  }
})
</script>

<style>
.text-gray-300 {
  color: #e0e0e0;
}

.moreUser:hover {
  color: white;
  background-color: black;
}

.search {
  top: 6px;
  left: 10px;
}

.form-control-special {
  border: none;
  padding-left: 32px;
}

.form-control-special:focus {
  border: none;
  box-shadow: none;
}

.green {
  color: green;
}

/* .avatarMain {
  border-radius: 50%;
  width: 25px;
  height: 25px;
  overflow: hidden;
}  */
.userNameLink {
  text-decoration: none;
}

.userNameLink:hover {
  text-decoration: underline;
}
</style>
