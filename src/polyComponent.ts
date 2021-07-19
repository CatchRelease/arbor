import { ElementType, ComponentPropsWithRef } from 'react';

// Support for polymorphic components based on "as" prop.
// Thanks to https://github.com/emotion-js/emotion/issues/2266#issuecomment-797588173

type AsProp<C extends ElementType> = {
  as?: C;
};

type PolyProps<C extends ElementType, P = unknown> = AsProp<C> &
  Omit<ComponentPropsWithRef<C>, keyof AsProp<C>> &
  P;

export type PolyComponent<C extends ElementType, P = unknown> = <
  E extends ElementType = C
>(
  props: PolyProps<E, P>
) => JSX.Element | null;
