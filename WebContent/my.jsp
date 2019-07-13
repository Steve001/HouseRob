<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>


<html style="font-size: 170.66666666666669px;"><head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="keywords" content="北京房地产,北京房产网,北京房产信息网, 北京手机搜狐焦点网">
<meta name="description" content="北京手机搜狐焦点网为购房者提供北京房产信息、家居装修资讯,北京房产楼盘详情、买房流程、业主论坛、家居装修等全面内容信息，北京手机搜狐焦点网互联网的购房平台。">

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover">

<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta content="telephone=no" name="format-detection">
<meta name="apple-mobile-web-app-title" content="搜狐焦点房产">
<link rel="apple-touch-icon" sizes="57x57" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus57_75493c93e438a29f0c5f4eba1f12938c.png">
<link rel="apple-touch-icon" sizes="72x72" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus72_a1be4dd145165d5c837fc83f7b1e1eb6.png">
<link rel="apple-touch-icon" sizes="114x114" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus114_10cb41af990a985ebdb1a7929a5b1e68.png">
<link rel="apple-touch-icon" sizes="144x144" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus144_711d6a736034fb8e4bdfadd0e0db1e1d.png">
<link rel="apple-touch-icon" sizes="152x152" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus152_33e8a02e7fbc4f6431e63cb02e1cfa30.png">
<link rel="stylesheet" type="text/css" href="//t.focus-res.cn/front-end/icon/iconfont.css">

  <title>我的</title>
<script async="" src="https://assets.growingio.com/2.1/gio.js"></script><script type="text/javascript">
    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' :
            'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                // 大于640,就应该去访问pc站了
                if (clientWidth > 640) clientWidth = 640;
                // 页面中换算比例 : rem = px/75, 设计稿按750来
                docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
            };
        recalc();
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);

    })(window.document, window)

</script>
  <!-- GrowingIO Analytics code version 2.1 -->
  <script type="text/javascript">
  !function(e,t,n,g,i){e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},n=t.createElement("script"),tag=t.getElementsByTagName("script")[0],n.async=1,n.src=('https:'==document.location.protocol?'https://':'http://')+g,tag.parentNode.insertBefore(n,tag)}(window,document,"script","assets.growingio.com/2.1/gio.js","gio");
  gio('init', '87a4bcbf0b1ea517', {});
  gio('send');
  </script>
  <!-- End GrowingIO Analytics code version: 2.1 -->
  <!-- 微信自定义分享。 wiki：http://wiki.ops.focus.cn/pages/viewpage.action?pageId=4168910 -->
  <script type="text/javascript" src="https://t.focus-res.cn/front-end/lib/jquery/jquery.1.12.4.js"></script>
  <script type="text/javascript" src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
  <script>
      var wx_share = {
          _init: function (url, callback) {
              $.ajax({
                  url: "https://wx-open-api.focus.cn/ajax/wxJsConfig",
                  type: "GET",
                  cache: false,
                  dataType: "json",
                  data: {
                      url: url,
                      sceneType: 7, //1为主站wap页，2论坛wap页，3直播wap页,4专题，5问吧，6南瓜租房，7线上售楼处
                  },
                  success: function (r) {
                      if (r.code === 200) {
                          var d = r.data;
                          callback.call(this, d);
                      }
                  }});
          },

          init: function (opt) {
              var m = this;
              m._init(opt.url, function (d) {
                  var api_list = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'];
                  wx.config({
                      debug: false, //true为调试模式，线上需置为false
                      appId: d.appId,
                      timestamp: d.timestamp,
                      nonceStr: d.nonceStr,
                      signature: d.signature,
                      jsApiList: api_list// 需要使用的JS接口列表
                  });
                  var wx_data = {
                      title: opt.title,
                      desc: opt.desc,
                      link: opt.url,
                      imgUrl: opt.pic,
                      type: 'link',
                      dataUrl: '',
                      success: function () {
                          if (opt.success) {
                              opt.success.call(m, opt);
                          }
                      },
                      cancel: function () {
                      }
                  };
                  wx.ready(function () {
                      wx.onMenuShareTimeline(wx_data); //分享到朋友圈
                      wx.onMenuShareAppMessage(wx_data); //分享给朋友
                      wx.onMenuShareQQ(wx_data); //分享到QQ
                      wx.onMenuShareWeibo(wx_data); //分享到腾讯微博
                      wx.onMenuShareQZone(wx_data); //分享到QQ空间
                  });
                  wx.error(function(res){
                      console.log(res);
                  });
              });
          },
      };

      var s = {
          title: $("title").text(),
          // desc: $("meta[name=description]").attr("content"),
          desc: '华龙壹號院—在线开盘选房系统',
          pic: "https://t-img.51f.com/sh120x120sh/xf/xw/81f9d500-d71c-4d3e-97fe-077c0e140464.JPEG",
          url: window.location.href.split('#')[0]
      };
      var is_weixin = /micromessenger/ig.test(window.navigator.userAgent);//判断是否微信环境
      if (is_weixin) {
          wx_share.init(s);
      }
  </script>

