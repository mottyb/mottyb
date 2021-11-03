"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/context/video.js
var video = __webpack_require__(8173);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js



const PreLoader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    id: "loading",
    className: "orange-red-loading",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "loading-center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "loading-center-absolute",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "object",
          id: "object_one"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "object",
          id: "object_two"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "object",
          id: "object_three"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "object",
          id: "object_four"
        })]
      })
    })
  });
};

/* harmony default export */ const layout_PreLoader = (PreLoader);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  const {
    0: preloader,
    1: setPreloader
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    setPreloader(false);

    if (false) {}

    new WOW.WOW().init();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(video/* default */.Z, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "START -\u05D0\u05EA\u05D2\u05E8 \u05D4\u05D7\u05D9\u05E1\u05DB\u05D5\u05DF \u05D4\u05D2\u05D3\u05D5\u05DC 36,500 \u20AA \u05D1\u05E9\u05E0\u05D4"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/demo/images/icons/favicon.ico"
      })]
    }), preloader && /*#__PURE__*/jsx_runtime_.jsx(layout_PreLoader, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [173], () => (__webpack_exec__(8118)));
module.exports = __webpack_exports__;

})();