(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function (sel, ctx) {
    return document.querySelectorAll(sel)[0];
};

module.exports = exports["default"];

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _stickyNav = require('./sticky-nav');

var _stickyNav2 = _interopRequireDefault(_stickyNav);

(0, _stickyNav2['default'])();

},{"./sticky-nav":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _$ = require('./$');

var _$2 = _interopRequireDefault(_$);

var docNav = undefined;

function listenNavOpen() {

    var elem = (0, _$2['default'])('.nav-expand');
    var hasTouch = ('ontouchstart' in window);
    var event = 'click';

    function toggle(evt) {
        evt.preventDefault();
        docNav.classList.toggle('open');
    }

    if (hasTouch) {
        event = 'touchstart';
    }

    elem.addEventListener(event, toggle);
}

exports['default'] = function () {
    if (window.location.pathname.slice(0, 5) === '/docs') {
        docNav = (0, _$2['default'])('.doc-nav');
        if (docNav) {
            listenNavOpen();
        }
    }
};

module.exports = exports['default'];

},{"./$":1}]},{},[2])
//# sourceMappingURL=app.js.map
