// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
//全局使用jquery
import jQuery from 'jquery';
//引入bootstrap
//import './assets/css/bootstrap.min.css';
//import './assets/js/bootstrap.min';

// import Mock from './mock';
// Mock.start();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});