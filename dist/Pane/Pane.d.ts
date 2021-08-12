import { FC, Ref } from 'react';
import { GridProps } from '../Grid';
export declare type Props = GridProps & {
    innerRef?: Ref<unknown>;
};
declare const Pane: FC<Props>;
export default Pane;
