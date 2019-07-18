package com.hr.web;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.hr.dao.HouseDao;
import com.hr.dao.LoginDao;
import com.hr.model.House;
import com.hr.model.Login;
import com.hr.model.houseFloor;
import com.hr.model.houseFloor;
import com.hr.dao.CusDao;
import com.hr.model.Customer;
import com.hr.util.StringUtil;	
import com.hr.util.DbUtil;


public class houseSelectServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       

	DbUtil dbUtil = new DbUtil();
	HouseDao houseDao = new HouseDao();
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}

	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException{
		request.setCharacterEncoding("utf-8");
		HttpSession session = request.getSession();
		String s_houseManageText = request.getParameter("s_houseManageText");	//获取houseManageText链接
		String action = request.getParameter("action");		//获取前端action字段
		String house_floor = request.getParameter("house_floor");	//从前端jsp传过来的字段在此定义
		String cus_id = request.getParameter("cus_id");
		String house_id = request.getParameter("house_id");
		String house_lounum = request.getParameter("house_lounum");
		House house = new House();
//		houseFloor house_floor = new houseFloor(house_floor);
		
		
		if("preSave".equals(action)) {
			housePreSave(request, response);
			return;
		}
//		else if("update".equals(action)){
//			houseSave(request, response);
//			return;
//		} 
		else if("floorList".equals(action)) {
			
			houseFloorList(request, response,house_floor, house_lounum);
			return;
		} 
//		else if("floorList2".equals(action)) {
//			
//			houseFloorList2(request, response,house_floor);
//			return;
//		} 
		else if("Save".equals(action)) {
			
			try {
				houseSave(request, response,house_id);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return;
		} 
////			session.removeAttribute("s_houseManagerText");
////			session.removeAttribute("searchType");		//应为搜索功能，暂保留
////			request.setAttribute("s_houseManagerText", s_houseManageText);
////			request.setAttribute("searchType", searchType);
//		} 
		
//		Connection con=null;
//		try {
//			con=dbUtil.getCon();
//			List<House> houseList = houseDao.getHouse(con,   house);
//			request.setAttribute("houseList", houseList);
//			
//			request.setAttribute("mainPage", "houseManager.jsp");	//设置主页，暂设为blank.jsp
//			request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, (ServletResponse) response);
//			
//		}catch(Exception e) {
//			e.printStackTrace();
//		}finally {
//			try {dbUtil.closeCon(con);
//			}catch (Exception e) {
//				e.printStackTrace();
//				}
//		}
	}
	
	 
	//预先获取房源具体信息-----确定选房信息页面信息显示
	 private synchronized void housePreSave(HttpServletRequest request,			//添加synchronized设置为悲观锁
			 HttpServletResponse response)throws ServletException, IOException {
		String house_id = request.getParameter("house_id");
		if(StringUtil.isNotEmpty(house_id)) {
			Connection con = null;
			
//			House house1 = new House();									//获取request中的house字段信息，可考虑是否获取到customer字段信息
//			//String house_id = request.getParameter("house_id");
//			String house_floor = request.getParameter("house_floor");
//			String house_num = request.getParameter("house_num");
//			String house_area = request.getParameter("house_area");
//			String house_price_single = request.getParameter("house_price_single");
//			String house_price_total = request.getParameter("house_price_total");
//			String house_status = request.getParameter("house_status");
//			
//			
//			
//			house1.sethouse_id(Integer.parseInt(house_id));
//			house1.sethouse_floor(house_floor);
//			house1.sethouse_num(Integer.parseInt(house_num));
//			house1.sethouse_area(house_area);
//			house1.sethouse_price_single(house_price_single);
//			house1.sethouse_price_total(house_price_total);
//			house1.sethouse_status(house_status); 				//是否需要根据house_status字段设置int或者string 
			
			
			
			
			try {
				con = dbUtil.getCon();
				//int isSold = HouseDao.isSold(con, house);
				
				
				
				/*
				 * DormManager dormManager = dormManagerDao.dormManagerShow(con, dormManagerId);
				 */
				House house=HouseDao.houseShow(con, house_id);
				request.setAttribute("house", house);
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					dbUtil.closeCon(con);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		} 
		request.setAttribute("mainPage", "houseConfirm.jsp");
		request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, response);
	}
	
	 
	 
	 //改变具体房屋状态字段
	 private void houseSave(HttpServletRequest request,
			 	HttpServletResponse response, String house_id)throws Exception {
				
			//String house_id = request.getParameter("house_id");
			
		
		 
		 	String house_floor = request.getParameter("house_floor");
		 	String house_status = request.getParameter("house_status");	//设置房源状态字段
			String house_num = request.getParameter("house_num");
			String house_area = request.getParameter("house_area");
			String house_price_single = request.getParameter("house_price_single");
			String house_price_total = request.getParameter("house_price_total");
		 	
			
			String cus_order = request.getParameter("cus_order");
			String cus_order_date = request.getParameter("cus_order_date");
			String cus_name = request.getParameter("cus_name");
			String cus_phone = request.getParameter("cus_phone");
			String cus_idnum = request.getParameter("cus_idnum");
			String cus_password = request.getParameter("cus_password");
			String cus_guwen = request.getParameter("cus_guwen");
			String cus_final_area = request.getParameter("cus_final_area");
			String cus_status = request.getParameter("cus_status");
			String cus_date_dingcun =request.getParameter("cus_date_dingcun");
			String cus_area1 = request.getParameter("cus_area1");
			String cus_area2 = request.getParameter("cus_area2");
			String cus_area3 = request.getParameter("cus_area3");
			
			
		 	System.out.println(request.getParameter("house_status"));
		 	System.out.println(request.getParameter("house_num"));
		 	System.out.println(request.getParameter("house_id"));
		 	System.out.println(request.getParameter("house_price_single"));
		 	
			String cus_id = request.getParameter("cus_id");			
			System.out.println("******cus_id*******");
			System.out.println(cus_id);
			
			
			
			Connection con = null;				//定义数据库链接
			con = dbUtil.getCon();				//建立数据库链接
			
			
			
			House house1=new House();
			house1.sethouse_id(Integer.parseInt(house_id));
			house1.sethouse_floor(house_floor);
			house1.sethouse_status(house_status);
			house1.sethouse_area(house_area);
			house1.sethouse_num(Integer.parseInt(house_num));
			house1.sethouse_price_single(house_price_single);
			house1.sethouse_price_total(house_price_total);
			
			//house1.sethouse_status(house_status);
			//house1.setcus_id(Integer.parseInt(cus_id));
			System.out.println(request.getParameter("house_id"));
			//是应将所有字段放到house1还是再写一个customer拼接返回
			
			//根据从前端获取到的cus_id获取所有的cus字段信息
			Customer customer1 = new Customer();
			customer1 = CusDao.cusShow(con, cus_id);
			customer1.setcus_id(Integer.parseInt(cus_id));
			
			
//			customer1.setcus_order(cus_order);
			
//			customer1.setcus_order(Integer.parseInt(cus_order));
//			System.out.println(cus_order);
//			customer1.setcus_order_date(cus_order_date);
//			customer1.setcus_name(cus_name);
//			customer1.setcus_phone(cus_phone);
//			customer1.setcus_idnum(cus_idnum);
//			customer1.setcus_password(cus_password);
//			customer1.setcus_guwen(cus_guwen);
//			customer1.setcus_final_area(cus_final_area);
//			customer1.setcus_status("1");					逻辑错误，不应在此处直接设置为1
//			customer1.setcus_date_dingcun(cus_date_dingcun);
//			customer1.setcus_area1(cus_area1);
//			customer1.setcus_area2(cus_area2);
//			customer1.setcus_area3(cus_area3);
//			System.out.println(customer1);
			
			
			
			int status = HouseDao.getStatus(con, house1);
			int cusStatus = CusDao.getStatus(con, customer1);
			
			if(cusStatus == 1) {						//根据cus_status判断该客户是否已经选过房
				System.out.println("不好意思您已经选过房");					//定义选过房的客户点击选房按钮之后的页面跳转
				request.setAttribute("mainPage", "house_result_fail.jsp");
				request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, response);
			} else {
				try {
				
				System.out.println(house1);
				System.out.println(status);

				
				
				if(status == 1) {
					//在总表中获取status字段，改房源已被抢购
//					request.getRequestDispatcher("cusList?action=list").forward(request, response);
					System.out.println("-------------------------");
					
					request.setAttribute("mainPage", "house_result_fail.jsp");
					request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, response);
				} else {
					//该房源未被抢购
					System.out.println("+++++++++++++++++++++++++");
					
					HouseDao.houseUpdate(con, house1, customer1);
					CusDao.cusUpdate(con, house_id, customer1);
//					String house_id = house1.gethouse_id();
//					House house=HouseDao.houseShow(con, house_id);
//					System.out.println(house);
					//System.out.println(currentLogin.cus_id);
					//HouseDao.houseUpdate(con, house1, currentCustomer);
//					request.setAttribute("house1", house1);
//					request.getRequestDispatcher("house_result.jsp").forward(request, response);					
//					request.setAttribute("error", "保存失败");
					
//					request.setAttribute("house1", house);
					System.out.println(house1);
					
					House house=HouseDao.houseShow(con, house_id);
					request.setAttribute("house", house);
					request.setAttribute("mainPage", "house_result_success.jsp");
					request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, response);
				}
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					dbUtil.closeCon(con);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			}
			
			
			
			
		}
	 
	 
	 //获取指定楼层房源信息
	 private void houseFloorList(HttpServletRequest request,
				HttpServletResponse response,String house_floor, String house_lounum) throws ServletException, IOException {
			Connection con = null;
			List<House> houseList=new ArrayList<House>();
			System.out.println(house_floor+"----");
//			String house_lounum = request.getParameter("house_lounum");
			System.out.println(house_lounum+"楼号");
			
			try {
				con = dbUtil.getCon();
				houseList=HouseDao.houseFloorShow(con, house_floor, house_lounum);
				System.out.println(houseList);
//				request.getRequestDispatcher("houseSelect?action=floorList").forward(request, response);
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					dbUtil.closeCon(con);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			
//			request.setAttribute("houseList", houseList);
//			request.setAttribute("mainPage", "houseManager.jsp");
			
//			do {
//				request.setAttribute("houseList", houseList);
//				request.setAttribute("mainPage", "houseManager.jsp");
//				request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, response);
//			}while(house_lounum == "2");
//			
//			do {
//				request.setAttribute("houseList", houseList);
//				request.setAttribute("mainPage", "houseManager.jsp");
//				request.getRequestDispatcher("houseSelect_home2.jsp").forward(request, response);
//			}while(house_lounum == "2");
			
			String a = "'1'";
			String b = "'2'";
			System.out.println(a);
			if(house_lounum.equals(a)) {
				request.setAttribute("houseList", houseList);
				request.setAttribute("mainPage", "houseManager.jsp");
				request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, response);
				
			}else if(house_lounum.equals(b)) {
				request.setAttribute("houseList", houseList);
				request.setAttribute("mainPage", "houseManager.jsp");
				request.getRequestDispatcher("houseSelect_home2.jsp").forward(request, response);
			}
		}
	 
		 
	
}
