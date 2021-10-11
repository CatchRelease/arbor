import { ChangeEventHandler, ReactNode, VFC } from 'react';
import { Props as RadioButtonLabelProps } from './RadioButtonLabel';
export declare type Props = RadioButtonLabelProps & {
    checked?: boolean;
    disabled?: boolean;
    icon?: string;
    id: string;
    isInvalid?: boolean;
    label: ReactNode;
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: string;
};
declare const RadioButton: VFC<Props>;
export default RadioButton;
