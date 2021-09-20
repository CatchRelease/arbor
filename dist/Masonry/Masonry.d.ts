import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Props as MasonryContainerProps } from './MasonryContainer';
declare type Props = MasonryContainerProps & {
    children: ReactElement[];
    rowGap?: string;
};
declare const Masonry: {
    ({ children, rowGap, ...props }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        rowGap: PropTypes.Requireable<string>;
    };
};
export default Masonry;
