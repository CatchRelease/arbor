import notes from './select.md';
import { Flex, Icon, Select, Text, Tooltip } from '../src';

const options = (
  <>
    <option value="hellYes">Hell Yes</option>
    <option value="yes">Yes</option>
    <option value="maybe">maybe</option>
    <option value="no">No</option>
    <option value="hellNo">Hell No</option>
  </>
);

export default {
  title: 'Select'
};

export const Default = () => (
  <form>
    <Select
      caption="My select caption"
      defaultValue="yes"
      id="example-select"
      label="Example Select"
      name="exmaple-select"
      placeholder="More text than a standard input"
    >
      {options}
    </Select>
    <Select
      defaultValue="yes"
      disabled
      id="disabled-select"
      label="Disabled Select"
      name="disabled-select"
    >
      {options}
    </Select>
    <Select
      caption="This is a large select"
      defaultValue="yes"
      id="large-select"
      label="Large Select"
      large
      name="large-select"
      placeholder="Placeholder"
    >
      {options}
    </Select>
    <Select
      defaultValue="yes"
      id="select-with-node-label"
      label={
        <Flex>
          <Text>Select w/ tooltip</Text>
          <Tooltip content="This is a tooltip">
            <Icon name="info-sign" color="icon.default" ml="smallest" />
          </Tooltip>
        </Flex>
      }
      name="disabled-select"
    >
      {options}
    </Select>
  </form>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};
