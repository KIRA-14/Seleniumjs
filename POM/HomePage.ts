import { Builder, By, Key, ThenableWebDriver, until, WebElement, WebElementCondition, WebElementPromise } from "selenium-webdriver";
import Basepage from "./basepage";

class HomePage extends Basepage {

    async getHomePageTitle() { return await super.driver.getTitle(); }
    async getSelectedOption() {
        let selectedOption:String = '';
        var options: WebElement[] = await super.driver.findElements(By.xpath("//ul[@id='pills-tab']/li/a"));
        options.forEach(
            async (elm) => {
                if(await elm.getAttribute('aria-selected') === 'true'){
                    selectedOption= await elm.getText()
                }
            }
        )
        return selectedOption;
    }

}

export default HomePage;