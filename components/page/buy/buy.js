/**
 * Created by jack on 2015/9/28.
 */

var Vue = require("component_modules/vue.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("buy.html"),
    data: function () {
        return {
            sum:0
        }
    },
    methods:{
        onMinus: function (v) {
            v.num+=-1;
        },
        onPlus: function (v) {
            v.num+=1;
        }
    },
    watch:{
        goods:{
            deep:true,
            handler:function () {
                var sums = 0;
                for (var i = 0; i < this.goods.length; i++) {
                    var obj = this.goods[i];
                    sums += parseFloat(obj.price)*obj.num;
                }
                this.sum =  sums;
            }
        }
    },
    ready: function () {

    }
});