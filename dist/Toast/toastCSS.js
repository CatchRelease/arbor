"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("@emotion/react");

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var toastCSS = process.env.NODE_ENV === "production" ? {
  name: "yj2azy-toastCSS",
  styles: ".Toastify{.arbor-toast-container{display:grid;height:0;justify-content:center;left:0;position:fixed;top:0;width:100%;}.arbor-toast{margin-top:16px;max-width:90vw;}}@keyframes toastSlideIn{from{opacity:0;transform:translate(0, -100px);}50%{opacity:0;}to{opacity:1;transform:translate(0, 0);}}.toastSlideIn{animation-duration:500ms;animation-fill-mode:forwards;animation-name:toastSlideIn;}@keyframes toastSlideOut{from{opacity:1;transform:translate(0, 0);}50%{opacity:0;}to{opacity:0;transform:translate(0, -100px);}}.toastSlideOut{animation-duration:500ms;animation-fill-mode:forwards;animation-name:toastSlideOut;};label:toastCSS;"
} : {
  name: "yj2azy-toastCSS",
  styles: ".Toastify{.arbor-toast-container{display:grid;height:0;justify-content:center;left:0;position:fixed;top:0;width:100%;}.arbor-toast{margin-top:16px;max-width:90vw;}}@keyframes toastSlideIn{from{opacity:0;transform:translate(0, -100px);}50%{opacity:0;}to{opacity:1;transform:translate(0, 0);}}.toastSlideIn{animation-duration:500ms;animation-fill-mode:forwards;animation-name:toastSlideIn;}@keyframes toastSlideOut{from{opacity:1;transform:translate(0, 0);}50%{opacity:0;}to{opacity:0;transform:translate(0, -100px);}}.toastSlideOut{animation-duration:500ms;animation-fill-mode:forwards;animation-name:toastSlideOut;};label:toastCSS;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub2FzdC90b2FzdENTUy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFb0IiLCJmaWxlIjoiLi4vLi4vc3JjL1RvYXN0L3RvYXN0Q1NTLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5jb25zdCB0b2FzdENTUyA9IGNzc2BcbiAgLlRvYXN0aWZ5IHtcbiAgICAuYXJib3ItdG9hc3QtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuYXJib3ItdG9hc3Qge1xuICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIG1heC13aWR0aDogOTB2dztcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHRvYXN0U2xpZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMHB4KTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XG4gICAgfVxuICB9XG5cbiAgLnRvYXN0U2xpZGVJbiB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tbmFtZTogdG9hc3RTbGlkZUluO1xuICB9XG5cbiAgQGtleWZyYW1lcyB0b2FzdFNsaWRlT3V0IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEwMHB4KTtcbiAgICB9XG4gIH1cblxuICAudG9hc3RTbGlkZU91dCB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBhbmltYXRpb24tbmFtZTogdG9hc3RTbGlkZU91dDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgdG9hc3RDU1M7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var _default = toastCSS;
exports["default"] = _default;