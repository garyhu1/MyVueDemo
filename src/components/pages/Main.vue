<template>
	<div class="my-main-page">
		<div class="douyu-title">
			<span @click='showMenu'>&lt;</span>
			<p>斗鱼TV</p>
		</div>
	    <transition name='silde' class="silde-transition">
	    	<silde-menu v-show="show" class="silde-menu"></silde-menu>
	    </transition>
	</div>
</template>

<script>
	import SildeMenu from './SildeMenu';
	
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			showMenu(){
				this.show = !this.show;
			}
		},
		components: {
			SildeMenu
		}
	}
</script>

<style>
	
	.douyu-title {
		position: relative;
		width: 100%;
		height: 40px;
		background: darkmagenta;
		color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.douyu-title span {
		position: absolute;
		top: 0;
		left: 0;
		width: 60px;
		height: 100%;
		line-height: 40px;
		cursor: pointer;
	}
	
	.douyu-title p {
		align-self: center;
		font-size: 15px;
	}
	
	.silde-transition {
		width: 100%;
		height: 100%;
	}
	
	.silde-menu {
		height: 400px;
	}
	
	.silde-enter-active,
	.silde-leave-active {
	    transition: all .4s;
	}
	
	.silde-enter,
	.silde-leave-active {
		opacity: 0;
		transform: translateX(-50%);
	}
</style>