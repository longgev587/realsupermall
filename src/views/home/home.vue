<template>
	<div id="home">
		<navbar class="homenav">
		<!-- 不知道为什么  这	个template好像要手写还是怎么滴  反正就只有porfile中的是对的  这都是拷过来的  自己写的有错  。。。。。 
							好像是v-slot必须要用英文写？  中文输入法输入的就不对？
		-->
			<template v-slot:left>&lt;</template>
			<template v-slot:center>首页</template>
			<template v-slot:right>&gt;</template>
		</navbar>
		<HomeSwiper :banner="banner"></HomeSwiper>
		<Recommend :recommends="recommends"></Recommend>
		<Feature></Feature>
		<Tabcontrol :titles="['流行','新款','精选']" @tabclick="tabclick"></Tabcontrol>
		<GoodsList :goods="showGoods"></GoodsList>
		
	</div>
	
</template>

<script>
	import navbar from 'components/common/navbar/navbar'
	import Tabcontrol from 'components/content/tabControl/tabControl'
	import GoodsList from 'components/content/goods/GoodsList'
	import GoodsListItem from 'components/content/goods/GoodsListItem'
	
	import HomeSwiper from './childrenComponents/homeswiper'
	import Recommend from './childrenComponents/RecommendView'
	import Feature from './childrenComponents/FeatureView'
	
	import {getHomeMultidata, getHomeGoods} from 'network/home.js'
	
	export default {
		name:"home",
		components:{
			navbar,
			Tabcontrol,
			HomeSwiper,
			Recommend,
			Feature,
			GoodsList
		},
		computed:{
			showGoods(){
				return this.goods[this.currenttype].list;
			}
		},
		data(){
			return {
				banner:[],
				dKeyword:[],
				keywords:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				currenttype:'pop'
			}
		},
		created() {
			//请求多个数据
			this.getHomeMultidata(),
			//请求商品数据
			this.getHomeGoods('pop'),
			this.getHomeGoods('new'),
			this.getHomeGoods('sell')
		},
		methods:{
			/*
			网络请求方法
			*/
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					// console.log(res);
					this.banner=res.data.banner.list;
					this.dKeyword=res.data.dKeyword.list;
					this.keywords=res.data.keywords.list;
					this.recommends=res.data.recommend.list;
				})
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1;
				getHomeGoods(type,page).then(res=>{
					this.goods[type].list.push(...res.data.list);
					// this.goods[type].page+=1;
				})
			},
			/*事件监听方法*/
			tabclick(index){
				switch (index){
					case 0:
						this.currenttype='pop'
						break
					case 1:
						this.currenttype='new'
						break
					case 2:
						this.currenttype='sell'
						break
				}
			}
		}
	}
</script>

<style>
	#home{
		padding-top: 44px;
		padding-bottom: 59px;
		height: 100%;
	}
	img{
		display: block;
	}
	.homenav{
		background: var(--color-tint);
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}
	.tabcontrol{
		position: sticky;
		top: 44px;
		z-index: 9;
	}
</style>
