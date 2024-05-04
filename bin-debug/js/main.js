

var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

var __extends = function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var __assign = Object.assign || function (t) {
for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
}
return t;
};

var __rest = function (s, e) {
var t = {};
for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
    }
return t;
};

var __decorate = function (decorators, target, key, desc) {
var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __param = function (paramIndex, decorator) {
return function (target, key) { decorator(target, key, paramIndex); }
};

var __metadata = function (metadataKey, metadataValue) {
if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

var __awaiter = function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};

var __generator = function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];
        switch (op[0]) {
            case 0: case 1: t = op; break;
            case 4: _.label++; return { value: op[1], done: false };
            case 5: _.label++; y = op[1]; op = [0]; continue;
            case 7: op = _.ops.pop(); _.trys.pop(); continue;
            default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                if (t[2]) _.ops.pop();
                _.trys.pop(); continue;
        }
        op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
    if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};

var __exportStar = function(m, exports) {
for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

var __createBinding = Object.create ? (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
if (k2 === undefined) k2 = k;
o[k2] = m[k];
});

var __values = function (o) {
var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
if (m) return m.call(o);
if (o && typeof o.length === "number") return {
    next: function () {
        if (o && i >= o.length) o = void 0;
        return { value: o && o[i++], done: !o };
    }
};
throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var __read = function (o, n) {
var m = typeof Symbol === "function" && o[Symbol.iterator];
if (!m) return o;
var i = m.call(o), r, ar = [], e;
try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
}
catch (error) { e = { error: error }; }
finally {
    try {
        if (r && !r.done && (m = i["return"])) m.call(i);
    }
    finally { if (e) throw e.error; }
}
return ar;
};

var __spread = function () {
for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
return ar;
};

var __spreadArrays = function () {
for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
return r;
};

var __await = function (v) {
return this instanceof __await ? (this.v = v, this) : new __await(v);
};

var __asyncGenerator = function (thisArg, _arguments, generator) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var g = generator.apply(thisArg, _arguments || []), i, q = [];
return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
function fulfill(value) { resume("next", value); }
function reject(value) { resume("throw", value); }
function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

var __asyncDelegator = function (o) {
var i, p;
return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

var __asyncValues = function (o) {
if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
var m = o[Symbol.asyncIterator], i;
return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};

var __makeTemplateObject = function (cooked, raw) {
if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
o["default"] = v;
};

var __importStar = function (mod) {
if (mod && mod.__esModule) return mod;
var result = {};
if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
__setModuleDefault(result, mod);
return result;
};

var __importDefault = function (mod) {
return (mod && mod.__esModule) ? mod : { "default": mod };
};

var __classPrivateFieldGet = function (receiver, privateMap) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
}
return privateMap.get(receiver);
};

var __classPrivateFieldSet = function (receiver, privateMap, value) {
if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
}
privateMap.set(receiver, value);
return value;
};

var __reflect = function(p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/LoadingUI.ts":
/***/ (function(module, exports) {

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
window["LoadingUI"] = LoadingUI;
__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]); 


/***/ }),

