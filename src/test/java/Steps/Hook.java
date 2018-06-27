package Steps;

import Base.BaseUtil;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import sun.misc.BASE64Decoder;

import java.util.concurrent.TimeUnit;

public class Hook extends BaseUtil {

    private BaseUtil base;
    public Hook(BaseUtil base) {this.base = base;}

    @Before
    public void initialiseTest(){

        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Matthew.McCormick\\Documents\\Drivers\\chromedriver.exe");
        base.driver = new ChromeDriver();
        base.driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        base.driver.manage().window().maximize();
        base.driver.navigate().to("http://automationpractice.com/index.php");

    }

    @After
    public void TearDownTest(){
        base.driver.close();
    }

}
