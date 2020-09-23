<template>
	<div id="profile">
		<navbar>
			<template v-slot:left>&lt;</template>
			<template v-slot:center>个人中心</template>
			<template v-slot:right>&gt;</template>
		</navbar>
	</div>
</template>

<script>
	import navbar from 'components/common/navbar/navbar'
	export default {
		name:"profile",
		components:{
			navbar
		}
	}
</script>

<style>
</style>