/***/ "./src/Main.ts":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./src/LoadingUI.ts");
__webpack_require__("./src/Platform.ts");
__webpack_require__("./src/practice/base/AnchorTest.ts");
__webpack_require__("./src/practice/base/CustomContainer.ts");
__webpack_require__("./src/practice/base/CustomShape.ts");
__webpack_require__("./src/practice/base/GraphicsTest.ts");
__webpack_require__("./src/practice/base/HitTest.ts");
__webpack_require__("./src/practice/base/RenderTest.ts");
__webpack_require__("./src/practice/base/TextTest.ts");
__webpack_require__("./src/practice/base/TimerTest.ts");
__webpack_require__("./src/practice/base/TweenTest.ts");
__webpack_require__("./src/practice/event/EventReceiverTest.ts");
__webpack_require__("./src/practice/event/EventSenderTest.ts");
__webpack_require__("./src/practice/event/EventTestContainer.ts");
__webpack_require__("./src/practice/event/TestEvent.ts");
__webpack_require__("./src/practice/network/HttpRequestTest.ts");
__webpack_require__("./src/practice/resourceOperate/BitmapTest.ts");
__webpack_require__("./src/practice/resourceOperate/SoundTest.ts");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    // public constructor() {
    //   super();
    //   this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    // }
    //
    // private onAddToStage(event: egret.Event) {
    //
    //   egret.lifecycle.addLifecycleListener((context) => {
    //     // custom lifecycle plugin
    //
    //     context.onUpdate = () => {
    //
    //     }
    //   })
    //
    //   egret.lifecycle.onPause = () => {
    //     egret.ticker.pause();
    //   }
    //
    //   egret.lifecycle.onResume = () => {
    //     egret.ticker.resume();
    //   }
    //
    //   this.runGame().catch(e => {
    //     console.log(e);
    //   })
    // }
    //
    // private async runGame() {
    //   await this.loadResource()
    //   this.createGameScene();
    //   const result = await RES.getResAsync("description_json")
    //   this.startAnimation(result);
    //   await platform.login();
    //   const userInfo = await platform.getUserInfo();
    //   console.log(userInfo);
    //
    // }
    //
    // private async loadResource() {
    //   try {
    //     const loadingView = new LoadingUI();
    //     this.stage.addChild(loadingView);
    //     await RES.loadConfig("resource/default.res.json", "resource/");
    //     await RES.loadGroup("preload", 0, loadingView);
    //     this.stage.removeChild(loadingView);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // }
    //
    // private textfield: egret.TextField;
    //
    // /**
    //  * 创建游戏场景
    //  * Create a game scene
    //  */
    // private createGameScene() {
    //   let sky = this.createBitmapByName("bg_jpg");
    //   this.addChild(sky);
    //   let stageW = this.stage.stageWidth;
    //   let stageH = this.stage.stageHeight;
    //   sky.width = stageW;
    //   sky.height = stageH;
    //
    //   let topMask = new egret.Shape();
    //   topMask.graphics.beginFill(0x000000, 0.5);
    //   topMask.graphics.drawRect(0, 0, stageW, 172);
    //   topMask.graphics.endFill();
    //   topMask.y = 33;
    //   this.addChild(topMask);
    //
    //   let icon = this.createBitmapByName("egret_icon_png");
    //   this.addChild(icon);
    //   icon.x = 26;
    //   icon.y = 33;
    //
    //   let line = new egret.Shape();
    //   line.graphics.lineStyle(2, 0xffffff);
    //   line.graphics.moveTo(0, 0);
    //   line.graphics.lineTo(0, 117);
    //   line.graphics.endFill();
    //   line.x = 172;
    //   line.y = 61;
    //   this.addChild(line);
    //
    //
    //   let colorLabel = new egret.TextField();
    //   colorLabel.textColor = 0xffffff;
    //   colorLabel.width = stageW - 172;
    //   colorLabel.textAlign = "center";
    //   colorLabel.text = "Hello Egret";
    //   colorLabel.size = 24;
    //   colorLabel.x = 172;
    //   colorLabel.y = 80;
    //   this.addChild(colorLabel);
    //
    //   let textfield = new egret.TextField();
    //   this.addChild(textfield);
    //   textfield.alpha = 0;
    //   textfield.width = stageW - 172;
    //   textfield.textAlign = egret.HorizontalAlign.CENTER;
    //   textfield.size = 24;
    //   textfield.textColor = 0xffffff;
    //   textfield.x = 172;
    //   textfield.y = 135;
    //   this.textfield = textfield;
    //
    //
    // }
    //
    // /**
    //  * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
    //  * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
    //  */
    // private createBitmapByName(name: string) {
    //   let result = new egret.Bitmap();
    //   let texture: egret.Texture = RES.getRes(name);
    //   result.texture = texture;
    //   return result;
    // }
    //
    // /**
    //  * 描述文件加载成功，开始播放动画
    //  * Description file loading is successful, start to play the animation
    //  */
    // private startAnimation(result: string[]) {
    //   let parser = new egret.HtmlTextParser();
    //
    //   let textflowArr = result.map(text => parser.parse(text));
    //   let textfield = this.textfield;
    //   let count = -1;
    //   let change = () => {
    //     count++;
    //     if (count >= textflowArr.length) {
    //       count = 0;
    //     }
    //     let textFlow = textflowArr[count];
    //
    //     // 切换描述内容
    //     // Switch to described content
    //     textfield.textFlow = textFlow;
    //     let tw = egret.Tween.get(textfield);
    //     tw.to({ "alpha": 1 }, 200);
    //     tw.wait(2000);
    //     tw.to({ "alpha": 0 }, 200);
    //     tw.call(change, this);
    //   };
    //
    //   change();
    // }
    //  ####################################################################################################
    //  ####################################################################################################
    //  ####################################################################################################
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        // 自定义图形
        // let customShape = new CustomShape();
        // this.addChild(customShape);
        // 自定义容器
        // let customContainer = new CustomContainer();
        // this.addChild(customContainer);
        // 自定义事件
        // let eventTestContainer = new EventTestContainer();
        // this.addChild(eventTestContainer);
        // 自定义绘图
        // let graphicsTest = new GraphicsTest();
        // this.addChild(graphicsTest);
        // 自定义文本
        // let textTest = new TextTest();
        // this.addChild(textTest);
        // 缓冲动画
        // let tweenTest = new TweenTest();
        // this.addChild(tweenTest);
        // 计时器
        // let timeTest = new TimerTest();
        // this.addChild(timeTest);
        // Bitmap 资源加载
        // let bitmapTest = new BitmapTest();
        // this.addChild(bitmapTest);
        // 音频文件加载
        // let soundTest = new SoundTest();
        // this.addChild(soundTest);
        //
    };
    return Main;
}(egret.DisplayObjectContainer));
window["Main"] = Main;
__reflect(Main.prototype,"Main",[]); 


