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
      <section class="bg-light py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row gy-4 gy-lg-0">
            <div class="col-12 col-lg-4 col-xl-3">
              <div class="row gy-4">
                <div class="col-12">
                  <div class="card widget-card border-light shadow-sm">
                    <div class="card-body">
                      <div class="text-center mb-3">
                        <img :src="'http://localhost:8080' + user.avatar.replace('files', '')" width="150px" class="img-fluid rounded-circle" alt="Luna John">
                      </div>
                      <h5 class="text-center mb-1">{{ user.fullName }}</h5>
                      <p class="text-center text-secondary mb-4">Project Manager</p>
                      <ul class="list-group list-group-flush mb-4">
                        <li class="list-group-item d-flex justify-content-between align-items-center w-100">
                          <h6 class="m-0">Người theo dõi</h6>
                          <span>7,854</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center w-100">
                          <h6 class="m-0">Người đang theo dõi</h6>
                          <span>5,987</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center w-100">
                          <h6 class="m-0">Số bài viết</h6>
                          <span>620</span>
                        </li>
                      </ul>
                      <div class="d-grid m-0">
                        <button class="btn btn-outline-primary" type="button">Theo dõi</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="card widget-card border-light shadow-sm">
                    <div class="card-header bg-main">Tài khoản mạng xã hội</div>
                    <div class="card-body">
                      <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>
                      </a>
                      <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                      </a>
                      <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                      </a>
                      <a href="#!" class="d-inline-block bg-dark link-light lh-1 p-2 rounded mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
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
                        <li class="list-group-item w-100">
                          <h6 class="mb-1">
                            <span class="bii bi-mortarboard-fill me-2"></span>
                            Education
                          </h6>
                          <span>M.S Computer Science</span>
                        </li>
                        <li class="list-group-item w-100">
                          <h6 class="mb-1">
                            <span class="bii bi-geo-alt-fill me-2"></span>
                            Location
                          </h6>
                          <span>Mountain View, California</span>
                        </li>
                        <li class="list-group-item w-100">
                          <h6 class="mb-1">
                            <span class="bii bi-building-fill-gear me-2"></span>
                            Company
                          </h6>
                          <span>GitHub Inc</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-12">
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
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-8 col-xl-9">
              <div class="card widget-card border-light shadow-sm">
                <div class="card-body p-4">
                  <ul class="nav nav-tabs" id="profileTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview-tab-pane" type="button" role="tab" aria-controls="overview-tab-pane" aria-selected="true">Tổng quan</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Thông tin cá nhân</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="post-tab" data-bs-toggle="tab" data-bs-target="#post-tab-pane" type="button" role="tab" aria-controls="post-tab-pane" aria-selected="false">Bài viết</button>
                    </li>
                    <!-- <li class="nav-item" role="presentation">
                      <button class="nav-link" id="email-tab" data-bs-toggle="tab" data-bs-target="#email-tab-pane" type="button" role="tab" aria-controls="email-tab-pane" aria-selected="false">Emails</button>
                    </li> -->
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="password-tab" data-bs-toggle="tab" data-bs-target="#password-tab-pane" type="button" role="tab" aria-controls="password-tab-pane" aria-selected="false">Mật khẩu</button>
                    </li>
                  </ul>
                  <div class="tab-content pt-4" id="profileTabContent">
                    <div class="tab-pane fade show active" id="overview-tab-pane" role="tabpanel" aria-labelledby="overview-tab" tabindex="0">
                      <h5 class="mb-3">Giới thiệu</h5>
                      <p class="lead mb-3">Ethan Leo is a seasoned and results-driven Project Manager who brings experience and expertise to project management. With a proven track record of successfully delivering complex projects on time and within budget, Ethan Leo is the go-to professional for organizations seeking efficient and effective project leadership.</p>
                      <h5 class="mb-3">Thông tin</h5>
                      <div class="row g-0">
                        <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                          <div class="p-2">Tên</div>
                        </div>
                        <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                          <div class="p-2">{{ user.firstName }}</div>
                        </div>
                        <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                          <div class="p-2">Họ</div>
                        </div>
                        <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                          <div class="p-2">{{ user.lastName }}</div>
                        </div>
                        <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                          <div class="p-2">Địa chỉ</div>
                        </div>
                        <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                          <div class="p-2">Thành phố Sóc Trăng</div>
                        </div>
                        <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                          <div class="p-2">Nghề nghiệp</div>
                        </div>
                        <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                          <div class="p-2">Lập trình viên</div>
                        </div>
                        <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                          <div class="p-2">Số điện thoại</div>
                        </div>
                        <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                          <div class="p-2">+1 (248) 679-8745</div>
                        </div>
                        <div class="col-5 col-md-3 bg-light border-bottom border-white border-3">
                          <div class="p-2">Email</div>
                        </div>
                        <div class="col-7 col-md-9 bg-light border-start border-bottom border-white border-3">
                          <div class="p-2">{{ user.email }}</div>
                        </div>
                      </div>

                      <div id="calendar" class="w-100 m-3">
                        <h5>Hoạt động</h5>
                        <calendar-heatmap :values="contributionData" :options="options" :end-date=date />
                      </div>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                      <form action="#!" class="row gy-3 gy-xxl-4">
                        <div class="col-12">
                          <div class="row gy-2">
                            <label class="col-12 form-label m-0">Ảnh đại diện</label>
                            <div class="col-12">
                              <img :src="'http://localhost:8080' + user.avatar.replace('files', '')" class="img-fluid" width="150px" alt="Luna John">
                            </div>
                            <div class="col-12">
                              <a href="#!" class="d-inline-block bg-primary  link-light lh-1 p-2 rounded m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
                                </svg>
                              </a>
                              <a href="#!" class="d-inline-block bg-danger link-light lh-1 p-2 rounded m-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputFirstName" class="form-label">Tên</label>
                          <input type="text" class="form-control" id="inputFirstName" :value="user.firstName">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputLastName" class="form-label">Họ</label>
                          <input type="text" class="form-control" id="inputLastName" :value="user.lastName">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputEducation" class="form-label">Education</label>
                          <input type="text" class="form-control" id="inputEducation" value="M.S Computer Science">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputSkills" class="form-label">Skills</label>
                          <input type="text" class="form-control" id="inputSkills" value="HTML, SCSS, Javascript, React, Vue, Angular, UI, UX">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputJob" class="form-label">Job</label>
                          <input type="text" class="form-control" id="inputJob" value="Project Manager">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputCompany" class="form-label">Company</label>
                          <input type="text" class="form-control" id="inputCompany" value="GitHub Inc">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputPhone" class="form-label">Số điện thoại</label>
                          <input type="tel" class="form-control" id="inputPhone" value="+12486798745">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputEmail" class="form-label">Email</label>
                          <input type="email" class="form-control" id="inputEmail" :value="user.email">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputAddress" class="form-label">Address</label>
                          <input type="text" class="form-control" id="inputAddress" value="Mountain View, California">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputCountry" class="form-label">Country</label>
                          <select class="form-select" id="inputCountry">
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States" selected>United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputYouTube" class="form-label">YouTube</label>
                          <input type="text" class="form-control" id="inputYouTube" value="https://www.youtube.com/EthanLeo">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputX" class="form-label">X</label>
                          <input type="text" class="form-control" id="inputX" value="https://twitter.com/EthanLeo">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputFacebook" class="form-label">Facebook</label>
                          <input type="text" class="form-control" id="inputFacebook" value="https://www.facebook.com/EthanLeo">
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="inputLinkedIn" class="form-label">LinkedIn</label>
                          <input type="text" class="form-control" id="inputLinkedIn" value="https://www.linkedin.com/EthanLeo">
                        </div>
                        <div class="col-12">
                          <label for="inputAbout" class="form-label">Giới thiệu</label>
                          <textarea class="form-control" id="inputAbout">Ethan Leo is a seasoned and results-driven Project Manager who brings experience and expertise to project management. With a proven track record of successfully delivering complex projects on time and within budget, Ethan Leo is the go-to professional for organizations seeking efficient and effective project leadership.</textarea>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-primary bg-main">Cập nhật</button>
                        </div>
                      </form>
                    </div>
                    <!-- <div class="tab-pane fade" id="email-tab-pane" role="tabpanel" aria-labelledby="email-tab" tabindex="0">
                      <form action="#!">
                        <fieldset class="row gy-3 gy-md-0">
                          <legend class="col-form-label col-12 col-md-3 col-xl-2">Email Alerts</legend>
                          <div class="col-12 col-md-9 col-xl-10">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="emailChange">
                              <label class="form-check-label" for="emailChange">
                                Email Changed
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="passwordChange">
                              <label class="form-check-label" for="passwordChange">
                                Password Changed
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="weeklyNewsletter">
                              <label class="form-check-label" for="weeklyNewsletter">
                                Weekly Newsletter
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="productPromotions">
                              <label class="form-check-label" for="productPromotions">
                                Product Promotions
                              </label>
                            </div>
                          </div>
                        </fieldset>
                        <div class="row">
                          <div class="col-12">
                            <button type="submit" class="btn btn-primary bg-main mt-4">Save Changes</button>
                          </div>
                        </div>
                      </form>
                    </div> -->
                    <div class="tab-pane fade" id="password-tab-pane" role="tabpanel" aria-labelledby="password-tab" tabindex="0">
                      <form action="#!">
                        <div class="row gy-3 gy-xxl-4">
                          <div class="col-12">
                            <label for="currentPassword" class="form-label">Mật khẩu hiện tại</label>
                            <input type="password" class="form-control" id="currentPassword">
                          </div>
                          <div class="col-12">
                            <label for="newPassword" class="form-label">Mật khẩu mới</label>
                            <input type="password" class="form-control" id="newPassword">
                          </div>
                          <div class="col-12">
                            <label for="confirmPassword" class="form-label">Xác nhận mật khẩu</label>
                            <input type="password" class="form-control" id="confirmPassword">
                          </div>
                          <div class="col-12">
                            <button type="submit" class="btn btn-primary bg-main">Thay đổi mật khẩu</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane fade" id="post-tab-pane" role="tabpanel" aria-labelledby="post-tab" tabindex="0">
                      <h5 class="mb-3">Tóm tắt</h5>
                      <p class="lead mb-3">Tổng số bài viết đã viết: {{ posts.length }}</p>
                      
                      <div id="chart">
                        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
                      </div>
                      
                      <div class="row gy-3 gy-xxl-4">
                          <CardComponent  :posts="posts"></CardComponent>
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
import HeaderComponent from '@/components/HeaderComponent.vue';
// @ts-ignore 
import SidebarComponent from '@/components/SidebarComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import usersService from '@/services/users.service';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import postsService from '@/services/posts.service';
import { useToast } from "vue-toastification";

