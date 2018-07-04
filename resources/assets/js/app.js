
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import axios from 'axios'

window.Vue = require('vue')
window.axios = axios;
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = CRSF_TOKEN;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['baseUrl'] = BASE_URL

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('Entext', require('./components/Entext.vue'));
Vue.component('Detext', require('./components/Detext.vue'));

const app = new Vue({
    el: '#vue-app'
});