/***/ }),

/***/ "./src/Platform.ts":
/***/ (function(module, exports) {

var DebugPlatform = /** @class */ (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
window["DebugPlatform"] = DebugPlatform;
__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]); 
if (!window.platform) {
    window.platform = new DebugPlatform();
}


/***/ }),

/***/ "./src/practice/base/AnchorTest.ts":
/***/ (function(module, exports) {

var AnchorTest = /** @class */ (function (_super) {
    __extends(AnchorTest, _super);
    function AnchorTest() {
        var _this = _super.call(this) || this;
        _this.drawShape();
        return _this;
    }
    AnchorTest.prototype.drawShape = function () {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 100, 100);
        this.graphics.endFill();
        // 物体偏移,物体旋转均以锚点为原点!
        this.width = 100;
        this.height = 100;
        this.x = 100;
        this.y = 100;
        this.anchorOffsetX = 30;
        this.anchorOffsetY = 30;
        this.rotation = 30;
    };
    return AnchorTest;
}(egret.Shape));
window["AnchorTest"] = AnchorTest;
__reflect(AnchorTest.prototype,"AnchorTest",[]); 


/***/ }),

/***/ "./src/practice/base/CustomContainer.ts":
/***/ (function(module, exports) {

var CustomContainer = /** @class */ (function (_super) {
    __extends(CustomContainer, _super);
    function CustomContainer() {
        var _this = _super.call(this) || this;
        _this.spr1 = new egret.Sprite();
        _this.spr2 = new egret.Sprite();
        _this.drawContainer();
        _this.containerDeepManage();
        return _this;
    }
    CustomContainer.prototype.drawContainer = function () {
        this.spr1.graphics.beginFill(0x000fff);
        this.spr1.graphics.drawRect(0, 0, 400, 400);
        this.spr1.graphics.endFill();
        this.addChild(this.spr1);
        // let spr2 = new egret.Sprite();
        this.spr2.graphics.beginFill(0x00ffff);
        // @param x 圆心相对于父显示对象注册点的 x 位置(以像素为单位)
        // @param y 相对于父显示对象注册点的圆心的 y 位置(以像素为单位)
        // 在drawRect函数中设置了x,y之后, 其.x .y的值依然是0
        this.spr2.graphics.drawRect(0, 0, 100, 100);
        console.log("spr2.x = " + this.spr2.x);
        console.log("spr2.y = " + this.spr2.y);
        this.spr2.x = 100;
        this.spr2.y = 100;
        this.spr2.graphics.endFill();
        this.addChild(this.spr2);
        var rec = new egret.Shape();
        rec.graphics.beginFill(0xfff000);
        // 此时rec的父容器为spr2
        rec.graphics.drawRect(10, 10, 30, 30);
        rec.graphics.endFill();
        this.spr1.addChild(this.spr2);
        this.spr2.addChild(rec);
        //
        // if (rec.parent) {
        //   rec.parent.removeChild(rec);
        // }
    };
    CustomContainer.prototype.generateSprite = function () {
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xff0000);
        spr.graphics.drawRect(0, 0, 100, 100);
        spr.graphics.endFill();
        return spr;
    };
    /**
     * 容器深度学习
     * @private
     */
    CustomContainer.prototype.containerDeepManage = function () {
        // z-次序 | 深度值 深度值技术从0开始,优先被添加的显示对象深度值越小
        // 深度值越小,越底层  深度值越大,越上层
        // 容器中有子容器,此时只会打印出该容器中的子对象的数量
        console.log("this.numberChildren: " + this.numChildren);
        console.log("spr1.numberChildren: " + this.spr1.numChildren);
        console.log("spr2.numberChildren: " + this.spr2.numChildren);
        var spr3 = this.generateSprite();
        this.addChild(spr3);
        // numChildren在添加之后数值才会增加
        console.log("this.numberChildren: " + this.numChildren);
        for (var i = 0; i < 5; i++) {
            var spr = new egret.Sprite();
            spr.graphics.beginFill(0xffffff * Math.random());
            spr.graphics.drawRect(0, 0, 150, 150);
            spr.graphics.endFill();
            spr.x = i * 50;
            this.addChild(spr);
        }
        console.log("this.numChildren: " + this.numChildren);
        this.addChildAtSpecificDeep();
    };
    CustomContainer.prototype.addChildAtSpecificDeep = function () {
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xffffff * Math.random());
        spr.graphics.drawRect(0, 0, 500, 500);
        spr.graphics.endFill();
        this.addChildAt(spr, 2);
        spr.x = 2 * 50;
        spr.name = "testSprite";
        console.log("this.numChildren: " + this.numChildren);
        // 交换两个显示对象的深度值
        this.exchangeChildDeep();
        // 重新设置Child的深度值
        this.changeChildDeep(spr, 10);
        // 通过深度值或name属性获取特定的子显示对象
        this.getSpecificChild();
    };
    CustomContainer.prototype.exchangeChildDeep = function () {
        this.swapChildren(this.getChildAt(2), this.getChildAt(4));
        this.swapChildrenAt(2, 4);
    };
    CustomContainer.prototype.changeChildDeep = function (displayObj, index) {
        this.setChildIndex(displayObj, index);
    };
    CustomContainer.prototype.getSpecificChild = function () {
        // 根据深度值获取子显示对象
        var zeroSprite = this.getChildAt(4);
        zeroSprite.scaleX = 1.5;
        zeroSprite.scaleY = 1.5;
        // 根据name属性获取显示对象
        var testSpr = this.getChildByName("testSprite");
        testSpr.x = 1000;
        testSpr.y = 1000;
    };
    return CustomContainer;
}(egret.Sprite));
window["CustomContainer"] = CustomContainer;
__reflect(CustomContainer.prototype,"CustomContainer",[]); 


