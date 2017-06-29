<template>
	<div>
	   <div id="news-container">
	       <ul v-for="item in bannerList">
	           <li class="news-content">
		           <img :src="item.img" class="news-img"/>
			       <p>{{item.title}}</p>
		       </li>
	       </ul>
	   </div>
	   <div class="newsboxs"> 
	       <div v-for="game in games">
	           <div class="news-box">
		           <p>{{game.date}}  {{game.title}}</p>
				   <section id="players">
				       <div class="game-item">
					       <img :src="game.playerImg1"/>
						   <span>{{game.player1}}</span>
					   </div>
					   VS
					   <div class="game-item">
					      <img :src="game.playerImg2"/>
						  <span>{{game.player2}}</span>
					   </div>
				   </section>
		       </div>
	       </div>
	   </div>
	</div>
</template>

<script scoped>
    import { getRecommand } from '../../api/api.js';
    export default {
		data() {
			return {
				bannerList: [],
				games: []
			}
		},
		created() {
			getRecommand({}).then(response => {
				this.bannerList = response.data.newArr[0];
				this.games = response.data.games;
			})
			.catch(err => {
			   alert(err);
			});

		}
	}
</script>

<style scoped>
   #news-container {
	   flex-direction: row;
	   display: flex;
	   justify-content: space-around;
   }

   .news-content {
	   width: 300px;
	   height: 150px;
	   margin-top: 10px;
	   position: relative;
	   overflow: hidden;
	   border-radius: 5px;
   }

   .news-content p {
	   color: #FFF;
	   width: 100%;
	   height: 40px;
	   line-height: 40px;
	   text-align: center;
	   background: #111;
	   opacity: 0.7;
	   font-size: 0.1em;
	   position: absolute;
	   bottom: -40px;
	   left: 0px;
	   transition: .5s;
   }

   .news-img {
	   width:300px;
	   height: 150px;
   }

   .news-content:hover p {
	   transform: translateY(-40px);
   }

   .newsboxs {
	   margin-top: 20px;
	   flex-direction: column;
	   display: flex;
   }

   .news-box p{
	   width: 100%;
	   height: 50px;
	   background: darkgreen;
	   color: #fff;
       font-size: 15px;
	   line-height: 50px
   }

   .news-box {
	   color: red;
	   margin-top: 20px;
   }

   #players {
	   display: flex;
	   flex-direction: row;
	   justify-content: center;
	   align-items: center;
   }

   .news-box img {
	   width: 80px;
	   height: 80px;
   }

   .game-item {
	   display: flex;
	   flex-direction: column;
	   justify-content: center;
	   align-items: center;
   }
</style>