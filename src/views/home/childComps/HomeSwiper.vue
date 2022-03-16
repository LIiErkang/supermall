<template>
	<!-- <swiper>
		<swiperSlide v-for="item in banners">
			<img :src="item.image" />
		</swiperSlide>
	</swiper> -->
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/swiper-bundle.css'
	export default {
		components: {
			swiper,
			swiperSlide
		},
		props: {
			banners: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>
<style scoped>
	img {
		width: 100%;
		vertical-align: top;
	}
</style>