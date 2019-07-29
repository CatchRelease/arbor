import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';
import { withTheme } from 'emotion-theming';
import Loader from 'react-loader';

const Spinner = ({ children, color, spin, ...props }) => {
  const themedColor = themeGet(`colors.${color}`, color)(props);

  return (
    <Loader {...{ color: themedColor, loaded: !spin, ...props }}>
      {children}
    </Loader>
  );
};

Spinner.propTypes = {
  /**
   * All Spin.js options are supported as props via react-loader
   * https://www.npmjs.com/package/react-loader
   */

  /**
   * Content to render inside the loader when loaded
   * */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),

  /**
   * Color for the spinner, supports colors from theme.
   */
  color: PropTypes.string,

  /**
   * Whether or not to show the spinner.
   */
  spin: PropTypes.bool
};

Spinner.defaultProps = {
  children: undefined,
  color: 'monochrome.black',
  spin: false
};

export default withTheme(Spinner);
