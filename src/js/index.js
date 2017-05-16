var ws = new WebSocket("ws://192.168.3.108:8080/qcwy/wxWebSocket/{"+1+"}");
ws.onopen = function () {
    alert("ddddddd");
    heartCheck.start();
}
ws.onerror = function () {
    ws = new WebSocket("ws://192.168.3.108:8080/qcwy/wxWebSocket/1");
}
ws.onclose = function () {

}
ws.onmessage = function (data) {
    alert(data)
    heartCheck.reset();
}
var heartCheck = {
    timeout: 1000,//60s
    timeoutObj: null,
    reset: function () {
        clearTimeout(this.timeoutObj);
        this.start();
    },
    start: function () {
        this.timeoutObj = setTimeout(function () {
            ws.send("HeartBeat");
        }, this.timeout)
    }
}
$(function () {
    // 解决移动端300ms延迟问题，在jquery中直接使用click事件就可以
    //FastClick.attach(document.body);
    // 获取微信 openID
    var search = getQueryStringArgs();
    var yatogami = {};
    var url1 = URL + 'wx/accredit';
    $.get(url1, {code: search.code}, function (doka) {
        yatogami = doka.data;
        console.log(yatogami);
        sessionStorage.openID = yatogami.openid;
        $('.sliding-menu img').attr('src', yatogami.headimgurl);
        $('.index-user-info img').attr('src', yatogami.headimgurl);
        $('.index-user-info p').text(yatogami.nickname);
    });

    // 根据 openID 获取用户信息
    var url2 = URL + 'wx/getUser';
    $.get(url2, {openId: 1}, function (kotori) {
        var itsuka = kotori.data;
        alert(itsuka)
        // 设置微信信息
        //$('.sliding-menu img').attr('src', itsuka.headimgurl);
        //$('.index-user-info img').attr('src', itsuka.headimgurl);
        //$('.index-user-info p').text(itsuka.nickname);
        //WebSocket
        // var ws = new WebSocket("ws://192.168.3.108:8080/qcwy/wxWebSocket/{"+1+"}");
        // ws.onopen = function () {
        //     alert("ddddddd");
        //     heartCheck.start();
        // }
        // ws.onerror = function () {
        //     ws = new WebSocket("ws://192.168.3.108:8080/qcwy/wxWebSocket/1");
        // }
        // ws.onclose = function () {
        //
        // }
        // ws.onmessage = function (data) {
        //     alert(data)
        //     heartCheck.reset();
        // }
        // var heartCheck = {
        //     timeout: 1000,//60s
        //     timeoutObj: null,
        //     reset: function () {
        //         clearTimeout(this.timeoutObj);
        //         this.start();
        //     },
        //     start: function () {
        //         this.timeoutObj = setTimeout(function () {
        //             ws.send("HeartBeat");
        //         }, this.timeout)
        //     }
        // }
        //WebSocket-END
    });

    // 1.点击个人中心
    var $menuBtn = $('.index-header .sliding-menu');
    var $slideMenu = $('.index-user');

    $menuBtn.on('click', function () {
        $slideMenu.show();
    });

    // 2.点击个人关闭中心按钮
    var $close = $('#index-menu-close');

    $close.on('click', function () {
        $slideMenu.hide();
    });

    // 3.点击预约修车
    // var $headerBtns = $('.header-bottom span'),
    // 	$repNow = $($headerBtns[0]),	// 立即修车按钮
    // 	$repOrder = $($headerBtns[1]),
    //$orderTime = $('li.hide'),
    // 	$submitBtns = $('.bottom-submit span'),
    // 	$subOrder = $($submitBtns[1]);	// 预约发布按钮
    // // $repOrder.on('click', function () {
    $('body').on('click', ".yyy", function () {
        /*1.自己添加样式，立即修车删除样式
         2.预约内容增加一栏
         3.底部按钮内容切换
         */
        $(this).removeClass('off').prev().addClass('off');
        // $subOrder
        $(".yyyy").css('display', 'block').prev().css('display', 'none');
        // $orderTime.show();
        $('li.hide').show();
    });
    // $repNow
    $("body").on('click', ".mmm", function () {
        $(this).removeClass('off').next().addClass('off');
        // $subOrder
        $(".yyyy").hide().prev().show();
        //$orderTime.hide();
        $('li.hide').hide();
    });

    // 4.获取今天的时间
    // var $timerContainer = $('.bottom-info i');	// 获取存放时间的元素
    //
    // var myDate = new Date(),
    // 	today = '',
    // 	month = null,
    // 	day = null;
    //
    // // 时间处理，小于10的时间，前边加上0
    // month = (parseInt(myDate.getMonth()) + 1) < 10 ? '0' + (parseInt(myDate.getMonth()) + 1) : (parseInt(myDate.getMonth()) + 1);
    // day = parseInt(myDate.getDate()) < 10 ? '0' + parseInt(myDate.getDate()) : parseInt(myDate.getDate());
    //
    // today = myDate.getFullYear() + '-' + month + '-' + day;
    // $timerContainer.text(today);

    // 5.点击维修地点、问题描述，存储信息到本地
    // var linkBtns = $('.bottom-info li a'),
    // 	$map = $(linkBtns[0]),
    // 	$description = $(linkBtns[1]),
    // 	infoSpans = $('.bottom-info span');//发起时间  12345

    // $description.on('click', function () {
    // 	changePage($(this), 'problemDescription.html');
    // });

    // $map.on('click', function () {
    // 	changePage($(this), 'map.html');
    // });

    // function changePage (a, ur) {
    // 	/*1.获得列表中，除了自身以外的值，并把自身值清空
    // 	 2.把信息传递给 sessionStorage
    // 	 3.跳转页面
    // 	 */
    // 	a.text('');
    //
    // 	var info = [];	// 存放信息的数组
    //
    // 	for(var i=0; i<infoSpans.length; i++) {
    // 		if(i == infoSpans.length -1) {
    // 			info.push($(infoSpans[i]).next().val());
    // 		} else {
    // 			info.push($(infoSpans[i]).next().text());
    // 		}
    // 	}
    // 	sessionStorage.setItem('now', info[0]);
    // 	sessionStorage.setItem('orderTime', info[1]);
    // 	sessionStorage.setItem('name', info[2]);
    // 	sessionStorage.setItem('problem', info[3]);
    // 	sessionStorage.setItem('description', info[4]);
    // 	window.location = ur;
    // }

    // 6.自动为表格分配信息（他本应该放在第一步）
    // function fillForm () {
    // 	!sessionStorage.now ? void(0) : $(infoSpans[0]).next().text(sessionStorage.now);
    // 	!sessionStorage.orderTime ? void(0) : $(infoSpans[1]).next().text(sessionStorage.orderTime);
    // 	!sessionStorage.name ? void(0) : $(infoSpans[2]).next().text(sessionStorage.name);
    // 	!sessionStorage.problem ? void(0) : $(infoSpans[3]).next().text(sessionStorage.problem);
    // 	!sessionStorage.description ? void(0) : $(infoSpans[4]).next().text(sessionStorage.description);
    // }
    // fillForm ();

    // 7.点击立即发起
    var $subNow = $(".mmmm"),
        $subNowCancel = $('#now a:first-child'),
        $subNowGo = $('#now a:last-child');

    // $subNow.on('click', function () {
    // 	if($(infoSpans[2]).next().text() == '') {
    // 		alert('请填写维修地址');
    // 	} else if($(infoSpans[3]).next().text() == '' && $(infoSpans[4]).next().val() == '') {
    // 		alert('请描述你遇到的问题');
    // 	} else {
    // 		$('#mask1').show();
    // 		$('#now').show();
    // 	}
    // });
    // $subNowCancel.on('click', function () {
    // 	$('#now').hide();
    // 	$('#mask1').hide();
    // });
    // $subNowGo.on('click', function () {
    // 	// 存储其他信息栏到本地（存储信息应该一步一存，集中存储不易管理）
    // 	sessionStorage.setItem('description', $(infoSpans[4]).next().val());
    //
    // 	// 创建 json
    // 	var sendData = {
    // 		openId : '1',
    // 		faultId : 1,
    // 		faultDescription : sessionStorage.description,
    // 		lon : sessionStorage.lng,
    // 		lati : sessionStorage.lat,
    // 		loc : sessionStorage.place
    // 	};
    //
    // 	// 发送订单信息到服务器
    // 	$.post('http://192.168.3.108:8080/qcwy/wx/placeOrder',
    // 		sendData,
    // 		function (data) {
    // 			console.log(data);
    // 			window.location = "dispat.vue.html";
    // 		})
    // });

    // 8.点击预约按钮
    var $subOrderCancel = $('#order a:first-child'),
        $subOrderGo = $('#order a:last-child')

    // $subOrder
    $(".yyyy").on('click', function () {
        $('#mask1').show();
        $('#order').show();
    });
    $subOrderCancel.on('click', function () {
        $('#order').hide();
        $('#mask1').hide();
    });
    $subOrderGo.on('click', function () {
        $('#order').hide().next().show();
        // 发送ajax请求

        setTimeout(function () {
            $('#order').next().hide();
            window.location = "repaireCurrent.html";
        }, 3000);
    });

    // 9.授权登录
    function getQueryStringArgs() {
        var qs = (location.search.length > 0 ? location.search.substring(1) : '');
        var arg = {};
        var items = qs.length ? qs.split('&') : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;

        for (i = 0; i < len; i++) {
            item = items[i].split('=');
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);

            if (name.length) {
                arg[name] = value;
            }
        }

        return arg;
    }

});
