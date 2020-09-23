<template>
	<Tabbar>
		<TabbarItem path="/home" activeColor="blue">
			<template v-slot:itemimg><img src="~assets/img/tabbar/home1.png" ></template>
			<template v-slot:itemimgactive><img src="~assets/img/tabbar/home2.png" ></template>
			<template v-slot:itemtext>首页</template>
		</TabbarItem>
		<TabbarItem path="/category" activeColor="pink">
			<template v-slot:itemimg><img src="~assets/img/tabbar/category1.png" ></template>
			<template v-slot:itemimgactive><img src="~assets/img/tabbar/category2.png" ></template>
			<template v-slot:itemtext>商品分类</template>
		</TabbarItem>
		<TabbarItem path="/cart" activeColor="deepskyblue">
			<template v-slot:itemimg><img src="~assets/img/tabbar/cart1.png" ></template>
			<template v-slot:itemimgactive><img src="~assets/img/tabbar/cart2.png" ></template>
			<template v-slot:itemtext>购物车</template>
		</TabbarItem>
		<TabbarItem path="/profile" activeColor="deepPink">
			<template v-slot:itemimg><img src="~assets/img/tabbar/my1.png" ></template>
			<template v-slot:itemimgactive><img src="~assets/img/tabbar/my2.png" ></template>
			<template v-slot:itemtext>个人中心</template>
		</TabbarItem>
	</Tabbar>
</template>

<script>
	import Tabbar from '@/components/common/tabbar/Tabbar';
	import TabbarItem from '@/components/common/tabbar/TabbarItem';
	export default {
		name:"Maintabbar",
		components:{
			Tabbar,
			TabbarItem
		}
	}
</script>

<style>
</style>
