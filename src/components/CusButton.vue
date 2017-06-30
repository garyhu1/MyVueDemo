<template>
	<div>
		<button @click='myValue'>点击相加</button>
	    <p>{{ count }}</p>
	</div>
</template>

<script>
    import { alert,buttonGroup } from 'vue-strap';
	export default {
		data() {
			return {
				count : 0
			}
		},
		components: {
			
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