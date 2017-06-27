import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import mainLayout from '@/components/mainlayout'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/main',
            name: 'hello',
            //    alias: "/",
//          component: resolve => require(['@/components/mainlayout'], resolve)
            component: mainLayout
        },
        {
            path: '/list',
            name: 'list',
            //路由的懒加载方式
            component: resolve => require(['@/components/List'], resolve)
        },
        //包括下拉刷新
        {
            path: '/progressbar/:id',
            name: 'progressbar',
            component: resolve => require(['@/components/ProgressBar'], resolve)
        },
        //只是简单的表单的提交
        {
            path: '/form',
            name: 'form',
            component: resolve => require(['@/components/formList'], resolve)
        },
        //该页面中包含了拖拽的效果
        {
        	path: '/cusEvent',
        	name: 'cusEvent',
        	component: resolve => require(['@/components/CusEvent'],resolve)
        },
        {
        	path: '/bglayout',
        	name: 'bglayout',
        	component: resolve => require(['@/components/BGLayout'],resolve)
        },
        {
        	path: "/douyu",
        	name: 'douyu',
        	component: resolve => require(["@/components/pages/Main"],resolve),
        	children: [
        	    {
        	    	path: 'home',
        	    	name: 'home',
        	    	component: resolve => require(["@/components/pages/Home"],resolve)
        	    },
        	    {
        	    	path: 'allcatogery',
        	    	name: 'allcatogery',
        	    	component: resolve => require(["@/components/pages/AllCatogery"],resolve)
        	    },
        	    {
        	    	path: 'recommand',
        	    	name: 'recommand',
        	    	component: resolve => require(["@/components/pages/Recommand"],resolve)
        	    },
        	    {
        	    	path: 'mine',
        	    	name: 'mine',
        	    	component: resolve => require(["@/components/pages/Mine"],resolve)
        	    }
        	]
        },
        {
            path: '/',
            //  	path: '*',
            redirect: '/main'
        }
    ]
})