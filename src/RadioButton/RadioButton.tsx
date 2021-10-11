import { FormEventHandler, ReactNode, VFC } from 'react';

import Icon from '../Icon';
import Text from '../Text';

import RadioButtonIcon from './RadioButtonIcon';
import RadioButtonInput from './RadioButtonInput';
import RadioButtonLabel from './RadioButtonLabel';
import StyledRadioButton from './StyledRadioButton';

type Props = {
  checked?: boolean;
  disabled?: boolean;
  icon?: string;
  id: string;
  isInvalid?: boolean;
  label: ReactNode;
  name: string;
  onChange?: FormEventHandler<HTMLElement>;
  value?: string;
};

const RadioButton: VFC<Props> = ({
  checked = false,
  disabled = false,
  icon,
  id,
  isInvalid = false,
  label,
  name,
  onChange = () => {},
  value = '',
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

export default RadioButton;
