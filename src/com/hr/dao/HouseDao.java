package com.hr.dao;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.Date;
import com.hr.model.houseFloor;
import com.hr.model.House;
import com.hr.util.StringUtil;
import com.hr.model.Customer;
import com.hr.model.House;
import com.hr.model.HttpModel;
import com.hr.util.DateUtil;
import com.hr.util.DbUtil;

import sun.security.timestamp.TSRequest;



public class HouseDao {

	DateUtil dateUtil = new DateUtil();
	
	/* 房源信息 列表 */
	public List<House> getHouse(Connection connection,  House house) throws SQLException {	//添加house_floor尝试联合查询
		List<House> houses=new ArrayList<House>();
//		String house_floor1 = house.gethouse_floor(); 
//		StringBuffer sb =new StringBuffer( "select * from house where house_floor=?");		//定义数据库查询语句
//		if(StringUtil.isNotEmpty(customer.getCusName())) {
//			sb.append(" and cus_name= '"+customer.getCusName()+"'");
//		}
//		if(pageBean != null) {
//			sb.append(" limit "+pageBean.getStart()+","+pageBean.getPageSize());
//		}
		String sql = "select * from house";
//		String sql = "select * from house where house_floor=?";
		PreparedStatement pstmt = connection.prepareStatement(sql);
		ResultSet rs = pstmt.executeQuery();
//		PreparedStatement pstmt = connection.prepareStatement(sb.toString());
//		ResultSet rs = pstmt.executeQuery();
		while (rs.next()) {   
			House house1= new House();
			house1.sethouse_id(rs.getInt("house_id"));   					//从数据库中查询信息，需要匹配数据库中相关字段
			house1.sethouse_floor(rs.getString("house_floor"));
			house1.sethouse_num(rs.getInt("house_num"));
			house1.sethouse_area(rs.getString("house_area"));
			house1.sethouse_price_single(rs.getString("house_price_single"));
			house1.sethouse_price_total(rs.getString("house_price_total"));
			house1.sethouse_status(rs.getString("house_status"));
			houses.add(house1);
			
			
		}
		return houses;
	}
	
	
	/* 展示所有房源信息 */
	public static House houseShow(Connection con, String house_id) throws SQLException {
		String sql = "select * from house where house_id =?";						//预设的数据库查询语句，需要进行更改
		PreparedStatement pstmt = con.prepareStatement(sql);		
		pstmt.setString(1, house_id);
		ResultSet rs = pstmt.executeQuery();
		
		System.out.println(sql);
		
		House house1= new House();
		while (rs.next()) {
			house1.sethouse_id(rs.getInt("house_id"));					//设定获取到的字段信息
			house1.sethouse_floor(rs.getString("house_floor"));	
			house1.sethouse_num(rs.getInt("house_num"));
			house1.sethouse_area(rs.getString("house_area"));
			house1.sethouse_price_single(rs.getString("house_price_single"));
			house1.sethouse_price_total(rs.getString("house_price_total"));
			house1.sethouse_status(rs.getString("house_status"));
		} 
		return house1;
	}
	
	public int houseUpdate(Connection con, House house) throws SQLException {		//函数类型为int
		String sql="update house set house_id=?  where house_status=?";				//根据house_id改变house_status
		PreparedStatement pstm=con.prepareStatement(sql);
		pstm.setString(1, house.gethouse_status());
		pstm.setInt(2, house.gethouse_id());
		int a =pstm.executeUpdate();
		System.out.println(a);
		return a;
	}
	
	/* 展示1号楼指定楼层房源信息 */
	public static List<House> houseFloorShow1(Connection con, String house_floor) throws SQLException {
		//String sql = "select * from house where house_floor =3F";						//预设的数据库查询语句
		String sql = "select * from house1 where house_floor =? and house_status = '0' ";		//预设的数据库查询语句，展示可抢房源
		PreparedStatement pstmt = con.prepareStatement(sql);
		String floor=house_floor.replace("'", "");
		pstmt.setString(1, floor);
		System.out.println(sql+floor);
		List<House> houses=new ArrayList<House>();
		ResultSet rs = pstmt.executeQuery();
		while (rs.next()) {
			House house1= new House();
			house1.sethouse_id(rs.getInt("house_id"));					//设定获取到的字段信息
			house1.sethouse_floor(rs.getString("house_floor"));	
			house1.sethouse_num(rs.getInt("house_num"));
			house1.sethouse_area(rs.getString("house_area"));
			house1.sethouse_price_single(rs.getString("house_price_single"));
			house1.sethouse_price_total(rs.getString("house_price_total"));
			house1.sethouse_status(rs.getString("house_status"));
			houses.add(house1);
		} 
		return houses;
	}
	
	/* 展示2号楼指定楼层房源信息 */
	public static List<House> houseFloorShow2(Connection con, String house_floor) throws SQLException {
		//String sql = "select * from house where house_floor =3F";						//预设的数据库查询语句
		String sql = "select * from house2 where house_floor =? and house_status = '0' ";						//预设的数据库查询语句
		PreparedStatement pstmt = con.prepareStatement(sql);
		String floor=house_floor.replace("'", "");
		pstmt.setString(1, floor);
		System.out.println(sql+floor);
		List<House> houses=new ArrayList<House>();
		ResultSet rs = pstmt.executeQuery();
		while (rs.next()) {
			House house1= new House();
			house1.sethouse_id(rs.getInt("house_id"));					//设定获取到的字段信息
			house1.sethouse_floor(rs.getString("house_floor"));	
			house1.sethouse_num(rs.getInt("house_num"));
			house1.sethouse_area(rs.getString("house_area"));
			house1.sethouse_price_single(rs.getString("house_price_single"));
			house1.sethouse_price_total(rs.getString("house_price_total"));
			house1.sethouse_status(rs.getString("house_status"));
			houses.add(house1);
		} 
		return houses;
	}
	
	
	//判断该房源是否已被购买
	public int isSold(Connection connection, House house) throws SQLException {	//根据手机号判断客户是否被推介
		String sql = "select count(*) from customer where cus_phone = ?";
		//String sql = "select count(*) from customer where cus_name = ? and cus_phone = ?";
		PreparedStatement pstmt = connection.prepareStatement(sql);
		//pstmt.setString(1, customer.getCusName());
		pstmt.setString(1, house.gethouse_status());
		ResultSet executeQuery = pstmt.executeQuery();
		while (executeQuery.next()) {
			if (executeQuery.getInt(1) > 0) {
				return 1;
			} else {
				return 0;
			}
		}
		return 0;
	}
	
	
}
