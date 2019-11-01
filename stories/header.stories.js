import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';

import notes from './header.md';
import { Button, Grid, Heading, Header } from '../src';

const stories = storiesOf('Header', module);
stories.addDecorator(withKnobs);

const headingOptions = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
};

const buttonOptions = {
  0: 0,
  1: 1,
  2: 2
};

stories.add(
  'default',
  () => {
    const DynamicHeading = Heading[select('Heading Tag', headingOptions, 'h1')];
    const buttonCount = select('Button Count', buttonOptions, 2);

    return (
      <Grid gridGap="large">
        <section>
          <Header>
            <DynamicHeading mb="0">
              {text('Heading Text', 'Section Header')}
            </DynamicHeading>
            {buttonCount > 1 && <Button variant="secondary">Secondary</Button>}
            {buttonCount > 0 && <Button variant="primary">Primary</Button>}
          </Header>
        </section>
      </Grid>
    );
  },
  { notes: { markdown: notes } }
);
