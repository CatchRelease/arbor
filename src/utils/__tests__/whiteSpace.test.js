import { create } from 'react-test-renderer';
import styled from '@emotion/styled';

import whiteSpace from '../whiteSpace';

describe('whiteSpace', () => {
  it('provides support for passing in whiteSpace css as prop', () => {
    const ExampleComponent = styled.p`
      ${whiteSpace};
    `;

    const rendered = create(
      <ExampleComponent whiteSpace="nowrap">Hello World</ExampleComponent>
    );

    expect(rendered.toJSON()).toHaveStyleRule('white-space', 'nowrap');
  });
});
