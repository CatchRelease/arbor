import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DateTimePicker, Heading, Text } from '../src';

import 'react-datetime/css/react-datetime.css';

import notes from './dateTimepicker.md';

const stories = storiesOf('DateTimePicker', module);

class DateTimePickerStories extends React.Component {
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
          <Text.span>Selected:</Text.span>
          <Text.span>
            {selectedTime && selectedTime.format
              ? selectedTime.format()
              : 'Nothing'}
          </Text.span>
        </Box>
        <Box width="200px">
          <Heading.h1 mb="large">TimePicker</Heading.h1>

          <Heading.h3 mb="small">Default</Heading.h3>
          <DateTimePicker value={selectedTime} onChange={this.onChange} />
        </Box>
      </>
    );
  }
}

stories.add('default', () => <DateTimePickerStories />, {
  notes: { markdown: notes }
});
