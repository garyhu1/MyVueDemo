<template>
	<div id="bubble-layout">
		<div id="lampadario">
			<input type="radio" name="switch" value="on" class="bg-input" @click="show"/>
			<input type="radio" name="switch" value="off" class="bg-input" checked="checked" @click="show"/>
			<label for="switch" class="bg-label"></label>
			<div id="filo"></div>
			<div id="lampadina">
				<div id="sorpresa">
					<div id="footer">
						Hello Vue!
					</div>
					<div id="shadow">
						Hello Vue!
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		created() {

		},
		mounted() {},
		methods: {
			show() {
				this.$emit('showLeft');
			}
		}
	}
</script>

<style>
	@import '../common/style/bgLayout.css';
</style>