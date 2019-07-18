<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<script type="text/javascript">										//提交确认单字段获取，由于无输入可暂注释掉
	function checkForm(){
		var house_id=document.getElementById("house_id").value;
		var house_floor=document.getElementById("house_floor").value;
		var house_num=document.getElementById("house_num").value;
		var house_area=document.getElementById("house_area").value;
		var house_price_single=document.getElementById("house_price_single").value;
		var house_price_total=document.getElementById("house_price_total").value;
		
		if(cusId==""||cusName==""||cusSex==""||cusPhone==""||cusArea==""||cusUserId==""||cusStat==""){		//字段对应尚未完成
			document.getElementById("error").innerHTML="信息填写不完整！";
			return false;
		} 
		return true;
	}
	
	$(document).ready(function(){
		$("ul li:eq(1)").addClass("active");
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




<div class="data_list">
		<div class="data_list_title">
			提交确认单
		</div>
		<%-- <form action="houseSelect?action=Save&house_id=${house.house_id }" method="post">		<!-- 将数据传给houseSelectServlet里面的preSave方法，并提交cus_id过去 --> --%>
			<div class="data_form" >
				<%-- <input type="hidden" id="cusId" name="cusId" value="${customer.cusId  }"/> --%>
					<table align="center">
						
							<tr>
								<td><font color="red">*</font>房屋编号：</td>
								<td>${house.house_id}</td>
							</tr>
							<tr>
								<td><font color="red">*</font>房屋楼层：</td>
								<td>${house.house_floor}</td>
							</tr>
							<tr>
								<td><font color="red">*</font>房屋号码：</td>
								<td>${house.house_num}</td>
							</tr>
							<tr>
								<td><font color="red">*</font>房屋面积：</td>
								<td>${house.house_area}</td>
							</tr>
							<tr>
								<td><font color="red">*</font>房屋单价：</td>
								<td>${house.house_price_single}</td>
							</tr>
							<tr>
								<td><font color="red">*</font>房屋总价：</td>
								<td>${house.house_price_total}</td>
								
							</tr>
							
						
						
						
					</table>
					
					
					
					<div align="center">
						<!-- <input type="submit" class="btn btn-primary" value="抢房！！！"/> -->
						<button class="btn btn-mini btn-info" type="button" id="confirm" onclick="javascript:window.location='houseSelect?action=Save&house_id=${house.house_id }&house_floor=${house.house_floor}&house_num=${house.house_num}&house_area=${house.house_area }&house_price_single=${house.house_price_single }&house_price_total=${house.house_price_total }&house_status=${house.house_status }&cus_id=${sessionScope.currentLogin.cus_id}'">抢房</button>
						
						<!-- &nbsp;<button class="btn btn-primary" type="button" onclick="javascript:history.back()">返回</button> -->	<!-- 返回按钮 -->
					</div>
					
					
					<div align="center">
						<font id="error" color="red">${error }</font>
					</div>
			</div>
		<!-- </form> -->
		
</div>

<div class="span10">
		<jsp:include page="${mainPage==null?'time_countdown.jsp':mainPage}"></jsp:include>
	</div>