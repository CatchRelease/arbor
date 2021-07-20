import { ChangeEventHandler, FC, FocusEventHandler, InputHTMLAttributes, ReactNode } from 'react';
import { Props as StyledInputProps } from './StyledInput';
declare type Props = InputHTMLAttributes<HTMLInputElement> & StyledInputProps & {
    caption?: string | null;
    id: string;
    label?: string;
    labelAside?: ReactNode;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: string;
    validate?: (value?: string | number | readonly string[]) => string | null;
};
declare const Input: FC<Props>;
export default Input;
