<template>
	<div>
		<p class="test">{{ item }}</p>
		
		<button @click="goToProgress" class="item-btn">自定义进度条</button>
	</div>
</template>

<script>
	export default {
		props: ['item'],
		methods : {
			goToProgress() {
				this.$router.push({name: 'progressbar', params: {id: 123}});
			}
		}
	}
</script>

<style>
	.test {
		margin-top: 20px;
		color: red;
		font-size: 1em;
	}
	
	.item-btn {
		color: #FFF;
		width: 100px;
		height: 40px;
		line-height: 40px;
		background: green;
		border: none;
		border: 1px solid darkgreen;
		border-radius: 5px;
		margin-top: 10px;
	}
</style>