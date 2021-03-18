import { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DateTimePicker, Heading, Text } from '../src';

import 'react-datetime/css/react-datetime.css';

import notes from './dateTimepicker.md';

const stories = storiesOf('DateTimePicker', module);

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
          <Text.Span>Selected:</Text.Span>
          <Text.Span>
            {selectedTime && selectedTime.format
              ? selectedTime.format()
              : 'Nothing'}
          </Text.Span>
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

stories.add('default', () => <DateTimePickerStories />, {
  notes: { markdown: notes }
});
