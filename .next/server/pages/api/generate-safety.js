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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    // Destruct the request\n    const { state , subject  } = req.body;\n    const prompt = generatePrompt(state, subject);\n    const completion = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: prompt,\n        temperature: 0.6,\n        max_tokens: 2048\n    });\n    console.log(res);\n    res.status(200).json({\n        result: completion.data.choices[0].text\n    });\n}\nfunction generatePrompt(state, subject) {\n    return `list key points from Department of Buildings of ${state} and from OSHA for ${subject}`;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtc2FmZXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUVsRCxNQUFNRSxnQkFBZ0IsSUFBSUYsaURBQWFBLENBQUM7SUFDdENHLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUNwQztBQUNBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRTdCLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdkMsdUJBQXVCO0lBQ3ZCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxRQUFPLEVBQUUsR0FBR0gsSUFBSUksSUFBSTtJQUNuQyxNQUFNQyxTQUFTQyxlQUFlSixPQUFPQztJQUVyQyxNQUFNSSxhQUFhLE1BQU1SLE9BQU9TLGdCQUFnQixDQUFDO1FBQy9DQyxPQUFPO1FBQ1BKLFFBQVFBO1FBQ1JLLGFBQWE7UUFDYkMsWUFBWTtJQUNkO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ1o7SUFFWkEsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxRQUFRVCxXQUFXVSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7SUFBQztBQUNqRSxDQUFDO0FBRUQsU0FBU2IsZUFBZUosS0FBSyxFQUFFQyxPQUFPLEVBQUU7SUFDdEMsT0FBTyxDQUFDLGdEQUFnRCxFQUFFRCxNQUFNLG1CQUFtQixFQUFFQyxRQUFRLENBQUM7QUFDaEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLXNhZmV0eS5qcz9kYWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIC8vIERlc3RydWN0IHRoZSByZXF1ZXN0XG4gIGNvbnN0IHsgc3RhdGUsIHN1YmplY3QgfSA9IHJlcS5ib2R5O1xuICBjb25zdCBwcm9tcHQgPSBnZW5lcmF0ZVByb21wdChzdGF0ZSwgc3ViamVjdCk7XG5cbiAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgdGVtcGVyYXR1cmU6IDAuNixcbiAgICBtYXhfdG9rZW5zOiAyMDQ4LFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhyZXMpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb21wdChzdGF0ZSwgc3ViamVjdCkge1xuICByZXR1cm4gYGxpc3Qga2V5IHBvaW50cyBmcm9tIERlcGFydG1lbnQgb2YgQnVpbGRpbmdzIG9mICR7c3RhdGV9IGFuZCBmcm9tIE9TSEEgZm9yICR7c3ViamVjdH1gO1xufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk9QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdGUiLCJzdWJqZWN0IiwiYm9keSIsInByb21wdCIsImdlbmVyYXRlUHJvbXB0IiwiY29tcGxldGlvbiIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-safety.js\n");

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