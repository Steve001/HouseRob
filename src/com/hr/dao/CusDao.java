package com.hr.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import com.hr.model.Customer;;

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
