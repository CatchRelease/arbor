import {
  ChangeEvent,
  ChangeEventHandler,
  ReactNode,
  useState,
  VFC
} from 'react';

import RadioButton, { RadioButtonProps } from '../RadioButton';

const groupOnChange = (
  e: ChangeEvent<HTMLInputElement>,
  setCheckedValueState: (value: string) => void,
  onChange: ChangeEventHandler<HTMLInputElement>
) => {
  const {
    target: { value }
  } = e;
  setCheckedValueState(value);
  onChange(e);
};

type Option = {
  disabled?: boolean;
  label: ReactNode;
  value: string;
};

export type Props = {
  buttonProps?: Partial<RadioButtonProps>;
  checkedValue?: string;
  disabled?: boolean;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  options: Option[];
};

const RadioButtonGroup: VFC<Props> = ({
  buttonProps = {},
  checkedValue = null,
  disabled = false,
  name,
  onChange,
  options
}) => {
  const [checkedValueState, setCheckedValueState] = useState(checkedValue);

  const buttonOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    groupOnChange(e, setCheckedValueState, onChange);
  };

  return (
    <>
      {options.map(({ label, value, disabled: optionDisabled }, idx) => (
        <RadioButton
          {...{
            id: `${name}:${value}`,
            key: `${name}:${value}`,
            name,
            disabled: disabled || optionDisabled,
            label,
            value,
            onChange: buttonOnChange,
            checked: checkedValueState
              ? checkedValueState === value
              : idx === 0,
            ...buttonProps
          }}
        />
      ))}
    </>
  );
};

export default RadioButtonGroup;
