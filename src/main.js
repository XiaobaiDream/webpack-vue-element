import Vue from 'vue';
import App from './app.vue';

import './style/common.scss';

Vue.component('my-component', {
    template: '<img :src="url" width="50" />',
    data() {
        return {
            url: require('./image/pic_1.jpg')
        }
    }
});

const lodash = require('lodash');
Vue.prototype._lodash = lodash;

const vm = new Vue({
    el: '#app',
    render: c => c(App)
});