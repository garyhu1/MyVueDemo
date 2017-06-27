<template>
	<div class="my-main-page">
		<div class="douyu-title">
			<a id="back"><img src="../../assets/images/back.png" @click="showMenu" /></a>
			<span>{{subTitle}}</span>
			<p>斗鱼TV</p>
		</div>
	    <transition name='silde' class="silde-transition">
	    	<silde-menu v-show="show" class="silde-menu" @toggleMenu="hideMenu"></silde-menu>
	    </transition>
	    <router-view></router-view>
	</div>
</template>

<script>
	import SildeMenu from './SildeMenu';
	
	export default {
		data() {
			return {
				show: false,
				subTitle: '首页'
			}
		},
		methods: {
			showMenu(){
				this.show = !this.show;
			},
			hideMenu(name) {
				this.show = !this.show;
				if(name){
					this.subTitle = name;
				}
			}
		},
		components: {
			SildeMenu
		}
	}
</script>

<!--加上scoped属性 css样式就变为私有的-->
<style>
	.my-main-page {
		position: relative;
	}
	.douyu-title {
		position: relative;
		width: 100%;
		height: 5vh;
		background: darkmagenta;
		color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	
	#back {
		position: absolute;
		top: 0;
		left: 0;
		width: 60px;
		height: 5vh;
		line-height: 5vh;
		cursor: pointer;
		display: inline-block;
	}
	
	#back img {
		width: 20px;
		height: 2vh;
		margin-top: 1.5vh;
	}
	
	.douyu-title p {
		align-self: center;
		font-size: 17px;
	}
	
	.douyu-title span {
		position: absolute;
		top: 0;
		left: 60px;
		height: 5vh;
		line-height: 5vh;
		font-size: 14px;
	}
	
	.silde-menu {
		position: absolute;
		top: 5vh;
		left: 0;
		height: 95vh;
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