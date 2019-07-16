package com.hr.web;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.hr.dao.CusDao;
import com.hr.dao.LoginDao;		//对应loginDao		
import com.hr.model.Customer;
import com.hr.model.Login;
import com.hr.util.DbUtil;
import com.hr.util.StringUtil;


public class customerLoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	DbUtil dbUtil = new DbUtil();
	LoginDao loginDao = new LoginDao();
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		String cus_idnum = request.getParameter("cus_idnum");				//获取cus_idnum进行匹配验证
		String cus_password = request.getParameter("cus_password");
		String remember = request.getParameter("remember");
		Connection connection = null;
		
		try {
			connection=dbUtil.getCon();
			Login currentLogin = null;
			Login login = new Login(cus_idnum, cus_password);
			currentLogin=loginDao.Login(connection, login);
			if(currentLogin== null) {
				request.setAttribute("login", login);
				request.setAttribute("error", "用户名或密码错误！");
				request.getRequestDispatcher("login.jsp").forward(request, response);		//跳转到login.jsp
			}else {
				if("remember-me".equals(remember)) {
					rememberMe(cus_idnum, cus_password,response);
				} else {
					//deleteCookie(cus_idnum, request, response);		//删除cookie登录信息
				}
				session.setAttribute("currentLogin", currentLogin);
				request.setAttribute("mainPage", "home.jsp");			//设置主页？？
				request.getRequestDispatcher("home.jsp").forward(request, response);	//跳转主页面？？
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				dbUtil.closeCon(connection);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	private void rememberMe(String cus_idnum, String cus_password, HttpServletResponse response) {			//记录当前cookie
		Cookie user = new Cookie("Userlogin", cus_idnum+"-"+cus_password+"-"+"yes");		//本来是dormuser，命名为Userlogin
		user.setMaxAge(1*60*60*24*7);						//数字啥意思
		response.addCookie(user);
	}
	
	private void deleteCookie(String cus_idnum, HttpServletRequest request, HttpServletResponse response) {		//删除登录cookie
		Cookie[] cookies=request.getCookies();
		for(int i=0;cookies!=null && i<cookies.length;i++){
			if(cookies[i].getName().equals("Userlogin")){						//本来是dormuser,命名为Userlogin
				if(cus_idnum.equals(cus_idnum=cookies[i].getValue().split("-")[0])) {
					Cookie cookie = new Cookie(cookies[i].getName(), null);
					cookie.setMaxAge(0);
					response.addCookie(cookie);
					break;
				}
			}
		}
	}
	


}
