import { FC } from 'react';
import { Size } from './sizes';
import { Variant } from './variants';
import { Intent } from '../theme/colors/intent';
declare type Props = {
    disabled: boolean;
    intent: Intent;
    size: Size | Size[];
    variant: Variant;
};
declare const ButtonSpinner: FC<Props>;
export default ButtonSpinner;
