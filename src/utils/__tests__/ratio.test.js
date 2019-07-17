import React from 'react';
import { create } from 'react-test-renderer';
import styled from '@emotion/styled';

import ratio from '../ratio';

describe('ratio', () => {
  it('provides support for passing in ratio css as prop', () => {
    const ExampleComponent = styled.div`
      ${ratio};
    `;

    const rendered = create(
      <ExampleComponent ratio={9 / 16}>Hello World</ExampleComponent>
    );

    expect(rendered.toJSON()).toHaveStyleRule('height', '0');
    expect(rendered.toJSON()).toHaveStyleRule('padding-bottom', '56.25%');
  });
});
