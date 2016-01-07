/**
 * Created by jack on 2015/9/28.
 */

var Vue = require("component_modules/vue.js");
var Router = require("component_modules/director.js").Router;

module.exports = Vue.extend({
    inherit:true,
    template:__inline("edit.html"),
    data: function () {
      return {
          addr:{
              "addId":"",
              "userName":"",
              "phone":"",
              "address":"",
              "default":""
          }
      }
    },
    methods:{
        getAddr: function (id) {
            var self = this;
            this.addrs.forEach(function (item) {
                if(item.addId == id){
                    self.addr = item;
                    self.addr.default = item.default == 0?false:true;;
                }
            })
        }
    },
    ready: function () {
        var id = this.getId();
        this.getAddr(id);
        var self = this;
        this.$on("onEdit", function (id) {
            self.getAddr(id);
        })
    }
});

