/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styling.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styling.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Raleway:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: \"Raleway\", sans-serif;\n\n\t--bright-pink: #ff414e;\n\t--orange: #ff8928;\n\t--yellow: #ffde22;\n\t--white: #ffffff;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\nmain {\n\tbackground-color: var(--yellow);\n\tpadding: 20px 76.3px;\n\tflex: 1;\n}\n\n.header {\n\tdisplay: flex;\n\tpadding: 2vw 10vw 2vw 10vw;\n\talign-items: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n}\nh1 {\n\tflex: 3;\n}\n.material-symbols-outlined {\n\tfont-size: inherit;\n\tpadding: 0 10px;\n\tfont-weight: inherit;\n}\n\n.popUp {\n\tposition: absolute;\n\ttext-align: center;\n\twidth: 100%;\n\tz-index: 5;\n}\n\n.formPopup {\n\tdisplay: none;\n\tposition: relative;\n\tleft: 50%;\n\tmargin-left: -200px;\n\tborder: 3px solid var(--orange);\n\tbackground-color: white;\n\twidth: 400px;\n\tpadding: 20px;\n\tborder-radius: 15px;\n\tmargin-top: 50px;\n\ttext-align: start;\n}\n\n.changeReadStatus {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.changeReadStatus > div {\n\tflex: 1;\n}\n\n/* The switch - the box around the slider */\n.switch {\n\tposition: relative;\n\tright: 0px;\n\tdisplay: inline-block;\n\twidth: 60px;\n\theight: 34px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n/* The slider */\n.slider {\n\tposition: absolute;\n\tcursor: pointer;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--yellow);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\n.slider:before {\n\tposition: absolute;\n\tcontent: \"\";\n\theight: 26px;\n\twidth: 26px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: white;\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\ninput:checked + .slider {\n\tbackground-color: var(--orange);\n}\n\ninput:focus + .slider {\n\tbox-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n\t-webkit-transform: translateX(26px);\n\t-ms-transform: translateX(26px);\n\ttransform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n\tborder-radius: 34px;\n}\n\n.slider.round:before {\n\tborder-radius: 50%;\n}\n\nform {\n\tflex: 1;\n}\n\n.inputItem > input {\n\tflex: 1; \n\tcolor: black;\n\tbackground: var(--white);\n\theight: 34px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tborder-radius: 4px;\n\tborder: 2px solid;\n\tborder-color: var(--orange);\n\ttext-align: start;\n\toutline: none;\n\tmax-width: 280px;\n\twidth: fit-content;\n}\n\n.inputItem {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 10px; \n}\n\ninput:focus {\n\tborder-color: var(--bright-pink);\n}\n\nh3 {\n\tpadding: 15px 0;\n}\n\n.bookDisplay {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1fr);\n\tgrid-template-columns: repeat(2, minmax(150px, 300px));\n\tgap: 15px;\n\tmargin-top: 30px;\n\tjustify-content: center;\n}\n\n.bookDisplay > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tborder: 2px solid var(--orange);\n\tborder-radius: 15px;\n\tpadding: 20px;\n\tgap: 10px;\n\tbackground-color: var(--white);\n\tcolor: black;\n\tfont-weight: 600;\n}\n\n.buttons > button,\n.submitButton,\n.closeFormButton {\n\tpadding: 10px;\n\tborder: none;\n\tcolor: white;\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\tword-wrap: normal;\n} \n.buttons {\n\talign-self: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tgap: 10px;\n}\n.buttons > button {\n\talign-self: center;\n\tflex: 1;\n\ttext-align: center;\n\twidth: 100%;\n\tfont-weight: 600;\n}\n\n.popupButtons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n}\n.popupButtons > button {\t\n\tmin-width: 8em;\n}\n\nbutton:active {\n\tbox-shadow: 0 5px var(--yellow);\n\ttransform: translateY(4px);\n}\n\n.inputContainer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\nbutton {\n\tbox-shadow: 0 9px var(--white);\n}\n\nbutton.newBook {\n\tpadding: 15px 25px;\n\tborder: none;\n\tcolor: var(--white);\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\talign-self: center;\n\tfont-size: 1.5em;\n\tfont-weight: 500;\n}\n\ninput[type=\"checkbox\"] {\n\taccent-color: var(--bright-pink);\n\tborder: none;\n}\n\nfooter {\n\ttext-align: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n\tpadding: 10px;\n}\n\na {\n\tcolor: white;\n}\n", "",{"version":3,"sources":["webpack://./src/styling.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Raleway:wght@200&display=swap\");\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: \"Raleway\", sans-serif;\n\n\t--bright-pink: #ff414e;\n\t--orange: #ff8928;\n\t--yellow: #ffde22;\n\t--white: #ffffff;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\nmain {\n\tbackground-color: var(--yellow);\n\tpadding: 20px 76.3px;\n\tflex: 1;\n}\n\n.header {\n\tdisplay: flex;\n\tpadding: 2vw 10vw 2vw 10vw;\n\talign-items: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n}\nh1 {\n\tflex: 3;\n}\n.material-symbols-outlined {\n\tfont-size: inherit;\n\tpadding: 0 10px;\n\tfont-weight: inherit;\n}\n\n.popUp {\n\tposition: absolute;\n\ttext-align: center;\n\twidth: 100%;\n\tz-index: 5;\n}\n\n.formPopup {\n\tdisplay: none;\n\tposition: relative;\n\tleft: 50%;\n\tmargin-left: -200px;\n\tborder: 3px solid var(--orange);\n\tbackground-color: white;\n\twidth: 400px;\n\tpadding: 20px;\n\tborder-radius: 15px;\n\tmargin-top: 50px;\n\ttext-align: start;\n}\n\n.changeReadStatus {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.changeReadStatus > div {\n\tflex: 1;\n}\n\n/* The switch - the box around the slider */\n.switch {\n\tposition: relative;\n\tright: 0px;\n\tdisplay: inline-block;\n\twidth: 60px;\n\theight: 34px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n/* The slider */\n.slider {\n\tposition: absolute;\n\tcursor: pointer;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--yellow);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\n.slider:before {\n\tposition: absolute;\n\tcontent: \"\";\n\theight: 26px;\n\twidth: 26px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: white;\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\ninput:checked + .slider {\n\tbackground-color: var(--orange);\n}\n\ninput:focus + .slider {\n\tbox-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n\t-webkit-transform: translateX(26px);\n\t-ms-transform: translateX(26px);\n\ttransform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n\tborder-radius: 34px;\n}\n\n.slider.round:before {\n\tborder-radius: 50%;\n}\n\nform {\n\tflex: 1;\n}\n\n.inputItem > input {\n\tflex: 1; \n\tcolor: black;\n\tbackground: var(--white);\n\theight: 34px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tborder-radius: 4px;\n\tborder: 2px solid;\n\tborder-color: var(--orange);\n\ttext-align: start;\n\toutline: none;\n\tmax-width: 280px;\n\twidth: fit-content;\n}\n\n.inputItem {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 10px; \n}\n\ninput:focus {\n\tborder-color: var(--bright-pink);\n}\n\nh3 {\n\tpadding: 15px 0;\n}\n\n.bookDisplay {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1fr);\n\tgrid-template-columns: repeat(2, minmax(150px, 300px));\n\tgap: 15px;\n\tmargin-top: 30px;\n\tjustify-content: center;\n}\n\n.bookDisplay > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tborder: 2px solid var(--orange);\n\tborder-radius: 15px;\n\tpadding: 20px;\n\tgap: 10px;\n\tbackground-color: var(--white);\n\tcolor: black;\n\tfont-weight: 600;\n}\n\n.buttons > button,\n.submitButton,\n.closeFormButton {\n\tpadding: 10px;\n\tborder: none;\n\tcolor: white;\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\tword-wrap: normal;\n} \n.buttons {\n\talign-self: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tgap: 10px;\n}\n.buttons > button {\n\talign-self: center;\n\tflex: 1;\n\ttext-align: center;\n\twidth: 100%;\n\tfont-weight: 600;\n}\n\n.popupButtons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n}\n.popupButtons > button {\t\n\tmin-width: 8em;\n}\n\nbutton:active {\n\tbox-shadow: 0 5px var(--yellow);\n\ttransform: translateY(4px);\n}\n\n.inputContainer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\nbutton {\n\tbox-shadow: 0 9px var(--white);\n}\n\nbutton.newBook {\n\tpadding: 15px 25px;\n\tborder: none;\n\tcolor: var(--white);\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\talign-self: center;\n\tfont-size: 1.5em;\n\tfont-weight: 500;\n}\n\ninput[type=\"checkbox\"] {\n\taccent-color: var(--bright-pink);\n\tborder: none;\n}\n\nfooter {\n\ttext-align: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n\tpadding: 10px;\n}\n\na {\n\tcolor: white;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styling.css":
/*!*************************!*\
  !*** ./src/styling.css ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styling_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styling.css */ "./node_modules/css-loader/dist/cjs.js!./src/styling.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styling_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/DomManipulation.js":
/*!****************************************!*\
  !*** ./src/modules/DomManipulation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Library */ "./src/modules/Library.js");

// import formValidation from "../utils/formValidation";

const libraryDisplay = document.querySelector(".bookDisplay");
//1. The'NEW BOOK' button brings up a form allowing users to input the details for the new book: author, title, number of pages,whether it’s been read and anything else you might want.
const newBookButton = document.querySelector(".newBook");
const popUpForm = document.querySelector(".formPopup");
//const submitButton = document.querySelector(".submitButton");
const form = document.querySelector("form");
const bodyTag = document.querySelector("body");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");

function initializeListeners() {
	//2. Brings up form
	newBookButton.addEventListener("click", function () {
		popUpForm.style.display = "block";
	});
	//3. User puts inputs into form
	//4. User submits inputs
	form.addEventListener("submit", function () {
		getUserInput();
		closePopUp();
	});
}

function loadFooter() {
	const currentYear = new Date().getFullYear();
	const footer = document.createElement("footer");
	const footerContent = document.createElement("div");
	footerContent.innerHTML = `Author: Sophia <a href="https://github.com/sophiavf">GitHub</a> &copy ${currentYear}`;
	footer.appendChild(footerContent);
	bodyTag.append(footer);
}

function displayBooks() {
	libraryDisplay.innerHTML = "";
	//Loops through books
	_Library__WEBPACK_IMPORTED_MODULE_0__["default"].myLibrary.forEach((book) => {
		if (document.querySelector(`.${book.title}`) !== null) {
			return;
		} else {
			let newBookElement = document.createElement("div");
			newBookElement.classList.add(`${book.title}`, "bookContainer");

			newBookElement.innerHTML = `<div>${book.title} <br>Author: ${book.author} <br>Page(s): ${book.pages}</div>`;

			let removeBookButton = document.createElement("button");
			removeBookButton.classList.add(`${book.title}`, "removeBookButton");
			removeBookButton.innerHTML =
				'<span class="material-symbols-outlined">delete</span>Remove book';
			removeBookButton.setAttribute("id", `${book.title}`);

			let readElement = document.createElement("div");
			readElement.classList.add("changeReadStatus");
			readElement.setAttribute("id", `${book.title}`);
			readElement.innerHTML = `<div>Read: </div><label id="#${book.title}" class="switch"><input class="readToggle" id="${book.title}" type="checkbox" /><span class="slider round"></span></label>`;

			let buttons = document.createElement("div");
			buttons.classList.add("buttons");
			buttons.append(readElement, removeBookButton);

			newBookElement.appendChild(buttons);
			//Displays each book on the page
			libraryDisplay.appendChild(newBookElement);
			checkBoxConfig(book);
		}
	});
}
//Changes the checkbox status of the newly created book element based on what is stored in the object
function checkBoxConfig(book) {
	const bookReadToggle = document.querySelector(`input#${book.title}`);
	if (book.read === true) {
		bookReadToggle.checked = true;
	} else {
		bookReadToggle.checked = false;
	}
}

//5. Program takes user input from form and add's it to the library
function getUserInput() {
	_Library__WEBPACK_IMPORTED_MODULE_0__["default"].addBookToLibrary(
		title.value,
		author.value,
		pages.value,
		read.checked
	);
	displayBooks();
}

document
	.querySelector(".closeFormButton")
	.addEventListener("click", closePopUp);

function closePopUp() {
	popUpForm.style.display = "none";
}

function removeBook(event) {
	let bookToRemove = event.target.id;
	_Library__WEBPACK_IMPORTED_MODULE_0__["default"].removeBookFromLibrary(bookToRemove);
	displayBooks();
}

//Changing the read status
function changeReadStatus(event) {
	if (event.target.classList.contains("readToggle")) {
		let bookToUpdate = event.target.id;
		_Library__WEBPACK_IMPORTED_MODULE_0__["default"].changeReadStatus(bookToUpdate);
		displayBooks();
	} else {
		return;
	}
}

//Read status & remove button

document.addEventListener("click", buttonListener);
document.addEventListener("change", changeReadStatus);

function buttonListener(event) {
	var element = event.target;
	if (element.classList.contains("removeBookButton")) {
		removeBook(event);
		displayBooks();
	} else {
		return;
	}
}

//Custom validationMessages
//Title
title.addEventListener("input", (event) => {
	if (title.checkValidity()) {
		title.setCustomValidity("");
	} else {
		title.setCustomValidity("Please provide a book title");
	}
});
//Author
author.addEventListener("input", (event) => {
	if (author.checkValidity()) {
		author.setCustomValidity("");
	} else {
		author.setCustomValidity("Please provide a book author");
	}
});
//Pages
pages.addEventListener("input", (event) => {
	if (pages.checkValidity()) {
		pages.setCustomValidity("");
	} else {
		pages.setCustomValidity("Please provide the number of pages");
	}
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ initializeListeners, loadFooter, displayBooks });


/***/ }),

