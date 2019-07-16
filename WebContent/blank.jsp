<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<script type="text/javascript">
	$(document).ready(function(){
		$("ul li:eq(0)").addClass("active");
	});
</script>

<div>
	<div class=blank style="padding-top: 100px;padding-left: 100px;">
		<font color="gray" size="20">欢迎您！</font>
	</div>
	<body>
		选房步骤：请先选择楼号，随后选择房屋楼层，点击选中楼层之后在具体的房屋信息列表中选择您想选择的具体房间，点击”选房“即可。
	</body>
</div>