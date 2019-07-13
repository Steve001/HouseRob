package com.hr.test;


import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.hr.model.Customer;
import com.hr.util.DbUtil;
import com.mysql.jdbc.Connection;

public class DbTest {

	public Customer Login(Connection con)throws Exception {
		Customer customer=null;
		String sql = "select * from customer where cus_id=1 ";
		PreparedStatement pstmt = con.prepareStatement(sql);
		ResultSet rs = pstmt.executeQuery();
		if(rs.next()) {
			customer=new Customer();
			customer.setcus_name(rs.getString("cus_name"));
			customer.setcus_phone(rs.getString("cus_phone"));
			customer.setcus_password(rs.getString("cus_password"));
		}
		return customer;
	}
	
	public static void main(String[] args) {
		DbUtil dbUtil = new DbUtil();
		Connection con=null;
		DbTest dt=new DbTest();
		try {
			con=(Connection) dbUtil.getCon();
			Customer customer=dt.Login(con);
			System.out.println(customer);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				dbUtil.closeCon(con);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
