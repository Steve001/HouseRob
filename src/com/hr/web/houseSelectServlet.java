package com.hr.web;

import java.io.IOException;
import java.sql.Connection;
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
import com.hr.model.House;
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
		String house_floor = request.getParameter("house_floor");
		String cus_id = request.getParameter("cus_id");
		House house = new House();
//		houseFloor house_floor = new houseFloor(house_floor);
		
		
		if("preSave".equals(action)) {
			housePreSave(request, response);
			return;
		} else if("update".equals(action)){
			houseSave(request, response);
			return;
		} else if("floorList1".equals(action)) {
			
			houseFloorList1(request, response,house_floor);
			return;
		} else if("floorList2".equals(action)) {
			
			houseFloorList2(request, response,house_floor);
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
	 private void housePreSave(HttpServletRequest request,
			 HttpServletResponse response)throws ServletException, IOException {
		String house_id = request.getParameter("house_id");
		if(StringUtil.isNotEmpty(house_id)) {
			Connection con = null;
			try {
				con = dbUtil.getCon();
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
			 	HttpServletResponse response)throws ServletException, IOException {
				
			String house_id = request.getParameter("house_id");
			String house_status = request.getParameter("house_status");	//设置房源状态字段
			//String cus_id = request.getParameter("cus_id");			//暂设置为Int类型
			String cus_order = request.getParameter("cus_order");
			String cus_order_date = request.getParameter("cus_order");
			String cus_name = request.getParameter("cus_name");
			String cus_phone = request.getParameter("cus_phone");
			String cus_idnum = request.getParameter("cus_idnum");
			String cus_password = request.getParameter("cus_password");
			String cus_guwen = request.getParameter("cus_guwen");
			String cus_final_area = request.getParameter("cus_final_area");
			String cus_status = request.getParameter("cus_status");
			String cus_date_dingcun =request.getParameter("cus_date_dingcun");
			
			
			House house1=new House();
			house1.sethouse_id(Integer.parseInt(house_id));
			house1.sethouse_status(house_status);
			//house1.setcus_id(Integer.parseInt(cus_id));
			
			//是应将所有字段放到house1还是再写一个customer拼接返回
			
			
			if(StringUtil.isNotEmpty(request.getParameter("house_id"))) {

			Connection con = null;
			try {
				con = dbUtil.getCon();
			
				int saveNum = 0;
				System.err.println(request.getParameter("house_id"));
				if(StringUtil.isNotEmpty(request.getParameter("house_id"))){
					saveNum = houseDao.houseUpdate(con, house1);
				} 
				System.out.println(house1);
				System.out.println(saveNum);
				if(saveNum > 0) {
					request.getRequestDispatcher("houseList?action=list").forward(request, response);	//根据cusList获取信息
				} else {
					request.setAttribute("house1", house1);
					request.setAttribute("success", "抢房成功!");
					request.setAttribute("error", "抢房失败，当前房源已被抢购");
					request.setAttribute("mainPage", "blank.jsp");			//设置cusSave为mainPage,应该为抢房成功页面,暂设为blank.jsp
					request.getRequestDispatcher("houseManager.jsp").forward(request, response);		//暂时设置为home.jsp
				}
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				try {
					dbUtil.closeCon(con);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}}
		}
	 
	 
	 //获取1号楼指定楼层房源信息
	 private void houseFloorList1(HttpServletRequest request,
				HttpServletResponse response,String house_floor) throws ServletException, IOException {
			Connection con = null;
			List<House> houseList=new ArrayList<House>();
			System.out.println(house_floor+"----");
			
			try {
				con = dbUtil.getCon();
				houseList=HouseDao.houseFloorShow1(con, house_floor);
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
			
			request.setAttribute("houseList", houseList);
			request.setAttribute("mainPage", "houseManager.jsp");
			request.getRequestDispatcher("houseSelect_home1.jsp").forward(request, response);
		}
	 
	 
	//获取2号楼指定楼层房源信息
		 private void houseFloorList2(HttpServletRequest request,
					HttpServletResponse response,String house_floor) throws ServletException, IOException {
				Connection con = null;
				List<House> houseList=new ArrayList<House>();
				System.out.println(house_floor+"----");
				
				try {
					con = dbUtil.getCon();
					houseList=HouseDao.houseFloorShow2(con, house_floor);
//					request.getRequestDispatcher("houseSelect?action=floorList").forward(request, response);
				} catch (Exception e) {
					e.printStackTrace();
				} finally {
					try {
						dbUtil.closeCon(con);
					} catch (Exception e) {
						e.printStackTrace();
					}
				}
				
				request.setAttribute("houseList", houseList);
				request.setAttribute("mainPage", "houseManager.jsp");
				request.getRequestDispatcher("houseSelect_home2.jsp").forward(request, response);
			}
		 
		 
		 
		 
		 
		 
	
}
