exports.id = 399;
exports.ids = [399];
exports.modules = {

/***/ 4138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/context/video.js
var context_video = __webpack_require__(8173);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/VideoPopup.js





let useClickOutside = handler => {
  let domNode = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const VideoPopup = () => {
  const videoContext = (0,external_react_.useContext)(context_video/* VideoContext */.l);
  const {
    video,
    hideVideo
  } = videoContext;
  let domNode = useClickOutside(() => {
    hideVideo();
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => hideVideo()
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mfp-container mfp-s-ready mfp-iframe-holder",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => hideVideo(),
              children: "\xD7"
            }), /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              className: "mfp-iframe",
              src: video.id ? `//www.youtube.com/embed/${video.id}?autoplay=1` : "//www.youtube.com/embed/Y6MlVop80y0?autoplay=1",
              frameBorder: 0,
              allowFullScreen: true
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

/* harmony default export */ const components_VideoPopup = (VideoPopup);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(9164);
;// CONCATENATED MODULE: ./src/layout/Footer.js



const Footer = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    id: "footer-1",
    className: "footer division",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "bottom-footer",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row row-cols-1 row-cols-md-2 d-flex align-items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "footer-copyright",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["\xA9 2022 - ", new Date().getFullYear(), " \u05DB\u05DC \u05D4\u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05D5\u05E8\u05D5\u05EA \u05DC\u05E9\u05D8\u05E8\u05DF \u05DE\u05E9\u05DB\u05E0\u05EA\u05D0\u05D5\u05EA"]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col"
          })]
        })
      })
    })
  });
};

/* harmony default export */ const layout_Footer = (Footer);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/layout/Header.js






const Header = ({
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage
}) => {
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", utils/* scroll */.AR);
  }, []);
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(false);
  const {
    0: mobileMenuToggle,
    1: setMobileMenuToggle
  } = (0,external_react_.useState)("");

  const toggleFun = () => {
    setToggle(!toggle);
    document.querySelector("body").classList.toggle("wsactive");
  };

  const toggleMenu = value => {
    setMobileMenuToggle(mobileMenuToggle !== value ? value : "");
  };

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    id: "header",
    className: `header tra-menu ${navLight ? "navbar-light" : "navbar-dark"}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "header-wrapper",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "wsmobileheader clearfix",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "smllogo",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/images/logo-012.png",
            alt: "mobile-logo"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          id: "wsnavtoggle",
          onClick: () => toggleFun(),
          className: "wsanimated-arrow",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wsmainfull menu clearfix",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "wsmainwp clearfix",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "desktoplogo",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#top",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "logo-black",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "/images/logo-012.png",
                  alt: "header-logo"
                })
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "desktoplogo",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "#top",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "logo-white",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: `${whiteLogo ? "/images/logo-white2.png" : "/images/logo-02.png"}`,
                  alt: "header-logo"
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
            className: "wsmenu clearfix",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "overlapblackbg",
              onClick: () => toggleFun()
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: `wsmenu-list ${navHoverColor ? navHoverColor : "nav-skyblue-hover"}`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                class: "nl-simple",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#top",
                  children: "\u05E8\u05D0\u05E9\u05D9"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                class: "nl-simple",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#features-4",
                  children: "\u05D0\u05D9\u05DA \u05D6\u05D4 \u05E2\u05D5\u05D1\u05D3 ?"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                class: "nl-simple",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#content-5",
                  children: "\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DC\u05D0\u05EA\u05D2\u05E8"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                class: "nl-simple",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#content-5",
                  children: " \u05D1\u05D3\u05D9\u05E7\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                class: "nl-simple",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#faqs-2",
                  children: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05D5\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                class: "nl-simple",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#reviews-1",
                  children: "\u05E1\u05D9\u05E4\u05D5\u05E8\u05D9 \u05D4\u05E6\u05DC\u05D7\u05D4"
                })
              })]
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const layout_Header = (Header);
;// CONCATENATED MODULE: ./src/layout/ScrollTop.js



const ScrollTop = () => {
  const {
    0: scrollTop,
    1: setScrollTop
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let offset = window.scrollY;
    const sticky = document.getElementById("scrollUp");

    if (sticky) {
      if (offset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("a", {
    id: "scrollUp",
    href: "#top",
    title: "",
    style: {
      position: "fixed",
      zIndex: 2147483647,
      display: scrollTop ? "block" : "none"
    }
  });
};

/* harmony default export */ const layout_ScrollTop = (ScrollTop);
;// CONCATENATED MODULE: ./src/layout/Layout.js










const Layout = ({
  children,
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage
}) => {
  const videoContext = (0,external_react_.useContext)(context_video/* VideoContext */.l);
  const {
    video
  } = videoContext;
  (0,external_react_.useEffect)(() => {
    (0,utils/* aTagClick */.jd)();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [video.show && /*#__PURE__*/jsx_runtime_.jsx(components_VideoPopup, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "page",
      className: "page",
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_Header, {
        navLight: navLight,
        whiteLogo: whiteLogo,
        getStartText: getStartText,
        btnCustomHover: btnCustomHover,
        navHoverColor: navHoverColor,
        singlePage: singlePage
      }), children, /*#__PURE__*/jsx_runtime_.jsx(layout_Footer, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(layout_ScrollTop, {})]
  });
};

/* harmony default export */ const layout_Layout = (Layout);

/***/ }),

/***/ 9164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AR": () => (/* binding */ scroll),
/* harmony export */   "jd": () => (/* binding */ aTagClick),
/* harmony export */   "nd": () => (/* binding */ isotopLayout),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
const scroll = () => {
  let offset = window.scrollY;
  const sticky = document.querySelector(".wsmainfull");

  if (sticky) {
    if (offset > 80) {
      sticky.classList.add("scroll");
    } else {
      sticky.classList.remove("scroll");
    }
  }
};
const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");

  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", e => {
      e.preventDefault();
    });
  }
};
const isotopLayout = (container, item) => {
  setTimeout(() => {
    if (false) {}
  }, 1000);
};
const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx) => idx + 1);
  return arr;
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;