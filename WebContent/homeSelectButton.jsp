<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<html lang="zh">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- <title>后台管理系统</title> -->
<link href="${pageContext.request.contextPath}/style/dorm.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">
<link rel="stylesheet" type="text/css" href="http://sandbox.runjs.cn/uploads/rs/238/n8vhm36h/dataTables.bootstra.css">
<script type="text/javascript" src="http://sandbox.runjs.cn/uploads/rs/238/n8vhm36h/jquery.js"></script>
<script type="text/javascript" src="http://sandbox.runjs.cn/uploads/rs/238/n8vhm36h/jquery.dataTables.js"></script>
<script type="text/javascript" src="http://sandbox.runjs.cn/uploads/rs/238/n8vhm36h/bootstrap.min.js"></script>
<script type="text/javascript" src="http://sandbox.runjs.cn/uploads/rs/238/n8vhm36h/dataTables.bootstrap.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.fr.js" charset="UTF-8"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.js"></script>

<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
</head>

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

<style>
	div#home1 {
  		position:absolute; 
  		top:50%; 
  		left:50%; 
  		margin:-100px 0 0 -150px; 
  		width:300px; 
  		height:300px; 
  		z-index:99; 
	}
	div#home2 {
  		position:absolute; 
  		top:50%; 
  		left:50%; 
  		margin:-100px 0 0 -150px; 
  		width:300px; 
  		height:10px; 
  		z-index:99;  
	}
</style>



<body>
    
    <p>
    <a href="houseSelect_home1.jsp" class="btn btn-info btn-lg" id="home1" style="font-size:100px ">
          <span class="glyphicon glyphicon-chevron-right"></span> 1号楼
	</a>
	</p>
    
    
    <p>
    <a href="houseSelect_home2.jsp" class="btn btn-info btn-lg" id ="home2" style="font-size:100px">
          <span class="glyphicon glyphicon-chevron-right"></span> 2号楼
	</a>
	</p>
	
    
<!--     <label class="btn btn-primary">
        <input type="checkbox"> 选项 2
    </label> -->
    
	<div id="timer"></div>
	<div id="warring"></div>
	

<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

</body>

<script type="text/javascript">
	var maxtime = 2 * 60; 		//设置倒计时总时间
		function CountDown(){
			if (maxtime >= 0){
				minutes = Math.floor(maxtime / 60);
				seconds = Math.floor(maxtime % 60);
				msg = "距离本组选房结束还有" + minutes + "分" + seconds + "秒" ;
				document.all["timer"].innerHTML = msg;
				if (maxtime == 1 * 60 )alert("仅剩一分钟");
				--maxtime;
			}else{
				clearInterval(timer);
				alert("时间到，结束");
			}
	}
	timer = setInterval("CountDown()", 1000);
</script>
</html>


