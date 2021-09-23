import { FC, ReactNode } from 'react';
declare type Props = {
    caption?: string | null;
    id: string;
    label?: ReactNode | string;
    labelAside?: ReactNode;
};
declare const FormField: FC<Props>;
export default FormField;
