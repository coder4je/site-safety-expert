"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_usStates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/usStates */ \"./public/usStates.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"New York\");\n    const [subject, setSubject] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        if (loading) {\n            return;\n        }\n        setLoading(true);\n        try {\n            const response = await fetch(\"/api/generate-safety\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    state,\n                    subject\n                })\n            });\n            const data = await response.json();\n            setResult(data.result.replaceAll(\"\\n\", \"<br />\"));\n        } catch (e) {\n            alert(\"Failed to generate results, Try later\");\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"OpenAI Quickstart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/dog.png\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Ask a Safety Expert\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"STATE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"state\",\n                                value: state,\n                                onChange: (e)=>setState(e.target.value),\n                                children: _public_usStates__WEBPACK_IMPORTED_MODULE_3__.USstates.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: item,\n                                        children: item\n                                    }, item, false, {\n                                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"SUBJECT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"subject\",\n                                placeholder: \"Enter a Subject\",\n                                value: subject,\n                                onChange: (e)=>setSubject(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate names\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Looking for the best answer\\uD83D\\uDCA1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result),\n                        dangerouslySetInnerHTML: {\n                            __html: result\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n} // write a select tag with 52 united states as options using an iterator\n_s(Home, \"mGPbNUbz4mW4Eg3h87h+yetP+f0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ3NCO0FBQ1g7QUFDTTtBQUUvQixTQUFTTSxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUE7SUFFcEMsZUFBZWEsU0FBU0MsS0FBSyxFQUFFO1FBQzdCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUlOLFNBQVM7WUFDWDtRQUNGLENBQUM7UUFDREMsV0FBVyxJQUFJO1FBQ2YsSUFBSTtZQUNGLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSx3QkFBd0I7Z0JBQ25EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWpCO29CQUFPRTtnQkFBUTtZQUN4QztZQUVBLE1BQU1nQixPQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFDaENaLFVBQVVXLEtBQUtaLE1BQU0sQ0FBQ2MsVUFBVSxDQUFDLE1BQU07UUFDekMsRUFBRSxPQUFPQyxHQUFHO1lBQ1ZDLE1BQU07UUFDUjtRQUVBakIsV0FBVyxLQUFLO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNrQjs7MEJBQ0MsOERBQUM5QixrREFBSUE7O2tDQUNILDhEQUFDK0I7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLQyxXQUFXaEMsK0RBQVc7O2tDQUMxQiw4REFBQ2lDO3dCQUFJQyxLQUFJO3dCQUFXRixXQUFXaEMsK0RBQVc7Ozs7OztrQ0FDMUMsOERBQUNvQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBSzFCLFVBQVVBOzswQ0FDZCw4REFBQzJCOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPdEM7Z0NBQ1B1QyxVQUFVLENBQUNsQixJQUFNcEIsU0FBU29CLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7MENBQ3ZDeEMsMERBQVksQ0FBQyxDQUFDNEMscUJBQ2IsOERBQUNDO3dDQUFrQkwsT0FBT0k7a0RBQ3ZCQTt1Q0FEVUE7Ozs7Ozs7Ozs7MENBS2pCLDhEQUFDUDswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDUztnQ0FDQ0MsTUFBSztnQ0FDTFIsTUFBSztnQ0FDTFMsYUFBWTtnQ0FDWlIsT0FBT3BDO2dDQUNQcUMsVUFBVSxDQUFDbEIsSUFBTWxCLFdBQVdrQixFQUFFbUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MENBRTVDLDhEQUFDTTtnQ0FBTUMsTUFBSztnQ0FBU1AsT0FBTTs7Ozs7Ozs7Ozs7O29CQUc1QmxDLHlCQUNDLDhEQUFDbUI7OzBDQUNDLDhEQUFDd0I7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ3hCO2dDQUFJTSxXQUFXaEMsa0VBQWM7Ozs7Ozs7Ozs7OztrQ0FJbEMsOERBQUMwQjt3QkFDQ00sV0FBV2hDLGlFQUFhO3dCQUN4Qm1ELHlCQUF5Qjs0QkFBRUMsUUFBUTNDO3dCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEQsQ0FBQyxDQUNELHdFQUF3RTtHQWhGaERQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgVVNzdGF0ZXMgfSBmcm9tIFwiLi4vcHVibGljL3VzU3RhdGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJOZXcgWW9ya1wiKTtcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZS1zYWZldHlcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdGUsIHN1YmplY3QgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldFJlc3VsdChkYXRhLnJlc3VsdC5yZXBsYWNlQWxsKFwiXFxuXCIsIFwiPGJyIC8+XCIpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBhbGVydChcIkZhaWxlZCB0byBnZW5lcmF0ZSByZXN1bHRzLCBUcnkgbGF0ZXJcIik7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZG9nLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aW1nIHNyYz1cIi9kb2cucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgPGgzPkFzayBhIFNhZmV0eSBFeHBlcnQ8L2gzPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbD5TVEFURTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdGUoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIHtVU3N0YXRlcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2l0ZW19IHZhbHVlPXtpdGVtfT5cbiAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8bGFiZWw+U1VCSkVDVDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwic3ViamVjdFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGEgU3ViamVjdFwiXG4gICAgICAgICAgICB2YWx1ZT17c3ViamVjdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiR2VuZXJhdGUgbmFtZXNcIiAvPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDQ+TG9va2luZyBmb3IgdGhlIGJlc3QgYW5zd2Vy8J+SoTwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PjwvZGl2PlxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2xvYWRpbmcud2VicFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9IC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmVzdWx0fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcmVzdWx0IH19XG4gICAgICAgIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4vLyB3cml0ZSBhIHNlbGVjdCB0YWcgd2l0aCA1MiB1bml0ZWQgc3RhdGVzIGFzIG9wdGlvbnMgdXNpbmcgYW4gaXRlcmF0b3JcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlVTc3RhdGVzIiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwicmVwbGFjZUFsbCIsImUiLCJhbGVydCIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaWNvbiIsImgzIiwiZm9ybSIsImxhYmVsIiwic2VsZWN0IiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIiwib3B0aW9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJoNCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});