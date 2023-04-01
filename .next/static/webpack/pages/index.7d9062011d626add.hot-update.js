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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_usStates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/usStates */ \"./public/usStates.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"New York\");\n    const [subject, setSubject] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        if (loading) {\n            return;\n        }\n        setLoading(true);\n        try {\n            const response = await fetch(\"/api/generate-safety\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    state,\n                    subject\n                })\n            });\n            const data = await response.json();\n            setResult(data.result);\n        } catch (e) {\n            alert(\"Failed to generate results, Try later\");\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"OpenAI Quickstart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/dog.png\",\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().icon)\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Ask a Safety Expert\"\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"STATE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                name: \"state\",\n                                value: state,\n                                onChange: (e)=>setState(e.target.value),\n                                children: _public_usStates__WEBPACK_IMPORTED_MODULE_3__.USstates.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: item,\n                                        children: item\n                                    }, item, false, {\n                                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this))\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"SUBJECT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                name: \"subject\",\n                                placeholder: \"Enter a Subject\",\n                                value: subject,\n                                onChange: (e)=>setSubject(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Generate names\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading),\n                                children: \"Looking for the best answer \\uD83D\\uDC97\\uD83D\\uDC97\\uD83D\\uDC97 \\uD83D\\uDCA1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"loader\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().result),\n                        children: result\n                    }, void 0, false, {\n                        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/taeminkim/Development/code/project/site-safety-expert/openai-quickstart-node/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n} // write a select tag with 52 united states as options using an iterator\n_s(Home, \"mGPbNUbz4mW4Eg3h87h+yetP+f0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTZCO0FBQ3NCO0FBQ1g7QUFDTTtBQUUvQixTQUFTTSxPQUFPOztJQUM3QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU0sQ0FBQ1MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1csUUFBUUMsVUFBVSxHQUFHWiwrQ0FBUUE7SUFFcEMsZUFBZWEsU0FBU0MsS0FBSyxFQUFFO1FBQzdCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUlOLFNBQVM7WUFDWDtRQUNGLENBQUM7UUFDREMsV0FBVyxJQUFJO1FBQ2YsSUFBSTtZQUNGLE1BQU1NLFdBQVcsTUFBTUMsTUFBTSx3QkFBd0I7Z0JBQ25EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWpCO29CQUFPRTtnQkFBUTtZQUN4QztZQUVBLE1BQU1nQixPQUFPLE1BQU1QLFNBQVNRLElBQUk7WUFDaENaLFVBQVVXLEtBQUtaLE1BQU07UUFDdkIsRUFBRSxPQUFPYyxHQUFHO1lBQ1ZDLE1BQU07UUFDUjtRQUVBaEIsV0FBVyxLQUFLO0lBQ2xCO0lBRUEscUJBQ0UsOERBQUNpQjs7MEJBQ0MsOERBQUM3QixrREFBSUE7O2tDQUNILDhEQUFDOEI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLQyxXQUFXL0IsK0RBQVc7O2tDQUMxQiw4REFBQ2dDO3dCQUFJQyxLQUFJO3dCQUFXRixXQUFXL0IsK0RBQVc7Ozs7OztrQ0FDMUMsOERBQUNtQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzt3QkFBS3pCLFVBQVVBOzswQ0FDZCw4REFBQzBCOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxPQUFPckM7Z0NBQ1BzQyxVQUFVLENBQUNsQixJQUFNbkIsU0FBU21CLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7MENBQ3ZDdkMsMERBQVksQ0FBQyxDQUFDMkMscUJBQ2IsOERBQUNDO3dDQUFrQkwsT0FBT0k7a0RBQ3ZCQTt1Q0FEVUE7Ozs7Ozs7Ozs7MENBS2pCLDhEQUFDUDswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDUztnQ0FDQ0MsTUFBSztnQ0FDTFIsTUFBSztnQ0FDTFMsYUFBWTtnQ0FDWlIsT0FBT25DO2dDQUNQb0MsVUFBVSxDQUFDbEIsSUFBTWpCLFdBQVdpQixFQUFFbUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7MENBRTVDLDhEQUFDTTtnQ0FBTUMsTUFBSztnQ0FBU1AsT0FBTTs7Ozs7Ozs7Ozs7O29CQUc1QmpDLHlCQUNDLDhEQUFDa0I7OzBDQUNDLDhEQUFDVTtnQ0FBR0osV0FBVy9CLGtFQUFjOzBDQUFFOzs7Ozs7MENBSS9CLDhEQUFDeUI7Z0NBQUl3QixPQUFNOzs7Ozs7Ozs7Ozs7a0NBR2YsOERBQUN4Qjt3QkFBSU0sV0FBVy9CLGlFQUFhO2tDQUFHUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXhDLENBQUMsQ0FDRCx3RUFBd0U7R0EvRWhEUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFVTc3RhdGVzIH0gZnJvbSBcIi4uL3B1YmxpYy91c1N0YXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKFwiTmV3IFlvcmtcIik7XG4gIGNvbnN0IFtzdWJqZWN0LCBzZXRTdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGUtc2FmZXR5XCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXRlLCBzdWJqZWN0IH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGFsZXJ0KFwiRmFpbGVkIHRvIGdlbmVyYXRlIHJlc3VsdHMsIFRyeSBsYXRlclwiKTtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T3BlbkFJIFF1aWNrc3RhcnQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9kb2cucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2RvZy5wbmdcIiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICA8aDM+QXNrIGEgU2FmZXR5IEV4cGVydDwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPlNUQVRFPC9sYWJlbD5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0ZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAge1VTc3RhdGVzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aXRlbX0gdmFsdWU9e2l0ZW19PlxuICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxsYWJlbD5TVUJKRUNUPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJzdWJqZWN0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYSBTdWJqZWN0XCJcbiAgICAgICAgICAgIHZhbHVlPXtzdWJqZWN0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJHZW5lcmF0ZSBuYW1lc1wiIC8+XG4gICAgICAgIDwvZm9ybT5cblxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfT5cbiAgICAgICAgICAgICAgTG9va2luZyBmb3IgdGhlIGJlc3QgYW5zd2VyIPCfkpfwn5KX8J+SlyDwn5KhXG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiL2xvYWRpbmcud2VicFwiIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9IC8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+e3Jlc3VsdH08L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbi8vIHdyaXRlIGEgc2VsZWN0IHRhZyB3aXRoIDUyIHVuaXRlZCBzdGF0ZXMgYXMgb3B0aW9ucyB1c2luZyBhbiBpdGVyYXRvclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiVVNzdGF0ZXMiLCJIb21lIiwic3RhdGUiLCJzZXRTdGF0ZSIsInN1YmplY3QiLCJzZXRTdWJqZWN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJlIiwiYWxlcnQiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImljb24iLCJoMyIsImZvcm0iLCJsYWJlbCIsInNlbGVjdCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});