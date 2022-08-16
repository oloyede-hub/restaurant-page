/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bgimg.jfif */ "./src/assets/bgimg.jfif"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,*::after,*::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nul {\r\n    padding: 0;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\nli {\r\n    padding-inline: 30px;\r\n}\r\nli:hover a{\r\n    color: blue;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.597);\r\n    font-size: 24px;\r\n}\r\n\r\na.active {\r\n        background-color: #ccc;\r\n}\r\n\r\n/* .center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\nbody {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nheader {\r\n    background-color: rgba(255, 255, 255, 0.576);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-inline: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\na > img {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation:rotateY 2s infinite linear;\r\n}\r\n\r\n@keyframes rotateY {\r\n    0% {transform: rotateX(0deg) ;}\r\n    50% {transform: rotateX(30deg) ;}\r\n    100%{transform: rotateY(359deg);}\r\n}\r\n\r\n/* HOME */\r\n\r\n.container {\r\n    padding-block-start: 170px;\r\n}\r\n\r\n.home {\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\n\r\n.home-card.active {\r\n    max-width: 700px ;\r\n    margin: 0 auto;\r\n    background-color: rgba(240, 248, 255, 0.383);\r\n    padding-block: 40px;\r\n    padding-inline: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-block-end: 45px;\r\n}\r\n\r\n.home-card {\r\n    display: none;\r\n}\r\n\r\n.letter {\r\n    color: red ;\r\n}\r\n\r\n.heading {\r\n    font-size: 35px;\r\n    font-style: oblique;\r\n    color: rgba(31, 21, 21, 0.823);\r\n    font-weight: 700;\r\n\r\n}\r\n\r\n\r\n.page {\r\npadding-block: 10px;\r\nfont-size: 30px;\r\ncolor: red;\r\nfont-weight: 500;\r\n}\r\n\r\n\r\n.chef {\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 50%;\r\n    padding-block: 20px ;\r\n}\r\n\r\n/* MENU */\r\n\r\n.menu-card {\r\n    margin: 0 auto;\r\n    background-color: rgba(255, 255, 255, 0.525);\r\n    width: 595px;\r\n    height: 842px;\r\n    padding: 20px 20px;\r\n    font-size: 20px;\r\n    color: rgb(255, 255, 255);\r\n    display: none;\r\n}\r\n\r\n.menu-card.active {\r\n    display: block;\r\n}\r\n\r\n/* CONTACT */\r\n\r\n.contact-card {\r\n    margin: 0 auto;\r\n    background-color: rgba(255, 255, 255, 0.525);\r\n    width: 595px;\r\n    height: 842px;\r\n    padding: 20px 20px;\r\n    font-size: 20px;\r\n    color: rgb(255, 255, 255);\r\n    display: none;\r\n}\r\n\r\n.contact-card.active {\r\n    display: block;\r\n}\r\n\r\n.contact-chef  {\r\n    width: 200px;\r\n    height: 200px;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,UAAU;IACV,gBAAgB;IAChB,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,oBAAoB;AACxB;AACA;IACI,WAAW;AACf;AACA;IACI,qBAAqB;IACrB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;QACQ,sBAAsB;AAC9B;;AAEA;;;;GAIG;;AAEH;IACI,yDAA4C;IAC5C,4BAA4B;IAC5B,sBAAsB;AAC1B;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,IAAI,yBAAyB,CAAC;IAC9B,KAAK,0BAA0B,CAAC;IAChC,KAAK,0BAA0B,CAAC;AACpC;;AAEA,SAAS;;AAET;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;;AAEhB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,4CAA4C;IAC5C,mBAAmB;IACnB,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;;AAEpB;;;AAGA;AACA,mBAAmB;AACnB,eAAe;AACf,UAAU;AACV,gBAAgB;AAChB;;;AAGA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA,SAAS;;AAET;IACI,cAAc;IACd,4CAA4C;IAC5C,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA,YAAY;;AAEZ;IACI,cAAc;IACd,4CAA4C;IAC5C,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,aAAa;AACjB","sourcesContent":["*,*::after,*::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\nul {\r\n    padding: 0;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\nli {\r\n    padding-inline: 30px;\r\n}\r\nli:hover a{\r\n    color: blue;\r\n}\r\na {\r\n    text-decoration: none;\r\n    color: rgba(0, 0, 0, 0.597);\r\n    font-size: 24px;\r\n}\r\n\r\na.active {\r\n        background-color: #ccc;\r\n}\r\n\r\n/* .center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */\r\n\r\nbody {\r\n    background-image: url('./assets/bgimg.jfif');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nheader {\r\n    background-color: rgba(255, 255, 255, 0.576);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding-inline: 20px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\na > img {\r\n    width: 100px;\r\n    height: 100px;\r\n    animation:rotateY 2s infinite linear;\r\n}\r\n\r\n@keyframes rotateY {\r\n    0% {transform: rotateX(0deg) ;}\r\n    50% {transform: rotateX(30deg) ;}\r\n    100%{transform: rotateY(359deg);}\r\n}\r\n\r\n/* HOME */\r\n\r\n.container {\r\n    padding-block-start: 170px;\r\n}\r\n\r\n.home {\r\n    width: 100%;\r\n    height: 100%;\r\n    \r\n}\r\n\r\n.home-card.active {\r\n    max-width: 700px ;\r\n    margin: 0 auto;\r\n    background-color: rgba(240, 248, 255, 0.383);\r\n    padding-block: 40px;\r\n    padding-inline: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-block-end: 45px;\r\n}\r\n\r\n.home-card {\r\n    display: none;\r\n}\r\n\r\n.letter {\r\n    color: red ;\r\n}\r\n\r\n.heading {\r\n    font-size: 35px;\r\n    font-style: oblique;\r\n    color: rgba(31, 21, 21, 0.823);\r\n    font-weight: 700;\r\n\r\n}\r\n\r\n\r\n.page {\r\npadding-block: 10px;\r\nfont-size: 30px;\r\ncolor: red;\r\nfont-weight: 500;\r\n}\r\n\r\n\r\n.chef {\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 50%;\r\n    padding-block: 20px ;\r\n}\r\n\r\n/* MENU */\r\n\r\n.menu-card {\r\n    margin: 0 auto;\r\n    background-color: rgba(255, 255, 255, 0.525);\r\n    width: 595px;\r\n    height: 842px;\r\n    padding: 20px 20px;\r\n    font-size: 20px;\r\n    color: rgb(255, 255, 255);\r\n    display: none;\r\n}\r\n\r\n.menu-card.active {\r\n    display: block;\r\n}\r\n\r\n/* CONTACT */\r\n\r\n.contact-card {\r\n    margin: 0 auto;\r\n    background-color: rgba(255, 255, 255, 0.525);\r\n    width: 595px;\r\n    height: 842px;\r\n    padding: 20px 20px;\r\n    font-size: 20px;\r\n    color: rgb(255, 255, 255);\r\n    display: none;\r\n}\r\n\r\n.contact-card.active {\r\n    display: block;\r\n}\r\n\r\n.contact-chef  {\r\n    width: 200px;\r\n    height: 200px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/pageLoad.js":
/*!********************************!*\
  !*** ./src/assets/pageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function pageLoad() {
    console.log(123)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);

/***/ }),

