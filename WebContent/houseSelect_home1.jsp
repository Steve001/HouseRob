<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ page import="com.hr.model.Customer" %>
<%@ page import="com.hr.model.House" %>
<%-- <%@ page import="com.lero.model.DormManager" %>
<%@ page import="com.lero.model.Student" %> --%>
<html lang="zh">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>在线选房系统-1号楼</title>
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

<script type="text/javascript">
	$(document).ready(function(){
   	 	$("#DataTables_Table_0_wrapper .row-fluid").remove();
	});
</script>



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

<style type="text/css">
	  .bs-docs-sidenav {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.067);
    padding: 0;
    width: 228px;
}

.bs-docs-sidenav > li > a {
    border: 1px solid #e5e5e5;
    display: block;
    padding: 8px 14px;
    margin: 0 0 -1px;
}
.bs-docs-sidenav > li:first-child > a {
    border-radius: 6px 6px 0 0;
}
.bs-docs-sidenav > li:last-child > a {
    border-radius: 0 0 6px 6px;
}
.bs-docs-sidenav > .active > a {
    border: 0 none;
    box-shadow: 1px 0 0 rgba(0, 0, 0, 0.1) inset, -1px 0 0 rgba(0, 0, 0, 0.1) inset;
    padding: 9px 15px;
    position: relative;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
    z-index: 2;
}
.bs-docs-sidenav .icon-chevron-right {
    float: right;
    margin-right: -6px;
    margin-top: 2px;
    opacity: 0.25;
}
.bs-docs-sidenav > li > a:hover {
    background-color: #f5f5f5;
}
.bs-docs-sidenav a:hover .icon-chevron-right {
    opacity: 0.5;
}
.bs-docs-sidenav .active .icon-chevron-right, .bs-docs-sidenav .active a:hover .icon-chevron-right {
    background-image: url("../img/glyphicons-halflings-white.png");
    opacity: 1;
}
</style>

</head>
<body>
<div class="container-fluid" style="padding-right: 0px;padding-left: 0px;">
	<div region="north" style="height: 100px;background-image: url('images/bg.jpg')">
		<div align="left" style="width: 80%;height:100px ;float: left;padding-top: 40px;padding-left: 30px;" ><font color="white" size="6" >在线选房系统---1号楼</font></div>
		<%-- <div style="padding-top: 70px;padding-right: 20px;">当前用户：&nbsp;<font color="red" >${currentUser.userName }</font></div> --%>
	</div>
</div>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span2 bs-docs-sidebar" >
				<ul class="nav nav-list bs-docs-sidenav">
					<!-- <li><a href="blank"><i class="icon-chevron-right"></i>首页</a></li> -->
					<!-- <li><a href="userList?action=list"><i class="icon-chevron-right"></i>1楼</a></li>	 -->			<!-- 左侧列表显示 -->
					<!-- <button class="btn btn-mini btn-info" type="button" onclick="houseFloorList&house_floor='17F'">修改</button> -->
					<li><a href="houseSelect?action=floorList1&house_floor='17F'"><i class="icon-chevron-right"></i>17楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='16F'"><i class="icon-chevron-right"></i>16楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='15F'"><i class="icon-chevron-right"></i>15楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='14F'"><i class="icon-chevron-right"></i>14楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='13F'"><i class="icon-chevron-right"></i>13楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='12F'"><i class="icon-chevron-right"></i>12楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='11F'"><i class="icon-chevron-right"></i>11楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='10F'"><i class="icon-chevron-right"></i>10楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='9F'"><i class="icon-chevron-right"></i>9楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='8F'"><i class="icon-chevron-right"></i>8楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='7F'"><i class="icon-chevron-right"></i>7楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='6F'"><i class="icon-chevron-right"></i>6楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='5F'"><i class="icon-chevron-right"></i>5楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='4F'"><i class="icon-chevron-right"></i>4楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='3F'"><i class="icon-chevron-right"></i>3楼</a></li>
					<li><a href="houseSelect?action=floorList1&house_floor='2F'"><i class="icon-chevron-right"></i>2楼</a></li>
					<li><a href="homeSelectButton.jsp"><i class="icon-chevron-right"></i>重新选择楼号</a></li>
					<!-- <li><a href="login.jsp"><i class="icon-chevron-right"></i>退出系统</a></li> -->
				</ul>
			</div>
					<div class="span10">
						<jsp:include page="${mainPage==null?'blank.jsp':mainPage}"></jsp:include>				<!-- 设置主页mainpage -->
					</div> 
			</div>
		</div>
</body>
</html>