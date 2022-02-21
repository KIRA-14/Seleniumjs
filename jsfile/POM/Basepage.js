"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome_1 = __importDefault(require("selenium-webdriver/chrome"));
let driver;
class Basepage {
    constructor() {
        this.driver = driver;
    }
    startApp(browser) {
        return __awaiter(this, void 0, void 0, function* () {
            if (browser === 'chrome') {
                const service = new chrome_1.default.ServiceBuilder('driver/chromedriver.exe');
                driver = new selenium_webdriver_1.Builder().forBrowser("chrome").setChromeService(service).build();
                // driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
            }
            yield driver.manage().setTimeouts({ implicit: 10000 });
            yield driver.manage().window().maximize();
            yield driver.get("https://www.abhibus.com/");
        });
    }
    endApp() {
        return __awaiter(this, void 0, void 0, function* () {
            yield driver.quit();
        });
    }
}
exports.default = Basepage;
