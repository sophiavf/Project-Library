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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: \"Raleway\", sans-serif;\n\n\t--bright-pink: #ff414e;\n\t--orange: #ff8928;\n\t--yellow: #ffde22;\n\t--white: #ffffff;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\nmain {\n\tbackground-color: var(--yellow);\n\tpadding: 20px 76.3px;\n\tflex: 1;\n}\n\n.header {\n\tdisplay: flex;\n\tpadding: 2vw 10vw 2vw 10vw;\n\talign-items: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n}\nh1 {\n\tflex: 3;\n}\n.material-symbols-outlined {\n\tfont-size: inherit;\n\tpadding: 0 10px;\n\tfont-weight: inherit;\n}\n\n.popUp {\n\tposition: absolute;\n\ttext-align: center;\n\twidth: 100%;\n}\n\n.formPopup {\n\tdisplay: none;\n\tposition: relative;\n\tleft: 50%;\n\tmargin-left: -200px;\n\tborder: 3px solid var(--orange);\n\tbackground-color: white;\n\twidth: 400px;\n\tpadding: 20px;\n\tborder-radius: 15px;\n\tmargin-top: 50px;\n\ttext-align: start;\n}\n\n.changeReadStatus {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.changeReadStatus > div {\n\tflex: 1;\n}\n\n/* The switch - the box around the slider */\n.switch {\n\tposition: relative;\n\tright: 0px;\n\tdisplay: inline-block;\n\twidth: 60px;\n\theight: 34px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n/* The slider */\n.slider {\n\tposition: relative;\n\tcursor: pointer;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--yellow);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\n.slider:before {\n\tposition: relative;\n\tcontent: \"\";\n\theight: 26px;\n\twidth: 26px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: white;\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\ninput:checked + .slider {\n\tbackground-color: var(--orange);\n}\n\ninput:focus + .slider {\n\tbox-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n\t-webkit-transform: translateX(26px);\n\t-ms-transform: translateX(26px);\n\ttransform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n\tborder-radius: 34px;\n}\n\n.slider.round:before {\n\tborder-radius: 50%;\n}\n\nform {\n\tflex: 1;\n}\n\n\n\n.inputItem > input {\n\tflex: 1; \n\tbackground: var(--white);\n\tcolor: var(--orange);\n\theight: 34px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tborder-radius: 4px;\n\tborder: 2px solid;\n\tborder-color: var(--orange);\n\ttext-align: start;\n\toutline: none;\n\tmax-width: 280px;\n\twidth: fit-content;\n}\n\n.inputItem {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 10px; \n}\n\ninput:focus {\n\tborder-color: var(--bright-pink);\n}\n\nh3 {\n\tpadding: 15px 0;\n}\n\n.bookDisplay {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1fr);\n\tgrid-template-columns: repeat(2, minmax(150px, 300px));\n\tgap: 15px;\n\tmargin-top: 30px;\n\tjustify-content: center;\n}\n\n.bookDisplay > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tborder: 2px solid var(--orange);\n\tborder-radius: 15px;\n\tpadding: 20px;\n\tgap: 10px;\n\tbackground-color: var(--white);\n\tcolor: black;\n\tfont-weight: 600;\n}\n\n.buttons > button,\n.submitButton,\n.closeFormButton {\n\tpadding: 10px;\n\tborder: none;\n\tcolor: white;\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\tword-wrap: normal;\n} \n.buttons {\n\talign-self: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tgap: 10px;\n}\n.buttons > button {\n\talign-self: center;\n\tflex: 1;\n\ttext-align: center;\n\twidth: 100%;\n\tfont-weight: 600;\n}\n\n.popupButtons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n}\n.popupButtons > button {\t\n\tmin-width: 8em;\n}\n\nbutton:active {\n\tbox-shadow: 0 5px var(--yellow);\n\ttransform: translateY(4px);\n}\n\n.inputContainer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\nbutton {\n\tbox-shadow: 0 9px var(--white);\n}\n\nbutton.newBook {\n\tpadding: 15px 25px;\n\tborder: none;\n\tcolor: var(--white);\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\talign-self: center;\n\tfont-size: 1.5em;\n\tfont-weight: 500;\n}\n\ninput[type=\"checkbox\"] {\n\taccent-color: var(--bright-pink);\n\tborder: none;\n}\n\nfooter {\n\ttext-align: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n\tpadding: 10px;\n}\n\na {\n\tcolor: white;\n}\n", "",{"version":3,"sources":["webpack://./src/styling.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Raleway:wght@200&display=swap\");\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: \"Raleway\", sans-serif;\n\n\t--bright-pink: #ff414e;\n\t--orange: #ff8928;\n\t--yellow: #ffde22;\n\t--white: #ffffff;\n}\nbody {\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\nmain {\n\tbackground-color: var(--yellow);\n\tpadding: 20px 76.3px;\n\tflex: 1;\n}\n\n.header {\n\tdisplay: flex;\n\tpadding: 2vw 10vw 2vw 10vw;\n\talign-items: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n}\nh1 {\n\tflex: 3;\n}\n.material-symbols-outlined {\n\tfont-size: inherit;\n\tpadding: 0 10px;\n\tfont-weight: inherit;\n}\n\n.popUp {\n\tposition: absolute;\n\ttext-align: center;\n\twidth: 100%;\n}\n\n.formPopup {\n\tdisplay: none;\n\tposition: relative;\n\tleft: 50%;\n\tmargin-left: -200px;\n\tborder: 3px solid var(--orange);\n\tbackground-color: white;\n\twidth: 400px;\n\tpadding: 20px;\n\tborder-radius: 15px;\n\tmargin-top: 50px;\n\ttext-align: start;\n}\n\n.changeReadStatus {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.changeReadStatus > div {\n\tflex: 1;\n}\n\n/* The switch - the box around the slider */\n.switch {\n\tposition: relative;\n\tright: 0px;\n\tdisplay: inline-block;\n\twidth: 60px;\n\theight: 34px;\n}\n/* Hide default HTML checkbox */\n.switch input {\n\topacity: 0;\n\twidth: 0;\n\theight: 0;\n}\n/* The slider */\n.slider {\n\tposition: relative;\n\tcursor: pointer;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\tbackground-color: var(--yellow);\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\n.slider:before {\n\tposition: relative;\n\tcontent: \"\";\n\theight: 26px;\n\twidth: 26px;\n\tleft: 4px;\n\tbottom: 4px;\n\tbackground-color: white;\n\t-webkit-transition: 0.4s;\n\ttransition: 0.4s;\n}\n\ninput:checked + .slider {\n\tbackground-color: var(--orange);\n}\n\ninput:focus + .slider {\n\tbox-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n\t-webkit-transform: translateX(26px);\n\t-ms-transform: translateX(26px);\n\ttransform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n\tborder-radius: 34px;\n}\n\n.slider.round:before {\n\tborder-radius: 50%;\n}\n\nform {\n\tflex: 1;\n}\n\n\n\n.inputItem > input {\n\tflex: 1; \n\tbackground: var(--white);\n\tcolor: var(--orange);\n\theight: 34px;\n\tpadding-left: 10px;\n\tpadding-right: 10px;\n\tborder-radius: 4px;\n\tborder: 2px solid;\n\tborder-color: var(--orange);\n\ttext-align: start;\n\toutline: none;\n\tmax-width: 280px;\n\twidth: fit-content;\n}\n\n.inputItem {\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-between;\n\talign-items: center;\n\tmargin: 10px; \n}\n\ninput:focus {\n\tborder-color: var(--bright-pink);\n}\n\nh3 {\n\tpadding: 15px 0;\n}\n\n.bookDisplay {\n\tdisplay: grid;\n\tgrid-template-rows: repeat(2, 1fr);\n\tgrid-template-columns: repeat(2, minmax(150px, 300px));\n\tgap: 15px;\n\tmargin-top: 30px;\n\tjustify-content: center;\n}\n\n.bookDisplay > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tborder: 2px solid var(--orange);\n\tborder-radius: 15px;\n\tpadding: 20px;\n\tgap: 10px;\n\tbackground-color: var(--white);\n\tcolor: black;\n\tfont-weight: 600;\n}\n\n.buttons > button,\n.submitButton,\n.closeFormButton {\n\tpadding: 10px;\n\tborder: none;\n\tcolor: white;\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\tword-wrap: normal;\n} \n.buttons {\n\talign-self: center;\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\tgap: 10px;\n}\n.buttons > button {\n\talign-self: center;\n\tflex: 1;\n\ttext-align: center;\n\twidth: 100%;\n\tfont-weight: 600;\n}\n\n.popupButtons {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tgap: 10px;\n}\n.popupButtons > button {\t\n\tmin-width: 8em;\n}\n\nbutton:active {\n\tbox-shadow: 0 5px var(--yellow);\n\ttransform: translateY(4px);\n}\n\n.inputContainer {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\nbutton {\n\tbox-shadow: 0 9px var(--white);\n}\n\nbutton.newBook {\n\tpadding: 15px 25px;\n\tborder: none;\n\tcolor: var(--white);\n\tbackground-color: var(--orange);\n\tborder-radius: 15px;\n\talign-self: center;\n\tfont-size: 1.5em;\n\tfont-weight: 500;\n}\n\ninput[type=\"checkbox\"] {\n\taccent-color: var(--bright-pink);\n\tborder: none;\n}\n\nfooter {\n\ttext-align: center;\n\tbackground-color: var(--bright-pink);\n\tcolor: white;\n\tpadding: 10px;\n}\n\na {\n\tcolor: white;\n}\n"],"sourceRoot":""}]);
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
			readElement.innerHTML = `<div>Read: </div> <label id="#${book.title}" class="switch"><input class="readToggle" id='${book.title}' type="checkbox"><span class="slider round"></span></label>`;

			readElement.setAttribute("id", `${book.title}`);

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





