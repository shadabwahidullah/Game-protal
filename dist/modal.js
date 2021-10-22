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

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createModal)\n/* harmony export */ });\nconst key = '4367d242d87843ddb5e0a8cc46a359d5';\r\nconst url = 'https://api.rawg.io/api/games';\r\n\r\nconst body = document.getElementById('body');\r\nconst modal = document.getElementById('scrollableModal');\r\n\r\nconst getData = async (gameUrl) => {\r\n  const response = await fetch(gameUrl);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nfunction getGenres(genres) {\r\n  let appendedGenres = '';\r\n  genres.forEach((element) => {\r\n    appendedGenres += `${element.name}, `;\r\n  });\r\n  appendedGenres = appendedGenres.slice(0, -2);\r\n  return appendedGenres;\r\n}\r\n\r\nasync function createModal(id) {\r\n  modal.style.display = 'block';\r\n  body.style.overflow = 'hidden';\r\n  const gameUrl = `${url}/${id}?key=${key}`;\r\n  const game = await getData(gameUrl);\r\n\r\n  const modalImage = document.getElementById('modalImage');\r\n  modalImage.src = game.background_image;\r\n  const modalDetails = document.getElementById('modal-details');\r\n  modalDetails.innerHTML = '';\r\n\r\n  const modalTitle = document.createElement('h2');\r\n  modalTitle.classList.add('text-center', 'py-3');\r\n  modalTitle.innerHTML = game.name_original;\r\n\r\n  const modalGenre = document.createElement('p');\r\n  modalGenre.classList.add('fs-5', 'm-0', 'col-md-6');\r\n  modalGenre.innerHTML = `<strong>Genre/s: </strong> ${getGenres(game.genres)}`;\r\n\r\n  const modalRating = document.createElement('p');\r\n  modalRating.classList.add('fs-5', 'm-0', 'col-md-6');\r\n  modalRating.innerHTML = `<strong>Rating: </strong> ${game.rating}/5 of ${game.ratings_count} reviews`;\r\n\r\n  const modalWebsite = document.createElement('a');\r\n  modalWebsite.innerHTML = '<strong>Website: </strong>click here';\r\n  modalWebsite.classList.add('fs-5', 'text-decoration-none', 'text-dark');\r\n  modalWebsite.href = game.website;\r\n\r\n  const modalDesc = document.createElement('p');\r\n  modalDesc.classList.add('my-3');\r\n  modalDesc.innerHTML = `<strong>Description: </strong> ${game.description.substring(\r\n    3,\r\n  )}`;\r\n\r\n  const closeButton = document.getElementById('modalClose');\r\n  closeButton.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    body.style.overflow = 'auto';\r\n  });\r\n\r\n  modalDetails.append(\r\n    modalTitle,\r\n    modalGenre,\r\n    modalRating,\r\n    modalWebsite,\r\n    modalDesc,\r\n  );\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/modal.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;