package com.qa.sampleproject.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Base_Class {
public static WebDriver driver;
	
	public static WebDriverWait wait;
	public static Properties prop;
	
	public static String browserName="";
	public static String browserVersion="";
	public static String os="";
	
	
	
	static{
		try {
			prop = new Properties();
			FileInputStream ip = new FileInputStream("C:\\Users\\SudharsaniRa_ht853wy\\Documents\\New Workspace\\sampleproject\\src\\test\\java\\com\\qa\\sampleproject\\config\\config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	static {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\SudharsaniRa_ht853wy\\Documents\\chromedriver_win32\\chromedriver.exe");
	      driver = new ChromeDriver();
	      driver.get(prop.getProperty("url"));
		driver.manage().window().maximize();
		
	}
	
	
	
	public static boolean visibilityWait(WebElement element) 
	{
	
		wait=new WebDriverWait(driver,40 );
		wait.until(ExpectedConditions.visibilityOf(element));
		return true;
	} 
	
	

	
	
	

}


