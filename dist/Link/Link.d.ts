import { ColorProps } from 'styled-system';
import { PolyComponent } from '../polyComponent';
declare type Variant = 'default' | 'muted' | 'brandLight' | 'brandDark';
declare type Props = ColorProps & {
    variant?: Variant;
};
declare const Link: PolyComponent<'a', Props>;
export default Link;
