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
eval("\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    MediaUpload = _wp$editor.MediaUpload;\nvar Button = wp.components.Button;\n\n\nregisterBlockType('block-examples/block-examples-05-media-upload-block', {\n\ttitle: __('Media Upload Block'),\n\ticon: 'universal-access-alt',\n\tcategory: 'layout',\n\tattributes: {\n\t\ttitle: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: 'h1'\n\t\t},\n\t\tingredients: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.ingredients'\n\t\t},\n\t\tinstructions: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.instructions'\n\t\t},\n\t\tmediaID: {\n\t\t\ttype: 'number'\n\t\t},\n\t\tmediaURL: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tselector: 'img',\n\t\t\tattribute: 'src'\n\t\t}\n\t},\n\tedit: function edit(_ref) {\n\t\tvar className = _ref.className,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    _ref$attributes = _ref.attributes,\n\t\t    title = _ref$attributes.title,\n\t\t    ingredients = _ref$attributes.ingredients,\n\t\t    instructions = _ref$attributes.instructions,\n\t\t    mediaID = _ref$attributes.mediaID,\n\t\t    mediaURL = _ref$attributes.mediaURL;\n\n\n\t\tvar onChangeTitle = function onChangeTitle(newTitle) {\n\t\t\tsetAttributes({ title: newTitle });\n\t\t};\n\t\tvar onChangeIngredients = function onChangeIngredients(newIngredients) {\n\t\t\tsetAttributes({ ingredients: newIngredients });\n\t\t};\n\t\tvar onChangeInstructions = function onChangeInstructions(newInstructions) {\n\t\t\tsetAttributes({ instructions: newInstructions });\n\t\t};\n\t\tvar onSelectImage = function onSelectImage(newImage) {\n\t\t\tsetAttributes({\n\t\t\t\tmediaID: newImage.id,\n\t\t\t\tmediaURL: newImage.url\n\t\t\t});\n\t\t};\n\n\t\treturn React.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\tReact.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'column' },\n\t\t\t\tReact.createElement(RichText, {\n\t\t\t\t\ttagName: 'h1',\n\t\t\t\t\tclassName: 'title',\n\t\t\t\t\tisSelected: false,\n\t\t\t\t\tplaceholder: __('Write a recipe title'),\n\t\t\t\t\tvalue: title,\n\t\t\t\t\tonChange: onChangeTitle\n\t\t\t\t}),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Ingredients')\n\t\t\t\t),\n\t\t\t\tReact.createElement(RichText, {\n\t\t\t\t\ttagName: 'ul',\n\t\t\t\t\tmultiline: 'li',\n\t\t\t\t\tclassName: 'ingredients',\n\t\t\t\t\tisSelected: false,\n\t\t\t\t\tplaceholder: __('Write a list of ingredients...'),\n\t\t\t\t\tvalue: ingredients,\n\t\t\t\t\tonChange: onChangeIngredients\n\t\t\t\t}),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Instructions')\n\t\t\t\t),\n\t\t\t\tReact.createElement(RichText, {\n\t\t\t\t\ttagName: 'div',\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tclassName: 'instructions',\n\t\t\t\t\tisSelected: false,\n\t\t\t\t\tplaceholder: __('Write the instructions...'),\n\t\t\t\t\tvalue: instructions,\n\t\t\t\t\tonChange: onChangeInstructions\n\t\t\t\t})\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'column' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'recipe-image' },\n\t\t\t\t\tReact.createElement(MediaUpload, {\n\t\t\t\t\t\tonSelect: onSelectImage,\n\t\t\t\t\t\ttype: 'image',\n\t\t\t\t\t\tvalue: mediaID,\n\t\t\t\t\t\trender: function render(_ref2) {\n\t\t\t\t\t\t\tvar open = _ref2.open;\n\t\t\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\t\tButton,\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\tonClick: open,\n\t\t\t\t\t\t\t\t\tclassName: mediaID ? 'image-button' : 'button button-large'\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t!mediaID ? __('Upload Image') : React.createElement('img', { src: mediaURL })\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(_ref3) {\n\t\tvar className = _ref3.className,\n\t\t    _ref3$attributes = _ref3.attributes,\n\t\t    title = _ref3$attributes.title,\n\t\t    ingredients = _ref3$attributes.ingredients,\n\t\t    instructions = _ref3$attributes.instructions,\n\t\t    mediaURL = _ref3$attributes.mediaURL;\n\n\t\treturn React.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\tReact.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'column' },\n\t\t\t\tReact.createElement(RichText.Content, {\n\t\t\t\t\ttagName: 'h1',\n\t\t\t\t\tclassName: 'title',\n\t\t\t\t\tplaceholder: __('Write a recipe title'),\n\t\t\t\t\tvalue: title\n\t\t\t\t}),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Ingredients')\n\t\t\t\t),\n\t\t\t\tReact.createElement(RichText.Content, {\n\t\t\t\t\ttagName: 'ul',\n\t\t\t\t\tmultiline: 'li',\n\t\t\t\t\tclassName: 'ingredients',\n\t\t\t\t\tplaceholder: __('Write a list of ingredients...'),\n\t\t\t\t\tvalue: ingredients\n\t\t\t\t}),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'h3',\n\t\t\t\t\tnull,\n\t\t\t\t\t__('Instructions')\n\t\t\t\t),\n\t\t\t\tReact.createElement(RichText.Content, {\n\t\t\t\t\ttagName: 'div',\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tclassName: 'instructions',\n\t\t\t\t\tplaceholder: __('Write the instructions...'),\n\t\t\t\t\tvalue: instructions\n\t\t\t\t})\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'column' },\n\t\t\t\tReact.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'recipe-image' },\n\t\t\t\t\tmediaURL && React.createElement('img', { src: mediaURL })\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t}\n});\n\n//# sourceURL=webpack:///./block.js?");

/***/ })

/******/ });