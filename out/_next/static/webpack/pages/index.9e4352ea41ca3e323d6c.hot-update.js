webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_logo_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../contexts/drawer/drawer.provider */ \"./src/contexts/drawer/drawer.provider.js\");\n/* harmony import */ var _mobile_drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile-drawer */ \"./src/components/header/mobile-drawer.js\");\n/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header.data */ \"./src/components/header/header.data.js\");\n\n\nvar _jsxFileName = \"/Users/devmikellc/Documents/Projects/apps/tacportal/home/src/components/header/header.js\",\n    _templateObject;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\n\nfunction Header(_ref) {\n  var _this = this;\n\n  var className = _ref.className;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_7__[\"DrawerProvider\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"header\", {\n    sx: styles.header,\n    className: className,\n    id: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    sx: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    src: assets_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], {\n    as: \"nav\",\n    sx: styles.nav,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 11\n    }\n  }, _header_data__WEBPACK_IMPORTED_MODULE_9__[\"default\"].map(function (_ref2, i) {\n    var path = _ref2.path,\n        label = _ref2.label;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      activeClass: \"active\",\n      href: path,\n      spy: true,\n      smooth: true,\n      offset: -70,\n      duration: 500,\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 14\n      }\n    }, label);\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n    className: \"dropdown\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 1\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    className: \"donate__btn\",\n    variant: \"secondary\",\n    \"aria-label\": \"Enrol\",\n    onClick: function onClick() {\n      return router.push('');\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 1\n    }\n  }, \"Dashboard\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\", {\n    className: \"dropdown-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"a\", {\n    href: \"https://dashboard.\".concat(process.env.HOSTED_DOMAIN_NAME, \"/account/enrol\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, \"Enrol\", \"  \", \"  \", \"  \", \"  \", \" \\u2197\", \" \"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"a\", {\n    href: \"https://dashboard.\".concat(process.env.HOSTED_DOMAIN_NAME, \"/account/login\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, \"Login\", \"  \", \" \\u2197\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"a\", {\n    href: \"https://dashboard.\".concat(process.env.HOSTED_DOMAIN_NAME, \"/account/apply\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, \"Apply\", \"  \", \" \\u2197\", \" \"))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(_mobile_drawer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }))));\n}\n_c = Header;\nvar positionAnim = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"keyframes\"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  from {\\n    position: fixed;\\n    opacity: 1;\\n  }\\n  to {\\n    position: absolute;\\n    opacity: 1;\\n    transition: all 0.4s ease;\\n  }\\n\"])));\nvar styles = {\n  header: {\n    color: 'white',\n    fontWeight: 'normal',\n    py: 4,\n    width: '100%',\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    backgroundColor: 'transparent',\n    transition: 'all 0.5s ease',\n    animation: \"\".concat(positionAnim, \" 0.4s ease\"),\n    '.donate__btn': {\n      flexShrink: 0,\n      mr: [15, 20, null, null, 0],\n      ml: ['auto', null, null, null, 0]\n    },\n    '&.sticky': {\n      position: 'fixed',\n      backgroundColor: 'background',\n      color: '#000000',\n      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',\n      py: 3,\n      'nav > a': {\n        color: 'secondary'\n      },\n      '.donate__btn': {\n        borderColor: 'primary',\n        color: 'primary',\n        '&:hover': {\n          boxShadow: 'rgba(31, 62, 118, 0.57) 0px 9px 20px -5px',\n          backgroundColor: 'primary',\n          color: 'white'\n        }\n      }\n    }\n  },\n  container: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-between'\n  },\n  nav: {\n    mx: 'auto',\n    display: 'none',\n    '@media screen and (min-width: 1024px)': {\n      display: 'block',\n      a: {\n        fontSize: '16px',\n        fontWeight: '400',\n        px: 25,\n        cursor: 'pointer',\n        lineHeight: '1.2',\n        color: 'white',\n        textDecoration: 'none',\n        '&.active': {\n          color: 'secondary'\n        },\n        \"&:first-child\": {\n          color: 'secondary'\n        }\n      }\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcz8xMjBlIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzTmFtZSIsInN0eWxlcyIsImhlYWRlciIsImNvbnRhaW5lciIsIkxvZ29QbmciLCJuYXYiLCJtZW51SXRlbXMiLCJtYXAiLCJpIiwicGF0aCIsImxhYmVsIiwicm91dGVyIiwicHVzaCIsInByb2Nlc3MiLCJlbnYiLCJIT1NURURfRE9NQUlOX05BTUUiLCJwb3NpdGlvbkFuaW0iLCJrZXlmcmFtZXMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsIndpZHRoIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwidHJhbnNpdGlvbiIsImFuaW1hdGlvbiIsImZsZXhTaHJpbmsiLCJtciIsIm1sIiwiYm94U2hhZG93IiwiYm9yZGVyQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibXgiLCJhIiwiZm9udFNpemUiLCJweCIsImN1cnNvciIsImxpbmVIZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQzVDLFNBQ0UscURBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQTJCLGFBQVMsRUFBRUYsU0FBdEM7QUFBaUQsTUFBRSxFQUFDLFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE1BQUUsRUFBRUMsTUFBTSxDQUFDRSxTQUF0QjtBQUFBO0FBQUE7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QjtBQUhVLEtBWFY7QUFnQk4sZ0JBQVk7QUFDVlIsY0FBUSxFQUFFLE9BREE7QUFFVkcscUJBQWUsRUFBRSxZQUZQO0FBR1ZQLFdBQUssRUFBRSxTQUhHO0FBSVZhLGVBQVMsRUFBRSwrQkFKRDtBQUtWWCxRQUFFLEVBQUUsQ0FMTTtBQU1WLGlCQUFXO0FBQ1RGLGFBQUssRUFBRTtBQURFLE9BTkQ7QUFTVixzQkFBZ0I7QUFDZGMsbUJBQVcsRUFBRSxTQURDO0FBRWRkLGFBQUssRUFBRSxTQUZPO0FBR2QsbUJBQVc7QUFDVGEsbUJBQVMsRUFBRSwyQ0FERjtBQUVUTix5QkFBZSxFQUFFLFNBRlI7QUFHVFAsZUFBSyxFQUFFO0FBSEU7QUFIRztBQVROO0FBaEJOLEdBREs7QUFxQ2JmLFdBQVMsRUFBRTtBQUNUOEIsV0FBTyxFQUFFLE1BREE7QUFFVEMsY0FBVSxFQUFFLFFBRkg7QUFHVEMsa0JBQWMsRUFBRTtBQUhQLEdBckNFO0FBMENiOUIsS0FBRyxFQUFFO0FBQ0grQixNQUFFLEVBQUUsTUFERDtBQUVISCxXQUFPLEVBQUUsTUFGTjtBQUdILDZDQUF5QztBQUN2Q0EsYUFBTyxFQUFFLE9BRDhCO0FBRXZDSSxPQUFDLEVBQUU7QUFDREMsZ0JBQVEsRUFBRSxNQURUO0FBRURuQixrQkFBVSxFQUFFLEtBRlg7QUFHRG9CLFVBQUUsRUFBRSxFQUhIO0FBSURDLGNBQU0sRUFBRSxTQUpQO0FBS0RDLGtCQUFVLEVBQUUsS0FMWDtBQU1EdkIsYUFBSyxFQUFFLE9BTk47QUFPRHdCLHNCQUFjLEVBQUUsTUFQZjtBQVFELG9CQUFZO0FBQ1Z4QixlQUFLLEVBQUU7QUFERyxTQVJYO0FBVUUseUJBQWdCO0FBQUNBLGVBQUssRUFBRTtBQUFSO0FBVmxCO0FBRm9DO0FBSHRDO0FBMUNRLENBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCBMb2dvUG5nIGZyb20gJ2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZS1kcmF3ZXInO1xuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyUHJvdmlkZXI+XG4gICAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPExvZ28gc3JjPXtMb2dvUG5nfSAvPlxuXG4gICAgICAgICAgPEZsZXggYXM9XCJuYXZcIiBzeD17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG5cblxuICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICAgIGhyZWY9e3BhdGh9XG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuIFxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9GbGV4PlxuPGRpdiBjbGFzc05hbWU9J2Ryb3Bkb3duJz5cbjxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uYXRlX19idG5cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVucm9sXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJycpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgRGFzaGJvYXJkXG4gICAgICAgIFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9kYXNoYm9hcmQuJHtwcm9jZXNzLmVudi5IT1NURURfRE9NQUlOX05BTUV9L2FjY291bnQvZW5yb2xgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRW5yb2x7XCIgIFwifVxuICAgICAgICAgICAgICAgIHtcIiAgXCJ9XG4gICAgICAgICAgICAgICAge1wiICBcIn1cbiAgICAgICAgICAgICAgICB7XCIgIFwifSDihpd7XCIgXCJ9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9kYXNoYm9hcmQuJHtwcm9jZXNzLmVudi5IT1NURURfRE9NQUlOX05BTUV9L2FjY291bnQvbG9naW5gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9naW57XCIgIFwifSDihpdcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2Rhc2hib2FyZC4ke3Byb2Nlc3MuZW52LkhPU1RFRF9ET01BSU5fTkFNRX0vYWNjb3VudC9hcHBseWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBcHBseXtcIiAgXCJ9IOKGl3tcIiBcIn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG48L2Rpdj5cbiAgICAgICAgICA8TW9iaWxlRHJhd2VyIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9EcmF3ZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuY29uc3QgcG9zaXRpb25BbmltID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICB0byB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBoZWFkZXI6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBweTogNCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNXMgZWFzZScsXG4gICAgYW5pbWF0aW9uOiBgJHtwb3NpdGlvbkFuaW19IDAuNHMgZWFzZWAsXG4gICAgJy5kb25hdGVfX2J0bic6IHtcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBtcjogWzE1LCAyMCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXG4gICAgfSxcbiAgICAnJi5zdGlja3knOiB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcbiAgICAgIHB5OiAzLFxuICAgICAgJ25hdiA+IGEnOiB7XG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgICAnLmRvbmF0ZV9fYnRuJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDMxLCA2MiwgMTE4LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICB9LFxuICBuYXY6IHtcbiAgICBteDogJ2F1dG8nLFxuICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSc6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBhOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxuICAgICAgICBweDogMjUsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgICcmLmFjdGl2ZSc6IHtcbiAgICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXG4gICAgICAgIH0sIFwiJjpmaXJzdC1jaGlsZFwiOntjb2xvcjogJ3NlY29uZGFyeSd9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/header/header.js\n");

/***/ })

})