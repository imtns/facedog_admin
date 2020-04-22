(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./src/views/users/userReport.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/views/users/userReport.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_guider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/guider */ \"./src/api/guider.js\");\n/* harmony import */ var _directive_waves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/directive/waves */ \"./src/directive/waves/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.js\");\n/* harmony import */ var _components_TextHoverEffect_Mallki__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/TextHoverEffect/Mallki */ \"./src/components/TextHoverEffect/Mallki.vue\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Pagination */ \"./src/components/Pagination/index.vue\");\n/* harmony import */ var _directive_el_drag_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/directive/el-drag-dialog */ \"./src/directive/el-drag-dialog/index.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n // waves directive\n\n\n\n // secondary package based on el-pagination\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Comments\",\n  components: {\n    Pagination: _components_Pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  directives: {\n    waves: _directive_waves__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    elDragDialog: _directive_el_drag_dialog__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  filters: {},\n  data: function data() {\n    return {\n      dialogTableVisible: false,\n      dialogTitle: \"\",\n      page: 1,\n      tableKey: 0,\n      list: null,\n      opinion: null,\n      status: true,\n      select_id: \"\",\n      listLoading: true,\n      total: 0,\n      listQuery: {\n        page: 1,\n        limit: 20\n      }\n    };\n  },\n  created: function created() {\n    this.getList();\n  },\n  methods: {\n    getList: function getList() {\n      var _this = this;\n\n      this.listLoading = true;\n      Object(_api_guider__WEBPACK_IMPORTED_MODULE_0__[\"get_userReports\"])(this.listQuery).then(function (response) {\n        _this.list = response.data.reports;\n        _this.total = response.data.count;\n        setTimeout(function () {\n          _this.listLoading = false;\n        }, 0.5 * 1000);\n      });\n    },\n    showDialog: function showDialog(row) {\n      this.select_id = row._id;\n      this.status = row.result === null;\n      this.opinion = row.result;\n      this.dialogTableVisible = true;\n    },\n    handelReports: function handelReports() {\n      var _this2 = this;\n\n      this.listLoading = true;\n      handle_reports(this.select_id, this.opinion).then(function (response) {\n        setTimeout(function () {\n          _this2.$message({\n            message: \"操作成功\",\n            type: \"success\"\n          });\n        }, 0.5 * 1000);\n        _this2.dialogTableVisible = false;\n\n        _this2.getList();\n      });\n      this.listLoading = false;\n    },\n    handleDrag: function handleDrag() {}\n  }\n});\n\n//# sourceURL=webpack:///./src/views/users/userReport.vue?./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"64876b04-vue-loader-template\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./src/views/users/userReport.vue?vue&type=template&id=12c72060&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64876b04-vue-loader-template"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./src/views/users/userReport.vue?vue&type=template&id=12c72060& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"app-container\" },\n    [\n      _c(\n        \"el-table\",\n        {\n          directives: [\n            {\n              name: \"loading\",\n              rawName: \"v-loading\",\n              value: _vm.listLoading,\n              expression: \"listLoading\"\n            }\n          ],\n          key: _vm.tableKey,\n          staticStyle: { width: \"100%\" },\n          attrs: {\n            data: _vm.list,\n            border: \"\",\n            fit: \"\",\n            \"highlight-current-row\": \"\"\n          }\n        },\n        [\n          _c(\"el-table-column\", {\n            attrs: { label: \"被举报人\", align: \"center\", width: \"200\" },\n            scopedSlots: _vm._u([\n              {\n                key: \"default\",\n                fn: function(scope) {\n                  return [\n                    _c(\n                      \"router-link\",\n                      {\n                        staticClass: \"link-type\",\n                        attrs: { to: \"/users/\" + scope.row.report_user_id }\n                      },\n                      [_c(\"span\", [_vm._v(_vm._s(scope.row.report_username))])]\n                    )\n                  ]\n                }\n              }\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"el-table-column\", {\n            attrs: { label: \"举报人\", width: \"110px\", align: \"center\" },\n            scopedSlots: _vm._u([\n              {\n                key: \"default\",\n                fn: function(scope) {\n                  return [\n                    _c(\n                      \"router-link\",\n                      {\n                        staticClass: \"link-type\",\n                        attrs: { to: \"/users/\" + scope.row._id }\n                      },\n                      [_c(\"span\", [_vm._v(_vm._s(scope.row.nickname))])]\n                    )\n                  ]\n                }\n              }\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"el-table-column\", {\n            attrs: { label: \"举报内容\", width: \"110px\", align: \"center\" },\n            scopedSlots: _vm._u([\n              {\n                key: \"default\",\n                fn: function(scope) {\n                  return [_c(\"span\", [_vm._v(_vm._s(scope.row.reason))])]\n                }\n              }\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"el-table-column\", {\n            attrs: { label: \"举报时间\", width: \"180px\", align: \"center\" },\n            scopedSlots: _vm._u([\n              {\n                key: \"default\",\n                fn: function(scope) {\n                  return [_c(\"span\", [_vm._v(_vm._s(scope.row.create_time))])]\n                }\n              }\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"el-table-column\", {\n            attrs: { label: \"状态\", width: \"110px\", align: \"center\" },\n            scopedSlots: _vm._u([\n              {\n                key: \"default\",\n                fn: function(scope) {\n                  return [\n                    scope.row.reply_user_id\n                      ? _c(\n                          \"router-link\",\n                          {\n                            staticClass: \"link-type\",\n                            attrs: { to: \"/users/\" + scope.row.reply_user_id }\n                          },\n                          [\n                            _c(\"span\", [\n                              _vm._v(_vm._s(scope.row.reply_user_nickname))\n                            ])\n                          ]\n                        )\n                      : _vm._e()\n                  ]\n                }\n              }\n            ])\n          }),\n          _vm._v(\" \"),\n          _c(\"el-table-column\", {\n            attrs: {\n              label: \"操作/处理结果\",\n              align: \"center\",\n              width: \"180\",\n              \"class-name\": \"small-padding fixed-width\"\n            },\n            scopedSlots: _vm._u([\n              {\n                key: \"default\",\n                fn: function(ref) {\n                  var row = ref.row\n                  return [\n                    row.status === 1\n                      ? _c(\n                          \"el-button\",\n                          {\n                            attrs: { size: \"mini\", type: \"text\" },\n                            on: {\n                              click: function($event) {\n                                return _vm.showDialog(row)\n                              }\n                            }\n                          },\n                          [\n                            _vm._v(\n                              \"\\n                    处理\\n                \"\n                            )\n                          ]\n                        )\n                      : _c(\"span\", [_c(\"span\", [_vm._v(_vm._s(row.result))])])\n                  ]\n                }\n              }\n            ])\n          })\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(\"pagination\", {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.total > 0,\n            expression: \"total>0\"\n          }\n        ],\n        attrs: {\n          total: _vm.total,\n          page: _vm.listQuery.page,\n          limit: _vm.listQuery.limit\n        },\n        on: {\n          \"update:page\": function($event) {\n            return _vm.$set(_vm.listQuery, \"page\", $event)\n          },\n          \"update:limit\": function($event) {\n            return _vm.$set(_vm.listQuery, \"limit\", $event)\n          },\n          pagination: _vm.getList\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"el-dialog\",\n        {\n          directives: [{ name: \"el-drag-dialog\", rawName: \"v-el-drag-dialog\" }],\n          attrs: { visible: _vm.dialogTableVisible, title: _vm.dialogTitle },\n          on: {\n            \"update:visible\": function($event) {\n              _vm.dialogTableVisible = $event\n            },\n            dragDialog: _vm.handleDrag\n          }\n        },\n        [\n          _c(\n            \"el-form\",\n            [\n              !_vm.status\n                ? _c(\n                    \"el-form-item\",\n                    { attrs: { label: \"处理意见\" } },\n                    [\n                      _c(\"el-input\", {\n                        attrs: {\n                          autosize: { minRows: 2, maxRows: 4 },\n                          type: \"textarea\",\n                          placeholder: \"\"\n                        },\n                        model: {\n                          value: _vm.opinion,\n                          callback: function($$v) {\n                            _vm.opinion = $$v\n                          },\n                          expression: \"opinion\"\n                        }\n                      }),\n                      _vm._v(\" \"),\n                      _c(\n                        \"el-row\",\n                        {\n                          staticClass: \"row-bg\",\n                          staticStyle: { \"padding-top\": \"20px\" },\n                          attrs: { type: \"flex\", justify: \"center\" }\n                        },\n                        [\n                          _c(\n                            \"el-col\",\n                            { attrs: { span: 6 } },\n                            [\n                              _c(\n                                \"el-button\",\n                                {\n                                  directives: [\n                                    { name: \"waves\", rawName: \"v-waves\" }\n                                  ],\n                                  attrs: { type: \"primary\" },\n                                  on: { click: _vm.handelReports }\n                                },\n                                [_vm._v(\"提交\")]\n                              )\n                            ],\n                            1\n                          )\n                        ],\n                        1\n                      )\n                    ],\n                    1\n                  )\n                : _vm._e()\n            ],\n            1\n          )\n        ],\n        1\n      )\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/users/userReport.vue?./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2264876b04-vue-loader-template%22%7D!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/views/users/userReport.vue":
/*!****************************************!*\
  !*** ./src/views/users/userReport.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _userReport_vue_vue_type_template_id_12c72060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userReport.vue?vue&type=template&id=12c72060& */ \"./src/views/users/userReport.vue?vue&type=template&id=12c72060&\");\n/* harmony import */ var _userReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userReport.vue?vue&type=script&lang=js& */ \"./src/views/users/userReport.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _userReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _userReport_vue_vue_type_template_id_12c72060___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _userReport_vue_vue_type_template_id_12c72060___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/users/userReport.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/users/userReport.vue?");

/***/ }),

/***/ "./src/views/users/userReport.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/views/users/userReport.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_userReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../../node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./userReport.vue?vue&type=script&lang=js& */ \"./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?!./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./src/views/users/userReport.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_userReport_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/users/userReport.vue?");

/***/ }),

/***/ "./src/views/users/userReport.vue?vue&type=template&id=12c72060&":
/*!***********************************************************************!*\
  !*** ./src/views/users/userReport.vue?vue&type=template&id=12c72060& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64876b04_vue_loader_template_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_userReport_vue_vue_type_template_id_12c72060___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"64876b04-vue-loader-template\"}!../../../node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./userReport.vue?vue&type=template&id=12c72060& */ \"./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"64876b04-vue-loader-template\\\"}!./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./src/views/users/userReport.vue?vue&type=template&id=12c72060&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64876b04_vue_loader_template_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_userReport_vue_vue_type_template_id_12c72060___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_64876b04_vue_loader_template_node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_userReport_vue_vue_type_template_id_12c72060___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/users/userReport.vue?");

/***/ })

}]);