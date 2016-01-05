/**
 * Created by jack on 2015/9/28.
 */

var Vue = require("component_modules/vue.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("buy.html"),
    ready: function () {
        mui(".mui-numbox").numbox({min:0});
    }
});