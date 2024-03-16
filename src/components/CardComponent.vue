<template>
<section class="">
  	<div class="container">
		<div class="row" style="width: 60vw;">
		</div>
  	<div class="row">
    <div v-for="post in props.posts" :key="post.id" class="col-sm-12 col-md-6 col-lg-4 mb-4" data-bs-toggle="offcanvas" :data-bs-target="'#offcanvasScrolling' + post.id" :aria-controls="'offcanvasScrolling' + post.id">
        <div class="card post text-dark card-has-bg click-col" :style="{'background-image': 'url('+ (post.imageURL)+')'}">
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
		<div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" :id="'offcanvasScrolling' + post.id" :aria-labelledby="'offcanvasScrollingLabel' + post.id">
			<div class="offcanvas-header">
				<h5 class="offcanvas-title" :id="'offcanvasScrollingLabel' + post.id">{{ post.title }}</h5>
			</div>
			<h6 class="text-secondary text-uppercase" style="margin-left: 20px;">{{ post.category.name }}</h6>
			<div class="offcanvas-body">
				<div class="row" style="margin-bottom: 20px;">
					<div class="col-6 text-secondary" style="word-wrap: break-word;">
						<div style="margin-top: 10px;">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-heart-pulse" viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857q.09.083.176.171a3 3 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01zM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5"/>
								<path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162z"/>
							</svg>
							<span>
								Trạng thái
							</span>
						</div>
						<div  style="margin-top: 10px;">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
								<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
								<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
							</svg>
							<span>
								Thời gian đọc	
							</span>
						</div>
						<div style="margin-top: 10px;">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
								<path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
								<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
							</svg>
							<span>
								Ngày phát hành
							</span>
						</div>
						<div style="margin-top: 10px;">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
								<path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
							</svg>
							<span>
								Lượt thích
							</span>
						</div>
						<div style="margin-top: 10px;">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
								<path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
							</svg>
							<span>
								Lượt không thích
							</span>
						</div>
						<div style="margin-top: 10px;">
							<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
								<path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
							</svg>
							<span>
								Lượt chia sẻ
							</span>
						</div>
					</div>
					<div class="col-6" style="word-wrap: break-word;">
						<div style="margin-top: 10px;">
							{{ post.status }}
						</div>
						<div style="margin-top: 10px;">
							{{ post.readTime }} phút
						</div>
						<div style="margin-top: 10px;">
							{{ post.createdAt.slice(0, 10) }} 
						</div>
						<div style="margin-top: 10px;">
							{{ post.totalLike }} lượt
						</div>
						<div style="margin-top: 10px;">
							{{ post.totalDislike }} lượt
						</div>
						<div style="margin-top: 10px;">
							{{ post.totalShare }} lượt
						</div>
					</div>
				</div>
				<hr>
				<div>{{ post.content }}</div>
			</div>
			<div class="offcanvas-footer m-2 text-end">
				<hr>
				<a :href="'http://localhost:5173/post/' + post.id">
					<button class="btn btn-primary">Xem chi tiết</button>
				</a>
			</div>
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