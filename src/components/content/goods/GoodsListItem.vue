<template>
	<div class="goodslistitem">
<!-- 		<a href=""> -->
		<img :src="goodsitem.show.img" alt="">
		<!-- </a> -->
		<div class="itemtext">
			<p>{{goodsitem.title}}</p>
			<span class="price">{{goodsitem.price}}</span>
			<span class="collect"><img src="~assets/img/home/shoucang.png">{{goodsitem.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GoodsListItem",
		components:{
			
		},
		props:{
			goodsitem:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>
	.goodslistitem{
		width: 48vw;
		height: 43vh;
		margin: 1vh 1vw;
		flex: 1;
		font-size: 12px;
	}
	.goodslistitem img{
		width: 48vw;
		height: 35vh;
	}
	.itemtext{
		text-align: center;
	}
	.itemtext p{
		/* display:inline-block;
		width: 48vw;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis; 文本限制为一行*/
	text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
	/*文本限制两行*/
	}
	.price{
		margin: 0 15px 0 0;
		color: pink;
	}
	.collect{
		margin: 0 0 0 15px;
		position: relative;
	}
	.collect img{
		position: absolute;
		border: none;
		width: 17px;
		height: 17px;
		left: -5vw;
		bottom: -1px;
	}
</style>
