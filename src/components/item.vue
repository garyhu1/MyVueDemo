<template>
	<div>
		<p class="test">{{ item }}</p>
		
		<button @click="goToProgress">自定义进度条</button>
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
		color: red;
		font-size: 1em;
	}
</style>