/* eslint-disable no-console */
// 多页面配置
import Vue from "vue";

import App from './ts';

new Vue({
  el: "#app",
  render: h => h(App)
});