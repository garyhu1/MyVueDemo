<template>
	<div>
		<button @click='myValue'>点击相加</button>
	    <p>{{ count }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count : 0
			}
		},
		methods: {
			myValue() {
//				this.count +=1;
				this.$emit('getVal');
			}
		}
	}
</script>

<style>
</style>