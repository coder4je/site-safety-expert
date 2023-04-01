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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // Destruct the request\n    const { state , subject  } = req.body;\n    const prompt = generatePrompt(state, subject);\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: prompt,\n        temperature: 0.6,\n        max_tokens: 2048\n    });\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n}\nfunction generatePrompt(state, subject) {\n    return `list key points from Department of Buildings of ${state} and from OSHA for ${subject}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtc2FmZXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVsRCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUNBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRTdCLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsdUJBQXVCO0lBQ3ZCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUNuQyxNQUFNQyxTQUFTQyxlQUFlSixPQUFPQztJQUVyQyxNQUFNSSxhQUFhLE1BQU1SLE9BQU9TLGdCQUFnQixDQUFDO1FBQy9DQyxPQUFPO1FBQ1BKLFFBQVFBO1FBQ1JLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBRUFWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsUUFBUVAsV0FBV1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO0lBQUM7QUFDakUsQ0FBQztBQUVELFNBQVNYLGVBQWVKLEtBQUssRUFBRUMsT0FBTyxFQUFFO0lBQ3RDLE9BQU8sQ0FBQyxnREFBZ0QsRUFBRUQsTUFBTSxtQkFBbUIsRUFBRUMsUUFBUSxDQUFDO0FBQ2hHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS1zYWZldHkuanM/ZGFhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuT1BFTkFJX0FQSV9LRVksXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAvLyBEZXN0cnVjdCB0aGUgcmVxdWVzdFxuICBjb25zdCB7IHN0YXRlLCBzdWJqZWN0IH0gPSByZXEuYm9keTtcbiAgY29uc3QgcHJvbXB0ID0gZ2VuZXJhdGVQcm9tcHQoc3RhdGUsIHN1YmplY3QpO1xuXG4gIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgIHByb21wdDogcHJvbXB0LFxuICAgIHRlbXBlcmF0dXJlOiAwLjYsXG4gICAgbWF4X3Rva2VuczogMjA0OCxcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbXB0KHN0YXRlLCBzdWJqZWN0KSB7XG4gIHJldHVybiBgbGlzdCBrZXkgcG9pbnRzIGZyb20gRGVwYXJ0bWVudCBvZiBCdWlsZGluZ3Mgb2YgJHtzdGF0ZX0gYW5kIGZyb20gT1NIQSBmb3IgJHtzdWJqZWN0fWA7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0ZSIsInN1YmplY3QiLCJib2R5IiwicHJvbXB0IiwiZ2VuZXJhdGVQcm9tcHQiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwic3RhdHVzIiwianNvbiIsInJlc3VsdCIsImRhdGEiLCJjaG9pY2VzIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-safety.js\n");

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