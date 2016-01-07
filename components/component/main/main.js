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
        currentView:"loading",
        auth:{

        },
        goods:[
            {
                name:"纯净水",
                type:1,
                price:"10.0",
                pic:"bl.jpg",
                des:"这是介绍文字",
                num:0
            },{
                name:"天然水",
                type:2,
                price:"12.0",
                pic:"nfsq.jpg",
                des:"这是介绍文字",
                num:0
            }
        ],
        addrs:[
            {
                "addId":"1",
                "userName":"王××",
                "phone":"13844567983",
                "address":"××小区××单元",
                "default":"1"
            },
            {
                "addId":"2",
                "userName":"张××",
                "phone":"13844567983",
                "address":"××小区××单元",
                "default":"0"
            }
        ]
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
    require.async(["components/page/loading/loading.js"], function (p) {
        doRouter("loading",p);
    })
});

router.on("/home", function () {
    require.async(["components/page/home/home.js"], function (p) {
        doRouter("home",p);
    })
});

router.on("/order", function () {
    require.async(["components/page/order/order.js"], function (p) {
        doRouter("order",p);
    })
});

router.on("/config", function () {
    require.async(["components/page/config/config.js"], function (p) {
        doRouter("config",p);
    })
});

router.on("/buy", function () {
    require.async(["components/page/buy/buy.js"], function (p) {
        doRouter("buy",p);
    })
});

router.on("/addr", function () {
    require.async(["components/page/addr/addr.js"], function (p) {
        doRouter("addr",p);
    })
});

router.on("/addr/add", function () {
    require.async(["components/page/addr/add/add.js"], function (p) {
        doRouter("addr_add",p);
    })
});

router.on("/addr/edit/:id", function (id) {
    require.async(["components/page/addr/edit/edit.js"], function (p) {
        doRouter("addr_edit",p);
        p.options.methods.getId =  function(){
            return id;
        };
        window.app.$broadcast("onEdit",id);
    })
});

router.init("/home");




