import { Builder, By, Key , ThenableWebDriver} from "selenium-webdriver";
import chrome, { ServiceBuilder }  from 'selenium-webdriver/chrome';
import * as chai from 'chai';

describe("Google",async function(){
   const USERNAME = "kiran.raman14";
 
// Accesskey:  Accesskey can be generated from automation dashboard or profile section
const KEY = 'uRtJDCYxpQAMa3uOgfiwbVcpXLI1MkQeGUqInuQ7CE5NpOFhBn';
 
// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = 'hub.lambdatest.com/wd/hub';
const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
   let driver:ThenableWebDriver;
   beforeEach(
      async function(){
         
         const service: ServiceBuilder = new chrome.ServiceBuilder('driver/chromedriver.exe');
         driver = new Builder().forBrowser("chrome").setChromeService(service).build();
         // driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
         await driver.manage().window().maximize();
         await driver.get("https://www.google.com/?gws_rd=ssl");
      }
   )
   afterEach(async function(){
      await driver.quit();
   })

   it("Goole Haome", async function(){
      let title = await driver.getTitle();
      driver.takeScreenshot().then(
         (image: any) => {
            require('fs')
            .writeFile('screenshot/one.png', image, 'base64',
               (err: any)=>{console.log(err)}
            );
         }
     );
      chai.expect("Google").to.eqls(title)
   })
   it("Goole News", async function(){
      await driver.findElement(By.name('q')).sendKeys("News");
      await driver.findElement(By.name('q')).sendKeys(Key.ENTER);
      let title = await driver.getTitle();
      chai.expect("News - Google Search").to.eqls(title);
      let list = await driver.findElements(By.partialLinkText("https://"))
      list.forEach(async(s)=>{ 
         let url = await s.getAttribute("href")
         if(url.includes("news.google")){
            console.log(url)}
            
            await driver
            .executeScript("arguments[0].style.backgroundColor='yellow'",s)
            await driver.wait(
               async ()=>(await s.getCssValue("backgroundColor")==="yellow")
               ,3000)
            await s.click()
            // await driver.navigate().to("https://news.google.co.in/");
         }
      )
      await driver.sleep(10000);
      title = await driver.getTitle();
      chai.expect("News - Google Search").to.eqls(title);
      
   })
   
})
