$(function(){
    $.fn.myScroll = function(options){
        //默认配置
        var defaults = {
            speed:40,  //滚动速度,值越大速度越慢
            rowHeight:24 //每行的高度
        };
        var opts = $.extend({}, defaults, options),intId = [];
        function marquee(obj, step){
            obj.find("ul").animate({
                marginTop: '-=1'
            },0,function(){
                    var s = Math.abs(parseInt($(this).css("margin-top")));
                    if(s >= step){
                        $(this).find("li").slice(0, 1).appendTo($(this));
                        $(this).css("margin-top", 0);
                    }
                });
        }
        this.each(function(i){
            var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
            intId[i] = setInterval(function(){
                if(_this.find("ul").height()<=_this.height()){
                    clearInterval(intId[i]);
                }else{
                    marquee(_this, sh);
                }
            }, speed);
        });
    }


})




// 输入手机号格式
    $('#y_mobile').keyup(function() {
        var mob_len = this.value.length;
        if(event.keyCode == 8 || event.keyCode == 46){

        }else{
            if (mob_len == 3 || mob_len == 8) {
                this.value += " ";
            }
        }
    });

    $("#y_mobile").change(function(){
        var y_mobile= $.trim($("#y_mobile").val());
        y_mobile = y_mobile.replace(/\s/ig,'');  //去掉所有空格
        test_mobile = /^1[34578]\d{9}$/; 
        if(!test_mobile.test(y_mobile)){//手机号格式不正确
            // alert("手机号格式不正确");
          $('#y_mobile').siblings('.erd').removeClass('h').html('手机号格式不正确');
            $("#y_mobile").addClass('er').focus();
            return false;
        }
    });