_modules_Library__WEBPACK_IMPORTED_MODULE_2__["default"].addBookToLibrary("Big", "New", 12, false);
_modules_Library__WEBPACK_IMPORTED_MODULE_2__["default"].addBookToLibrary("Small", "New", 12, true);
_modules_Library__WEBPACK_IMPORTED_MODULE_2__["default"].addBookToLibrary("Medium", "New", 12, false);

_modules_DomManipulation__WEBPACK_IMPORTED_MODULE_1__["default"].initializeListeners();
_modules_DomManipulation__WEBPACK_IMPORTED_MODULE_1__["default"].loadFooter();
_modules_DomManipulation__WEBPACK_IMPORTED_MODULE_1__["default"].displayBooks(); 


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixvSkFBb0o7QUFDcEo7QUFDQSw2Q0FBNkMsY0FBYyxlQUFlLHlDQUF5Qyw2QkFBNkIsc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRyxRQUFRLGtCQUFrQixrQkFBa0IsMkJBQTJCLEdBQUcsUUFBUSxvQ0FBb0MseUJBQXlCLFlBQVksR0FBRyxhQUFhLGtCQUFrQiwrQkFBK0Isd0JBQXdCLHlDQUF5QyxpQkFBaUIsR0FBRyxNQUFNLFlBQVksR0FBRyw4QkFBOEIsdUJBQXVCLG9CQUFvQix5QkFBeUIsR0FBRyxZQUFZLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLEdBQUcsZ0JBQWdCLGtCQUFrQix1QkFBdUIsY0FBYyx3QkFBd0Isb0NBQW9DLDRCQUE0QixpQkFBaUIsa0JBQWtCLHdCQUF3QixxQkFBcUIsc0JBQXNCLEdBQUcsdUJBQXVCLGtCQUFrQix3QkFBd0IsR0FBRyw2QkFBNkIsWUFBWSxHQUFHLDJEQUEyRCx1QkFBdUIsZUFBZSwwQkFBMEIsZ0JBQWdCLGlCQUFpQixHQUFHLG1EQUFtRCxlQUFlLGFBQWEsY0FBYyxHQUFHLDZCQUE2Qix1QkFBdUIsb0JBQW9CLFdBQVcsWUFBWSxhQUFhLGNBQWMsb0NBQW9DLDZCQUE2QixxQkFBcUIsR0FBRyxvQkFBb0IsdUJBQXVCLGtCQUFrQixpQkFBaUIsZ0JBQWdCLGNBQWMsZ0JBQWdCLDRCQUE0Qiw2QkFBNkIscUJBQXFCLEdBQUcsNkJBQTZCLG9DQUFvQyxHQUFHLDJCQUEyQixnQ0FBZ0MsR0FBRyxvQ0FBb0Msd0NBQXdDLG9DQUFvQyxnQ0FBZ0MsR0FBRywwQ0FBMEMsd0JBQXdCLEdBQUcsMEJBQTBCLHVCQUF1QixHQUFHLFVBQVUsWUFBWSxHQUFHLDRCQUE0QixhQUFhLDZCQUE2Qix5QkFBeUIsaUJBQWlCLHVCQUF1Qix3QkFBd0IsdUJBQXVCLHNCQUFzQixnQ0FBZ0Msc0JBQXNCLGtCQUFrQixxQkFBcUIsdUJBQXVCLEdBQUcsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsbUNBQW1DLHdCQUF3QixrQkFBa0IsR0FBRyxpQkFBaUIscUNBQXFDLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyxrQkFBa0Isa0JBQWtCLHVDQUF1QywyREFBMkQsY0FBYyxxQkFBcUIsNEJBQTRCLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLG9DQUFvQyx3QkFBd0Isa0JBQWtCLGNBQWMsbUNBQW1DLGlCQUFpQixxQkFBcUIsR0FBRywwREFBMEQsa0JBQWtCLGlCQUFpQixpQkFBaUIsb0NBQW9DLHdCQUF3QixzQkFBc0IsSUFBSSxZQUFZLHVCQUF1QixrQkFBa0IsMkJBQTJCLGdCQUFnQixjQUFjLEdBQUcscUJBQXFCLHVCQUF1QixZQUFZLHVCQUF1QixnQkFBZ0IscUJBQXFCLEdBQUcsbUJBQW1CLGtCQUFrQix3QkFBd0IsNEJBQTRCLGNBQWMsR0FBRywwQkFBMEIscUJBQXFCLEdBQUcsbUJBQW1CLG9DQUFvQywrQkFBK0IsR0FBRyxxQkFBcUIsa0JBQWtCLG1DQUFtQyxHQUFHLFlBQVksbUNBQW1DLEdBQUcsb0JBQW9CLHVCQUF1QixpQkFBaUIsd0JBQXdCLG9DQUFvQyx3QkFBd0IsdUJBQXVCLHFCQUFxQixxQkFBcUIsR0FBRyw4QkFBOEIscUNBQXFDLGlCQUFpQixHQUFHLFlBQVksdUJBQXVCLHlDQUF5QyxpQkFBaUIsa0JBQWtCLEdBQUcsT0FBTyxpQkFBaUIsR0FBRyxTQUFTLGtGQUFrRixVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsS0FBSyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsS0FBSyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFB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QUNpQztBQUNoQjs7O0FBR3hDLHlFQUF3QjtBQUN4Qix5RUFBd0I7QUFDeEIseUVBQXdCOztBQUV4QixvRkFBbUM7QUFDbkMsMkVBQTBCO0FBQzFCLDZFQUE0QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy9zdHlsaW5nLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy9zdHlsaW5nLmNzcz9jNWZlIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL21vZHVsZXMvRG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS8uL3NyYy9tb2R1bGVzL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LWxpYnJhcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcHJvamVjdC1saWJyYXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAxMDAmZmFtaWx5PVJhbGV3YXk6d2dodEAyMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXG5cXG5cXHQtLWJyaWdodC1waW5rOiAjZmY0MTRlO1xcblxcdC0tb3JhbmdlOiAjZmY4OTI4O1xcblxcdC0teWVsbG93OiAjZmZkZTIyO1xcblxcdC0td2hpdGU6ICNmZmZmZmY7XFxufVxcbmJvZHkge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5tYWluIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcblxcdHBhZGRpbmc6IDIwcHggNzYuM3B4O1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cGFkZGluZzogMnZ3IDEwdncgMnZ3IDEwdnc7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1icmlnaHQtcGluayk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5oMSB7XFxuXFx0ZmxleDogMztcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcblxcdGZvbnQtc2l6ZTogaW5oZXJpdDtcXG5cXHRwYWRkaW5nOiAwIDEwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi5wb3BVcCB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm1Qb3B1cCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogNTAlO1xcblxcdG1hcmdpbi1sZWZ0OiAtMjAwcHg7XFxuXFx0Ym9yZGVyOiAzcHggc29saWQgdmFyKC0tb3JhbmdlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHR3aWR0aDogNDAwcHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcdG1hcmdpbi10b3A6IDUwcHg7XFxuXFx0dGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5jaGFuZ2VSZWFkU3RhdHVzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jaGFuZ2VSZWFkU3RhdHVzID4gZGl2IHtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xcbi5zd2l0Y2gge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRyaWdodDogMHB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR3aWR0aDogNjBweDtcXG5cXHRoZWlnaHQ6IDM0cHg7XFxufVxcbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXFxuLnN3aXRjaCBpbnB1dCB7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR3aWR0aDogMDtcXG5cXHRoZWlnaHQ6IDA7XFxufVxcbi8qIFRoZSBzbGlkZXIgKi9cXG4uc2xpZGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRvcDogMDtcXG5cXHRsZWZ0OiAwO1xcblxcdHJpZ2h0OiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3cpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG5cXHR0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdGhlaWdodDogMjZweDtcXG5cXHR3aWR0aDogMjZweDtcXG5cXHRsZWZ0OiA0cHg7XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcblxcdHRyYW5zaXRpb246IDAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcblxcdGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZmMztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG59XFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuZm9ybSB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuXFxuXFxuLmlucHV0SXRlbSA+IGlucHV0IHtcXG5cXHRmbGV4OiAxOyBcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0Y29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0aGVpZ2h0OiAzNHB4O1xcblxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG5cXHRib3JkZXI6IDJweCBzb2xpZDtcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0dGV4dC1hbGlnbjogc3RhcnQ7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRtYXgtd2lkdGg6IDI4MHB4O1xcblxcdHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLmlucHV0SXRlbSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRtYXJnaW46IDEwcHg7IFxcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1icmlnaHQtcGluayk7XFxufVxcblxcbmgzIHtcXG5cXHRwYWRkaW5nOiAxNXB4IDA7XFxufVxcblxcbi5ib29rRGlzcGxheSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgxNTBweCwgMzAwcHgpKTtcXG5cXHRnYXA6IDE1cHg7XFxuXFx0bWFyZ2luLXRvcDogMzBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvb2tEaXNwbGF5ID4gZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcblxcdGdhcDogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5idXR0b25zID4gYnV0dG9uLFxcbi5zdWJtaXRCdXR0b24sXFxuLmNsb3NlRm9ybUJ1dHRvbiB7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHR3b3JkLXdyYXA6IG5vcm1hbDtcXG59IFxcbi5idXR0b25zIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGdhcDogMTBweDtcXG59XFxuLmJ1dHRvbnMgPiBidXR0b24ge1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmbGV4OiAxO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucG9wdXBCdXR0b25zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG4ucG9wdXBCdXR0b25zID4gYnV0dG9uIHtcXHRcXG5cXHRtaW4td2lkdGg6IDhlbTtcXG59XFxuXFxuYnV0dG9uOmFjdGl2ZSB7XFxuXFx0Ym94LXNoYWRvdzogMCA1cHggdmFyKC0teWVsbG93KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLmlucHV0Q29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRib3gtc2hhZG93OiAwIDlweCB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmJ1dHRvbi5uZXdCb29rIHtcXG5cXHRwYWRkaW5nOiAxNXB4IDI1cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG5cXHRib3JkZXItcmFkaXVzOiAxNXB4O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuNWVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdGFjY2VudC1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcblxcdGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsaW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0NBQWtDOztDQUVsQyxzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCO0FBQ0E7Q0FDQywrQkFBK0I7Q0FDL0Isb0JBQW9CO0NBQ3BCLE9BQU87QUFDUjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLE9BQU87QUFDUjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xC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QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwJmZhbWlseT1SYWxld2F5OndnaHRAMjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcbioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxuXFxuXFx0LS1icmlnaHQtcGluazogI2ZmNDE0ZTtcXG5cXHQtLW9yYW5nZTogI2ZmODkyODtcXG5cXHQtLXllbGxvdzogI2ZmZGUyMjtcXG5cXHQtLXdoaXRlOiAjZmZmZmZmO1xcbn1cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxubWFpbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG5cXHRwYWRkaW5nOiAyMHB4IDc2LjNweDtcXG5cXHRmbGV4OiAxO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBhZGRpbmc6IDJ2dyAxMHZ3IDJ2dyAxMHZ3O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuaDEge1xcblxcdGZsZXg6IDM7XFxufVxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxuXFx0cGFkZGluZzogMCAxMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4ucG9wVXAge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtUG9wdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHRtYXJnaW4tbGVmdDogLTIwMHB4O1xcblxcdGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLW9yYW5nZSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0d2lkdGg6IDQwMHB4O1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHRtYXJnaW4tdG9wOiA1MHB4O1xcblxcdHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4uY2hhbmdlUmVhZFN0YXR1cyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hhbmdlUmVhZFN0YXR1cyA+IGRpdiB7XFxuXFx0ZmxleDogMTtcXG59XFxuXFxuLyogVGhlIHN3aXRjaCAtIHRoZSBib3ggYXJvdW5kIHRoZSBzbGlkZXIgKi9cXG4uc3dpdGNoIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cmlnaHQ6IDBweDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0d2lkdGg6IDYwcHg7XFxuXFx0aGVpZ2h0OiAzNHB4O1xcbn1cXG4vKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xcbi5zd2l0Y2ggaW5wdXQge1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0d2lkdGg6IDA7XFxuXFx0aGVpZ2h0OiAwO1xcbn1cXG4vKiBUaGUgc2xpZGVyICovXFxuLnNsaWRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHRyaWdodDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93KTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuXFx0dHJhbnNpdGlvbjogMC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRoZWlnaHQ6IDI2cHg7XFxuXFx0d2lkdGg6IDI2cHg7XFxuXFx0bGVmdDogNHB4O1xcblxcdGJvdHRvbTogNHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcXG5cXHR0cmFuc2l0aW9uOiAwLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG5cXHRib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2ZjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcblxcdGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmZvcm0ge1xcblxcdGZsZXg6IDE7XFxufVxcblxcblxcblxcbi5pbnB1dEl0ZW0gPiBpbnB1dCB7XFxuXFx0ZmxleDogMTsgXFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcblxcdGhlaWdodDogMzRweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogMTBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0Ym9yZGVyOiAycHggc29saWQ7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcblxcdHRleHQtYWxpZ246IHN0YXJ0O1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0bWF4LXdpZHRoOiAyODBweDtcXG5cXHR3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5pbnB1dEl0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0bWFyZ2luOiAxMHB4OyBcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcblxcdGJvcmRlci1jb2xvcjogdmFyKC0tYnJpZ2h0LXBpbmspO1xcbn1cXG5cXG5oMyB7XFxuXFx0cGFkZGluZzogMTVweCAwO1xcbn1cXG5cXG4uYm9va0Rpc3BsYXkge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMTUwcHgsIDMwMHB4KSk7XFxuXFx0Z2FwOiAxNXB4O1xcblxcdG1hcmdpbi10b3A6IDMwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib29rRGlzcGxheSA+IGRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1vcmFuZ2UpO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRnYXA6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uYnV0dG9ucyA+IGJ1dHRvbixcXG4uc3VibWl0QnV0dG9uLFxcbi5jbG9zZUZvcm1CdXR0b24ge1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0d29yZC13cmFwOiBub3JtYWw7XFxufSBcXG4uYnV0dG9ucyB7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRnYXA6IDEwcHg7XFxufVxcbi5idXR0b25zID4gYnV0dG9uIHtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0ZmxleDogMTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnBvcHVwQnV0dG9ucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGdhcDogMTBweDtcXG59XFxuLnBvcHVwQnV0dG9ucyA+IGJ1dHRvbiB7XFx0XFxuXFx0bWluLXdpZHRoOiA4ZW07XFxufVxcblxcbmJ1dHRvbjphY3RpdmUge1xcblxcdGJveC1zaGFkb3c6IDAgNXB4IHZhcigtLXllbGxvdyk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxufVxcblxcbi5pbnB1dENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0Ym94LXNoYWRvdzogMCA5cHggdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5idXR0b24ubmV3Qm9vayB7XFxuXFx0cGFkZGluZzogMTVweCAyNXB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTVweDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5cXHRhY2NlbnQtY29sb3I6IHZhcigtLWJyaWdodC1waW5rKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyaWdodC1waW5rKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuYSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsaW5nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGluZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBMaWJyYXJ5IGZyb20gXCIuL0xpYnJhcnlcIjtcbi8vIGltcG9ydCBmb3JtVmFsaWRhdGlvbiBmcm9tIFwiLi4vdXRpbHMvZm9ybVZhbGlkYXRpb25cIjtcblxuY29uc3QgbGlicmFyeURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvb2tEaXNwbGF5XCIpO1xuLy8xLiBUaGUnTkVXIEJPT0snIGJ1dHRvbiBicmluZ3MgdXAgYSBmb3JtIGFsbG93aW5nIHVzZXJzIHRvIGlucHV0IHRoZSBkZXRhaWxzIGZvciB0aGUgbmV3IGJvb2s6IGF1dGhvciwgdGl0bGUsIG51bWJlciBvZiBwYWdlcyx3aGV0aGVyIGl04oCZcyBiZWVuIHJlYWQgYW5kIGFueXRoaW5nIGVsc2UgeW91IG1pZ2h0IHdhbnQuXG5jb25zdCBuZXdCb29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdCb29rXCIpO1xuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtUG9wdXBcIik7XG4vL2NvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0QnV0dG9uXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgYm9keVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIik7XG5jb25zdCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F1dGhvclwiKTtcbmNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYWdlc1wiKTtcbmNvbnN0IHJlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlYWRcIik7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVMaXN0ZW5lcnMoKSB7XG5cdC8vMi4gQnJpbmdzIHVwIGZvcm1cblx0bmV3Qm9va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHR9KTtcblx0Ly8zLiBVc2VyIHB1dHMgaW5wdXRzIGludG8gZm9ybVxuXHQvLzQuIFVzZXIgc3VibWl0cyBpbnB1dHNcblx0Zm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uICgpIHtcblx0XHRnZXRVc2VySW5wdXQoKTtcblx0XHRjbG9zZVBvcFVwKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBsb2FkRm9vdGVyKCkge1xuXHRjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0Y29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblx0Y29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZvb3RlckNvbnRlbnQuaW5uZXJIVE1MID0gYEF1dGhvcjogU29waGlhIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc29waGlhdmZcIj5HaXRIdWI8L2E+ICZjb3B5ICR7Y3VycmVudFllYXJ9YDtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xuXHRib2R5VGFnLmFwcGVuZChmb290ZXIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Qm9va3MoKSB7XG5cdGxpYnJhcnlEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG5cdC8vTG9vcHMgdGhyb3VnaCBib29rc1xuXHRMaWJyYXJ5Lm15TGlicmFyeS5mb3JFYWNoKChib29rKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2Jvb2sudGl0bGV9YCkgIT09IG51bGwpIHtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IG5ld0Jvb2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdG5ld0Jvb2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Ym9vay50aXRsZX1gLCBcImJvb2tDb250YWluZXJcIik7XG5cblx0XHRcdG5ld0Jvb2tFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PiR7Ym9vay50aXRsZX0gPGJyPkF1dGhvcjogJHtib29rLmF1dGhvcn0gPGJyPlBhZ2Uocyk6ICR7Ym9vay5wYWdlc308L2Rpdj5gO1xuXG5cdFx0XHRsZXQgcmVtb3ZlQm9va0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdFx0XHRyZW1vdmVCb29rQnV0dG9uLmNsYXNzTGlzdC5hZGQoYCR7Ym9vay50aXRsZX1gLCBcInJlbW92ZUJvb2tCdXR0b25cIik7XG5cdFx0XHRyZW1vdmVCb29rQnV0dG9uLmlubmVySFRNTCA9XG5cdFx0XHRcdCc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZWxldGU8L3NwYW4+UmVtb3ZlIGJvb2snO1xuXHRcdFx0cmVtb3ZlQm9va0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtib29rLnRpdGxlfWApO1xuXG5cdFx0XHRsZXQgcmVhZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0cmVhZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoYW5nZVJlYWRTdGF0dXNcIik7XG5cdFx0XHRyZWFkRWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdj5SZWFkOiA8L2Rpdj4gPGxhYmVsIGlkPVwiIyR7Ym9vay50aXRsZX1cIiBjbGFzcz1cInN3aXRjaFwiPjxpbnB1dCBjbGFzcz1cInJlYWRUb2dnbGVcIiBpZD0nJHtib29rLnRpdGxlfScgdHlwZT1cImNoZWNrYm94XCI+PHNwYW4gY2xhc3M9XCJzbGlkZXIgcm91bmRcIj48L3NwYW4+PC9sYWJlbD5gO1xuXG5cdFx0XHRyZWFkRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtib29rLnRpdGxlfWApO1xuXG5cdFx0XHRsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRidXR0b25zLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuXHRcdFx0YnV0dG9ucy5hcHBlbmQocmVhZEVsZW1lbnQsIHJlbW92ZUJvb2tCdXR0b24pO1xuXG5cdFx0XHRuZXdCb29rRWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25zKTtcblx0XHRcdC8vRGlzcGxheXMgZWFjaCBib29rIG9uIHRoZSBwYWdlXG5cdFx0XHRsaWJyYXJ5RGlzcGxheS5hcHBlbmRDaGlsZChuZXdCb29rRWxlbWVudCk7XG5cdFx0XHRjaGVja0JveENvbmZpZyhib29rKTtcblx0XHR9XG5cdH0pO1xufVxuLy9DaGFuZ2VzIHRoZSBjaGVja2JveCBzdGF0dXMgb2YgdGhlIG5ld2x5IGNyZWF0ZWQgYm9vayBlbGVtZW50IGJhc2VkIG9uIHdoYXQgaXMgc3RvcmVkIGluIHRoZSBvYmplY3RcbmZ1bmN0aW9uIGNoZWNrQm94Q29uZmlnKGJvb2spIHtcblx0Y29uc3QgYm9va1JlYWRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dCMke2Jvb2sudGl0bGV9YCk7XG5cdGlmIChib29rLnJlYWQgPT09IHRydWUpIHtcblx0XHRib29rUmVhZFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRib29rUmVhZFRvZ2dsZS5jaGVja2VkID0gZmFsc2U7XG5cdH1cbn1cblxuLy81LiBQcm9ncmFtIHRha2VzIHVzZXIgaW5wdXQgZnJvbSBmb3JtIGFuZCBhZGQncyBpdCB0byB0aGUgbGlicmFyeVxuZnVuY3Rpb24gZ2V0VXNlcklucHV0KCkge1xuXHRMaWJyYXJ5LmFkZEJvb2tUb0xpYnJhcnkoXG5cdFx0dGl0bGUudmFsdWUsXG5cdFx0YXV0aG9yLnZhbHVlLFxuXHRcdHBhZ2VzLnZhbHVlLFxuXHRcdHJlYWQuY2hlY2tlZFxuXHQpO1xuXHRkaXNwbGF5Qm9va3MoKTtcbn1cblxuZG9jdW1lbnRcblx0LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VGb3JtQnV0dG9uXCIpXG5cdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3BVcCk7XG5cbmZ1bmN0aW9uIGNsb3NlUG9wVXAoKSB7XG5cdHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUJvb2soZXZlbnQpIHtcblx0bGV0IGJvb2tUb1JlbW92ZSA9IGV2ZW50LnRhcmdldC5pZDtcblx0TGlicmFyeS5yZW1vdmVCb29rRnJvbUxpYnJhcnkoYm9va1RvUmVtb3ZlKTtcblx0ZGlzcGxheUJvb2tzKCk7XG59XG5cbi8vQ2hhbmdpbmcgdGhlIHJlYWQgc3RhdHVzXG5mdW5jdGlvbiBjaGFuZ2VSZWFkU3RhdHVzKGV2ZW50KSB7XG5cdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVhZFRvZ2dsZVwiKSkge1xuXHRcdGxldCBib29rVG9VcGRhdGUgPSBldmVudC50YXJnZXQuaWQ7XG5cdFx0TGlicmFyeS5jaGFuZ2VSZWFkU3RhdHVzKGJvb2tUb1VwZGF0ZSk7XG5cdFx0ZGlzcGxheUJvb2tzKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuO1xuXHR9XG59XG5cbi8vUmVhZCBzdGF0dXMgJiByZW1vdmUgYnV0dG9uXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBidXR0b25MaXN0ZW5lcik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGNoYW5nZVJlYWRTdGF0dXMpO1xuXG5mdW5jdGlvbiBidXR0b25MaXN0ZW5lcihldmVudCkge1xuXHR2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblx0aWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlQm9va0J1dHRvblwiKSkge1xuXHRcdHJlbW92ZUJvb2soZXZlbnQpO1xuXHRcdGRpc3BsYXlCb29rcygpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybjtcblx0fVxufVxuXG4vL0N1c3RvbSB2YWxpZGF0aW9uTWVzc2FnZXNcbi8vVGl0bGVcbnRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcblx0aWYgKHRpdGxlLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdHRpdGxlLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuXHR9IGVsc2Uge1xuXHRcdHRpdGxlLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIHByb3ZpZGUgYSBib29rIHRpdGxlXCIpO1xuXHR9XG59KTtcbi8vQXV0aG9yXG5hdXRob3IuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuXHRpZiAoYXV0aG9yLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdGF1dGhvci5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcblx0fSBlbHNlIHtcblx0XHRhdXRob3Iuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgcHJvdmlkZSBhIGJvb2sgYXV0aG9yXCIpO1xuXHR9XG59KTtcbi8vUGFnZXNcbnBhZ2VzLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcblx0aWYgKHBhZ2VzLmNoZWNrVmFsaWRpdHkoKSkge1xuXHRcdHBhZ2VzLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuXHR9IGVsc2Uge1xuXHRcdHBhZ2VzLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIHByb3ZpZGUgdGhlIG51bWJlciBvZiBwYWdlc1wiKTtcblx0fVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgaW5pdGlhbGl6ZUxpc3RlbmVycywgbG9hZEZvb3RlciwgZGlzcGxheUJvb2tzIH07XG4iLCJsZXQgbXlMaWJyYXJ5ID0gW107XG5cbi8vIHRoZSBib29rIGNvbnN0cnVjdG9yXG5mdW5jdGlvbiBCb29rKHRpdGxlLCBhdXRob3IsIHBhZ2VzLCByZWFkKSB7XG5cdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdHRoaXMucGFnZXMgPSBwYWdlcztcblx0dGhpcy5yZWFkID0gcmVhZDtcblx0dGhpcy5yZXBvcnRJbmZvID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBgJHt0aXRsZX0gYnkgJHthdXRob3J9LCAke3BhZ2VzfSBwYWdlcywgJHtyZWFkfSByZWFkIHlldGA7XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZEJvb2tUb0xpYnJhcnkodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpIHtcblx0Ly80LiBzdG9yZSB0aGUgbmV3IGJvb2sgb2JqZWN0cyBpbnRvIGFuIGFycmF5XG5cdGxldCBib29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpO1xuXHR0aGlzLmJvb2sgPSBib29rO1xuXHRteUxpYnJhcnkucHVzaChib29rKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQm9va0Zyb21MaWJyYXJ5KGJvb2tUb1JlbW92ZSkge1xuXHRsZXQgYm9va0luZGV4ID0gZ2V0Qm9va0luZGV4KGJvb2tUb1JlbW92ZSk7XG5cdG15TGlicmFyeS5zcGxpY2UoYm9va0luZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUmVhZFN0YXR1cyhib29rVG9VcGRhdGUpIHtcblx0bGV0IGJvb2tJbmRleCA9IGdldEJvb2tJbmRleChib29rVG9VcGRhdGUpO1xuXHRpZiAobXlMaWJyYXJ5W2Jvb2tJbmRleF0ucmVhZCA9PSB0cnVlKSB7XG5cdFx0bXlMaWJyYXJ5W2Jvb2tJbmRleF0ucmVhZCA9IGZhbHNlO1xuXHR9IGVsc2Uge1xuXHRcdG15TGlicmFyeVtib29rSW5kZXhdLnJlYWQgPSB0cnVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldEJvb2tJbmRleChib29rVG9GaW5kKSB7XG5cdHJldHVybiBteUxpYnJhcnkuZmluZEluZGV4KChib29rKSA9PiBib29rLnRpdGxlID09PSBib29rVG9GaW5kKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRCb29rLFxuXHRhZGRCb29rVG9MaWJyYXJ5LFxuXHRteUxpYnJhcnksXG5cdHJlbW92ZUJvb2tGcm9tTGlicmFyeSxcblx0Y2hhbmdlUmVhZFN0YXR1cyxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxpbmcuY3NzXCI7XG5pbXBvcnQgRG9tTWFuaXB1bGF0aW9uIGZyb20gXCIuL21vZHVsZXMvRG9tTWFuaXB1bGF0aW9uXCI7XG5pbXBvcnQgTGlicmFyeSBmcm9tIFwiLi9tb2R1bGVzL0xpYnJhcnlcIjtcblxuXG5MaWJyYXJ5LmFkZEJvb2tUb0xpYnJhcnkoXCJCaWdcIiwgXCJOZXdcIiwgMTIsIGZhbHNlKTtcbkxpYnJhcnkuYWRkQm9va1RvTGlicmFyeShcIlNtYWxsXCIsIFwiTmV3XCIsIDEyLCB0cnVlKTtcbkxpYnJhcnkuYWRkQm9va1RvTGlicmFyeShcIk1lZGl1bVwiLCBcIk5ld1wiLCAxMiwgZmFsc2UpO1xuXG5Eb21NYW5pcHVsYXRpb24uaW5pdGlhbGl6ZUxpc3RlbmVycygpO1xuRG9tTWFuaXB1bGF0aW9uLmxvYWRGb290ZXIoKTtcbkRvbU1hbmlwdWxhdGlvbi5kaXNwbGF5Qm9va3MoKTsgXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==