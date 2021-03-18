import ReactModal from 'react-modal';
import { Global, css } from '@emotion/react';
import { shallow } from 'enzyme';

import buildModalCss from '../buildModalCss';
import { Modal } from '../Modal';

jest.mock('../buildModalCss');

describe('<Modal />', () => {
  it('renders a Global for the modal styles', () => {
    const modal = shallow(<Modal>My Modal</Modal>);

    expect(modal.find(Global)).toExist();
  });

  it('generates CSS with given overrides', () => {
    const modalCss = css`
      background: red;
    `;
    const overlayCss = css`
      background: blue;
    `;
    const theme = 'theme';

    shallow(<Modal {...{ modalCss, overlayCss, theme }}>My Modal</Modal>);

    expect(buildModalCss).toHaveBeenCalledWith({ theme, modalCss, overlayCss });
  });

  it('passes the modal css to the Global styles', () => {
    const mockStyle = css`
      background: orange;
    `;
    buildModalCss.mockReturnValue(mockStyle);

    const modal = shallow(<Modal>My Modal</Modal>);

    expect(modal.find(Global)).toHaveProp({ styles: mockStyle });
  });

  it('renders a ReactModal with arbor classNames', () => {
    const modal = shallow(<Modal>My Modal</Modal>);

    expect(modal.find(ReactModal)).toHaveProp({
      overlayClassName: 'ArborModalOverlay',
      className: 'ArborModal'
    });
  });

  it('passes props to the ReactModal', () => {
    const modal = shallow(<Modal myProp="foo">My Modal</Modal>);

    expect(modal.find(ReactModal)).toHaveProp({
      myProp: 'foo'
    });
  });

  it('does not pass theme to the Reactmodal', () => {
    const modal = shallow(<Modal theme="foo">My Modal</Modal>);

    expect(modal.find(ReactModal)).not.toHaveProp({
      theme: 'foo'
    });
  });
});
