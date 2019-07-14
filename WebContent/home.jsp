<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>



<!doctype html>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />


  <title>抢房系统</title>
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



<!-- <script type="text/javascript" src="images/home_script1.js"></script>				倒计时脚本
<script type="text/javascript" src="images/home_script2.js"></script> 
   -->


<link href="images/home1.css" rel="stylesheet">
<link href="images/home2.css" rel="stylesheet">

<link rel="stylesheet" type="text/css" href="images/home1.css">
<link rel="stylesheet" type="text/css" href="images/home2.css">

</head>

<body data-isselectnum="" data-projectid="4354127744">
            <div class="header">

            <div>
                                <div class='notice'>
                    <i class="focusued focusued-tongzhi"></i>
                    <span class="text">公告：请于2日内前往售楼部办理意向单签定手续，否则资格作废</span>
                    <span class="more">查看全文 ></span>
                </div>
                <div class='notice-detail'>
                    <i class='focusued focusued-guanbi1'></i>
                    <div class='title'>公告</div>
                    <div class='content'>请于2日内前往售楼部办理意向单签定手续，否则资格作废</div>
                </div>
                              <!--   <div class="index-header"									倒计时及房源标签定义
                    data-projectId="4354127744"								
                    data-simulateStartTime="1000"
                    data-simulateEndTime="1000"
                    data-officialStartTime="1515050720000"
                    data-officialEndTime="1577863520000"
                    data-nowTime="1562331071330"
                    data-timesOfSimulate = "0"
                    data-isSelectNum=""
                > -->
                    <div class="swiper-container img-slider">
                         <ul class="swiper-wrapper">

                                                          <li class="swiper-slide img-wrap">

                                 <img src="images/home_background.png">
                             </li>
                                                    </ul>
                        <!-- <span class="swiper-pagination"></span> -->
                    </div>

                    
                        <div class="countdown">
                            <span class="countdown-label"></span> <!-- -天 -时--><!--结束倒计时--><!--正式选房倒计时--><!--结束倒计时--> <!--结束  覆层去掉-->
                            <div class="countdown-time">

                            </div>
                        </div>
                                    </div>
            </div>

        </div>
    
    <div class="content">

        <div class="index-select-tab" data-hasGrab="">

            <div class="head">
                <p class="project">华龙壹號院</p>

                <p class="can-select">房源总数：<i>150</i>套</p>
            </div>

            <div class="flex">
                <div class="cell select">
                    <div class="inner" >
                        <p class="type">模拟选房</p>
                                                <p class="no-simulate-tip">本次选房活动不设模拟环节</p>
                                            </div>

                </div>
                <div class="split"></div>
                <div class="cell select">
                    <div class="inner">
                        <p class="type">正式选房</p>
                        <p class="start-time">开始时间: 2019.7.20<i data-officialStartTime="1515050720000"></i></p>
                        <p class="end-time">结束时间:2019.7.21 <i data-officialEndTime="1577863520000"></i></p>
                    </div>
                </div>
            </div>

        </div>

        <div class="index-kaipan-huixng" data-photo-domain="//t.focus-img.cn" data-preview-style="/sh750x750esh" data-photo-dft="//t-img.51f.com/sh750x750esh/kp/hx/0bec-9044-474f-e06f-daeb-489f-1c10-c460.jpg">

            <h3 class="title">可选户型</h3>
            <div class="huixng-list">
                <div class="swiper-wrapper">

                    
                    <div class="huxing-item swiper-slide" data-photos="[/kp/hx/1168-fe80-0539-0e69-bb43-e696-5252-3781.jpg]">
                                                <span class="label">100套</span>
                                                <img src="images/huxing.png" alt="" class="cover">
                        <p class="type">峰景C</p>
                        <p class="type">3室2厅</p>
                                                <p class="desc">134平米</p>
                                            </div>

                    
                    <div class="huxing-item swiper-slide" data-photos="[/kp/hx/be63-c833-0ddc-8975-3690-9583-9b70-26a4.jpg]">
                                                <span class="label">20套</span>
                                                <img src="//t.focus-img.cn/sh240x180sh/kp/hx/be63-c833-0ddc-8975-3690-9583-9b70-26a4.jpg" alt="" class="cover">
                        <p class="type">峰景D</p>
                        <p class="type">2室1厅</p>
                                                <p class="desc">89平米</p>
                                            </div>

                    
                </div>
            </div>

            <div class="preview-wrap">
                <div class="preview-ctn">

                    <div class="swiper-wrapper">

                    </div>

                    <div class="swiper-pagination"></div>

                </div>

            </div>

        </div>

    </div>

    <!-- <div class="common-bottom" data-projectId="4354127744" data-userId="4988366261">	dataid不知道干毛用。。 -->	
    <div class="common-bottom" >
        <div class="jianbian"></div>

        <div class="toolbar flex">
			<a class="cell index  active " href="home.jsp">
                <span class="item">
                    <i></i><span>首页</span>
                </span>
            </a>
            
            
            <a class="cell mine  " href="my.jsp">
                <span class="item">
                    <i></i><span>我的</span>
                </span0>
            </a>
		</div>

        <!-- <div class="select-wrap">选房</div>    --> 
		
		<!-- <div class="select-wrap" value="select" onclick="next()"> -->
		
		<div class="select-wrap" onclick="next()" >
			
			<script type="text/javascript">
				function next(){
					window.location = "homeSelectButton.jsp";
				}
				
			</script> 
			选房
			<%-- <jsp:forward page="houseSelect.jsp"/> jsp自带的跳转测试--%>		
			
		
	</div>

<!-- <script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/manifest/manifest.f090ed8f3a8606f2efcd.js"></script>
<script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/bundle/bundle.edccb9c2a01dab94a872.js"></script>
<script type="text/javascript" src="https://t1.focus-res.cn/house-on-sale/wap/index/index.e53cc3342cab2ba9f67f.js"></script>  -->

</body>
</html>