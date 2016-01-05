/**
 * Created by jack on 2015/9/28.
 */

var Vue = require("component_modules/vue.js");
var nav = require("navbar/navbar.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("home.html"),
    ready: function () {

    }
});