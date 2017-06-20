<template>
	<div>
		<item :item="item"></item>
		<button @click="$store.dispatch('updateData')" class="btn md-button">增加</button><br />
		<button class="btn md-button" @click="goToCusEvent">{{ item }}</button><br />
		<input :value='msg' @input='updateMsg' class="msg"/>
		<p @click='toForm' class="pClick">{{ msg }}</p>
		<button @click="changeBG" class="btn md-button">改变背景色</button><br />
		<p id="bg">点击按钮会改变背景色</p>
		<button class="btn md-button" @click="lookData">查看列表</button>
		<ul class="l-list"></ul>
		<br/>
		<button class='btn' @click="getTodo">获取数据</button>
		<div v-for='item in todos'>
		    <p>
			   <span>{{item.title}}</span>
			   <span>{{item.count}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	import item from './item';
	import { mapState } from 'vuex';
	import { add } from '../assets/js/test';
	import { addRipple } from '../assets/js/rp';
	import { getTodoList } from '../api/api';

	export default {
		data() {
			return {
				todos: []
			}
		},
		components: {
			item
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
				jQuery("#bg").css("background", 'grey').css('color', '#fff');
			},
			lookData() {
				this.$router.push('list');
			},
			getTodo() {
//				this.todos = [{title: "llal",count: 2},{title: "asd",count: 72}]
				getTodoList({}).then(res => {
					const TODOS = res.data.todos;
					this.todos = TODOS;
				}).catch(error => {
					alert(error);
				});
			},
			toForm() {
				this.$router.push('form');
			},
			goToCusEvent() {
				this.$router.push('cusEvent');
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