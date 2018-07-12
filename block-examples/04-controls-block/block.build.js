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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    BlockControls = _wp$editor.BlockControls,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar;\n\n\nregisterBlockType('block-examples/block-examples-04-controls-block', {\n\ttitle: __('Controls Block'),\n\ticon: 'universal-access-alt',\n\tcategory: 'layout',\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'h1'\n\t\t},\n\t\talignment: {\n\t\t\ttype: 'string'\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    _ref$attributes = _ref.attributes,\n\t\t    content = _ref$attributes.content,\n\t\t    alignment = _ref$attributes.alignment,\n\t\t    setAttributes = _ref.setAttributes;\n\n\n\t\tvar onChangeContent = function onChangeContent(content) {\n\t\t\tsetAttributes({ content: content });\n\t\t};\n\n\t\tvar onChangeAlignment = function onChangeAlignment(newAlignment) {\n\t\t\tsetAttributes({ alignment: newAlignment });\n\t\t};\n\n\t\treturn [React.createElement(\n\t\t\tBlockControls,\n\t\t\tnull,\n\t\t\tReact.createElement(AlignmentToolbar, {\n\t\t\t\tvalue: alignment,\n\t\t\t\tonChange: onChangeAlignment\n\t\t\t})\n\t\t), React.createElement(RichText, {\n\t\t\ttagName: 'h1',\n\t\t\tclassName: className,\n\t\t\tonChange: onChangeContent,\n\t\t\tvalue: content,\n\t\t\tstyle: { textAlign: alignment }\n\t\t})];\n\t},\n\tsave: function save(_ref2) {\n\t\tvar className = _ref2.className,\n\t\t    _ref2$attributes = _ref2.attributes,\n\t\t    content = _ref2$attributes.content,\n\t\t    alignment = _ref2$attributes.alignment;\n\n\t\treturn React.createElement(RichText.Content, {\n\t\t\ttagName: 'h1',\n\t\t\tclassName: className,\n\t\t\tvalue: content,\n\t\t\tstyle: { textAlign: alignment }\n\t\t});\n\t}\n});\n\n//# sourceURL=webpack:///./block.js?");

/***/ })

/******/ });