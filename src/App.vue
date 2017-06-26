<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	body,
	html,
	template,
	div,
	p {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
	}
</style>