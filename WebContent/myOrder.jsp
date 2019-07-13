<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<!doctype html>
<html>

    



<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="北京房地产,北京房产网,北京房产信息网, 北京手机搜狐焦点网" />
<meta name="description" content="北京手机搜狐焦点网为购房者提供北京房产信息、家居装修资讯,北京房产楼盘详情、买房流程、业主论坛、家居装修等全面内容信息，北京手机搜狐焦点网互联网的购房平台。" />

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover">

<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta content="telephone=no" name="format-detection"/>
<meta name="apple-mobile-web-app-title" content="华龙壹號院">
<link rel="apple-touch-icon" sizes="57x57" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus57_75493c93e438a29f0c5f4eba1f12938c.png">
<link rel="apple-touch-icon" sizes="72x72" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus72_a1be4dd145165d5c837fc83f7b1e1eb6.png">
<link rel="apple-touch-icon" sizes="114x114" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus114_10cb41af990a985ebdb1a7929a5b1e68.png">
<link rel="apple-touch-icon" sizes="144x144" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus144_711d6a736034fb8e4bdfadd0e0db1e1d.png">
<link rel="apple-touch-icon" sizes="152x152" href="//src.focus.cn/static_files/wap/mobile/recreate/old/images/focus152_33e8a02e7fbc4f6431e63cb02e1cfa30.png">
<link rel="stylesheet" type="text/css" href="//t.focus-res.cn/front-end/icon/iconfont.css">

  <title>我的房源</title>
<script type="text/javascript">
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
  <script type='text/javascript'>
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

<link href="https://t1.focus-res.cn/house-on-sale/wap/bundle/bundle.626e8fc84547e938081b508bed75c019.css" rel="stylesheet"><link href="https://t1.focus-res.cn/house-on-sale/wap/my-source/my-source.9e075e1a5d40ed5d8c2c0926ca73bf99.css" rel="stylesheet"></head>

<body
    data-needhiddentime="0"
    data-isselectnum=""
    data-projectid="4354127744">
            <div class="content">

            <div class="uc-source-order" user-phone="17737517656" user-id="9255358696" proj-id="4354127744"
                data-isSecretProj="" data-needSecret="" data-status="2" user-idcard="DEMOCARD9255358696">
                                <div class="items">
                                        <div class="item">
                                                                        <div class='delete-block' data-roomId="122706"></div>                        <div class="header-inner">
                                                            1号楼1单元-1802

                            
                        </div>
                                                <p class="header-line">
                            <span>133.82㎡ </span>
                            <span class="v-line"></span>
                            <span> 3室2厅 </span>
                            <span class="price-title">总价：</span>
                            <span class="price price-cell" data-price="2199268"></span>
                        </p>

                        <p class="header-line">
                            <span>选房时间：</span>
                            <span class="choose-time" data-time="1562049938428"></span>
                        </p>
                                            </div>
                                        <div class="line"></div>
                    <div class="info">
                                                <p class="price">
                            <span class="price-title">合计：</span>
                            <span class="price-total" id="total-price"></span>
                        </p>
                                                <p class="user flex">
                            <span class="user-title">
                                认购人：崔凯航
                            </span>
                            <span class="user-cell">证件号：<span class="phone"></span></span>
                        </p>
                                            </div>
                </div>
                <div class="tips-bottom">有问题请致电售楼处或联系您的专属置业顾问</div>

                                <div class="btn-wrap flex">
                    <div>
                        <a href="/subscribe/4354127744/homepage" class="return-btn-3">返回</a>
                                            </div>
                </div>
                
                
                                
            </div>

        </div>
        <input type="hidden" id="v_ust" value=""></input>
<script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/manifest/manifest.f94a9d37ef3adf711406.js"></script><script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/bundle/bundle.16dc0e501b4619e5587e.js"></script><script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/my-source/my-source.5929b0dc7a9ca07956b9.js"></script></body>
</html>