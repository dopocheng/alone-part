import Vue from 'vue'
import Router from 'vue-router'

import Top1 from '../views/wx-pages/detail-pages/top-1.vue'
import Top2 from '../views/wx-pages/detail-pages/top-2.vue'
import Top3 from '../views/wx-pages/detail-pages/top-3.vue'
import Top4 from '../views/wx-pages/detail-pages/top-4.vue'
import Paging from '../views/paging/paging.vue'
import weekOfMonth from '../views/date-question/weekOfMonth.vue'

Vue.use(Router)
export default new Router({
    mode: 'hash',
    routes:[
        {
            path: '/weekofmonth',
            component: weekOfMonth
        },
        {
            path: '/top1',
            component: Top1
        },
        {
            path: '/top2',
            component: Top2
        },
        {
            path: '/top3',
            component: Top3
        },
        {
            path: '/top4',
            component: Top4
        },
        {
            path: '/paging',
            component: Paging
        },
        // {
        //     path: '*',
        //     redirect: '/Top1'
        // }
    ]
})