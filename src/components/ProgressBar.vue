<template>
	<div id='mySlider'></div>
</template>

<script>
	import Slider from '../assets/js/Slider';
	export default {
		data() {
			return {
				values : ["¥10000", "¥10000", "¥10000", "¥10000"]
			}
		},
		mounted() {
			var demo = new Slider(jQuery('#mySlider'),this.values,2);
			demo.SliderInit();
		},
		methods: {
		}
	}
</script>

<style>
	@import '../common/style/progressbar.css';
</style>