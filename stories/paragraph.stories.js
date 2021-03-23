import notes from './paragraph.md';
import { Paragraph } from '../src';

export default {
  title: 'Paragraph'
};

export const Default = () => (
  <>
    <Paragraph variant="ui">Paragraph (UI)</Paragraph>
    <Paragraph variant="longForm">Paragraph (Long Form)</Paragraph>
    <Paragraph variant="tiny">Paragraph (Tiny)</Paragraph>
  </>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
