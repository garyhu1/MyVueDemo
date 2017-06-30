<template>
	<div>
	   <div v-for="item in artList">
	      <p>{{ item.title }}</p>
		  <p>{{ item.desc }}</p>
		  <div v-for="img in item.imgArr">
		     <img :src="img"/>
		  </div>
	   </div>
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
		mounted(){
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