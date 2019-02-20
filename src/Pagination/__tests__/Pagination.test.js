import React from 'react';
import { shallow } from 'enzyme';

import Pagination from '../Pagination';
import Button from '../../Button';

describe('<Pagination />', () => {
  const createSpy = jest.fn;

  let wrapper;

  const shallowPagination = props => {
    const baseProps = {
      paginate: () => null
    };
    return shallow(<Pagination {...{ ...baseProps, ...props }} />);
  };

  describe('Generic Behaviors', () => {
    beforeEach(() => {
      wrapper = shallowPagination();
    });

    it('Pagination Component should exist', () => {
      expect(wrapper).toExist();
    });

    it('has default props', () => {
      const instance = wrapper.instance();

      expect(instance.props.currentPage).toEqual(0);
      expect(instance.props.totalPages).toEqual(0);
      expect(instance.props.previousText).toEqual('previous');
      expect(instance.props.nextText).toEqual('next');
    });
  });

  describe('Children', () => {
    describe('has more than 1 page', () => {
      beforeEach(() => {
        wrapper = shallowPagination({ currentPage: 1, totalPages: 2 });
      });

      it('returns some items', () => {
        expect(wrapper.find(Button)).toExist();
      });
    });

    describe('has 1 page only', () => {
      beforeEach(() => {
        wrapper = shallowPagination({ currentPage: 1, totalPages: 1 });
      });

      it('renders nothing', () => {
        expect(wrapper).toBeEmptyRender();
      });
    });

    describe('no currentPage', () => {
      beforeEach(() => {
        wrapper = shallowPagination({ currentPage: 0, totalPages: 2 });
      });

      it('renders nothing', () => {
        expect(wrapper).toBeEmptyRender();
      });
    });

    describe('no totalPages', () => {
      beforeEach(() => {
        wrapper = shallowPagination({ currentPage: 1, totalPages: 0 });
      });

      it('renders nothing', () => {
        expect(wrapper).toBeEmptyRender();
      });
    });
  });

  describe('Methods', () => {
    let instance;

    describe('getPaginationOptions', () => {
      describe('fewer than 10 pages', () => {
        beforeEach(() => {
          wrapper = shallowPagination({ currentPage: 5, totalPages: 9 });
        });

        it('returns an array of page options', () => {
          const options = wrapper.instance().getPaginationOptions();

          expect(options).toHaveLength(9);
          expect(options).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
      });

      describe('more than 10 pages', () => {
        describe('current page near first page', () => {
          beforeEach(() => {
            wrapper = shallowPagination({ currentPage: 5, totalPages: 11 });
          });

          it('returns an array of page options', () => {
            const options = wrapper.instance().getPaginationOptions();

            expect(options).toHaveLength(9);
            expect(options).toEqual([1, 2, 3, 4, 5, 6, 7, '...', 11]);
          });
        });

        describe('current page near last page', () => {
          beforeEach(() => {
            wrapper = shallowPagination({ currentPage: 7, totalPages: 11 });
          });

          it('returns an array of page options', () => {
            const options = wrapper.instance().getPaginationOptions();

            expect(options).toHaveLength(9);
            expect(options).toEqual([1, '...', 5, 6, 7, 8, 9, 10, 11]);
          });
        });

        describe('current page in the middle', () => {
          beforeEach(() => {
            wrapper = shallowPagination({ currentPage: 6, totalPages: 11 });
          });

          it('returns an array of page options', () => {
            const options = wrapper.instance().getPaginationOptions();

            expect(options).toHaveLength(9);
            expect(options).toEqual([1, '...', 4, 5, 6, 7, 8, '...', 11]);
          });
        });
      });
    });

    describe('paginate', () => {
      let paginateSpy;

      beforeEach(() => {
        paginateSpy = createSpy();
        wrapper = shallowPagination({
          currentPage: 1,
          totalPages: 10,
          paginate: paginateSpy
        });
      });

      it('calls paginate', () => {
        const newPage = 4;
        wrapper.instance().paginate(newPage);

        expect(paginateSpy).toHaveBeenCalledTimes(1);
        expect(paginateSpy).toHaveBeenLastCalledWith(newPage);
      });
    });

    describe('renderPaginationItem', () => {
      const currentPage = 1;

      beforeEach(() => {
        wrapper = shallowPagination({
          currentPage,
          totalPages: 10
        });
        instance = wrapper.instance();
      });

      describe('current page', () => {
        let button;
        const page = currentPage;

        beforeEach(() => {
          button = shallow(
            <div>{instance.renderPaginationItem(page, 1)}</div>
          ).find(Button);
        });

        it('renders the option', () => {
          expect(button).toExist();
          expect(button).toHaveProp({
            variant: 'primary',
            mx: 'smallest'
          });
          expect(button).not.toBeDisabled();
        });

        it('calls paginate on click', () => {
          const paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');

          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(page);
        });
      });

      describe('not current page', () => {
        let button;
        const page = 2;

        beforeEach(() => {
          button = shallow(
            <div>{instance.renderPaginationItem(page, 1)}</div>
          ).find(Button);
        });

        it('renders the option', () => {
          expect(button).toExist();
          expect(button).toHaveProp({
            variant: 'minimal',
            mx: 'smallest'
          });
          expect(button).not.toBeDisabled();
        });

        it('calls paginate on click', () => {
          const paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');

          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(page);
        });
      });

      describe('ellipsis page', () => {
        let button;
        const page = '...';

        beforeEach(() => {
          button = shallow(
            <div>{instance.renderPaginationItem(page, 1)}</div>
          ).find(Button);
        });

        it('renders the option', () => {
          expect(button).toExist();
          expect(button).toHaveProp({
            variant: 'minimal',
            mx: 'smallest'
          });
        });

        it('disabled', () => {
          expect(button).toBeDisabled();
        });

        it('no onClick event', () => {
          expect(button).not.toHaveProp('onClick');
        });
      });
    });

    describe('renderPreviousItem', () => {
      let button;

      describe('current page is first page', () => {
        beforeEach(() => {
          wrapper = shallowPagination({
            currentPage: 1,
            totalPages: 10
          });
          instance = wrapper.instance();

          button = shallow(<div>{instance.renderPreviousItem()}</div>).find(
            Button
          );
        });

        it('renders item', () => {
          expect(button).toExist();
        });

        it('is disabled', () => {
          expect(button).toBeDisabled();
        });
      });

      describe('current page is not first page', () => {
        beforeEach(() => {
          wrapper = shallowPagination({
            currentPage: 3,
            totalPages: 10
          });
          instance = wrapper.instance();

          button = shallow(<div>{instance.renderPreviousItem()}</div>).find(
            Button
          );
        });

        it('renders item', () => {
          expect(button).toExist();
        });

        it('is not disabled', () => {
          expect(button).not.toBeDisabled();
        });

        it('calls paginate on click', () => {
          const paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');

          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(2);
        });
      });
    });

    describe('renderNextItem', () => {
      let button;

      describe('current page is last page', () => {
        beforeEach(() => {
          wrapper = shallowPagination({
            currentPage: 10,
            totalPages: 10
          });
          instance = wrapper.instance();

          button = shallow(<div>{instance.renderNextItem()}</div>).find(Button);
        });

        it('renders item', () => {
          expect(button).toExist();
        });

        it('is disabled', () => {
          expect(button).toBeDisabled();
        });
      });

      describe('current page is not last page', () => {
        beforeEach(() => {
          wrapper = shallowPagination({
            currentPage: 8,
            totalPages: 10
          });
          instance = wrapper.instance();

          button = shallow(<div>{instance.renderNextItem()}</div>).find(Button);
        });

        it('renders item', () => {
          expect(button).toExist();
        });

        it('is not disabled', () => {
          expect(button).not.toBeDisabled();
        });

        it('calls paginate on click', () => {
          const paginateSpy = jest.spyOn(instance, 'paginate');
          button.simulate('click');

          expect(paginateSpy).toHaveBeenCalled();
          expect(paginateSpy).toHaveBeenLastCalledWith(9);
        });
      });
    });
  });
});
