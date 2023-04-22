"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate-safety";
exports.ids = ["pages/api/generate-safety"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate-safety.js":
/*!**************************************!*\
  !*** ./pages/api/generate-safety.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // Destruct the request\n    const { state , subject  } = req.body;\n    const prompt = generatePrompt(state, subject);\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: prompt,\n        temperature: 0.6,\n        max_tokens: 2048\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n}\nfunction generatePrompt(state, subject) {\n    return `Can you provide a list of key points from both the Department of Buildings of ${state} and the Occupational Safety and Health Administration (OSHA) related to ${subject} at hand? Please provide the information in a list format, using appropriate emojis to make it easier to read and understand.`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtc2FmZXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVsRCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUNBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRTdCLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsdUJBQXVCO0lBQ3ZCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUNuQyxNQUFNQyxTQUFTQyxlQUFlSixPQUFPQztJQUVyQyxNQUFNSSxhQUFhLE1BQU1SLE9BQU9TLGdCQUFnQixDQUFDO1FBQy9DQyxPQUFPO1FBQ1BKLFFBQVFBO1FBQ1JLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBRUFWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUVAsV0FBV1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO0lBQUM7QUFDakUsQ0FBQztBQUVELFNBQVNYLGVBQWVKLEtBQUssRUFBRUMsT0FBTyxFQUFFO0lBQ3RDLE9BQU8sQ0FBQyw4RUFBOEUsRUFBRUQsTUFBTSx5RUFBeUUsRUFBRUMsUUFBUSw2SEFBNkgsQ0FBQztBQUNqVCIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtc2FmZXR5LmpzP2RhYWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgLy8gRGVzdHJ1Y3QgdGhlIHJlcXVlc3RcbiAgY29uc3QgeyBzdGF0ZSwgc3ViamVjdCB9ID0gcmVxLmJvZHk7XG4gIGNvbnN0IHByb21wdCA9IGdlbmVyYXRlUHJvbXB0KHN0YXRlLCBzdWJqZWN0KTtcblxuICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IHByb21wdCxcbiAgICB0ZW1wZXJhdHVyZTogMC42LFxuICAgIG1heF90b2tlbnM6IDIwNDgsXG4gIH0pO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChzdGF0ZSwgc3ViamVjdCkge1xuICByZXR1cm4gYENhbiB5b3UgcHJvdmlkZSBhIGxpc3Qgb2Yga2V5IHBvaW50cyBmcm9tIGJvdGggdGhlIERlcGFydG1lbnQgb2YgQnVpbGRpbmdzIG9mICR7c3RhdGV9IGFuZCB0aGUgT2NjdXBhdGlvbmFsIFNhZmV0eSBhbmQgSGVhbHRoIEFkbWluaXN0cmF0aW9uIChPU0hBKSByZWxhdGVkIHRvICR7c3ViamVjdH0gYXQgaGFuZD8gUGxlYXNlIHByb3ZpZGUgdGhlIGluZm9ybWF0aW9uIGluIGEgbGlzdCBmb3JtYXQsIHVzaW5nIGFwcHJvcHJpYXRlIGVtb2ppcyB0byBtYWtlIGl0IGVhc2llciB0byByZWFkIGFuZCB1bmRlcnN0YW5kLmA7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0ZSIsInN1YmplY3QiLCJib2R5IiwicHJvbXB0IiwiZ2VuZXJhdGVQcm9tcHQiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-safety.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate-safety.js"));
module.exports = __webpack_exports__;

})();