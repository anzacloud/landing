webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ \"./src/components/link.js\");\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.data */ \"./src/components/footer/footer.data.js\");\nvar _jsxFileName = \"/Users/ndeto/Desktop/Development/anza-cloud/website/landing/src/components/footer/footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\nfunction Footer() {\n  var _this = this;\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"footer\", {\n    sx: styles.footer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Divider\"], {\n    sx: styles.footer.divider,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.footer.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, _footer_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].map(function (_ref, i) {\n    var header = _ref.header,\n        items = _ref.items;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      key: i,\n      sx: styles.footer.widget,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }\n    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n      sx: styles.footer.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }, header), items.map(function (_ref2, i) {\n      var path = _ref2.path,\n          label = _ref2.label;\n      return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_link__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        sx: styles.footer.text,\n        path: path,\n        key: i,\n        label: label,\n        variant: \"footer\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 15\n        }\n      });\n    }));\n  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    sx: styles.footer.text2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \" \", \"Crafted with \\u2764\\uFE0F in \\uD83C\\uDDF0\\uD83C\\uDDEA | Copyright \\xA9 2020 - Anza Cloud\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"hr\", {\n    sx: {\n      width: \"30px\",\n      cursor: \"pointer\",\n      display: \"flex\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  })));\n}\n_c = Footer;\nvar styles = {\n  footer: {\n    paddingBottom: \"60px\",\n    \"@media(max-width: 1024px)\": {\n      paddingBottom: \"70px\"\n    },\n    \"@media(max-width: 991px)\": {\n      paddingBottom: \"30px\"\n    },\n    divider: {\n      borderColor: \"#E5ECF4\",\n      margin: 0,\n      borderWidth: \"1px\",\n      width: \"100%\",\n      maxWidth: \"900px\",\n      marginLeft: \"auto\",\n      marginRight: \"auto\",\n      marginBottom: \"55px\"\n    },\n    container: {\n      maxWidth: \"930px\",\n      paddingLeft: \"15px\",\n      paddingRight: \"15px\",\n      display: \"grid\",\n      gridTemplateColumns: \"1fr 1fr 1fr 1fr\",\n      \"@media(max-width: 991px)\": {\n        gridTemplateColumns: \"1fr 1fr\"\n      }\n    },\n    widget: {\n      \"@media(max-width: 991px)\": {\n        marginBottom: \"30px\"\n      },\n      \"a:hover\": {\n        color: \"primary\",\n        cursor: \"pointer\"\n      },\n      \"a+a\": {\n        marginTop: \"6px\"\n      }\n    },\n    title: {\n      fontSize: \"18px\",\n      fontWeight: 500,\n      lineHeight: 1.67,\n      margin: 0,\n      marginBottom: \"14px\"\n    },\n    text2: {\n      // fontFamily: \"Coiny\",\n      marginTop: \"40px\",\n      fontSize: \"14px\",\n      cursor: \"pointer\",\n      textAlign: \"center\"\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcz83YzhiIl0sIm5hbWVzIjpbIkZvb3RlciIsInN0eWxlcyIsImZvb3RlciIsImRpdmlkZXIiLCJjb250YWluZXIiLCJtZW51SXRlbXMiLCJtYXAiLCJpIiwiaGVhZGVyIiwiaXRlbXMiLCJ3aWRnZXQiLCJ0aXRsZSIsInBhdGgiLCJsYWJlbCIsInRleHQiLCJ0ZXh0MiIsIndpZHRoIiwiY3Vyc29yIiwiZGlzcGxheSIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJDb2xvciIsIm1hcmdpbiIsImJvcmRlcldpZHRoIiwibWF4V2lkdGgiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2xvciIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFFRCxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsT0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjRSxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG9EQUFTLENBQUNDLEdBQVYsQ0FBYyxnQkFBb0JDLENBQXBCO0FBQUEsUUFBR0MsTUFBSCxRQUFHQSxNQUFI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O0FBQ0FnQixlQUFTLEVBQUUsTUFGTjtBQUdMQyxjQUFRLEVBQUUsTUFITDtBQUlMZixZQUFNLEVBQUUsU0FKSDtBQUtMa0IsZUFBUyxFQUFFO0FBTE47QUEvQ0Q7QUFESyxDQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBIZWFkaW5nLCBCb3gsIERpdmlkZXIsIFRleHQsIENvbnRhaW5lciB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJjb21wb25lbnRzL2xpbmtcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJjb21wb25lbnRzL2xvZ29cIjtcbmltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vZm9vdGVyLmRhdGFcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxEaXZpZGVyIHN4PXtzdHlsZXMuZm9vdGVyLmRpdmlkZXJ9IC8+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuZm9vdGVyLmNvbnRhaW5lcn0+XG4gICAgICAgIHttZW51SXRlbXMubWFwKCh7IGhlYWRlciwgaXRlbXMgfSwgaSkgPT4gKFxuICAgICAgICAgIDxCb3gga2V5PXtpfSBzeD17c3R5bGVzLmZvb3Rlci53aWRnZXR9PlxuICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy5mb290ZXIudGl0bGV9PntoZWFkZXJ9PC9IZWFkaW5nPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5mb290ZXIudGV4dH1cbiAgICAgICAgICAgICAgICBwYXRoPXtwYXRofVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZvb3RlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxUZXh0IHN4PXtzdHlsZXMuZm9vdGVyLnRleHQyfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgQ3JhZnRlZCB3aXRoIOKdpO+4jyBpbiDwn4ew8J+HqiB8IENvcHlyaWdodCDCqSAyMDIwIC0gQW56YSBDbG91ZFxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIHsvKiA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci50ZXh0fT5Db3B5cmlnaHQgwqkgMjAyMCAtIEFuemEgQ2xvdWQ8L1RleHQ+ICovfVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8aHJcbiAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgd2lkdGg6IFwiMzBweFwiLFxuICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXI6IHtcbiAgICBwYWRkaW5nQm90dG9tOiBcIjYwcHhcIixcbiAgICBcIkBtZWRpYShtYXgtd2lkdGg6IDEwMjRweClcIjoge1xuICAgICAgcGFkZGluZ0JvdHRvbTogXCI3MHB4XCIsXG4gICAgfSxcbiAgICBcIkBtZWRpYShtYXgtd2lkdGg6IDk5MXB4KVwiOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjMwcHhcIixcbiAgICB9LFxuICAgIGRpdmlkZXI6IHtcbiAgICAgIGJvcmRlckNvbG9yOiBcIiNFNUVDRjRcIixcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcbiAgICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgICAgbWFyZ2luQm90dG9tOiBcIjU1cHhcIixcbiAgICB9LFxuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWF4V2lkdGg6IFwiOTMwcHhcIixcbiAgICAgIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIixcbiAgICAgIHBhZGRpbmdSaWdodDogXCIxNXB4XCIsXG4gICAgICBkaXNwbGF5OiBcImdyaWRcIixcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmciAxZnIgMWZyXCIsXG4gICAgICBcIkBtZWRpYShtYXgtd2lkdGg6IDk5MXB4KVwiOiB7XG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMWZyIDFmclwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHdpZGdldDoge1xuICAgICAgXCJAbWVkaWEobWF4LXdpZHRoOiA5OTFweClcIjoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxuICAgICAgfSxcbiAgICAgIFwiYTpob3ZlclwiOiB7XG4gICAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIH0sXG4gICAgICBcImErYVwiOiB7XG4gICAgICAgIG1hcmdpblRvcDogXCI2cHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGluZUhlaWdodDogMS42NyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIxNHB4XCIsXG4gICAgfSxcbiAgICB0ZXh0Mjoge1xuICAgICAgLy8gZm9udEZhbWlseTogXCJDb2lueVwiLFxuICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcbiAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/footer/footer.js\n");

/***/ })

})