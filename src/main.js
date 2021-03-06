import Vue from 'vue'
import App from './App'
import store from './store/index'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store // 这里通过全局注入绑定到实例原型上 后面组件里就不需要再引入注册了

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/me/main', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#42bd56',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: '#fff'
    },
            tabBar: {
              "list": [{
                "pagePath": "pages/index/main",
                'iconPath': './static/img/h.png',
                'selectedIconPath': './static/img/h1.png',
                "text": "首页"
              }, {
                "pagePath": "pages/me/main",
                'iconPath': './static/img/me.png',
                'selectedIconPath': './static/img/me1.png',
                "text": "我"
              }]
            },
  }
}
