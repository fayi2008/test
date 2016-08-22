/*
 *
 * write by fay
 * time:2015-02-10 11:00
 *
 * */

(function(plus) {

    if("function" == typeof define ){
        if(typeof define.amd=='object'){
            define(['jquery','wx'],function ($,_wx) {

                return plus($,_wx)
            })
        }else if(typeof define.cmd=='object'){
            define(function () {
                var $=require('jquery'),
                    wx=require('/pages/public/js/jweixin')
                return plus($,wx)
            })
        }
    }else{

        plus($,wx)


    }


})(function($,wx){
    if (typeof jsApiConfig != 'undefined'&&wx) {
        //微信初始化
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: jsApiConfig.appId, // 必填，公众号的唯一标识
            timestamp: jsApiConfig.timestamp, // 必填，生成签名的时间戳
            nonceStr: jsApiConfig.nonceStr, // 必填，生成签名的随机串
            signature: jsApiConfig.signature,// 必填，签名，见附录1
            jsApiList: ['checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        //直接调用可以使用微信各分享接口
        $.WXSHAER = function (opt) {

            var opts = {
                title: $('body').attr('title')||'',
                desc: $('body').attr('desc')||'',
                link: $('body').attr('link')||window.location.href,
                imgUrl: $('body').attr('imgUrl')||'',
                type: '',
                dataUrl: '',
                timeline:function(){},
                friend:function(){},
                qq:function(){},
                weibo:function(){}
            }
            var newopt =opts
            if(typeof opt=="object") {
                newopt=$.extend(opts, opt)
            }

            wx.ready(function () {

                wx.onMenuShareAppMessage({
                    title: newopt.title, // 分享标题
                    desc: newopt.desc, // 分享描述
                    link: newopt.link, // 分享链接
                    imgUrl: newopt.imgUrl, // 分享图标
                    type: newopt.type, // 分享类型,music、video或link，不填默认为link
                    dataUrl: newopt.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空

                    trigger: function (res) {
                        //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        //alert('已分享');
                        //alert(1)
                        newopt.friend()
                    },
                    cancel: function (res) {
                        //alert('已取消');
                    },
                    fail: function (res) {
                        //alert(JSON.stringify(res));
                    }
                });


                wx.onMenuShareTimeline({
                    title: newopt.title, // 分享标题
                    desc: newopt.desc, // 分享描述
                    link: newopt.link, // 分享链接
                    imgUrl: newopt.imgUrl, // 分享图标
                    trigger: function (res) {
                        //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        //alert('已分享');
                        newopt.timeline()
                    },
                    cancel: function (res) {
                        //alert('已取消');
                    },
                    fail: function (res) {
                        //alert(JSON.stringify(res));
                    }
                });


                wx.onMenuShareQQ({
                    title: newopt.title, // 分享标题
                    desc: newopt.desc, // 分享描述
                    link: newopt.link, // 分享链接
                    imgUrl: newopt.imgUrl, // 分享图标
                    trigger: function (res) {
                        //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        //alert('已分享');
                        newopt.qq()
                    },
                    cancel: function (res) {
                        //alert('已取消');
                    },
                    fail: function (res) {
                        //alert(JSON.stringify(res));
                    }
                });

                wx.onMenuShareWeibo({
                    title: newopt.title, // 分享标题
                    desc: newopt.desc, // 分享描述
                    link: newopt.link, // 分享链接
                    imgUrl: newopt.imgUrl, // 分享图标
                    trigger: function (res) {
                        //alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        //alert('已分享');
                        newopt.weibo()
                    },
                    cancel: function (res) {
                        //alert('已取消');
                    },
                    fail: function (res) {
                        //alert(JSON.stringify(res));
                    }
                });
            })



        }
    }else{
        $.WXSHAER = function (opt) {
            var opts = {
                title: '',
                desc: window.location.href,
                link: window.location.href,
                imgUrl: '',
                type: '',
                dataUrl: '',
                timeline:function(){},
                friend:function(){}
            }

            var newopt = $.extend(opts, opt)

            document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

                WeixinJSBridge.on('menu:share:appmessage', function (argv) {
                    WeixinJSBridge.invoke('sendAppMessage', {
                        title: newopt.title, // 分享标题
                        desc: newopt.desc, // 分享描述
                        link: newopt.link, // 分享链接
                        img_url: newopt.imgUrl // 分享图标

                    }, function (res) {

                        if (res.err_msg.indexOf('send_app_msg:confirm') > -1) {
                            newopt.friend()
                        }

                    });
                });

                WeixinJSBridge.on('menu:share:timeline', function (argv) {
                    WeixinJSBridge.invoke('shareTimeline', {
                        title: newopt.title, // 分享标题
                        desc: newopt.desc, // 分享描述
                        link: newopt.link, // 分享链接
                        img_url: newopt.imgUrl // 分享图标

                    }, function (res) {

                        if (res.err_msg.indexOf('share_timeline:ok') > -1) {
                            newopt.timeline()
                        }
                    });

                });
            });
        }
    }
})