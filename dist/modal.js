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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createModal)\n/* harmony export */ });\nconst key = '4367d242d87843ddb5e0a8cc46a359d5';\nconst url = 'https://api.rawg.io/api/games';\n\nconst body = document.getElementById('body');\nconst modal = document.getElementById('scrollableModal');\n\nconst getData = async (gameUrl) => {\n  const response = await fetch(gameUrl);\n  const data = await response.json();\n  return data;\n};\n\nfunction getGenres(genres) {\n  let appendedGenres = '';\n  genres.forEach((element) => {\n    appendedGenres += `${element.name}, `;\n  });\n  appendedGenres = appendedGenres.slice(0, -2);\n  return appendedGenres;\n}\n\nasync function createModal(id) {\n  modal.style.display = 'block';\n  body.style.overflow = 'hidden';\n  const gameUrl = `${url}/${id}?key=${key}`;\n  const game = await getData(gameUrl);\n\n  const modalImage = document.getElementById('modalImage');\n  modalImage.src = game.background_image;\n  const modalDetails = document.getElementById('modal-details');\n  document.getElementsByTagName('form')[0].id = id;\n  modalDetails.innerHTML = '';\n\n  const modalTitle = document.createElement('h2');\n  modalTitle.classList.add('text-center', 'py-3', 'fw-bold', 'color');\n  modalTitle.innerHTML = game.name_original;\n\n  const modalGenre = document.createElement('p');\n  modalGenre.classList.add('fs-5', 'm-0', 'col-md-6');\n  modalGenre.innerHTML = `<strong>Genre/s: </strong> ${getGenres(game.genres)}`;\n\n  const modalRating = document.createElement('p');\n  modalRating.classList.add('fs-5', 'm-0', 'col-md-6');\n  modalRating.innerHTML = `<strong>Rating: </strong> ${game.rating}/5 of ${game.ratings_count} reviews`;\n\n  const modalWebsite = document.createElement('a');\n  modalWebsite.innerHTML = '<strong>Website: </strong>click here';\n  modalWebsite.classList.add('fs-5', 'text-decoration-none', 'text-dark');\n  modalWebsite.href = game.website;\n\n  const modalDesc = document.createElement('p');\n  modalDesc.classList.add('my-3');\n  modalDesc.innerHTML = `<strong>Description: </strong> ${game.description.substring(\n    3,\n  )}`;\n\n  const closeButton = document.getElementById('modalClose');\n  closeButton.addEventListener('click', () => {\n    modal.style.display = 'none';\n    body.style.overflow = 'auto';\n  });\n\n  modalDetails.append(\n    modalTitle,\n    modalGenre,\n    modalRating,\n    modalWebsite,\n    modalDesc,\n  );\n}\n\n\n\n\n//# sourceURL=webpack://JavaScript-Capstone/./src/modal.js?");

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