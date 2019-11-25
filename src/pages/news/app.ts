
import Vue from "vue";
// import iView from "iview";
// import "iview/dist/styles/iview.css";

import News from "./news.vue";
// Vue.use(iView);

//状态管理
import store from "../../store/index";

new Vue({
    el: "#app",
    store,
    render: h => h(News)
});