import notes from './spinners.md';
import { Box, Heading, Spinner } from '../src';

export default {
  title: 'Spinners'
};

export const Default = (args) => (
  <Box as="section" p="regular">
    <Heading.H1>Spinners</Heading.H1>

    <Spinner {...args} diameter={['20px', '40px', '80px', '100px']}>
      I Loaded!
    </Spinner>
  </Box>
);

Default.args = {
  color: 'monochrome.black',
  left: '50%',
  opacity: 0.25,
  position: 'absolute',
  spin: true,
  top: '50%'
};
Default.parameters = { notes: { markdown: notes } };
