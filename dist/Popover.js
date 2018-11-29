'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = exports.Popover = void 0;

var _core = require('@emotion/core');

var _react = _interopRequireDefault(require('react'));

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _polished = require('polished');

var _reactPopover = _interopRequireDefault(require('react-popover'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _Box = _interopRequireDefault(require('./Box'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

var PopoverContent =
  /*#__PURE__*/
  (0, _styled.default)(_Box.default, {
    label: 'PopoverContent',
    target: 'eubejzp0'
  })(
    'background:',
    function(props) {
      return props.theme.colors.white;
    },
    ';border-radius:',
    function(props) {
      return props.theme.borderRadius.large;
    },
    ';border:1px solid ',
    function(props) {
      return props.theme.colors.grey10;
    },
    ';box-shadow:0 4px 8px ',
    function(props) {
      return (0, _polished.transparentize)(0.9, props.theme.colors.black);
    },
    ',inset 0 -1px 0 ',
    function(props) {
      return (0, _polished.transparentize)(0.9, props.theme.colors.black);
    },
    ';min-height:40px;min-width:200px;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVrQyIsImZpbGUiOiIuLi9zcmMvUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgUmVhY3RQb3BvdmVyIGZyb20gJ3JlYWN0LXBvcG92ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IFBvcG92ZXJDb250ZW50ID0gc3R5bGVkKEJveClgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXMubGFyZ2V9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5MTB9O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHhcbiAgICAgICR7cHJvcHMgPT4gdHJhbnNwYXJlbnRpemUoMC45LCBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2spfSxcbiAgICBpbnNldCAwIC0xcHggMCAke3Byb3BzID0+IHRyYW5zcGFyZW50aXplKDAuOSwgcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrKX07XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG5gO1xuXG5leHBvcnQgY2xhc3MgUG9wb3ZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubm9kZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUtleWJvYXJkLCB0cnVlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5oYW5kbGVLZXlib2FyZCwgdHJ1ZSk7XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghaXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFJlZiA9IHRoaXMubm9kZS5jdXJyZW50O1xuXG4gICAgaWYgKFxuICAgICAgIWN1cnJlbnRSZWYuY29udGFpbmVyRWwuY29udGFpbnMoZS50YXJnZXQpICYmXG4gICAgICAhY3VycmVudFJlZi50YXJnZXRFbC5jb250YWlucyhlLnRhcmdldClcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlS2V5Ym9hcmQgPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIG9wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9KTtcbiAgfTtcblxuICBjbG9zZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9LCBvbkNsb3NlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY29udGVudCwgcHJlZmVyUGxhY2UsIC4uLnBvcG92ZXJQcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0eWxlZENvbnRlbnQgPSA8UG9wb3ZlckNvbnRlbnQ+e2NvbnRlbnR9PC9Qb3BvdmVyQ29udGVudD47XG5cbiAgICBjb25zdCB0cmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICBvbkNsaWNrOiB0aGlzLm9wZW5cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RQb3BvdmVyXG4gICAgICAgIHJlZj17dGhpcy5ub2RlfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgYm9keT17c3R5bGVkQ29udGVudH1cbiAgICAgICAgcHJlZmVyUGxhY2U9e3ByZWZlclBsYWNlfVxuICAgICAgICB7Li4ueyBwb3BvdmVyUHJvcHMgfX1cbiAgICAgID5cbiAgICAgICAge3RyaWdnZXJ9XG4gICAgICA8L1JlYWN0UG9wb3Zlcj5cbiAgICApO1xuICB9XG59XG5cblBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29udGVudCB0byBkaXNwbGF5IHdpdGhpbiB0aGUgUG9wb3ZlclxuICAgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIHRyaWdnZXIgd2hpY2ggd2lsbCBvcGVuIHRoZSBwb3BvdmVyIHdoZW4gaXQgaXMgY2xpY2tlZC4gQnkgZGVmYXVsdCxcbiAgICogdGhlIGNoaWxkIHdpbGwgYmUgY2xvbmVkIGFuZCBhbiBvbkNsaWNrIGhhbmRsZXIgd2lsbCBiZSBhdHRhY2hlZCB0byBvcGVuXG4gICAqIHRoZSBwb3BvdmVyIHdoZW4gaXQgaXMgY2xpY2tlZC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZmlyZWQgb25jZSB0aGUgUG9wb3ZlcidzIHN0YXRlIGlzIHNldCB0byBjbG9zZWRcbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBQcmVmZXJyZWQgbG9jYXRpb24gdG8gcGxhY2UgdGhlIHBvcG92ZXIgd2hlbiBpdCdzIG9wZW5lZCBpbiB0aGUgZXZlbnQgdGhhdFxuICAgKiB0aGVyZSBhcmUgbXVsdGlwbGUgYXZhaWxhYmxlIGFyZWFzIHdoZXJlIHRoZSBwb3BvdmVyIHdvdWxkIGZpdC4gVGhpcyBsaXN0XG4gICAqIGlzIGJhc2VkIG9mZiB0aGUgc3VwcG9ydGVkIHBsYWNlcyBwcm92aWRlZCBieSBbbGl0dGxlYml0cy9yZWFjdC1wb3BvdmVyXShodHRwczovL2dpdGh1Yi5jb20vbGl0dGxlYml0cy9yZWFjdC1wb3BvdmVyI3ByZWZlcnBsYWNlLS1lbnVtLXN0cmluZy0tbnVsbClcbiAgICovXG4gIHByZWZlclBsYWNlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdhYm92ZScsXG4gICAgJ3JpZ2h0JyxcbiAgICAnYmVsb3cnLFxuICAgICdsZWZ0JyxcbiAgICAncm93JyxcbiAgICAnY29sdW1uJyxcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnXG4gIF0pXG59O1xuXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZmVyUGxhY2U6ICdiZWxvdycsXG4gIG9uQ2xvc2U6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXI7XG4iXX0= */'
  );

var Popover =
  /*#__PURE__*/
  (function(_React$Component) {
    _inherits(Popover, _React$Component);

    function Popover(props) {
      var _this;

      _classCallCheck(this, Popover);

      _this = _possibleConstructorReturn(
        this,
        _getPrototypeOf(Popover).call(this, props)
      );
      _this.state = {
        isOpen: false
      };

      _this.handleOutsideClick = function(e) {
        var isOpen = _this.state.isOpen;

        if (!isOpen) {
          return;
        }

        var currentRef = _this.node.current;

        if (
          !currentRef.containerEl.contains(e.target) &&
          !currentRef.targetEl.contains(e.target)
        ) {
          _this.close();
        }
      };

      _this.handleKeyboard = function(e) {
        if (e.key === 'Escape') {
          _this.close();
        }
      };

      _this.open = function() {
        _this.setState({
          isOpen: true
        });
      };

      _this.close = function() {
        var onClose = _this.props.onClose;

        _this.setState(
          {
            isOpen: false
          },
          onClose
        );
      };

      _this.node = _react.default.createRef();
      return _this;
    }

    _createClass(Popover, [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          document.addEventListener('click', this.handleOutsideClick, true);
          document.addEventListener('keypress', this.handleKeyboard, true);
        }
      },
      {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          document.removeEventListener('click', this.handleOutsideClick, true);
          document.removeEventListener('keypress', this.handleKeyboard, true);
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props = this.props,
            children = _this$props.children,
            content = _this$props.content,
            preferPlace = _this$props.preferPlace,
            popoverProps = _objectWithoutProperties(_this$props, [
              'children',
              'content',
              'preferPlace'
            ]);

          var isOpen = this.state.isOpen;
          var styledContent = (0, _core.jsx)(PopoverContent, null, content);

          var trigger = _react.default.cloneElement(children, {
            onClick: this.open
          });

          return (0, _core.jsx)(
            _reactPopover.default,
            _extends(
              {
                ref: this.node,
                isOpen: isOpen,
                body: styledContent,
                preferPlace: preferPlace
              },
              {
                popoverProps: popoverProps
              }
            ),
            trigger
          );
        }
      }
    ]);

    return Popover;
  })(_react.default.Component);

exports.Popover = Popover;
Popover.propTypes = {
  /**
   * Content to display within the Popover
   */
  content: _propTypes.default.node.isRequired,

  /**
   * The trigger which will open the popover when it is clicked. By default,
   * the child will be cloned and an onClick handler will be attached to open
   * the popover when it is clicked.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Optional callback that will be fired once the Popover's state is set to closed
   */
  onClose: _propTypes.default.func,

  /**
   * Preferred location to place the popover when it's opened in the event that
   * there are multiple available areas where the popover would fit. This list
   * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#preferplace--enum-string--null)
   */
  preferPlace: _propTypes.default.oneOf([
    'above',
    'right',
    'below',
    'left',
    'row',
    'column',
    'start',
    'end'
  ])
};
Popover.defaultProps = {
  preferPlace: 'below',
  onClose: function onClose() {
    return null;
  }
};
var _default = Popover;
exports.default = _default;
