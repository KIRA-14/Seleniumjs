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
const Basepage_1 = __importDefault(require("./Basepage"));
let dr;
class HomePage extends Basepage_1.default {
    constructor() {
        super(...arguments);
        this.dr = this.driver;
    }
    getHomePageTitle() {
        return __awaiter(this, void 0, void 0, function* () { return yield dr.getTitle(); });
    }
    getSelectedOption() {
        return __awaiter(this, void 0, void 0, function* () {
            let selectedOption = '';
            var options = yield dr.findElements(selenium_webdriver_1.By.xpath("//ul[@id='pills-tab']/li/a"));
            options.forEach((elm) => __awaiter(this, void 0, void 0, function* () {
                if ((yield elm.getAttribute('aria-selected')) === 'true') {
                    selectedOption = yield elm.getText();
                }
            }));
            return selectedOption;
        });
    }
}
exports.default = HomePage;
function getHomePageTitle() {
    throw new Error("Function not implemented.");
}