/***/ }),

/***/ "./src/practice/base/CustomShape.ts":
/***/ (function(module, exports) {

var CustomShape = /** @class */ (function (_super) {
    __extends(CustomShape, _super);
    function CustomShape() {
        var _this = _super.call(this) || this;
        _this.drawCustomGridCard();
        _this.rotationTest();
        return _this;
    }
    CustomShape.prototype.drawCustomGridCard = function () {
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(0, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0x0000ff);
        this.graphics.drawRect(50, 50, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(50, 0, 50, 50);
        this.graphics.endFill();
        this.graphics.beginFill(0xff0000);
        this.graphics.drawRect(0, 50, 50, 50);
        this.graphics.endFill();
    };
    CustomShape.prototype.rotationTest = function () {
        // 物体偏移,物体旋转均以锚点为原点!
        this.x = 50;
        this.y = 50;
        this.anchorOffsetX = 50;
        this.anchorOffsetY = 50;
        this.rotation = 30;
    };
    return CustomShape;
}(egret.Shape));
window["CustomShape"] = CustomShape;
__reflect(CustomShape.prototype,"CustomShape",[]); 


/***/ }),

/***/ "./src/practice/base/GraphicsTest.ts":
/***/ (function(module, exports) {

var GraphicsTest = /** @class */ (function (_super) {
    __extends(GraphicsTest, _super);
    function GraphicsTest() {
        var _this = _super.call(this) || this;
        _this.graphicsTest();
        return _this;
    }
    GraphicsTest.prototype.graphicsTest = function () {
        this.drawCurveLine();
    };
    GraphicsTest.prototype.drawRecLine = function () {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x000fff, 0.5);
        //给矩形添加外边框, thickness外边框大小单位像素, color外边框颜色
        shp.graphics.lineStyle(10, 0xfff000);
        shp.graphics.drawRect(0, 0, 400, 400);
        shp.graphics.endFill();
        shp.x = 10;
        shp.y = 10;
        this.addChild(shp);
    };
    GraphicsTest.prototype.drawLine = function () {
        var line = new egret.Shape();
        // line.graphics.beginFill(0xfff000, 0.5);
        line.graphics.lineStyle(10, 0x000fff);
        // 初始绘制点移动到(10, 10)
        line.graphics.moveTo(10, 10);
        // 从(10, 10)到(100, 100)绘制线段
        line.graphics.lineTo(100, 100);
        line.graphics.lineTo(263, 140);
        line.graphics.lineTo(435, 378);
        // 多次lineTo会绘制连接线段
        line.graphics.endFill();
        this.addChild(line);
    };
    GraphicsTest.prototype.drawCurveLine = function () {
        //todo 贝塞尔曲线学习
        var curveLine = new egret.Shape();
        curveLine.graphics.lineStyle(10, 0x000fff);
        // 初始绘制点移动到(10, 10)
        curveLine.graphics.moveTo(10, 10);
        // 从(10, 10)到(100, 100)绘制线段
        curveLine.graphics.curveTo(100, 100, 200, 50);
        // 多次lineTo会绘制连接线段
        curveLine.graphics.endFill();
        this.addChild(curveLine);
    };
    return GraphicsTest;
}(egret.DisplayObjectContainer));
window["GraphicsTest"] = GraphicsTest;
__reflect(GraphicsTest.prototype,"GraphicsTest",[]); 


/***/ }),

