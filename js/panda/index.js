/**
 * Created by blur_ on 2017/9/10 0010.
 */




$(function () {


    //静音按键
    var bgm = document.getElementById("bgm");
    $(".part .switch").click(function () {
        if (bgm.paused) {
            bgm.play();
            $(".switch").css("background", "url(../../images/panda/switch.png)");
        } else {
            bgm.pause();
            $(".switch").css("background", "url(../../images/panda/switchoff.png)");
        }
    })

    //我可能是一个假的游戏列表

    $(".game-list").on("mouseenter",function (){
        $(".data-list").stop();
        $(".data-list").slideToggle(500)
        })
    $(".game-list").on("mouseleave",function (){
        $(".data-list").stop();
        $(".data-list").slideToggle(500)
    })
    //右侧三大板块导航
    /*
     * 1.滚动到相应板块放大 并移除黑色覆盖样式
     * 2.点击缓动到相应板块
     *
     * */

    //滚动事件 获取滚动距离
    //@param    sd : scroll distance
    //@param    index -2 前面有两条竖线
    $(window).scroll(function () {
        var sd = $(window).scrollTop();

        var page = $(".page").offset().top,
            feature = $(".feature").offset().top,
            protopic = $(".protopic").offset().top;
        $(".sider a").removeClass("active");
        $(".part .holepage").removeClass("active");
        if (sd + 120 >= protopic) {
            $(".sider a").eq(2).addClass("active");
        } else if (sd + 120 >= feature) {
            $(".sider a").eq(1).addClass("active");
        } else if (sd >= 0) {
            $(".sider a").eq(0).addClass("active");
        }
        if (sd >= 0 && sd < 450) {
            $(".page").addClass("active");
            $(".play").addClass("active");
        } else if (sd >= 550 && sd < 1350) {
            $(".feature").addClass("active");
        } else if (sd > 1350) {
            $(".protopic").addClass("active");
        }
    })

    //刷新页面执行页面一

    window.onload = function () {
        $(".miku").addClass("active1");
        $(".page").addClass("active");
        $(".play").addClass("active");
        $(".miku").removeClass("active1");
        timer = setInterval(function () {
            if ($(".banner ul").css("margin-left") == "0px") {
                $(".banner ul").css("margin-left", "-540px")
            } else {
                $(".banner ul").css("margin-left", "0px")
            }
        }, 4000);


        //头部导航slide特效
        timer1 = setInterval(function (){
                if ($(".right-bar .gogogo").css("top") == "-52px") {
                    $(".right-bar .gogogo").addClass("active")
                } else {
                    $(".right-bar .gogogo").removeClass("active");
                }
            },4000);

    }
    $(".banner li").mouseover(function (){
        clearInterval(timer);
    });
    $(".banner li").mouseout(function (){
        timer = setInterval(function () {
            if ($(".banner ul").css("margin-left") == "0px") {
                $(".banner ul").css("margin-left", "-540px")
            } else {
                $(".banner ul").css("margin-left", "0px")
            }
        }, 4000);
    })


    $(".right-bar .gogogo").mouseover(function (){
        clearInterval(timer1);
    });
    $(".right-bar .gogogo").mouseout(function (){
        timer1 = setInterval(function (){
            if ($(".right-bar .gogogo").css("top") == "-52px") {
                $(".right-bar .gogogo").addClass("active")
            } else {
                $(".right-bar .gogogo").removeClass("active");
            }
        },4000);
    })
    //点击按钮切换页面

    $(".sider a").click(function () {
        var index = $(this).index() - 2;
        console.log(index);
        var currentpage = $(".part .holepage").eq(index);
        currentpage.addClass("active");
        var ypos = currentpage.offset().top;
        $("html,body").animate({
            scrollTop: ypos + 25
        }, 400);
    })


    //点击关闭烦人的小广告呢！(*╹▽╹*)

    $("#btn").click(function () {
        console.log($("#btn").html() == "x");
        if ($("#btn").html() == "x") {
            $(".ad").animate({
                bottom: "-200px"
            }, 500, function () {
                $(".ad").animate({
                    left: "-190px"
                }, 500)
            })
            $("#btn").html("o");
        } else {
            $(".ad").animate({
                left: "0px"
            }, 500, function () {
                $(".ad").animate({
                    bottom: "100px"
                }, 500)
            })
            $("#btn").html("x");
        }
    });


    //tab栏

    $(".news-tab a").mouseover(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".news-main ul").eq(index).addClass("select").siblings().removeClass("select");
    })
    //轮播图


    //预约系统

    $(".slogan .preplay").click(function () {
        layer.open({
            type: 1,
            title:false,
            skin: 'layui-layer-rim', //加上边框
            area: ['621px', '612px'], //宽高
            shade: 0.3,
            content: '<div class="reg"> <span class="ios">IOS</span> <span class="and">Android</span><input type="text" id="zgm" placeholder="输入邮箱获取资格码"/><input type="text" id="phone" placeholder="请输入手机号"/> <input type="text" id="yzm" placeholder="请输入验证码"/><input type="button" id="hq"/><input type="button" id="yy"/></div>'
        });
        $(".ios").click(function () {
            $(".ios").css({
                "background": "url(\"../../images/panda/select.png\")",
                "color": "#fff"
            });
            $(".and").css({
                "background": "url(\"../../images/panda/unselect.png\")",
                "color": "#7d7d7d"
            })
        })
        $(".and").click(function () {
            $(".ios").css({
                "background": "url(\"../../images/panda/unselect.png\")",
                "color": "#7d7d7d"
            });
            $(".and").css({
                "background": "url(\"../../images/panda/select.png\")",
                "color": "#fff"
            })
        })

        $("#hq").click(function (){
            layer.alert('验证码已发送到您的手机', {
                    skin: 'layui-layer-molv'
                    ,closeBtn: 0
                    ,anim: 3 //动画类型
                });
        })

        $("#yy").on("click",function (){
            layer.confirm('是否希望通过短信形式收到游戏更新内容', {
                btn: ['没问题(*╹▽╹*)','不要o(￣ヘ￣o＃)'] //按钮
            }, function(){
                layer.msg('Thanks♪(･ω･)ﾉ', {icon: 1});
            }, function(){
                layer.msg('蠢猪才选这个选项呢(｡•ˇ‸ˇ•｡)', {
                    time: 10000, //20s后自动关闭
                    btn: ['我是小猪^(*￣(oo)￣)^', '我是小狗U·ェ·U']
                });
            });
        })
        })


//原画特效

    $(".picbox .mikumiku").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
    $(".picbox .mikumiku").mouseout(function () {
        $(this).removeClass("active");
    })


//点击按钮 弹出视频窗口 禁用页面 同时暂停音乐
    var advd = document.getElementById("advd")
    $(".slogan .play").click(function () {
        $(".vd").css("display", "block");
        bgm.pause();
        advd.play();
        $(".switch").css("background", "url(../../images/panda/switchoff.png)");
        $(".mask").addClass("go");
    })
    $(".vd i").click(function () {
        $(".vd").css("display", "none");
        bgm.play();
        advd.pause();
        $(".mask").removeClass("go");
        $(".switch").css("background", "url(../../images/panda/switch.png)");

    })





});