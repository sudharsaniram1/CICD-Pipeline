package stepDefinition;

import static org.junit.Assert.assertEquals;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;

import com.qa.sampleproject.base.Base_Class;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class careerspage extends Base_Class 
{
	JavascriptExecutor js = (JavascriptExecutor) driver;	
@When("user clicks careers page")
public void user_clicks_careers_page() {
   driver.findElement(By.linkText("Careers")).click();   
    //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[text()='Accept']")));
   // driver.findElement(By.xpath("//button[text()='Accept']")).click();
	    // js.executeScript("arguments[0].scrollIntoView(true);",driver.findElement(By.xpath("(//h5[text()='Open Positions'])[2]")));
   	js.executeScript("window.scrollBy(0,500)", "");
   }

@Then("the user validates the careers page")
public void the_user_validates_the_careers_page() {
		System.out.println(driver.getTitle());
	assertEquals("Careers | Ignitho Inc.", driver.getTitle());
		}

@Then("user clicks open positions")
public void user_clicks_open_positions() {
   	driver.findElement(By.xpath("(//h5[text()='Open Positions'])[2]")).click();
 		}

@Then("user select the location as {string}")
public void user_select_the_location_as(String Location) throws InterruptedException {
	driver.findElement(By.className("location-drop-down")).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath("//li[@data-select_prob='8']")).click();
	
	//driver.findElement(By.xpath("(//ul[@id='list_location']//li)[2]")).click();
	//driver.findElement(By.xpath("//li[text()='India']")).click();
	//driver.findElement(By.xpath("//li[text()='"+Location+"']")).click();
	//driver.findElement(By.xpath("(//*[contains(text(),'"+Location+"')])[3]")).click();
		// js.executeScript("arguments[0].scrollIntoView(true);",driver.findElement(By.xpath("(//span[text()='Read More'])[1]")));
	js.executeScript("window.scrollBy(0,500)", "");
	}

@Then("user clicks on apply button")
public void user_clicks_on_apply_button() {

	driver.findElement(By.xpath("(//span[text()='Read More'])[1]")).click();
	js.executeScript("window.scrollBy(0,1500)", "");
		driver.findElement(By.xpath("//button[@class='ig_career_signup']")).click();
		}   

@Then("user enter the details as  {string},{string},{string} and {string}")
public void user_enter_the_details_as(String FullName, String PhoneNo, String YrExp , String Email) {
	driver.findElement(By.xpath("(//input[@name='first_name'])[2]")).sendKeys(FullName);
	driver.findElement(By.xpath("(//input[@name='phone_no'])[2]")).sendKeys(PhoneNo);
	driver.findElement(By.xpath("(//input[@name='experience'])[2]")).sendKeys(YrExp);
	driver.findElement(By.xpath("(//input[@name='email_id'])[2]")).sendKeys(Email);
	driver.findElement(By.xpath("(//*[@class='ig_career_form_close'])")).click();
}

}






