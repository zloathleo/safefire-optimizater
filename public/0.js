(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Root.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_globalvar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/globalvar */ \"./src/common/globalvar.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    data: function data() {\n        return {\n            appName: _common_globalvar__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appName,\n            drawer: false,\n            activeItem: undefined,\n            items: [{\n                title: 'Dashboard',\n                key: 'dashboard',\n                active: '/'\n            }, {\n                title: 'Settings',\n                key: 'settings',\n                active: '/'\n            }]\n        };\n    },\n\n    methods: {\n        isItemActive: function isItemActive(key) {\n            return this.activeItem === key;\n        },\n        toggle: function toggle(item) {\n            this.activeItem = item.key;\n            console.log(item.key);\n            this.$router.push({ name: item.key });\n        }\n    }\n});\n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.active[data-v-37772010] {\\n  background-color: rgba(95, 95, 95, 0.6);\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=template&id=37772010&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/framework/Root.vue?vue&type=template&id=37772010&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-app\",\n    { attrs: { dark: \"\" } },\n    [\n      _c(\n        \"v-toolbar\",\n        { attrs: { app: \"\", fixed: \"\", \"clipped-left\": \"\" } },\n        [\n          _c(\"v-toolbar-side-icon\", {\n            on: {\n              click: function($event) {\n                $event.stopPropagation()\n                _vm.drawer = !_vm.drawer\n              }\n            }\n          }),\n          _vm._v(\" \"),\n          _c(\"v-toolbar-title\", [_vm._v(_vm._s(_vm.appName))])\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\n        \"v-content\",\n        [\n          _c(\n            \"v-container\",\n            {\n              attrs: {\n                fluid: \"\",\n                \"fill-height\": \"\",\n                \"grid-list-md\": \"\",\n                \"text-xs-center\": \"\"\n              }\n            },\n            [\n              _c(\"router-view\"),\n              _vm._v(\" \"),\n              _c(\n                \"v-navigation-drawer\",\n                {\n                  attrs: { absolute: \"\", temporary: \"\", app: \"\" },\n                  model: {\n                    value: _vm.drawer,\n                    callback: function($$v) {\n                      _vm.drawer = $$v\n                    },\n                    expression: \"drawer\"\n                  }\n                },\n                [\n                  _c(\n                    \"v-list\",\n                    { attrs: { dense: \"\" } },\n                    _vm._l(_vm.items, function(item) {\n                      return _c(\n                        \"v-list-tile\",\n                        {\n                          key: item.key,\n                          class: { active: _vm.isItemActive(item.key) },\n                          on: {\n                            click: function($event) {\n                              _vm.toggle(item)\n                            }\n                          }\n                        },\n                        [\n                          _c(\n                            \"v-list-tile-action\",\n                            [_c(\"v-icon\", [_vm._v(_vm._s(item.key))])],\n                            1\n                          ),\n                          _vm._v(\" \"),\n                          _c(\n                            \"v-list-tile-content\",\n                            [\n                              _c(\"v-list-tile-title\", [\n                                _vm._v(_vm._s(item.title))\n                              ])\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    })\n                  )\n                ],\n                1\n              )\n            ],\n            1\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"v-footer\", { attrs: { app: \"\", fixed: \"\" } }, [\n        _c(\"span\", [_vm._v(\"© 2018\")])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/common/globalvar.js":
/*!*********************************!*\
  !*** ./src/common/globalvar.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    appName: '燃烧优化-水泥',\n\n    calcDashboardChartWidth: function calcDashboardChartWidth(_width) {\n        //外框高度\n        var _parentDom = document.getElementById(\"dashboard\");\n        var _ch = parseInt(_parentDom.clientHeight - 100);\n\n        return Math.min(_width, _ch);\n    }\n});\n\n//# sourceURL=webpack:///./src/common/globalvar.js?");

/***/ }),

/***/ "./src/components/framework/Root.vue":
/*!*******************************************!*\
  !*** ./src/components/framework/Root.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Root_vue_vue_type_template_id_37772010_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Root.vue?vue&type=template&id=37772010&scoped=true */ \"./src/components/framework/Root.vue?vue&type=template&id=37772010&scoped=true\");\n/* harmony import */ var _Root_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Root.vue?vue&type=script&lang=js */ \"./src/components/framework/Root.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Root_vue_vue_type_style_index_0_id_37772010_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less */ \"./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Root_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Root_vue_vue_type_template_id_37772010_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Root_vue_vue_type_template_id_37772010_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"37772010\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src\\\\components\\\\framework\\\\Root.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?");

/***/ }),

/***/ "./src/components/framework/Root.vue?vue&type=script&lang=js":
/*!*******************************************************************!*\
  !*** ./src/components/framework/Root.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--1!../../../node_modules/vue-loader/lib??vue-loader-options!./Root.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??ref--1!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?");

/***/ }),

/***/ "./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less":
/*!****************************************************************************************************!*\
  !*** ./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_style_index_0_id_37772010_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=style&index=0&id=37772010&scoped=true&lang=less\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_style_index_0_id_37772010_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_style_index_0_id_37772010_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_style_index_0_id_37772010_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_style_index_0_id_37772010_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_style_index_0_id_37772010_scoped_true_lang_less__WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?");

/***/ }),

/***/ "./src/components/framework/Root.vue?vue&type=template&id=37772010&scoped=true":
/*!*************************************************************************************!*\
  !*** ./src/components/framework/Root.vue?vue&type=template&id=37772010&scoped=true ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_template_id_37772010_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Root.vue?vue&type=template&id=37772010&scoped=true */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/framework/Root.vue?vue&type=template&id=37772010&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_template_id_37772010_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Root_vue_vue_type_template_id_37772010_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/framework/Root.vue?");

/***/ })

}]);