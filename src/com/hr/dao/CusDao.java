package com.hr.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import com.hr.model.Customer;
import com.hr.model.House;

import sun.security.timestamp.TSRequest;;

public class CusDao {

	public Customer Login(Connection connection,Customer customer) throws SQLException {
		Customer resCustomer=null;
		String sqlString="select * from  where customer cus_idnum=? and cus_password=?";	//从数据库调取客户账号密码
		PreparedStatement pstmt = connection.prepareStatement(sqlString);
		pstmt.setString(1, customer.getcus_idnum());		//调取customer model中cus_idnum字段
		pstmt.setString(2, customer.getcus_password());
		ResultSet rSet=pstmt.executeQuery();
		if (rSet.next()) {
			resCustomer=new Customer();							
			resCustomer.setcus_id(rSet.getInt("cus_id"));					//将获取到的cus_id赋值到resCustomer
			resCustomer.setcus_idnum(rSet.getString("cus_idnum"));
			resCustomer.setcus_password(rSet.getString("cus_password"));
		}
		return resCustomer;
	}
	
	
	
	/* 展示客户的所有信息 */
	public static Customer cusShow(Connection con, String house_id) throws SQLException {
		String sql = "select * from customer where cus_id =?";						//预设的数据库查询语句，需要进行更改
		PreparedStatement pstmt = con.prepareStatement(sql);		
		pstmt.setString(1, house_id);
		ResultSet rs = pstmt.executeQuery();
		
		System.out.println(sql);
		
		Customer customer1 = new Customer();
		while (rs.next()) {
			customer1.setcus_id(rs.getInt("cus_id"));					//设定获取到的字段信息
			customer1.setcus_order(rs.getInt("cus_order"));	
			customer1.setcus_order_date(rs.getString("cus_order_date"));
			customer1.setcus_name(rs.getString("cus_name"));
			customer1.setcus_phone(rs.getString("cus_phone"));
			customer1.setcus_idnum(rs.getString("cus_idnum"));
			customer1.setcus_password(rs.getString("cus_password"));
			customer1.setcus_guwen(rs.getString("cus_guwen"));
			customer1.setcus_area1(rs.getString("cus_area1"));
			customer1.setcus_area2(rs.getString("cus_area2"));
			customer1.setcus_area3(rs.getString("cus_area3"));
			customer1.setcus_final_area(rs.getString("cus_final_area"));
			customer1.setcus_status(rs.getString("cus_status"));
			customer1.setcus_date_dingcun(rs.getString("cus_date_dingcun"));
		} 
		return customer1;
	}
	
	
	
//	获取当前登录客户的状态字段,变向判断是否已经购买过，如果没有被购买则跳转update方法写回数据库
	public static int getStatus(Connection con, Customer customer) throws SQLException {		//函数类型为int
		String sql="select cus_status from customer where cus_id = ?";				//根据前端传过来的house_status来判断当前表中status是否为空
		System.out.println(customer);
		
		PreparedStatement pstmt = con.prepareStatement(sql);
		//pstmt.setString(1, customer.getCusName());
		pstmt.setInt(1, customer.getcus_id());
		//ResultSet executeQuery = pstmt.executeQuery();
		//while (executeQuery.next()) {
		ResultSet rs = pstmt.executeQuery();	
		boolean fla=rs.next();
		System.out.println(fla);
		System.out.println(rs.toString());
		System.out.println(rs.getString("cus_status"));
		

//		if (Integer.parseInt(rs.getString("cus_status")) == 1) {			//判断返回结果是否为1，若1则已出售
		if (Integer.parseInt(rs.getString("cus_status")) == 1) {
			return 1;
			} else {
				return 0;
			}
	}
	
	
	//购买后修改客户状态字段
		public static int cusUpdate(Connection con, String house_id, Customer customer) throws SQLException {		//函数类型为int
//			String sql="update house set house_status='1',cus_id=?,cus_order=?,cus_order_date=?,cus_name=?,cus_phone=?,cus_idnum=?,cus_password=?,cus_guwen=?,cus_area1=?,cus_area2=?,cus_area3=?,cus_final_area=?,cus_status=1,cus_date_dingcun=? where house_id = ?";				//根据house_id改变house_status
			String sql="update customer set cus_status=1, cus_final_area =? where cus_id = ?";				//根据house_id改变house_status
			PreparedStatement pstmt=con.prepareStatement(sql);

			
			//pstmt.setString(1, house.gethouse_status());
			pstmt.setString(1, house_id);
			pstmt.setInt(2, customer.getcus_id());
//			pstmt.setInt(2, customer.getcus_order());
//			pstmt.setString(3, customer.getcus_order_date());
//			pstmt.setString(4, customer.getcus_name());
//			pstmt.setString(5, customer.getcus_phone());
//			pstmt.setString(6, customer.getcus_idnum());
//			pstmt.setString(7, customer.getcus_password());
//			pstmt.setString(8, customer.getcus_guwen());
//			pstmt.setString(9, customer.getcus_final_area());
		//	pstmt.setString(11, customer.getcus_status());
//			pstmt.setString(10, customer.getcus_date_dingcun());
//			pstmt.setInt(11, house.gethouse_id());
			
			
			
			int a =pstmt.executeUpdate();
			System.out.println("调取过cusUpdate之后的客户状态");
			System.out.println(a);
			return a;
		}
		
//	/* *
//	 * 修改admin密码 
//	 * */
//	public int adminUpdate(Connection con, int adminId, String password)throws Exception {
//		String sql = "update admin set adminPassword=? where adminId=?";
//		PreparedStatement pstmt = con.prepareStatement(sql);
//		pstmt.setString(1, password);
//		pstmt.setInt(2, adminId);
//		return pstmt.executeUpdate();
//	}
}
