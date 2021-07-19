import { StyledComponent } from '@emotion/styled';
import { ComponentProps, ComponentType } from 'react';
import { TextColorProps } from 'styled-system';
export declare type WithColorPropFix<C extends ComponentType> = StyledComponent<Omit<ComponentProps<C>, 'color'> & TextColorProps>;