/***/ "./src/modules/Library.js":
/*!********************************!*\
  !*** ./src/modules/Library.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let myLibrary = [];

// the book constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.reportInfo = function () {
		return `${title} by ${author}, ${pages} pages, ${read} read yet`;
	};
}

function addBookToLibrary(title, author, pages, read) {
	//4. store the new book objects into an array
	let book = new Book(title, author, pages, read);
	this.book = book;
	myLibrary.push(book);
}

function removeBookFromLibrary(bookToRemove) {
	let bookIndex = getBookIndex(bookToRemove);
	myLibrary.splice(bookIndex, 1);
}

function changeReadStatus(bookToUpdate) {
	let bookIndex = getBookIndex(bookToUpdate);
	if (myLibrary[bookIndex].read == true) {
		myLibrary[bookIndex].read = false;
	} else {
		myLibrary[bookIndex].read = true;
	}
}

function getBookIndex(bookToFind) {
	return myLibrary.findIndex((book) => book.title === bookToFind);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	Book,
	addBookToLibrary,
	myLibrary,
	removeBookFromLibrary,
	changeReadStatus,
});


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
/* harmony import */ var _styling_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styling.css */ "./src/styling.css");
/* harmony import */ var _modules_DomManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DomManipulation */ "./src/modules/DomManipulation.js");
/* harmony import */ var _modules_Library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Library */ "./src/modules/Library.js");




