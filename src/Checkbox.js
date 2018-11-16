import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rem } from 'polished';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';
import Icon from './Icon';

const CheckIcon = ({ fill = 'currentColor', ...props }) => (
  <svg width="10" height="7" viewBox="0 0 10 7" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
    />
  </svg>
);

CheckIcon.propTypes = {
  fill: PropTypes.string.isRequired
};

const MinusIcon = ({ fill = 'currentColor', ...props }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" {...props}>
    <path
      fill={fill}
      fillRule="evenodd"
      d="M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
    />
  </svg>
);

MinusIcon.propTypes = {
  fill: PropTypes.string.isRequired
};

const Label = styled(Flex.withComponent('label'))`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Input = styled(Box.withComponent('input'))`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
`;

const StyledCheckbox = ({ children, ...props }) => (
  <Flex
    bg="white"
    border="1px solid"
    borderColor="grey60"
    borderRadius="small"
    color="white"
    alignItems="center"
    justifyContent="center"
    width={rem('16px')}
    height={rem('16px')}
    {...props}
  >
    {children}
  </Flex>
);

const Checkbox = ({
  id,
  name,
  label,
  disabled,
  isInvalid,
  checked,
  onChange,
  value,
  indeterminate,
  icon,
  ...props
}) => (
  <Label alignItems="center" my="regular" {...props}>
    <Input
      id={id}
      type="checkbox"
      name={name}
      value={value}
      checked={checked || indeterminate}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={isInvalid}
    />
    {!checked && !disabled && <StyledCheckbox />}
    {checked &&
      !disabled && (
        <StyledCheckbox
          borderColor="blue"
          bg={indeterminate ? 'white' : 'blue'}
          color={indeterminate ? 'blue' : 'white'}
        >
          {indeterminate ? <MinusIcon /> : <CheckIcon />}
        </StyledCheckbox>
      )}
    {disabled && (
      <StyledCheckbox
        borderColor="grey20"
        bg={checked ? 'grey20' : 'white'}
        color={checked ? 'grey50' : 'white'}
      >
        {indeterminate ? <MinusIcon /> : <CheckIcon />}
      </StyledCheckbox>
    )}
    {icon && (
      <Icon
        fontSize="24px"
        name={icon}
        color={disabled ? 'grey20' : 'grey50'}
        ml="smaller"
      />
    )}
    {label && (
      <Text.span
        fontSize="size2"
        color={disabled ? 'grey40' : 'grey100'}
        ml={icon ? 'smallest' : 'smaller'}
      >
        {label}
      </Text.span>
    )}
  </Label>
);

Checkbox.propTypes = {
  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string.isRequired,

  /**
   * The name attribute of the checkbox.
   */
  name: PropTypes.string,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the radio displays a "minus" icon.
   */
  indeterminate: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the radio is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool
};

Checkbox.defaultProps = {
  name: '',
  label: '',
  value: null,
  checked: false,
  indeterminate: false,
  onChange: () => {},
  disabled: false,
  isInvalid: false
};

export default Checkbox;
