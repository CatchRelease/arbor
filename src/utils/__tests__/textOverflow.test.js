import { create } from 'react-test-renderer';
import styled from '@emotion/styled';

import textOverflow from '../textOverflow';

describe('textOverflow', () => {
  it('provides support for passing in textOverflow css as prop', () => {
    const ExampleComponent = styled.p`
      ${textOverflow};
    `;

    const rendered = create(
      <ExampleComponent textOverflow="ellipsis">Hello World</ExampleComponent>
    );

    expect(rendered.toJSON()).toHaveStyleRule('text-overflow', 'ellipsis');
  });
});
