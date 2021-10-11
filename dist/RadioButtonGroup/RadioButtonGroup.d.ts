import { ChangeEventHandler, ReactNode, VFC } from 'react';
import { RadioButtonProps } from '../RadioButton';
declare type Option = {
    disabled?: boolean;
    label: ReactNode;
    value: string;
};
export declare type Props = {
    buttonProps?: Partial<RadioButtonProps>;
    checkedValue?: string;
    disabled?: boolean;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    options: Option[];
};
declare const RadioButtonGroup: VFC<Props>;
export default RadioButtonGroup;
