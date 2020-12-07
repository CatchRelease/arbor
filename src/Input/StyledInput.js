import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { display, maxWidth } from 'styled-system';
import inputStyles from './inputStyles';

const largeStyles = ({ theme, large }) =>
  large &&
  css`
    padding: ${theme.space.small} ${theme.space.smaller};
  `;

const StyledInput = styled.input`
  ${inputStyles};
  ${display};
  ${largeStyles};
  ${maxWidth};
`;

StyledInput.propTypes = {
  large: PropTypes.bool,
  ...display.propTypes,
  ...maxWidth.propTypes
};

StyledInput.defaultProps = {
  as: 'input',
  large: false
};

export default StyledInput;
