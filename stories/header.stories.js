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
  title: 'Header',
  argTypes: {
    buttonCount: {
      control: {
        type: 'select',
        options: buttonOptions
      }
    },
    headingTag: {
      control: {
        type: 'select',
        options: headingOptions
      }
    }
  }
};

export const Default = (args) => {
  const { buttonCount, headingTag, headingText } = args;

  const DynamicHeading = Heading[headingTag];

  return (
    <Grid gridGap="large">
      <section>
        <Header>
          <DynamicHeading mb="0">{headingText}</DynamicHeading>
          {buttonCount > 1 && <Button variant="secondary">Secondary</Button>}
          {buttonCount > 0 && <Button variant="primary">Primary</Button>}
        </Header>
      </section>
    </Grid>
  );
};

Default.args = {
  buttonCount: 2,
  headingTag: 'H1',
  headingText: 'Section Header'
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