/***/ "./src/practice/base/HitTest.ts":
/***/ (function(module, exports) {

var HitTest = /** @class */ (function (_super) {
    __extends(HitTest, _super);
    function HitTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    HitTest.prototype.onAddToStage = function () {
        this.drawInfoText();
        var shp = new egret.Shape();
        shp.graphics.beginFill(0xff0000);
        shp.graphics.drawCircle(0, 0, 20);
        shp.graphics.endFill();
        shp.width = 100;
        shp.height = 100;
        this.addChild(shp);
        // const isHit: boolean = shp.hitTestPoint(10, 10, false);
        // const isPixelHit: boolean = shp.hitTestPoint(10, 10, true);
        // const isHit: boolean = shp.hitTestPoint(20, 20, false);
        // const isPixelHit: boolean = shp.hitTestPoint(20, 20, true);
        var isHit = shp.hitTestPoint(25, 25);
        var isPixelHit = shp.hitTestPoint(25, 25, true);
        this.infoText.text = "碰撞检测 非像素检测:" + isHit;
        this.pixelHitText.text = "碰撞检测 像素检测:" + isPixelHit;
        // todo 像素检测和非像素检测结果是一样的???均为false
        // let rec = new egret.Shape();
        // rec.graphics.beginFill(0xFF000);
        // rec.graphics.drawRect(0, 0, 50, 50);
        // rec.width = 100;
        // rec.height = 100;
        // rec.graphics.endFill();
        // this.addChild(rec);
        // // const isHit: boolean = rec.hitTestPoint(25, 25, false);
        // // const isPixelHit: boolean = rec.hitTestPoint(25, 25, true);
        // // const isHit: boolean = rec.hitTestPoint(50, 50, false);
        // // const isPixelHit: boolean = rec.hitTestPoint(50, 50, true);
        // const isHit: boolean = rec.hitTestPoint(60, 60, false);
        // const isPixelHit: boolean = rec.hitTestPoint(60, 60, true);
        // this.infoText.text = "碰撞检测 非像素检测:" + isHit;
        // this.pixelHitText.text = "碰撞检测 像素检测:" + isPixelHit;
    };
    HitTest.prototype.drawInfoText = function () {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "碰撞检测 非像素检测:";
        this.addChild(this.infoText);
        this.pixelHitText = new egret.TextField();
        this.pixelHitText.y = 400;
        this.pixelHitText.text = "碰撞检测 像素检测:";
        this.addChild(this.pixelHitText);
    };
    return HitTest;
}(egret.DisplayObjectContainer));
window["HitTest"] = HitTest;
__reflect(HitTest.prototype,"HitTest",[]); 


/***/ }),

/***/ "./src/practice/base/RenderTest.ts":
/***/ (function(module, exports) {

var RenderTest = /** @class */ (function (_super) {
    __extends(RenderTest, _super);
    function RenderTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    RenderTest.prototype.onAddToStage = function () {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0xFFFFFF);
        shape.graphics.drawRect(10, 10, 100, 100);
        shape.graphics.endFill();
        // 以锚点为旋转基点,物体默认锚点为物体的左上角,x轴为水平轴,顺时针方向旋转30
        shape.width = 100;
        shape.height = 100;
        shape.alpha = 0.5;
        shape.scaleX = 1.5;
        shape.scaleY = 1.5;
        shape.rotation = 30;
        this.addChild(shape);
    };
    return RenderTest;
}(egret.DisplayObjectContainer));
window["RenderTest"] = RenderTest;
__reflect(RenderTest.prototype,"RenderTest",[]); 


/***/ }),

