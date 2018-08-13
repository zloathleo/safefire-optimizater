(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/dashboard/Analysis.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dashboard/Analysis.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HeatChart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeatChart.vue */ \"./src/components/dashboard/HeatChart.vue\");\n/* harmony import */ var _TrendChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrendChart.vue */ \"./src/components/dashboard/TrendChart.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n //??\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    components: {\n        HeatChart: _HeatChart_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    },\n    data: function data() {\n        return {\n            dashboardHeight: window.innerHeight - (64 + 32 + 24 * 2) + 'px'\n        };\n    },\n    mounted: function mounted() {},\n\n    methods: {\n        clickNext: function clickNext() {\n            this.$globalEventHub.$emit(\"periodNext\", {});\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/components/dashboard/Analysis.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/AnalysisPage.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/AnalysisPage.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_dashboard_Analysis_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dashboard/Analysis.vue */ \"./src/components/dashboard/Analysis.vue\");\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Analysis: _components_dashboard_Analysis_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/pages/AnalysisPage.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/dashboard/Analysis.vue?vue&type=template&id=1a61b534":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/dashboard/Analysis.vue?vue&type=template&id=1a61b534 ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { style: { width: \"100%\", height: _vm.dashboardHeight } }, [\n    _c(\n      \"div\",\n      {\n        staticStyle: {\n          width: \"100%\",\n          height: \"100%\",\n          \"overflow-x\": \"hidden\",\n          \"overflow-y\": \"auto\"\n        },\n        attrs: { id: \"dashboard-container\" }\n      },\n      [\n        _c(\n          \"v-layout\",\n          { attrs: { row: \"\", wrap: \"\" } },\n          [\n            _c(\n              \"v-flex\",\n              { attrs: { xs12: \"\" } },\n              [\n                _c(\n                  \"v-layout\",\n                  { attrs: { row: \"\", wrap: \"\" } },\n                  [\n                    _c(\n                      \"v-flex\",\n                      { attrs: { xs12: \"\" } },\n                      [_c(\"HeatChart\", { attrs: { calc: \"p\", pixel: \"8\" } })],\n                      1\n                    )\n                  ],\n                  1\n                )\n              ],\n              1\n            )\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"v-btn\",\n          {\n            attrs: {\n              absolute: \"\",\n              dark: \"\",\n              fab: \"\",\n              bottom: \"\",\n              right: \"\",\n              color: \"pink\"\n            },\n            on: { click: _vm.clickNext }\n          },\n          [_c(\"v-icon\", [_vm._v(\"add\")])],\n          1\n        )\n      ],\n      1\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/dashboard/Analysis.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/AnalysisPage.vue?vue&type=template&id=bb69b16e":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/AnalysisPage.vue?vue&type=template&id=bb69b16e ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"Analysis\")\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/pages/AnalysisPage.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/dashboard/Analysis.vue":
/*!***********************************************!*\
  !*** ./src/components/dashboard/Analysis.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Analysis_vue_vue_type_template_id_1a61b534__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Analysis.vue?vue&type=template&id=1a61b534 */ \"./src/components/dashboard/Analysis.vue?vue&type=template&id=1a61b534\");\n/* harmony import */ var _Analysis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analysis.vue?vue&type=script&lang=js */ \"./src/components/dashboard/Analysis.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Analysis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Analysis_vue_vue_type_template_id_1a61b534__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Analysis_vue_vue_type_template_id_1a61b534__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\components\\\\dashboard\\\\Analysis.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/dashboard/Analysis.vue?");

/***/ }),

/***/ "./src/components/dashboard/Analysis.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./src/components/dashboard/Analysis.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Analysis.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/dashboard/Analysis.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/dashboard/Analysis.vue?");

/***/ }),

/***/ "./src/components/dashboard/Analysis.vue?vue&type=template&id=1a61b534":
/*!*****************************************************************************!*\
  !*** ./src/components/dashboard/Analysis.vue?vue&type=template&id=1a61b534 ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_template_id_1a61b534__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Analysis.vue?vue&type=template&id=1a61b534 */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/dashboard/Analysis.vue?vue&type=template&id=1a61b534\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_template_id_1a61b534__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_template_id_1a61b534__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/dashboard/Analysis.vue?");

/***/ }),

/***/ "./src/pages/AnalysisPage.vue":
/*!************************************!*\
  !*** ./src/pages/AnalysisPage.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnalysisPage_vue_vue_type_template_id_bb69b16e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalysisPage.vue?vue&type=template&id=bb69b16e */ \"./src/pages/AnalysisPage.vue?vue&type=template&id=bb69b16e\");\n/* harmony import */ var _AnalysisPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnalysisPage.vue?vue&type=script&lang=js */ \"./src/pages/AnalysisPage.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _AnalysisPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _AnalysisPage_vue_vue_type_template_id_bb69b16e__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _AnalysisPage_vue_vue_type_template_id_bb69b16e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\pages\\\\AnalysisPage.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/pages/AnalysisPage.vue?");

/***/ }),

/***/ "./src/pages/AnalysisPage.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/pages/AnalysisPage.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalysisPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--1!../../node_modules/vue-loader/lib??vue-loader-options!./AnalysisPage.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/AnalysisPage.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalysisPage_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/pages/AnalysisPage.vue?");

/***/ }),

/***/ "./src/pages/AnalysisPage.vue?vue&type=template&id=bb69b16e":
/*!******************************************************************!*\
  !*** ./src/pages/AnalysisPage.vue?vue&type=template&id=bb69b16e ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalysisPage_vue_vue_type_template_id_bb69b16e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AnalysisPage.vue?vue&type=template&id=bb69b16e */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/pages/AnalysisPage.vue?vue&type=template&id=bb69b16e\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalysisPage_vue_vue_type_template_id_bb69b16e__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnalysisPage_vue_vue_type_template_id_bb69b16e__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/pages/AnalysisPage.vue?");

/***/ })

}]);