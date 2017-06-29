<template>
	<div>
	   <h1>首页</h1>
	   <button @click="getInfo">Button</button>
	</div>
</template>

<script>
  import { getArticle } from '../../api/api.js';
	export default {
		data() {
        return {
					  artList: []
				}
		},
		beforeRouteEnter (to,from,next) {
//			alert("garyhu");
            next()
		},
		created(){
			  getArticle({}).then(res => {
					  this.artList = res.data.articles;
				}).catch(err => {
						alert(err);
				});
		},
		methods: {
			
		}
	}
</script>

<style>
</style>