/* eslint-disable no-console */
// 多页面配置
import Vue from "vue";

import App from './main';

new Vue({
  el: "#app",
  render: h => h(App)
});