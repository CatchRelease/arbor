"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _Button = _interopRequireDefault(require("../../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<Pagination />', function () {
  var createSpy = jest.fn;
  var wrapper;

  var shallowPagination = function shallowPagination(props) {
    var baseProps = {
      paginate: function paginate() {
        return null;
      }
    };
    return (0, _enzyme.shallow)(_react.default.createElement(_Pagination.default, _objectSpread({}, baseProps, props)));
  };

  describe('Generic Behaviors', function () {
    beforeEach(function () {
      wrapper = shallowPagination();
    });
    it('Pagination Component should exist', function () {
      expect(wrapper).toExist();
    });
    it('has default props', function () {
      var instance = wrapper.instance();
      expect(instance.props.currentPage).toEqual(0);
      expect(instance.props.totalPages).toEqual(0);
      expect(instance.props.previousText).toEqual('previous');
      expect(instance.props.nextText).toEqual('next');
    });
  });
  describe('Children', function () {
    describe('has more than 1 page', function () {
      beforeEach(function () {
        wrapper = shallowPagination({
          currentPage: 1,
          totalPages: 2
        });
      });
      it('returns some items', function () {
        expect(wrapper.find(_Button.default)).toExist();
      });
    });
    describe('has 1 page only', function () {
      beforeEach(function () {
        wrapper = shallowPagination({
          currentPage: 1,
          totalPages: 1
        });
      });
      it('renders nothing', function () {
        expect(wrapper).toBeEmptyRender();
      });
    });
    describe('no currentPage', function () {
      beforeEach(function () {
        wrapper = shallowPagination({
          currentPage: 0,
          totalPages: 2
        });
      });
      it('renders nothing', function () {
        expect(wrapper).toBeEmptyRender();
      });
    });
    describe('no totalPages', function () {
      beforeEach(function () {
        wrapper = shallowPagination({
          currentPage: 1,
          totalPages: 0
        });
      });
      it('renders nothing', function () {
        expect(wrapper).toBeEmptyRender();
      });
    });
  });
  describe('Methods', function () {
    var instance;
    describe('getPaginationOptions', function () {
      describe('fewer than 10 pages', function () {
        beforeEach(function () {
          wrapper = shallowPagination({
            currentPage: 5,
            totalPages: 9
          });
        });
        it('returns an array of page options', function () {
          var options = wrapper.instance().getPaginationOptions();
          expect(options).toHaveLength(9);
          expect(options).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
      });
      describe('more than 10 pages', function () {
        describe('current page near first page', function () {
          beforeEach(function () {
            wrapper = shallowPagination({
              currentPage: 5,
              totalPages: 11
            });
          });
          it('returns an array of page options', function () {
            var options = wrapper.instance().getPaginationOptions();
            expect(options).toHaveLength(9);
            expect(options).toEqual([1, 2, 3, 4, 5, 6, 7, '...', 11]);
          });
        });
        describe('current page near last page', function () {
          beforeEach(function () {
            wrapper = shallowPagination({
              currentPage: 7,
              totalPages: 11
            });
          });
          it('returns an array of page options', function () {
            var options = wrapper.instance().getPaginationOptions();
            expect(options).toHaveLength(9);
            expect(options).toEqual([1, '...', 5, 6, 7, 8, 9, 10, 11]);
          });
        });
        describe('current page in the middle', function () {
          beforeEach(function () {
            wrapper = shallowPagination({
              currentPage: 6,
              totalPages: 11
            });
          });
          it('returns an array of page options', function () {
            var options = wrapper.instance().getPaginationOptions();
            expect(options).toHaveLength(9);
            expect(options).toEqual([1, '...', 4, 5, 6, 7, 8, '...', 11]);
          });
        });
      });
    });
    describe('paginate', function () {
      var paginateSpy;
      beforeEach(function () {
        paginateSpy = createSpy();
        wrapper = shallowPagination({
          currentPage: 1,
          totalPages: 10,
          paginate: paginateSpy
        });
      });
      it('calls paginate', function () {
        var newPage = 4;
        wrapper.instance().paginate(newPage);
        expect(paginateSpy).toHaveBeenCalledTimes(1);
        expect(paginateSpy).toHaveBeenLastCalledWith(newPage);
      });
    });
    describe('renderPaginationItem', function () {
      var currentPage = 1;
      beforeEach(function () {
        wrapper = shallowPagination({
          currentPage: currentPage,
          totalPages: 10
        });
        instance = wrapper.instance();
      });
      describe('current page', function () {
        var button;
        var page = currentPage;
        beforeEach(function () {
          button = (0, _enzyme.shallow)(_react.default.createElement("div", null, instance.renderPaginationItem(page, 1))).find(_Button.default);
        });
        it('renders the option', function () {
          expect(button).toExist();
          expect(button).toHaveProp({
            variant: 'primary',
            mx: 'smallest'
          });
          expect(button).not.toBeDisabled();
        });
        it('calls paginate on click', function () {
          var paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');
          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(page);
        });
      });
      describe('not current page', function () {
        var button;
        var page = 2;
        beforeEach(function () {
          button = (0, _enzyme.shallow)(_react.default.createElement("div", null, instance.renderPaginationItem(page, 1))).find(_Button.default);
        });
        it('renders the option', function () {
          expect(button).toExist();
          expect(button).toHaveProp({
            variant: 'minimal',
            mx: 'smallest'
          });
          expect(button).not.toBeDisabled();
        });
        it('calls paginate on click', function () {
          var paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');
          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(page);
        });
      });
      describe('ellipsis page', function () {
        var button;
        var page = '...';
        beforeEach(function () {
          button = (0, _enzyme.shallow)(_react.default.createElement("div", null, instance.renderPaginationItem(page, 1))).find(_Button.default);
        });
        it('renders the option', function () {
          expect(button).toExist();
          expect(button).toHaveProp({
            variant: 'minimal',
            mx: 'smallest'
          });
        });
        it('disabled', function () {
          expect(button).toBeDisabled();
        });
        it('no onClick event', function () {
          expect(button).not.toHaveProp('onClick');
        });
      });
    });
    describe('renderPreviousItem', function () {
      var button;
      describe('current page is first page', function () {
        beforeEach(function () {
          wrapper = shallowPagination({
            currentPage: 1,
            totalPages: 10
          });
          instance = wrapper.instance();
          button = (0, _enzyme.shallow)(_react.default.createElement("div", null, instance.renderPreviousItem())).find(_Button.default);
        });
        it('renders item', function () {
          expect(button).toExist();
        });
        it('is disabled', function () {
          expect(button).toBeDisabled();
        });
      });
      describe('current page is not first page', function () {
        beforeEach(function () {
          wrapper = shallowPagination({
            currentPage: 3,
            totalPages: 10
          });
          instance = wrapper.instance();
          button = (0, _enzyme.shallow)(_react.default.createElement("div", null, instance.renderPreviousItem())).find(_Button.default);
        });
        it('renders item', function () {
          expect(button).toExist();
        });
        it('is not disabled', function () {
          expect(button).not.toBeDisabled();
        });
        it('calls paginate on click', function () {
          var paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');
          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(2);
        });
      });
    });
    describe('renderNextItem', function () {
      var button;
      describe('current page is last page', function () {
        beforeEach(function () {
          wrapper = shallowPagination({
            currentPage: 10,
            totalPages: 10
          });
          instance = wrapper.instance();
          button = (0, _enzyme.shallow)(_react.default.createElement("div", null, instance.renderNextItem())).find(_Button.default);
        });
        it('renders item', function () {
          expect(button).toExist();
        });
        it('is disabled', function () {
          expect(button).toBeDisabled();
        });
      });
      describe('current page is not last page', function () {
        beforeEach(function () {
          wrapper = shallowPagination({
            currentPage: 8,
            totalPages: 10
          });
          instance = wrapper.instance();
          button = (0, _enzyme.shallow)(_react.default.createElement("div", null, instance.renderNextItem())).find(_Button.default);
        });
        it('renders item', function () {
          expect(button).toExist();
        });
        it('is not disabled', function () {
          expect(button).not.toBeDisabled();
        });
        it('calls paginate on click', function () {
          var paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');
          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(9);
        });
      });
    });
  });
});