/***/ "./src/practice/base/TextTest.ts":
/***/ (function(module, exports) {

var TextTest = /** @class */ (function (_super) {
    __extends(TextTest, _super);
    function TextTest() {
        var _this = _super.call(this) || this;
        _this.showText();
        return _this;
    }
    TextTest.prototype.showText = function () {
        var text = new egret.TextField();
        // width 30 height 120
        // text.text = "测\n试\n文\n本";
        // height 120 width 30
        text.text = "测试文本";
        // TextField.width 和 TextField.height根据文本内容自适应调整
        console.log(text.width + "---" + text.height);
        text.width = 70;
        text.height = 70;
        // 设置文本颜色
        text.textColor = 0xfff000;
        // 设置字体
        // todo 字体不生效
        text.fontFamily = "KaiTi";
        // 设置文字布局
        text.textAlign = egret.HorizontalAlign.RIGHT;
        // 设置字体风格
        // 粗体
        text.bold = true;
        // 斜体
        text.italic = true;
        this.addChild(text);
    };
    return TextTest;
}(egret.DisplayObjectContainer));
window["TextTest"] = TextTest;
__reflect(TextTest.prototype,"TextTest",[]); 


/***/ }),

/***/ "./src/practice/base/TimerTest.ts":
/***/ (function(module, exports) {

var TimerTest = /** @class */ (function (_super) {
    __extends(TimerTest, _super);
    function TimerTest() {
        var _this = _super.call(this) || this;
        _this.testTimer();
        return _this;
    }
    /**
     * 计时器测试
     * 2个属性delay repeatCount
     * 3个方法start stop reset
     * 2个事件TIMER TIMER_COMPLETE
     * @private
     */
    TimerTest.prototype.testTimer = function () {
        this.timeText = new egret.TextField();
        this.timeText.text = "计时测试";
        this.timeText.y = 200;
        this.addChild(this.timeText);
        // delay 每隔多长时间触发一次, repeatCount 重复次数
        var timer = new egret.Timer(500, 5);
        // 监听计时器触发 参数: 事件名称 时间监听器(函数) 监听器对象
        timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
        // 监听计时结束 参数: 事件名称 时间监听器(函数) 监听器对象
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
        timer.start();
    };
    TimerTest.prototype.timerFunc = function () {
        console.log("计时");
    };
    TimerTest.prototype.timerComFunc = function () {
        console.log("计时结束");
    };
    return TimerTest;
}(egret.DisplayObjectContainer));
window["TimerTest"] = TimerTest;
__reflect(TimerTest.prototype,"TimerTest",[]); 


/***/ }),

/***/ "./src/practice/base/TweenTest.ts":
/***/ (function(module, exports) {

/**
 * 缓冲动画
 */
var TweenTest = /** @class */ (function (_super) {
    __extends(TweenTest, _super);
    function TweenTest() {
        var _this = _super.call(this) || this;
        _this.tweenPlay();
        return _this;
    }
    TweenTest.prototype.tweenPlay = function () {
        var shp = new egret.Shape();
        shp.graphics.beginFill(0x000fff, 0.5);
        //给矩形添加外边框, thickness外边框大小单位像素, color外边框颜色
        shp.graphics.lineStyle(10, 0xfff000);
        shp.graphics.drawRect(0, 0, 400, 400);
        shp.graphics.endFill();
        this.addChild(shp);
        var tw = egret.Tween.get(shp);
        tw.to({ x: 100, y: 100 }, 1000);
    };
    return TweenTest;
}(egret.DisplayObjectContainer));
window["TweenTest"] = TweenTest;
__reflect(TweenTest.prototype,"TweenTest",[]); 


/***/ }),

/***/ "./src/practice/event/EventReceiverTest.ts":
/***/ (function(module, exports) {

var EventReceiverTest = /** @class */ (function (_super) {
    __extends(EventReceiverTest, _super);
    function EventReceiverTest() {
        return _super.call(this) || this;
    }
    EventReceiverTest.prototype.receiveEvent = function (event) {
        console.log("接收器接收到了事件 " + "event.param1: " + event.param1 + " " + "event.param2: " + event.param2);
    };
    return EventReceiverTest;
}(egret.Sprite));
window["EventReceiverTest"] = EventReceiverTest;
__reflect(EventReceiverTest.prototype,"EventReceiverTest",[]); 


/***/ }),

