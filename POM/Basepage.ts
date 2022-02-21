import { Builder, ThenableWebDriver } from "selenium-webdriver";
import chrome, { ServiceBuilder } from 'selenium-webdriver/chrome';
let driver: ThenableWebDriver;
const service: ServiceBuilder = new chrome.ServiceBuilder('driver/chromedriver.exe');
driver = new Builder().forBrowser("chrome").setChromeService(service).build();
driver.manage().setTimeouts({implicit:10000})

class Basepage{
    driver!: ThenableWebDriver;
    constructor(){
        this.driver= driver;
    }

    async startApp(browser: string){
        if(browser === 'chrome'){
            const service: ServiceBuilder = new chrome.ServiceBuilder('driver/chromedriver.exe');
            driver = new Builder().forBrowser("chrome").setChromeService(service).build();
        // driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
        }
        await driver.manage().window().maximize();
        await driver.get("https://www.abhibus.com/");
    }
    async endApp(){
        await driver.quit();
    }
}

export default Basepage;