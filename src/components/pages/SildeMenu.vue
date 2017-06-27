<template>
	<div class="slide-container">
		<ul>
		   <router-link tag="li" v-for="(l,index) in mainList" :to="l.uri" :key="index" class="cate-layout" @click.native="toggle(l.name)" replace>
		   	   <span class="catogery-name">{{l.name}}</span>
		   	   <img src="../../assets/images/more.png" class="catogery-img"/>
		   </router-link>
		</ul>
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
			}
		}
	}
</script>

<style>
	.slide-container {
		width: 50%;
		height: 95vh;
		background: #000;
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