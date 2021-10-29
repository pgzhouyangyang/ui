import Vue from 'vue'
import App from './App.vue'
import router from './router'


import TzUi from "../src/index"
import "../packages/theme-chalk/src/index.scss"

// import TzUi from "tzcx-ui"
// import 'tzcx-ui/lib/tzui.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/style/md.scss"
import "./assets/style/common.scss"

Vue.use(TzUi)
Vue.use(ElementUI)

import demoBlock from './components/demo-block.vue'
import MainHeader from './components/header';
import SideNav from './components/side-nav';
Vue.component('demo-block', demoBlock)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
