import PropTypes from 'prop-types';

import Icon from '../Icon';
import Text from '../Text';

import RadioButtonIcon from './RadioButtonIcon';
import RadioButtonInput from './RadioButtonInput';
import RadioButtonLabel from './RadioButtonLabel';
import StyledRadioButton from './StyledRadioButton';

const RadioButton = ({
  id,
  name,
  label,
  disabled,
  isInvalid,
  checked,
  onChange,
  value,
  icon,
  ...props
}) => (
  <RadioButtonLabel alignItems="center" my="regular" {...props}>
    <RadioButtonInput
      id={id}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={isInvalid}
    />

    <StyledRadioButton {...{ disabled, checked }}>
      <RadioButtonIcon {...{ checked }} />
    </StyledRadioButton>

    {icon && (
      <Icon
        fontSize="24px"
        name={icon}
        color={disabled ? 'icon.disabled' : 'icon.default'}
        ml="smaller"
      />
    )}

    <Text
      as="span"
      fontSize="size4"
      color={disabled ? 'text.disabled' : 'text.default'}
      ml={icon ? 'smallest' : 'smaller'}
    >
      {label}
    </Text>
  </RadioButtonLabel>
);

RadioButton.propTypes = {
  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The icon to display alongside the label.
   */
  icon: PropTypes.elementType,

  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string.isRequired,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.node.isRequired,

  /**
   * The name attribute of the checkbox.
   */
  name: PropTypes.string.isRequired,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string
};

RadioButton.defaultProps = {
  checked: false,
  disabled: false,
  icon: undefined,
  isInvalid: false,
  onChange: () => {},
  value: ''
};

export default RadioButton;
