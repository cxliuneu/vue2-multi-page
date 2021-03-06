import Vue from 'vue'
import router from '@/router'
import store from '@/store/'
import ElementUI from 'element-ui'
import App from './app'
import '@/style/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
    el        : '#app',
    router,
    store,
    template  : '<App/>',
    components: {App}
})




