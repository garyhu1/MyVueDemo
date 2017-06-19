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
            component: resolve => require(['@/components/mainlayout'], resolve)
                //    component: mainLayout
        },
        {
            path: '/list',
            name: 'list',
            component: resolve => require(['@/components/List'], resolve)
        },
        {
            path: '/progressbar/:id',
            name: 'progressbar',
            component: resolve => require(['@/components/ProgressBar'], resolve)
        },
        {
            path: '/form',
            name: 'form',
            component: resolve => require(['@/components/formList'], resolve)
        },
        {
            path: '/',
            //  	path: '*',
            redirect: '/main'
        }
    ]
})