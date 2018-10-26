import React from 'react';
import styled from 'react-emotion';
import { storiesOf } from '@storybook/react';

import { Button, Heading } from '../src';

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 10px 138px;
`;
const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px 138px;
`;

storiesOf('Buttons', module).add('default', () => (
  <div style={{ padding: '10px', width: '500px' }}>
    <Heading.h1>Sizes</Heading.h1>

    <SizeGrid>
      <Heading.h5>Small</Heading.h5>
      <Heading.h5>Medium</Heading.h5>
      <Heading.h5>Large</Heading.h5>
      <Heading.h5>Jumbo</Heading.h5>

      <Button size="small">Button Label</Button>
      <Button size="medium">Button Label</Button>
      <Button size="large">Button Label</Button>
      <Button size="jumbo">Button Label</Button>
    </SizeGrid>

    <Heading.h1>Style</Heading.h1>

    <ButtonGrid>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="minimal">Minimal</Button>

      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="minimal" disabled>
        Minimal
      </Button>
    </ButtonGrid>
  </div>
));
