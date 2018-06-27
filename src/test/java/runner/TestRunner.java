package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.junit.runner.RunWith;


//@RunWith(Cucumber.class) //For JUnit runs
@CucumberOptions(features =  {"src/test/java/features"}, format = {"json:target/cucumber.json", "html:target/site/cucumber-styled"}, glue = {"Steps"})
public class TestRunner extends AbstractTestNGCucumberTests { //extension for TestNG running


}
