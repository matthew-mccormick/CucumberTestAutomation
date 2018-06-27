package Steps;

import Base.BaseUtil;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import pages.LoginPage;

public class ItemSteps extends BaseUtil{

    private BaseUtil base;

    public ItemSteps(BaseUtil base) {this.base = base;}



    @And("^I click the dresses tab$")
    public void iClickTheDressesTab() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        LoginPage page = new LoginPage(base.driver);
    }
}
