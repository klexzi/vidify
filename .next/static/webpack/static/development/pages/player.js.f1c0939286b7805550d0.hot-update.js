webpackHotUpdate("static\\development\\pages\\player.js",{

/***/ "./components/VideoPlayer/VideoPlayer.js":
/*!***********************************************!*\
  !*** ./components/VideoPlayer/VideoPlayer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");



var VideoPlayer = function VideoPlayer(props) {
  console.log(props.videoId);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    inverted: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Embed"], {
    autoplay: true,
    brandedUI: true,
    color: "dark",
    hd: true,
    id: props.videoId,
    placeholder: props.data.snippet.thumbnails.standard.url,
    source: "youtube"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    content: props.data.snippet.title,
    as: "h2"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(VideoPlayer));

/***/ })

})
//# sourceMappingURL=player.js.f1c0939286b7805550d0.hot-update.js.map