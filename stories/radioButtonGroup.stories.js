import notes from './radioButtonGroup.md';
import { Box, Flex, RadioButtonGroup } from '../src';

const onChange = (value) => {
  console.log('ch ch ch changed', value); // eslint-disable-line no-console
};

const groupOptions = [
  {
    label: 'RadioButton group (a)',
    value: 'a'
  },
  {
    label: 'RadioButton group (b)',
    value: 'b'
  },
  {
    label: 'RadioButton group (should be disabled) (c)',
    value: 'c',
    disabled: true
  },
  {
    label: 'RadioButton group (d)',
    value: 'd'
  }
];

export default {
  title: 'RadioButtonGroup',
  argTypes: {
    disabled: {
      name: 'disabled (group level)'
    }
  }
};

export const Default = (args) => (
  <Box p="larger">
    <RadioButtonGroup
      options={groupOptions}
      name="grouped"
      onChange={onChange}
      {...args}
    />

    <Flex flexDirection="row">
      <RadioButtonGroup
        options={groupOptions}
        name="grouped-across"
        onChange={onChange}
        {...args}
        buttonProps={{ mr: 'small' }}
      />
    </Flex>
  </Box>
);

Default.args = { disabled: false };
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
