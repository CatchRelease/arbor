import { create } from 'react-test-renderer';
import styled from '@emotion/styled';

import textTransform from '../textTransform';

describe('textTransform', () => {
  it('provides support for passing in textTransform css as prop', () => {
    const ExampleComponent = styled.p`
      ${textTransform};
    `;

    const rendered = create(
      <ExampleComponent textTransform="lowercase">Hello World</ExampleComponent>
    );

    expect(rendered.toJSON()).toHaveStyleRule('text-transform', 'lowercase');
  });
});
