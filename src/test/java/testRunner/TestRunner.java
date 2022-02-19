package testRunner;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import com.qa.sampleproject.base.Base_Class;

import cucumber.api.junit.*;
import io.cucumber.junit.CucumberOptions;

@SuppressWarnings("deprecation")
@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:","html:target/cukes", "json:target/cukes/report.json", "junit:target/cukes/junit.xml"},
		features = {"src/test/java/Features/"},
		glue={"stepDefinition"},
		monochrome = true,
		tags = {"@login"},
		dryRun = false,
		strict = true
		)
public class TestRunner extends Base_Class {

	static {
	   	
    	System.setProperty("extent.reporter.html.start", "true");
    	System.setProperty("extent.reporter.html.config",System.getProperty("user.dir") + "/src/test/resources/extent-config.xml");//file directory
    	System.setProperty("extent.reporter.html.out", "test-output/Selenix-HtmlReport/HtmlReport.html"); 	
    	System.setProperty("extent.reporter.spark.start", "true");
    	System.setProperty("extent.reporter.spark.config",
    	System.getProperty("user.dir") + "/src/test/resources/extent-config.xml");
    	System.setProperty("extent.reporter.spark.out", "test-output/TASC_Output/");
    	System.setProperty("screenshot.dir", "test-output/");
    	System.setProperty("screenshot.rel.path", "../");    	
    		}



	@AfterClass
	public static void closediver() {
		driver.quit();
	}
	
}