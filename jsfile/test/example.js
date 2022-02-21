"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const chai = __importStar(require("chai"));
describe("AbiBus", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const USERNAME = "kiran.raman14";
        // Accesskey:  Accesskey can be generated from automation dashboard or profile section
        const KEY = 'uRtJDCYxpQAMa3uOgfiwbVcpXLI1MkQeGUqInuQ7CE5NpOFhBn';
        // gridUrl: gridUrl can be found at automation dashboard
        const GRID_HOST = 'hub.lambdatest.com/wd/hub';
        const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
        let driver;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                const service = new chrome_1.default.ServiceBuilder('driver/chromedriver.exe');
                driver = new selenium_webdriver_1.Builder().forBrowser("chrome").setChromeService(service).build();
                // driver = new Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
                yield driver.manage().window().maximize();
                yield driver.get("https://www.abhibus.com/");
            });
        });
        afterEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield driver.quit();
            });
        });
        it('validate container and page title', () => __awaiter(this, void 0, void 0, function* () {
            let title = yield driver.getTitle();
            chai.expect("Book Bus Tickets Online at Lowest Fare, Flat ₹500 Cashback On Bus Booking | AbhiBus")
                .eqls(title);
        }));
        it('validate container and page title', () => __awaiter(this, void 0, void 0, function* () {
            let title = yield driver.getTitle();
            chai.expect("Book Bus Tickets at Lowest Fare, Flat ₹500 Cashback On Bus Booking | AbhiBus")
                .eqls(title);
        }));
    });
});
