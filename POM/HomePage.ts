import { Builder, By, Key, ThenableWebDriver, until, WebElement, WebElementCondition, WebElementPromise } from "selenium-webdriver";
import Basepage from "./Basepage";
let dr:ThenableWebDriver;

class HomePage extends Basepage {
    dr = this.driver
    async getHomePageTitle() { return await dr.getTitle(); }
    async getSelectedOption() {
        let selectedOption:String = '';
        var options: WebElement[] = await dr.findElements(By.xpath("//ul[@id='pills-tab']/li/a"));
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

function getHomePageTitle() {
    throw new Error("Function not implemented.");
}
