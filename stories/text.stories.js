import notes from './text.md';
import { Text } from '../src';

export default {
  title: 'Text'
};

export const Default = () => (
  <Text>The quick brown fox jumps over the lazy dog</Text>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};
