"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AccordionPanel = _interopRequireDefault(require("../AccordionPanel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<AccordionPanel />', function () {
  context('accordion section is open', function () {
    it('displays', function () {
      var panel = (0, _enzyme.shallow)(_react.default.createElement(_AccordionPanel.default, {
        isOpen: true
      }));
      expect(panel.find('StyledAccordionPanel')).toHaveProp({
        display: 'block'
      });
    });
  });
  context('accordion section is closed', function () {
    it('hides', function () {
      var panel = (0, _enzyme.shallow)(_react.default.createElement(_AccordionPanel.default, {
        isOpen: false
      }));
      expect(panel.find('StyledAccordionPanel')).toHaveProp({
        display: 'none'
      });
    });
  });
});