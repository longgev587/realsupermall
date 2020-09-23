<template>
	<div class="tabbar-item" @click="itemclick">
		<div v-if='!isActive'>
			<slot name='itemimg'></slot>
		</div>
		<div v-else>
			<slot name='itemimgactive'></slot>
		</div>
		<div :style='activeStyle'>
			<slot name='itemtext'></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TabbarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return {

			}
		},
		methods:{
			itemclick(){
				this.$router.push(this.path)
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !=-1;
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		}
	}
</script>

<style>
	.tabbar-item{
		display: flex;
		height: 49px;
		flex: 1;
		text-align: center;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: #f6f6f6;
		font-size: 14px;
	}
	.tabbar-item>div>img{
		width: 24px;
		height: 24px;
		vertical-align: middle;
	}
	.active{
		color: red;
	}
</style>
