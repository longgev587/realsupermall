<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "Tabbar"
	}
</script>

<style>
	#tab-bar{
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: 0 -2px 2px rgba(100,100,100,0.1);
	}
</style>
