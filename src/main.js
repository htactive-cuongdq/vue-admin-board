import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify.js'
import AlertCmp from './components/Alert.vue'
Vue.config.productionTip = false
Vue.component('AlertCmp', AlertCmp)
new Vue({
    router,
    store,
    vuetify,
    render: function(h) { return h(App) }
}).$mount('#app')