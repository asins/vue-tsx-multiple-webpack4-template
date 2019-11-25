import _ from "lodash";
// eslint-disable-next-line no-console
console.log("this is login");
import Vue from "vue";

import Login from "./login.vue";

new Vue({
    el: "#app",
    render: h => h(Login)
});