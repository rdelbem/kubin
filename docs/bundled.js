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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _modules_Thumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Thumbs */ \"./src/modules/Thumbs.js\");\n/* harmony import */ var _modules_Dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Dom */ \"./src/modules/Dom.js\");\n/* harmony import */ var _modules_Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Options */ \"./src/modules/Options.js\");\n\r\n\r\n\r\n\r\n\r\nnew _modules_Thumbs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nnew _modules_Dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst options = new _modules_Options__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/modules/Dom.js":
/*!****************************!*\
  !*** ./src/modules/Dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Thumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thumbs */ \"./src/modules/Thumbs.js\");\n\r\n\r\nclass Dom extends _Thumbs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.displayerDiv = document.querySelector(\".kubin-principal\");\r\n    this.displayerDiv !== undefined ? this.injectFirstImg() : null;\r\n    this.events();\r\n  }\r\n\r\n  injectFirstImg() {\r\n    this.displayerDiv.innerHTML = `<img src=\"../images/fullsize/${this.fileNames[0]}\" />`;\r\n  }\r\n\r\n  events() {\r\n    this.liThumbs.addEventListener(\"click\", (ev) =>\r\n      this.clickedThumb(ev.target)\r\n    );\r\n  }\r\n\r\n  clickedThumb(ev) {\r\n    if (ev.tagName === \"IMG\") {\r\n      console.log(ev.src.split(\"/\").pop());\r\n      this.displayerDiv.innerHTML = `<img src=\"../images/fullsize/${ev.src\r\n        .split(\"/\")\r\n        .pop()}\" />`;\r\n    }\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dom);\r\n\n\n//# sourceURL=webpack:///./src/modules/Dom.js?");

/***/ }),

/***/ "./src/modules/Options.js":
/*!********************************!*\
  !*** ./src/modules/Options.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Options {\r\n  constructor(thumbsPosition, fullSizePath, lightBox, zoom) {\r\n    this.thumbsPosition = thumbsPosition;\r\n    this.fullSizePath = fullSizePath;\r\n    this.lightBox = lightBox;\r\n    this.zoom = zoom;\r\n    this.dindo();\r\n  }\r\n\r\n  dindo() {\r\n    console.log(this.thumbsPosition);\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Options);\r\n\n\n//# sourceURL=webpack:///./src/modules/Options.js?");

/***/ }),

/***/ "./src/modules/Thumbs.js":
/*!*******************************!*\
  !*** ./src/modules/Thumbs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Thumbs {\r\n  constructor() {\r\n    this.liThumbs = document.querySelector(\".kubin-img-gallery\");\r\n    this.listThumbsSrc();\r\n  }\r\n\r\n  listThumbsSrc() {\r\n    if (this.liThumbs !== undefined) {\r\n      this.liThumbsSrcArr = [];\r\n\r\n      for (let i = 0; i < this.liThumbs.childElementCount; i++) {\r\n        this.liThumbsSrcArr.push(this.liThumbs.children[i].children[0].src);\r\n      }\r\n\r\n      this.liThumbsSrcArr.length > 0 ? this.cleanPathsToFileNames() : null;\r\n    }\r\n  }\r\n\r\n  cleanPathsToFileNames() {\r\n    this.fileNames = [];\r\n\r\n    for (let i = 0; i < this.liThumbsSrcArr.length; i++) {\r\n      let splitedSrc = this.liThumbsSrcArr[i].split(\"/\").pop();\r\n      this.fileNames.push(splitedSrc);\r\n    }\r\n\r\n    return this.fileNames.length > 0 ? this.fileNames : null;\r\n    //console.log(this.fileNames);\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbs);\r\n\n\n//# sourceURL=webpack:///./src/modules/Thumbs.js?");

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/App.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/App.js */\"./src/App.js\");\n\n\n//# sourceURL=webpack:///multi_./src/App.js?");

/***/ })

/******/ });