/***/ "./src/changeTab.js":
/*!**************************!*\
  !*** ./src/changeTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changeTab(evt, id) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("container");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.querySelectorAll("[data-navlink]");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTab);

/***/ }),

/***/ "./src/generateContact.js":
/*!********************************!*\
  !*** ./src/generateContact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genrateContact = (Chef) => {
    const contact = document.createElement('div');
    const contactCard = document.createElement('div');       
    const div = document.createElement('div');       
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const img = document.createElement('img');

    contact.setAttribute("class", "container");
    contact.setAttribute("id", "contact");
    contactCard.setAttribute("class", "contact-card active");
    h3.setAttribute('class', "heading")
    p.setAttribute('class', "page")
    p1.setAttribute('class', "page")
    p2.setAttribute('class', "page")
    img.setAttribute('class', "contact-chef")


    h3.innerHTML = "Buore Restaurant";
    p.innerHTML = "The most sopishisticated sophisticated restaurant in town and beyond!"
    p1.innerHTML = "Get in touch with us with the following contacts!"
    p2.innerHTML = "09034577387"
    img.src = Chef;

    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(h3);
    contactCard.appendChild(div);
    contactCard.appendChild(img);
    contactCard.appendChild(p);
    contact.appendChild(contactCard);
    return contact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genrateContact);

/***/ }),

