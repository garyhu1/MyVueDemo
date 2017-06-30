<template>
	<div id="main-layout">
		<bg-layout @showLeft="showDraw"></bg-layout>
		<div id="main-content">
			<item :item="item"></item>
			<button @click="$store.dispatch('updateData')" class="btn md-button">增加</button><br />
			<button class="btn md-button" @click="goToCusEvent">{{ item }}</button><br />
			<input :value='msg' @input='updateMsg' class="msg" />
			<p @click='toForm' class="pClick">{{ msg }}</p>
			<button @click="changeBG" class="btn md-button">改变背景色</button><br />
			<p id="bg">点击按钮会改变背景色</p>
			<button class="btn md-button" @click="lookData">查看列表</button>
			<ul class="l-list"></ul>
			<br/>
			<button class='btn md-button' @click="getTodo">vue-bootstrap</button>
			<div v-for='item in todos'>
				<p id="news-info">
					<span>{{item.title}}</span>
					<span>{{item.date}}</span>
				</p>
				<div id="con">
					<img id="player1" :src="item.playerImg1" />
					<span id="vs">vs</span>
					<img id="player2" :src="item.playerImg2" />
				</div>
			</div>
			<br />
			<button class="btn md-button" @click='goDouYuTV'>斗鱼TV</button>
		</div>
	</div>
</template>

<script>
	import item from './item';
	import BgLayout from './BGLayout';
	import { mapState } from 'vuex';
	import { add } from '../assets/js/test.js';
	import { addRipple } from '../assets/js/rp.js';
	import { getTodoList } from '../api/api';

	export default {
		data() {
			return {
				todos: [],
				isChange: false,
				isShow: false
			}
		},
		components: {
			item,
			BgLayout
		},
		computed: {
			...mapState({
				msg: state => state.obj.msg,
				item: state => state.item
			})
			//此做法也可行
			//			item() {
			//				return this.$store.state.item;
			//			}
		},
		created() {
			//没有执行
			//			add();
		},
		methods: {
			updateMsg(e) {
				this.$store.commit('updateMsg', e.target.value);
			},
			changeBG() {
				this.isChange = !this.isChange;
				if(this.isChange) {
					jQuery("#bg").css({
						background: 'grey',
						color: '#fff'
					});
				} else {
					jQuery("#bg").css({
						background: 'darkkhaki',
						color: '#fff'
					});
				}
			},
			lookData() {
				this.$router.push('list');
			},
			getTodo() {
				this.$router.push('bootstrap');
			},
			toForm() {
				this.$router.push('form');
			},
			goToCusEvent() {
				this.$router.push('cusEvent');
			},
			goDouYuTV() {
				this.$router.push(this.$store.state.address);
			},
			showDraw() {
				this.isShow = !this.isShow;
				if(this.isShow){
					jQuery('#main-content').animate({
						left: "0vh"
					},400);
				}else {
					jQuery('#main-content').animate({
						left: "-30vh"
					},400)
				}
			}
		},
		mounted() {
			add(),
				addRipple('md-button')
		}
	}
</script>

<style>
	@import '../assets/css/ripple.css';
	@import '../common/style/main.css';
</style>