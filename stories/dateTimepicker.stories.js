import { Component } from 'react';

import { Box, DateTimePicker, Heading, Text } from '../src';

import 'react-datetime/css/react-datetime.css';

import notes from './dateTimepicker.md';

export default {
  title: 'DateTimePicker'
};

class DateTimePickerStories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTime: new Date()
    };
  }

  onChange = (momentOb) => {
    this.setState({ selectedTime: momentOb });
  };

  render() {
    const { selectedTime } = this.state;

    return (
      <>
        <Box mb="large">
          <Text as="span">Selected:</Text>
          <Text as="span">
            {selectedTime && selectedTime.format
              ? selectedTime.format()
              : 'Nothing'}
          </Text>
        </Box>
        <Box width="200px">
          <Heading.H1 mb="large">TimePicker</Heading.H1>

          <Heading.H3 mb="small">Default</Heading.H3>
          <DateTimePicker value={selectedTime} onChange={this.onChange} />
        </Box>
      </>
    );
  }
}

export const Default = () => <DateTimePickerStories />;

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