_modules_DomManipulation__WEBPACK_IMPORTED_MODULE_1__["default"].initializeListeners();
_modules_DomManipulation__WEBPACK_IMPORTED_MODULE_1__["default"].loadFooter();
_modules_DomManipulation__WEBPACK_IMPORTED_MODULE_1__["default"].displayBooks(); 


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLEtBQUssVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFB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Ozs7Ozs7O0FDQXVCO0FBQ2lDO0FBQ2hCOztBQUV4QyxvRkFBbUM7QUFDbkMsMkVBQTBCO0FBQzFCLDZFQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy9zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy9zdHlsaW5nLmNzcz9jNWZlIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL21vZHVsZXMvRG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy9tb2R1bGVzL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAmZmFtaWx5PVJhbGV3YXk6d2dodEAyMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG5cXHQtLWJyaWdodC1waW5rOiAjZmY0MTRlO1xcblxcdC0tb3JhbmdlOiAjZmY4OTI4O1xcblxcdC0teWVsbG93OiAjZmZkZTIyO1xcblxcdC0td2hpdGU6ICNmZmZmZmY7XFxufVxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5tYWluIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcblxcdHBhZGRpbmc6IDIwcHggNzYuM3B4O1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogMnZ3IDEwdncgMnZ3IDEwdnc7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtcGluayk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5oMSB7XFxuXFx0ZmxleDogMztcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5wb3BVcCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR6LWluZGV4OiA1O1xcbn1cXG5cXG4uZm9ybVBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0bWFyZ2luLWxlZnQ6IC0yMDBweDtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXG5cXHR0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmNoYW5nZVJlYWRTdGF0dXMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoYW5nZVJlYWRTdGF0dXMgPiBkaXYge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHJpZ2h0OiAwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogMzRweDtcXG59XFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMDtcXG59XFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcblxcdHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0aGVpZ2h0OiAyNnB4O1xcblxcdHdpZHRoOiAyNnB4O1xcblxcdGxlZnQ6IDRweDtcXG5cXHRib3R0b206IDRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuXFx0dHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDFweCAjMjE5NmYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5mb3JtIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uaW5wdXRJdGVtID4gaW5wdXQge1xcblxcdGZsZXg6IDE7IFxcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0aGVpZ2h0OiAzNHB4O1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZDtcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0dGV4dC1hbGlnbjogc3RhcnQ7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRtYXgtd2lkdGg6IDI4MHB4O1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmlucHV0SXRlbSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDEwcHg7IFxcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1icmlnaHQtcGluayk7XFxufVxcblxcbmgzIHtcXG5cXHRwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5ib29rRGlzcGxheSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNTBweCwgMzAwcHgpKTtcXG5cXHRnYXA6IDE1cHg7XFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvb2tEaXNwbGF5ID4gZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idXR0b25zID4gYnV0dG9uLFxcbi5zdWJtaXRCdXR0b24sXFxuLmNsb3NlRm9ybUJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHR3b3JkLXdyYXA6IG5vcm1hbDtcXG59IFxcbi5idXR0b25zIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGdhcDogMTBweDtcXG59XFxuLmJ1dHRvbnMgPiBidXR0b24ge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmbGV4OiAxO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucG9wdXBCdXR0b25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG4ucG9wdXBCdXR0b25zID4gYnV0dG9uIHtcXHRcXG5cXHRtaW4td2lkdGg6IDhlbTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuXFx0Ym94LXNoYWRvdzogMCA1cHggdmFyKC0teWVsbG93KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLmlucHV0Q29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3gtc2hhZG93OiAwIDlweCB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmJ1dHRvbi5uZXdCb29rIHtcXG5cXHRwYWRkaW5nOiAxNXB4IDI1cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdGFjY2VudC1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0NBQWtDOztDQUVsQyxzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQywrQkFBK0I7Q0FDL0Isb0JBQW9CO0NBQ3BCLE9BQU87QUFDUjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLE9BQU87QUFDUjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7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QTtDQUNDLGdDQUFnQztDQUNoQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0NBQW9DO0NBQ3BDLFlBQVk7Q0FDWixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAmZmFtaWx5PVJhbGV3YXk6d2dodEAyMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG5cXHQtLWJyaWdodC1waW5rOiAjZmY0MTRlO1xcblxcdC0tb3JhbmdlOiAjZmY4OTI4O1xcblxcdC0teWVsbG93OiAjZmZkZTIyO1xcblxcdC0td2hpdGU6ICNmZmZmZmY7XFxufVxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5tYWluIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcblxcdHBhZGRpbmc6IDIwcHggNzYuM3B4O1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogMnZ3IDEwdncgMnZ3IDEwdnc7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtcGluayk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5oMSB7XFxuXFx0ZmxleDogMztcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5wb3BVcCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR6LWluZGV4OiA1O1xcbn1cXG5cXG4uZm9ybVBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0bWFyZ2luLWxlZnQ6IC0yMDBweDtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdHdpZHRoOiA0MDBweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0bWFyZ2luLXRvcDogNTBweDtcXG5cXHR0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmNoYW5nZVJlYWRTdGF0dXMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNoYW5nZVJlYWRTdGF0dXMgPiBkaXYge1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi8qIFRoZSBzd2l0Y2ggLSB0aGUgYm94IGFyb3VuZCB0aGUgc2xpZGVyICovXFxuLnN3aXRjaCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHJpZ2h0OiAwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHdpZHRoOiA2MHB4O1xcblxcdGhlaWdodDogMzRweDtcXG59XFxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cXG4uc3dpdGNoIGlucHV0IHtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHdpZHRoOiAwO1xcblxcdGhlaWdodDogMDtcXG59XFxuLyogVGhlIHNsaWRlciAqL1xcbi5zbGlkZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdyk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcblxcdHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0aGVpZ2h0OiAyNnB4O1xcblxcdHdpZHRoOiAyNnB4O1xcblxcdGxlZnQ6IDRweDtcXG5cXHRib3R0b206IDRweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuXFx0dHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxufVxcblxcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XFxuXFx0Ym94LXNoYWRvdzogMCAwIDFweCAjMjE5NmYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG5cXHRib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5mb3JtIHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uaW5wdXRJdGVtID4gaW5wdXQge1xcblxcdGZsZXg6IDE7IFxcblxcdGNvbG9yOiBibGFjaztcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0aGVpZ2h0OiAzNHB4O1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZDtcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0dGV4dC1hbGlnbjogc3RhcnQ7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRtYXgtd2lkdGg6IDI4MHB4O1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmlucHV0SXRlbSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDEwcHg7IFxcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1icmlnaHQtcGluayk7XFxufVxcblxcbmgzIHtcXG5cXHRwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5ib29rRGlzcGxheSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNTBweCwgMzAwcHgpKTtcXG5cXHRnYXA6IDE1cHg7XFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvb2tEaXNwbGF5ID4gZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idXR0b25zID4gYnV0dG9uLFxcbi5zdWJtaXRCdXR0b24sXFxuLmNsb3NlRm9ybUJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHR3b3JkLXdyYXA6IG5vcm1hbDtcXG59IFxcbi5idXR0b25zIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGdhcDogMTBweDtcXG59XFxuLmJ1dHRvbnMgPiBidXR0b24ge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmbGV4OiAxO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucG9wdXBCdXR0b25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG4ucG9wdXBCdXR0b25zID4gYnV0dG9uIHtcXHRcXG5cXHRtaW4td2lkdGg6IDhlbTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuXFx0Ym94LXNoYWRvdzogMCA1cHggdmFyKC0teWVsbG93KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLmlucHV0Q29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3gtc2hhZG93OiAwIDlweCB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmJ1dHRvbi5uZXdCb29rIHtcXG5cXHRwYWRkaW5nOiAxNXB4IDI1cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdGFjY2VudC1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxpbmcuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsaW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExpYnJhcnkgZnJvbSBcIi4vTGlicmFyeVwiO1xuLy8gaW1wb3J0IGZvcm1WYWxpZGF0aW9uIGZyb20gXCIuLi91dGlscy9mb3JtVmFsaWRhdGlvblwiO1xuXG5jb25zdCBsaWJyYXJ5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9va0Rpc3BsYXlcIik7XG4vLzEuIFRoZSdORVcgQk9PSycgYnV0dG9uIGJyaW5ncyB1cCBhIGZvcm0gYWxsb3dpbmcgdXNlcnMgdG8gaW5wdXQgdGhlIGRldGFpbHMgZm9yIHRoZSBuZXcgYm9vazogYXV0aG9yLCB0aXRsZSwgbnVtYmVyIG9mIHBhZ2VzLHdoZXRoZXIgaXTigJlzIGJlZW4gcmVhZCBhbmQgYW55dGhpbmcgZWxzZSB5b3UgbWlnaHQgd2FudC5cbmNvbnN0IG5ld0Jvb2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld0Jvb2tcIik7XG5jb25zdCBwb3BVcEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1Qb3B1cFwiKTtcbi8vY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRCdXR0b25cIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKTtcbmNvbnN0IGF1dGhvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXV0aG9yXCIpO1xuY29uc3QgcGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhZ2VzXCIpO1xuY29uc3QgcmVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVhZFwiKTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUxpc3RlbmVycygpIHtcblx0Ly8yLiBCcmluZ3MgdXAgZm9ybVxuXHRuZXdCb29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0cG9wVXBGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdH0pO1xuXHQvLzMuIFVzZXIgcHV0cyBpbnB1dHMgaW50byBmb3JtXG5cdC8vNC4gVXNlciBzdWJtaXRzIGlucHV0c1xuXHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKCkge1xuXHRcdGdldFVzZXJJbnB1dCgpO1xuXHRcdGNsb3NlUG9wVXAoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG5cdGNvbnN0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXHRjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuXHRjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Zm9vdGVyQ29udGVudC5pbm5lckhUTUwgPSBgQXV0aG9yOiBTb3BoaWEgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zb3BoaWF2ZlwiPkdpdEh1YjwvYT4gJmNvcHkgJHtjdXJyZW50WWVhcn1gO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG5cdGJvZHlUYWcuYXBwZW5kKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb29rcygpIHtcblx0bGlicmFyeURpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcblx0Ly9Mb29wcyB0aHJvdWdoIGJvb2tzXG5cdExpYnJhcnkubXlMaWJyYXJ5LmZvckVhY2goKGJvb2spID0+IHtcblx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9vay50aXRsZX1gKSAhPT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbmV3Qm9va0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0bmV3Qm9va0VsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtib29rLnRpdGxlfWAsIFwiYm9va0NvbnRhaW5lclwiKTtcblxuXHRcdFx0bmV3Qm9va0VsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXY+JHtib29rLnRpdGxlfSA8YnI+QXV0aG9yOiAke2Jvb2suYXV0aG9yfSA8YnI+UGFnZShzKTogJHtib29rLnBhZ2VzfTwvZGl2PmA7XG5cblx0XHRcdGxldCByZW1vdmVCb29rQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0XHRcdHJlbW92ZUJvb2tCdXR0b24uY2xhc3NMaXN0LmFkZChgJHtib29rLnRpdGxlfWAsIFwicmVtb3ZlQm9va0J1dHRvblwiKTtcblx0XHRcdHJlbW92ZUJvb2tCdXR0b24uaW5uZXJIVE1MID1cblx0XHRcdFx0JzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRlbGV0ZTwvc3Bhbj5SZW1vdmUgYm9vayc7XG5cdFx0XHRyZW1vdmVCb29rQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2Jvb2sudGl0bGV9YCk7XG5cblx0XHRcdGxldCByZWFkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRyZWFkRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlUmVhZFN0YXR1c1wiKTtcblx0XHRcdHJlYWRFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2Jvb2sudGl0bGV9YCk7XG5cdFx0XHRyZWFkRWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdj5SZWFkOiA8L2Rpdj48bGFiZWwgaWQ9XCIjJHtib29rLnRpdGxlfVwiIGNsYXNzPVwic3dpdGNoXCI+PGlucHV0IGNsYXNzPVwicmVhZFRvZ2dsZVwiIGlkPVwiJHtib29rLnRpdGxlfVwiIHR5cGU9XCJjaGVja2JveFwiIC8+PHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+PC9sYWJlbD5gO1xuXG5cdFx0XHRsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuXHRcdFx0YnV0dG9ucy5hcHBlbmQocmVhZEVsZW1lbnQsIHJlbW92ZUJvb2tCdXR0b24pO1xuXG5cdFx0XHRuZXdCb29rRWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcblx0XHRcdC8vRGlzcGxheXMgZWFjaCBib29rIG9uIHRoZSBwYWdlXG5cdFx0XHRsaWJyYXJ5RGlzcGxheS5hcHBlbmRDaGlsZChuZXdCb29rRWxlbWVudCk7XG5cdFx0XHRjaGVja0JveENvbmZpZyhib29rKTtcblx0XHR9XG5cdH0pO1xufVxuLy9DaGFuZ2VzIHRoZSBjaGVja2JveCBzdGF0dXMgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgYm9vayBlbGVtZW50IGJhc2VkIG9uIHdoYXQgaXMgc3RvcmVkIGluIHRoZSBvYmplY3RcbmZ1bmN0aW9uIGNoZWNrQm94Q29uZmlnKGJvb2spIHtcblx0Y29uc3QgYm9va1JlYWRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke2Jvb2sudGl0bGV9YCk7XG5cdGlmIChib29rLnJlYWQgPT09IHRydWUpIHtcblx0XHRib29rUmVhZFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRib29rUmVhZFRvZ2dsZS5jaGVja2VkID0gZmFsc2U7XG5cdH1cbn1cblxuLy81LiBQcm9ncmFtIHRha2VzIHVzZXIgaW5wdXQgZnJvbSBmb3JtIGFuZCBhZGQncyBpdCB0byB0aGUgbGlicmFyeVxuZnVuY3Rpb24gZ2V0VXNlcklucHV0KCkge1xuXHRMaWJyYXJ5LmFkZEJvb2tUb0xpYnJhcnkoXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0YXV0aG9yLnZhbHVlLFxuXHRcdHBhZ2VzLnZhbHVlLFxuXHRcdHJlYWQuY2hlY2tlZFxuXHQpO1xuXHRkaXNwbGF5Qm9va3MoKTtcbn1cblxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VGb3JtQnV0dG9uXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3BVcCk7XG5cbmZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XG5cdHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2soZXZlbnQpIHtcblx0bGV0IGJvb2tUb1JlbW92ZSA9IGV2ZW50LnRhcmdldC5pZDtcblx0TGlicmFyeS5yZW1vdmVCb29rRnJvbUxpYnJhcnkoYm9va1RvUmVtb3ZlKTtcblx0ZGlzcGxheUJvb2tzKCk7XG59XG5cbi8vQ2hhbmdpbmcgdGhlIHJlYWQgc3RhdHVzXG5mdW5jdGlvbiBjaGFuZ2VSZWFkU3RhdHVzKGV2ZW50KSB7XG5cdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZFRvZ2dsZVwiKSkge1xuXHRcdGxldCBib29rVG9VcGRhdGUgPSBldmVudC50YXJnZXQuaWQ7XG5cdFx0TGlicmFyeS5jaGFuZ2VSZWFkU3RhdHVzKGJvb2tUb1VwZGF0ZSk7XG5cdFx0ZGlzcGxheUJvb2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuO1xuXHR9XG59XG5cbi8vUmVhZCBzdGF0dXMgJiByZW1vdmUgYnV0dG9uXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25MaXN0ZW5lcik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZVJlYWRTdGF0dXMpO1xuXG5mdW5jdGlvbiBidXR0b25MaXN0ZW5lcihldmVudCkge1xuXHR2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlQm9va0J1dHRvblwiKSkge1xuXHRcdHJlbW92ZUJvb2soZXZlbnQpO1xuXHRcdGRpc3BsYXlCb29rcygpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybjtcblx0fVxufVxuXG4vL0N1c3RvbSB2YWxpZGF0aW9uTWVzc2FnZXNcbi8vVGl0bGVcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcblx0aWYgKHRpdGxlLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdHRpdGxlLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuXHR9IGVsc2Uge1xuXHRcdHRpdGxlLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIHByb3ZpZGUgYSBib29rIHRpdGxlXCIpO1xuXHR9XG59KTtcbi8vQXV0aG9yXG5hdXRob3IuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuXHRpZiAoYXV0aG9yLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdGF1dGhvci5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcblx0fSBlbHNlIHtcblx0XHRhdXRob3Iuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgcHJvdmlkZSBhIGJvb2sgYXV0aG9yXCIpO1xuXHR9XG59KTtcbi8vUGFnZXNcbnBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcblx0aWYgKHBhZ2VzLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdHBhZ2VzLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuXHR9IGVsc2Uge1xuXHRcdHBhZ2VzLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIHByb3ZpZGUgdGhlIG51bWJlciBvZiBwYWdlc1wiKTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdGlhbGl6ZUxpc3RlbmVycywgbG9hZEZvb3RlciwgZGlzcGxheUJvb2tzIH07XG4iLCJsZXQgbXlMaWJyYXJ5ID0gW107XG5cbi8vIHRoZSBib29rIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdHRoaXMucGFnZXMgPSBwYWdlcztcblx0dGhpcy5yZWFkID0gcmVhZDtcblx0dGhpcy5yZXBvcnRJbmZvID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBgJHt0aXRsZX0gYnkgJHthdXRob3J9LCAke3BhZ2VzfSBwYWdlcywgJHtyZWFkfSByZWFkIHlldGA7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpIHtcblx0Ly80LiBzdG9yZSB0aGUgbmV3IGJvb2sgb2JqZWN0cyBpbnRvIGFuIGFycmF5XG5cdGxldCBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpO1xuXHR0aGlzLmJvb2sgPSBib29rO1xuXHRteUxpYnJhcnkucHVzaChib29rKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQm9va0Zyb21MaWJyYXJ5KGJvb2tUb1JlbW92ZSkge1xuXHRsZXQgYm9va0luZGV4ID0gZ2V0Qm9va0luZGV4KGJvb2tUb1JlbW92ZSk7XG5cdG15TGlicmFyeS5zcGxpY2UoYm9va0luZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUmVhZFN0YXR1cyhib29rVG9VcGRhdGUpIHtcblx0bGV0IGJvb2tJbmRleCA9IGdldEJvb2tJbmRleChib29rVG9VcGRhdGUpO1xuXHRpZiAobXlMaWJyYXJ5W2Jvb2tJbmRleF0ucmVhZCA9PSB0cnVlKSB7XG5cdFx0bXlMaWJyYXJ5W2Jvb2tJbmRleF0ucmVhZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdG15TGlicmFyeVtib29rSW5kZXhdLnJlYWQgPSB0cnVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tJbmRleChib29rVG9GaW5kKSB7XG5cdHJldHVybiBteUxpYnJhcnkuZmluZEluZGV4KChib29rKSA9PiBib29rLnRpdGxlID09PSBib29rVG9GaW5kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRCb29rLFxuXHRhZGRCb29rVG9MaWJyYXJ5LFxuXHRteUxpYnJhcnksXG5cdHJlbW92ZUJvb2tGcm9tTGlicmFyeSxcblx0Y2hhbmdlUmVhZFN0YXR1cyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxpbmcuY3NzXCI7XG5pbXBvcnQgRG9tTWFuaXB1bGF0aW9uIGZyb20gXCIuL21vZHVsZXMvRG9tTWFuaXB1bGF0aW9uXCI7XG5pbXBvcnQgTGlicmFyeSBmcm9tIFwiLi9tb2R1bGVzL0xpYnJhcnlcIjtcblxuRG9tTWFuaXB1bGF0aW9uLmluaXRpYWxpemVMaXN0ZW5lcnMoKTtcbkRvbU1hbmlwdWxhdGlvbi5sb2FkRm9vdGVyKCk7XG5Eb21NYW5pcHVsYXRpb24uZGlzcGxheUJvb2tzKCk7IFxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=