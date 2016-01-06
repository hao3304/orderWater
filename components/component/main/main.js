/**
 * Created by jack on 2015/9/23.
 */

var Vue = require("component_modules/vue.js");
var Router = require("component_modules/director.js").Router;
var loading = require("components/page/loading/loading.js");
var Fastclick = require("component_modules/fastclick.js");
var Service = require("main/service.js");
var Layer = require("component_modules/layer.m.js").layer;

var router = new Router();

window.app = new Vue({
    el:"#app",
    data:{
        currentView:"loading"
    },
    methods:{

    },
    components:{
        "loading":loading
    },
    ready:function(){
        Fastclick.FastClick.attach(document.body);
    }
});

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.hash.split("?")[1].match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

function doRouter(target,page){
    var coms = window.app.$options.components;
    if(!coms[target]){
        coms[target] = page;
    }
    window.app.$data.currentView = target;
}

router.on("/loading", function () {
    require.async(["components/page/loading/loading"], function (p) {
        doRouter("loading",p);
    })
});

router.on("/home", function () {
    require.async(["components/page/home/home"], function (p) {
        doRouter("home",p);
    })
});

router.on("/order", function () {
    require.async(["components/page/order/order"], function (p) {
        doRouter("order",p);
    })
});

router.on("/config", function () {
    require.async(["components/page/config/config"], function (p) {
        doRouter("config",p);
    })
});

router.on("/buy", function () {
    require.async(["components/page/buy/buy"], function (p) {
        doRouter("buy",p);
    })
});

router.on("/addr", function () {
    require.async(["components/page/addr/addr"], function (p) {
        doRouter("addr",p);
    })
});

router.on("/addr/add", function () {
    require.async(["components/page/addr/add/add"], function (p) {
        doRouter("addr_add",p);
    })
});

router.on("/addr/edit/:id", function (id) {
    require.async(["components/page/addr/edit/edit"], function (p) {
        doRouter("addr_edit",p);
    })
});

router.init("/home");




