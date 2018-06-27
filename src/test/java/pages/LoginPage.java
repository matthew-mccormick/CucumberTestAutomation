package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {


    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.ID, using = "email")
    public WebElement txtEmail;

    @FindBy(how = How.ID, using = "passwd")
    public WebElement txtPassword;

    @FindBy(how = How.ID, using = "SubmitLogin")
    public WebElement btnLogin;

    @FindBy(how = How.CSS, using = ".alert.alert-danger")
    public WebElement validLoginError;

    @FindBy(how = How.CSS, using = ".form-group.form-error")
    public WebElement inlineEmailError;


    public void Login(String eMail, String password) {

        txtEmail.sendKeys(eMail);
        txtPassword.sendKeys((password));

    }

    public void clickLogin() {

        btnLogin.click();

    }

    public void validationErrorLogin() {

        validLoginError.isDisplayed();
    }
    public void inlineEmailValidation() {
        inlineEmailError.isDisplayed();
    }



}
