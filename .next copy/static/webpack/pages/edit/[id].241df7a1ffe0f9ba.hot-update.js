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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditTodo = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fname: \"\",\n        lname: \"\",\n        email: \"\",\n        age: \"\",\n        task: \"\"\n    });\n    const [fieldErrors, setFieldErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\n        const foundTodo = todos.find((todo)=>todo.id === id);\n        if (foundTodo) {\n            setTodo(foundTodo);\n        } else {\n            const addTodoData = JSON.parse(localStorage.getItem(\"addTodoData\"));\n            if (addTodoData) {\n                setTodo(addTodoData);\n            }\n        }\n    }, [\n        id\n    ]);\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setTodo((prevTodo)=>({\n                ...prevTodo,\n                [name]: value\n            }));\n        setFieldErrors((prevErrors)=>({\n                ...prevErrors,\n                [name]: \"\"\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const errors = {};\n        if (!todo.fname) {\n            errors.fname = \"Your first name is required\";\n        }\n        if (!todo.lname) {\n            errors.lname = \"Your last name is required\";\n        }\n        if (!todo.email) {\n            errors.email = \"Your email is required\";\n        }\n        if (!todo.age) {\n            errors.age = \"Your age is required\";\n        }\n        if (!todo.task) {\n            errors.task = \"Todo task is required\";\n        }\n        if (Object.keys(errors).length > 0) {\n            setFieldErrors(errors);\n            return;\n        }\n        const todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\n        const updatedTodos = todos.map((item)=>{\n            if (item.id === id) {\n                return {\n                    ...todo\n                };\n            }\n            return item;\n        });\n        localStorage.setItem(\"todos\", JSON.stringify(updatedTodos));\n        router.push(\"/\");\n        localStorage.removeItem(\"addTodoData\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-8 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center py-4 space-x-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"px-2 my-3 py-1 rounded-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-2xl text-left font-bold\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsFillArrowLeftCircleFill, {\n                                    className: \"text-blue-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"flex text-3xl text-slate-900 mx-2 font-bold\",\n                        children: [\n                            \"todo\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"bg-blue-400 text-[28px] rounded-md capitalize text-white px-2 py-0.5\",\n                                children: \"list\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"fname\",\n                                children: \"First name\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500\",\n                                type: \"text\",\n                                id: \"fname\",\n                                name: \"fname\",\n                                value: todo.fname,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, undefined),\n                            fieldErrors.fname && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-400\",\n                                children: fieldErrors.fname\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"lname\",\n                                children: \"Last name\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                type: \"text\",\n                                id: \"lname\",\n                                name: \"lname\",\n                                value: todo.lname,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, undefined),\n                            fieldErrors.lname && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-400\",\n                                children: fieldErrors.lname\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                type: \"email\",\n                                id: \"email\",\n                                name: \"email\",\n                                value: todo.email,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 137,\n                                columnNumber: 11\n                            }, undefined),\n                            fieldErrors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-400\",\n                                children: fieldErrors.email\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 145,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"age\",\n                                children: \"Age\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 148,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500\",\n                                type: \"number\",\n                                id: \"age\",\n                                name: \"age\",\n                                value: todo.age,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 151,\n                                columnNumber: 11\n                            }, undefined),\n                            fieldErrors.age && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-400\",\n                                children: fieldErrors.age\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 159,\n                                columnNumber: 31\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"task\",\n                                children: \"Task\"\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                className: \"w-full px-3 py-2 border border-gray-300 h-[140px] rounded-md focus:outline-none focus:border-blue-500\",\n                                id: \"task\",\n                                name: \"task\",\n                                value: todo.task,\n                                onChange: handleInputChange\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 165,\n                                columnNumber: 11\n                            }, undefined),\n                            fieldErrors.task && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-red-400\",\n                                children: fieldErrors.task\n                            }, void 0, false, {\n                                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                                lineNumber: 172,\n                                columnNumber: 32\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-full bg-blue-400 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300\",\n                        type: \"submit\",\n                        children: \"Update Todo\"\n                    }, void 0, false, {\n                        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/webbermill/bismaek/todo/src/features/EditTodo.jsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditTodo, \"mrlbQ1NV0PkvPhhbEPq8OScmcWQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditTodo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditTodo);\nvar _c;\n$RefreshReg$(_c, \"EditTodo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Szs7Ozs7Ozs7Ozs7O2tDQUV0RSw4REFBQ2lDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQU1QLFdBQVU7Z0NBQTZDUSxTQUFROzBDQUFNOzs7Ozs7MENBRzVFLDhEQUFDQztnQ0FDQ1QsV0FBVTtnQ0FDVlUsTUFBSztnQ0FDTGxELElBQUc7Z0NBQ0hxQixNQUFLO2dDQUNMQyxPQUFPcEIsS0FBS0ssR0FBRztnQ0FDZjRDLFVBQVVoQzs7Ozs7OzRCQUVYVixZQUFZRixHQUFHLGtCQUFJLDhEQUFDNkM7Z0NBQUVaLFdBQVU7MENBQWdCL0IsWUFBWUYsR0FBRzs7Ozs7Ozs7Ozs7O2tDQUVsRSw4REFBQ2dDO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQU1QLFdBQVU7Z0NBQTZDUSxTQUFROzBDQUFPOzs7Ozs7MENBRzdFLDhEQUFDSztnQ0FDQ2IsV0FBVTtnQ0FDVnhDLElBQUc7Z0NBQ0hxQixNQUFLO2dDQUNMQyxPQUFPcEIsS0FBS00sSUFBSTtnQ0FDaEIyQyxVQUFVaEM7Ozs7Ozs0QkFFWFYsWUFBWUQsSUFBSSxrQkFBSSw4REFBQzRDO2dDQUFFWixXQUFVOzBDQUFnQi9CLFlBQVlELElBQUk7Ozs7Ozs7Ozs7OztrQ0FFcEUsOERBQUM4Qzt3QkFDQ2QsV0FBVTt3QkFDVlUsTUFBSztrQ0FDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0FqTE1wRDs7UUFDV0gsa0RBQVNBOzs7S0FEcEJHO0FBbUxOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9FZGl0VG9kby5qc3g/N2JiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCc0ZpbGxBcnJvd0xlZnRDaXJjbGVGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEVkaXRUb2RvID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IFt0b2RvLCBzZXRUb2RvXSA9IHVzZVN0YXRlKHtcbiAgICBmbmFtZTogXCJcIixcbiAgICBsbmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBhZ2U6IFwiXCIsXG4gICAgdGFzazogXCJcIlxuICB9KTtcblxuICBjb25zdCBbZmllbGRFcnJvcnMsIHNldEZpZWxkRXJyb3JzXSA9IHVzZVN0YXRlKHt9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKSB8fCBbXTtcbiAgICBjb25zdCBmb3VuZFRvZG8gPSB0b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSBpZCk7XG5cbiAgICBpZiAoZm91bmRUb2RvKSB7XG4gICAgICBzZXRUb2RvKGZvdW5kVG9kbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFkZFRvZG9EYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFkZFRvZG9EYXRhXCIpKTtcbiAgICAgIGlmIChhZGRUb2RvRGF0YSkge1xuICAgICAgICBzZXRUb2RvKGFkZFRvZG9EYXRhKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpZF0pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRUb2RvKChwcmV2VG9kbykgPT4gKHtcbiAgICAgIC4uLnByZXZUb2RvLFxuICAgICAgW25hbWVdOiB2YWx1ZVxuICAgIH0pKTtcbiAgICBzZXRGaWVsZEVycm9ycygocHJldkVycm9ycykgPT4gKHtcbiAgICAgIC4uLnByZXZFcnJvcnMsXG4gICAgICBbbmFtZV06IFwiXCJcbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlcnJvcnMgPSB7fTtcbiAgICBpZiAoIXRvZG8uZm5hbWUpIHtcbiAgICAgIGVycm9ycy5mbmFtZSA9IFwiWW91ciBmaXJzdCBuYW1lIGlzIHJlcXVpcmVkXCI7XG4gICAgfVxuICAgIGlmICghdG9kby5sbmFtZSkge1xuICAgICAgZXJyb3JzLmxuYW1lID0gXCJZb3VyIGxhc3QgbmFtZSBpcyByZXF1aXJlZFwiO1xuICAgIH1cbiAgICBpZiAoIXRvZG8uZW1haWwpIHtcbiAgICAgIGVycm9ycy5lbWFpbCA9IFwiWW91ciBlbWFpbCBpcyByZXF1aXJlZFwiO1xuICAgIH1cbiAgICBpZiAoIXRvZG8uYWdlKSB7XG4gICAgICBlcnJvcnMuYWdlID0gXCJZb3VyIGFnZSBpcyByZXF1aXJlZFwiO1xuICAgIH1cbiAgICBpZiAoIXRvZG8udGFzaykge1xuICAgICAgZXJyb3JzLnRhc2sgPSBcIlRvZG8gdGFzayBpcyByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA+IDApIHtcbiAgICAgIHNldEZpZWxkRXJyb3JzKGVycm9ycyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpIHx8IFtdO1xuICAgIGNvbnN0IHVwZGF0ZWRUb2RvcyA9IHRvZG9zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnRvZG8gfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH0pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVG9kb3MpKTtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhZGRUb2RvRGF0YVwiKTsgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTggcHktOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweS00IHNwYWNlLXgtMTJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBteS0zIHB5LTEgcm91bmRlZC1tZFwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWxlZnQgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgIDxCc0ZpbGxBcnJvd0xlZnRDaXJjbGVGaWxsIGNsYXNzTmFtZT1cInRleHQtYmx1ZS00MDBcIiAvPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXggdGV4dC0zeGwgdGV4dC1zbGF0ZS05MDAgbXgtMiBmb250LWJvbGRcIj5cbiAgICAgICAgICB0b2RvJm5ic3A7XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgdGV4dC1bMjhweF0gcm91bmRlZC1tZCBjYXBpdGFsaXplIHRleHQtd2hpdGUgcHgtMiBweS0wLjVcIj5cbiAgICAgICAgICAgIGxpc3RcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb3JtXG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbSBteC1hdXRvIGJnLXdoaXRlIHAtOCByb3VuZGVkLW1kIHNoYWRvdy1tZFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiZm5hbWVcIj5cbiAgICAgICAgICAgIEZpcnN0IG5hbWVcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1pbmRpZ28tNTAwXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiZm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cImZuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXt0b2RvLmZuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2ZpZWxkRXJyb3JzLmZuYW1lICYmIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkLTQwMFwiPntmaWVsZEVycm9ycy5mbmFtZX08L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGh0bWxGb3I9XCJsbmFtZVwiPlxuICAgICAgICAgICAgTGFzdCBuYW1lXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweC0zIHB5LTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJsbmFtZVwiXG4gICAgICAgICAgICBuYW1lPVwibG5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e3RvZG8ubG5hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZmllbGRFcnJvcnMubG5hbWUgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNDAwXCI+e2ZpZWxkRXJyb3JzLmxuYW1lfTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICBFbWFpbFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWJsdWUtNTAwXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17dG9kby5lbWFpbH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtmaWVsZEVycm9ycy5lbWFpbCAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZmllbGRFcnJvcnMuZW1haWx9PC9wPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwiYWdlXCI+XG4gICAgICAgICAgICBBZ2VcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIGlkPVwiYWdlXCJcbiAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e3RvZG8uYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2ZpZWxkRXJyb3JzLmFnZSAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZmllbGRFcnJvcnMuYWdlfTwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cInRhc2tcIj5cbiAgICAgICAgICAgIFRhc2tcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIGgtWzE0MHB4XSByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgICAgICAgaWQ9XCJ0YXNrXCJcbiAgICAgICAgICAgIG5hbWU9XCJ0YXNrXCJcbiAgICAgICAgICAgIHZhbHVlPXt0b2RvLnRhc2t9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7ZmllbGRFcnJvcnMudGFzayAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZC00MDBcIj57ZmllbGRFcnJvcnMudGFza308L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ibHVlLTQwMCB0ZXh0LXdoaXRlIHRleHQtc20gZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgPlxuICAgICAgICAgIFVwZGF0ZSBUb2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkJzRmlsbEFycm93TGVmdENpcmNsZUZpbGwiLCJMaW5rIiwiRWRpdFRvZG8iLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidG9kbyIsInNldFRvZG8iLCJmbmFtZSIsImxuYW1lIiwiZW1haWwiLCJhZ2UiLCJ0YXNrIiwiZmllbGRFcnJvcnMiLCJzZXRGaWVsZEVycm9ycyIsInRvZG9zIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZvdW5kVG9kbyIsImZpbmQiLCJhZGRUb2RvRGF0YSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZUb2RvIiwicHJldkVycm9ycyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXJyb3JzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInVwZGF0ZWRUb2RvcyIsIm1hcCIsIml0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHVzaCIsInJlbW92ZUl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiaHJlZiIsImgzIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInAiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/EditTodo.jsx\n"));

/***/ })

});