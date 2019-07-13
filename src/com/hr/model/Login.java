package com.hr.model;

public class Login {

	private int cus_id;
	private String cus_idnum;
	private String cus_password;
	
	public int getcus_id() {
		return cus_id;
	}
	public void setcus_id(int cus_id) {
		this.cus_id= cus_id;
	}
	public String getcus_idnum() {
		return cus_idnum;
	}
	public void setcus_idnum(String cus_idnum) {
		this.cus_idnum = cus_idnum;
	}
	public String getcus_password() {
		return cus_password;
	}
	public void setcus_password(String cus_password) {
		this.cus_password = cus_password;
	}
	
	
	public Login() {
		super();
	}
	public Login(String cus_idnum, String cus_password) {
		super();
		this.cus_idnum = cus_idnum;
		this.cus_password = cus_password;
	}
	@Override
	public String toString() {
		return "login [cus_id=" + cus_id+ ", cus_idnum=" + cus_idnum + ", cus_password=" + cus_password + "]";
	}
	
	
}
