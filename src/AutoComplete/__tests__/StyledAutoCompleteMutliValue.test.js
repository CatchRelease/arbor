import { shallow } from 'enzyme';

import colorForString from '../../utils/colorForString';

import StyledAutoCompleteMultiValue from '../StyledAutoCompleteMultiValue';

jest.mock('../../utils/colorForString.js');

const noop = () => null;

describe('<StyledAutoCompleteMultiValue />', () => {
  const props = {
    data: {
      label: 'Apples'
    },
    removeProps: {
      onClick: noop,
      onMouseDown: noop,
      onTouchEnd: noop
    }
  };

  it('uses colorForString to determine badge color', () => {
    colorForString.mockReturnValue('green');

    const wrapper = shallow(<StyledAutoCompleteMultiValue {...props} />);

    expect(wrapper.find('Badge')).toHaveProp({ paletteColor: 'green' });
  });

  context('readOnly prop', () => {
    it('does not display the closer icon if readOnly', () => {
      const newProps = {
        ...props,
        readOnly: true
      };

      const wrapper = shallow(<StyledAutoCompleteMultiValue {...newProps} />);
      expect(wrapper.props().iconEnd).toBeFalsy();
    });

    it('does displays the closer when not readOnly', () => {
      const newProps = {
        ...props,
        readOnly: false
      };

      const wrapper = shallow(<StyledAutoCompleteMultiValue {...newProps} />);
      expect(wrapper.props().iconEnd).toBeTruthy();
    });
  });
});
