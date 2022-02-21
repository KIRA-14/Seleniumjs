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
const chai = __importStar(require("chai"));
const Basepage_1 = __importDefault(require("../POM/Basepage"));
const HomePage_1 = __importDefault(require("../POM/HomePage"));
describe("AbiBus", function () {
    return __awaiter(this, void 0, void 0, function* () {
        // const USERNAME = "kiran.raman14";
        // // Accesskey:  Accesskey can be generated from automation dashboard or profile section
        // const KEY = 'uRtJDCYxpQAMa3uOgfiwbVcpXLI1MkQeGUqInuQ7CE5NpOFhBn';
        // // gridUrl: gridUrl can be found at automation dashboard
        // const GRID_HOST = 'hub.lambdatest.com/wd/hub';
        // const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
        // let driver: ThenableWebDriver;
        let bs;
        let hp;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                bs = new Basepage_1.default();
                yield bs.startApp('chrome');
                hp = new HomePage_1.default();
            });
        });
        afterEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield bs.endApp();
            });
        });
        it('validate container and page title', () => __awaiter(this, void 0, void 0, function* () {
            let title = yield hp.getHomePageTitle();
            chai.expect("Book Bus Tickets Online at Lowest Fare, Flat ₹500 Cashback On Bus Booking | AbhiBus")
                .eqls(title);
        }));
        it('validate container and page title', () => __awaiter(this, void 0, void 0, function* () {
            let title = yield hp.getSelectedOption();
            console.log(title);
            // chai.expect("Book Bus Tickets at Lowest Fare, Flat ₹500 Cashback On Bus Booking | AbhiBus")
            //    .eqls(title);
        }));
    });
});
