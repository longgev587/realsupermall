<template>
  <div id="nav">
		<router-view></router-view>
		<Maintabbar></Maintabbar>
  </div>
</template>

<script>
	import Maintabbar from '@/components/content/maintabbar/tabbar';
	export default {
		name:"app",
		components:{
			Maintabbar
		}
	}
</script>

<style>
@import url("assets/css/base.css");
</style>
