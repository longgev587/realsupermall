<template>
	<Swiper>
		<SwiperItem v-for="item in banner">
			<!-- 由于请求数据 是异步操作  所以在swiper中要将定时器的时间设置的长一点  不然有时候数据请求会慢一点  轮播图数据没加载出来 动不了 -->
			<a :href="item.link"><img :src="item.image"></a>
		</SwiperItem>
	</Swiper>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swipers'
	export default {
		name:"homeswiper",
		props:{
			banner:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
</style>