/***/ "./src/practice/event/EventSenderTest.ts":
/***/ (function(module, exports) {

var EventSenderTest = /** @class */ (function (_super) {
    __extends(EventSenderTest, _super);
    function EventSenderTest() {
        return _super.call(this) || this;
    }
    EventSenderTest.prototype.sendEvent = function () {
        var testEvent = new TestEvent(TestEvent.eventType);
        testEvent.param1 = "111";
        testEvent.param2 = '222';
        this.dispatchEvent(testEvent);
    };
    return EventSenderTest;
}(egret.Sprite));
window["EventSenderTest"] = EventSenderTest;
__reflect(EventSenderTest.prototype,"EventSenderTest",[]); 


/***/ }),

/***/ "./src/practice/event/EventTestContainer.ts":
/***/ (function(module, exports) {

var EventTestContainer = /** @class */ (function (_super) {
    __extends(EventTestContainer, _super);
    function EventTestContainer() {
        var _this = _super.call(this) || this;
        // this.customEventTest();
        _this.touchEventTest();
        return _this;
    }
    EventTestContainer.prototype.customEventTest = function () {
        //初始化时间发送器和时间监听器
        var eventSender = new EventSenderTest();
        var eventReceiver = new EventReceiverTest();
        // 注册监听器, 事件的侦听器必须是一个函数, 此处事件的监听器为eventReceiver.receiveEvent
        eventSender.addEventListener(TestEvent.eventType, eventReceiver.receiveEvent, eventReceiver, false, 10);
        // priority事件优先级,priority越大优先级越高
        // 检测监听器
        var hasListener = eventSender.hasEventListener(TestEvent.eventType);
        console.log("监听器检测: " + hasListener);
        // 发送时间消息
        eventSender.sendEvent();
        // 移除监听器
        eventSender.removeEventListener(TestEvent.eventType, eventReceiver.receiveEvent, eventReceiver);
        hasListener = eventSender.hasEventListener(TestEvent.eventType);
        console.log("监听器检测, 执行移除监听器之后: " + hasListener);
    };
    EventTestContainer.prototype.touchEventTest = function () {
        var spr = new egret.Sprite();
        spr.graphics.beginFill(0xfff000);
        spr.graphics.drawRect(0, 0, 150, 150);
        spr.graphics.endFill();
        this.addChild(spr);
        spr.touchEnabled = true;
        spr.addEventListener(egret.TouchEvent.TOUCH_TAP, this.handleTouchEvent, spr);
    };
    EventTestContainer.prototype.handleTouchEvent = function () {
        console.log("触发了spr的触摸事件!!!");
    };
    return EventTestContainer;
}(egret.DisplayObjectContainer));
window["EventTestContainer"] = EventTestContainer;
__reflect(EventTestContainer.prototype,"EventTestContainer",[]); 


/***/ }),

/***/ "./src/practice/event/TestEvent.ts":
/***/ (function(module, exports) {

/**
 * 自定义事件
 */
var TestEvent = /** @class */ (function (_super) {
    __extends(TestEvent, _super);
    /**
     *
     * @param type 事件类型
     * @param bubbles 指定事件是否参与事件流的冒泡阶段
     * @param cancelable 是否取消event事件
     * @param data
     */
    function TestEvent(type, bubbles, cancelable, data) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.param1 = "param1";
        _this.param2 = "param2";
        return _this;
    }
    TestEvent.eventType = "eventType";
    return TestEvent;
}(egret.Event));
window["TestEvent"] = TestEvent;
__reflect(TestEvent.prototype,"TestEvent",[]); 


/***/ }),

/***/ "./src/practice/network/HttpRequestTest.ts":
/***/ (function(module, exports) {

var HttpRequestTest = /** @class */ (function (_super) {
    __extends(HttpRequestTest, _super);
    function HttpRequestTest() {
        var _this = _super.call(this) || this;
        _this.testHttpUrl = "http://httpbin.org/get";
        return _this;
    }
    HttpRequestTest.prototype.httpRequest = function () {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open(this.testHttpUrl, egret.HttpMethod.GET);
        request.setRequestHeader("ContentType", "application/x-www-form-urlencoded");
        request.send();
    };
    return HttpRequestTest;
}(egret.DisplayObjectContainer));
window["HttpRequestTest"] = HttpRequestTest;
__reflect(HttpRequestTest.prototype,"HttpRequestTest",[]); 


/***/ }),

