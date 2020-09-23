<template>
	<div class="nav-bar">
		<div class="left">
			<slot name="left">&lt;</slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right">&gt;</slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:"navbar"
	}
</script>

<style>
	.nav-bar{
		display: flex;
		height: 2.75rem;
		line-height: 2.75rem;
		/* box-shadow: 0px 1px 1px #ccc; */
		text-align: center;
	}
	.left{
		
		flex: 1;
	}
	.center{
		flex: 5;
	}
	.right{
		flex: 1;
		
	}
</style>
