import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DateTimePicker, Heading } from '../src';

const stories = storiesOf('DateTimePicker', module);

import 'react-datetime/css/react-datetime.css';

class DateTimePickerStories extends React.Component {
  state = {
    selectedTime: new Date()
  };

  onChange = momentOb => {
    this.setState({ selectedTime: momentOb });
  };

  render() {
    const { selectedTime } = this.state;

    return (
      <>
        <Box mb="large">
          Selected:{' '}
          {selectedTime && selectedTime.format
            ? selectedTime.format()
            : 'Nothing'}
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

stories.add('default', () => <DateTimePickerStories />);
