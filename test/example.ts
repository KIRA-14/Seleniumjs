import * as chai from 'chai';
import Basepage from '../POM/basepage';
import HomePage from '../POM/HomePage';

describe("AbiBus", async function () {
   // const USERNAME = "kiran.raman14";

   // // Accesskey:  Accesskey can be generated from automation dashboard or profile section
   // const KEY = 'uRtJDCYxpQAMa3uOgfiwbVcpXLI1MkQeGUqInuQ7CE5NpOFhBn';

   // // gridUrl: gridUrl can be found at automation dashboard
   // const GRID_HOST = 'hub.lambdatest.com/wd/hub';
   // const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
   // let driver: ThenableWebDriver;
   let bs: Basepage;
   let hp: HomePage;
   beforeEach(
      function () {
         bs = new Basepage();
         bs.startApp('chrome');
         hp = new HomePage();
      }
   )
   afterEach(async function () {
      bs.endApp();
   })

   it('validate container and page title', async () => {
      let title = hp.getHomePageTitle();
      chai.expect("Book Bus Tickets Online at Lowest Fare, Flat ₹500 Cashback On Bus Booking | AbhiBus")
         .eqls(title);
   });
   it('validate container and page title', async () => {
      let title = hp.getHomePageTitle()
      chai.expect("Book Bus Tickets at Lowest Fare, Flat ₹500 Cashback On Bus Booking | AbhiBus")
         .eqls(title);
   });


})


