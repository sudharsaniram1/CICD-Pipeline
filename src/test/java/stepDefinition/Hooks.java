package stepDefinition;



import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.qa.sampleproject.base.Base_Class;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;

public class Hooks extends Base_Class {

	@After 
	public void ScreenShot(Scenario scenario) {
		if (scenario.isFailed()) 
		{
			 byte[] screenshot = ((TakesScreenshot) Base_Class.driver).getScreenshotAs(OutputType.BYTES);

			 scenario.embed(screenshot, "image/png", "Failure Screenshot");
			 
		}
		
		
	}

	 }



