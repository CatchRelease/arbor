import { ChangeEventHandler, ComponentProps, FC, ReactNode } from 'react';
import CheckboxLabel from './CheckboxLabel';
declare type CheckboxLabelProps = ComponentProps<typeof CheckboxLabel>;
export declare type Props = CheckboxLabelProps & {
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
declare const Checkbox: FC<Props>;
export default Checkbox;
