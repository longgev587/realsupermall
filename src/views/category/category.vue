<template>
	<div id="category">
		<navbar>
			<template v-slot:left>&lt;</template>
			<template v-slot:center>商品</template>
			<template v-slot:right>&gt;</template>
		</navbar>
	</div>
</template>

<script>
	import navbar from 'components/common/navbar/navbar'
	export default {
		name:"category",
		components:{
			navbar
		}
	}
</script>

<style>
</style>
