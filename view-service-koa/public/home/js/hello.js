
import {Test} from './Test.js';
class Hello {
    defaultval = '123';
    
    constructor(){
        this.bindEvent();
    }
    
    findUser() {
        var test = new Test();
        console.log(test.defaultval);
        test.test();

        var phone = $("#searchkey").val();
        var url = "/getData";
        phone = !phone ? this.defaultval : phone;
        $.post(url,{phone:phone},function(res){
            var arr = [1,2,3];
            arr = arr.map(item => item + 1);
            console.log("arr:"+arr);

                if(res.length>0){
                    alert("查询到"+res.length+"条结果:"+JSON.stringify(res));
                   
                }else{
                    alert("没有查到该手机号相关信息");
                }
                console.log(res);
            })
      }

      bindEvent() {
        let _this = this;
        $("#jsonsubmit").click(function(){
            _this.findUser();
        })
      }

}

var hello = new Hello();
//hello.findUser();




/*$("#jsonsubmit").click(function(){
    var phone = $("#searchkey").val();
    var url = "/getData";
    $.post(url,{phone:phone},function(res){
        var arr = [1,2,3];
        arr = arr.map(item => item + 1);
        console.log("arr:"+arr);

            if(res.length>0){
                alert("查询到"+res.length+"条结果:"+JSON.stringify(res));
               
            }else{
                alert("没有查到该手机号相关信息");
            }
            console.log(res);
        })
    })*/