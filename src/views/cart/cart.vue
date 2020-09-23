<template>
	<div id="cart">
		<navbar>
			<template v-slot:left>&lt;</template>
			<template v-slot:center>购物车</template>
			<template v-slot:right>&gt;</template>
		</navbar>
	</div>
</template>

<script>
	import navbar from 'components/common/navbar/navbar'
	export default {
		name:"cart",
		components:{
			navbar
		}
	}
</script>

<style>
</style>
