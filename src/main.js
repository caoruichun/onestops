import Vue from 'vue'
import App from './App'
import router from './router'
Vue.prototype.Vue = Vue
Vue.prototype.router = router

// 引入babel-polyfill
import 'babel-polyfill'
// 引入es6-promise
import promise from 'es6-promise'
promise.polyfill()
// 引入jQuery
import $ from 'jquery'
// 引入bootstrap
import './assets/bootstrap-3.3.7/css/bootstrap.min.css'
import './assets/bootstrap-3.3.7/js/bootstrap.min'
// 引入Bootstrap-table
import './assets/bootstrap-table-master/bootstrap-table.min.css'
import './assets/bootstrap-table-master/bootstrap-table.min'
// 引入ELement
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入font-awesome
import 'font-awesome/css/font-awesome.css'
// 引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'
Vue.prototype.Qs=Qs
let axios_instance = axios.create({
  baseURL: process.env.API,
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  transformResponse:[function (data) {
    if (!!window.ActiveXObject || "ActiveXObject" in window || navigator.userAgent.indexOf('MSIE')>=0) {
      data = JSON.parse(data)
    };
    if(data.statusCode==999) {
      let type='backZhaiwuyou';
      let targetOrigin="*";
      window.parent.postMessage(type,targetOrigin);
    };
    return data;
  }],
  responseType: 'json',
  headers: {
    'Content-Type':'application/x-www-form-urlencoded'
  },
  // timeout: 3000
})
axios_instance.interceptors.request.use(function(res) {
  $('#pageLoading').show();
  return res;
}, function(err) {
  $('#pageLoading').hide();
})
axios_instance.interceptors.response.use(function(res) {
  $('#pageLoading').hide();
  return res;
}, function(err) {
  $('#pageLoading').hide();
})
Vue.use(VueAxios, axios_instance)
// 引入Echarts
import echarts from 'echarts'
Vue.prototype.echarts = echarts
// 引入UEditor富文本编辑器
import '../static/ueditor/ueditor.config.js';
import '../static/ueditor/ueditor.all.js';
import '../static/ueditor/lang/zh-cn/zh-cn.js';
import '../static/ueditor/ueditor.parse.js';
// 全局组件
import component from './assets/component/component.js'
// 全局变量
import globalData from './assets/global/globalData.js'
Vue.prototype.globalData = globalData
// 全局方法
import globalFC from './assets/global/globalFC.js'
Vue.prototype.globalFC = globalFC
// 全局过滤器
import globalFilter from './assets/global/globalFilter.js'
for(let item in globalFilter) {
  Vue.filter(item, globalFilter[item])
}
// 站内所需数据
let globalInfo = {
  compCode: '', // 企业ID
  companyName: '', // 企业名称
  bondID: '', // 债券ID
  usrID: '', // 用户ID
  type: '', // 1：主体；2：个券
  modelIframe:'http://10.10.96.10:8080/ent_model'//智能模型iframe网址
}
Vue.prototype.globalInfo = globalInfo

// 取消vue所有的日志与警告
Vue.config.silent = true
// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false
// 完全禁用ESLint进行检测
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // 监听路由变化，去掉element弹窗
  watch: {
    $route() {
      try {
        this.$msgbox.close();
        this.$confirm.close();
        this.$prompt.close();
      }
      catch(err) {
        // console.log(err);
      }
    }
  }
})
