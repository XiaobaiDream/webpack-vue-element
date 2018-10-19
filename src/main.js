import Vue from 'vue';

import './style/common.scss';

Vue.component('my-component', {
    template: '<img :src="url" width="50" />',
    data() {
        return {
            url: require('./image/pic_1.jpg')
        }
    }
})

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    }
});