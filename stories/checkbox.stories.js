import notes from './checkbox.md';
import { Box, Checkbox } from '../src';

export default {
  title: 'Checkbox'
};

export const Default = () => (
  <Box p="larger">
    <Checkbox label="Checkbox default" />
    <Checkbox checked label="Checkbox checked" />
    <Checkbox disabled label="Checkbox disabled" />
    <Checkbox disabled checked label="Checkbox checked disabled" />
    <Checkbox indeterminate label="Checkbox indeterminate" />
    <Checkbox checked indeterminate label="Checkbox checked indeterminate" />
    <Checkbox
      checked
      indeterminate
      disabled
      label="Checkbox checked indeterminate disabled"
    />

    <Box maxWidth="250px">
      <Checkbox label="This is a checkbox with a long label that wraps onto another line" />
    </Box>
  </Box>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };

export const WithIcon = (args) => (
  <Box p="larger">
    <Checkbox {...args} label="Checkbox default" />
    <Checkbox {...args} checked label="Checkbox checked" />
    <Checkbox {...args} disabled label="Checkbox disabled" />
    <Checkbox {...args} disabled checked label="Checkbox checked disabled" />
    <Checkbox {...args} indeterminate label="Checkbox indeterminate" />
    <Checkbox
      {...args}
      checked
      indeterminate
      label="Checkbox checked indeterminate"
    />
    <Checkbox
      {...args}
      checked
      indeterminate
      disabled
      label="Checkbox checked indeterminate disabled"
    />
  </Box>
);

WithIcon.args = { icon: 'download' };
WithIcon.storyName = 'with icon';
WithIcon.parameters = { notes: { markdown: notes } };
