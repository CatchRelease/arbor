import { shallow } from 'enzyme';

import Box, { Props as BoxProps } from '../Box';

describe('Box', () => {
  it('supports appropriate element props based on "as" prop', () => {
    expect(shallow(<Box as="a" href="lol" />)).toMatchSnapshot();
    expect(shallow(<Box as="img" src="lol" />)).toMatchSnapshot();
  });

  it('supports generic style props such as borderTop with or without "as"', () => {
    expect(shallow(<Box borderTop="42" />)).toMatchSnapshot();
    expect(shallow(<Box as="a" borderTop="42" />)).toMatchSnapshot();
  });

  it('exports props compatible with itself', () => {
    const props: BoxProps = { p: 'regular' };

    const tree = shallow(<Box {...props}>Lalala</Box>);

    expect(tree).toMatchSnapshot();
  });
});
