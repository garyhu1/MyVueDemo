<template>
	<div class="slide-container">{{msg}}</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "Hello World!"
			}
		}
	}
</script>

<style>
	.slide-container {
		width: 50%;
		height: 900px;
		background: #000;
		color: #fff;
		margin-top: 0;
	}
	
	
</style>