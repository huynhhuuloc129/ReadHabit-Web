<template>
  <section class="">
    <div class="container">
      <div class="card-group vgr-cards">

        <div v-for="post in posts" :key="post.id" class="card">
          <div class="card-img-body">
            <img class="card-img" :src="'http://localhost:8080' + post.imageURL.replace('files', '')"
              alt="Card image cap">
          </div>
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h4 class="card-title">{{ post.title }}</h4>
              <p style="height: 70px; overflow: hidden" class="card-text">{{ post.content.replace(/(<([^>]+)>)/ig, '').split('\n')[0] }}</p>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <div class="avatar d-flex" style="margin: 10px;">
                  <img class="center-block" :src="'http://localhost:8080' + post.createdBy.avatar.replace('files', '')"
                    alt="Generic placeholder image" style="height: 50px;" />
                </div>
                <a class="name" :href="'http://localhost:5173/personal/' + post.createdBy.id"
                  style="text-decoration: none; color: black; font-weight: bold ">
                  <span class="name text-bold">{{ post.createdBy.fullName }}</span>
                </a>
              </div>

              <div>
                <span style="margin: 20px 0 0px 20px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                    class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                    <path
                      d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                  </svg>
                  {{ post.totalLike }}
                </span>
                <span style="margin: 20px 0 0px 20px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                    class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                    <path
                      d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591" />
                  </svg>
                  {{ post.totalDislike }}
                </span>
                <span style="margin: 20px 50px 0px 20px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                    class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                    <path fill-rule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                  </svg>
                  {{ post.totalShare }}
                </span>
              </div>
            </div>
            <a :href="'http://localhost:5173/post/' + post.id" class="btn btn-outline-primary w-25">Xem chi tiết</a>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps(['posts'])
</script>

<style>
.card {
  border: none;
}

.card-img {
  border-radius: 0;
}

.vgr-cards {
  .card {
    display: flex;
    flex-flow: wrap;
    flex: 100%;
    margin-bottom: 40px;

    @media (max-width: 576px) {
      display: block;
    }

  }

  .card-img-body {
    flex: 1;
    overflow: hidden;
    position: relative;

    @media (max-width: 576px) {
      width: 100%;
      height: 200px;
      margin-bottom: 20px;
    }

  }

  /* .card-img {
    width: 100%;
    height: auto;
    position: absolute;
    margin-left: 50%;
    transform: translateX(-50%);

    @media (max-width: 1140px) {
      margin: 0;
      transform: none;
      width: 100%;
      height: auto;
    }

  } */

  .card-body {
    flex: 2;
    padding: 0 0 0 1.25rem;

    @media (max-width: 576px) {
      padding: 0;
    }

  }
}

.avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
}

.name:hover {
  text-decoration: underline;
}
</style>
