!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var o=wp.i18n.__;(0,wp.blocks.registerBlockType)("block-examples/block-examples-02-stylesheets-block",{title:o("Stylesheets Block"),icon:"universal-access-alt",category:"layout",edit:function(e){var t=e.className;return React.createElement("p",{className:t},o("Hello world, this is the Stylesheets Block (from the editor)"))},save:function(e){var t=e.className;return React.createElement("p",{className:t},o("Hello world, this is the Stylesheets Block (from the frontend, in red)"))}})}]);