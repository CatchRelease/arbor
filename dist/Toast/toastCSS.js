"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _core = require("@emotion/core");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var toastCSS = process.env.NODE_ENV === "production" ? {
  name: "ky40e4-toastCSS",
  styles: ".Toastify{.arbor-toast-container{display:grid;height:0;justify-content:center;left:0;position:fixed;top:0;width:100%;}.arbor-toast{margin-top:16px;max-width:90vw;}}@keyframes toastSlideIn{from{opacity:0;transform:translate(0,-100px);}50%{opacity:0;}to{opacity:1;transform:translate(0,0);}}.toastSlideIn{animation-name:toastSlideIn;}@keyframes toastSlideOut{from{opacity:1;transform:translate(0,0);}50%{opacity:0;}to{opacity:0;transform:translate(0,-100px);}}.toastSlideOut{animation-name:toastSlideOut;};label:toastCSS;"
} : {
  name: "ky40e4-toastCSS",
  styles: ".Toastify{.arbor-toast-container{display:grid;height:0;justify-content:center;left:0;position:fixed;top:0;width:100%;}.arbor-toast{margin-top:16px;max-width:90vw;}}@keyframes toastSlideIn{from{opacity:0;transform:translate(0,-100px);}50%{opacity:0;}to{opacity:1;transform:translate(0,0);}}.toastSlideIn{animation-name:toastSlideIn;}@keyframes toastSlideOut{from{opacity:1;transform:translate(0,0);}50%{opacity:0;}to{opacity:0;transform:translate(0,-100px);}}.toastSlideOut{animation-name:toastSlideOut;};label:toastCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2FzdC90b2FzdENTUy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFb0IiLCJmaWxlIjoiLi4vLi4vc3JjL1RvYXN0L3RvYXN0Q1NTLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IHRvYXN0Q1NTID0gY3NzYFxuICAuVG9hc3RpZnkge1xuICAgIC5hcmJvci10b2FzdC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5hcmJvci10b2FzdCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgbWF4LXdpZHRoOiA5MHZ3O1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgdG9hc3RTbGlkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwcHgpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG4gIH1cblxuICAudG9hc3RTbGlkZUluIHtcbiAgICBhbmltYXRpb24tbmFtZTogdG9hc3RTbGlkZUluO1xuICB9XG5cbiAgQGtleWZyYW1lcyB0b2FzdFNsaWRlT3V0IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMHB4KTtcbiAgICB9XG4gIH1cblxuICAudG9hc3RTbGlkZU91dCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHRvYXN0U2xpZGVPdXQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHRvYXN0Q1NTO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var _default = toastCSS;
exports["default"] = _default;