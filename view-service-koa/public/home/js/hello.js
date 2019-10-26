$("#jsonsubmit").click(function(){
    var phone = $("#searchkey").val();
    var url = "/getData";
    $.post(url,{phone:phone},function(res){
            if(res.length>0){
                alert("查询到"+res.length+"条结果:"+JSON.stringify(res));
               
            }else{
                alert("没有查到该手机号相关信息");
            }
            console.log(res);
        })
    })