<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>


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




<style type="text/css">						/* 尝试定义房源具体信息列表位置 */
	/* div#house_presave_list {
		position:relative;
		left:50px;
	} */			
	div#house_presave_list {
		position:absolute;
		right:0;
		top:30%;
		height:50px;
		width:50px;
		background:red;
	}
</style>



<div class="container-fluid">
		<!-- <div class="data_list_title">
		</div> -->
		<div>
			<!-- <table class="table table-hover table-striped table-bordered" id="house_presave_list"> -->
			<table class="table table-striped table-bordered" id="house_presave_list ">				<!-- 去掉table-hover调取后没有分割线 -->
				<tr>						<!-- 修改后的管理页面字段 -->
					<th>房屋编号</th>				
					<th>单元号</th>
					<th>面积 m²</th>
					<th>价格</th>
					<th>抢房</th>
				</tr>
				<c:forEach  varStatus="i" var="house" items="${houseList }">
					<tr>
						<td style="">${house.house_id }</td>
						<td>${house.house_num }</td>
						<td>${house.house_area }</td>
						<td>单价${house.house_price_single }<br>
						总价${house.house_price_total}</td>
						
						<td><button class="btn btn-mini btn-info" type="button" onclick="javascript:window.location='houseSelect?action=preSave&house_id=${house.house_id }'">抢房</button>&nbsp;
						<!-- 将数据传给houseSelectServlet里面的preSave方法，并提交cus_id过去 -->
							<%-- <button class="btn btn-mini btn-danger" type="button" onclick="userDelete(${customer.cusId})">删除</button></td> --%>
					</tr>
				</c:forEach>
				
				
			</table>
		</div>
		<div align="center"><font color="red">${error }</font></div>
		<%-- <div class="pagination pagination-centered">
			<ul>
				${pageCode }
			</ul>
		</div> --%>
	 <div class="span10">
		<jsp:include page="time_countdown.jsp"></jsp:include>
	</div> 
</div>