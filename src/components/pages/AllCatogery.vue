<template>
	<div>
	    <div v-for="item in catogerys">
		    <p>{{ item.desc }}</p>
			<img :src="item.img"/>
		</div>
	</div>
</template>

<script>
   import { getAllCatogery } from '../../api/api.js';
   export default {
	   data() {
		   return {
			   catogerys: []
		   }
	   },
	   mounted() {
		   getAllCatogery({}).then(res => {
			   this.catogerys = res.data.swiper;
		   }).catch(err => {
			   alert(err);
		   });
	   }
   }
</script>

<style>
</style>