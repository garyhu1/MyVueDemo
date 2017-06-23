import Vue from 'vue';
import axios from 'axios';

//设置axios的超时5000
axios.default.timeout = 5000;

//把axios放入到Vue的原型链中，任何页面中都可以使用
Vue.prototype.axios = axios;
