package Steps;

import Base.BaseUtil;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.testng.Assert;
import pages.LoginPage;

import java.util.ArrayList;
import java.util.List;

public class LoginSteps extends BaseUtil{

    private BaseUtil base;

    public LoginSteps(BaseUtil base) {this.base = base;}



    // Data Method inputs for test

    public class User {

        public String email;
        public String password;
        public String username;

        public User(String eMail, String userName, String passWord) {
            email = eMail;
            username = userName;
            password = passWord;
        }
    }
    public static class userCred {
        public static String email = "";
        public static String username = "";
    }


    @Given("^I am on the homepage$")
    public void iAmOnTheHomepage() throws Throwable {

        base.driver.findElement(By.id("header_logo")).isDisplayed();
        System.out.println("User is on the homepage. ");
    }

    @And("^I click the sign-in button$")
    public void iClickTheSignInButton() throws Throwable {

        base.driver.findElement(By.className("login")).click();
        System.out.println("user has clicked sign in. ");
    }

    @And("^I enter the following details for login$")
    public void iEnterTheFollowingDetailsForLogin(DataTable table) throws Throwable {



        //Create Array List
        List<User> users = new ArrayList<User>();
        users = table.asList(User.class);

        LoginPage page = new LoginPage(base.driver);

        for (User user: users) {
            page.Login(user.email, user.password);
        }

        /*for (User user : users) {

            base.driver.findElement(By.id("email")).sendKeys(user.email);
            base.driver.findElement(By.id("passwd")).sendKeys(user.password);
            userCred.email = user.email;
            userCred.username = user.username;

        }*/


        System.out.println("User has entered valid details. ");
    }

    @And("^I click the login button$")
    public void iClickTheLoginButton() throws Throwable {

        LoginPage page = new LoginPage(base.driver);
        page.clickLogin();

        //base.driver.findElement(By.id("SubmitLogin")).click();
        System.out.println("User has clicked login. ");
    }

    @Then("^I am directed the homepage for the user$")
    public void iAmDirectedTheHomepageForTheUser() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String accountName = base.driver.findElement(By.className("account")).getText();
        //System.out.println(accountName);
        Assert.assertTrue(accountName.contains(userCred.username));

        System.out.println("User has successfully logged in: " + userCred.username);
    }

    @Then("^A login validation message is displayed$")
    public void aLoginValidationMessageIsDisplayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        LoginPage page = new LoginPage(base.driver);
        page.validationErrorLogin();
    }

    @Then("^An inline error message is displayed$")
    public void anInlineErrorMessageIsDisplayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        LoginPage page = new LoginPage(base.driver);
        page.inlineEmailValidation();
    }
}
