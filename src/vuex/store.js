import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
	item : 1,
	todos: [
	   { id: 1, text: '...', done: true },
       { id: 2, text: '...', done: false }
	],
	obj: {
		msg : "vueDemo"
	}
}

const mutations = {
	UPDATE(state){
		state.item ++;
	},
	updateMsg(state,msg){
		state.obj.msg = msg;
	}
}

export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
});
