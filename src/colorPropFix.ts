import { StyledComponent } from '@emotion/styled';
import { ComponentProps, ComponentType } from 'react';
import { TextColorProps } from 'styled-system';

// Styled system and react have conflicting color props defined.
// When this creates a problem, this type can replace the conflicted color
// prop from the given component type with only the styled-system color prop.
export type WithColorPropFix<C extends ComponentType> = StyledComponent<
  Omit<ComponentProps<C>, 'color'> & TextColorProps
>;
