import { select, text } from '@storybook/addon-knobs';

import notes from './header.md';
import { Button, Grid, Heading, Header } from '../src';

const headingOptions = {
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  h4: 'H4',
  h5: 'H5',
  h6: 'H6'
};

const buttonOptions = {
  0: 0,
  1: 1,
  2: 2
};

export default {
  title: 'Header'
};

export const Default = () => {
  const DynamicHeading = Heading[select('Heading Tag', headingOptions, 'H1')];
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
};

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};
