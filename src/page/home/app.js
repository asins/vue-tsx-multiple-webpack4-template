/* eslint-disable no-console */
// 多页面配置
import _ from "lodash";
import "../../style/css.css";
import "../../style/less.less";
console.log(_.chunk(["a", "b", "c", "d"], 2,2));
console.log("------------this is home 22222200----------");


import Vue from "vue";

import Home from "./home.vue";

//状态管理
import state from "../../store/index";

new Vue({
    el: "#app",
    state,
    render: h => h(Home)
});