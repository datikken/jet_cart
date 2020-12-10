(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./resources/js/Shared/Inputs/MaskedInput.js":
/*!***************************************************!*\
  !*** ./resources/js/Shared/Inputs/MaskedInput.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask-core */ "./node_modules/inputmask-core/lib/index.js");
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ff_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ff-polyfill */ "./resources/js/Shared/Inputs/ff-polyfill.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


 // Firefox Polyfill for focus events

Object(_ff_polyfill__WEBPACK_IMPORTED_MODULE_1__["default"])();
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MaskedInput',
  render: function render(h) {
    return h('input', {
      ref: 'input',
      attrs: {
        disabled: this.maskCore === null || this.disabled
      },
      domProps: {
        value: this.value
      },
      on: {
        keydown: this.keyDown,
        keypress: this.keyPress,
        keyup: this.keyUp,
        textInput: this.textInput,
        mouseup: this.mouseUp,
        focusout: this.focusOut,
        cut: this.cut,
        copy: this.copy,
        paste: this.paste
      }
    });
  },
  data: function data() {
    return {
      marginLeft: 0,
      maskCore: null,
      updateAfterAll: false
    };
  },
  props: {
    value: {
      type: String
    },
    mask: {
      required: true,
      validator: function validator(value) {
        return !!(value && value.length >= 1 || value instanceof Object);
      }
    },
    placeholderChar: {
      type: String,
      "default": '_',
      validator: function validator(value) {
        return !!(value && value.length === 1);
      }
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    mask: function mask(newValue, oldValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
        this.initMask();
      }
    },
    value: function value(newValue) {
      if (this.maskCore) this.maskCore.setValue(newValue);
    }
  },
  mounted: function mounted() {
    this.initMask();
  },
  methods: {
    initMask: function initMask() {
      var _this = this;

      try {
        if (this.mask instanceof Object) {
          this.maskCore = new inputmask_core__WEBPACK_IMPORTED_MODULE_0___default.a(this.mask);
        } else {
          this.maskCore = new inputmask_core__WEBPACK_IMPORTED_MODULE_0___default.a({
            pattern: this.mask,
            value: '',
            placeholderChar: this.placeholderChar,

            /* eslint-disable quote-props */
            formatCharacters: {
              'a': {
                validate: function validate(_char) {
                  return /^[A-Za-zА-Яа-я]$/.test(_char);
                }
              },
              'A': {
                validate: function validate(_char2) {
                  return /^[A-Za-zА-Яа-я]$/.test(_char2);
                },
                transform: function transform(_char3) {
                  return _char3.toUpperCase();
                }
              },
              '*': {
                validate: function validate(_char4) {
                  return /^[\dA-Za-zА-Яа-я]$/.test(_char4);
                }
              },
              '#': {
                validate: function validate(_char5) {
                  return /^[\dA-Za-zА-Яа-я]$/.test(_char5);
                },
                transform: function transform(_char6) {
                  return _char6.toUpperCase();
                }
              },
              '+': {
                validate: function validate() {
                  return true;
                }
              }
            }
            /* eslint-enable */

          });
        }

        _toConsumableArray(this.$refs.input.value).reduce(function (memo, item) {
          return _this.maskCore.input(item);
        }, null);

        this.maskCore.setSelection({
          start: 0,
          end: 0
        });

        if (this.$refs.input.value === '') {
          this.$emit('input', '', '');
        } else {
          this.updateToCoreState();
        }
      } catch (e) {
        this.maskCore = null;
        this.$refs.input.value = 'Error';
        this.$emit('input', this.$refs.input.value, '');
      }
    },
    getValue: function getValue() {
      return this.maskCore ? this.maskCore.getValue() : '';
    },
    keyDown: function keyDown(e) {
      // Always
      if (this.maskCore === null) {
        e.preventDefault();
        return;
      }

      this.setNativeSelection();

      switch (e.keyCode) {
        // backspace
        case 8:
          e.preventDefault();

          if (this.maskCore.selection.start > this.marginLeft || this.maskCore.selection.start !== this.maskCore.selection.end) {
            this.maskCore.backspace();
            this.updateToCoreState();
          }

          break;
        // left arrow

        case 37:
          e.preventDefault();

          if (this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
            // this.$refs.input.selectionEnd = this.$refs.input.selectionStart - 1; @TODO
            this.$refs.input.selectionStart -= 1;
          }

          this.maskCore.selection = {
            start: this.$refs.input.selectionStart,
            end: this.$refs.input.selectionStart
          };
          this.updateToCoreState();
          break;
        // right arrow

        case 39:
          e.preventDefault();

          if (this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
            this.$refs.input.selectionEnd += 1;
          }

          this.maskCore.selection = {
            start: this.$refs.input.selectionEnd,
            end: this.$refs.input.selectionEnd
          };
          this.updateToCoreState();
          break;
        // end

        case 35:
          e.preventDefault();
          this.$refs.input.selectionStart = this.$refs.input.value.length;
          this.$refs.input.selectionEnd = this.$refs.input.value.length;
          this.maskCore.selection = {
            start: this.$refs.input.selectionEnd,
            end: this.$refs.input.selectionEnd
          };
          this.updateToCoreState();
          break;
        // home

        case 36:
          e.preventDefault();
          this.$refs.input.selectionStart = 0;
          this.$refs.input.selectionEnd = 0;
          this.maskCore.selection = {
            start: this.$refs.input.selectionStart,
            end: this.$refs.input.selectionStart
          };
          this.updateToCoreState();
          break;
        // delete

        case 46:
          e.preventDefault();

          if (this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
            this.maskCore.setValue('');
            this.maskCore.setSelection({
              start: 0,
              end: 0
            });
            this.$refs.input.selectionStart = this.maskCore.selection.start;
            this.$refs.input.selectionEnd = this.maskCore.selection.start;
          } else {
            this.maskCore.backspace();
          }

          this.updateToCoreState();
          break;

        default:
          break;
      }
    },
    keyPress: function keyPress(e) {
      // works only on Desktop
      if (e.ctrlKey) return; // Fix FF copy/paste issue
      // IE & FF are not trigger textInput event, so we have to force it

      /* eslint-disable */

      var isIE =
      /*@cc_on!@*/
       false || !!document.documentMode; //by http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser

      /* eslint-enable */

      var isFirefox = typeof InstallTrigger !== 'undefined';

      if (isIE || isFirefox) {
        e.preventDefault();
        e.data = e.key;
        this.textInput(e);
      }
    },
    textInput: function textInput(e) {
      if (e.preventDefault) e.preventDefault();

      if (this.maskCore.input(e.data)) {
        this.updateAfterAll = true;
      }

      this.updateToCoreState();
    },
    keyUp: function keyUp(e) {
      if (e.keyCode === 9) {
        // Preven change selection for Tab in
        return;
      }

      this.updateToCoreState();
      this.updateAfterAll = false;
    },
    cut: function cut(e) {
      e.preventDefault();

      if (this.$refs.input.selectionStart !== this.$refs.input.selectionEnd) {
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error(err);
        } // eslint-disable-line no-empty


        this.maskCore.backspace();
        this.updateToCoreState();
      }
    },
    copy: function copy() {},
    paste: function paste(e) {
      var _this2 = this;

      e.preventDefault();
      var text = e.clipboardData.getData('text');

      _toConsumableArray(text).reduce(function (memo, item) {
        return _this2.maskCore.input(item);
      }, null);

      this.updateToCoreState();
    },
    updateToCoreState: function updateToCoreState() {
      if (this.maskCore === null) {
        return;
      }

      if (this.$refs.input.value !== this.maskCore.getValue()) {
        this.$refs.input.value = this.maskCore.getValue();
        this.$emit('input', this.$refs.input.value, this.maskCore.getRawValue());
      }

      this.$refs.input.selectionStart = this.maskCore.selection.start;
      this.$refs.input.selectionEnd = this.maskCore.selection.end;
    },
    isEmpty: function isEmpty() {
      if (this.maskCore === null) return true;
      return this.maskCore.getValue() === this.maskCore.emptyValue;
    },
    focusOut: function focusOut() {
      if (this.isEmpty()) {
        this.$refs.input.value = '';
        this.maskCore.setSelection({
          start: 0,
          end: 0
        });
        this.$emit('input', '', '');
      }
    },
    setNativeSelection: function setNativeSelection() {
      this.maskCore.selection = {
        start: this.$refs.input.selectionStart,
        end: this.$refs.input.selectionEnd
      };
    },
    mouseUp: function mouseUp() {
      if (this.isEmpty() && this.$refs.input.selectionStart === this.$refs.input.selectionEnd) {
        this.maskCore.setSelection({
          start: 0,
          end: 0
        });
        this.$refs.input.selectionStart = this.maskCore.selection.start;
        this.$refs.input.selectionEnd = this.maskCore.selection.start;
        this.marginLeft = this.maskCore.selection.start;
        this.updateToCoreState();
      } else {
        this.setNativeSelection();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/Shared/Inputs/ff-polyfill.js":
/*!***************************************************!*\
  !*** ./resources/js/Shared/Inputs/ff-polyfill.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Copy paste from https://gist.github.com/nuxodin/9250e56a3ce6c0446efa
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var w = window,
      d = w.document;

  if (w.onfocusin === undefined) {
    d.addEventListener('focus', addPolyfill, true);
    d.addEventListener('blur', addPolyfill, true);
    d.addEventListener('focusin', removePolyfill, true);
    d.addEventListener('focusout', removePolyfill, true);
  }

  function addPolyfill(e) {
    var type = e.type === 'focus' ? 'focusin' : 'focusout';
    var event = new CustomEvent(type, {
      bubbles: true,
      cancelable: false
    });
    event.c1Generated = true;
    e.target.dispatchEvent(event);
  }

  function removePolyfill(e) {
    if (!e.c1Generated) {
      // focus after focusin, so chrome will the first time trigger tow times focusin
      d.removeEventListener('focus', addPolyfill, true);
      d.removeEventListener('blur', addPolyfill, true);
      d.removeEventListener('focusin', removePolyfill, true);
      d.removeEventListener('focusout', removePolyfill, true);
    }

    setTimeout(function () {
      d.removeEventListener('focusin', removePolyfill, true);
      d.removeEventListener('focusout', removePolyfill, true);
    });
  }
});

/***/ })

}]);