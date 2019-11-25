
import Vue from "vue";
// import iView from "iview";
// import "iview/dist/styles/iview.css";

import News from "./child.vue";
// Vue.use(iView);

new Vue({
    el: "#app",
    render: h => h(News)
});