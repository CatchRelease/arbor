import { Component } from 'react';
import { DateUtils } from 'react-day-picker';
import PropTypes from 'prop-types';

import 'react-day-picker/lib/style.css';

import notes from './datepicker.md';
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

const today = new Date();
const defaultBefore = DateUtils.addMonths(today, -2);
const defaultAfter = DateUtils.addMonths(today, 2);

class ControlledDatePickers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined
    };
  }

  onDayChange = (day) => {
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
      label: 'Choose a Date'
    };

    const { disableDaysBefore: before, disableDaysAfter: after } = this.props;
    const disabledDays = { before, after };

    const SimpleDatePicker = () => (
      <DatePicker
        disabledDays={disabledDays}
        onDayClick={this.onDayClick}
        selectedDays={selectedDay}
      />
    );

    return (
      <Flex mt="largest" justifyContent="space-around">
        <Box>
          <Heading.H1 mb="large">DatePicker</Heading.H1>
          <SimpleDatePicker />
        </Box>

        <Box>
          <Heading.H1 mb="large">DatePickerInput</Heading.H1>
          <DatePickerInput
            dayPickerProps={{ disabledDays }}
            inputProps={{ ...inputProps, id: 'stories-datepicker-input-1' }}
            onDayChange={this.onDayChange}
            value={selectedDay}
          />
        </Box>

        <Box>
          <Heading.H1 mb="large">
            DatePickerInput with Sibling (z-index check)
          </Heading.H1>
          <DatePickerInput
            inputProps={{ ...inputProps, id: 'stories-datepicker-input-2' }}
            onDayChange={this.onDayChange}
            value={selectedDay}
          />
          <Button variant="primary" fullWidth>
            click me
          </Button>
        </Box>

        <Box>
          <Heading.H1 mb="large">DatePicker In Popover</Heading.H1>
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

ControlledDatePickers.propTypes = {
  disableDaysBefore: PropTypes.instanceOf(Date).isRequired,
  disableDaysAfter: PropTypes.instanceOf(Date).isRequired
};

export default {
  title: 'DatePicker',
  argTypes: {
    disableDaysBefore: {
      control: {
        type: 'date'
      }
    },
    disableDaysAfter: {
      control: {
        type: 'date'
      }
    }
  }
};

export const Default = (args) => <ControlledDatePickers {...args} />;

Default.args = {
  disableDaysBefore: defaultBefore,
  disableDaysAfter: defaultAfter
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
