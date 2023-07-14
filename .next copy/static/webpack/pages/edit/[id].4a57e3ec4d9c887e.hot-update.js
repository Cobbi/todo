"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit/[id]",{

/***/ "./src/features/EditTodo.jsx":
/*!***********************************!*\
  !*** ./src/features/EditTodo.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditTodo = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fname: \"\",\n        lname: \"\",\n        email: \"\",\n        age: \"\",\n        task: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\n        const foundTodo = todos.find((todo)=>todo.id === id);\n        if (foundTodo) {\n            setTodo(foundTodo);\n        }\n    }, [\n        id\n    ]);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setTodo((prevTodo)=>({\n                ...prevTodo,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\n        const updatedTodos = todos.map((item)=>{\n            if (item.id === id) {\n                return {\n                    ...todo\n                };\n            }\n            return item;\n        });\n        localStorage.setItem(\"todos\", JSON.stringify(updatedTodos));\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-8 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center py-4 space-x-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"px-2 my-3 py-1 rounded-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl text-left font-bold\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillArrowLeftCircleFill, {\n                                    className: \"text-blue-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"flex text-3xl text-slate-900 mx-2 font-bold\",\n                        children: [\n                            \"todo\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-blue-400 text-[28px] rounded-md capitalize text-white px-2 py-0.5\",\n                                children: \"list\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"fname\",\n                                children: \"First name\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500\",\n                                type: \"text\",\n                                id: \"fname\",\n                                name: \"fname\",\n                                value: todo.fname,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"lname\",\n                                children: \"Last name\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                type: \"text\",\n                                id: \"lname\",\n                                name: \"lname\",\n                                value: todo.lname,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: todo.email,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"age\",\n                                children: \"Age\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                type: \"number\",\n                                id: \"age\",\n                                name: \"age\",\n                                value: todo.age,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"task\",\n                                children: \"Task\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 h-[140px] rounded-md focus:outline-none focus:border-blue-500\",\n                                id: \"task\",\n                                name: \"task\",\n                                value: todo.task,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-blue-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300\",\n                        type: \"submit\",\n                        children: \"Update Todo\"\n                    }, void 0, false, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTodo, \"Rfy5InxE0tRgRS9AZkRvgzP1P4Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditTodo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTodo);\nvar _c;\n$RefreshReg$(_c, \"EditTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPakIsS0FBS0ksS0FBSztnQ0FDakJvQyxVQUFVMUI7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ2M7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBTVAsV0FBVTtnQ0FBNkNRLFNBQVE7MENBQU07Ozs7OzswQ0FHNUUsOERBQUNDO2dDQUNDVCxXQUFVO2dDQUNWVSxNQUFLO2dDQUNMekMsSUFBRztnQ0FDSGtCLE1BQUs7Z0NBQ0xDLE9BQU9qQixLQUFLSyxHQUFHO2dDQUNmbUMsVUFBVTFCOzs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNjO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQU1QLFdBQVU7Z0NBQTZDUSxTQUFROzBDQUFPOzs7Ozs7MENBRzdFLDhEQUFDSTtnQ0FDQ1osV0FBVTtnQ0FDVi9CLElBQUc7Z0NBQ0hrQixNQUFLO2dDQUNMQyxPQUFPakIsS0FBS00sSUFBSTtnQ0FDaEJrQyxVQUFVMUI7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQzRCO3dCQUNDYixXQUFVO3dCQUNWVSxNQUFLO2tDQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXZJTTNDOztRQUNXSCxrREFBU0E7OztLQURwQkc7QUF5SU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL0VkaXRUb2RvLmpzeD83YmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJzRmlsbEFycm93TGVmdENpcmNsZUZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRWRpdFRvZG8gPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgW3RvZG8sIHNldFRvZG9dID0gdXNlU3RhdGUoe1xuICAgIGZuYW1lOiBcIlwiLFxuICAgIGxuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIGFnZTogXCJcIixcbiAgICB0YXNrOiBcIlwiXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHx8IFtdO1xuICAgIGNvbnN0IGZvdW5kVG9kbyA9IHRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKTtcblxuICAgIGlmIChmb3VuZFRvZG8pIHtcbiAgICAgIHNldFRvZG8oZm91bmRUb2RvKTtcbiAgICB9XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRUb2RvKChwcmV2VG9kbykgPT4gKHtcbiAgICAgIC4uLnByZXZUb2RvLFxuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB8fCBbXTtcbiAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSB0b2Rvcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4geyAuLi50b2RvIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRvZG9zKSk7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC04IHB5LThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktNCBzcGFjZS14LTEyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTIgbXktMyBweS0xIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9cIn0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1sZWZ0IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICA8QnNGaWxsQXJyb3dMZWZ0Q2lyY2xlRmlsbCBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNDAwXCIgLz5cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IHRleHQtM3hsIHRleHQtc2xhdGUtOTAwIG14LTIgZm9udC1ib2xkXCI+XG4gICAgICAgICAgdG9kbyZuYnNwO1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIHRleHQtWzI4cHhdIHJvdW5kZWQtbWQgY2FwaXRhbGl6ZSB0ZXh0LXdoaXRlIHB4LTIgcHktMC41XCI+XG4gICAgICAgICAgICBsaXN0XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctc20gbXgtYXV0byBiZy13aGl0ZSBwLTggcm91bmRlZC1tZCBzaGFkb3ctbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJmbmFtZVwiPlxuICAgICAgICAgICAgRmlyc3QgbmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWluZGlnby01MDBcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJmbmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwiZm5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3RvZG8uZm5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwibG5hbWVcIj5cbiAgICAgICAgICAgIExhc3QgbmFtZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwibG5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cImxuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXt0b2RvLmxuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICBFbWFpbFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17dG9kby5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJhZ2VcIj5cbiAgICAgICAgICAgIEFnZVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgaWQ9XCJhZ2VcIlxuICAgICAgICAgICAgbmFtZT1cImFnZVwiXG4gICAgICAgICAgICB2YWx1ZT17dG9kby5hZ2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwidGFza1wiPlxuICAgICAgICAgICAgVGFza1xuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgaC1bMTQwcHhdIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICBpZD1cInRhc2tcIlxuICAgICAgICAgICAgbmFtZT1cInRhc2tcIlxuICAgICAgICAgICAgdmFsdWU9e3RvZG8udGFza31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIFVwZGF0ZSBUb2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkJzRmlsbEFycm93TGVmdENpcmNsZUZpbGwiLCJMaW5rIiwiRWRpdFRvZG8iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidG9kbyIsInNldFRvZG8iLCJmbmFtZSIsImxuYW1lIiwiZW1haWwiLCJhZ2UiLCJ0YXNrIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZm91bmRUb2RvIiwiZmluZCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZUb2RvIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkVG9kb3MiLCJtYXAiLCJpdGVtIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaHJlZiIsImgzIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/EditTodo.jsx\n"));

/***/ })

});