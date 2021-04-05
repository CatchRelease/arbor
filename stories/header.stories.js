import notes from './header.md';
import { Button, Grid, Heading, Header } from '../src';

export default {
  title: 'Header',
  argTypes: {
    buttonCount: {
      options: [0, 1, 2],
      control: {
        type: 'select'
      }
    },
    headingTag: {
      options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
      control: {
        type: 'select'
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
