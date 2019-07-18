<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<html lang="zh">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- <title>后台管理系统</title> -->
<%-- <link href="${pageContext.request.contextPath}/style/dorm.css" rel="stylesheet"> --%>
<%-- <link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/bootstrap-datetimepicker-master/css/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen"> --%>
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
  		padding: 0;
		margin: 0;
		text-align: center;
		position: fixed;
		bottom: 0;
		/* border-top: 20px solid #ccc; */
		width: 100%;
		background-color: #FF8C00; 
	}
	/* div#home1 {
  		position:absolute; 
  		text-align=center;
  		top:50%; 
  		left:50%; 
  		margin:-100px 0 0 -150px; 
  		width:300px; 
  		height:300px; 
  		z-index:99; 
	} */
	div#home2 {
  		position:absolute; 
  		text-align=center;
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
    <a href="houseSelect_home1.jsp" class="btn btn-info btn-lg" id="home1" style="font-size:80px; text-align:center; background-color: #87CEFA; width:350px; height:120px; position: absolute; left:50%; top:50%; margin-top:-150px; margin-left:-175px ">
          <span class="glyphicon glyphicon-chevron-right"></span> 1号楼
	</a>
	</p>
    
    
    <p>
    <a href="houseSelect_home2.jsp" class="btn btn-info btn-lg" id ="home2" style="font-size:80px; text-align:center; background-color: #87CEFA; width:350px; height:120px; position: absolute; left:50%; top:65%; margin-top:-150px; margin-left:-175px ">
          <span class="glyphicon glyphicon-chevron-right"></span> 2号楼
	</a>
	</p>
	
    
	<!-- <div id="timer"></div>
	<div id="warring"></div> -->

	<div class="span10">				<!-- 引用倒计时time_countdown.jsp页面 -->
		<jsp:include page="${mainPage==null?'time_countdown.jsp':mainPage}"></jsp:include>
	</div>


</body>

</html>


<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>