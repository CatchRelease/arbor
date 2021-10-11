import { FormEventHandler, ReactNode, VFC } from 'react';
declare type Props = {
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
declare const RadioButton: VFC<Props>;
export default RadioButton;
