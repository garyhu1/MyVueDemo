<template>
    <div id="slide-container">
	   <div class="slide-bg" @click="hide"></div>
	   <div class="slide-content">
		   <ul>
		      <router-link tag="li" v-for="(l,index) in mainList" :to="l.uri" :key="index" class="cate-layout" @click.native="toggle(l)" replace>
		   	     <span class="catogery-name">{{l.name}}</span>  
		   	     <img src="../../assets/images/more.png" class="catogery-img"/>
		      </router-link>
		  </ul>
	   </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mainList: [
				   {name: "首页",uri: "/douyu/home"},
				   {name: "全部分类",uri: "/douyu/allcatogery"},
				   {name: "推荐",uri: "/douyu/recommand"},
				   {name: "个人中心",uri: "/douyu/mine"}
				]
			}
		},
		methods: {
			toggle(name) {
				this.$emit('toggleMenu',name);
			},
			hide() {
				this.$emit('toggleMenu');
			}
		}
	}
</script>

<style>
    #slide-container {
		width: 100%;
		height: 95vh;
		margin-top: 0;
	}
	.slide-bg {
		width: 100%;
		height: 95vh;
		background: #111 ;
		opacity: 0.2;
	}
	.slide-content {
		position: absolute;
		left:0;
		top:0;
		width: 50%;
		height: 95vh;
		background: #111;
		color: #fff;
		margin-top: 0;
	}
	
	.cate-layout {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 50px;
		align-items: center;
		align-content: space-between;
	}
	
	.catogery-name {
		flex: 3;
		display: block;
		text-align: start;
		margin-left: 10px;
		font-size: 14px;
	}
	
	.catogery-img {
		display: block;
		height: 20px;
		width: 20px;
		margin-right: 10px;
	}
	
</style>