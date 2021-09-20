import { ChangeEventHandler, ComponentProps, FC, ReactNode } from 'react';

import Icon from '../Icon';
import Text from '../Text';

import CheckboxIcon from './CheckboxIcon';
import CheckboxInput from './CheckboxInput';
import CheckboxLabel from './CheckboxLabel';
import StyledCheckbox from './StyledCheckbox';

type CheckboxLabelProps = ComponentProps<typeof CheckboxLabel>;

export type Props = CheckboxLabelProps & {
  checked?: boolean;
  disabled?: boolean;
  icon?: string;
  id: string;
  indeterminate?: boolean;
  isInvalid?: boolean;
  label: ReactNode;
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
};

const Checkbox: FC<Props> = ({
  checked = false,
  disabled = false,
  icon,
  id,
  indeterminate = false,
  isInvalid = false,
  label,
  name,
  onChange = () => {},
  value = '',
  ...props
}) => (
  <CheckboxLabel alignItems="center" my="regular" {...props}>
    <CheckboxInput
      id={id}
      type="checkbox"
      name={name}
      value={value}
      checked={checked || indeterminate}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={isInvalid}
    />

    <StyledCheckbox {...{ disabled, checked, indeterminate }}>
      <CheckboxIcon {...{ checked, indeterminate }} />
    </StyledCheckbox>

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
  </CheckboxLabel>
);

export default Checkbox;
