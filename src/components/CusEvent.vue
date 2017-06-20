<template>
   <div>
      <h1>自定义事件</h1>
      <cus-button @getVal='setVal'>点击相加</cus-button>
      <p>{{ total }}</p>
   </div>
</template>

<script>
	import CusButton from './CusButton';
	
	export default {
		data() {
			return {
				total : 0
			}
		},
		components: {
			CusButton
		},
		methods: {
			setVal() {
				this.total += 2;
			}
		}
	}
</script>

<style>
</style>