const date = new Date(2018, 6, 1);
const route = useRoute()
const toast = useToast();

const id = route.params.id;

const contributionData = [
    { date: new Date(2017, 6, 1), count: 2 }, // February 1st, 2 contributions
    // ... add more objects for other days
];
const options = {
    weekLabels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    weekdayStart: 1, // Start week on Monday
    color: (count: any) => {
        if (count === 0) return 'white';
        if (count > 5) return 'red';
        return `hsl(${count * 20}, 100%, 50%)`; // Custom color based on count
    },
};

const user = ref({
    id: '',
    createdAt: "",
    updatedAt: "",
    deletedAt: null,
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
    fullName: "",
    refreshToken: null,
    phoneNumber: "",
    birthday: "",
    avatar: "",
    role: ""
})

const posts = ref([{
    id: 1,
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
    contentSourceId: '',
    tags: [
    {
        id: '',
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        categoryId: '',
        createdById: ''
    }
    ],
    contentSource: {
        id: "",
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        avatar: ""
    },
    category: {
        id: 1,
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        name: "",
        imageURL: null
    },
    createdBy: {
        id: '',
        createdAt: "",
        updatedAt: "",
        deletedAt: null,
        email: "",
        password: "",
        username: "",
        firstName: "",
        lastName: "",
        fullName: "",
        refreshToken: null,
        phoneNumber: "",
        birthday: "",
        avatar: "",
        role: ""
    },
    sharePost: null,
    sharedByPosts: [],
    comments: []
}])


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
      },
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
      categories: [] as string[],
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
          return val + " lượt "
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
  }, {
    name: 'Chia sẻ ',
    data: []
  }
])
onMounted(async () => {
  try {
    user.value = await usersService.getOne(id[0]);
    let resp = await postsService.getAllForUser(user.value.id);

    let ps: typeof resp.data = [];
    for (const p of resp.data) {
        let post = await postsService.getOne(p.id)
        series.value[0].data.push(p.totalLike)
        series.value[1].data.push(p.totalDislike)
        series.value[2].data.push(p.totalShare)
        chartOptions.value.xaxis.categories.push(p.title)
        
        ps.push(post)
    };
    console.log(series.value[0])
    console.log(series.value[1])
    console.log(series.value[2])
    
    posts.value = ps;
    console.log(posts.value)
  } catch (err) {
      console.log(err);
  }   
})


</script>
<style>
.offcanvas{
  top: 0;
  margin: 0;
}
.bg-main {
  background-color: var(--main-color);
  color: white;
}
#calendar {
    margin: auto;
    width: 800px;
}

.list-group-item {
    text-align: center;
    font-weight: bold;
    width: 200px;
}

.avatar {
    width: 200px;
    height: 200px;
}

.avatar-div {
    width: 300px;
}
.nav-link{
  color: var(--main-color);
}
</style>