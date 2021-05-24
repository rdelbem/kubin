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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n/* harmony import */ var _modules_Thumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Thumbs */ \"./src/modules/Thumbs.js\");\n/* harmony import */ var _modules_Dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Dom */ \"./src/modules/Dom.js\");\n/* harmony import */ var _modules_Lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Lightbox */ \"./src/modules/Lightbox.js\");\n\r\n\r\n\r\n\r\n\r\nnew _modules_Thumbs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nnew _modules_Dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nnew _modules_Lightbox__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/modules/Dom.js":
/*!****************************!*\
  !*** ./src/modules/Dom.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Thumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thumbs */ \"./src/modules/Thumbs.js\");\n\r\n\r\nclass Dom extends _Thumbs__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n    this.displayerDiv !== undefined ? this.injectFirstImg() : null;\r\n    this.currentImg; //this variable stores the path to the current displayed image, therefore it will be used in Lightbox object. It will be updated according to user demands\r\n    this.img = document.querySelector(\".showing\");\r\n\r\n    this.clickThumb();\r\n    this.mouseEnter();\r\n    this.mouseLeave();\r\n  }\r\n\r\n  injectFirstImg() {\r\n    this.currentImg = this.pathToFiles + this.fileNames[0];\r\n    this.displayerDiv.innerHTML = `<img class=\"showing\" src=\"${this.pathToFiles}${this.fileNames[0]}\" />`;\r\n  }\r\n\r\n  clickThumb() {\r\n    this.liThumbs.addEventListener(\"click\", (ev) =>\r\n      this.clickedThumb(ev.target)\r\n    );\r\n  }\r\n\r\n  clickedThumb(ev) {\r\n    if (ev.tagName === \"IMG\") {\r\n      this.currentImg = this.pathToFiles + ev.src.split(\"/\").pop();\r\n      this.img.src = this.currentImg;\r\n    }\r\n  }\r\n\r\n  mouseEnter() {\r\n    this.displayerDiv.addEventListener(\"mousemove\", (e) => {\r\n      const x = e.clientX - e.target.offsetLeft;\r\n      const y = e.clientY - e.target.offsetTop;\r\n\r\n      this.img.style.transformOrigin = `${x}px ${y}px`;\r\n      this.img.style.transform = \"scale(2)\";\r\n    });\r\n  }\r\n\r\n  mouseLeave() {\r\n    this.displayerDiv.addEventListener(\"mouseleave\", () => {\r\n      this.img.style.transformOrigin = \"center center\";\r\n      this.img.style.transform = \"scale(1)\";\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dom);\r\n\n\n//# sourceURL=webpack:///./src/modules/Dom.js?");

/***/ }),

