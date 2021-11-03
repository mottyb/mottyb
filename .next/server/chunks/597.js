"use strict";
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kY": () => (/* binding */ VideoImage)
/* harmony export */ });
/* unused harmony exports VideoWithBtn, VideoImage2 */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8173);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const VideoImage = ({
  id,
  img,
  extraClass
}) => {
  const videoContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_video__WEBPACK_IMPORTED_MODULE_1__/* .VideoContext */ .l);
  const {
    showVideo
  } = videoContext;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("a", {
      className: "video-popup1",
      href: "#",
      onClick: () => showVideo(id ? id : "SZEflIVnhH8"),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: extraClass ? extraClass : "video-btn video-btn-xl bg-orange-red ico-90",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
          className: "video-block-wrapper",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            className: "flaticon-play-button"
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("img", {
      className: "img-fluid",
      src: img ? img : "images/dashboard-07.png",
      alt: "video-preview"
    })]
  });
};

const VideoImage2 = ({
  id,
  img,
  extraClass
}) => {
  const videoContext = useContext(VideoContext);
  const {
    showVideo
  } = videoContext;
  return /*#__PURE__*/_jsxs(Fragment, {
    children: [/*#__PURE__*/_jsx("a", {
      className: "video-popup1",
      href: "#",
      onClick: () => showVideo(id ? id : "SZEflIVnhH8"),
      children: /*#__PURE__*/_jsx("div", {
        className: "video-btn video-btn-xl bg-orange-red ico-90",
        children: /*#__PURE__*/_jsx("div", {
          className: "video-block-wrapper",
          children: /*#__PURE__*/_jsx("span", {
            className: "flaticon-play-button"
          })
        })
      })
    }), /*#__PURE__*/_jsx("img", {
      className: "img-fluid",
      src: "/images/img-01.png",
      alt: "video-preview"
    })]
  });
};

const VideoWithBtn = ({
  id,
  extraClass,
  defText
}) => {
  const videoContext = useContext(VideoContext);
  const {
    showVideo
  } = videoContext;
  return /*#__PURE__*/_jsxs("a", {
    href: "#",
    className: extraClass ? extraClass : "video-popup2 btn btn-md btn-transparent ico-20 ico-left",
    onClick: () => showVideo(id ? id : "7e90gBu4pas"),
    children: [/*#__PURE__*/_jsx("span", {
      className: "flaticon-play"
    }), " ", defText ? defText : "See OLMO in Action"]
  });
};



/***/ })

};
;