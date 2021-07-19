import { ElementType, ComponentPropsWithRef } from 'react';
declare type AsProp<C extends ElementType> = {
    as?: C;
};
declare type PolyProps<C extends ElementType, P = unknown> = AsProp<C> & Omit<ComponentPropsWithRef<C>, keyof AsProp<C>> & P;
export declare type PolyComponent<C extends ElementType, P = unknown> = <E extends ElementType = C>(props: PolyProps<E, P>) => JSX.Element | null;
export {};
