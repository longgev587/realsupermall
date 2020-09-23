<template>
	<div class="tabcontrol">
		<div v-for="(item,index) in titles" @click="itemclick(index)">
			<span :class="{active: index===currentIndex}">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"tabControl",
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			itemclick(e){
				this.currentIndex=e;
				this.$emit('tabclick',e)
			}
		}
	}
</script>

<style>
	.tabcontrol{
		display: flex;
		text-align: center;
		height: 40px;
		line-height: 40px;
		background: #fff;
	}
	.tabcontrol div{
		flex: 1;
	}
	.active{
		padding-bottom: 5px;
		color: var(--color-high-text);
		border-bottom: 2px solid var(--color-high-text);
	}
</style>
