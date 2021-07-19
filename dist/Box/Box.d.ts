import { BordersProps, BoxShadowProps, DisplayProps, GridAreaProps, HeightProps, PositionProps, WidthProps } from 'styled-system';
import { PolyComponent } from '../polyComponent';
import { TextProps } from '../Text';
export declare type Props = TextProps & BordersProps & BoxShadowProps & DisplayProps & HeightProps & GridAreaProps & PositionProps & WidthProps;
declare const Box: PolyComponent<'div', Props>;
export default Box;
