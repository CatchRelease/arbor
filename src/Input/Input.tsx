import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useState
} from 'react';

import FormField from '../FormField';
import StyledInput, { Props as StyledInputProps } from './StyledInput';

type Props = InputHTMLAttributes<HTMLInputElement> &
  StyledInputProps & {
    caption?: string | null;
    id: string;
    label?: string;
    labelAside?: ReactNode;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: string;
    validate?: (value?: string | number | readonly string[]) => string | null;
  };

const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  (
    {
      caption = '',
      label = '',
      labelAside = null,
      id,
      onBlur,
      onChange,
      type = 'text',
      validate = () => undefined,
      value: propValue,
      ...props
    },
    ref
  ) => {
    const [touched, setTouched] = useState(false);
    const [value, setValue] = useState(propValue);

    const errorMessage = touched && validate(value);

    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setTouched(true);

      if (onBlur) {
        onBlur(event);
      }
    };

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      setValue(event.target.value);

      if (onChange) {
        onChange(event);
      }
    };

    return (
      <FormField
        caption={errorMessage || caption}
        id={id}
        label={label}
        labelAside={labelAside}
      >
        <StyledInput
          {...{ ...props, id, ref, type }}
          value={propValue ? propValue.toString() : propValue}
          isInvalid={!!errorMessage}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </FormField>
    );
  }
);

export default Input;
