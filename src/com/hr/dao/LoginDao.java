package com.hr.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import com.hr.model.Login;

public class LoginDao {

	public static Login Login(Connection connection,Login login) throws SQLException {
		Login reslogin=null;
		String sqlString="select * from customer where cus_idnum=? and cus_password=?";
		PreparedStatement pstmt = connection.prepareStatement(sqlString);
		pstmt.setString(1, login.getcus_idnum());
		pstmt.setString(2, login.getcus_password());
		System.out.println(sqlString);
		ResultSet rSet=pstmt.executeQuery();
		if (rSet.next()) {
			reslogin=new Login();
			reslogin.setcus_id(rSet.getInt("cus_id"));
			reslogin.setcus_idnum(rSet.getString("cus_idnum"));
			reslogin.setcus_password(rSet.getString("cus_password"));
		}
		return reslogin;
	}
	
	
	
	/* *
	 * 修改customer密码    
	 * 此部分业务逻辑暂不需要
	 * */
	
	
	/*
	 * public int adminUpdate(Connection con, int adminId, String password)throws
	 * Exception { String sql = "update admin set adminPassword=? where adminId=?";
	 * PreparedStatement pstmt = con.prepareStatement(sql); pstmt.setString(1,
	 * password); pstmt.setInt(2, adminId); return pstmt.executeUpdate(); }
	 */
	
}
