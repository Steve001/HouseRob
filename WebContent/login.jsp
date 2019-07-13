<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
 <%@ page import="com.hr.model.Login" %>
<%
	if(request.getAttribute("customer")==null){			//前端获取attribute属性    customer?
		String cus_idnum=null;
		String cus_password=null;
		String userType=null;
		String remember=null;
		
		Cookie[] cookies=request.getCookies();
		for(int i=0;cookies!=null && i<cookies.length;i++){
	if(cookies[i].getName().equals("customer")){					//判断是否登录
		cus_idnum=cookies[i].getValue().split("-")[0];
		cus_password=cookies[i].getValue().split("-")[1];
		remember=cookies[i].getValue().split("-")[2];
	}
		}
		
		if(cus_idnum==null){
	cus_idnum="";
		}
		
		if(cus_password==null){
	cus_password="";
		}
		pageContext.setAttribute("customer", new Login(cus_idnum ,cus_password));		//设置attribute标签为customer
		if("yes".equals(remember)) {
	pageContext.setAttribute("remember", 1);
		}
		
	}
%>


<html lang="zh">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>华龙壹號院.在线选房系统</title>
<link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/bootstrap/js/jQuery.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.js"></script>
<script type="text/javascript">
	function checkForm() {
		var cus_idnum = document.getElementById("cus_idnum").value;
		var cus_password = document.getElementById("cus_password").value;
		var userTypes = document.getElementsByName("userType");
		var userType = null;
		for(var i=0;i<userTypes.length;i++) {
			if(userTypes[i].checked) {
				userType=userTypes[i].value;
				break;
			}
		}
		if (cus_idnum == null || cus_idnum == "") {
			document.getElementById("error").innerHTML = "请输入您的身份证号码";
			return false;
		}
		if (cus_password == null || cus_password == "") {
			document.getElementById("error").innerHTML = "请输入您的密码";
			return false;
		}

		return true;
	}
</script>

<style type="text/css">
	  body {
        padding-top: 200px;
        padding-bottom: 40px;
        background-image: url('images/door.jpg');		
        background-position: top;
		background-repeat: no-repeat;
		background-attachment: fixed;
      }
      
      .radio {
      	padding-top: 10px;
       	padding-bottom:10px;
      }
      
      .form-signin-heading{
      	text-align: center;
      }

      .form-signin {
        max-width: 300px;
        padding: 19px 29px 0px;
        margin: 0 auto 20px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
                box-shadow: 0 1px 2px rgba(0,0,0,.05);
      }
      .form-signin .form-signin-heading,
      .form-signin .checkbox {
        margin-bottom: 10px;
      }
      .form-signin input[type="text"],
      .form-signin input[type="password"] {
        font-size: 16px;
        height: auto;
        margin-bottom: 15px;
        padding: 7px 9px;
      }
</style>

</head>
<body>
<div class="container">
      <form name="myForm" class="form-signin" action="login" method="post" onsubmit="return checkForm()">
        <h2 class="form-signin-heading"><font color="gray">在线选房系统</font></h2>
        <input id="cus_idnum" name="cus_idnum" value="${user.userName }" type="text" class="input-block-level" placeholder="用户名...">
        <input id="cus_password" name="cus_password" value="${user.password }" type="password" class="input-block-level" placeholder="密码..." >

        <label class="checkbox">
          <input id="remember" name="remember" type="checkbox" value="remember-me" ${remember==1?'checked':''}>记住我 &nbsp;&nbsp;&nbsp;&nbsp; <font id="error" color="red">${error }</font>  
        </label>
        <button class="btn btn-large btn-primary" type="submit">登录</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
      </form>
</div>
</body>
</html>