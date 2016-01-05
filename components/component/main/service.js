/**
 * Created by jack on 2015/9/28.
 */

var prefix = "https://www.dlmeasure.com";
//var prefix = "";

function valid(rep,callback,error){
    if(rep.Code == 0){
        return callback.call(this,rep.Response);
    }else{
        return error.call(this,rep);
        //alert(rep.Message);
        //WeixinJSBridge.call('closeWindow');
    }
}

function queryLastOrder(p,c){
    $.post(prefix +"/queryLastOrder",JSON.stringify(p), function (rep) {
        valid(rep,c)
    });
}

function queryOrders(p,c){
    $.post(prefix +"/queryOrders",JSON.stringify(p), function (rep) {
        valid(rep,c)
    });
}

function queryOrderDetail(p,c){
    $.post(prefix +"/queryOrderDetail",JSON.stringify(p), function (rep) {
        valid(rep,c)
    });
}

function queryAdds(p,c){
    $.post(prefix +"/queryAdds",JSON.stringify(p), function (rep) {
        valid(rep,c)
    });
}

function confirmAdd(p,c){
    $.post(prefix +"/confirmAdd",JSON.stringify(p), function (rep) {
        valid(rep,c)
    });
}

function deleteAdd(p,c){
    $.post(prefix +"/deleteAdd",JSON.stringify(p), function (rep) {
        valid(rep,c)
    });
}

function confirmOrder(p,c){
    $.post(prefix +"/confirmOrder",JSON.stringify(p), function (rep) {
        valid(rep,c)
    });
}


function bindUser(p,c){
    $.ajax({
        url:prefix +"/duliang/1.1/wechat/app/binding",
        data:JSON.stringify(p),
        dataType:"json",
        type:"POST",
        contentType:"application/json",
        async:false,
        success:function(rep){
            valid(rep,c)
        },
        error:function(e){

        }
    })
}


function getUserInfo(p,c){
    $.ajax({
        url:prefix +"/duliang/1.1/wechat/user/info",
        data:JSON.stringify(p),
        dataType:"json",
        type:"POST",
        contentType:"application/json",
        async:false,
        success:function(rep){
            valid(rep,c)
        },
        error:function(e){
            //alert(JSON.stringify(e))
        }
    })
}


function GetQueryString(name,type)
{
    var target;
    if(type == "hash"){
        target =  window.location.hash.split("?")[1];
    }else{
        target = window.location.search.substr(1);
    }
    if(!target){
        return null;
    }
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = target.match(reg);
    if(r!=null)return  r[2]; return null;
}

module.exports = {
    queryLastOrder:queryLastOrder,
    queryOrders:queryOrders,
    queryOrderDetail:queryOrderDetail,
    queryAdds:queryAdds,
    confirmAdd:confirmAdd,
    deleteAdd:deleteAdd,
    confirmOrder:confirmOrder,
    bindUser:bindUser
};