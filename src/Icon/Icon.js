/** @jsx jsx */
import React from 'react';
import { ClassNames, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import {
  color,
  display,
  fontSize,
  textAlign,
  space,
  textShadow,
  opacity
} from 'styled-system';
import { withTheme } from 'emotion-theming';
import PropTypes from 'prop-types';

const rotationStyles = ({ rotation }) =>
  rotation &&
  css`
    transform: rotate(${rotation}deg);
  `;

const StyledIcon = styled.i`
  ${color};
  ${display};
  ${fontSize};
  ${space};
  ${textAlign};
  ${rotationStyles};
  ${textShadow};
  ${opacity};
`;

StyledIcon.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...textShadow.propTypes,
  ...opacity.propTypes
};

const Icon = ({ name, theme, iconRef, ...props }) => {
  const { iconFontPrefix } = theme;

  return (
    <ClassNames>
      {({ cx }) => (
        <StyledIcon
          className={cx(iconFontPrefix, `${iconFontPrefix}-${name}`)}
          ref={iconRef}
          {...props}
        />
      )}
    </ClassNames>
  );
};

Icon.propTypes = {
  /**
   * Name of the icon to render. Must be a supported icon loaded via an icon
   * font on the page. The font prefix will be prepended and can be customized
   * via the theme iconFontPrefix variable.
   */
  name: PropTypes.string.isRequired,

  /**
   * Icon font rotation. Rotation will be passed in to the CSS transform
   * property using rotate.
   */
  rotation: PropTypes.oneOf(['90', '180', '270', null]),

  /**
   * Theme used for styling the Icon.
   */
  theme: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types

  /**
   * Ref from forward ref
   */
  iconRef: PropTypes.any // eslint-disable-line react/forbid-prop-types
};

Icon.defaultProps = {
  rotation: null,
  iconRef: null
};

const WithThemeIcon = withTheme(Icon);

export default React.forwardRef((props, ref) => {
  return <WithThemeIcon {...props} iconRef={ref} />;
});