/***/ "./src/generateHome.js":
/*!*****************************!*\
  !*** ./src/generateHome.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const genrateHome = (Chef) => {
    const home = document.createElement('div');
    const homeCard = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const span = document.createElement('span');

    home.setAttribute("class", "container");
    home.setAttribute("id", "home");
    span.setAttribute("class", "letter");
    homeCard.setAttribute("class", "home-card active");
    h3.setAttribute('class', "heading")
    p.setAttribute('class', "page")
    img.setAttribute('class', "chef")

    span.innerHTML = "Buore Restaurant"
    h3.innerHTML = "You are welcome to " + span.innerHTML + "!";
    p.innerHTML = "What can we offer you?"
    img.src = Chef;



    homeCard.appendChild(h3);
    homeCard.appendChild(img);
    homeCard.appendChild(p);
    home.appendChild(homeCard);
    return home;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (genrateHome);

/***/ }),

/***/ "./src/generateMenu.js":
/*!*****************************!*\
  !*** ./src/generateMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateMenu = () => {

    const menu = document.createElement('div');
    const menuCard = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const span = document.createElement('span');

    menu.setAttribute("class", "container");
    menuCard.setAttribute("class", "menu-card active");
    menu.setAttribute("id", "menu");

    
    menuCard.innerHTML = "Something must show"
    



    menu.appendChild(menuCard);
    return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ }),

/***/ "./src/makeHeader.js":
/*!***************************!*\
  !*** ./src/makeHeader.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");

const makeHeader = () => {
    const header = document.createElement("header");
    const a = document.createElement("a");
    const img = document.createElement("img");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("li");
    const menu = document.createElement("li");
    const contact = document.createElement("li");
    const aHome = document.createElement("a");
    const aMenu = document.createElement("a");
    const aContact = document.createElement("a");



    img.setAttribute("id", "logo")
    ul.classList.add("nav-list")
    aHome.setAttribute("data-navlink",'')
    aMenu.setAttribute("data-navlink",'')
    aContact.setAttribute("data-navlink",'')
    aHome.setAttribute("id",'home');
    aMenu.setAttribute("id",'menu');
    aContact.setAttribute("id",'contact');
    contact.classList.add("navlink");
    menu.classList.add("navlink");
    home.classList.add("navlink");
    img.src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_0__;
    aHome.innerHTML = "Home"
    aMenu.innerHTML = "Menu"
    aContact.innerHTML = "Contact";

    home.appendChild(aHome)
    menu.appendChild(aMenu)
    contact.appendChild(aContact)
    ul.appendChild(home)
    ul.appendChild(menu)
    ul.appendChild(contact);
    nav.appendChild(ul)
    a.appendChild(img)
    header.appendChild(a)
    header.appendChild(nav)

    return header;

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHeader);

/***/ }),

/***/ "./src/assets/bgimg.jfif":
/*!*******************************!*\
  !*** ./src/assets/bgimg.jfif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "18632752f8b5239ec4a8.jfif";

/***/ }),

/***/ "./src/assets/chefwoman.png":
/*!**********************************!*\
  !*** ./src/assets/chefwoman.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e41ff2e0c6d4e921389.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3926f86d3ca295ed9234.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pageLoad */ "./src/assets/pageLoad.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_chefwoman_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/chefwoman.png */ "./src/assets/chefwoman.png");
/* harmony import */ var _makeHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeHeader */ "./src/makeHeader.js");
/* harmony import */ var _generateHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateHome */ "./src/generateHome.js");
/* harmony import */ var _changeTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeTab */ "./src/changeTab.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _generateMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generateMenu */ "./src/generateMenu.js");
/* harmony import */ var _generateContact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generateContact */ "./src/generateContact.js");



// import Chef from "./assets/chef.jfif"







document.querySelector('body').appendChild((0,_makeHeader__WEBPACK_IMPORTED_MODULE_3__["default"])());
const content = document.querySelector('.content')
content.appendChild((0,_generateHome__WEBPACK_IMPORTED_MODULE_4__["default"])(_assets_chefwoman_png__WEBPACK_IMPORTED_MODULE_2__));
content.appendChild((0,_generateMenu__WEBPACK_IMPORTED_MODULE_7__["default"])())
content.appendChild((0,_generateContact__WEBPACK_IMPORTED_MODULE_8__["default"])(_assets_chefwoman_png__WEBPACK_IMPORTED_MODULE_2__))


// Change Tab 

const tablinks = document.querySelectorAll("[data-navlink]");

tablinks.forEach(link => {
    link.addEventListener("click",(evt) => (0,_changeTab__WEBPACK_IMPORTED_MODULE_5__["default"])(evt, link.id),false);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map