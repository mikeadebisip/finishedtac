webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Banner; });\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal-video */ \"./node_modules/react-modal-video/lib/index.js\");\n/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var assets_bannerBg3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/bannerBg3.jpg */ \"./src/assets/bannerBg3.jpg\");\n/* harmony import */ var assets_bannerBg3_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_bannerBg3_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var assets_banner_thumb1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/banner-thumb1.png */ \"./src/assets/banner-thumb1.png\");\n/* harmony import */ var assets_banner_thumb1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_banner_thumb1_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var assets_sponsor_taclogo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/sponsor/taclogo.png */ \"./src/assets/sponsor/taclogo.png\");\n/* harmony import */ var assets_sponsor_taclogo_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_sponsor_taclogo_png__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/devmikellc/Documents/Projects/apps/tacportal/home/src/sections/banner.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\n // import client1 from 'assets/sponsor/paypal.svg';\n\nvar data = [{\n  id: 1,\n  path: 'https://theafternoonchurch.org',\n  image: assets_sponsor_taclogo_png__WEBPACK_IMPORTED_MODULE_7___default.a,\n  title: 'TAC'\n}];\nfunction Banner() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      videoOpen = _useState[0],\n      setVideoOpen = _useState[1];\n\n  var handleClick = function handleClick(e) {\n    e.preventDefault();\n    setVideoOpen(true);\n  };\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"section\", {\n    sx: styles.banner,\n    id: \"home\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Container\"], {\n    sx: styles.banner.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.banner.contentBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Heading\"], {\n    as: \"h1\",\n    variant: \"heroPrimary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 11\n    }\n  }, \"Online Portal for The Afternoon Church scholarship\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    as: \"p\",\n    variant: \"heroSecondary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, \"Powered by The Afternoon Church, this is portal for The Afternoon Church scholarship,\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Flex\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    className: styles.dash,\n    variant: \"whiteButton\",\n    \"aria-label\": \"go to dashboard\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"a\", {\n    style: {\n      color: '#1b8a21',\n      textDecoration: 'none'\n    },\n    href: \"https://dashboard.tacscholarship.net/account/enrol\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"Go to dashboard \\u2197\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    channel: \"custom\",\n    url: \"https://web.facebook.com/1194608900/videos/1641225952897410/\",\n    isOpen: videoOpen // videoId=\"ZNA9rmDsYVE\"\n    ,\n    onClose: function onClose() {\n      return setVideoOpen(false);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Flex\"], {\n    sx: styles.sponsorBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Text\"], {\n    sx: styles.sponsorTitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"Sponsored by:\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.sponsorBox.sponsor,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, data.map(function (item, index) {\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      path: item.path,\n      key: \"client-key\".concat(index),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Image\"], {\n      src: item.image,\n      width: \"100px\",\n      alt: item.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 19\n      }\n    }));\n  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Box\"], {\n    sx: styles.banner.imageBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_0__[\"Image\"], {\n    src: assets_banner_thumb1_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    width: \"90%\",\n    alt: \"banner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Banner, \"fjrTXSMqqo5cVpzR03nEXJYpFAo=\");\n\n_c = Banner;\nvar styles = {\n  banner: {\n    overflow: ['hidden', 'initial', null, 'hidden'],\n    backgroundImage: \"url(\".concat(assets_bannerBg3_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, \")\"),\n    backgroundRepeat: \"no-repeat\",\n    backgroundPosition: 'top left',\n    backgroundSize: 'cover',\n    borderBottomRightRadius: [100, 150, null, null, null, 250],\n    pt: ['150px', null, null, null, null, null, '140px', '130px'],\n    pb: ['100px', null, null, '110px', null, 10, '150px'],\n    backgroundColor: 'primary',\n    container: {\n      display: 'flex'\n    },\n    contentBox: {\n      width: ['100%', null, '85%', '95%', '50%', '55%'],\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'flex-start',\n      flexShrink: 0,\n      pt: [0, null, null, null, null, null, 5, 7]\n    },\n    imageBox: {\n      display: ['none', null, null, 'block'],\n      justifyContent: 'center',\n      ml: [0, null, null, '-110px', '-115px', '-150px', '-210px', '-270px'],\n      mr: [0, null, null, '-145px', '-160px', '-180px', '-220px', '-290px'],\n      mt: [0, null, null, '40px', 4, 7, 0],\n      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],\n      overflow: 'hidden',\n      textAlign: 'center',\n      width: '100%'\n    }\n  },\n  sponsorTitle: {\n    color: 'white',\n    fontSize: [1, 2],\n    opacity: 0.6,\n    pr: 20,\n    flexShrink: 0,\n    pb: [2, null, 0]\n  },\n  sponsorBox: {\n    display: 'flex',\n    pt: ['35px', null, null, null, null, '45px'],\n    flexDirection: ['row'],\n    alignItems: 'center',\n    sponsor: {\n      display: 'flex',\n      alignItems: 'center',\n      '> a': {\n        mr: [5, null, null, 4, 6],\n        display: 'flex',\n        '&:last-of-type': {\n          mr: 0\n        }\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Banner\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcz80ODZiIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInBhdGgiLCJpbWFnZSIsImNsaWVudDEiLCJ0aXRsZSIsIkJhbm5lciIsInVzZVN0YXRlIiwidmlkZW9PcGVuIiwic2V0VmlkZW9PcGVuIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJiYW5uZXIiLCJjb250YWluZXIiLCJjb250ZW50Qm94IiwiZGFzaCIsImNvbG9yIiwidGV4dERlY29yYXRpb24iLCJzcG9uc29yQm94Iiwic3BvbnNvclRpdGxlIiwic3BvbnNvciIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltYWdlQm94IiwiQmFubmVyVGh1bWIiLCJvdmVyZmxvdyIsImJhY2tncm91bmRJbWFnZSIsIkJhbm5lckJHIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMiLCJwdCIsInBiIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIndpZHRoIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJmbGV4U2hyaW5rIiwianVzdGlmeUNvbnRlbnQiLCJtbCIsIm1yIiwibXQiLCJtYiIsInRleHRBbGlnbiIsImZvbnRTaXplIiwib3BhY2l0eSIsInByIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUdBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxnQ0FGUjtBQUdFQyxPQUFLLEVBQUVDLGlFQUhUO0FBSUVDLE9BQUssRUFBRTtBQUpULENBRFcsQ0FBYjtBQVNlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0Is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SztBQUVaK0IsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGRTtBQUdaQyxXQUFPLEVBQUUsR0FIRztBQUlaQyxNQUFFLEVBQUUsRUFKUTtBQUtaVCxjQUFVLEVBQUUsQ0FMQTtBQU1aTixNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVY7QUFOUSxHQWxDRDtBQTBDYmhCLFlBQVUsRUFBRTtBQUNWa0IsV0FBTyxFQUFFLE1BREM7QUFFVkgsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLElBQTNCLEVBQWlDLE1BQWpDLENBRk07QUFHVkssaUJBQWEsRUFBRSxDQUFDLEtBQUQsQ0FITDtBQUlWQyxjQUFVLEVBQUMsUUFKRDtBQUtWbkIsV0FBTyxFQUFFO0FBQ1BnQixhQUFPLEVBQUUsTUFERjtBQUVQRyxnQkFBVSxFQUFFLFFBRkw7QUFHUCxhQUFPO0FBQ0xJLFVBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQURDO0FBRUxQLGVBQU8sRUFBRSxNQUZKO0FBR0wsMEJBQWtCO0FBQ2hCTyxZQUFFLEVBQUU7QUFEWTtBQUhiO0FBSEE7QUFMQztBQTFDQyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2Jhbm5lci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWxWaWRlbyBmcm9tICdyZWFjdC1tb2RhbC12aWRlbyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCB7IEZhUGxheUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCBCYW5uZXJCRyBmcm9tICdhc3NldHMvYmFubmVyQmczLmpwZyc7XG5pbXBvcnQgQmFubmVyVGh1bWIgZnJvbSAnYXNzZXRzL2Jhbm5lci10aHVtYjEucG5nJztcblxuaW1wb3J0IGNsaWVudDEgZnJvbSAnYXNzZXRzL3Nwb25zb3IvdGFjbG9nby5wbmcnO1xuLy8gaW1wb3J0IGNsaWVudDEgZnJvbSAnYXNzZXRzL3Nwb25zb3IvcGF5cGFsLnN2Zyc7XG5cblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHBhdGg6ICdodHRwczovL3RoZWFmdGVybm9vbmNodXJjaC5vcmcnLFxuICAgIGltYWdlOiBjbGllbnQxLFxuICAgIHRpdGxlOiAnVEFDJyxcbiAgfVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyKCkge1xuICBjb25zdCBbdmlkZW9PcGVuLCBzZXRWaWRlb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZpZGVvT3Blbih0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17c3R5bGVzLmJhbm5lcn0gaWQ9XCJob21lXCI+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuYmFubmVyLmNvbnRhaW5lcn0+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuY29udGVudEJveH0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmlhbnQ9XCJoZXJvUHJpbWFyeVwiPlxuICAgICAgICAgICAgT25saW5lIFBvcnRhbCBmb3IgVGhlIEFmdGVybm9vbiBDaHVyY2ggc2Nob2xhcnNoaXBcbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCIgdmFyaWFudD1cImhlcm9TZWNvbmRhcnlcIj5cbiAgICAgICAgICAgIFBvd2VyZWQgYnkgVGhlIEFmdGVybm9vbiBDaHVyY2gsIHRoaXMgaXMgcG9ydGFsIGZvciBUaGUgQWZ0ZXJub29uIENodXJjaCBzY2hvbGFyc2hpcCwgXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5kYXNofSB2YXJpYW50PVwid2hpdGVCdXR0b25cIiBhcmlhLWxhYmVsPVwiZ28gdG8gZGFzaGJvYXJkXCI+XG4gICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOiAnIzFiOGEyMScsIHRleHREZWNvcmF0aW9uOidub25lJ319IGhyZWY9J2h0dHBzOi8vZGFzaGJvYXJkLnRhY3NjaG9sYXJzaGlwLm5ldC9hY2NvdW50L2Vucm9sJz5cbiAgICAgICAgICAgIEdvIHRvIGRhc2hib2FyZCDihpdcbiAgICAgICAgICAgIDwvYT4gXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxNb2RhbFZpZGVvXG4gICAgICAgICAgICAgICAgY2hhbm5lbD1cImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgdXJsPSdodHRwczovL3dlYi5mYWNlYm9vay5jb20vMTE5NDYwODkwMC92aWRlb3MvMTY0MTIyNTk1Mjg5NzQxMC8nXG4gICAgICAgICAgICAgICAgaXNPcGVuPXt2aWRlb09wZW59XG4gICAgICAgICAgICAgICAgLy8gdmlkZW9JZD1cIlpOQTlybURzWVZFXCJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRWaWRlb09wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuc3BvbnNvckJveH0+XG4gICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLnNwb25zb3JUaXRsZX0+U3BvbnNvcmVkIGJ5OjwvVGV4dD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5zcG9uc29yQm94LnNwb25zb3J9PlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD17aXRlbS5wYXRofSBrZXk9e2BjbGllbnQta2V5JHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1hZ2V9IHdpZHRoPScxMDBweCcgYWx0PXtpdGVtLnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5iYW5uZXIuaW1hZ2VCb3h9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e0Jhbm5lclRodW1ifSB3aWR0aD0nOTAlJyBhbHQ9XCJiYW5uZXJcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBiYW5uZXI6IHtcbiAgICBvdmVyZmxvdzogWydoaWRkZW4nLCAnaW5pdGlhbCcsIG51bGwsICdoaWRkZW4nXSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtCYW5uZXJCR30pYCxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBgbm8tcmVwZWF0YCxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICd0b3AgbGVmdCcsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IFsxMDAsIDE1MCwgbnVsbCwgbnVsbCwgbnVsbCwgMjUwXSxcbiAgICBwdDogWycxNTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsICcxMzBweCddLFxuICAgIHBiOiBbJzEwMHB4JywgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgMTAsICcxNTBweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgY29udGVudEJveDoge1xuICAgICAgd2lkdGg6IFsnMTAwJScsIG51bGwsICc4NSUnLCAnOTUlJywgJzUwJScsICc1NSUnXSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIHB0OiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNSwgN10sXG4gICAgfSxcbiAgICBpbWFnZUJveDoge1xuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtbDogWzAsIG51bGwsIG51bGwsICctMTEwcHgnLCAnLTExNXB4JywgJy0xNTBweCcsICctMjEwcHgnLCAnLTI3MHB4J10sXG4gICAgICBtcjogWzAsIG51bGwsIG51bGwsICctMTQ1cHgnLCAnLTE2MHB4JywgJy0xODBweCcsICctMjIwcHgnLCAnLTI5MHB4J10sXG4gICAgICBtdDogWzAsIG51bGwsIG51bGwsICc0MHB4JywgNCwgNywgMF0sXG4gICAgICBtYjogWzAsIG51bGwsIG51bGwsIG51bGwsICctNDVweCcsICctNzBweCcsIG51bGwsICctMTE1cHgnXSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gIH0sXG4gIHNwb25zb3JUaXRsZToge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgb3BhY2l0eTogMC42LFxuICAgIHByOiAyMCxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHBiOiBbMiwgbnVsbCwgMF0sXG4gIH0sXG4gIHNwb25zb3JCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcHQ6IFsnMzVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc0NXB4J10sXG4gICAgZmxleERpcmVjdGlvbjogWydyb3cnXSxcbiAgICBhbGlnbkl0ZW1zOidjZW50ZXInLFxuICAgIHNwb25zb3I6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgJz4gYSc6IHtcbiAgICAgICAgbXI6IFs1LCBudWxsLCBudWxsLCA0LCA2XSxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAnJjpsYXN0LW9mLXR5cGUnOiB7XG4gICAgICAgICAgbXI6IDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/banner.js\n");

/***/ })

})