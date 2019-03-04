import React from 'react';
import { DateUtils } from 'react-day-picker';
import { storiesOf } from '@storybook/react';
import { date, withKnobs } from '@storybook/addon-knobs';

import 'react-day-picker/lib/style.css';

import {
  Box,
  Button,
  DatePicker,
  DatePickerInput,
  Flex,
  Heading,
  Icon,
  Popover
} from '../src';

const stories = storiesOf('DatePicker', module);
stories.addDecorator(withKnobs);

const today = new Date();
const defaultBefore = DateUtils.addMonths(today, -2);
const defaultAfter = DateUtils.addMonths(today, 2);

class ControlledDatePickers extends React.Component {
  state = {
    selectedDay: undefined
  };

  onDayChange = day => {
    this.setState({ selectedDay: day });
  };

  onDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day
    });
  };

  render() {
    const { selectedDay } = this.state;
    const inputProps = {
      caption: `Day: ${
        selectedDay ? selectedDay.toLocaleDateString() : 'Not Chosen'
      }`,
      id: 'sotires-datepicker-input',
      label: 'Choose a Date'
    };

    const SimpleDatePicker = () => (
      <DatePicker
        disabledDays={{
          before: new Date(date('Diable Days Before', defaultBefore)),
          after: new Date(date('Diable Days After', defaultAfter))
        }}
        onDayClick={this.onDayClick}
        selectedDays={selectedDay}
      />
    );

    return (
      <Flex mt="largest" justifyContent="space-around">
        <Box>
          <Heading.h1 mb="large">DatePicker</Heading.h1>
          <SimpleDatePicker />
        </Box>

        <Box>
          <Heading.h1 mb="large">DatePickerInput</Heading.h1>
          <DatePickerInput
            dayPickerProps={{
              disabledDays: {
                before: new Date(date('Diable Days Before', defaultBefore)),
                after: new Date(date('Diable Days After', defaultAfter))
              }
            }}
            inputProps={inputProps}
            onDayChange={this.onDayChange}
            value={selectedDay}
          />
        </Box>

        <Box>
          <Heading.h1 mb="large">DatePicker In Popover</Heading.h1>
          <Popover content={<SimpleDatePicker />}>
            <Button
              iconStart={<Icon color="icon.default" name="calendar" />}
              size="small"
              variant="minimal"
            >
              {selectedDay ? selectedDay.toLocaleDateString() : 'Not Chosen'}
            </Button>
          </Popover>
        </Box>
      </Flex>
    );
  }
}

stories.add('default', () => <ControlledDatePickers />);