/***/ "./src/modules/Lightbox.js":
/*!*********************************!*\
  !*** ./src/modules/Lightbox.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dom */ \"./src/modules/Dom.js\");\n\r\n\r\nclass Lightbox extends _Dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor() {\r\n    super();\r\n\r\n    this.body = document.getElementsByTagName(\"BODY\")[0];\r\n    this.kubinPrincipal = document.querySelector(\".kubin-principal\");\r\n    this.countKeyboardStrokes = 0;\r\n    this.event();\r\n    this.ArrayForLightboxNav();\r\n  }\r\n\r\n  event() {\r\n    this.kubinPrincipal.addEventListener(\"click\", () => this.lightbox());\r\n  }\r\n\r\n  ArrayForLightboxNav() {\r\n    this.fullSizeImagesPaths = [];\r\n\r\n    for (let i = 0; i < this.fileNames.length; i++) {\r\n      this.fullSizeImagesPaths.push(\r\n        this.baseURL + this.pathToFiles + this.fileNames[i]\r\n      );\r\n    }\r\n\r\n    return this.fullSizeImagesPaths;\r\n  }\r\n\r\n  lightbox() {\r\n    //as lightbox is feature rich, it will be a bigger method if compared to the usual size of other Kubin gallery methods.\r\n\r\n    let currentImg = this.currentImg;\r\n    let bodyVariable = this.body;\r\n\r\n    //layout\r\n    let lightboxInnerTemplate = `\r\n    <div class=\"overlay\">\r\n      <div class=\"close-btn\">\r\n        <p>&times;</p>\r\n      </div>\r\n\r\n      <div class=\"arrow-left\"><p class=\"p-arrow-left\">&larr;</p></div>\r\n      <div class=\"arrow-right\"><p class=\"p-arrow-right\">&rarr;</p></div>\r\n\r\n    <div class=\"showing-img\">\r\n        <img src=\"${currentImg}\" class=\"overlayImg\">\r\n    </div>\r\n        </div>\r\n    `;\r\n\r\n    bodyVariable.classList.add(\"overflow-hidden\");\r\n    bodyVariable.insertAdjacentHTML(\"afterbegin\", lightboxInnerTemplate);\r\n    //overlay selector, must come after\r\n    let overlay = document.querySelector(\".overlay\");\r\n    let arrowRight = document.querySelector(\".arrow-right\");\r\n    let arrowLeft = document.querySelector(\".arrow-left\");\r\n\r\n    let clickCloseLightbox = overlay.addEventListener(\"click\", (e) => {\r\n      removeLightboxFromDom(e.target);\r\n    });\r\n\r\n    let removeLightboxFromDom = (e) => {\r\n      if (\r\n        e.className != \"arrow-left\" &&\r\n        e.className != \"arrow-right\" &&\r\n        e.className != \"p-arrow-right\" &&\r\n        e.className != \"p-arrow-left\"\r\n      ) {\r\n        overlay.remove();\r\n        bodyVariable.classList.remove(\"overflow-hidden\");\r\n        document.removeEventListener(\"keydown\", keyNav);\r\n        arrowRight.removeEventListener(\"click\", keyNav);\r\n        arrowLeft.removeEventListener(\"click\", keyNav);\r\n        this.countKeyboardStrokes = 0;\r\n      }\r\n    };\r\n\r\n    let evaluated = false;\r\n    let evaluatePosition = () => {\r\n      if (\r\n        this.fullSizeImagesPaths.indexOf(\r\n          document.querySelector(\".overlayImg\").src\r\n        ) != 0 &&\r\n        evaluated === false\r\n      ) {\r\n        evaluated = true;\r\n        return (this.countKeyboardStrokes = this.fullSizeImagesPaths.indexOf(\r\n          document.querySelector(\".overlayImg\").src\r\n        ));\r\n      } else {\r\n        return this.countKeyboardStrokes;\r\n      }\r\n    };\r\n\r\n    let keyNav = (e) => {\r\n      if (\r\n        e.code === \"ArrowRight\" ||\r\n        e.target.className == \"arrow-right\" ||\r\n        e.target.className == \"p-arrow-right\"\r\n      ) {\r\n        evaluatePosition();\r\n\r\n        this.countKeyboardStrokes < this.fullSizeImagesPaths.length - 1\r\n          ? this.countKeyboardStrokes++\r\n          : null;\r\n\r\n        document.querySelector(\".overlayImg\").src = this.fullSizeImagesPaths[\r\n          this.countKeyboardStrokes\r\n        ];\r\n      } else if (\r\n        e.code === \"ArrowLeft\" ||\r\n        e.target.className == \"arrow-left\" ||\r\n        e.target.className == \"p-arrow-left\"\r\n      ) {\r\n        evaluatePosition();\r\n\r\n        this.countKeyboardStrokes > 0 ? this.countKeyboardStrokes-- : null;\r\n\r\n        document.querySelector(\".overlayImg\").src = this.fullSizeImagesPaths[\r\n          this.countKeyboardStrokes\r\n        ];\r\n      }\r\n\r\n      if (e.code === \"Escape\") {\r\n        removeLightboxFromDom();\r\n      }\r\n    };\r\n\r\n    document.addEventListener(\"keydown\", keyNav);\r\n    arrowRight.addEventListener(\"click\", keyNav);\r\n    arrowLeft.addEventListener(\"click\", keyNav);\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lightbox);\r\n\n\n//# sourceURL=webpack:///./src/modules/Lightbox.js?");

/***/ }),

/***/ "./src/modules/Thumbs.js":
/*!*******************************!*\
  !*** ./src/modules/Thumbs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//import { setOptions } from \"./Options\";\r\n\r\n//setOptions.fullSizePath = \"images/fullsize/\";\r\n//setOptions.baseURL = \"http://localhost:8080/\"; //this must be changed according to your URL\r\n\r\nclass Thumbs {\r\n  constructor() {\r\n    this.pathToFiles = setOptions.fullSizePath;\r\n    this.baseURL = setOptions.baseURL;\r\n    this.displayerDiv = document.querySelector(\".kubin-principal\");\r\n    this.liThumbs = document.querySelector(\".kubin-img-gallery\");\r\n    this.thumbsPosition;\r\n    this.fullSizePath;\r\n    this.listThumbsSrc();\r\n  }\r\n\r\n  listThumbsSrc() {\r\n    if (this.liThumbs !== undefined) {\r\n      this.liThumbsSrcArr = [];\r\n\r\n      for (let i = 0; i < this.liThumbs.childElementCount; i++) {\r\n        this.liThumbsSrcArr.push(this.liThumbs.children[i].children[0].src);\r\n      }\r\n\r\n      this.liThumbsSrcArr.length > 0 ? this.cleanPathsToFileNames() : null;\r\n    }\r\n  }\r\n\r\n  cleanPathsToFileNames() {\r\n    this.fileNames = [];\r\n\r\n    for (let i = 0; i < this.liThumbsSrcArr.length; i++) {\r\n      let splitedSrc = this.liThumbsSrcArr[i].split(\"/\").pop();\r\n      this.fileNames.push(splitedSrc);\r\n    }\r\n\r\n    return this.fileNames.length > 0 ? this.fileNames : null;\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Thumbs);\r\n\n\n//# sourceURL=webpack:///./src/modules/Thumbs.js?");

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