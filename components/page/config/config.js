/**
 * Created by jack on 2015/9/28.
 */

var Vue = require("component_modules/vue.js");
var nav = require("navbar/navbar.js");

module.exports = Vue.extend({
    inherit:true,
    template:__inline("config.html"),
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
    watch:{
        addrs:{
            deep:true,
            handler: function (addrs) {
                var self = this;
                addrs.forEach(function (item) {
                    if(item.default == 1){
                        self.addr = item;
                    }
                });
                
            }
        }
    },
    ready: function () {
        var self = this;
        this.addrs.forEach(function (item) {
            if(item.default == 1){
                self.addr = item;
            }
        });
    }
   
});