/***/ "./src/practice/resourceOperate/BitmapTest.ts":
/***/ (function(module, exports) {

var BitmapTest = /** @class */ (function (_super) {
    __extends(BitmapTest, _super);
    function BitmapTest() {
        var _this = _super.call(this) || this;
        _this.loadResource().then(function () {
            _this.drawBitmap();
        });
        return _this;
    }
    // group
    // {
    //   "keys":"tree_png",
    //   "name":"tree"
    // }
    // resource
    // {
    //   "name":"tree_png",
    //   "type":"image",
    //   "url":"assets/tree.png"
    // },
    BitmapTest.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        // 入参为 group的name
                        // await RES.loadGroup("tree");
                        this.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BitmapTest.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    BitmapTest.prototype.drawBitmap = function () {
        var sky = this.createBitmapByName("bg_jpg");
        this.addChild(sky);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
        var egretIcon = this.createBitmapByName("egret_icon_png");
        egretIcon.width = 100;
        egretIcon.height = 100;
        this.addChild(egretIcon);
        var treeTexture = this.createBitmapByName("tree_png");
        this.addChild(treeTexture);
        var tree = new egret.Bitmap();
        var texture = RES.getRes("tree_png");
        tree.texture = texture;
        tree.y = 200;
        // ----------------------------------
        // |         |          |           |
        // |    1    |     2    |     3     |
        // |         |          |           |
        // |--------------------------------|
        // |         |          |           |
        // |    4    |     5    |     6     |
        // |         |          |           |
        // |--------------------------------|
        // |         |          |           |
        // |    7    |     8    |     9     |
        // |         |          |           |
        // ----------------------------------
        // todo 九宫格参数详解
        // 使用九宫格对图片进行拉伸
        // let rec = new egret.Rectangle(30, 31, 40, 41);
        // tree.width *= 3;
        // tree.scale9Grid = rec
        // 使用平铺的方式重复填充图片
        tree.fillMode = egret.BitmapFillMode.REPEAT;
        tree.width *= 2;
        tree.height *= 3;
        this.addChild(tree);
    };
    return BitmapTest;
}(egret.DisplayObjectContainer));
window["BitmapTest"] = BitmapTest;
__reflect(BitmapTest.prototype,"BitmapTest",[]); 


/***/ }),

/***/ "./src/practice/resourceOperate/SoundTest.ts":
/***/ (function(module, exports) {

var SoundTest = /** @class */ (function (_super) {
    __extends(SoundTest, _super);
    function SoundTest() {
        var _this = _super.call(this) || this;
        _this.archerSound = new egret.Sound();
        _this.drawAudioPauseShape();
        _this.loadSoundResource().then(function () {
            // console.log("音频资源加载成功")
            _this.playArcherSound();
        });
        return _this;
    }
    SoundTest.prototype.loadSoundResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.addSound(), this);
                    return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        // RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.addSound(), this);
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("sound")];
                    case 2:
                        _a.sent();
                        console.log("音频资源加载成功");
                        return [2 /*return*/];
                }
            });
        });
    };
    SoundTest.prototype.playArcherSound = function () {
        this.archerSound = RES.getRes("archer_mp3");
        //Play()函数第二个入参 loop 为播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
        //Sound运行play()之后，会返回一个SoundChannel对象，对SoundChannel进行操作可以暂停音频播放,减小音量等等
        this.archerSoundChannel = this.archerSound.play();
        console.log("音频资源播放成功");
    };
    SoundTest.prototype.drawAudioPauseShape = function () {
        var pauseShape = new egret.Shape();
        pauseShape.graphics.beginFill(0xffffff);
        pauseShape.graphics.drawRect(0, 0, 100, 100);
        pauseShape.graphics.endFill();
        pauseShape.width = 100;
        pauseShape.height = 100;
        pauseShape.touchEnabled = true;
        pauseShape.addEventListener(egret.TouchEvent.TOUCH_TAP, this.pauseArcherSound, this);
        this.addChild(pauseShape);
    };
    SoundTest.prototype.pauseArcherSound = function (event) {
        console.log("点击暂停音频播放");
        if (this.archerSoundChannel) {
            this.archerSoundChannel.volume = 0.5;
            // this.archerSoundChannel.stop();
        }
    };
    return SoundTest;
}(egret.DisplayObjectContainer));
window["SoundTest"] = SoundTest;
__reflect(SoundTest.prototype,"SoundTest",[]); 


/***/ })

/******/ });