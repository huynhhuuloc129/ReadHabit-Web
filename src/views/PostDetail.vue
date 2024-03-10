<template>
    <Suspense>
        <HeaderComponent text-color="black"></HeaderComponent>
        <template #fallback>
            
        </template>
    </Suspense>
    <SidebarComponent text-color="black"></SidebarComponent>
    <div class="container" style="margin-top: 10px;">
        <h1>Title</h1>
        <hr>
        <div class="row">
            <div class="col-sm-9">
                <div class="d-flex row">
                    <div class="col d-flex justify-content-between">
                        <div class="d-flex">
                            <img id="user-avatar" class="rounded-circle"
                                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709251200&semt=ais"
                                alt="">
                            <div class="user-info">
                                <p class="fw-bold">Username</p>
                                <button class="btn btn-primary">Follow</button>
                            </div>
                        </div>
                        <div class="d-flex flex-row text-center">
                            <div class="interaction-icon d-flex flex-column align-items-center justify-content-end">
                                <button class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                        <path
                                            d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                    </svg>
                                    Thích
                                </button>
                                <a class="interaction-count  text-secondary px-1" href="#" style="">
                                    80 lượt
                                </a>
                            </div>
                            <div class="interaction-icon d-flex flex-column align-items-center justify-content-end">
                                <button class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
                                        <path
                                            d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1" />
                                    </svg>
                                    Không thích
                                </button>
                                <a class="interaction-count text-secondary px-1" href="#" style="">
                                    80 lượt
                                </a>
                            </div>
                            <div class="interaction-icon d-flex flex-column align-items-center justify-content-end">
                                <button class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                                        <path fill-rule="evenodd"
                                            d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                                    </svg>
                                    Chia sẻ
                                </button>
                                <a class="interaction-count text-secondary px-1" href="#" style="">
                                    20 lượt
                                </a>
                            </div>
                            <div class="interaction-icon d-flex flex-column">
                                <button class="btn btn-light">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                        class="bi bi-bookmark" viewBox="0 0 16 16">
                                        <path
                                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                    </svg>
                                    Lưu
                                </button>
                            </div>
                            <div class="">
                                <button class="btn btn-secondary h-100">
                                    Đọc bài viết gốc
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="quote col p-3" style="word-wrap: break-word; width: 50%;">
                        <div class="fw-bold" style="color: #039be5;">TLDR:</div> The only thing permanent in life is impermanence. 
                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                    </div>
                </div>
                <br>
                <div id="post-content">

                    <img class="img-fluid rounded-3"
                        src="https://images.unsplash.com/photo-1531451740568-f8c030c0bca6?q=80&w=2710&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
                        sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
                        tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat,
                        leo eget bibendum sodales, augue velit cursus nunc,
                    </div>
                </div>
                <div id="tag-section" class="row">
                    <div class="tags badge bg-secondary text-wrap" style="width: 6rem; height: 2rem;">
                        Technical
                    </div>
                    <div class="tags badge bg-secondary text-wrap" style="width: 6rem; height: 2rem;">
                        Sport
                    </div>
                    <div class="tags badge bg-secondary text-wrap" style="width: 6rem; height: 2rem;">
                        News
                    </div>
                    <div class="tags badge bg-secondary text-wrap" style="width: 6rem; height: 2rem;">
                        Gaming
                    </div>
                    <div class="tags badge bg-secondary text-wrap" style="width: 6rem; height: 2rem;">
                        Life
                    </div>
                </div>
            </div>
            <div class="col-3">
                <h1>Các bài viết tương tự</h1>
            </div>
        </div>
        <CommentComponent>

        </CommentComponent>
        <!-- Comment section -->
    </div>
    
</template>
<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import CommentComponent from '@/components/CommentSectionComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';
</script>
<style>
.quote{
    margin-left: 10px;
    border-left: 5px solid #039be5;
    padding-left: 20px;
}
#user-avatar {
    width: 100px;
    height: 100px;
}
#post-content{
    font-size: larger;
    margin-bottom: 20px;
}
.user-info {
    margin-left: 20px;
}

.interaction-count{
    text-decoration: none;
}
.interaction-count:hover{
    text-decoration: underline;
}
.tags {
    margin-right: 5px;
}
</style>