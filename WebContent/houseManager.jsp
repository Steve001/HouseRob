<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>

<!-- <script type="text/javascript">
	function userDelete(cusId) {
		if(confirm("您确定要删除这个客户吗？")) {
			window.location="cusList?action=delete&cusId="+cusId;
		}
	}
	
	$(document).ready(function(){
		$("ul li:eq(1)").addClass("active");
	});
</script> -->

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
		Test
		</div>
		<div>
			<table class="table table-hover table-striped table-bordered">
				<tr>
					<th>房屋编号</th>
					<th>房屋楼层</th>
					<th>房屋号码</th>
					<th>房屋面积</th>
					<th>房屋单价</th>
					<th>房屋总价</th>
					<th>房屋状态</th>
					<th>抢房</th>
				</tr>
				<c:forEach  varStatus="i" var="house" items="${houseList }">
					<tr>
						<td>${house.house_id }</td>
						<td>${house.house_floor }</td>
						<td>${house.house_num }</td>
						<td>${house.house_area }</td>
						<td>${house.house_price_single }</td>
						<td>${house.house_price_total}</td>
						<td>${house.house_status }</td>
						
						<td><button class="btn btn-mini btn-info" type="button" onclick="javascript:window.location='houseSelect?action=preSave&house_id=${house.house_id }'">抢房</button>&nbsp;
						<!-- 将数据传给houseSelectServlet里面的preSave方法，并提交cus_id过去 -->
							<%-- <button class="btn btn-mini btn-danger" type="button" onclick="userDelete(${customer.cusId})">删除</button></td> --%>
					</tr>
				</c:forEach>
				
				
			</table>
		</div>
		<div align="center"><font color="red">${error }</font></div>
		<div class="pagination pagination-centered">
			<ul>
				${pageCode }
			</ul>
		</div>
</div>