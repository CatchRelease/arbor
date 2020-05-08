import DateTimePicker from 'react-datetime';
import styled from '@emotion/styled';
import inputStyles from '../Input/inputStyles';

import 'react-datetime/css/react-datetime.css';

const StyledDateTimePicker = styled(DateTimePicker)`
  color: ${(props) => props.theme.colors.text.default};
  font-family: ${(props) => props.theme.brandFont};
  font-size: ${(props) => props.theme.fontSizes.size4};

  & .form-control {
    ${inputStyles};
  }

  & .rdtPicker th,
  & .rdtPicker td {
    vertical-align: middle;
  }
`;

export default StyledDateTimePicker;
