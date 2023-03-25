


import { createRouter, createWebHistory } from 'vue-router';


//import store  from '@/store'

import  Dashboard from '../dashboard/home'
import HomePage from '../home'
import Register from '../auth/register.vue'
import RegisterForm from '../auth/registerform.vue'
import Type from '../auth/type.vue'
import Verify from '../auth/verify.vue'
import Login from '../auth/login.vue'
import Loader from '../auth/loader.vue'
import Wallet from '../wallet/wallet.vue'
import Pay from '../cardri/pay.vue'
import send from '../cardri/send.vue'
import Swap from '../swap/fund.vue'
import Payment from '../transaction/payment.vue'
import Success from '../success/1.vue'
import Card from '../card/home.vue'
import Market from '../market/home.vue'
import Bill from '../bills/home.vue'
import Settings from '../settings/setting.vue'
import Referral from '../referral/refer.vue'
import Soon from '../available/soon.vue'

import Transaction from '../transaction/home.vue'



import axios from 'axios'
import store  from '@/store'

axios.defaults.baseURL = 'https://api.cardri.ng/'
const routes = [{
        path: '/dashboard/home',
        name: 'Home',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/wallet/wallet',
        name: 'Wallet',
        component: Wallet,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/transaction/home',
        name: 'Transaction',
        component: Transaction,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/cardri/pay',
        name: 'Cardri Pay',
        component: Pay,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/available/soon',
        name: 'Available Soon',
        component: Soon,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/settings/setting',
        name: 'Setting',
        component: Settings,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/referral/refer',
        name: 'Referral',
        component: Referral,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/swap/fund',
        name: 'Swap fund',
        component: Swap,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/market/home',
        name: 'P2P',
        component: Market,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/bill/home',
        name: 'Bill',
        component: Bill,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/success/1',
        name: 'Success ',
        component: Success,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/transaction/payment/:form',
        name: 'Payment',
        component: Payment,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/cardri/send',
        name: 'Send money',
        component: send,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/card/home',
        name: 'Card',
        component: Card,
        beforeEnter: (to, from, next) => {
            if(!store.getters['auth/authenticated']){
                return next({
                    name:'Login'
                })

            }
            next()
        }
        
      
    },
    {
        path: '/',
        name: 'Homepage',
        component: HomePage,
      
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
        beforeEnter: (to, from, next) => {
            if(store.getters['auth/authenticated']){
                return next({
                    name:'Home'
                })

            }
            next()
        }
    },
    {
        path: '/auth/type',
        name: 'Verify Type',
        component: Type,
      
    },
    {
        path: '/auth/loader',
        name: 'Loader',
        component: Loader,
      
    },
    {
        path: '/auth/verify',
        name: 'Verify Registration',
        component: Verify,
      
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
        beforeEnter: (to, from, next) => {
            if(store.getters['auth/authenticated']){
                return next({
                    name:'Home'
                })

            }
            next()
        }
    },
    {
        path: '/auth/registerform/:type',
        name: 'Registers',
        component: RegisterForm,
      
    },
   
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})



router.beforeEach((to, from, next) => {

    document.title = `${ to.name}`
    next()


    // to and from are both route objects. must call `next`.
})



  
 
export default router