<link href="https://t1.focus-res.cn/house-on-sale/wap/bundle/bundle.626e8fc84547e938081b508bed75c019.css" rel="stylesheet"><link href="https://t1.focus-res.cn/house-on-sale/wap/user-center/user-center.b47c779378b99a8edb44831d8034e64c.css" rel="stylesheet"><script type="text/javascript" src="//pv.focus.cn/pv.gif?t?=1562050298557787_1680_1050?r?=https%3A%2F%2Fhouse-on-sale.focus.cn%2Fsubscribe%2F4354127744%2Fhomepage?sohu_CID?=?focusinf?="></script></head>

<body data-isselectnum="" data-projectid="4354127744">
                    <div class="bg">
                                <div class="avatar-wrap">
                    <img src="data:image/png;base64,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" class="avatar">
                </div>
                <a href="javascript:void(0)" class="logout"></a>
            </div>

            <div class="content">
                <div class="center">
                    <div class="info">
                        <p class="name">崔凯航</p>
                        <p class="phone" id="my_id_card">DE******96</p>
                    </div>
                    <div class="uc-content">

                        <ul class="uc-menu-list ">
                                                    <li class="item flex">
                            <i class="icon collect"></i>
                            <a class="ctx cell" href="/subscribe/4354127744/collection/9255358696">
                              <p class="menu">我的收藏</p>
                            </a>
                            <a href="javascript:;" class="link"></a>
                          </li>
                          
                          <li class="item flex">
                            <i class="icon source"></i>
                            <a class="ctx cell" href="/subscribe/4354127744/myRoom/9255358696">
                              <p class="menu">我的房源</p>
                            </a>
                            <a href="javascript:;" class="link"></a>
                          </li>

                          
                          <li class="item flex">
                            <i class="icon need"></i>
                            <a class="ctx cell" href="/subscribe/4354127744/notice">
                              <p class="menu">选房须知</p>
                            </a>
                            <a href="javascript:;" class="link"></a>
                          </li>

                          <li class="item flex">
                            <i class="icon tel"></i>
                            <a class="ctx cell" href="tel:010-56601704">
                              <p class="menu">致电售楼处</p>
                            </a>
                            <a href="javascript:;" class="link"></a>
                          </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div class="uc-footer">
                Powered by 华龙壹號院
            </div>

            <div class="common-bottom" data-projectid="4354127744" data-userid="9255358696">
                <div class="jianbian"></div>

                <div class="toolbar flex">
                                        <a class="cell index " href="home_copy.jsp">
                        <span class="item">
                            <i></i><span>首页</span>
                        </span>

                    </a>
                    
                    
                    <a class="cell mine   active " href="my.jsp">
                        <span class="item">
                            <i></i><span>我的</span>
                        </span>
                    </a>

                                    </div>

                <div class="select-wrap" onclick="next()">
                	<script type="text/javascript">
						function next(){
							window.location = "houseSelect.jsp";
						}
				
					</script> 
                
                选房
                
                </div>            
              
               </div>

            <script type="text/javascript" src="//t.focus-res.cn/front-end/stat.js"></script>

        <script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/manifest/manifest.f94a9d37ef3adf711406.js"></script><script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/bundle/bundle.16dc0e501b4619e5587e.js"></script><script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/user-center/user-center.ec7e11af014ccdfb6c9b.js"></script></body></html>