webpackHotUpdate("static\\development\\pages\\player.js",{

/***/ "./pages/player.js":
/*!*************************!*\
  !*** ./pages/player.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/Layout */ "./layout/Layout.js");
/* harmony import */ var _components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/VideoPlayer/VideoPlayer */ "./components/VideoPlayer/VideoPlayer.js");
/* harmony import */ var _api_fetch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../api/fetch */ "./api/fetch.js");
/* harmony import */ var _components_Playlists_Playlists__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Playlists/Playlists */ "./components/Playlists/Playlists.js");















var Player =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Player, _React$Component);

  function Player(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Player);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Player).call(this, props));
    _this.id = _this.props.router.query.id;
    _this.state = {
      currentVideo: {},
      playlistsItems: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Player, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_layout_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
        inverted: true,
        padded: true,
        columns: 2
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Row, {
        columns: "equal"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        floated: "left",
        width: 11
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_VideoPlayer_VideoPlayer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        videoId: this.props.videoId,
        data: this.props.currentVideo
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Grid"].Column, {
        width: 5
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__["Segment"], {
        inverted: true,
        color: "black"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Playlists_Playlists__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "inverted",
        playlistsItems: this.props.playlistsItems
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var data, otherVideos;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(ctx.query.type === "playlist")) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return Object(_api_fetch__WEBPACK_IMPORTED_MODULE_12__["fetchPlaylistItems"])(ctx.query.id);

              case 3:
                data = _context.sent;
                return _context.abrupt("return", {
                  currentVideo: data.items[0],
                  videoId: data.items[0].snippet.resourceId.videoId,
                  playlistsItems: data.items
                });

              case 7:
                _context.next = 9;
                return Object(_api_fetch__WEBPACK_IMPORTED_MODULE_12__["fetchVideos"])(ctx.query.id);

              case 9:
                data = _context.sent;
                _context.next = 12;
                return Object(_api_fetch__WEBPACK_IMPORTED_MODULE_12__["fetchVideos"])();

              case 12:
                otherVideos = _context.sent;
                return _context.abrupt("return", {
                  currentVideo: data.items[0],
                  videoId: data.items[0].id,
                  playlistsItems: otherVideos.items
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Player));

/***/ })

})
//# sourceMappingURL=player.js.fdd915076cb10f316d5f.hot-update.js.map