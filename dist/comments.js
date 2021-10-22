/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComment\": () => (/* binding */ createComment),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\n/* harmony import */ var _countComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countComments.js */ \"./src/countComments.js\");\n\n\nconst commentsKey = 'vAUByXh5uun5dFWwLARx';\nconst url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${commentsKey}/comments`;\n\nconst name = document.getElementById('name');\nconst insight = document.getElementById('insight');\nconst commentBtn = document.getElementById('commentBtn');\n\nfunction createComment({ itemId, username, myComment }) {\n  const comment = {\n    item_id: itemId,\n    username,\n    comment: myComment,\n  };\n  return fetch(url, {\n    method: 'POST',\n    body: JSON.stringify(comment),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n}\n\nfunction populateComments(comments) {\n  const allComments = document.getElementById('comments');\n  allComments.innerHTML = '';\n  const commentsCount = document.createElement('h4');\n  commentsCount.classList.add('text-center', 'mt-5', 'fw-bold', 'color');\n  commentsCount.innerHTML = `Comments(${comments.length})`;\n  allComments.append(commentsCount);\n\n  comments.forEach((comment) => {\n    const commentBox = document.createElement('div');\n    commentBox.classList.add('p-3', 'my-1');\n\n    const commentTitle = document.createElement('div');\n    commentTitle.classList.add('row');\n\n    const commentOwner = document.createElement('span');\n    commentOwner.classList.add('align-middle', 'fs-5');\n    commentOwner.innerHTML = comment.username;\n\n    const commentDate = document.createElement('span');\n    commentDate.classList.add('col-md-2');\n    commentDate.innerHTML = comment.creation_date;\n\n    const hr = document.createElement('hr');\n    hr.classList.add('col-md-6', 'm-1');\n\n    const commentText = document.createElement('p');\n    commentText.classList.add('px-3');\n    commentText.innerHTML = comment.comment;\n\n    commentTitle.append(commentOwner, commentDate);\n    commentBox.append(commentTitle, hr, commentText);\n\n    allComments.append(commentBox);\n  });\n}\n\nasync function getComments(id) {\n  const comUrl = `${url}?item_id=${id}`;\n  await fetch(comUrl).then(async (res) => {\n    const temp = await res.json();\n    if ((0,_countComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(temp) > 0) {\n      populateComments(temp);\n    } else {\n      const allComments = document.getElementById('comments');\n      allComments.innerHTML = '';\n      const commentsCount = document.createElement('h4');\n      commentsCount.classList.add('text-center', 'mt-5', 'fw-bold', 'color');\n      commentsCount.innerHTML = 'Comments(0)';\n      allComments.append(commentsCount);\n    }\n  });\n}\n\ncommentBtn.addEventListener('click', async (event) => {\n  event.preventDefault();\n  if (name.checkValidity() && insight.checkValidity()) {\n    const newComment = {\n      itemId: event.target.parentElement.parentElement.id,\n      username: name.value,\n      myComment: insight.value,\n    };\n    const response = await createComment(newComment);\n    if (response.status === 201) {\n      getComments(event.target.parentElement.parentElement.id);\n      name.value = '';\n      insight.value = '';\n    }\n  } else {\n    name.setCustomValidity('Enter your name and insight');\n  }\n});\n\n\n\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/comments.js?");

/***/ }),

/***/ "./src/countComments.js":
/*!******************************!*\
  !*** ./src/countComments.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ countComments)\n/* harmony export */ });\nfunction countComments(comments) {\n  return comments.length;\n}\n\n\n\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/countComments.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/comments.js");
/******/ 	
/******/ })()
;