package com.hr.model;

public class House {

	private int house_id;
	private String house_floor;
	private int house_num;
	private String house_area;
	private String house_price_single;
	private String house_price_total;
	private String house_status;
	
	
	
	public int gethouse_id() {
		return house_id;
	}
	
	public void sethouse_id(int house_id) {
		this.house_id = house_id;
	}
	
	public String gethouse_floor() {
		return house_floor;
	}
	
	public void sethouse_floor(String house_floor) {
		this.house_floor = house_floor;
	}
	
	public int gethouse_num() {
		return house_num;
	}
	
	public void sethouse_num(int house_num) {
		this.house_num = house_num;
	}
	
	public String gethouse_area() {
		return house_area;
	}
	
	public void sethouse_area(String house_area) {
		this.house_area = house_area;
	}
	
	public String gethouse_price_single() {
		return house_price_single;
	}
	
	public void sethouse_price_single(String house_price_single) {
		this.house_price_single = house_price_single;
	}
	
	public String gethouse_price_total() {
		return house_price_total;
	}
	
	public void sethouse_price_total(String house_price_total) {
		this.house_price_total = house_price_total;
	}
	
	public String gethouse_status() {
		return house_status;
	}
	
	public void sethouse_status(String house_status) {
		this.house_status = house_status;
	}
	
	@Override
	public String toString() {
		return "House [house_id=" + house_id +", house_floor=" + house_floor +", house_num=" + house_num + ", house_area=" + house_area + ", house_price_single=" + house_price_single + ", house_price_total=" + house_price_total + ", house_status=" + house_status + ", ]";
	}
	
	
	
}
