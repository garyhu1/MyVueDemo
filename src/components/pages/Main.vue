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
	    <router-view class="main-content"></router-view>
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
		beforeRouteEnter: (to, from, next) => {
			// ...
			let name;
			if(to.path === '/douyu/home'){
				name = "首页";
			}else if(to.path === '/douyu/allcatogery'){
				name = "全部分类";
			}else if(to.path === '/douyu/recommand'){
				name = "推荐";
			}else {
				name = "个人中心";
			}
			//无法访问this
			// this.$store.commit('getTitle',name);
			next(vm => {
				vm.$store.commit('getTitle',name);
			});
		},
		created() {
			
		},
		computed: {
            subTitle() {
				return this.$store.state.title;
			}
		},
		methods: {
			showMenu(){
				this.show = !this.show;
				this.hideScroll(this.show);
			},
			hideMenu(l) {
				this.show = !this.show;
				this.hideScroll(this.show);
				if(l){
					this.$store.commit('getTitle',l.name);
					this.$store.commit('updateAddress',l.uri);
				}
			},
			hideScroll(show) {
				if(show){
					jQuery('body').css('overflow','hidden');
				}else {
					jQuery('body').css('overflow','auto');
				}
			}
		},
		components: {
			SildeMenu
		}
	}
</script>

<!--加上scoped属性 css样式就变为私有的-->
<style scoped>
	.my-main-page {
		position: relative;
	}
	.douyu-title {
		position: fixed;
		top: 0;
		width: 100%;
		height: 5vh;
		background: darkmagenta;
		color: #fff;
		display: flex;
		flex-direction: row;
		justify-content: center;
		z-index: 10000;
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
		position: fixed;
		left: 0;
		top: 5vh;
		height: 95vh;
		z-index: 999;
	}

	.main-content {
		margin-top: 5vh;
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