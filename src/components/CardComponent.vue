<template>
<section class="">
  	<div class="container">
		<div class="row" style="width: 100vw;">
		</div>
  	<div class="row">
    <div v-for="post in props.posts" :key="post.id" class="col-sm-12 col-md-6 col-lg-4 mb-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <div class="card post text-dark card-has-bg click-col" style="background-image:url('https://source.unsplash.com/600x900/?tech,street');">
            <img class="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Creative Manner Design Lorem Ipsum Sit Amet Consectetur dipisi?">
            <div class="card-img-overlay d-flex flex-column">
                <div class="card-body post-body">
                    <small class="card-meta mb-2">{{ post.category.name }}</small>
                    <h4 class="card-title mt-0 "><a class="text-dark" herf="https://creativemanner.com">{{ post.title }}</a></h4>
                    <small><i class="far fa-clock"></i>{{ post.createdAt }}</small>
                </div>
                <div class="card-footer">
                    <div class="media">
                        <img class="mr-3 rounded-circle" :src="'http://localhost:8080' + post.createdBy.avatar.replace('files', '')" alt="Generic placeholder image" style="width:50px; height: 50px;">
                        <div class="media-body">
                            <h6 class="my-0 text-dark d-block">{{ post.createdBy.fullName }}</h6>
                            <small>Director of UI/UX</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>
  
</div>
</section>
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Colored with scrolling</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps(['posts'])

</script>

<style>
 .wrapper {
	 margin: 10vh;
}
 .post {
	 border: none;
	 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
	 overflow: hidden;
	 border-radius: 20px;
	 min-height: 450px;
	 box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
}
 @media (max-width: 768px) {
	 .post {
		 min-height: 350px;
	}
}
 @media (max-width: 420px) {
	 .post {
		 min-height: 300px;
	}
}
 .post.card-has-bg {
	 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
	 background-size: 120%;
	 background-repeat: no-repeat;
	 background-position: center center;
}
 .post.card-has-bg:before {
	 content: '';
	 position: absolute;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 background: inherit;
	 -webkit-filter: grayscale(1);
	 -moz-filter: grayscale(100%);
	 -ms-filter: grayscale(100%);
	 -o-filter: grayscale(100%);
	 filter: grayscale(100%);
}
 .post.card-has-bg:hover {
	 transform: scale(0.98);
	 box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
	 background-size: 130%;
	 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}
 .post.card-has-bg:hover .card-img-overlay {
	 transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
	 background: #efcd85;
	 background: linear-gradient(0deg, rgba(255, 186, 33, 0.5) 0%, rgb(252, 234, 193) 100%);
}
 .post .card-footer {
	 background: none;
	 border-top: none;
}
 .post .card-footer .media img {
	 border: solid 3px rgba(255, 255, 255, 0.3);
}
 .post .card-meta {
	 color: rgba(0, 0, 0, 0.3);
	 text-transform: uppercase;
	 font-weight: 500;
	 letter-spacing: 2px;
}
 .post .post-body {
	 transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}
 .post:hover {
	 cursor: pointer;
	 transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
 .post:hover .post-body {
	 margin-top: 30px;
	 transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}
 .post .card-img-overlay {
	 transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
	 background: #ffba21;
	 background: linear-gradient(0deg, rgba(255, 186, 33, 0.3785889355742297) 0%, rgb(161, 156, 146) 100%);
}
</style>