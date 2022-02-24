package stepDefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;

import com.qa.sampleproject.base.Base_Class;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class IgnithoPage extends Base_Class {
	
	@Given("user launches the ignitho URL")
	public void user_launches_the_ignitho_URL() {
		
	}

	@Then("the user validates the home page")
	public void the_user_validates_the_home_page() {
		assertEquals("Data led, Cloud enabled, Digital Engineering Solutions | Ignitho Inc.",driver.getTitle());
	}

	@When("user clicks inquiry button")
	public void user_clicks_inquiry_button() {
		driver.findElement(By.className("header-cta")).click();
		
	}

	@Then("the user validates the inquiry page")
	public void the_user_validates_the_inquiry_page() {
		assertEquals("Contact us | Ignitho Inc.",driver.getTitle());
	}
	
	@Then("user enter {string},{string},{string} and {string}")
	public void user_enter_and(String req, String name, String company, String email) throws InterruptedException {
	   driver.findElement(By.id("txt-requirement")).sendKeys(req);
	   driver.findElement(By.id("txt-name")).sendKeys(name);
	   driver.findElement(By.id("txt-company")).sendKeys(company);
	   driver.findElement(By.id("txt-mail_id")).sendKeys(email);
	   Thread.sleep(3000);
	}
	
	
}
