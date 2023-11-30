import {createApp} from 'vue'
import App from './App.vue'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'

import router from './router/index.js'
import 'vue-loaders/dist/vue-loaders.css';
import VueLoaders from 'vue-loaders';
import store from "./store";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueCameraLib from 'vue-camera-lib'
import AOS from 'aos'
import VueAwesomePaginate from "vue-awesome-paginate";

import 'aos/dist/aos.css'


// import { VueReCaptcha } from 'vue-recaptcha-v3'
require('@/store/subscriber')


store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    createApp(App).use(router).use(store).use(VueSweetalert2).use(VueLoaders).use(AOS.init()).use(VueCameraLib).use(VueAwesomePaginate).mount('#app')

})
