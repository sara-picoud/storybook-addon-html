"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactCodemirror = _interopRequireDefault(require("@uiw/react-codemirror"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * Checkout https://github.com/storybookjs/storybook/blob/next/code/addons/jest/src/components/Panel.tsx
 * for a real world example
 */
var PanelContent = function PanelContent(_ref) {
  var code = _ref.code;
  var _React$useState = _react["default"].useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    codeState = _React$useState2[0],
    setCodeState = _React$useState2[1];
  _react["default"].useEffect(function () {
    setCodeState(code || '');
  }, [code]);
  var onChange = _react["default"].useCallback(function (value) {
    setCodeState(value);
  }, []);
  _react["default"].useEffect(function () {
    setTimeout(function () {
      var storybookPreviewWrapper = document.getElementById('storybook-preview-iframe');
      if (storybookPreviewWrapper && storybookPreviewWrapper.contentDocument) {
        var storybookRoot = storybookPreviewWrapper.contentDocument.getElementById('storybook-root').firstChild;
        if (storybookRoot) {
          storybookRoot.innerHTML = codeState;
        }
      }
    }, 10);
  }, [codeState]);
  return /*#__PURE__*/_react["default"].createElement(_reactCodemirror["default"], {
    basicSetup: {
      lineNumbers: true,
      completionKeymap: true,
      highlightActiveLineGutter: true,
      autocompletion: true
    },
    value: codeState,
    height: "100%",
    onChange: onChange
  });
};
exports.PanelContent = PanelContent;